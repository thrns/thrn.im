import type { Spec } from "@json-render/core";

import { isNegativeRow } from "@/lib/bixxie/negative";

/**
 * Audits a finished Bixxie reply against the rules the prompt asks for. It is
 * pure (no model, no network), so the same checks serve three jobs: unit tests
 * with fixture replies, the live eval script, and a metadata-only server log
 * of what slipped through. It reports problems; it never rewrites a reply.
 */

export type ReplyViolationKind =
  | "banned_word"
  | "exclamation_or_emoji"
  | "long_sentence"
  | "too_long"
  | "ungrounded_number"
  | "missing_evidence"
  | "unexpected_evidence"
  | "missing_next_step"
  | "stock_opener"
  | "repeated_opener"
  | "padded_row"
  | "invented_anecdote"
  | "forbidden_text";

export type ReplyViolation = { kind: ReplyViolationKind; detail: string };

export type ReplyExpectations = {
  /** The serialized PORTFOLIO_CONTEXT the model saw; numbers are checked against it. */
  context?: string;
  /** Evidence list expected under the answer. */
  expectEvidence?: boolean;
  /** No evidence list expected (greeting, logistics, refusal). */
  forbidEvidence?: boolean;
  /** A next step (Links component, or a mention of email/his work) is expected. */
  expectNextStep?: boolean;
  /** Plain-text answers earlier in the same chat, to catch repeated openers. */
  previousAnswers?: string[];
};

const BANNED_WORDS = [
  "spearheaded", "leveraged", "leverage", "orchestrated", "championed", "utilized", "facilitated",
  "responsible for", "tasked with", "production-grade", "baked in", "robust", "cutting-edge", "passionate",
  "rabbit hole", "evaluation harness", "telemetry", "measurement system", "synergy", "world-class",
  "best-in-class", "exceptional", "impressive", "highly skilled", "game-changer", "delve",
];

// Storytelling markers. A joke should state a documented quirk, not narrate an
// event that nobody documented ("once he stood over a ranking engine until...").
const ANECDOTE = /\b(?:once|that time|one time|the other day|last (?:week|night)|back when|famously|reportedly|legend has it|rumou?r has it|he (?:stood|sat|stayed|spent|stared)\b[^.]{0,40}\buntil)\b/iu;

const STOCK_OPENERS = [/^\s*(?:honestly|nothing serious)\b/iu, /^\s*great question\b/iu, /^\s*certainly\b/iu, /^\s*absolutely\b/iu];

const EMOJI = /\p{Extended_Pictographic}/u;


type Element = { type: string; props?: Record<string, unknown>; children?: string[] };

function elementsOf(spec: Spec): Element[] {
  return Object.values((spec.elements ?? {}) as Record<string, Element>);
}

function answerText(spec: Spec): string {
  const root = (spec.elements as Record<string, Element> | undefined)?.[spec.root];
  return typeof root?.props?.text === "string" ? root.props.text : "";
}

/** Every piece of text the visitor would read, flattened. */
export function visibleText(spec: Spec): string {
  const parts: string[] = [];
  for (const element of elementsOf(spec)) {
    const props = element.props ?? {};
    for (const key of ["text", "title", "label", "body", "summary", "value", "note"]) {
      if (typeof props[key] === "string") parts.push(props[key] as string);
    }
    for (const list of [props.rows, props.items]) {
      if (!Array.isArray(list)) continue;
      for (const item of list) {
        if (typeof item === "string") parts.push(item);
        else if (item && typeof item === "object") {
          for (const value of Object.values(item as Record<string, unknown>)) {
            if (typeof value === "string") parts.push(value);
          }
        }
      }
    }
  }
  return parts.join("\n");
}

// "24,000+", "1.26s", "86%", "2K+", "8,000+": digit-bearing tokens that read like a claim.
// Units must be attached to the number: "1.26s", "24K", "86%". A space before a letter would
// read "2022 Scale" as "2022 s" (seconds) and "8 minutes" as "8 m".
const NUMBER_TOKEN = /\d[\d,.]*(?:k|m|%|x|ms|s)?(?![a-z])/giu;

function canonicalNumber(token: string): string {
  const cleaned = token.toLowerCase().replace(/[\s,+]/g, "").replace(/\.$/, "");
  // 24k and 24,000 are the same claim.
  const scaled = /^(\d+(?:\.\d+)?)([km])$/u.exec(cleaned);
  if (scaled) return String(Math.round(Number(scaled[1]) * (scaled[2] === "k" ? 1_000 : 1_000_000)));
  return cleaned;
}

const ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function wordsToNumber(words: string): number | null {
  const parts = words.toLowerCase().split(/[\s-]+/u).filter(Boolean);
  let total = 0;
  for (const part of parts) {
    const ones = ONES.indexOf(part);
    const tens = TENS.indexOf(part);
    if (ones >= 0) total += ones;
    else if (tens >= 2) total += tens * 10;
    else return null;
  }
  return total;
}

