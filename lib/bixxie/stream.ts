import type { Spec } from "@json-render/core";

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

/**
 * Best-effort completion of a JSON text that's either still streaming in or
 * was cut off mid-token (e.g. hit the output budget): closes any still-open
 * string, then any still-open arrays/objects, innermost first, so a
 * garden-variety truncation still yields a parseable (if partial) object
 * instead of nothing.
 *
 * Under Gemini's structured-output constrained decoding (see provider.ts),
 * the model's tokens are restricted to ones that keep the output matching
 * the response schema, so a syntactically malformed *completed* response is
 * no longer something this has to defend against — truncation (an
 * incomplete response) is the one remaining way the text can be anything
 * other than one clean, complete JSON object, and that's all this handles.
 */
function closeDanglingJson(text: string): string {
  const stack: Array<"{" | "["> = [];
  let inString = false;
  let escaped = false;

  for (const char of text) {
    if (inString) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === '"') inString = true;
    else if (char === "{" || char === "[") stack.push(char);
    else if (char === "}" || char === "]") stack.pop();
  }

  let result = text;
  if (inString) {
    // A trailing, not-yet-escaped backslash is itself an incomplete escape
    // sequence — drop it rather than closing the string right after it,
    // which would produce an escaped quote and leave the string open.
    if (escaped) result = result.slice(0, -1);
    result += '"';
  }
  // A trailing structural separator would make the completed text invalid
  // JSON on its own terms — trim it before closing brackets, never trimming
  // actual content. A key written with its colon but no value yet (e.g. cut
  // off right after `"props":`) needs the whole dangling `"key":` dropped,
  // not just the colon — leaving a bare key behind is just as invalid.
  result = result.replace(/,?\s*"(?:[^"\\]|\\.)*"\s*:\s*$/, "");
  result = result.replace(/,\s*$/, "");

  for (let i = stack.length - 1; i >= 0; i -= 1) {
    result += stack[i] === "{" ? "}" : "]";
  }
  return result;
}

/**
 * Strict parse first (the common case, and the only case once the response
 * is complete); only reach for the dangling-bracket closer when the text is
 * still mid-stream or was cut off, rather than failing outright on an
 * incomplete object.
 */
function parseBestEffort(text: string): unknown | null {
  const trimmed = text.trim();
  if (!trimmed) return null;
  try {
    return JSON.parse(trimmed);
  } catch {
    try {
      return JSON.parse(closeDanglingJson(trimmed));
    } catch {
      return null;
    }
  }
}

/** Consume a streamed JSON object while exposing only catalog-validated display specs. */
export async function readBixxieSpecStream(
  body: ReadableStream<Uint8Array>,
  signal: AbortSignal,
  onSpec: (spec: Spec) => void,
): Promise<Spec> {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let accumulated = "";

  const updateFrom = (chunk: string) => {
    accumulated += chunk;
    const value = parseBestEffort(accumulated);
    if (!value) return;
    // Intermediate chunks render whatever is individually complete so far;
    // the stream's final chunk is re-checked with the strict inspector below.
    const spec = extractRenderablePrefix(value);
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

    const finalValue = parseBestEffort(accumulated);
    if (!finalValue) {
      throw new BixxieStreamError("invalid_spec_shape", "Bixxie couldn't read that response.");
    }

    const inspection = inspectBixxieSpec(finalValue);
    if (!inspection.spec) {
      // A truncated response (hit the output token budget, or the
      // connection dropped) can fail inspection a few different ways once
      // dangling-bracket-closed: a reference to an element that got cut
      // before it started (dangling_child_reference), or one that got cut
      // partway through, leaving it present but missing a required prop
      // (invalid_component_props). Either way the *other*, already-complete
      // elements are still genuinely valid, so always try the same
      // best-effort salvage — extractRenderablePrefix already drops
      // whatever individual element doesn't validate on its own, for
      // exactly this reason — rather than failing the whole answer.
      const salvaged = extractRenderablePrefix(finalValue);
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
