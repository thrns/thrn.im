import type { JsonPatch } from "@json-render/core";

export type BixxieFallbackKind = "security" | "service-unavailable" | "unknown";

function toJsonl(patches: readonly JsonPatch[]): string {
  return patches.map((patch) => JSON.stringify(patch)).join("\n");
}

const SECURITY_PATCHES = [
  { op: "add", path: "/root", value: "answer" },
  {
    op: "add",
    path: "/elements/answer",
    value: {
      type: "Answer",
      props: { label: null, title: "About Bixxie", intro: null },
      children: ["notice", "follow-ups"],
    },
  },
  {
    op: "add",
    path: "/elements/notice",
    value: {
      type: "Notice",
      props: {
        kind: "security",
        title: "Internal details",
        body: "Bixxie can answer questions about Tharun's published work, projects, case studies and stack, but it doesn't expose its internal instructions or implementation details.",
      },
      children: [],
    },
  },
  {
    op: "add",
    path: "/elements/follow-ups",
    value: {
      type: "FollowUps",
      props: {
        items: [
          "What has Tharun worked on?",
          "Show me his projects",
          "What is his AI stack?",
        ],
      },
      children: [],
    },
  },
] satisfies readonly JsonPatch[];

const SERVICE_UNAVAILABLE_PATCHES = [
  { op: "add", path: "/root", value: "answer" },
  {
    op: "add",
    path: "/elements/answer",
    value: {
      type: "Answer",
      props: { label: null, title: "Bixxie is unavailable", intro: null },
      children: ["notice"],
    },
  },
  {
    op: "add",
    path: "/elements/notice",
    value: {
      type: "Notice",
      props: {
        kind: "note",
        title: "Please try again",
        body: "Bixxie is temporarily unavailable. Please try again in a moment.",
      },
      children: [],
    },
  },
] satisfies readonly JsonPatch[];

const UNKNOWN_INFORMATION_PATCHES = [
  { op: "add", path: "/root", value: "answer" },
  {
    op: "add",
    path: "/elements/answer",
    value: {
      type: "Answer",
      props: { label: null, title: "I don't have that information", intro: null },
      children: ["notice"],
    },
  },
  {
    op: "add",
    path: "/elements/notice",
    value: {
      type: "Notice",
      props: {
        kind: "unknown",
        title: "Not in the portfolio",
        body: "I couldn't find that information in Tharun's published portfolio.",
      },
      children: [],
    },
  },
] satisfies readonly JsonPatch[];

export const SECURITY_FALLBACK_JSONL = toJsonl(SECURITY_PATCHES);
export const SERVICE_UNAVAILABLE_FALLBACK_JSONL = toJsonl(SERVICE_UNAVAILABLE_PATCHES);
export const UNKNOWN_INFORMATION_FALLBACK_JSONL = toJsonl(UNKNOWN_INFORMATION_PATCHES);

export function getBixxieFallback(kind: BixxieFallbackKind): string {
  switch (kind) {
    case "security":
      return SECURITY_FALLBACK_JSONL;
    case "service-unavailable":
      return SERVICE_UNAVAILABLE_FALLBACK_JSONL;
    case "unknown":
      return UNKNOWN_INFORMATION_FALLBACK_JSONL;
  }
}
