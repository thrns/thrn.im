import { classifyFitQuery, classifyPitchIntent } from "@/lib/bixxie/advocacy";
import { classifyProofTier, extractProofCandidates } from "@/lib/bixxie/proof";
import type { Spec } from "@json-render/core";

import { checkReply, type ReplyExpectations } from "@/lib/bixxie/replycheck";
import { inspectBixxieSpec } from "@/lib/bixxie/spec";
import type { ConversationMessage } from "@/lib/bixxie/security";

type AuditLog = { info: (...args: unknown[]) => void; warn: (...args: unknown[]) => void };

/**
 * After a reply has been fully sent, check it against the prompt's own rules
 * and log metadata only: the question's category and which rules were broken.
 * Never the question, the reply, or any matching text. It cannot change the
 * reply (it is already on the wire); it tells you what to fix in the prompt.
 *
 * In production only replies that break a rule are logged, so a healthy day is
 * silent; elsewhere every reply is logged so the categories are visible.
 */
export function createReplyAudit(
  messages: ConversationMessage[],
  portfolioContext: string,
  log: AuditLog = console,
  production = process.env.NODE_ENV === "production",
): (replyText: string) => void {
  const tier = classifyProofTier(messages);
  const fitMode = classifyFitQuery(messages);
  const intent = fitMode ? null : classifyPitchIntent(messages);
  const expectations: ReplyExpectations = {
    context: portfolioContext,
    expectEvidence: tier === "required" && !fitMode && extractProofCandidates(portfolioContext).length > 0,
    expectNextStep: intent === "hire",
    previousAnswers: messages.filter((message) => message.role === "assistant").map((message) => message.content),
  };

  return (replyText) => {
    let parsed: unknown;
    try {
      parsed = JSON.parse(replyText);
    } catch {
      log.warn("[bixxie] reply audit", { tier, fitMode, intent, parsed: false });
      return;
    }
    if (!inspectBixxieSpec(parsed).spec) {
      log.warn("[bixxie] reply audit", { tier, fitMode, intent, parsed: true, valid: false });
      return;
    }
    // Check what the model actually wrote, not the cleaned-up version the visitor sees:
    // spec.ts already swaps banned words and drops padded rows on the way to the screen,
    // and this log exists to show what still needs fixing in the prompt.
    const kinds = [...new Set(checkReply(parsed as Spec, expectations).map((violation) => violation.kind))];
    if (production && kinds.length === 0) return;
    log.info("[bixxie] reply audit", { tier, fitMode, intent, violations: kinds });
  };
}
