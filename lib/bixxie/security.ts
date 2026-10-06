import { Buffer } from "node:buffer";

export type ConversationMessage = {
  role: "user" | "assistant";
  content: string;
};

export class BixxieInputValidationError extends Error {
  constructor() {
    super("Invalid conversation input.");
    this.name = "BixxieInputValidationError";
  }
}

const MAX_MESSAGES = 8;
const MAX_MESSAGE_CHARS = 2_000;
// Assistant turns are a short summary of Bixxie's own prior reply, not the
// full structured output, so they get a much tighter cap than a user message.
const MAX_ASSISTANT_SUMMARY_CHARS = 400;
const MAX_CONVERSATION_CHARS = 12_000;

const ZERO_WIDTH_AND_FORMAT_CHARS = /[\p{Cf}\u034f\u115f\u1160\u17b4\u17b5\u3164\ufe00-\ufe0f\uffa0]/gu;

export function normalizeUserInput(text: string): string {
  return text
    .normalize("NFKC")
    .replace(ZERO_WIDTH_AND_FORMAT_CHARS, "")
    .replace(/\s+/gu, " ")
    .trim();
}

export function validateConversation(input: unknown): ConversationMessage[] {
  if (!Array.isArray(input) || input.length < 1 || input.length > MAX_MESSAGES) {
    throw new BixxieInputValidationError();
  }

  // The last message is always the live question this request is answering;
  // everything before it is light history for continuity only.
  const lastMessage = input[input.length - 1] as Record<string, unknown> | undefined;
  if (!lastMessage || lastMessage.role !== "user") {
    throw new BixxieInputValidationError();
  }

  let totalChars = 0;
  const normalized: ConversationMessage[] = [];

  for (const message of input) {
    if (
      !message ||
      typeof message !== "object" ||
      Array.isArray(message) ||
      Object.keys(message).length !== 2 ||
      !Object.hasOwn(message, "role") ||
      !Object.hasOwn(message, "content")
    ) {
      throw new BixxieInputValidationError();
    }

    const candidate = message as Record<string, unknown>;
    if (
      (candidate.role !== "user" && candidate.role !== "assistant") ||
      typeof candidate.content !== "string"
    ) {
      throw new BixxieInputValidationError();
    }

    const maxChars = candidate.role === "assistant" ? MAX_ASSISTANT_SUMMARY_CHARS : MAX_MESSAGE_CHARS;
    const content = normalizeUserInput(candidate.content);
    if (content.length < 1 || content.length > maxChars) {
      throw new BixxieInputValidationError();
    }

    totalChars += content.length;
    if (totalChars > MAX_CONVERSATION_CHARS) {
      throw new BixxieInputValidationError();
    }

    normalized.push({ role: candidate.role, content });
  }

  return normalized;
}

const EXTRACTION_PHRASES: readonly RegExp[] = [
  /\bignore\s+(?:(?:all|any)\s+)?(?:the\s+)?(?:previous|prior|above)\s+instructions?\b/i,
  /\bignore\s+(?:(?:all|any)\s+)?(?:the\s+)?(?:system|developer)\s+instructions?\b/i,
  /\bignore\s+(?:(?:all|any)\s+)?(?:the\s+)?(?:system\s*(?:\/|and|or)\s*developer|developer\s*(?:\/|and|or)\s*system)\s+instructions?\b/i,
  /\b(?:reveal|show|print|repeat|display|quote)\s+(?:(?:me|us)\s+)?(?:(?:the|your)\s+)?system\s+prompt\b/i,
  /\bhidden\s+instructions?\b/i,
  /\bdeveloper\s+message\b/i,
  /\benvironment\s+variables?\b/i,
  /\benv\s+vars?\b/i,
  /\bapi[\s_-]*keys?\b/i,
  /\b(?:access|auth(?:entication)?|api)?[\s_-]*tokens?\b/i,
  /\bsecrets?\b/i,
  /\bunderlying\s+models?\b/i,
  /\bmodel\s+names?\b/i,
  /\bwhat\s+(?:(?:is|are)\s+)?(?:your\s+)?(?:underlying\s+)?models?\s+(?:are\s+)?you\b/i,
  /\b(?:what|which)\s+(?:(?:is|are)\s+)?(?:your\s+)?(?:underlying\s+)?models?\s+(?:are\s+)?you\s+(?:using|running|based\s+on)\b/i,
  /\bprovider\s+names?\b/i,
  /\b(?:what|which|who|name|identify|reveal|show|tell\s+me)\s+(?:(?:is|are)\s+)?(?:the\s+)?provider\b/i,
  /\bwho\s+(?:is|are)\s+(?:your\s+)?providers?\b/i,
  /\binternal\s+endpoints?\b/i,
  /\binternal\s+config(?:urations?)?\b/i,
  /\bjailbreak(?:ing)?\b/i,
  /\bdeveloper\s+mode\b/i,
  /\bprompt\s+extraction\b/i,
];

