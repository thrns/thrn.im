"use client";

import type { Spec } from "@json-render/core";
import { useCallback, useRef, useState } from "react";

import { summarizeBixxieSpec } from "@/lib/bixxie/spec";
import { BixxieStreamError, readBixxieSpecStream } from "@/lib/bixxie/stream";

export type BixxieUserMessage = {
  id: string;
  role: "user";
  text: string;
};

export type BixxieAssistantMessage = {
  id: string;
  role: "assistant";
  prompt: string;
  spec: Spec | null;
  status: "streaming" | "done" | "error";
  error?: string;
};

export type BixxieMessage = BixxieUserMessage | BixxieAssistantMessage;

// Light conversation history sent back to the server: the user's past
// questions plus a short summary of Bixxie's own prior replies, so a
// follow-up question doesn't read like the start of a brand new chat.
type BixxieHistoryItem = { role: "user" | "assistant"; content: string };

type RequestOptions = {
  assistantId: string;
  history: BixxieHistoryItem[];
};

const MAX_INPUT_LENGTH = 2_000;
const MAX_HISTORY_MESSAGES = 8;
const MAX_CONVERSATION_LENGTH = 12_000;

const HTTP_ERRORS: Record<number, string> = {
  429: "Too many requests right now. Try again in a moment.",
  403: "I couldn't verify that request.",
  413: "That question is too long. Keep it under 2,000 characters.",
};

const UNKNOWN_ERROR = "I couldn't answer that right now.";
const INTERRUPTED_ERROR = "This reply was interrupted.";

// TEMP: Remove this metadata-only diagnostic logging after the Bixxie stream issue is resolved.
function logBixxieClientFailure(
  stage: "http_response" | "fetch" | "response_stream",
  category: string,
  status?: number,
  detail?: string,
): void {
  const statusText = status === undefined ? "" : ` status=${status}`;
  const detailText = detail === undefined ? "" : ` detail=${detail}`;
  console.warn(`[bixxie] ${stage}: ${category}${statusText}${detailText}`);
}

function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/** Turns the in-memory message list into light {role, content} history for the server. */
function buildHistory(messages: BixxieMessage[]): BixxieHistoryItem[] {
  const history: BixxieHistoryItem[] = [];

  for (const message of messages) {
    if (message.role === "user") {
      history.push({ role: "user", content: message.text });
      continue;
    }

    if (message.status !== "done" || !message.spec) continue;
    const summary = summarizeBixxieSpec(message.spec);
    if (summary) history.push({ role: "assistant", content: summary });
  }

  return history;
}

function latestValidHistory(history: BixxieHistoryItem[]): BixxieHistoryItem[] {
  const latest = history.slice(-MAX_HISTORY_MESSAGES);
  let total = latest.reduce((sum, item) => sum + item.content.length, 0);

  while (latest.length > 1 && total > MAX_CONVERSATION_LENGTH) {
    total -= latest.shift()!.content.length;
  }

  return latest;
}

