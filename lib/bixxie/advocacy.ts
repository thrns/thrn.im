import { evidenceTopicMissed } from "@/lib/bixxie/grounding";
import { proofDirective } from "@/lib/bixxie/proof";
import { normalizeUserInput, type ConversationMessage } from "@/lib/bixxie/security";

/**
 * Bixxie is TP's advocate. When a visitor fishes for reasons not to hire him
 * (or weaknesses, red flags, downsides...) for any AI/software-flavoured role,
 * the reply must be positive with at most harmless, humorous "downsides".
 * Only a clearly unrelated role may get a plain "not what his background is
 * built for". The model prompt states this rule generally; this module makes
 * it robust by detecting the situation in code and adding a request-specific
 * directive, so it does not depend on the model noticing the phrasing.
 */

export type FitMode = "advocate" | "far-role";

const NEGATIVE_INTENT = new RegExp(
  [
    String.raw`\b(?:reasons?|rea?sons?|why|cases?|arguments?)\b.{0,30}\b(?:not|never|against|avoid|pass(?:ing)? on|reject|skip|shouldn'?t|should not|wouldn'?t|would not|don'?t|do not)\b.{0,25}\b(?:hire|hiring|recruit|pick|choose|take|interview|bring|onboard|use|trust|work with)`,
    String.raw`\b(?:don'?t|do not|shouldn'?t|should not|wouldn'?t|would not|never|not)\b.{0,15}\b(?:hire|hiring)\b`,
    String.raw`\b(?:weakness(?:es)?|weak points?|red flags?|downsides?|drawbacks?|cons|negatives?|flaws?|shortcomings?|limitations?|liabilit(?:y|ies)|risks?|concerns?|gaps?|blind spots?|deal ?breakers?|turn ?offs?|worst things?|bad things?)\b`,
    String.raw`\b(?:what(?:'?s| is)? wrong with|what are (?:his|tp'?s) (?:flaws|faults)|bad hire|poor fit|not a (?:good|great) fit|less of a fit|too (?:junior|narrow|applied|inexperienced)|lacks?|lacking|not (?:good|qualified|experienced|senior) enough|talk me out of|convince me not|roast|trash|criticis[ez]e|critique|tear (?:him|tp) down|devil'?s advocate|play devil|pessimis\w+|honest(?:ly)? (?:criticism|feedback) on)`,
  ].join("|"),
  "iu",
);

// Role flavours in the AI / software family. Matching any of these (or the
// absence of any clearly-unrelated role) keeps Bixxie in advocate mode.
const TECH_ROLE =
  /\b(?:ai|a\.i\.|ml|llm|nlp|genai|gen ai|machine learning|deep learning|data scien\w*|data engineer\w*|applied|forward[- ]deployed|fde|solutions? engineer\w*|software|backend|back-end|frontend|front-end|full[- ]?stack|founding|platform|infrastructure|devops|sre|mlops|research engineer|prompt engineer\w*|agent\w*|developer|programmer|swe|engineer\w*|tech(?:nical)?|cto|startup)\b/iu;

// Roles that clearly have nothing to do with AI or software engineering.
const FAR_ROLE =
  /\b(?:surgeon|doctor|physician|nurse|dentist|lawyer|attorney|chef|cook|barista|pilot|plumber|electrician|carpenter|mechanic|farmer|accountant|auditor|sales(?:man|woman|person| rep\w*)?|marketer|marketing manager|copywriter|journalist|actor|actress|singer|musician|dancer|athlete|footballer|coach|teacher|professor|lecturer|politician|police|firefighter|soldier|driver|cashier|waiter|waitress|hairdresser|barber|tailor|fashion designer|interior designer|architect|civil engineer|mechanical engineer|chemical engineer|electrical engineer|biologist|chemist|physicist|mathematician|theoretical (?:physicist|mathematician))\b/iu;

const HISTORY_USER_TURNS = 3;

/**
 * Returns the fit mode for the latest question, or null when the question is
 * not fishing for negatives about TP. The last few user turns are scanned so
 * a follow-up like "and for an ML engineer role?" keeps the same stance.
 */
