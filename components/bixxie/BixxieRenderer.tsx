"use client";

import { JSONUIProvider, Renderer, type Spec } from "@json-render/react";

import { BixxieActionContext, registry } from "@/components/bixxie/registry";
import BixxieMark from "@/components/bixxie/BixxieMark";
import { css } from "@/lib/css";

type BixxieRendererProps = {
  spec: Spec | null;
  onAsk: (question: string) => void;
  onNavigate: () => void;
  loading: boolean;
};

export default function BixxieRenderer({ spec, onAsk, onNavigate, loading }: BixxieRendererProps) {
  if (loading) {
    return (
      <div role="status" aria-label="Bixxie is typing" style={css("width:100%;display:flex;align-items:flex-start;gap:8px")}>
        <div style={css("padding-top:8px")}><BixxieMark /></div>
        <div style={css("display:inline-flex;align-items:center;gap:4px;height:40px;padding:0 14px;box-sizing:border-box;border-radius:14px;background:var(--bubble-secondary)")}>
          {[0, 1, 2].map((dot) => (
            <span key={dot} data-anim="1" style={css(`width:5px;height:5px;border-radius:9999px;background:var(--muted-foreground);animation:pulse 1.2s ease-in-out ${dot * 160}ms infinite`)} />
          ))}
        </div>
      </div>
    );
  }

  if (spec && spec.elements?.[spec.root]?.type !== "Answer") return null;

  return (
    <BixxieActionContext.Provider value={{ onAsk, onNavigate }}>
      <JSONUIProvider registry={registry}>
        <Renderer spec={spec} registry={registry} loading={loading} />
      </JSONUIProvider>
    </BixxieActionContext.Provider>
  );
}
