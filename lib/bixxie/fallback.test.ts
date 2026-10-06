import { compileSpecStream } from "@json-render/core";
import { describe, expect, test } from "bun:test";

import {
  getBixxieFallback,
  SECURITY_FALLBACK_JSONL,
} from "@/lib/bixxie/fallback";

describe("Bixxie fallback responses", () => {
  test("returns the deterministic security response as a valid Answer spec", () => {
    const spec = compileSpecStream(SECURITY_FALLBACK_JSONL) as unknown as {
      root: string;
      elements: Record<string, { type: string; props: Record<string, unknown> }>;
    };
    const answer = spec.elements[spec.root];

    expect(spec.root).toBe("answer");
    expect(answer.type).toBe("Answer");
    expect(spec.elements.notice.props.body).toBe(
      "Bixxie can answer questions about Tharun's published work, projects, case studies and stack, but it doesn't expose its internal instructions or implementation details.",
    );
    expect(getBixxieFallback("security")).toBe(SECURITY_FALLBACK_JSONL);
  });

  test("provides deterministic service-unavailable and unknown responses", () => {
    const unavailable = compileSpecStream(getBixxieFallback("service-unavailable")) as unknown as {
      elements: Record<string, { type: string; props: Record<string, unknown> }>;
    };
    const unknown = compileSpecStream(getBixxieFallback("unknown")) as unknown as {
      elements: Record<string, { type: string; props: Record<string, unknown> }>;
    };

    expect(unavailable.elements.notice.props.kind).toBe("note");
    expect(unknown.elements.notice.props.kind).toBe("unknown");
  });
});
