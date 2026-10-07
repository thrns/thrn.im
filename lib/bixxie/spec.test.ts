import { describe, expect, test } from "bun:test";

import { inspectBixxieSpec, summarizeBixxieSpec } from "@/lib/bixxie/spec";

describe("Bixxie generated spec validation", () => {
  test("normalizes omitted children on leaf elements", () => {
    const result = inspectBixxieSpec({
      root: "answer",
      elements: {
        answer: {
          type: "Answer",
          props: { text: "Portfolio" },
          children: ["text"],
        },
        text: {
          type: "TextBlock",
          props: { text: "Verified portfolio detail", tone: null },
        },
      },
    });

    expect(JSON.stringify(result.spec?.elements.text.children)).toBe("[]");
    expect(result.failureKind === undefined).toBe(true);
  });

  test("rejects component names outside the catalog", () => {
    const result = inspectBixxieSpec({
      root: "answer",
      elements: {
        answer: {
          type: "Answer",
          props: { text: "Portfolio" },
          children: ["made-up"],
        },
        "made-up": { type: "Paragraph", props: {}, children: [] },
      },
    });

    expect(result.spec === null).toBe(true);
    expect(result.failureKind).toBe("unknown_component");
  });

  test("rejects a child key with no matching element entry", () => {
    const result = inspectBixxieSpec({
      root: "answer",
      elements: {
        answer: {
          type: "Answer",
          props: { text: "Portfolio" },
          children: ["projects"],
        },
      },
    });

    expect(result.spec === null).toBe(true);
    expect(result.failureKind).toBe("dangling_child_reference");
  });

  test("reports which component and field failed catalog props validation", () => {
    const result = inspectBixxieSpec({
      root: "answer",
      elements: {
        answer: {
          type: "Answer",
          props: { text: "Portfolio" },
          children: ["text"],
        },
        text: {
          type: "TextBlock",
          props: { text: "Verified portfolio detail", tone: "loud" },
        },
      },
    });

    expect(result.spec === null).toBe(true);
    expect(result.failureKind).toBe("invalid_component_props");
    expect(result.detail?.startsWith("TextBlock")).toBe(true);
    expect(result.detail?.includes("tone")).toBe(true);
  });

  test("backfills an omitted nullable field nested inside an array item", () => {
    const result = inspectBixxieSpec({
      root: "answer",
      elements: {
        answer: {
          type: "Answer",
          props: { text: "Portfolio" },
          children: ["metrics"],
        },
        metrics: {
          type: "Metrics",
          props: { items: [{ value: "5+", label: "Years experience" }] },
          children: [],
        },
      },
    });

    expect(result.failureKind === undefined).toBe(true);
    const metrics = result.spec?.elements.metrics.props as { items: Array<{ note: unknown }> } | undefined;
    expect(metrics?.items[0]?.note).toBe(null);
  });
});

describe("summarizeBixxieSpec", () => {
  test("returns the root Answer's text", () => {
    const summary = summarizeBixxieSpec({
      root: "answer",
      elements: {
        answer: {
          type: "Answer",
          props: { text: "I mostly work in Python and TypeScript." },
          children: [],
        },
      },
    });

    expect(summary).toBe("I mostly work in Python and TypeScript.");
  });

  test("trims surrounding whitespace", () => {
    const summary = summarizeBixxieSpec({
      root: "answer",
      elements: {
        answer: { type: "Answer", props: { text: "  Short.  " }, children: [] },
      },
    });

    expect(summary).toBe("Short.");
  });
});

describe("negative evidence rows are dropped", () => {
  const spec = (rows: Array<{ label: string; value: string }>) => ({
    root: "a",
    elements: {
      a: { type: "Answer", props: { text: "Yes." }, children: ["s"] },
      s: { type: "Section", props: { label: "Evidence", title: null }, children: ["f"] },
      f: { type: "Facts", props: { rows }, children: [] },
    },
  });

  test("keeps real rows, drops 'not documented' ones", () => {
    const result = inspectBixxieSpec(spec([
      { label: "Hyr", value: "Cut screening from 8 minutes to under 2." },
      { label: "Usage", value: "Exact usage numbers are not documented." },
    ])).spec as unknown as { elements: Record<string, { props: { rows?: unknown[] } }> };
    expect(result.elements.f.props.rows).toHaveLength(1);
  });

  test("removes the Facts and its Section when only negatives are left", () => {
    const result = inspectBixxieSpec(spec([{ label: "Rockets", value: "No experience with rockets is present in his portfolio." }])).spec as unknown as { elements: Record<string, unknown> };
    expect(result.elements.f).toBeUndefined();
    expect(result.elements.s).toBeUndefined();
    expect(result.elements.a).toBeDefined();
  });
});

describe("plain words", () => {
  test("swaps banned jargon for the plain word and keeps capitalisation", async () => {
    const { plainWords } = await import("@/lib/bixxie/spec");
    expect(plainWords("He builds robust systems with telemetry.")).toBe("He builds solid systems with tracking.");
    expect(plainWords("Robust and production-grade.")).toBe("Solid and production.");
    expect(plainWords("He leveraged an evaluation harness.")).toBe("He used a test setup.");
  });

  test("is applied to a reply on its way to the renderer", () => {
    const result = inspectBixxieSpec({
      root: "a",
      elements: { a: { type: "Answer", props: { text: "He builds robust AI systems." }, children: [] } },
    }).spec as unknown as { elements: Record<string, { props: { text: string } }> };
    expect(result.elements.a.props.text).toBe("He builds solid AI systems.");
  });
});