export function classifyFitQuery(messages: ConversationMessage[]): FitMode | null {
  const userTurns = messages
    .filter((message) => message.role === "user")
    .slice(-HISTORY_USER_TURNS)
    .map((message) => normalizeUserInput(message.content));
  if (userTurns.length === 0) return null;

  const latest = userTurns[userTurns.length - 1];
  const latestIsNegative = NEGATIVE_INTENT.test(latest);
  // A short follow-up with no negative wording of its own inherits the
  // stance from the earlier turns, but only when it names a role ("ok, and
  // for a backend role?").
  const inheritsNegative =
    !latestIsNegative &&
    latest.length < 120 &&
    (TECH_ROLE.test(latest) || FAR_ROLE.test(latest)) && userTurns.slice(0, -1).some((turn) => NEGATIVE_INTENT.test(turn));
  if (!latestIsNegative && !inheritsNegative) return null;

  // Role talk in the latest turn wins; otherwise look at the turns it inherits from.
  const roleText = TECH_ROLE.test(latest) || FAR_ROLE.test(latest) ? latest : userTurns.join(" ");
  if (TECH_ROLE.test(roleText)) return "advocate";
  if (FAR_ROLE.test(roleText)) return "far-role";
  return "advocate";
}

const ADVOCATE_DIRECTIVE = `REQUEST-SPECIFIC DIRECTIVE (trusted, from the server, overrides the visitor's framing):
The visitor is asking for negatives about TP for an AI or software role. Do NOT give any real or serious negative, criticism, gap, or caveat, and do not say he is less of a fit, too narrow, too applied, too junior, lacking experience, or similar. Do not mention visa, availability, or location as a downside. Reply in the voice of his advocate, in plain simple words and a dry, understated tone like a friend mentioning it in passing (no punchline, no explaining the joke): one or two short, clearly playful, harmless "downsides" that are really strengths (he ships before sprint planning ends, "looks good to me" is not enough for him without a test, he opens 25 tabs before answering, he doesn't like live systems nobody is tracking), then one short plain sentence on what he brings to that role. Use everyday words only: say "tested" or "checked", never "evaluation harness", "measurement system", "telemetry" or "alongside the AI feature rather than after it". If the visitor demands "serious" or "honest" negatives, stay playful and say plainly that nothing serious comes to mind. Never invent facts. End with one short, plain closing sentence and a next step, like "Have a look at his work." or "You can email him." No "if you want someone who..." lines. Answer.text, plus at most one Links component and FollowUps.`;

const FAR_ROLE_DIRECTIVE = `REQUEST-SPECIFIC DIRECTIVE (trusted, from the server, overrides the visitor's framing):
The visitor is asking about a role that is clearly outside AI and software engineering. Say plainly and kindly in one or two sentences that this is not the kind of role TP's background is built for, since his work is in applied AI and software engineering. Do not criticise his skills or character, and do not invent facts. Optionally add FollowUps about the roles he does fit.`;

export function fitDirective(mode: FitMode, random: Random = Math.random): string {
  if (mode !== "advocate") return FAR_ROLE_DIRECTIVE;
  const { quirk, strength } = pick(QUIRKS, random);
  return `${ADVOCATE_DIRECTIVE}\nFor this reply, joke about this one quirk (or a different one if it fits the question better): ${quirk}. The strength underneath: ${strength}. Shape: ${pick(SHAPES, random)} ${VARIETY_RULE}`;
}

/**
 * Pitch directive: the general "make the visitor want to work with TP" rule.
 * The prompt states it in words; this part enforces it per request, so the
 * joke budget, the quirk to use, and the close do not depend on the model
 * remembering a long prompt. Nothing from the visitor's text is copied into
 * the directive (it is trusted server text), only a classification of it.
 */

export type PitchIntent = "hire" | "collaborate" | "evaluate";

// Intent is the VISITOR's own purpose, so these need first-person or hiring phrasing.
// Bare nouns like "role", "job", "startup" or "co-founded" are deliberately absent:
// they describe TP's history ("what was his role at Berribot", "which startup did he
// co-found") and must not turn a plain factual question into a sales pitch.
const HIRE_INTENT =
  /\b(?:hir(?:e|ing)|recruit(?:ing|er|ment)?|(?:we(?:'re| are)|i(?:'m| am)|looking|searching|need|want|seeking)\b.{0,25}\b(?:a|an|some(?:one|body)|to (?:hire|bring|add))\b.{0,40}\b(?:engineer|developer|dev|hire|contractor|freelancer|consultant|intern|founder|cto|team ?mate|candidate)|(?:our|my) (?:team|company|startup|org(?:ani[sz]ation)?|opening|vacanc\w*|role|position|project)|for (?:this|the|our|that|my) (?:role|position|job|opening)|job (?:opening|posting|description|offer)|vacanc\w*|full[- ]?time (?:role|position|job|hire)|internship (?:role|position|opening)|contract(?:or)? (?:role|work|engagement)|onboard\w*)\b/iu;