const BASE64_CANDIDATE = /(?:^|[^A-Za-z0-9+/_=-])([A-Za-z0-9+/_-]{32,4096}={0,2})(?=$|[^A-Za-z0-9+/_=-])/gu;

function containsExtractionPhrase(text: string): boolean {
  return EXTRACTION_PHRASES.some((phrase) => phrase.test(text));
}

function decodeBase64Safely(encoded: string): string | null {
  if (encoded.length > 4_096 || encoded.length % 4 === 1) return null;
  if (encoded.includes("=") && encoded.length % 4 !== 0) return null;

  try {
    const standardBase64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
    const padded = standardBase64.padEnd(Math.ceil(standardBase64.length / 4) * 4, "=");
    return Buffer.from(padded, "base64").toString("utf8");
  } catch {
    return null;
  }
}

export function isExtractionAttempt(text: string): boolean {
  const normalized = normalizeUserInput(text);
  if (containsExtractionPhrase(normalized)) return true;

  BASE64_CANDIDATE.lastIndex = 0;
  for (const match of normalized.matchAll(BASE64_CANDIDATE)) {
    const decoded = decodeBase64Safely(match[1]);
    if (decoded && containsExtractionPhrase(normalizeUserInput(decoded))) return true;
  }

  return false;
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function readProtectedValues(): string[] {
  return (process.env.BIXXIE_REDACT_TERMS ?? "")
    .split(",")
    .map((term) => term.trim())
    .filter(Boolean);
}

function redactJsonValue(value: unknown, matcher: RegExp): unknown {
  if (typeof value === "string") return value.replace(matcher, "Bixxie");
  if (Array.isArray(value)) return value.map((item) => redactJsonValue(item, matcher));
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, redactJsonValue(item, matcher)]),
    );
  }
  return value;
}

function redactJsonLine(line: string, matcher: RegExp | null): string {
  if (!matcher || !line.trim()) return line;

  try {
    const parsed: unknown = JSON.parse(line);
    return JSON.stringify(redactJsonValue(parsed, matcher));
  } catch {
    // The line can be invalid/incomplete JSON when the model's output gets
    // cut off mid-element (e.g. hitting the token budget) rather than
    // genuinely malformed — the client already salvages a truncated answer,
    // so redact as plain text instead of throwing away the whole response.
    return line.replace(matcher, "Bixxie");
  }
}

export function createStreamingRedactor(protectedValues = readProtectedValues()) {
  const terms = [...new Set(protectedValues.map((term) => term.trim()).filter(Boolean))]
    .sort((left, right) => right.length - left.length);
  const matcher = terms.length > 0
    ? new RegExp(terms.map(escapeRegExp).join("|"), "giu")
    : null;

  let rollingBuffer = "";
  let flushed = false;

  return {
    push(chunk: string): string {
      if (flushed) throw new Error("Cannot write to a flushed redaction stream.");
      rollingBuffer += chunk;

      let output = "";
      let newlineIndex = rollingBuffer.indexOf("\n");
      while (newlineIndex >= 0) {
        const line = rollingBuffer.slice(0, newlineIndex);
        const carriageReturn = line.endsWith("\r");
        const content = carriageReturn ? line.slice(0, -1) : line;
        output += `${redactJsonLine(content, matcher)}${carriageReturn ? "\r\n" : "\n"}`;
        rollingBuffer = rollingBuffer.slice(newlineIndex + 1);
        newlineIndex = rollingBuffer.indexOf("\n");
      }

      return output;
    },

    flush(): string {
      if (flushed) return "";
      flushed = true;
      const output = redactJsonLine(rollingBuffer, matcher);
      rollingBuffer = "";
      return output;
    },
  };
}
