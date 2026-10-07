import { normalizeUserInput, type ConversationMessage } from "@/lib/bixxie/security";

/**
 * Proof-backed answers. When a visitor asks whether TP can do something, is
 * suited to something, or asks a factual question about his work, the reply
 * gives the answer and a short explanation first, then lists the evidence
 * beneath it. The prompt describes the format; this module enforces it per
 * request by (a) classifying the question and (b) pulling candidate evidence
 * lines straight out of the retrieved PORTFOLIO_CONTEXT, so the model picks
 * from real, already-sourced material instead of composing its own "proof".
 * When nothing in the context backs the question, the directive says so and
 * forbids inventing proof.
 */

export type ProofTier = "required" | "supporting";

// "Can he / is he suited / has he done / how good is he" style questions.
const CAPABILITY_TERMS = new RegExp(
  [
    String.raw`\b(?:is|are|was)\s+(?:he|tp|tharun|tharun pranav)\s+(?:able|capable|qualified|suited|suitable|right|good|strong|skilled|experienced|proficient|ready|a good|a strong|the right|cut out|up to)\b`,
    String.raw`\b(?:suited|suitable|qualified|capable|competent|proficient|experienced|skilled|ready|fit|right)\s+(?:for|to|at|in|with)\b`,
    String.raw`\b(?:good|strong|great|solid|decent|experienced|skilled|proficient|expert|competent)\s+(?:at|in|with)\b`,
    String.raw`\bany\s+experience\b|\bexperience\s+(?:with|in|of|building|using|shipping)\b|\b(?:track record|proof|prove|evidence|show me|demonstrate|example of|examples of)\b`,
    String.raw`\b(?:have|has)\s+(?:he|tp|tharun|you)\s+(?:ever|any|done|built|worked|shipped|used|led)\b`,
    String.raw`\b(?:can|could)\s+i\s+(?:hire|use|trust|rely|count)\b|\b(?:right|best|ideal)\s+(?:person|hire|fit|choice|candidate)\b|\b(?:will|would)\s+(?:he|tp|tharun)\s+(?:be|fit)\b`,
    String.raw`\b(?:is|would)\s+(?:he|tp|tharun)\s+(?:a\s+)?(?:fit|good fit|great fit|right fit)\b|\bfit\s+for\b|\bdoes\s+(?:he|tp|tharun)\s+(?:fit|qualify)\b`,
    String.raw`\b(?:team player|detail[- ]oriented|reliable|self[- ]starter|independent|leader|leadership|communicat\w+)\b`,
  ].join("|"),
  "iu",
);

// Yes/no capability phrasing ("can he build...", "has he shipped..."). A wh-question
// ("what did he build") is a request for facts, not a capability check.
const CAPABILITY_YES_NO = new RegExp(
  String.raw`\b(?:can|could|would|will|is|was|does|do|did|has|have)\s+(?:he|tp|tharun|tharun pranav|bixxie|you)\b.{0,60}\b(?:do|handle|build|built|ship|shipped|lead|led|own|owned|deliver\w*|scale|scaled|design\w*|work|worked|manage\w*|know|knows|use|used|write|wrote|deploy\w*|learn\w*|pick up|cope|manage|fit|suit\w*|succeed|thrive|contribute|help)\b`,
  "iu",
);
const WH_QUESTION = /^\s*(?:what|which|where|when|who|whom|tell me|list|name)\b/iu;
const CAPABILITY_QUESTION = {
  test: (text: string) => CAPABILITY_TERMS.test(text) || (!WH_QUESTION.test(text) && CAPABILITY_YES_NO.test(text)),
};