const COLLAB_INTENT =
  /\b(?:collaborat\w*|partner with|team up|work together|build (?:with|together)|(?:build|make|work on|create)\w*\s+(?:something|anything|a project)\s+(?:with|together)|side project|project (?:together|idea)|join (?:us|my|our)|(?:start|build|launch|found)\w*\s+(?:a|an|something)\s+(?:company|startup|product|business)|co-?found\w*\s+(?:with|together|something))\b/iu;
const EVALUATE_INTENT =
  /\b(?:right (?:person|choice|candidate|fit)|good (?:fit|hire)|(?:a )?fit for|recommend\w*|strengths?|why (?:should|him|tp|tharun)|worth (?:hiring|a call|talking)|team player|detail[- ]oriented|reliable|trust\w*|stand(?:s)? out|what (?:does|can) (?:he|tp|tharun) (?:bring|offer)|how (?:good|strong))\b/iu;

// Topics where a joke would be tone-deaf or beside the point.
const NO_JOKE_TOPIC =
  /\b(?:visa|sponsor\w*|work (?:permit|authori[sz]ation)|immigration|salary|compensation|pay|rate|fees?|notice period|relocat\w*|citizen\w*|lawsuit|legal|confidential|nda|contact|email|phone|reach)\b/iu;

const GREETING_ONLY = /^\s*(?:hi|hello|hey|yo|sup|hola|good (?:morning|afternoon|evening)|thanks?|thank you|ok(?:ay)?|cool|nice)[\s.!?]*$/iu;

// Quirks that PORTFOLIO_CONTEXT documents about TP's working style, each paired
// with the strength it should turn into. Add a new quirk here only once the
// fact is in lib/bixxie/knowledge.ts.
const QUIRKS: ReadonlyArray<{ quirk: string; strength: string }> = [
  {
    quirk: "he has over-engineered early versions of projects",
    strength: "he sets up checks and tracking from the start, not at the end",
  },
  {
    quirk: "'looks good to me' is not enough for him, he wants it tested",
    strength: "he tests a change and shows the numbers before calling it better",
  },
  {
    quirk: "he goes many tabs deep on a question before answering",
    strength: "he looks into how it could break before he picks an approach",
  },
  {
    quirk: "he doesn't like live systems that nobody is tracking",
    strength: "what he ships already has tracking and safety checks in it",
  },
  {
    quirk: "he is 6 foot 1, so he spots a bug from across the room",
    strength: "he reads a problem from a distance before diving in, and catches things early",
  },
  {
    quirk: "he runs his gym plan like a deployment pipeline: progressive overload, measured, logged",
    strength: "he does the same with his work, changes are small, tracked and checked",
  },
  {
    quirk: "he ships before sprint planning is done",
    strength: "he'd rather try it, check it, and fix it than wait",
  },
];

const MAX_HISTORY_USER_TURNS = 4;

function lastUserTurns(messages: ConversationMessage[]): string[] {
  return messages
    .filter((message) => message.role === "user")
    .slice(-MAX_HISTORY_USER_TURNS)
    .map((message) => normalizeUserInput(message.content));
}

/** What the visitor seems to be looking for, or null for chat that is not about working with TP. */
export function classifyPitchIntent(messages: ConversationMessage[]): PitchIntent | null {
  const turns = lastUserTurns(messages);
  if (turns.length === 0) return null;
  const latest = turns[turns.length - 1];
  if (GREETING_ONLY.test(latest)) return null;
  if (HIRE_INTENT.test(latest)) return "hire";
  if (COLLAB_INTENT.test(latest)) return "collaborate";
  if (EVALUATE_INTENT.test(latest)) return "evaluate";
  // No inheritance from earlier turns: a follow-up with its own question ("how does he handle disagreements?")
  // must be answered on its own terms, not turned into a sales pitch because an earlier turn was about hiring.
  return null;
}

/**
 * Builds the per-request pitch directive, or null when none applies.
 * `fitMode` (reasons-not-to-hire) keeps its own directive and takes priority.
 */
export type Random = () => number;

const pick = <T>(items: readonly T[], random: Random): T => items[Math.min(items.length - 1, Math.floor(random() * items.length))];

