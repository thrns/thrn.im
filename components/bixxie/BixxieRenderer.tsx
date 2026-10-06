"use client";

import { JSONUIProvider, Renderer, type Spec } from "@json-render/react";

import { BixxieActionContext, registry } from "@/components/bixxie/registry";
import { css } from "@/lib/css";

type BixxieRendererProps = {
  spec: Spec | null;
  onAsk: (question: string) => void;
  loading: boolean;
};

export default function BixxieRenderer({ spec, onAsk, loading }: BixxieRendererProps) {
  if (loading) {
    return (
      <div role="status" aria-label="Loading response" aria-busy="true" style={css("width:100%;display:flex;flex-direction:column;gap:10px")}>
        <div data-anim="1" style={css("width:36%;height:12px;background:var(--muted);border-radius:0;animation:pulse 2.2s ease-in-out infinite")} />
        <div data-anim="1" style={css("width:100%;height:48px;background:var(--muted);border-radius:0;animation:pulse 2.2s ease-in-out infinite")} />
        <div data-anim="1" style={css("width:84%;height:72px;background:var(--muted);border-radius:0;animation:pulse 2.2s ease-in-out infinite")} />
      </div>
    );
  }

  if (spec && spec.elements?.[spec.root]?.type !== "Answer") return null;

  return (
    <BixxieActionContext.Provider value={{ onAsk }}>
      <JSONUIProvider registry={registry}>
        <Renderer spec={spec} registry={registry} loading={loading} />
      </JSONUIProvider>
    </BixxieActionContext.Provider>
  );
}
