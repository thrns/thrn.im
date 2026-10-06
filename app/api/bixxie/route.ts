import { streamText } from "ai";
import {
  createStreamingRedactor,
  isExtractionAttempt,
  validateConversation,
  type UserMessage,
} from "@/lib/bixxie/security";
import { getBixxieFallback } from "@/lib/bixxie/fallback";
import { retrievePortfolioContext } from "@/lib/bixxie/grounding";
import { BIXXIE_SYSTEM_PROMPT } from "@/lib/bixxie/prompt";

const MAX_BODY_BYTES = 32 * 1024;
const REQUEST_TIMEOUT_MS = 30_000;

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

function createUntrustedPrompt(messages: UserMessage[], portfolioContext: string): string {
  return [
    "<USER_CONVERSATION>",
    encodeDelimitedData(messages.map(({ content }) => content)),
    "</USER_CONVERSATION>",
    "<PORTFOLIO_CONTEXT>",
    encodeDelimitedData(portfolioContext),
    "</PORTFOLIO_CONTEXT>",
  ].join("\n");
}

async function createModelTextStream({ system, message, signal }: ModelStreamRequest): Promise<AsyncIterator<string>> {
  const { createBixxieChatModel } = await import("@/lib/bixxie/provider");
  const result = streamText({
    model: createBixxieChatModel(),
    system,
    messages: [{ role: "user", content: message }],
    temperature: 0.2,
    maxOutputTokens: 500,
    tools: {},
    toolChoice: "none",
    abortSignal: signal,
  });

  return result.textStream[Symbol.asyncIterator]();
}

function responseStatusForError(error: unknown): number {
  if (!error || typeof error !== "object") return 503;
  const candidate = error as { status?: unknown; statusCode?: unknown };
  return candidate.status === 429 || candidate.statusCode === 429 ? 429 : 503;
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
  cleanup: () => void,
): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const redactor = createStreamingRedactor();
  let pendingFirstChunk: IteratorResult<string> | undefined = firstChunk;
  let cancelled = false;

  const enqueueRedacted = (controller: ReadableStreamDefaultController<Uint8Array>, text: string) => {
    const output = redactor.push(text);
    if (output && !cancelled) controller.enqueue(encoder.encode(output));
  };

  const enqueueSafeFallback = (controller: ReadableStreamDefaultController<Uint8Array>) => {
    if (cancelled) return;
    const fallbackRedactor = createStreamingRedactor();
    const fallback = getBixxieFallback("service-unavailable");
    const output = fallbackRedactor.push(`${fallback}\n`) + fallbackRedactor.flush();
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
      } catch {
        // Never expose provider errors or an unredacted/incomplete model line.
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

  let messages: UserMessage[];
  try {
    messages = validateConversation((payload as { messages: unknown }).messages);
  } catch {
    return textResponse("Invalid request payload.", 400);
  }

  const latestMessage = messages[messages.length - 1];
  if (isExtractionAttempt(latestMessage.content)) {
    return textResponse(getBixxieFallback("security"));
  }

  try {
    const portfolioContext = retrievePortfolioContext(latestMessage.content);
    const { controller, cleanup } = makeAbortController(request);
    const iterator = await createTextStream({
      system: BIXXIE_SYSTEM_PROMPT,
      message: createUntrustedPrompt(messages, portfolioContext),
      signal: controller.signal,
    });

    let firstChunk: IteratorResult<string>;
    try {
      firstChunk = await iterator.next();
    } catch (error) {
      cleanup();
      try {
        await iterator.return?.();
      } catch {
        // Do not expose upstream failures.
      }
      const status = responseStatusForError(error);
      return textResponse(getBixxieFallback("service-unavailable"), status);
    }

    return new Response(
      createRedactedTextStream(iterator, firstChunk, controller, cleanup),
      { status: 200, headers: RESPONSE_HEADERS },
    );
  } catch (error) {
    return textResponse(getBixxieFallback("service-unavailable"), responseStatusForError(error));
  }
}

export async function POST(request: Request): Promise<Response> {
  return handleBixxieRequest(request);
}
