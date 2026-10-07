import { describe, expect, test } from "bun:test";

import { SECURITY_FALLBACK_JSON } from "@/lib/bixxie/fallback";
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
  test("compiles and exposes validated partial specs as a JSON object streams in", async () => {
    const updates: string[] = [];
    const result = await readBixxieSpecStream(byteStream(SECURITY_FALLBACK_JSON, 13), new AbortController().signal, (spec) => {
      updates.push(spec.root);
    });

    expect(updates.length > 0).toBe(true);
    expect(result.elements[result.root]?.type).toBe("Answer");
  });

  test("accepts a leaf element that omits children", async () => {
    const json = JSON.stringify({
      root: "answer",
      elements: {
        answer: {
          type: "Answer",
          props: { text: "Portfolio" },
          children: ["text"],
        },
        text: { type: "TextBlock", props: { text: "Verified fact", tone: null } },
      },
    });

    const result = await readBixxieSpecStream(byteStream(json), new AbortController().signal, () => undefined);
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
    // "more" is referenced as a child but the stream cuts off before its
    // own element ever arrives (e.g. the model hit its output token
    // budget) — simulated here by a hand-truncated JSON string rather than
    // a real cut generation.
    const truncated = JSON.stringify({
      root: "answer",
      elements: {
        answer: {
          type: "Answer",
          props: { text: "Portfolio" },
          children: ["text", "more"],
        },
        text: { type: "TextBlock", props: { text: "Verified fact", tone: null }, children: [] },
      },
    });

    const updates: string[] = [];
    const result = await readBixxieSpecStream(byteStream(truncated), new AbortController().signal, () => {
      updates.push("update");
    });

    expect(result.elements[result.root]?.type).toBe("Answer");
    expect(Object.keys(result.elements)).toEqual(["answer", "text"]);
    expect(updates.length > 0).toBe(true);
  });

  // A response that's genuinely cut off mid-stream (hit the token budget,
  // or the connection dropped) leaves an incomplete JSON object — missing
  // closing braces, a half-written string. The best-effort dangling-bracket
  // closer should still recover whatever real content did arrive.
  test("recovers a response truncated mid-element (missing closing braces)", async () => {
    const full = JSON.stringify({
      root: "answer",
      elements: {
        answer: {
          type: "Answer",
          props: { text: "A short answer." },
          children: ["facts"],
        },
        facts: {
          type: "Facts",
          props: { rows: [{ label: "A", value: "B" }] },
          children: [],
        },
      },
    });
    // Cut off partway through the "facts" element's props.
    const cutIndex = full.indexOf('"facts"', full.indexOf('"facts"') + 1) + 40;
    const truncated = full.slice(0, cutIndex);

    const result = await readBixxieSpecStream(byteStream(truncated), new AbortController().signal, () => undefined);
    expect(result.elements[result.root]?.type).toBe("Answer");
    const answerProps = result.elements[result.root]?.props as { text?: unknown };
    expect(answerProps.text).toBe("A short answer.");
  });

  test("an empty or whitespace-only response produces a controlled stream error", async () => {
    let error: unknown;
    try {
      await readBixxieSpecStream(byteStream("   \n"), new AbortController().signal, () => undefined);
    } catch (caught) {
      error = caught;
    }

    expect(error instanceof BixxieStreamError).toBe(true);
    expect((error as Error).message).toBe("Bixxie couldn't read that response.");
  });
});
