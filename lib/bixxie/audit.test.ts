import { describe, expect, test } from "bun:test";

import { createReplyAudit } from "@/lib/bixxie/audit";

const ask = (content: string) => [{ role: "user" as const, content }];
const spy = () => {
  const calls: Array<{ level: string; args: unknown[] }> = [];
  return {
    calls,
    log: {
      info: (...args: unknown[]) => calls.push({ level: "info", args }),
      warn: (...args: unknown[]) => calls.push({ level: "warn", args }),
    },
  };
};
const reply = (text: string) =>
  JSON.stringify({ root: "a", elements: { a: { type: "Answer", props: { text }, children: [] } } });

describe("createReplyAudit", () => {
  test("logs the category and rule kinds, never the question or reply text", () => {
    const { calls, log } = spy();
    createReplyAudit(ask("we are hiring an AI engineer, SECRETQUESTION"), "", log, false)(reply("He leveraged a robust system SECRETREPLY."));
    expect(calls).toHaveLength(1);
    const logged = JSON.stringify(calls[0].args);
    expect(logged).toContain("banned_word");
    expect(logged).not.toContain("SECRETQUESTION");
    expect(logged).not.toContain("SECRETREPLY");
  });

  test("in production a clean reply logs nothing", () => {
    const { calls, log } = spy();
    createReplyAudit(ask("what is his stack"), "", log, true)(reply("TypeScript and Python mostly."));
    expect(calls).toHaveLength(0);
  });

  test("in production a rule-breaking reply is logged", () => {
    const { calls, log } = spy();
    createReplyAudit(ask("what is his stack"), "", log, true)(reply("Honestly, it is a robust stack!"));
    expect(calls).toHaveLength(1);
  });

  test("outside production every reply is logged", () => {
    const { calls, log } = spy();
    createReplyAudit(ask("what is his stack"), "", log, false)(reply("TypeScript and Python mostly."));
    expect(calls).toHaveLength(1);
  });

  test("an unparseable reply is warned about without crashing", () => {
    const { calls, log } = spy();
    createReplyAudit(ask("hi"), "", log, false)("not json {");
    expect(calls[0].level).toBe("warn");
  });

  test("flags a hiring reply that has no next step, and an invented anecdote", () => {
    const { calls, log } = spy();
    createReplyAudit(ask("we are hiring an AI engineer"), "", log, false)(reply("Once he stood over a ranking engine until it passed."));
    const logged = JSON.stringify(calls[0].args);
    expect(logged).toContain("missing_next_step");
    expect(logged).toContain("invented_anecdote");
  });
});
