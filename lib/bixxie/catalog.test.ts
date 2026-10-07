import { describe, expect, test } from "bun:test";

import { catalog, catalogResponseSchema } from "@/lib/bixxie/catalog";
import { validateBixxieSpec } from "@/lib/bixxie/spec";

const MAX_SCHEMA_ENUM_SIZE = 20;

/** Every `enum` array anywhere in a JSON Schema tree, however deeply nested. */
function collectEnumSizes(node: unknown, sizes: number[] = []): number[] {
  if (Array.isArray(node)) {
    for (const item of node) collectEnumSizes(item, sizes);
    return sizes;
  }
  if (!node || typeof node !== "object") return sizes;

  const record = node as Record<string, unknown>;
  if (Array.isArray(record.enum)) sizes.push(record.enum.length);
  for (const value of Object.values(record)) collectEnumSizes(value, sizes);
  return sizes;
}

function specWithChild(type: string, props: Record<string, unknown>) {
  return {
    root: "answer",
    elements: {
      answer: {
        type: "Answer",
        props: { text: "Portfolio" },
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
        props: { text: "Portfolio" },
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

  test("accepts a valid Diagram definition", () => {
    expect(validateBixxieSpec(specWithChild("Diagram", {
      title: "Request flow",
      definition: "flowchart TD\n  A[Client] --> B[API]\n  B --> C[Model]",
    })) !== null).toBe(true);
  });

  test("clamps a Diagram definition over the length limit instead of rejecting it", () => {
    const oversized = "flowchart TD\n" + "  A --> B\n".repeat(400);
    const spec = validateBixxieSpec(specWithChild("Diagram", { title: null, definition: oversized }));
    expect(spec !== null).toBe(true);
    const props = spec!.elements.child.props as { definition: string };
    expect(props.definition.length).toBeLessThanOrEqual(1600);
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

describe("Bixxie structured-output response schema (Gemini responseJsonSchema)", () => {
  // Gemini rejected the full catalog schema outright (400 INVALID_ARGUMENT)
  // once Stack's 65-entry canonical names list was included as a literal
  // `enum` — trimming it down fixed it. There's no documented exact ceiling,
  // so this guards the general rule (no oversized enum survives into the
  // schema actually sent to the model) rather than a specific field, so a
  // future large list added anywhere in the catalog doesn't silently
  // reintroduce the same failure.
  test("has no oversized enum anywhere in the generated schema", () => {
    const sizes = collectEnumSizes(catalogResponseSchema);
    expect(sizes.length).toBeGreaterThan(0);
    for (const size of sizes) {
      expect(size).toBeLessThanOrEqual(MAX_SCHEMA_ENUM_SIZE);
    }
  });

  // Stack's `names` enum is the one deliberately trimmed from the schema
  // (see above), which means Gemini's own constrained decoding no longer
  // blocks an invented technology name the way it does for every other
  // enum field. The real Zod validation (used after generation, in
  // lib/bixxie/spec.ts) still has to catch that — this is the same
  // assertion as "rejects arbitrary stack entries" above, named here to
  // make the dependency between the two explicit.
  test("still rejects an invented Stack name post-generation, since the schema no longer can", () => {
    expect(validateBixxieSpec(specWithChild("Stack", { names: ["Not A Real Technology"] }))).toBe(null);
  });
});
