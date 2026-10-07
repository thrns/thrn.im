import { describe, expect, test } from "bun:test";

import { isNegativeRow } from "@/lib/bixxie/negative";

const row = (value: string, label = "Row") => ({ label, value });

describe("isNegativeRow", () => {
  test.each([
    "Exact usage numbers are not documented.",
    "Exact download counts are not documented in the portfolio.",
    "No experience with rockets or aerospace hardware is present in his portfolio.",
    "The portfolio does not track numbers for incomplete or unfinished repositories.",
    "Team size is unknown.",
    "This is not currently tracked.",
    "That detail isn't documented.",
    "No public information is available.",
    "Details are undocumented.",
    "Not in his portfolio.",
  ])("drops: %s", (value) => {
    expect(isNegativeRow(row(value))).toBe(true);
  });

  test("drops a row whose label says it is missing", () => {
    expect(isNegativeRow({ label: "Repository count not documented", value: "n/a" })).toBe(true);
  });

  test.each([
    "Migrated with no data loss and no downtime.",
    "Integrated 4 insurance APIs supporting about 2K+ weekly transactions.",
    "Built it with no prior experience in Rust and shipped in six weeks.",
    "Needed no manual review for 90% of candidates.",
    "Cut screening from roughly 8 minutes to under 2 minutes.",
    "No outages in the first quarter.",
    "Handled the data record migration for 10K+ users.",
    "Tracked every request with tracing from the first week.",
    "Documented the whole API and reviewed it with the team.",
  ])("keeps: %s", (value) => {
    expect(isNegativeRow(row(value))).toBe(false);
  });
});
