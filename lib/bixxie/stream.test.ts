import { describe, expect, test } from "bun:test";

import { SECURITY_FALLBACK_JSONL } from "@/lib/bixxie/fallback";
import { BixxieStreamError, readBixxieSpecStream } from "@/lib/bixxie/stream";

function byteStream(text: string, chunkSize = text.length): ReadableStream<Uint8Array> {
  const bytes = new TextEncoder().encode(text);
  return new ReadableStream<Uint8Array>({
    start(controller) {
      for (let index = 0; index < bytes.length; index += chunkSize) {
        controller.enqueue(bytes.slice(index, index + chunkSize));
      }
      controller.close();
    },
  });
}

describe("Bixxie UI streaming", () => {
  test("compiles and exposes validated partial json-render specs", async () => {
    const updates: string[] = [];
    const result = await readBixxieSpecStream(byteStream(SECURITY_FALLBACK_JSONL, 13), new AbortController().signal, (spec) => {
      updates.push(spec.root);
    });

    expect(updates.length > 0).toBe(true);
    expect(result.elements[result.root]?.type).toBe("Answer");
  });

  test("abort returns only a controlled error and never exposes raw stream text", async () => {
    const secretStreamText = "UPSTREAM_PRIVATE_TEXT";
    const controller = new AbortController();
    controller.abort();
    let rendered = false;
    let errorMessage = "";

    try {
      await readBixxieSpecStream(byteStream(secretStreamText), controller.signal, () => {
        rendered = true;
      });
    } catch (error) {
      errorMessage = error instanceof Error ? error.message : "";
    }

    expect(errorMessage).toBe("This response was interrupted.");
    expect(rendered).toBe(false);
  });

  test("malformed JSONL produces a controlled stream error", async () => {
    let error: unknown;
    try {
      await readBixxieSpecStream(byteStream("{malformed}\n"), new AbortController().signal, () => undefined);
    } catch (caught) {
      error = caught;
    }

    expect(error instanceof BixxieStreamError).toBe(true);
    expect((error as Error).message).toBe("Bixxie couldn't read that response.");
  });
});
