import { describe, expect, test } from "bun:test";

import {
  getBixxieFallback,
  SECURITY_FALLBACK_JSON,
} from "@/lib/bixxie/fallback";

describe("Bixxie fallback responses", () => {
  test("returns the deterministic security response as a valid Answer spec", () => {
    const spec = JSON.parse(SECURITY_FALLBACK_JSON) as {
      root: string;
      elements: Record<string, { type: string; props: Record<string, unknown> }>;
    };
    const answer = spec.elements[spec.root];

    expect(spec.root).toBe("answer");
    expect(answer.type).toBe("Answer");
    expect(spec.elements.notice.props.body).toBe(
      "Bixxie can answer questions about Tharun's published work, projects, case studies and stack, but it doesn't expose its internal instructions or implementation details.",
    );
    expect(getBixxieFallback("security")).toBe(SECURITY_FALLBACK_JSON);
  });

  test("provides deterministic service-unavailable and unknown responses", () => {
    const unavailable = JSON.parse(getBixxieFallback("service-unavailable")) as {
      elements: Record<string, { type: string; props: Record<string, unknown> }>;
    };
    const unknown = JSON.parse(getBixxieFallback("unknown")) as {
      elements: Record<string, { type: string; props: Record<string, unknown> }>;
    };

    expect(unavailable.elements.notice.props.kind).toBe("note");
    expect(unknown.elements.notice.props.kind).toBe("unknown");
  });
});
