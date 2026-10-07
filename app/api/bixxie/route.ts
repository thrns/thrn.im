import {
  createStreamingRedactor,
  isExtractionAttempt,
  isOffTopicTask,
  validateConversation,
  type ConversationMessage,
} from "@/lib/bixxie/security";
import { requestDirectives } from "@/lib/bixxie/advocacy";
import { getBixxieFallback } from "@/lib/bixxie/fallback";
import { retrieveEvidenceContext, retrievePortfolioContext } from "@/lib/bixxie/grounding";
import { classifyProofTier } from "@/lib/bixxie/proof";
import { BIXXIE_SYSTEM_PROMPT } from "@/lib/bixxie/prompt";

const MAX_BODY_BYTES = 32 * 1024;
// Longer "explain" answers can take a while to finish streaming; keep enough
// headroom above typical generation time so the request timeout doesn't cut
// a legitimately-in-progress response short.
const REQUEST_TIMEOUT_MS = 45_000;

const RESPONSE_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "no-store, private",
  "X-Content-Type-Options": "nosniff",
};

type ModelStreamRequest = {
  system: string;
  message: string;
  signal: AbortSignal;
};

type ModelStreamFactory = (input: ModelStreamRequest) => AsyncIterator<string> | Promise<AsyncIterator<string>>;

class RequestBodyTooLargeError extends Error {}

function textResponse(body: string, status = 200): Response {
  return new Response(body, { status, headers: RESPONSE_HEADERS });
}

function isAllowedRequestOrigin(request: Request): boolean {
  const site = request.headers.get("sec-fetch-site");
  if (site && site !== "same-origin" && site !== "same-site") return false;

  const origin = request.headers.get("origin");
  if (process.env.NODE_ENV !== "production" || !origin) return true;

  const allowedOrigins = (process.env.BIXXIE_ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  return allowedOrigins.includes(origin);
}

async function readBoundedBody(request: Request): Promise<string> {
  const reader = request.body?.getReader();
  if (!reader) throw new SyntaxError("Missing request body.");

  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      totalBytes += value.byteLength;
      if (totalBytes > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new RequestBodyTooLargeError();
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const bytes = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}

function encodeDelimitedData(value: unknown): string {
  // Escape angle brackets after JSON encoding so user data cannot close the
  // delimiters that label the untrusted conversation and portfolio context.
  return JSON.stringify(value).replace(/</g, "\\u003c").replace(/>/g, "\\u003e");
}

function createUntrustedPrompt(messages: ConversationMessage[], portfolioContext: string): string {
  return [
    "<USER_CONVERSATION>",
    encodeDelimitedData(messages.map(({ role, content }) => ({ role, content }))),
    "</USER_CONVERSATION>",
    "<PORTFOLIO_CONTEXT>",
    encodeDelimitedData(portfolioContext),
    "</PORTFOLIO_CONTEXT>",
  ].join("\n");
}

async function createModelTextStream({ system, message, signal }: ModelStreamRequest): Promise<AsyncIterator<string>> {
  const { streamBixxieCompletion } = await import("@/lib/bixxie/provider");
  const stream = streamBixxieCompletion({
    system,
    message,
    // Higher than a strict-lookup setting on purpose: replies should read differently each time.
    // Facts stay grounded by the PORTFOLIO_CONTEXT rules and the structured-output schema.
    temperature: 0.8,
    maxOutputTokens: 3500,
    signal,
  });

  return stream[Symbol.asyncIterator]();
}

function responseStatusForError(error: unknown): number {
  if (!error || typeof error !== "object") return 503;
  const candidate = error as { status?: unknown; statusCode?: unknown };
  return candidate.status === 429 || candidate.statusCode === 429 ? 429 : 503;
}

// TEMP: Remove this metadata-only diagnostic logging after the Bixxie endpoint issue is resolved.
function logBixxieFailure(
  stage: "model_setup" | "first_chunk" | "stream",
  error: unknown,
  timedOut = false,
): void {
  const candidate = error && typeof error === "object"
    ? error as { status?: unknown; statusCode?: unknown }
    : {};
  const rawStatus = candidate.status ?? candidate.statusCode;
  const status = typeof rawStatus === "number" && Number.isInteger(rawStatus) && rawStatus >= 100 && rawStatus <= 599
    ? rawStatus
    : null;

  console.error("[bixxie] request failed", {
    stage,
    category: status !== null ? "upstream_http_error" : timedOut ? "timeout" : "no_http_status",
    status,
  });
}

function makeAbortController(request: Request): {
  controller: AbortController;
  cleanup: () => void;
} {
  const controller = new AbortController();
  const abortForRequest = () => controller.abort(request.signal.reason);

  if (request.signal.aborted) abortForRequest();
  else request.signal.addEventListener("abort", abortForRequest, { once: true });

  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  const cleanup = () => {
    clearTimeout(timeout);
    request.signal.removeEventListener("abort", abortForRequest);
  };

  return { controller, cleanup };
}

function createRedactedTextStream(
  iterator: AsyncIterator<string>,
  firstChunk: IteratorResult<string>,
  abort: AbortController,
  requestSignal: AbortSignal,
  cleanup: () => void,
): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const redactor = createStreamingRedactor();
  let pendingFirstChunk: IteratorResult<string> | undefined = firstChunk;
  let cancelled = false;
  // The response body is a single JSON object now (structured output — see
  // provider.ts), not independent JSONL lines, so a fallback can only be
  // enqueued as the *entire* body: appending a second complete JSON object
  // after any real bytes already sent would corrupt the stream the client
  // is parsing. If generation fails after real content went out, leave it
  // alone instead — the client's own truncation handling (see stream.ts)
  // already salvages whatever of that partial-but-genuine answer completed,
  // which is strictly better than throwing it away for a generic error.
  let sentAnyOutput = false;

  const enqueueRedacted = (controller: ReadableStreamDefaultController<Uint8Array>, text: string) => {
    const output = redactor.push(text);
    if (output && !cancelled) {
      controller.enqueue(encoder.encode(output));
      sentAnyOutput = true;
    }
  };

  const enqueueSafeFallback = (controller: ReadableStreamDefaultController<Uint8Array>) => {
    if (cancelled || sentAnyOutput) return;
    const fallbackRedactor = createStreamingRedactor();
    const fallback = getBixxieFallback("service-unavailable");
    const output = fallbackRedactor.push(fallback) + fallbackRedactor.flush();
    if (output) controller.enqueue(encoder.encode(output));
  };

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        while (true) {
          const next = pendingFirstChunk ?? await iterator.next();
          pendingFirstChunk = undefined;
          if (next.done) break;
          enqueueRedacted(controller, next.value);
        }

        const finalText = redactor.flush();
        if (finalText && !cancelled) controller.enqueue(encoder.encode(finalText));
        if (!cancelled) controller.close();
      } catch (error) {
        // Log metadata only (status code, timeout flag); never expose the
        // provider error itself or an unredacted/incomplete model line.
        if (!requestSignal.aborted) {
          logBixxieFailure("stream", error, abort.signal.aborted);
        }
        enqueueSafeFallback(controller);
        if (!cancelled) controller.close();
      } finally {
        cleanup();
      }
    },
    async cancel() {
      cancelled = true;
      abort.abort();
      cleanup();
      try {
        await iterator.return?.();
      } catch {
        // Cancellation is best-effort and must not surface upstream details.
      }
    },
  });
}

