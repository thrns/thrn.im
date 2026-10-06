import "server-only";

// The default `@google/genai` export resolves to the Node build, which uses
// node:https under the hood. Under Bun that client can hang indefinitely on
// an upstream error instead of rejecting, so use the fetch-based web build,
// which fails promptly and lets the retry/timeout logic below actually run.
import { GoogleGenAI } from "@google/genai/web";

type BixxieProviderConfiguration = {
  apiKey: string;
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
  const apiKey = process.env.BIXXIE_AI_TOKEN;
  const model = process.env.BIXXIE_AI_MODEL;
  const redactTerms = (process.env.BIXXIE_REDACT_TERMS ?? "")
    .split(",")
    .map((term) => term.trim())
    .filter(Boolean);

  if (!apiKey?.trim() || !model?.trim()) {
    throw new BixxieConfigurationError();
  }

  return { apiKey, model, redactTerms };
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
        },
      });
    } catch (error) {
      if (signal.aborted || attempt === STARTUP_ATTEMPTS) throw error;
    }
  }

  throw new Error("unreachable");
}

/**
 * Streams only the final-answer text. Some Google models (e.g. Gemma) tag
 * reasoning output with `thought: true` on the streamed part, so those are
 * filtered out here instead of leaking into the JSONL the caller expects.
 */
export async function* streamBixxieCompletion({
  system,
  message,
  temperature,
  maxOutputTokens,
  signal,
}: BixxieCompletionRequest): AsyncGenerator<string> {
  const configuration = readConfiguration();
  const client = new GoogleGenAI({ apiKey: configuration.apiKey });

  const stream = await startStream(client, configuration.model, system, message, temperature, maxOutputTokens, signal);

  for await (const chunk of stream) {
    if (signal.aborted) return;
    const parts = chunk.candidates?.[0]?.content?.parts ?? [];
    for (const part of parts) {
      if (part.thought || typeof part.text !== "string" || !part.text) continue;
      yield part.text;
    }
  }
}