// Topics where a "proof" list makes no sense (logistics, private, small talk).
const NO_PROOF_TOPIC =
  /\b(?:visa|sponsor\w*|work (?:permit|authori[sz]ation)|salary|compensation|pay|rate|notice period|relocat\w*|contact|email|phone|reach|hobb\w+|favou?rite|family|age|birthday|where (?:is|does) he live|what'?s up|how are you)\b/iu;

const GREETING_ONLY =
  /^\s*(?:hi|hello|hey|yo|sup|hola|good (?:morning|afternoon|evening)|thanks?|thank you|ok(?:ay)?|cool|nice|bye)[\s.!?]*$/iu;

/**
 * "required" for can-he / is-he-suited questions, "supporting" for other
 * factual questions about his work, null when proof does not apply.
 */
export function classifyProofTier(messages: ConversationMessage[]): ProofTier | null {
  const userTurns = messages.filter((message) => message.role === "user");
  if (userTurns.length === 0) return null;
  const latest = normalizeUserInput(userTurns[userTurns.length - 1].content);
  if (!latest || GREETING_ONLY.test(latest)) return null;
  if (NO_PROOF_TOPIC.test(latest)) return null;
  if (CAPABILITY_QUESTION.test(latest)) return "required";

  // A short follow-up ("and for backend?") inherits the stance of the turn before it.
  if (latest.length < 60 && userTurns.length > 1) {
    const previous = normalizeUserInput(userTurns[userTurns.length - 2].content);
    if (CAPABILITY_QUESTION.test(previous) && !NO_PROOF_TOPIC.test(previous)) return "required";
  }
  // Almost every real question gets supporting evidence when there is any; only
  // greetings and logistics (handled above) are left out.
  return "supporting";
}

export type ProofCandidate = { source: string; label: string; line: string };

const SOURCE_BLOCK = /\[SOURCE: ([^\]\n]+)\]\n([\s\S]*?)\n\[\/SOURCE\]/g;
// Source types that are real evidence. Profile, contact, recruiting logistics
// and personal trivia are never offered as "proof" of capability.
const EVIDENCE_TYPES = new Set(["role", "project", "case-study", "education", "publications", "knowledge", "stack"]);

const HAS_EVIDENCE_SIGNAL = /\d|%|\b(?:handle[sd]?|resolv\w+|decid\w+|test(?:ed|s)?|checks?|measur\w+|built|shipped|owned|led|designed|deployed|published|benchmark\w*|reduced|cut|improved|launched|co-?founded|implemented|evaluat\w+)\b/iu;

function labelFor(id: string): string {
  const [type, ...rest] = id.split(":");
  const name = rest.join(":");
  switch (type) {
    case "role":
    case "project":
      return name;
    case "case-study":
      return `${name.charAt(0).toUpperCase()}${name.slice(1)} case study`;
    case "education":
      return "Education";
    case "publications":
      return "Publication";
    case "stack":
      return `${name} in practice`;
    default:
      return "Portfolio record";
  }
}

const MAX_LINE = 240;
const MAX_CANDIDATES = 8;
const TYPE_PRIORITY = ["role", "case-study", "project", "publications", "education", "stack", "knowledge"];

// Lines that are guidance to the model or statements of what is NOT known are
// never evidence, however many digits they contain.
const NOT_EVIDENCE = /\bBixxie\b|\bdo not\b|\bdon'?t\b|\bshould (?:not|avoid)\b|\bnot (?:canonical|documented|confirmed|grounded|verified|available)\b|\bunknown\b|\bnever\b|\bavoid\b/iu;

