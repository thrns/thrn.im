import { describe, expect, test } from "bun:test";

import { getBixxieFallback } from "@/lib/bixxie/fallback";
import { handleBixxieRequest } from "@/app/api/bixxie/route";

type EnvChanges = Record<string, string | undefined>;

async function withEnvironment(changes: EnvChanges, run: () => Promise<void>): Promise<void> {
  const previous = new Map<string, string | undefined>();
  for (const [key, value] of Object.entries(changes)) {
    previous.set(key, process.env[key]);
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }

  try {
    await run();
  } finally {
    for (const [key, value] of previous) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
}

function jsonRequest(payload: unknown, headers: Record<string, string> = {}): Request {
  return new Request("https://portfolio.test/api/bixxie", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(payload),
  });
}

function iteratorFrom(text: string): AsyncIterator<string> {
  let sent = false;
  return {
    async next() {
      if (sent) return { done: true, value: undefined };
      sent = true;
      return { done: false, value: text };
    },
    async return() {
      return { done: true, value: undefined };
    },
  };
}

describe("Bixxie POST route validation and origin checks", () => {
  test("rejects requests with the wrong content type", async () => {
    const response = await handleBixxieRequest(new Request("https://portfolio.test/api/bixxie", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: "{}",
    }));

    expect(response.status).toBe(415);
  });

  test("rejects content lengths above 32 KB", async () => {
    const response = await handleBixxieRequest(jsonRequest({ messages: [{ role: "user", content: "hello" }] }, {
      "Content-Length": String(32 * 1024 + 1),
    }));
    const streamedOversize = await handleBixxieRequest(new Request("https://portfolio.test/api/bixxie", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Content-Length": "1" },
      body: "x".repeat(32 * 1024 + 1),
    }));

    expect(response.status).toBe(413);
    expect(streamedOversize.status).toBe(413);
  });

  test("rejects an empty payload, null body and wrong request shape", async () => {
    const empty = await handleBixxieRequest(jsonRequest({}));
    const nullBody = await handleBixxieRequest(new Request("https://portfolio.test/api/bixxie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }));
    const wrongShape = await handleBixxieRequest(jsonRequest({ messages: "hello" }));

    expect(empty.status).toBe(400);
    expect(nullBody.status).toBe(400);
    expect(wrongShape.status).toBe(400);
  });

  test("rejects production requests from origins outside the exact allowlist", async () => {
    await withEnvironment({ NODE_ENV: "production", BIXXIE_ALLOWED_ORIGINS: "https://portfolio.test" }, async () => {
      const response = await handleBixxieRequest(jsonRequest(
        { messages: [{ role: "user", content: "What projects has Tharun built?" }] },
        { Origin: "https://attacker.test" },
      ));
      expect(response.status).toBe(403);
    });
  });

  test("accepts a valid same-origin payload and returns the generated structured-output JSON", async () => {
    await withEnvironment({ NODE_ENV: "production", BIXXIE_ALLOWED_ORIGINS: "https://portfolio.test" }, async () => {
      let called = false;
      const response = await handleBixxieRequest(jsonRequest(
        { messages: [{ role: "user", content: "What projects has Tharun built?" }] },
        { Origin: "https://portfolio.test", "Sec-Fetch-Site": "same-origin" },
      ), async () => {
        called = true;
        return iteratorFrom(getBixxieFallback("unknown"));
      });

      const body = await response.text();
      expect(response.status).toBe(200);
      expect(called).toBe(true);
      expect(body).toContain('"root":"answer"');
      expect(response.headers.get("Cache-Control")).toBe("no-store, private");
    });
  });

  test("turns upstream failures into a safe fallback without upstream text", async () => {
    const upstreamText = "PRIVATE_UPSTREAM_RESPONSE_BODY_12345";
    const response = await handleBixxieRequest(jsonRequest({
      messages: [{ role: "user", content: "What projects has Tharun built?" }],
    }), async () => ({
      async next() {
        throw new Error(upstreamText);
      },
      async return() {
        return { done: true, value: undefined };
      },
    }));

    const body = await response.text();
    expect(response.status).toBe(503);
    expect(body.includes(upstreamText)).toBe(false);
    expect(body).toContain("Temporarily unavailable");
  });
});