// "forty-two percent" -> "42%", so a spelled-out figure is checked like a digit one.
const SPELLED_PERCENT = new RegExp(`\\b((?:${[...ONES, ...TENS.slice(2)].join("|")})(?:[\\s-](?:${ONES.slice(1, 10).join("|")}))?)\\s+(?:percent|per cent)\\b`, "giu");

const NUMBER_WORD = `(?:${[...ONES, ...TENS.slice(2)].join("|")})`;
const SPELLED_SCALE = new RegExp(`\\b(${NUMBER_WORD}(?:[\\s-](?:${ONES.slice(1, 10).join("|")}))?)\\s+(thousand|million)\\b`, "giu");

export function spelledNumbersAsDigits(text: string): string {
  return text
    .replace(SPELLED_PERCENT, (match, words: string) => {
      const value = wordsToNumber(words);
      return value === null ? match : `${value}%`;
    })
    .replace(SPELLED_SCALE, (match, words: string, scale: string) => {
      const value = wordsToNumber(words);
      return value === null ? match : String(value * (scale.toLowerCase() === "thousand" ? 1_000 : 1_000_000));
    });
}

/** Numbers in the reply that appear nowhere in the context the model was given. */
export function ungroundedNumbers(text: string, context: string): string[] {
  const known = new Set((context.match(NUMBER_TOKEN) ?? []).map(canonicalNumber));
  const missing = new Set<string>();
  for (const token of spelledNumbersAsDigits(text).match(NUMBER_TOKEN) ?? []) {
    const canonical = canonicalNumber(token);
    // Skip tiny bare integers ("two", "3 tabs", list counts) that are ordinary prose.
    if (/^\d{1,2}$/.test(canonical)) continue;
    if (!known.has(canonical)) missing.add(token.trim());
  }
  return [...missing];
}

const sentencesOf = (text: string): string[] =>
  text.split(/(?<=[.!?])\s+/u).map((sentence) => sentence.trim()).filter(Boolean);

const wordCount = (text: string): number => text.split(/\s+/u).filter(Boolean).length;

export function checkReply(spec: Spec, expectations: ReplyExpectations = {}): ReplyViolation[] {
  const violations: ReplyViolation[] = [];
  const add = (kind: ReplyViolationKind, detail: string) => violations.push({ kind, detail });

  const all = visibleText(spec);
  const lower = all.toLowerCase();
  const answer = answerText(spec);
  const elements = elementsOf(spec);

  for (const word of BANNED_WORDS) {
    if (new RegExp(`\\b${word.replace(/[-\s]/g, "[-\\s]")}\\b`, "iu").test(lower)) add("banned_word", word);
  }
  if (all.includes("!") || EMOJI.test(all)) add("exclamation_or_emoji", "exclamation mark or emoji");

  for (const sentence of sentencesOf(answer)) {
    if (wordCount(sentence) > 28) add("long_sentence", sentence.slice(0, 80));
  }
  if (sentencesOf(answer).length > 4 || wordCount(answer) > 85) add("too_long", `${wordCount(answer)} words`);

  if (expectations.context) {
    const bad = ungroundedNumbers(all, expectations.context);
    if (bad.length > 0) add("ungrounded_number", bad.join(", "));
  }

  const sections = elements.filter((element) => element.type === "Section");
  const hasFacts = elements.some((element) => element.type === "Facts");
  const hasEvidence = sections.length > 0 || hasFacts;
  if (expectations.expectEvidence && !hasEvidence) add("missing_evidence", "no evidence list under the answer");
  if (expectations.forbidEvidence && hasEvidence) add("unexpected_evidence", "evidence list on a reply that should not have one");
  for (const element of elements) {
    if (element.type !== "Facts" || !Array.isArray(element.props?.rows)) continue;
    for (const row of element.props.rows as Array<{ label?: string; value?: string }>) {
      if (isNegativeRow(row)) add("padded_row", `${row.label ?? ""}`.slice(0, 40));
    }
  }

  if (expectations.expectNextStep) {
    const hasLinks = elements.some((element) => element.type === "Links");
    const mentions = /\b(?:email|reach out|contact|get in touch|his work|case stud\w+|projects?|take a look|have a look)\b/iu.test(all);
    if (!hasLinks && !mentions) add("missing_next_step", "no Links component and no pointer to his work or email");
  }

  const anecdote = ANECDOTE.exec(all);
  if (anecdote) add("invented_anecdote", anecdote[0]);

  if (STOCK_OPENERS.some((pattern) => pattern.test(answer))) add("stock_opener", answer.slice(0, 40));
  const opener = answer.split(/\s+/u).slice(0, 3).join(" ").toLowerCase();
  if (opener && (expectations.previousAnswers ?? []).some((previous) => previous.split(/\s+/u).slice(0, 3).join(" ").toLowerCase() === opener)) {
    add("repeated_opener", opener);
  }

  return violations;
}