/** Reads candidate evidence lines out of the serialized PORTFOLIO_CONTEXT, best sources first. */
export function extractProofCandidates(portfolioContext: string): ProofCandidate[] {
  const blocks = [...portfolioContext.matchAll(SOURCE_BLOCK)]
    .map((match) => ({ id: match[1].trim(), body: match[2] }))
    .filter(({ id }) => EVIDENCE_TYPES.has(id.split(":", 1)[0]))
    .sort(
      (left, right) =>
        TYPE_PRIORITY.indexOf(left.id.split(":", 1)[0]) - TYPE_PRIORITY.indexOf(right.id.split(":", 1)[0]),
    );

  const seen = new Set<string>();
  const candidates: ProofCandidate[] = [];
  for (const { id, body } of blocks) {
    const type = id.split(":", 1)[0];
    const lines = body
      .split("\n")
      // A knowledge record is "Q: question / A: answer"; only the answer is evidence.
      .filter((line) => !/^\s*Q:/u.test(line))
      .map((line) => line.replace(/^\s*A:\s*/u, "").trim())
      // Judge each sentence on its own, so one "not documented" caveat does not
      // throw away a sentence of real evidence next to it.
      .flatMap((line) => line.split(/(?<=[.!?])\s+(?=[A-Z0-9])/u))
      .filter(
        (line) =>
          line.length >= 25 && !line.endsWith("?") && !/^\[/.test(line) && !/^(?:Note|Dates|Timeframe|Stack|Location|Status):/u.test(line) && !NOT_EVIDENCE.test(line),
      );

    let taken = 0;
    for (const line of lines) {
      if (!HAS_EVIDENCE_SIGNAL.test(line)) continue;
      const clipped = line.slice(0, MAX_LINE);
      if (seen.has(clipped)) continue;
      seen.add(clipped);
      // A knowledge answer often starts "Berribot: ..." — use that as its label.
      const lead = type === "knowledge" ? /^([A-Z][\w&.' -]{1,30}):\s/u.exec(clipped)?.[1] : undefined;
      candidates.push({ source: id, label: lead ?? labelFor(id), line: clipped });
      taken += 1;
      if (taken >= 2 || candidates.length >= MAX_CANDIDATES) break;
    }
    if (candidates.length >= MAX_CANDIDATES) break;
  }
  return candidates;
}

export type Random = () => number;

// The proof section does not always say "Proof": a different plain title each time.
const SECTION_LABELS: readonly string[] = [
  "Proof",
  "Evidence",
  "From his work",
  "Where this shows up",
  "Examples",
  "Backing this up",
  "What he's done",
  "The details",
];

const pickLabel = (random: Random): string =>
  SECTION_LABELS[Math.min(SECTION_LABELS.length - 1, Math.floor(random() * SECTION_LABELS.length))];

const formatFor = (label: string): string => `FORMAT: Answer.text gives the direct answer with a short explanation (stance first, then why). Beneath it add exactly one Section with label "${label}" (title null) whose only children are the evidence components below, then, only if a next step is called for, Links, then FollowUps last if natural. Evidence components, in order of preference: Facts with 2 to 5 rows (each row label = the source it comes from, e.g. a company, project or case study name; each value = one concrete, specific piece of evidence with its number or outcome); plus a CaseStudy, Experience or Projects component when the evidence maps to one app-owned record. Never restate the explanation inside the proof rows, never repeat a fact across rows, and never put the same fact in the Answer text and a row.`;

/** The per-request proof directive, or null when proof does not apply. */
export function proofDirective(
  messages: ConversationMessage[],
  portfolioContext: string,
  random: Random = Math.random,
): string | null {
  const tier = classifyProofTier(messages);
  if (!tier) return null;

  const candidates = extractProofCandidates(portfolioContext);
  if (candidates.length === 0) {
    return tier === "required"
      ? `REQUEST-SPECIFIC DIRECTIVE (trusted, from the server):
This is a can-he-do-it or is-he-suited question, but PORTFOLIO_CONTEXT contains no concrete evidence for it. Do not invent proof, rows, numbers or projects. First answer the question as far as PORTFOLIO_CONTEXT allows (for example how he works, if that is documented), in plain words, as the first sentence. Then say plainly what is not documented, and use Notice kind="unknown" for the missing part. Do not claim he can or cannot do it beyond what the context states. Add no evidence section.`
      : null;
  }

  const menu = candidates.map((candidate) => `- [${candidate.label}] ${candidate.line}`).join("\n");
  const strength =
    tier === "required"
      ? "The visitor is asking whether TP can do something or is suited to something, so back the answer with evidence. The evidence section is required."
      : "The visitor asked a question about TP. Almost every reply should carry evidence so the reader can see why the answer is true: add the evidence section with 1 to 3 rows from the candidates below whenever any of them supports your answer. Skip it only if none of them genuinely does.";

  return `REQUEST-SPECIFIC DIRECTIVE (trusted, from the server):
${strength}
${formatFor(pickLabel(random))}
EVIDENCE CANDIDATES, taken verbatim from PORTFOLIO_CONTEXT (choose only the ones that directly support the answer; you may shorten, never alter a number, date or claim, and never add evidence that is not in PORTFOLIO_CONTEXT):
${menu}
If none of these actually supports the question, say what the context does show and use Notice kind="unknown" for the rest rather than stretching it. If the stance is "not documented" or "no", do not dress unrelated evidence up as evidence. Do not call the section "Proof" unless that is the label given above.`;
}
