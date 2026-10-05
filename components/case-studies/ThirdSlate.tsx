import { Fragment } from 'react';
import type { MouseEventHandler, ReactNode } from 'react';
import { css } from '@/lib/css';

export default function ThirdSlateArticle({ toc, goCases }: { toc: ReactNode; goCases: MouseEventHandler }) {
  return (
    <article style={css("max-width:var(--content-width);margin:0 auto;padding:var(--space-6xl) var(--page-gutter) 0;box-sizing:border-box")}>
      <a href="/case-studies" onClick={goCases} aria-label="Back to case studies" data-anim="1" style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em;text-decoration:none;animation:fadeUp .6s var(--ease) both")} className="hv-clay"><span aria-hidden="true" style={css("color:var(--muted-foreground)")}>[←]</span>Case studies</a>
      <h1 className="h1" data-anim="1" style={css("margin:32px 0 0;animation:fadeUp .7s var(--ease) 60ms both")}>ThirdSlate: Agentic RAG for Course-Grounded Learning</h1>
      <div aria-hidden="true" data-anim="1" style={css("width:32px;height:1px;margin:16px 0 0;background:var(--foreground);animation:fadeUp .7s var(--ease) 135ms both")}></div>
      <p className="p light" data-anim="1" style={css("margin:16px 0 0;max-width:520px;line-height:23px;animation:fadeUp .7s var(--ease) 160ms both")}>Co-founder. I designed the product and built the AI backend, from document ingestion and retrieval to evaluation and deployment.</p>
      <nav aria-label="Sections" data-anim="1" style={css("margin-top:28px;display:flex;flex-wrap:wrap;gap:8px;animation:fadeUp .7s var(--ease) 220ms both")}>{toc}</nav>
      <div style={css("margin-top:56px;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px")}>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 260ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>1,000+</div>
          <div className="p light" style={css("margin-top:6px")}>students</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--muted-foreground)")}>real product usage</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 320ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>94%</div>
          <div className="p light" style={css("margin-top:6px")}>response relevance</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--muted-foreground)")}>answer/query relevance</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 380ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>−55%</div>
          <div className="p light" style={css("margin-top:6px")}>manual QA</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--muted-foreground)")}>automated evaluation</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 440ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>89%</div>
          <div className="p light" style={css("margin-top:6px")}><a href="https://docs.ragas.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>RAGAS</a> faithfulness</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--muted-foreground)")}>evidence support</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 500ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>−38%</div>
          <div className="p light" style={css("margin-top:6px")}>hallucinations</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--muted-foreground)")}>grounding + review</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 560ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>−60%</div>
          <div className="p light" style={css("margin-top:6px")}>processing time</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--muted-foreground)")}>optimized ingestion</div>
        </div>
      </div>
      <div style={css("margin-top:32px;border-top:1px solid var(--foreground)")}>
        <div data-anim="1" data-r="row" style={css("animation:fadeUp .7s var(--ease) 620ms both;display:grid;grid-template-columns:140px minmax(0,1fr);gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)")}>
          <span className="p light">Approach</span>
          <div data-label="Approach" style={css("display:flex;flex-wrap:wrap;align-items:center;gap:8px")}>
            <span style={css("display:inline-flex;align-items:center;gap:8px")}>
              <span style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em")}><span style={css("color:var(--muted-foreground)")}>[01]</span>Course material</span>
              <span aria-hidden="true" style={css("color:var(--muted-foreground);font-weight:300")}>→</span>
            </span>
            <span style={css("display:inline-flex;align-items:center;gap:8px")}>
              <span style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em")}><span style={css("color:var(--muted-foreground)")}>[02]</span>Scoped retrieval</span>
              <span aria-hidden="true" style={css("color:var(--muted-foreground);font-weight:300")}>→</span>
            </span>
            <span style={css("display:inline-flex;align-items:center;gap:8px")}>
              <span style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em")}><span style={css("color:var(--muted-foreground)")}>[03]</span>Agent orchestration</span>
              <span aria-hidden="true" style={css("color:var(--muted-foreground);font-weight:300")}>→</span>
            </span>
            <span style={css("display:inline-flex;align-items:center;gap:8px")}>
              <span style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em")}><span style={css("color:var(--muted-foreground)")}>[04]</span>Grounding</span>
              <span aria-hidden="true" style={css("color:var(--muted-foreground);font-weight:300")}>→</span>
            </span>
            <span style={css("display:inline-flex;align-items:center;gap:8px")}><span style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em")}><span style={css("color:var(--muted-foreground)")}>[05]</span>Evidence-backed response</span></span>
          </div>
        </div>
        <div data-anim="1" data-r="row" style={css("animation:fadeUp .7s var(--ease) 680ms both;display:grid;grid-template-columns:140px minmax(0,1fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
          <span className="p light">Technologies</span>
          <span className="p light" data-label="Technologies" style={css("display:flex;flex-wrap:wrap;gap:8px 10px")}>
            <span style={css("white-space:nowrap")}><a href="https://langchain-ai.github.io/langgraph" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>LangGraph</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://ai.google.dev" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Gemini</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://platform.openai.com/docs/guides/embeddings" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>OpenAI embeddings</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>pgvector</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://mem0.ai" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Mem0</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://docs.ragas.io" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>RAGAS</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://deepeval.com" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>DeepEval</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://fastapi.tiangolo.com" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>FastAPI</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://supabase.com" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Supabase</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://pymupdf.readthedocs.io" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>PyMuPDF</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://en.wikipedia.org/wiki/Optical_character_recognition" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>OCR</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://www.docker.com" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Docker</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://kubernetes.io" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Kubernetes</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://aws.amazon.com/eks" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>AWS EKS</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://github.com/features/actions" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>GitHub Actions</a></span>
          </span>
        </div>
      </div>
      <div id="rail-wrap" style={css("position:relative;margin-top:96px")}>
        <div aria-hidden="true" style={css("position:absolute;left:0;top:7.5px;bottom:0;width:1px;background:var(--border)")}></div>
        <div id="rail-fill" aria-hidden="true" style={css("position:absolute;left:0;top:7.5px;width:2px;height:0;background:var(--foreground);margin-left:-.5px;transition:height .25s var(--ease)")}></div>
        <section id="s1" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[1] System</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Product problem, ownership & system architecture</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>How the student experience, identity, AI services and data fit together.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Student product loop</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>From uploaded course material to a grounded, reviewable answer.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f0" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 1 · Upload, retrieve, ground, then cite or review.</figcaption>
          </figure>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>System architecture</h3>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f1" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 2 · Specialized services: Doc Processing, RAG Chat, Practice.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Dependency map</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Area</span>
              <span>Service</span>
              <span>Depends on</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">App data</span>
              <span className="p light" data-label="Service">Server / API</span>
              <span className="p light" data-label="Depends on" style={css("color:var(--muted-foreground)")}><a href="https://www.postgresql.org" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Postgres</a> · Storage</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Document</span>
              <span className="p light" data-label="Service">Doc Service</span>
              <span className="p light" data-label="Depends on" style={css("color:var(--muted-foreground)")}>Storage → <a href="https://en.wikipedia.org/wiki/Optical_character_recognition" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>OCR</a> → Embeddings → <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>pgvector</a></span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Chat / <a href="https://en.wikipedia.org/wiki/Retrieval-augmented_generation" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>RAG</a></span>
              <span className="p light" data-label="Service"><a href="https://en.wikipedia.org/wiki/Retrieval-augmented_generation" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>RAG</a> Chat</span>
              <span className="p light" data-label="Depends on" style={css("color:var(--muted-foreground)")}><a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>pgvector</a> · Memory · <a href="https://ai.google.dev" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Gemini</a> · Grounding · <a href="https://www.postgresql.org" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Postgres</a></span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Practice</span>
              <span className="p light" data-label="Service">Practice</span>
              <span className="p light" data-label="Depends on" style={css("color:var(--muted-foreground)")}><a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>pgvector</a> · <a href="https://ai.google.dev/gemini-api/docs" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Gemini</a> · <a href="https://www.postgresql.org" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Postgres</a></span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Ownership ledger</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 294px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Area</span>
              <span>Detail</span>
              <span>Ownership</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 294px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">UI / UX</span>
              <span className="p light" data-label="Detail">Complete UI / UX</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Primary owner</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 294px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Grounding</span>
              <span className="p light" data-label="Detail">Critic + human review</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Primary owner</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 294px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Ingestion</span>
              <span className="p light" data-label="Detail">PDF + DOCX + <a href="https://en.wikipedia.org/wiki/Optical_character_recognition" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>OCR</a></span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Primary owner</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 294px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Domain services</span>
              <span className="p light" data-label="Detail">3 <a href="https://fastapi.tiangolo.com" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>FastAPI</a> services</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Primary owner</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 294px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Agent backend</span>
              <span className="p light" data-label="Detail"><a href="https://langchain-ai.github.io/langgraph" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>LangGraph</a> + <a href="https://en.wikipedia.org/wiki/Retrieval-augmented_generation" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>RAG</a></span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Primary owner</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 294px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Evaluation</span>
              <span className="p light" data-label="Detail">500+ cases / 8 domains</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Primary owner</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 294px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Auth boundary</span>
              <span className="p light" data-label="Detail"><a href="https://supabase.com" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Supabase</a> + <a href="https://jwt.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>JWT</a></span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Primary owner</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 294px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Deployment</span>
              <span className="p light" data-label="Detail"><a href="https://www.docker.com" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Docker</a> + <a href="https://aws.amazon.com/eks" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>EKS</a> + CI/CD</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Primary owner</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Problems solved</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Course grounding</span>
              <span className="p light" data-label="Detail">Course material as evidence.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Data isolation</span>
              <span className="p light" data-label="Detail">User · course · material scope.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Traceable answers</span>
              <span className="p light" data-label="Detail">Inline source citations.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Deployable AI</span>
              <span className="p light" data-label="Detail">Containerized <a href="https://kubernetes.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Kubernetes</a> path.</span>
            </div>
          </div>
        </section>
        <section id="s2" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[2] Agentic RAG</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Agentic RAG, grounding & memory</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>A state machine that handles retrieval, generation, grounding, citations, human review and resuming.</p>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Retrieval context quality</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Scoped evidence</span>
              <span className="p light" data-label="Detail">User · course · material.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Up to 5 documents</span>
              <span className="p light" data-label="Detail">Retrieved per query, with history and preferences as context.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">94% relevance</span>
              <span className="p light" data-label="Detail">Evaluated responses.</span>
            </div>
          </div>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>LangGraph workflow</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Parallel retrieval → generation → grounding check → citation or human review → saved state.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f2" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 3 · Low grounding routes to human review instead of a citation.</figcaption>
          </figure>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Memory layers</h3>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f3" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 4 · Four persistence roles kept separate.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Engineering decisions</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><a href="https://langchain-ai.github.io/langgraph" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>LangGraph</a></span>
              <span className="p light" data-label="Detail">Explicit state + routing.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Grounding + review</span>
              <span className="p light" data-label="Detail">−38% hallucinations.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Memory layers</span>
              <span className="p light" data-label="Detail">Separate persistence roles.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Inline citations</span>
              <span className="p light" data-label="Detail">Expose evidence path.</span>
            </div>
          </div>
        </section>
        <section id="s3" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[3] Evaluation</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Evaluation & ingestion engineering</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Quality gates made retrieval and prompt changes repeatable, and async ingestion turned student files into searchable evidence.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Evaluation system</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Every retrieval or prompt change ran through a 500+ case regression suite across 8 domains.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f4" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 5 · Release the change, or revise and re-run.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Quality signals</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">500+ test cases</span>
              <span className="p light" data-label="Detail">Evaluation coverage.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">8 domains</span>
              <span className="p light" data-label="Detail">Evaluation breadth.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">89% faithfulness</span>
              <span className="p light" data-label="Detail"><a href="https://docs.ragas.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>RAGAS</a>.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">−55% manual QA</span>
              <span className="p light" data-label="Detail">Automated evaluation.</span>
            </div>
          </div>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Async ingestion (Document AI)</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>PDF, DOCX and image/<a href="https://en.wikipedia.org/wiki/Optical_character_recognition" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>OCR</a> content moved off the upload request, with saved progress, retries, timeouts, cleanup and bounded vector writes.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Document processing</h3>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f5" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 6 · From upload to pgvector.</figcaption>
          </figure>
          <div style={css("margin-top:32px;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px")}>
            <div data-reveal="1" style={css("background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
              <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>−60%</div>
              <div className="p light" style={css("margin-top:6px")}>document-processing time</div>
              <div className="p-sm light" style={css("margin-top:2px;color:var(--muted-foreground)")}>optimized extraction, <a href="https://en.wikipedia.org/wiki/Optical_character_recognition" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>OCR</a>, chunking, embedding, ingestion</div>
            </div>
          </div>
        </section>
        <section id="s4" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[4] Deployment</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Microservices, security & deployment</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Three <a href="https://fastapi.tiangolo.com" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>FastAPI</a> services behind an authenticated <a href="https://fastapi.tiangolo.com" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>FastAPI</a> gateway, deployed to <a href="https://aws.amazon.com/eks" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>AWS EKS</a>.</p>
          <p className="p light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure)")}>Three services plus a gateway: document processing, <a href="https://en.wikipedia.org/wiki/Retrieval-augmented_generation" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>RAG</a> chat and practice each had their own scope, and the signed-in identity passed from <a href="https://supabase.com" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Supabase</a> through the server and <a href="https://fastapi.tiangolo.com" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>FastAPI</a> layers.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Identity path</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Identity and delivery were explicit boundaries, not trust in the client.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f6" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 7 · Authenticated identity scopes every downstream request.</figcaption>
          </figure>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Delivery path</h3>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f7" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 8 · From GitHub Actions to AWS EKS.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Production controls</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Security</span>Scoped identity</span>
              <span className="p light" data-label="Detail">Server-side auth and <a href="https://jwt.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>JWT</a> passing limited retrieval to the signed-in student.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Architecture</span>Service boundaries</span>
              <span className="p light" data-label="Detail">Ingestion, <a href="https://en.wikipedia.org/wiki/Retrieval-augmented_generation" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>RAG</a> and practice each had their own job and their own ways to fail.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Reliability</span>Runtime controls</span>
              <span className="p light" data-label="Detail">Streaming, async processing, retries, timeouts, bounded writes, checkpoints, health checks and structured logs.</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Production delivery (AWS EKS)</p>
          <p className="p light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure)")}>The <a href="https://www.python.org" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Python</a> and <a href="https://fastapi.tiangolo.com" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>FastAPI</a> services ran in <a href="https://www.docker.com" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Docker</a> containers and shipped through a <a href="https://github.com/features/actions" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>GitHub Actions</a> CI/CD pipeline. Tooling included Pytest, <a href="https://docs.pydantic.dev" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Pydantic</a>, Black, Ruff and health and readiness checks.</p>
        </section>
        <section id="s5" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[5] Results</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Results, engineering decisions & lessons</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>The outcomes, architecture choices and reliability lessons from building ThirdSlate end to end.</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 294px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>System</span>
              <span>Result</span>
              <span>Framing</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 294px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Product</span>
              <span className="p light" data-label="Result">1,000+ students</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Real product usage</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 294px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">AI quality</span>
              <span className="p light" data-label="Result">89% faithfulness | 94% relevance</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>500+ cases</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 294px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Grounding / QA</span>
              <span className="p light" data-label="Result">−38% hallucinations | −55% manual QA</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>Baseline + automated QA</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 294px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Ingestion</span>
              <span className="p light" data-label="Result">−60% processing time</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>Optimized multimodal pipeline</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Architecture decisions</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><a href="https://langchain-ai.github.io/langgraph" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>LangGraph</a></span>
              <span className="p light" data-label="Detail">Explicit state and routing for retrieval, grounding, review, citations and resuming.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Service boundaries</span>
              <span className="p light" data-label="Detail">Ingestion, chat and practice are separate because their load and failures differ.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Memory layers</span>
              <span className="p light" data-label="Detail">Knowledge, session recall, preferences and graph state are stored separately.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Eval gates</span>
              <span className="p light" data-label="Detail">Prompt and retrieval changes pass repeatable evaluation, not spot checks.</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Engineering lessons</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:44px minmax(0,1fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light" style={css("color:var(--muted-foreground)")}>01</span>
              <div>
                <div className="p" style={css("font-weight:500")}>Grounding is control.</div>
                <p className="p light" style={css("margin:2px 0 0;max-width:var(--measure)")}>Reliability improved once grounding was an explicit decision step, not just a prompt instruction.</p>
              </div>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:44px minmax(0,1fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light" style={css("color:var(--muted-foreground)")}>02</span>
              <div>
                <div className="p" style={css("font-weight:500")}>Eval before release.</div>
                <p className="p light" style={css("margin:2px 0 0;max-width:var(--measure)")}>A maintained benchmark made changes comparable and cut repetitive manual QA.</p>
              </div>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:44px minmax(0,1fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light" style={css("color:var(--muted-foreground)")}>03</span>
              <div>
                <div className="p" style={css("font-weight:500")}>AI is systems.</div>
                <p className="p light" style={css("margin:2px 0 0;max-width:var(--measure)")}>Good model behavior depended on ingestion, identity, memory, routing, storage and deployment all working together.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section style={css("margin-top:112px;max-width:var(--measure)")}>
        <p className="eyebrow" data-reveal="1" style={css("margin:0")}>Note on scope</p>
        <p className="p light" data-reveal="1" style={css("margin:10px 0 0")}>High-level architecture · reported metrics · no confidential data · backed by production use.</p>
      </section>
      <section id="contact" style={css("margin-top:80px")}>
        <h2 className="h2" data-reveal="1" style={css("margin:0")}>Want to talk about any of this?</h2>
        <p className="p light" data-reveal="1" style={css("margin:10px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Happy to go deeper on grounding, evaluation gates, or the ingestion pipeline.</p>
        <div className="p light" data-reveal="1" style={css("display:flex;flex-wrap:wrap;gap:16px;margin-top:20px")}>
          <a href="mailto:sv.tharunpranav@gmail.com" style={css("text-decoration-color:var(--clay)")}>Email</a>
          {' '}
          <a href="https://www.linkedin.com/in/thrn" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>LinkedIn</a>
          {' '}
          <a href="https://github.com/thrns" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>GitHub</a>
        </div>
      </section>
    </article>
  );
}
