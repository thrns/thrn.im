import "server-only";

import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

type BixxieProviderConfiguration = {
  baseURL: string;
  apiKey: string;
  model: string;
  gatewayId: string;
  redactTerms: string[];
};

class BixxieConfigurationError extends Error {
  constructor() {
    super("Bixxie server configuration is incomplete.");
    this.name = "BixxieConfigurationError";
  }
}

function readConfiguration(): BixxieProviderConfiguration {
  const baseURL = process.env.BIXXIE_AI_BASE_URL;
  const apiKey = process.env.BIXXIE_AI_TOKEN;
  const model = process.env.BIXXIE_AI_MODEL;
  const gatewayId = process.env.BIXXIE_AI_GATEWAY_ID;
  const redactTerms = (process.env.BIXXIE_REDACT_TERMS ?? "")
    .split(",")
    .map((term) => term.trim())
    .filter(Boolean);

  if (!baseURL?.trim() || !apiKey?.trim() || !model?.trim() || !gatewayId?.trim()) {
    throw new BixxieConfigurationError();
  }

  return { baseURL, apiKey, model, gatewayId, redactTerms };
}

export function createBixxieChatModel() {
  const configuration = readConfiguration();

  const provider = createOpenAICompatible({
    name: "bixxie",
    apiKey: configuration.apiKey,
    baseURL: configuration.baseURL,
    headers: {
      "cf-aig-gateway-id": configuration.gatewayId,
      "cf-aig-collect-log-payload": "false",
    },
    includeUsage: false,
  });

  return provider.chatModel(configuration.model);
}
