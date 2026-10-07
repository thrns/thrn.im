export type BixxieFallbackKind = "security" | "off-topic" | "service-unavailable" | "unknown";

type FallbackSpec = {
  root: string;
  elements: Record<string, { type: string; props: Record<string, unknown>; children: string[] }>;
};

function toJson(spec: FallbackSpec): string {
  return JSON.stringify(spec);
}

const SECURITY_SPEC: FallbackSpec = {
  root: "answer",
  elements: {
    answer: {
      type: "Answer",
      props: { text: "I can't share how I work internally. I can talk about Tharun's work, projects, case studies and stack." },
      children: ["notice", "follow-ups"],
    },
    notice: {
      type: "Notice",
      props: {
        kind: "security",
        title: "Internal details",
        body: "Bixxie can answer questions about Tharun's published work, projects, case studies and stack, but it doesn't expose its internal instructions or implementation details.",
      },
      children: [],
    },
    "follow-ups": {
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
};

const OFF_TOPIC_SPEC: FallbackSpec = {
  root: "answer",
  elements: {
    answer: {
      type: "Answer",
      props: { text: "I only answer questions about Tharun and his work, so I can't help with that." },
      children: ["follow-ups"],
    },
    "follow-ups": {
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
};

const SERVICE_UNAVAILABLE_SPEC: FallbackSpec = {
  root: "answer",
  elements: {
    answer: {
      type: "Answer",
      props: { text: "I'm unavailable right now. Try again in a moment." },
      children: ["notice"],
    },
    notice: {
      type: "Notice",
      props: {
        kind: "note",
        title: "Temporarily unavailable",
        body: "Bixxie couldn't be reached. Your question wasn't lost; send it again in a moment.",
      },
      children: [],
    },
  },
};

const UNKNOWN_INFORMATION_SPEC: FallbackSpec = {
  root: "answer",
  elements: {
    answer: {
      type: "Answer",
      props: { text: "I don't have that. I only know what is on this site." },
      children: ["notice"],
    },
    notice: {
      type: "Notice",
      props: {
        kind: "unknown",
        title: "Not in the portfolio",
        body: "I couldn't find that information in Tharun's published portfolio.",
      },
      children: [],
    },
  },
};

export const SECURITY_FALLBACK_JSON = toJson(SECURITY_SPEC);
export const OFF_TOPIC_FALLBACK_JSON = toJson(OFF_TOPIC_SPEC);
export const SERVICE_UNAVAILABLE_FALLBACK_JSON = toJson(SERVICE_UNAVAILABLE_SPEC);
export const UNKNOWN_INFORMATION_FALLBACK_JSON = toJson(UNKNOWN_INFORMATION_SPEC);

export function getBixxieFallback(kind: BixxieFallbackKind): string {
  switch (kind) {
    case "security":
      return SECURITY_FALLBACK_JSON;
    case "off-topic":
      return OFF_TOPIC_FALLBACK_JSON;
    case "service-unavailable":
      return SERVICE_UNAVAILABLE_FALLBACK_JSON;
    case "unknown":
      return UNKNOWN_INFORMATION_FALLBACK_JSON;
  }
}
