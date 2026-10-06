import { createSpecStreamCompiler, parseSpecStreamLine, type Spec } from "@json-render/core";

import { validateBixxieSpec } from "@/lib/bixxie/spec";

export class BixxieStreamError extends Error {
  constructor(message = "Bixxie couldn't read that response.") {
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
  const compiler = createSpecStreamCompiler<Spec>();
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let validationBuffer = "";

  const validateLines = (text: string, final = false) => {
    validationBuffer += text;
    let newline = validationBuffer.indexOf("\n");
    while (newline >= 0) {
      const line = validationBuffer.slice(0, newline).trim();
      validationBuffer = validationBuffer.slice(newline + 1);
      if (line && !parseSpecStreamLine(line)) throw new BixxieStreamError();
      newline = validationBuffer.indexOf("\n");
    }

    if (final && validationBuffer.trim() && !parseSpecStreamLine(validationBuffer.trim())) {
      throw new BixxieStreamError();
    }
  };

  const updateFrom = (chunk: string) => {
    validateLines(chunk);
    const { result } = compiler.push(chunk);
    const spec = validateBixxieSpec(result);
    if (spec) onSpec(spec);
  };

  const cancelOnAbort = () => {
    void reader.cancel().catch(() => undefined);
  };

  signal.addEventListener("abort", cancelOnAbort, { once: true });

  try {
    if (signal.aborted) throw new BixxieStreamError("This response was interrupted.");
    while (true) {
      if (signal.aborted) throw new BixxieStreamError("This response was interrupted.");
      const { done, value } = await reader.read();
      if (signal.aborted) throw new BixxieStreamError("This response was interrupted.");
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      if (chunk) updateFrom(chunk);
    }

    const finalChunk = decoder.decode();
    if (finalChunk) updateFrom(finalChunk);
    validateLines("", true);

    const spec = validateBixxieSpec(compiler.getResult());
    if (!spec) throw new BixxieStreamError();
    onSpec(spec);
    return spec;
  } catch (error) {
    if (error instanceof BixxieStreamError) throw error;
    if (signal.aborted) throw new BixxieStreamError("This response was interrupted.");
    throw new BixxieStreamError();
  } finally {
    signal.removeEventListener("abort", cancelOnAbort);
    reader.releaseLock();
  }
}
