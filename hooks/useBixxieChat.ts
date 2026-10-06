"use client";

import type { Spec } from "@json-render/core";
import { useCallback, useRef, useState } from "react";

import { readBixxieSpecStream } from "@/lib/bixxie/stream";

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

type RequestOptions = {
  assistantId: string;
  prompt: string;
  questions: string[];
};

const MAX_INPUT_LENGTH = 2_000;
const MAX_QUESTIONS = 8;
const MAX_CONVERSATION_LENGTH = 12_000;

const HTTP_ERRORS: Record<number, string> = {
  429: "Bixxie is getting a few too many requests right now.",
  403: "This request could not be verified.",
  413: "That question is too long.",
};

const UNKNOWN_ERROR = "Bixxie couldn't answer that right now.";
const INTERRUPTED_ERROR = "This response was interrupted.";

function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function latestValidQuestions(questions: string[]): string[] {
  const latest = questions.slice(-MAX_QUESTIONS);
  let total = latest.reduce((sum, question) => sum + question.length, 0);

  while (latest.length > 1 && total > MAX_CONVERSATION_LENGTH) {
    total -= latest.shift()!.length;
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

  const runRequest = useCallback(async ({ assistantId, prompt, questions }: RequestOptions) => {
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

    try {
      const response = await fetch("/api/bixxie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: latestValidQuestions(questions).map((content) => ({ role: "user", content })) }),
        signal: controller.signal,
      });

      if (!response.ok) {
        fail(HTTP_ERRORS[response.status] ?? UNKNOWN_ERROR);
        return;
      }

      if (!response.body) {
        fail(UNKNOWN_ERROR);
        return;
      }

      const finalSpec = await readBixxieSpecStream(response.body, controller.signal, (spec) => {
        setAssistant((assistant) => ({ ...assistant, spec }));
      });
      setAssistant((assistant) => ({ ...assistant, spec: finalSpec, status: "done", error: undefined }));
    } catch {
      if (controller.signal.aborted) {
        if (activeControllerRef.current === controller) {
          const assistant = messagesRef.current.find(
            (message): message is BixxieAssistantMessage => message.id === assistantId && message.role === "assistant",
          );

          if (assistant?.spec) fail(INTERRUPTED_ERROR);
          else updateMessages((current) => current.filter((message) => message.id !== assistantId));
        }
      } else {
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
        error: "That question is too long.",
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
      prompt,
      questions: next.filter((message): message is BixxieUserMessage => message.role === "user").map((message) => message.text),
    });
  }, [runRequest, updateMessages]);

  const retry = useCallback(async (messageId: string) => {
    if (busyRef.current) return;

    const current = messagesRef.current;
    const assistantIndex = current.findIndex((message) => message.id === messageId && message.role === "assistant");
    if (assistantIndex < 0) return;

    const failed = current[assistantIndex] as BixxieAssistantMessage;
    if (failed.status !== "error" || failed.prompt.length > MAX_INPUT_LENGTH) return;

    const precedingQuestions = current
      .slice(0, assistantIndex)
      .filter((message): message is BixxieUserMessage => message.role === "user")
      .map((message) => message.text);

    updateMessages((messagesNow) => messagesNow.map((message) =>
      message.id === messageId && message.role === "assistant"
        ? { ...message, spec: null, status: "streaming", error: undefined }
        : message,
    ));

    await runRequest({
      assistantId: messageId,
      prompt: failed.prompt,
      questions: precedingQuestions,
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
