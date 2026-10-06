import { describe, expect, test } from "bun:test";

import { catalog } from "@/lib/bixxie/catalog";
import { validateBixxieSpec } from "@/lib/bixxie/spec";

function specWithChild(type: string, props: Record<string, unknown>) {
  return {
    root: "answer",
    elements: {
      answer: {
        type: "Answer",
        props: { label: null, title: "Portfolio", intro: null },
        children: ["child"],
      },
      child: { type, props, children: [] },
    },
  };
}

function validAnswerSpec() {
  return {
    root: "answer",
    elements: {
      answer: {
        type: "Answer",
        props: { label: null, title: "Portfolio", intro: null },
        children: [],
      },
    },
  };
}

describe("Bixxie generated UI catalog validation", () => {
  test("rejects arbitrary project names", () => {
    expect(validateBixxieSpec(specWithChild("Projects", { names: ["Imaginary Project"] }))).toBe(null);
  });

  test("rejects arbitrary company names", () => {
    expect(validateBixxieSpec(specWithChild("Experience", {
      company: "Imaginary Company",
      showSummary: null,
      showRole: null,
    }))).toBe(null);
  });

  test("rejects arbitrary stack entries", () => {
    expect(validateBixxieSpec(specWithChild("Stack", { names: ["Made Up Framework"] }))).toBe(null);
  });

  test("rejects generated URLs on strict component props", () => {
    expect(validateBixxieSpec(specWithChild("Projects", {
      names: ["RepoView"],
      url: "https://attacker.example",
    }))).toBe(null);
  });

  test("rejects unsupported components", () => {
    expect(validateBixxieSpec(specWithChild("ArbitraryHtml", { html: "<script>" }))).toBe(null);
  });

  test("requires an Answer root before a spec can be displayed", () => {
    const wrongRoot = {
      root: "text",
      elements: {
        text: { type: "TextBlock", props: { text: "Text", tone: null }, children: [] },
      },
    };

    expect(catalog.validate(wrongRoot).success).toBe(true);
    expect(validateBixxieSpec(wrongRoot)).toBe(null);
    expect(validateBixxieSpec(validAnswerSpec()) !== null).toBe(true);
  });
});
