import "server-only";

// The default `@google/genai` export resolves to the Node build, which uses
// node:https under the hood. Under Bun that client can hang indefinitely on
// an upstream error instead of rejecting, so use the fetch-based web build,
// which fails promptly and lets the retry/timeout logic below actually run.
import { GoogleGenAI } from "@google/genai/web";

import { catalogResponseSchema } from "@/lib/bixxie/catalog";

type BixxieProviderConfiguration = {
  apiKeys: string[];
  model: string;
  redactTerms: string[];
};

class BixxieConfigurationError extends Error {
  constructor() {
    super("Bixxie server configuration is incomplete.");
    this.name = "BixxieConfigurationError";
  }
}

function readConfiguration(): BixxieProviderConfiguration {
  // BIXXIE_AI_TOKEN may hold several comma-separated keys; requests rotate
  // through them so no single free-tier key absorbs the whole quota.
  const apiKeys = (process.env.BIXXIE_AI_TOKEN ?? "")
    .split(",")
    .map((key) => key.trim())
    .filter(Boolean);
  const model = process.env.BIXXIE_AI_MODEL;
  const redactTerms = (process.env.BIXXIE_REDACT_TERMS ?? "")
    .split(",")
    .map((term) => term.trim())
    .filter(Boolean);

  if (apiKeys.length === 0 || !model?.trim()) {
    throw new BixxieConfigurationError();
  }

  return { apiKeys, model, redactTerms };
}

export type BixxieCompletionRequest = {
  system: string;
  message: string;
  temperature: number;
  maxOutputTokens: number;
  signal: AbortSignal;
};

// Google AI Studio models can return transient upstream 500s, so one retry
// is worth it; genuine errors surface quickly via the fetch-based web
// client, and the caller's own request timeout is the backstop for total
// latency, so no separate per-attempt deadline here.
const STARTUP_ATTEMPTS = 2;

let nextKeyIndex = 0;

// Quota exhaustion (429 / RESOURCE_EXHAUSTED) and rejected keys are specific
// to one key, so the next key is worth trying; anything else is not.
function isKeyScopedError(error: unknown): boolean {
  const status = (error as { status?: number } | null)?.status;
  if (status === 429 || status === 401 || status === 403) return true;
  const message = error instanceof Error ? error.message : String(error);
  return /RESOURCE_EXHAUSTED|quota|rate.?limit/i.test(message);
}

async function startStream(
  client: GoogleGenAI,
  model: string,
  system: string,
  message: string,
  temperature: number,
  maxOutputTokens: number,
  signal: AbortSignal,
) {
  for (let attempt = 1; attempt <= STARTUP_ATTEMPTS; attempt += 1) {
    try {
      return await client.models.generateContentStream({
        model,
        contents: [{ role: "user", parts: [{ text: message }] }],
        config: {
          systemInstruction: system,
          temperature,
          maxOutputTokens,
          abortSignal: signal,
          // Constrained decoding: the model can only emit tokens that keep
          // the output matching this schema, so most of the malformed-JSON
          // failure modes this app used to work around (missing braces,
          // fields written outside props, invented keys) become structurally
          // impossible rather than something to detect and repair after the
          // fact. See lib/bixxie/catalog.ts for why this isn't the
          // catalog's own `jsonSchema()` helper.
          responseMimeType: "application/json",
          responseJsonSchema: catalogResponseSchema,
        },
      });
    } catch (error) {
      if (signal.aborted || attempt === STARTUP_ATTEMPTS) throw error;
    }
  }

  throw new Error("unreachable");
}

// Finish reasons other than STOP mean the model didn't finish normally
// (hit the output token budget, got safety-filtered, etc.) — the resulting
// JSON object is often truncated mid-element. The spec validator already
// salvages what it can from a truncated response, so this isn't fatal, but it's
// worth a metadata-only log line to catch a systemic token-budget problem
// (e.g. maxOutputTokens too low for how the model is actually answering)
// before it shows up as a wave of dropped/garbled answers.
function logAbnormalFinish(finishReason: string | undefined): void {
  if (!finishReason || finishReason === "STOP") return;
  console.warn("[bixxie] stream finished abnormally", { finishReason });
}

/**
 * Streams only the final-answer text — a single JSON object (per the
 * structured-output config above), delivered as incremental text chunks
 * that concatenate into that object. Some Google models (e.g. Gemma) tag
 * reasoning output with `thought: true` on the streamed part, so those are
 * filtered out here instead of leaking into the JSON the caller expects.
 */
export async function* streamBixxieCompletion({
  system,
  message,
  temperature,
  maxOutputTokens,
  signal,
}: BixxieCompletionRequest): AsyncGenerator<string> {
  const configuration = readConfiguration();
  const { apiKeys } = configuration;
  const first = nextKeyIndex % apiKeys.length;
  nextKeyIndex = (first + 1) % apiKeys.length;

  let stream: Awaited<ReturnType<typeof startStream>> | undefined;
  for (let offset = 0; offset < apiKeys.length; offset += 1) {
    const client = new GoogleGenAI({ apiKey: apiKeys[(first + offset) % apiKeys.length] });
    try {
      stream = await startStream(client, configuration.model, system, message, temperature, maxOutputTokens, signal);
      break;
    } catch (error) {
      if (signal.aborted || offset === apiKeys.length - 1 || !isKeyScopedError(error)) throw error;
      console.warn("[bixxie] key unavailable, rotating to next", { keyIndex: (first + offset) % apiKeys.length });
    }
  }
  if (!stream) throw new Error("unreachable");

  let finishReason: string | undefined;
  for await (const chunk of stream) {
    if (signal.aborted) return;
    finishReason = chunk.candidates?.[0]?.finishReason ?? finishReason;
    const parts = chunk.candidates?.[0]?.content?.parts ?? [];
    for (const part of parts) {
      if (part.thought || typeof part.text !== "string" || !part.text) continue;
      yield part.text;
    }
  }

  logAbnormalFinish(finishReason);
}
