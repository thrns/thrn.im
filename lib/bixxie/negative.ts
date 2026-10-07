/**
 * Detects an evidence row that is about missing information ("not documented",
 * "no experience with X is present in his portfolio") rather than something TP
 * did. Such a row is padding. Shared by the renderer-side normalizer (spec.ts,
 * which drops these rows) and the reply checker, so both agree on what counts.
 *
 * It must NOT match a real achievement that happens to contain "no", such as
 * "Migrated with no data loss and no downtime", so every pattern ties the
 * negative to documentation, presence or tracking, never to a bare "no <noun>".
 */
const MISSING_INFO = [
  // "not documented", "isn't tracked", "not yet confirmed", "is not available"
  String.raw`\bnot\s+(?:currently\s+|yet\s+|publicly\s+|reliably\s+)?(?:documented|tracked|available|known|confirmed|recorded|listed|supplied|specified|disclosed|grounded|verified)\b`,
  String.raw`\b(?:isn'?t|aren'?t|wasn'?t|weren'?t)\s+(?:currently\s+|yet\s+)?(?:documented|tracked|available|known|confirmed|recorded|listed|specified|disclosed)\b`,
  String.raw`\bundocumented\b|\bunconfirmed\b|\bunverified\b`,
  // "is unknown", "are unknown"
  String.raw`\b(?:is|are|was|were)\s+unknown\b`,
  // "not present in his portfolio", "not in the portfolio", "not found in his work"
  String.raw`\bnot\s+(?:present|found|listed|mentioned|included)\s+in\b`,
  String.raw`\bnot\s+in\s+(?:his|the)\s+(?:portfolio|records?|data|work)\b`,
  // "No experience with rockets is present/documented/available in his portfolio"
  String.raw`\bno\s+(?:\w+\s+){0,3}(?:experience|evidence|record|data|information|mention|details?)\b[^.]{0,80}\b(?:is|are|was|were)\s+(?:present|documented|available|listed|recorded|found|given|provided|mentioned)\b`,
  String.raw`\bno\s+(?:public|specific|documented|verified|confirmed)\s+(?:experience|evidence|record|data|information|mention|details?)\b`,
  // "The portfolio does not track / document / list ..."
  String.raw`\b(?:portfolio|records?|data|site|sources?)\s+(?:does\s+not|doesn'?t|do\s+not|don'?t)\s+(?:track|document|list|include|say|show|mention|have|contain|cover)\b`,
].join("|");

const NEGATIVE_ROW = new RegExp(MISSING_INFO, "iu");

export function isNegativeRow(row: { label?: unknown; value?: unknown }): boolean {
  return NEGATIVE_ROW.test(`${String(row?.label ?? "")} ${String(row?.value ?? "")}`);
}