function isJsonContentType(request: Request): boolean {
  const contentType = request.headers.get("content-type");
  return Boolean(contentType && contentType.split(";", 1)[0].trim().toLowerCase() === "application/json");
}

export async function handleBixxieRequest(
  request: Request,
  createTextStream: ModelStreamFactory = createModelTextStream,
): Promise<Response> {
  if (!isJsonContentType(request)) return textResponse("Unsupported media type.", 415);

  const contentLength = request.headers.get("content-length");
  if (contentLength && /^\d+$/.test(contentLength) && Number(contentLength) > MAX_BODY_BYTES) {
    return textResponse("Request body too large.", 413);
  }

  if (!isAllowedRequestOrigin(request)) return textResponse("Forbidden.", 403);

  let payload: unknown;
  try {
    const body = await readBoundedBody(request);
    payload = JSON.parse(body);
  } catch (error) {
    if (error instanceof RequestBodyTooLargeError) return textResponse("Request body too large.", 413);
    return textResponse("Invalid request payload.", 400);
  }

  if (
    !payload ||
    typeof payload !== "object" ||
    Array.isArray(payload) ||
    Object.keys(payload).length !== 1 ||
    !Object.hasOwn(payload, "messages")
  ) {
    return textResponse("Invalid request payload.", 400);
  }

  let messages: ConversationMessage[];
  try {
    messages = validateConversation((payload as { messages: unknown }).messages);
  } catch {
    return textResponse("Invalid request payload.", 400);
  }

  const latestMessage = messages[messages.length - 1];
  if (isExtractionAttempt(latestMessage.content)) {
    return textResponse(getBixxieFallback("security"));
  }

  if (isOffTopicTask(latestMessage.content)) {
    return textResponse(getBixxieFallback("off-topic"));
  }

  try {
    // Capability and factual-about-his-work questions also get an evidence-only
    // retrieval pass, so there is real proof in the context to cite.
    const baseContext = retrievePortfolioContext(latestMessage.content);
    const evidenceContext = classifyProofTier(messages) ? retrieveEvidenceContext(latestMessage.content) : "";
    const portfolioContext = evidenceContext ? `${evidenceContext}\n${baseContext}` : baseContext;
    const { controller, cleanup } = makeAbortController(request);
    const directives = requestDirectives(messages, portfolioContext);
    const iterator = await createTextStream({
      system: [BIXXIE_SYSTEM_PROMPT, ...directives].join("\n\n"),
      message: createUntrustedPrompt(messages, portfolioContext),
      signal: controller.signal,
    });

    let firstChunk: IteratorResult<string>;
    try {
      firstChunk = await iterator.next();
    } catch (error) {
      cleanup();
      if (!request.signal.aborted) logBixxieFailure("first_chunk", error, controller.signal.aborted);
      try {
        await iterator.return?.();
      } catch {
        // Do not expose upstream failures.
      }
      const status = responseStatusForError(error);
      return textResponse(getBixxieFallback("service-unavailable"), status);
    }

    return new Response(
      createRedactedTextStream(iterator, firstChunk, controller, request.signal, cleanup),
      { status: 200, headers: RESPONSE_HEADERS },
    );
  } catch (error) {
    if (!request.signal.aborted) logBixxieFailure("model_setup", error);
    return textResponse(getBixxieFallback("service-unavailable"), responseStatusForError(error));
  }
}

export async function POST(request: Request): Promise<Response> {
  return handleBixxieRequest(request);
}
