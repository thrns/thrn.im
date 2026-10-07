import { describe, expect, test } from "bun:test";
import type { Spec } from "@json-render/core";

import { checkReply, ungroundedNumbers } from "@/lib/bixxie/replycheck";

const reply = (text: string, children: Array<{ type: string; props: Record<string, unknown> }> = []): Spec => {
  const elements: Record<string, unknown> = { root: { type: "Answer", props: { text }, children: children.map((_, i) => `c${i}`) } };
  children.forEach((child, i) => (elements[`c${i}`] = { ...child, children: [] }));
  return { root: "root", elements } as unknown as Spec;
};
const kinds = (spec: Spec, expectations = {}) => checkReply(spec, expectations).map((v) => v.kind);

describe("checkReply", () => {
  test("a clean, plain reply passes", () => {
    expect(kinds(reply("Yes. He built the ranking system at Berribot and tested every change before it shipped."))).toEqual([]);
  });

  test("flags banned wording and exclamation marks", () => {
    const found = kinds(reply("He leveraged a robust, production-grade evaluation harness!"));
    expect(found).toContain("banned_word");
    expect(found).toContain("exclamation_or_emoji");
  });

  test("flags stock openers and repeated openers", () => {
    expect(kinds(reply("Honestly, nothing comes to mind."))).toContain("stock_opener");
    expect(kinds(reply("He builds the testing along with the feature."), { previousAnswers: ["He builds the testing first."] })).toContain("repeated_opener");
  });

  test("flags a long, jargon-heavy answer", () => {
    const long = Array.from({ length: 4 }, () => Array.from({ length: 30 }, () => "word").join(" ") + ".").join(" ");
    expect(kinds(reply(long))).toEqual(expect.arrayContaining(["long_sentence", "too_long"]));
  });

  test("flags numbers that are not in the context, allows ones that are", () => {
    const context = "Pocketlink reached 24,000+ users. Hyr cut screening from 8 minutes to under 2 minutes.";
    expect(ungroundedNumbers("It reached 24,000+ users and 2 minutes.", context)).toEqual([]);
    expect(ungroundedNumbers("It reached 90,000 users.", context)).toEqual(["90,000"]);
    expect(kinds(reply("It reached 90,000 users."), { context })).toContain("ungrounded_number");
  });

  test("evidence expectations", () => {
    const withFacts = reply("Yes.", [{ type: "Section", props: { label: "Evidence", title: null } }, { type: "Facts", props: { rows: [{ label: "Hyr", value: "x" }] } }]);
    expect(kinds(reply("Yes."), { expectEvidence: true })).toContain("missing_evidence");
    expect(kinds(withFacts, { expectEvidence: true })).toEqual([]);
    expect(kinds(withFacts, { forbidEvidence: true })).toContain("unexpected_evidence");
  });

  test("flags a padded 'not documented' row", () => {
    const spec = reply("Yes.", [{ type: "Facts", props: { rows: [{ label: "Usage", value: "Exact numbers are not documented." }] } }]);
    expect(kinds(spec)).toContain("padded_row");
  });

  test("next step", () => {
    expect(kinds(reply("Yes, he can."), { expectNextStep: true })).toContain("missing_next_step");
    expect(kinds(reply("Yes, he can. Have a look at his work."), { expectNextStep: true })).toEqual([]);
    expect(kinds(reply("Yes, he can.", [{ type: "Links", props: { items: ["email"] } }]), { expectNextStep: true })).toEqual([]);
  });
});

describe("spelled-out numbers", () => {
  test("a spelled percentage is checked like a digit one", () => {
    expect(ungroundedNumbers("It cut shortlisting time by forty-two percent.", "cutting shortlisting time 42%")).toEqual([]);
    expect(ungroundedNumbers("It cut shortlisting time by sixty percent.", "cutting shortlisting time 42%")).toEqual(["60%"]);
  });
});

describe("numbers in other forms", () => {
  test("24K and 24,000 and 'twenty-four thousand' are the same claim", () => {
    expect(ungroundedNumbers("over twenty-four thousand users", "Pocketlink reached 24K+ users")).toEqual([]);
    expect(ungroundedNumbers("24,000 users", "Pocketlink reached 24K+ users")).toEqual([]);
    expect(ungroundedNumbers("over thirty thousand users", "Pocketlink reached 24K+ users")).toEqual(["30000"]);
  });
});

describe("invented anecdotes", () => {
  test("flags a made-up story, allows a plain quirk", () => {
    expect(kinds(reply("He's six foot one and once stood over a ranking engine until every regression passed."))).toContain("invented_anecdote");
    expect(kinds(reply("He's six foot one, so he spots a bug from across the room."))).not.toContain("invented_anecdote");
  });
});

describe("number tokens do not swallow neighbouring words", () => {
  test("a year followed by a new line starting with S is not 'seconds'", () => {
    expect(ungroundedNumbers("Review, 2022\nScale\nTrained on 11,302 chest X-rays", "Review (2022) trained on 11,302 images")).toEqual([]);
  });
  test("'8 minutes' is not read as 8 m", () => {
    expect(ungroundedNumbers("cut screening from 8 minutes to under 2 minutes", "from roughly 8 minutes to under 2")).toEqual([]);
  });
  test("attached units still match: 1.26s, 24K, 86%", () => {
    expect(ungroundedNumbers("about 1.26s, 24K users, 86% mAP", "median 1.26s; 24K+ users; ~86% mAP")).toEqual([]);
    expect(ungroundedNumbers("about 2.5s", "median 1.26s")).toEqual(["2.5s"]);
  });
  test("'in his last year at UBC' is not an anecdote", () => {
    expect(kinds(reply("He studies Physics in his last year at UBC."))).not.toContain("invented_anecdote");
  });
});
