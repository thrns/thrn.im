import { createSpecStreamCompiler, type Spec } from "@json-render/core";

import { extractRenderablePrefix, inspectBixxieSpec, type BixxieSpecFailureKind } from "@/lib/bixxie/spec";

export class BixxieStreamError extends Error {
  constructor(
    readonly failureKind: BixxieSpecFailureKind | "stream_processing_error" | "interrupted",
    message = "Bixxie couldn't read that response.",
    readonly detail?: string,
  ) {
    super(message);
    this.name = "BixxieStreamError";
  }
}

/** Consume JSONL patches while exposing only catalog-validated display specs. */
export async function readBixxieSpecStream(
  body: ReadableStream<Uint8Array>,
  signal: AbortSignal,
  onSpec: (spec: Spec) => void,
): Promise<Spec> {
  // createSpecStreamCompiler already tolerates and silently skips any line
  // that isn't a valid JSON patch (invalid JSON, a stray Markdown code fence
  // the model adds despite being told not to, incidental prose, etc.) — see
  // its push() in @json-render/core. There is deliberately no stricter
  // line-level validation layered on top of that here: it would only
  // hard-fail on noise the compiler, and the salvage logic below, are
  // already designed to see through.
  const compiler = createSpecStreamCompiler<Spec>();
  const reader = body.getReader();
  const decoder = new TextDecoder();

  const updateFrom = (chunk: string) => {
    const { result } = compiler.push(chunk);
    // Intermediate chunks render whatever is individually complete so far;
    // the stream's final chunk is re-checked with the strict inspector below.
    const spec = extractRenderablePrefix(result);
    if (spec) onSpec(spec);
  };

  const cancelOnAbort = () => {
    void reader.cancel().catch(() => undefined);
  };

  signal.addEventListener("abort", cancelOnAbort, { once: true });

  try {
    if (signal.aborted) throw new BixxieStreamError("interrupted", "This response was interrupted.");
    while (true) {
      if (signal.aborted) throw new BixxieStreamError("interrupted", "This response was interrupted.");
      const { done, value } = await reader.read();
      if (signal.aborted) throw new BixxieStreamError("interrupted", "This response was interrupted.");
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      if (chunk) updateFrom(chunk);
    }

    const finalChunk = decoder.decode();
    if (finalChunk) updateFrom(finalChunk);

    const finalResult = compiler.getResult();
    const inspection = inspectBixxieSpec(finalResult);
    if (!inspection.spec) {
      // A dangling child reference is usually the model's output getting cut
      // off mid-element (e.g. hitting the output token budget) rather than a
      // genuinely malformed spec. The already-complete elements are still
      // valid, so salvage and show them instead of failing the whole answer.
      const salvaged = inspection.failureKind === "dangling_child_reference"
        ? extractRenderablePrefix(finalResult)
        : null;
      if (!salvaged) {
        throw new BixxieStreamError(inspection.failureKind, "Bixxie couldn't read that response.", inspection.detail);
      }
      onSpec(salvaged);
      return salvaged;
    }
    const spec = inspection.spec;
    onSpec(spec);
    return spec;
  } catch (error) {
    if (error instanceof BixxieStreamError) throw error;
    if (signal.aborted) throw new BixxieStreamError("interrupted", "This response was interrupted.");
    throw new BixxieStreamError("stream_processing_error");
  } finally {
    signal.removeEventListener("abort", cancelOnAbort);
    reader.releaseLock();
  }
}