/** Keeps Bixxie's conversation in memory and exposes only validated UI specs. */
export function useBixxieChat() {
  const [messages, setMessages] = useState<BixxieMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [activeAbortController, setActiveAbortController] = useState<AbortController | null>(null);

  const messagesRef = useRef<BixxieMessage[]>([]);
  const busyRef = useRef(false);
  const activeControllerRef = useRef<AbortController | null>(null);

  const updateMessages = useCallback((updater: (current: BixxieMessage[]) => BixxieMessage[]) => {
    const next = updater(messagesRef.current);
    messagesRef.current = next;
    setMessages(next);
  }, []);

  const setBusyState = useCallback((next: boolean) => {
    busyRef.current = next;
    setBusy(next);
  }, []);

  const runRequest = useCallback(async ({ assistantId, history }: RequestOptions) => {
    if (busyRef.current) return;

    const controller = new AbortController();
    activeControllerRef.current = controller;
    setActiveAbortController(controller);
    setBusyState(true);

    const setAssistant = (update: (message: BixxieAssistantMessage) => BixxieAssistantMessage) => {
      if (activeControllerRef.current !== controller) return;
      updateMessages((current) => current.map((message) =>
        message.id === assistantId && message.role === "assistant" ? update(message) : message,
      ));
    };

    const fail = (message: string) => {
      setAssistant((assistant) => ({ ...assistant, status: "error", error: message }));
    };

    let failureStage: "fetch" | "response_stream" = "fetch";
    let responseStatus: number | undefined;

    try {
      const response = await fetch("/api/bixxie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: latestValidHistory(history) }),
        signal: controller.signal,
      });
      responseStatus = response.status;

      if (!response.ok) {
        logBixxieClientFailure("http_response", "non_success_status", response.status);
        fail(HTTP_ERRORS[response.status] ?? UNKNOWN_ERROR);
        return;
      }

      if (!response.body) {
        logBixxieClientFailure("http_response", "missing_body", response.status);
        fail(UNKNOWN_ERROR);
        return;
      }

      failureStage = "response_stream";
      const finalSpec = await readBixxieSpecStream(response.body, controller.signal, (spec) => {
        setAssistant((assistant) => ({ ...assistant, spec }));
      });
      setAssistant((assistant) => ({ ...assistant, spec: finalSpec, status: "done", error: undefined }));
    } catch (error) {
      if (controller.signal.aborted) {
        if (activeControllerRef.current === controller) {
          const assistant = messagesRef.current.find(
            (message): message is BixxieAssistantMessage => message.id === assistantId && message.role === "assistant",
          );

          if (assistant?.spec) fail(INTERRUPTED_ERROR);
          else updateMessages((current) => current.filter((message) => message.id !== assistantId));
        }
      } else {
        logBixxieClientFailure(
          failureStage,
          failureStage === "response_stream" && error instanceof BixxieStreamError
            ? error.failureKind
            : "request_failed",
          responseStatus,
          failureStage === "response_stream" && error instanceof BixxieStreamError ? error.detail : undefined,
        );
        fail(UNKNOWN_ERROR);
      }
    } finally {
      if (activeControllerRef.current === controller) {
        activeControllerRef.current = null;
        setActiveAbortController(null);
        setBusyState(false);
      }
    }
  }, [setBusyState, updateMessages]);

  const send = useCallback(async (text: string) => {
    const prompt = text.trim();
    if (!prompt || busyRef.current) return;

    if (prompt.length > MAX_INPUT_LENGTH) {
      const assistant: BixxieAssistantMessage = {
        id: createId(),
        role: "assistant",
        prompt,
        spec: null,
        status: "error",
        error: "That question is too long. Keep it under 2,000 characters.",
      };
      updateMessages((current) => [...current, assistant]);
      return;
    }

    const user: BixxieUserMessage = { id: createId(), role: "user", text: prompt };
    const assistant: BixxieAssistantMessage = {
      id: createId(),
      role: "assistant",
      prompt,
      spec: null,
      status: "streaming",
    };
    const next = [...messagesRef.current, user, assistant];
    updateMessages(() => next);
    setDraft("");

    await runRequest({
      assistantId: assistant.id,
      history: buildHistory(next),
    });
  }, [runRequest, updateMessages]);

  const retry = useCallback(async (messageId: string) => {
    if (busyRef.current) return;

    const current = messagesRef.current;
    const assistantIndex = current.findIndex((message) => message.id === messageId && message.role === "assistant");
    if (assistantIndex < 0) return;

    const failed = current[assistantIndex] as BixxieAssistantMessage;
    if (failed.status !== "error" || failed.prompt.length > MAX_INPUT_LENGTH) return;

    const history = buildHistory(current.slice(0, assistantIndex));

    updateMessages((messagesNow) => messagesNow.map((message) =>
      message.id === messageId && message.role === "assistant"
        ? { ...message, spec: null, status: "streaming", error: undefined }
        : message,
    ));

    await runRequest({
      assistantId: messageId,
      history,
    });
  }, [runRequest, updateMessages]);

  const abort = useCallback(() => {
    const controller = activeControllerRef.current;
    if (!controller) return;

    controller.abort();
    activeControllerRef.current = null;
    setActiveAbortController(null);
    setBusyState(false);

    const assistant = messagesRef.current.find(
      (message): message is BixxieAssistantMessage => message.role === "assistant" && message.status === "streaming",
    );
    if (!assistant) return;

    if (assistant.spec) {
      updateMessages((current) => current.map((message) =>
        message.id === assistant.id && message.role === "assistant"
          ? { ...message, status: "error", error: INTERRUPTED_ERROR }
          : message,
      ));
    } else {
      updateMessages((current) => current.filter((message) => message.id !== assistant.id));
    }
  }, [setBusyState, updateMessages]);

  return {
    messages,
    draft,
    setDraft,
    busy,
    activeAbortController,
    send,
    retry,
    abort,
  };
}
