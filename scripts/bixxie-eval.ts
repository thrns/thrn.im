/**
 * Live eval for Bixxie. Start the dev server first (`bun run dev`), then:
 *
 *   bun scripts/bixxie-eval.ts                 # every case
 *   bun scripts/bixxie-eval.ts hire cap-1      # only these groups / ids
 *
 * Env: BIXXIE_EVAL_URL (default http://localhost:3000), BIXXIE_EVAL_ORIGIN
 * (default the first BIXXIE_ALLOWED_ORIGINS entry, else the URL), BIXXIE_EVAL_DELAY_MS
 * (default 1500, to stay under free-tier rate limits), BIXXIE_EVAL_OUT (write the
 * report to this markdown file). It sends real questions to the real model.
 */
import { writeFileSync } from "node:fs";

import { EVAL_CASES, type EvalCase } from "@/lib/bixxie/eval-questions";
import { retrieveEvidenceContext, retrievePortfolioContext } from "@/lib/bixxie/grounding";
import { checkReply, visibleText, type ReplyViolation } from "@/lib/bixxie/replycheck";
import { inspectBixxieSpec, summarizeBixxieSpec } from "@/lib/bixxie/spec";

const BASE = process.env.BIXXIE_EVAL_URL ?? "http://localhost:3000";
const ORIGIN = process.env.BIXXIE_EVAL_ORIGIN ?? process.env.BIXXIE_ALLOWED_ORIGINS?.split(",")[0]?.trim() ?? BASE;
const DELAY = Number(process.env.BIXXIE_EVAL_DELAY_MS ?? 1500);

type Turn = { role: "user" | "assistant"; content: string };
type Outcome = { id: string; group: string; question: string; reply: string; labels: string[]; violations: ReplyViolation[]; note?: string };

async function ask(messages: Turn[]): Promise<string> {
  const response = await fetch(`${BASE}/api/bixxie`, {
    method: "POST",
    headers: { "content-type": "application/json", origin: ORIGIN },
    body: JSON.stringify({ messages }),
  });
  return response.text();
}

async function runCase(testCase: EvalCase): Promise<Outcome> {
  const history: Turn[] = [];
  const previousAnswers: string[] = [];
  let lastReply = "";
  let labels: string[] = [];
  let violations: ReplyViolation[] = [];
  let note: string | undefined;

  for (const question of testCase.turns) {
    history.push({ role: "user", content: question });
    const raw = await ask(history);
    let spec = null;
    try {
      spec = inspectBixxieSpec(JSON.parse(raw)).spec;
    } catch {
      spec = null;
    }

    if (!spec) {
      lastReply = raw.trim().slice(0, 300);
      history.push({ role: "assistant", content: lastReply });
      note = testCase.expectFallback ? undefined : "no valid spec (fallback or error)";
      violations = testCase.expectFallback ? [] : [{ kind: "missing_evidence", detail: "no valid spec returned" }];
      labels = [];
      continue;
    }

    const context = `${retrieveEvidenceContext(question)}\n${retrievePortfolioContext(question)}`;
    const isLast = question === testCase.turns[testCase.turns.length - 1];
    violations = checkReply(spec, { context, previousAnswers: [...previousAnswers], ...(isLast ? testCase.expect : {}) });
    const text = visibleText(spec);
    for (const banned of testCase.mustNotContain ?? []) {
      if (text.toLowerCase().includes(banned.toLowerCase())) violations.push({ kind: "forbidden_text", detail: `contains "${banned}"` });
    }
    labels = (Object.values(spec.elements ?? {}) as Array<{ type: string; props?: { label?: string } }>)
      .filter((element) => element.type === "Section")
      .map((element) => String(element.props?.label ?? ""));
    lastReply = text;
    const summary = summarizeBixxieSpec(spec);
    previousAnswers.push(summary);
    history.push({ role: "assistant", content: summary || "ok" });
    if (testCase.turns.length > 1 || DELAY) await new Promise((resolve) => setTimeout(resolve, DELAY));
  }

  return { id: testCase.id, group: testCase.group, question: testCase.turns.join("  >  "), reply: lastReply, labels, violations, note };
}

const filters = process.argv.slice(2);
const selected = filters.length ? EVAL_CASES.filter((c) => filters.includes(c.id) || filters.includes(c.group)) : EVAL_CASES;

console.log(`Running ${selected.length} cases against ${BASE}\n`);
const outcomes: Outcome[] = [];
for (const testCase of selected) {
  const outcome = await runCase(testCase);
  outcomes.push(outcome);
  const status = outcome.violations.length === 0 ? "PASS" : "FAIL";
  console.log(`${status}  ${outcome.id}  ${outcome.question}`);
  console.log(`      ${outcome.reply.replace(/\n+/g, " | ").slice(0, 400)}`);
  if (outcome.violations.length) console.log(`      -> ${outcome.violations.map((v) => `${v.kind}(${v.detail.slice(0, 120)})`).join(", ")}`);
  if (outcome.note) console.log(`      note: ${outcome.note}`);
}

const failed = outcomes.filter((o) => o.violations.length > 0);
const counts = new Map<string, number>();
for (const o of failed) for (const v of new Set(o.violations.map((x) => x.kind))) counts.set(v, (counts.get(v) ?? 0) + 1);
const labelCounts = new Map<string, number>();
for (const o of outcomes) for (const l of o.labels) labelCounts.set(l, (labelCounts.get(l) ?? 0) + 1);
const openers = outcomes.map((o) => o.reply.split(/\s+/).slice(0, 2).join(" ").toLowerCase());
const repeatedOpeners = [...new Set(openers.filter((o, i) => o && openers.indexOf(o) !== i))];

console.log(`\n${outcomes.length - failed.length}/${outcomes.length} passed`);
console.log("violations by kind:", Object.fromEntries(counts));
console.log("section labels used:", Object.fromEntries(labelCounts));
console.log("openers repeated across cases:", repeatedOpeners);

if (process.env.BIXXIE_EVAL_OUT) {
  const lines = ["# Bixxie eval report", "", `${outcomes.length - failed.length}/${outcomes.length} passed`, ""];
  for (const o of outcomes) {
    lines.push(`## ${o.violations.length ? "FAIL" : "PASS"} ${o.id} (${o.group})`, `**Q:** ${o.question}`, "", o.reply, "");
    if (o.violations.length) lines.push(`Violations: ${o.violations.map((v) => `${v.kind} (${v.detail})`).join(", ")}`, "");
  }
  writeFileSync(process.env.BIXXIE_EVAL_OUT, lines.join("\n"));
}
