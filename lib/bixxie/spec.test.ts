import { describe, expect, test } from "bun:test";

import { inspectBixxieSpec, summarizeBixxieSpec } from "@/lib/bixxie/spec";

describe("Bixxie generated spec validation", () => {
  test("normalizes omitted children on leaf elements", () => {
    const result = inspectBixxieSpec({
      root: "answer",
      elements: {
        answer: {
          type: "Answer",
          props: { label: null, title: "Portfolio", intro: null },
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
          props: { label: null, title: "Portfolio", intro: null },
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
          props: { label: null, title: "Portfolio", intro: null },
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
          props: { label: null, title: "Portfolio", intro: null },
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
          props: { label: null, title: "Portfolio", intro: null },
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
  test("joins the root Answer's title and intro", () => {
    const summary = summarizeBixxieSpec({
      root: "answer",
      elements: {
        answer: {
          type: "Answer",
          props: { label: null, title: "Technical Stack", intro: "My current coding tools." },
          children: [],
        },
      },
    });

    expect(summary).toBe("Technical Stack — My current coding tools.");
  });

  test("falls back to just the title when intro is null", () => {
    const summary = summarizeBixxieSpec({
      root: "answer",
      elements: {
        answer: {
          type: "Answer",
          props: { label: null, title: "Fun Fact", intro: null },
          children: [],
        },
      },
    });

    expect(summary).toBe("Fun Fact");
  });
});
