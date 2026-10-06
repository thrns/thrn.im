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

  test("accepts SpecStream leaf elements that omit children", async () => {
    const jsonl = [
      JSON.stringify({ op: "add", path: "/root", value: "answer" }),
      JSON.stringify({
        op: "add",
        path: "/elements/answer",
        value: {
          type: "Answer",
          props: { label: null, title: "Portfolio", intro: null },
          children: ["text"],
        },
      }),
      JSON.stringify({
        op: "add",
        path: "/elements/text",
        value: { type: "TextBlock", props: { text: "Verified fact", tone: null } },
      }),
    ].join("\n");

    const result = await readBixxieSpecStream(byteStream(jsonl), new AbortController().signal, () => undefined);
    expect(JSON.stringify(result.elements.text.children)).toBe("[]");
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

  test("salvages a truncated final spec by dropping its dangling child reference", async () => {
    const jsonl = [
      JSON.stringify({ op: "add", path: "/root", value: "answer" }),
      JSON.stringify({
        op: "add",
        path: "/elements/answer",
        value: {
          type: "Answer",
          props: { label: null, title: "Portfolio", intro: null },
          children: ["text", "more"],
        },
      }),
      JSON.stringify({
        op: "add",
        path: "/elements/text",
        value: { type: "TextBlock", props: { text: "Verified fact", tone: null } },
      }),
      // "more" is referenced as a child but the stream cuts off before it
      // ever arrives (e.g. the model hit its output token budget).
    ].join("\n");

    const updates: string[] = [];
    const result = await readBixxieSpecStream(byteStream(jsonl), new AbortController().signal, () => {
      updates.push("update");
    });

    expect(result.elements[result.root]?.type).toBe("Answer");
    expect(Object.keys(result.elements)).toEqual(["answer", "text"]);
    expect(updates.length > 0).toBe(true);
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