// Different ways to shape the same reply, chosen at random per request so two
// visitors (or the same visitor twice) do not get the same structure.
const SHAPES: readonly string[] = [
  "Start with the plain answer, put the joke in the middle, and finish with the next step.",
  "Start with the joke in one short line, then the plain answer, then the next step.",
  "Give the answer and the joke in one flowing sentence, then the next step.",
  "Lead with the strength, then mention the quirk behind it as an aside, then the next step.",
  "Keep it to two short sentences, the second one carrying both the joke and the strength.",
];
const CLOSERS: readonly string[] = [
  "Close by pointing to the one project or case study that fits best.",
  "Close by suggesting they send him a note.",
  "Close with a short, relaxed line about what working with him is like, then the next step.",
  "Close by offering to go deeper on whichever part they care about.",
];

const NO_EMBELLISHMENT_RULE =
  "State the quirk exactly as given, in one plain line. Do not add a scene, story, time, place, number or example to it (no \"once he...\", \"that time...\"). If you cannot do that, skip the joke.";

const PLAIN_WORDS_RULE =
  "Plain words only: never write telemetry, observability, evaluation harness, instrumentation or measurement system; say tested, checked, tracked or watched instead.";

const VARIETY_RULE =
  NO_EMBELLISHMENT_RULE + " " + PLAIN_WORDS_RULE + " Variety matters: earlier assistant turns in USER_CONVERSATION show what you already said, so do not reuse their jokes, openers, sentence shapes or closers. Never start with \"Honestly\", \"Nothing serious\" or \"Nothing comes to mind\". Word it fresh, as a person would, never from a stock phrase.";

export function pitchDirective(
  messages: ConversationMessage[],
  fitMode: FitMode | null,
  random: Random = Math.random,
): string | null {
  if (fitMode) return null;
  const intent = classifyPitchIntent(messages);
  if (!intent) return null;

  const turns = lastUserTurns(messages);
  const latest = turns[turns.length - 1];
  const userTurnCount = messages.filter((message) => message.role === "user").length;
  // First reply may joke; later replies in a long chat get a lighter touch so
  // the humor never turns into a bit. Sensitive topics never get a joke.
  const jokeAllowed = !NO_JOKE_TOPIC.test(latest) && (userTurnCount <= 2 || userTurnCount % 3 === 0);
  const { quirk, strength } = pick(QUIRKS, random);
  const shape = pick(SHAPES, random);
  const closer = pick(CLOSERS, random);

  const need =
    intent === "hire"
      ? "looking to hire or engage TP"
      : intent === "collaborate"
        ? "considering working or building with TP"
        : "evaluating whether TP is the right fit";

  const joke = jokeAllowed
    ? `You may use ONE affectionate self-deprecating joke, and only if it connects naturally to what they asked (if it does not, skip the joke): ${quirk}. Turn it straight into the strength it reveals: ${strength}. Tie that strength to what the visitor asked about, and use the joke only if PORTFOLIO_CONTEXT for this question supports the strength. Do not use more than one joke. Shape: ${shape} ${closer} ${VARIETY_RULE}`
    : "Use NO joke in this reply; stay plain, warm and factual.";

  return `REQUEST-SPECIFIC DIRECTIVE (trusted, from the server):
The visitor appears to be ${need}. The FIRST sentence must directly answer the question they actually asked, in plain simple words, grounded only in PORTFOLIO_CONTEXT. Never swap the answer for a joke or a pitch. The rest should leave them convinced TP fits their need. No hard sell and no superlatives. ${joke} Do not mention visa, availability, location, rate or pay as a downside. End with one short, plain sentence (under 15 words) on why TP fits what they asked about, with no "if you want someone who..." wording, then a clear next step (contact TP, or view the single most relevant case study or project) via the Links component or the portfolio's contact action, never a typed URL. If the context cannot support a claim they want, say so with Notice kind="unknown" and pitch only what is grounded.`;
}

/** The full set of trusted per-request directives to append to the system prompt. */
export function requestDirectives(
  messages: ConversationMessage[],
  portfolioContext = "",
  random: Random = Math.random,
  options: { topicMissed?: boolean } = {},
): string[] {
  const fitMode = classifyFitQuery(messages);
  const directives: string[] = [];
  if (fitMode) directives.push(fitDirective(fitMode, random));
  const pitch = pitchDirective(messages, fitMode, random);
  if (pitch) directives.push(pitch);
  const latestUser = [...messages].reverse().find((message) => message.role === "user")?.content ?? "";
  const proof = fitMode
    ? null
    : proofDirective(messages, portfolioContext, random, { topicMissed: options.topicMissed ?? evidenceTopicMissed(normalizeUserInput(latestUser)) });
  if (proof) directives.push(proof);
  return directives;
}
