import { Fragment } from 'react';
import type { MouseEventHandler, ReactNode } from 'react';
import { css } from '@/lib/css';

export default function TekkscopeArticle({ toc, goCases }: { toc: ReactNode; goCases: MouseEventHandler }) {
  return (
    <article style={css("max-width:var(--content-width);margin:0 auto;padding:var(--space-6xl) var(--page-gutter) 0;box-sizing:border-box")}>
      <a href="/case-studies" onClick={goCases} aria-label="Back to case studies" data-anim="1" style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em;text-decoration:none;animation:fadeUp .6s var(--ease) both")} className="hv-clay"><span aria-hidden="true" style={css("color:var(--muted-foreground)")}>[←]</span>Case studies</a>
      <h1 className="h1" data-anim="1" style={css("margin:32px 0 0;animation:fadeUp .7s var(--ease) 60ms both")}>Tekkscope: Full-Stack AI Research Platform</h1>
      <div aria-hidden="true" data-anim="1" style={css("width:32px;height:1px;margin:16px 0 0;background:var(--foreground);animation:fadeUp .7s var(--ease) 135ms both")}></div>
      <p className="p light" data-anim="1" style={css("margin:16px 0 0;max-width:520px;line-height:23px;animation:fadeUp .7s var(--ease) 160ms both")}>I built the backend behind a research dashboard, public API and MCP tools: search, extraction, streaming, reports and deployment.</p>
      <nav aria-label="Sections" data-anim="1" style={css("margin-top:28px;display:flex;flex-wrap:wrap;gap:8px;animation:fadeUp .7s var(--ease) 220ms both")}>{toc}</nav>
      <div style={css("margin-top:56px;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px")}>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 260ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>8</div>
          <div className="p light" style={css("margin-top:6px")}>ordered LLM providers</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--muted-foreground)")}>sync · async · tool calls</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 320ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>8</div>
          <div className="p light" style={css("margin-top:6px")}>streaming workers</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--muted-foreground)")}><a href="https://redis.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Redis</a> cross-worker delivery</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 380ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>7</div>
          <div className="p light" style={css("margin-top:6px")}><a href="https://modelcontextprotocol.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>MCP</a> tools</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--muted-foreground)")}>JSON-RPC over stdio</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 440ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>3</div>
          <div className="p light" style={css("margin-top:6px")}>report formats</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--muted-foreground)")}>PDF · DOCX · Markdown</div>
        </div>
      </div>
      <div style={css("margin-top:32px;border-top:1px solid var(--foreground)")}>
        <div data-anim="1" data-r="row" style={css("animation:fadeUp .7s var(--ease) 500ms both;display:grid;grid-template-columns:140px minmax(0,1fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
          <span className="p light">Technologies</span>
          <span className="p light" data-label="Technologies" style={css("display:flex;flex-wrap:wrap;gap:8px 10px")}>
            <span style={css("white-space:nowrap")}><a href="https://www.python.org" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Python</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://fastapi.tiangolo.com" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>FastAPI</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://www.langchain.com" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>LangChain</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://langchain-ai.github.io/langgraph" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>LangGraph</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://docs.searxng.org" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>SearXNG</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://crawlee.dev" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Crawlee</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://playwright.dev" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Playwright</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://redis.io" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Redis</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://supabase.com" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Supabase</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://nextjs.org" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Next.js</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://react.dev" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>React</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://www.docker.com" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Docker</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://kubernetes.io" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Kubernetes</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://aws.amazon.com/eks/" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>EKS</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://github.com/features/actions" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>GitHub Actions</a></span>
          </span>
        </div>
      </div>
      <div id="rail-wrap" style={css("position:relative;margin-top:96px")}>
        <div aria-hidden="true" style={css("position:absolute;left:0;top:7.5px;bottom:0;width:1px;background:var(--border)")}></div>
        <div id="rail-fill" aria-hidden="true" style={css("position:absolute;left:0;top:7.5px;width:2px;height:0;background:var(--foreground);margin-left:-.5px;transition:height .25s var(--ease)")}></div>
        <section id="s1" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[1] Surfaces</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Product surfaces & engineering ownership</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Shared core behind browser, API, and <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>MCP</a> workflows.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Shared research core</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Three ways in, one source-backed research system.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f0" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 1 · Dashboard, API, and MCP converge on one research core.</figcaption>
          </figure>
          <p className="p light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure)")}>I own the <a href="https://fastapi.tiangolo.com" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>FastAPI</a> research routes, model routing, retrieval and extraction, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>SSE</a> and <a href="https://redis.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Redis</a> streaming, <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>MCP</a>, reports, natural language to structured output (NLTS), <a href="https://supabase.com" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Supabase</a> data flows, deployment and backend tests. I built the core research platform.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Three access surfaces, one system</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Web users, API clients and outside agents all use the same platform logic.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f1" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 2 · One platform logic, three entry points.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Ownership ledger</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Area</span>
              <span>Detail</span>
              <span>Ownership</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Research API</span>
              <span className="p light" data-label="Detail">Typed routes + workflow orchestration</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Primary owner</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Search retrieval</span>
              <span className="p light" data-label="Detail"><a href="https://docs.searxng.org" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>SearXNG</a> · query expansion · dedupe</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Primary owner</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Real-time streaming</span>
              <span className="p light" data-label="Detail"><a href="https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>SSE</a> · asyncio queues · <a href="https://redis.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Redis</a> Pub/Sub</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Primary owner</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Artifacts & data</span>
              <span className="p light" data-label="Detail">Reports · structured JSON · <a href="https://supabase.com" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Supabase</a> persistence</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Primary owner</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Model routing</span>
              <span className="p light" data-label="Detail">Ordered failover · sync / async / tools</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Primary owner</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Browser extraction</span>
              <span className="p light" data-label="Detail"><a href="https://crawlee.dev" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Crawlee</a> / <a href="https://playwright.dev" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Playwright</a> · bounded fan-out</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Primary owner</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Agent surface</span>
              <span className="p light" data-label="Detail"><a href="https://modelcontextprotocol.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>MCP</a> JSON-RPC server · 7 tools</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Primary owner</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Delivery & tests</span>
              <span className="p light" data-label="Detail"><a href="https://www.docker.com" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Docker</a> · <a href="https://aws.amazon.com/eks/" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>EKS</a> · CI/CD · backend tests</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Primary owner</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Primary capabilities</p>
          <p className="p light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure)")}>Link search · Extracted search · Lens · DeepLens · ReportLens · Tek Chat · NLTS. Seven features share retrieval, extraction, model, streaming and storage code instead of duplicating it.</p>
        </section>
        <section id="s2" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[2] Retrieval</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Search, extraction & research pipeline</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Finding sources and extracting pages in a real browser are shared by every research mode.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Source-backed retrieval</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Optional query expansion fans out into concurrent search, deduplication, a capped browser run and cleaned source output.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f2" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 3 · Each browser scrape has an 8-second extraction deadline.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Reused across modes</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Discovery only</span>Link search</span>
              <span className="p light" data-label="Detail"><a href="https://docs.searxng.org" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>SearXNG</a> search, optional expansion, concurrent result pages, URL deduplication and a capped result set.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Discovery + extraction</span>Extracted search</span>
              <span className="p light" data-label="Detail">Browser-rendered extraction returns cleaned source text and metadata.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Research modes</span>Lens · DeepLens · ReportLens</span>
              <span className="p light" data-label="Detail">Quick, deep and report workflows all reuse the same search and extraction.</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Engineering decisions</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Browser-rendered extraction</span>
              <span className="p light" data-label="Detail"><a href="https://crawlee.dev" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Crawlee</a> + <a href="https://playwright.dev" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Playwright</a> for pages that require rendering.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Bounded browser concurrency</span>
              <span className="p light" data-label="Detail">Semaphore fan-out + 8-second scrape deadline.</span>
            </div>
          </div>
          <p className="p-sm light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Link-only search stops after finding sources. Extracted search and research continue through browser extraction before the model writes an answer or report.</p>
        </section>
        <section id="s3" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[3] Routing & streaming</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>LLM routing, failover & real-time streaming</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Provider failover and streaming are separate layers inside one research request.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Ordered model routing</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>The same ordered routing serves synchronous, asynchronous and tool-enabled calls.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f3" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 4 · Provider failure falls through within the same request.</figcaption>
          </figure>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Real-time SSE streaming</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Each user has a bounded local queue, and <a href="https://redis.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Redis</a> carries events across the 8 workers.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f4" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 5 · Redis carries events between workers; queues serve the client.</figcaption>
          </figure>
          <p className="p light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure)")}>If <a href="https://redis.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Redis</a> is off or down, local delivery still works. Stream events cover progress, response chunks, citations, downloads and end of stream.</p>
          <p className="p light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure)")}>Streaming runs across 8 workers in production. <a href="https://redis.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Redis</a> delivers events between workers, and the connection manager de-duplicates messages and bounds queues.</p>
        </section>
        <section id="s4" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[4] Agents & output</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Agent access, structured output & stored artifacts</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>The same core serves outside agents, JSON for machines and downloadable long-form reports.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>MCP agent surface (JSON-RPC over stdio)</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Seven tools use the same search, extraction, research, saved-source and report code as the product.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f5" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 6 · External agents reach the shared core through MCP.</figcaption>
          </figure>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Report generation (ReportLens)</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Reports are saved as files you can download.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f6" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 7 · From report research to a download URL.</figcaption>
          </figure>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Natural language → structured JSON</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>A caller-supplied or inferred schema feeds quick research and constrained extraction.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f7" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 8 · Provided or inferred schema constrains the JSON output.</figcaption>
          </figure>
          <p className="p light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure)")}>NLTS returns structured_output, schema_used and research_summary. Report workflows save the generated files and create download links.</p>
        </section>
        <section id="s5" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[5] Infrastructure</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Infrastructure, reliability & engineering decisions</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>How it's deployed, what keeps it reliable, and what this write-up does not claim.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Production delivery (Docker + Kubernetes on EKS)</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}><a href="https://github.com/features/actions" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>GitHub Actions</a> deploys the backend and <a href="https://redis.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Redis</a> manifests, with the backend image pinned to the CI commit.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f8" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 9 · From GitHub Actions to EKS.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Reliability mechanisms</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Bounded</span>
              <span className="p light" data-label="Detail">Per-user queues: stream backpressure boundary.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">8 sec</span>
              <span className="p light" data-label="Detail">Scrape deadline: browser extraction limit.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Ordered</span>
              <span className="p light" data-label="Detail">Provider failover: same-request fallback.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">8 workers</span>
              <span className="p light" data-label="Detail">Streaming topology: <a href="https://redis.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Redis</a> cross-worker delivery.</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Verified results</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>System</span>
              <span>Verified fact</span>
              <span>Framing</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Model routing</span>
              <span className="p light" data-label="Verified fact">8-provider ordered failover</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>All call types</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Streaming</span>
              <span className="p light" data-label="Verified fact">8-worker <a href="https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>SSE</a> topology</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>Redis + fallback</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><a href="https://modelcontextprotocol.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>MCP</a></span>
              <span className="p light" data-label="Verified fact">7 JSON-RPC tools over stdio</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>Shared research core</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Engineering decisions</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Shared retrieval primitives</span>
              <span className="p light" data-label="Detail">Same source discovery / extraction across modes.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Shared core across surfaces</span>
              <span className="p light" data-label="Detail">Web, API, and <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>MCP</a> use one research system.</span>
            </div>
          </div>
        </section>
      </div>
      <section style={css("margin-top:112px;max-width:var(--measure)")}>
        <p className="eyebrow" data-reveal="1" style={css("margin:0")}>Note on scope</p>
        <p className="p light" data-reveal="1" style={css("margin:10px 0 0")}>High-level architecture and named technologies only. No secrets, customer data, or unverified performance, uptime or quality numbers.</p>
      </section>
      <section id="contact" style={css("margin-top:80px")}>
        <h2 className="h2" data-reveal="1" style={css("margin:0")}>Want to talk about any of this?</h2>
        <p className="p light" data-reveal="1" style={css("margin:10px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Happy to go deeper on provider failover, streaming, or browser extraction.</p>
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
