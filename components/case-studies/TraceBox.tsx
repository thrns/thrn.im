import { Fragment } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { css } from '@/lib/css';

export default function TraceBoxArticle({ toc }: { toc: ReactNode }) {
  return (
    <article style={css("max-width:var(--content-width);margin:0 auto;padding:var(--space-6xl) var(--page-gutter) 0;box-sizing:border-box")}>
      <Link href="/case-studies" aria-label="Back to case studies" data-anim="1" style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em;text-decoration:none;animation:fadeUp .6s var(--ease) both")} className="hv-clay"><span aria-hidden="true" style={css("color:var(--muted-foreground)")}>[←]</span>Case studies</Link>
      <h1 className="h1" data-anim="1" style={css("margin:32px 0 0;animation:fadeUp .7s var(--ease) 60ms both")}>TraceBox: Real WebRTC Voice-Agent Testing</h1>
      <div aria-hidden="true" data-anim="1" style={css("width:32px;height:1px;margin:16px 0 0;background:var(--foreground);animation:fadeUp .7s var(--ease) 135ms both")}></div>
      <p className="p light" data-anim="1" style={css("margin:16px 0 0;max-width:520px;line-height:23px;animation:fadeUp .7s var(--ease) 160ms both")}>I built a tool that tests voice agents in a real browser, with an eight-state agent, live audio capture and saved run evidence.</p>
      <nav aria-label="Sections" data-anim="1" style={css("margin-top:28px;display:flex;flex-wrap:wrap;gap:8px;animation:fadeUp .7s var(--ease) 220ms both")}>{toc}</nav>
      <div style={css("margin-top:56px;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px")}>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 260ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>1–100</div>
          <div className="p light" style={css("margin-top:6px")}>bots per run</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>supported batch size</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 320ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>120s</div>
          <div className="p light" style={css("margin-top:6px")}>max listen window</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>RMS silence detection</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 380ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>8</div>
          <div className="p light" style={css("margin-top:6px")}><a href="https://langchain-ai.github.io/langgraph" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>LangGraph</a> states</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>explicit lifecycle</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 440ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>1</div>
          <div className="p light" style={css("margin-top:6px")}>worker concurrency</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}><a href="https://cloud.google.com/run" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>Cloud Run</a> execution</div>
        </div>
      </div>
      <div style={css("margin-top:32px;border-top:1px solid var(--foreground)")}>
        <div data-anim="1" data-r="row" style={css("animation:fadeUp .7s var(--ease) 500ms both;display:grid;grid-template-columns:140px minmax(0,1fr);gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)")}>
          <span className="p light">Approach</span>
          <div data-label="Approach" style={css("display:flex;flex-wrap:wrap;align-items:center;gap:8px")}>
            <span style={css("display:inline-flex;align-items:center;gap:8px")}>
              <span style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em")}><span style={css("color:var(--muted-foreground)")}>[01]</span>Control plane</span>
              <span aria-hidden="true" style={css("color:var(--muted-foreground);font-weight:300")}>→</span>
            </span>
            <span style={css("display:inline-flex;align-items:center;gap:8px")}>
              <span style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em")}><span style={css("color:var(--muted-foreground)")}>[02]</span>Isolated browser execution</span>
              <span aria-hidden="true" style={css("color:var(--muted-foreground);font-weight:300")}>→</span>
            </span>
            <span style={css("display:inline-flex;align-items:center;gap:8px")}>
              <span style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em")}><span style={css("color:var(--muted-foreground)")}>[03]</span>Real <a href="https://webrtc.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>WebRTC</a> conversations</span>
              <span aria-hidden="true" style={css("color:var(--muted-foreground);font-weight:300")}>→</span>
            </span>
            <span style={css("display:inline-flex;align-items:center;gap:8px")}><span style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em")}><span style={css("color:var(--muted-foreground)")}>[04]</span>Persistent evidence</span></span>
          </div>
        </div>
        <div data-anim="1" data-r="row" style={css("animation:fadeUp .7s var(--ease) 560ms both;display:grid;grid-template-columns:140px minmax(0,1fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
          <span className="p light">Technologies</span>
          <span className="p light" data-label="Technologies" style={css("display:flex;flex-wrap:wrap;gap:8px 10px")}>
            <span style={css("white-space:nowrap")}><a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Next.js</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>TypeScript</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://langchain-ai.github.io/langgraph" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>LangGraph</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://www.stagehand.dev" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Stagehand</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://playwright.dev" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Playwright</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://www.chromium.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Chromium</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://chromedevtools.github.io/devtools-protocol" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Chrome DevTools Protocol</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://webrtc.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>WebRTC</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://deepgram.com" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Deepgram Nova-2</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://platform.openai.com/docs/models" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>GPT 4.1</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://ai.google.dev" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Gemini</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>ElevenLabs</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://supabase.com" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Supabase</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://ffmpeg.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>FFmpeg</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://cloud.google.com/run" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Cloud Run</a></span>
          </span>
        </div>
      </div>
      <div id="rail-wrap" style={css("position:relative;margin-top:96px")}>
        <div aria-hidden="true" style={css("position:absolute;left:0;top:7.5px;bottom:0;width:1px;background:var(--border)")}></div>
        <div id="rail-fill" aria-hidden="true" style={css("position:absolute;left:0;top:7.5px;width:2px;height:0;background:var(--foreground);margin-left:-.5px;transition:height .25s var(--ease)")}></div>
        <section id="s1" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[1] Control plane</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Control plane, execution plane & ownership</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>How runs are created, dispatched, executed, observed, and persisted.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>System overview</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>A signed-in control plane sends each run to one of two execution modes.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-tracebox-1">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f0" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-tracebox-1" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 1 · Runs dispatch to an isolated worker or fall back in-process.</figcaption>
          </figure>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Control plane ↔ execution plane</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>In worker mode, run control and long browser sessions stay separate. Without WORKER_URL, runs execute in-process.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-tracebox-2">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f1" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-tracebox-2" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 2 · The 8-state agent runs inside headless Chromium.</figcaption>
          </figure>
          <p className="p light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure)")}>I own the eight-state <a href="https://langchain-ai.github.io/langgraph" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>LangGraph</a> agent, browser and <a href="https://webrtc.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>WebRTC</a> control, isolated workers, live inspection, persistence and session evidence. I built the voice-agent testing workflow end to end.</p>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Ownership ledger</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Area</span>
              <span>Detail</span>
              <span>Ownership</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Browser testing workflow</span>
              <span className="p light" data-label="Detail">Browser-based voice-agent testing</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Built</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><a href="https://webrtc.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>WebRTC</a> capture + injection</span>
              <span className="p light" data-label="Detail">Real live browser conversations</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Built</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Isolated worker execution</span>
              <span className="p light" data-label="Detail"><a href="https://cloud.google.com/run" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>Cloud Run</a> concurrency 1</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Built</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Realtime live inspection</span>
              <span className="p light" data-label="Detail">Status + transcript + screencast</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Built</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Eight-state <a href="https://langchain-ai.github.io/langgraph" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>LangGraph</a> agent</span>
              <span className="p light" data-label="Detail">Navigate → finalize lifecycle</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Designed + built</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">RMS voice activity detection</span>
              <span className="p light" data-label="Detail">120-second max listen window</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Engineered</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Local execution fallback</span>
              <span className="p light" data-label="Detail">In-process spawnBots path</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Built</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Persistent session evidence</span>
              <span className="p light" data-label="Detail">Screenshots · recording · trace · logs</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Built</span>
            </div>
          </div>
          <p className="p-sm light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>The story: a control and execution split, isolated headless browser workers, the <a href="https://langchain-ai.github.io/langgraph" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>LangGraph</a> lifecycle, real <a href="https://webrtc.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>WebRTC</a> media, live observability, evidence capture, deployment and known limits.</p>
        </section>
        <section id="s2" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[2] Agent</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>LangGraph agent & runtime guardrails</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>An eight-state lifecycle with retries, time limits, recovery and finalization.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Eight-state bot lifecycle</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>The main path is shown first, with the retry and exit routes listed below.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-tracebox-3">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f2" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-tracebox-3" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 3 · The main path through one voice session.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Retry and exit routes</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>From</span>
              <span>Condition</span>
              <span>Goes to</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">act, speak</span>
              <span className="p light" data-label="Condition">Continue listening</span>
              <span className="p light" data-label="Goes to" style={css("color:var(--muted-foreground)")}>listen</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">setup</span>
              <span className="p light" data-label="Condition">Page not ready</span>
              <span className="p light" data-label="Goes to" style={css("color:var(--muted-foreground)")}>navigate</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">act</span>
              <span className="p light" data-label="Condition">Browser error or inactive</span>
              <span className="p light" data-label="Goes to" style={css("color:var(--muted-foreground)")}>navigate</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">setup</span>
              <span className="p light" data-label="Condition">Setup timeout or unrecoverable error</span>
              <span className="p light" data-label="Goes to" style={css("color:var(--muted-foreground)")}>finalize, then end</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">reason</span>
              <span className="p light" data-label="Condition">Session end or timeout</span>
              <span className="p light" data-label="Goes to" style={css("color:var(--muted-foreground)")}>finalize, then end</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Runtime guardrails</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Guardrail</span>
              <span>Value</span>
              <span>Behavior</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Session deadline</span>
              <span className="p light" data-label="Value">max_session_duration</span>
              <span className="p light" data-label="Behavior" style={css("color:var(--muted-foreground)")}>Checked in setup, listen, and reason</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Setup cap</span>
              <span className="p light" data-label="Value">50 turns</span>
              <span className="p light" data-label="Behavior" style={css("color:var(--muted-foreground)")}>Setup stops after the configured cap</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Silent session</span>
              <span className="p light" data-label="Value">20 turns</span>
              <span className="p light" data-label="Behavior" style={css("color:var(--muted-foreground)")}>Reasoning stops without system transcript</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Stuck recovery</span>
              <span className="p light" data-label="Value">3 bot turns</span>
              <span className="p light" data-label="Behavior" style={css("color:var(--muted-foreground)")}>Fresh screenshot before selecting next action</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Listen window</span>
              <span className="p light" data-label="Value">120 seconds</span>
              <span className="p light" data-label="Behavior" style={css("color:var(--muted-foreground)")}>RMS-based silence / voice activity detection</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Stop behavior</span>
              <span className="p light" data-label="Value">Workspace + bots</span>
              <span className="p light" data-label="Behavior" style={css("color:var(--muted-foreground)")}>Marks non-terminal bots stopped; listen checks status</span>
            </div>
          </div>
        </section>
        <section id="s3" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[3] WebRTC</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Real-time WebRTC voice loop</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>It captures live speech, reasons over the conversation and page, then plays synthesized audio back into the browser session.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Real WebRTC media loop</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Target audio becomes conversation state, and the agent either acts in the browser or speaks.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-tracebox-4">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f3" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-tracebox-4" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 4 · Reasoning branches to a browser action or injected speech.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>WebRTC media bridge</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Stage</span>
              <span>Mechanism</span>
              <span>Detail</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Incoming audio</span>
              <span className="p light" data-label="Mechanism">MediaRecorder</span>
              <span className="p light" data-label="Detail" style={css("color:var(--muted-foreground)")}>Remote audio track → speech capture</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Listening</span>
              <span className="p light" data-label="Mechanism">RMS silence detection</span>
              <span className="p light" data-label="Detail" style={css("color:var(--muted-foreground)")}>120-second maximum listening window</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Outgoing audio</span>
              <span className="p light" data-label="Mechanism"><a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>ElevenLabs</a> pcm_16000</span>
              <span className="p light" data-label="Detail" style={css("color:var(--muted-foreground)")}>16 kHz PCM speech generation</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Media injection</span>
              <span className="p light" data-label="Mechanism">replaceTrack()</span>
              <span className="p light" data-label="Detail" style={css("color:var(--muted-foreground)")}>Replaces the outbound <a href="https://webrtc.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>WebRTC</a> media track</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Screenshot-assisted reasoning</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Latest page context</span>
              <span className="p light" data-label="Detail">A screenshot is taken after every navigation and browser action. It's uploaded for later review and kept as the latest PNG in graph state, so the model sees the current page.</span>
            </div>
          </div>
        </section>
        <section id="s4" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[4] Observability</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Realtime observability & session evidence</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Watch a run live without polling, then review recordings, screenshots, transcripts, timings, logs and errors afterwards.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Live observability without polling</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Database state and short-lived session data take separate <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>Supabase</a> Realtime paths to the viewer.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-tracebox-5">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f4" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-tracebox-5" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 5 · Postgres Changes for state; Broadcast for transcript and frames.</figcaption>
          </figure>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Screen recording & live frame pipeline</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>CDP screencast frames split into sampled live frames and the saved screen recording.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-tracebox-6">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f5" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-tracebox-6" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 6 · One frame stream, a live feed and a stored recording.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Evidence per bot</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Evidence</span>
              <span>Format</span>
              <span>Detail</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Recording</span>
              <span className="p light" data-label="Format">WebM / audio</span>
              <span className="p light" data-label="Detail" style={css("color:var(--muted-foreground)")}>Recording URL and path</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Trace</span>
              <span className="p light" data-label="Format"><a href="https://langchain-ai.github.io/langgraph" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>LangGraph</a> timings</span>
              <span className="p light" data-label="Detail" style={css("color:var(--muted-foreground)")}>Per-node execution durations</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Transcript</span>
              <span className="p light" data-label="Format">JSON + normalized</span>
              <span className="p light" data-label="Detail" style={css("color:var(--muted-foreground)")}>Speaker + text + elapsed timestamp</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Logs</span>
              <span className="p light" data-label="Format">Per-bot server logs</span>
              <span className="p light" data-label="Detail" style={css("color:var(--muted-foreground)")}>Execution-side evidence</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Screenshots</span>
              <span className="p light" data-label="Format">Storage URLs</span>
              <span className="p light" data-label="Detail" style={css("color:var(--muted-foreground)")}>Captured after navigation / actions</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Errors</span>
              <span className="p light" data-label="Format">Error details</span>
              <span className="p light" data-label="Detail" style={css("color:var(--muted-foreground)")}>Terminal failure context</span>
            </div>
          </div>
        </section>
        <section id="s5" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[5] Deployment</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Deployment, technical facts & limitations</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>What the implementation confirms, and what this write-up deliberately doesn't claim.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Two-service Cloud Run path</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>deploy.sh deploys the worker first, takes its URL, then deploys the frontend with WORKER_URL.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-tracebox-7">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f6" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-tracebox-7" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 7 · Worker first, then frontend with WORKER_URL.</figcaption>
          </figure>
          <p className="p-sm light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>deploy.sh defaults to asia-south1. <a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>GCP</a>, <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>Supabase</a> and provider settings are set up separately. cloudbuild.yaml is an alternate combined-image path.</p>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Confirmed technical facts</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Fact</span>
              <span>Confirmed value</span>
              <span>Framing</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Bots per run</span>
              <span className="p light" data-label="Confirmed value">1–100</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>Supported batch size</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><a href="https://langchain-ai.github.io/langgraph" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>LangGraph</a> lifecycle</span>
              <span className="p light" data-label="Confirmed value">8 states</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>Named lifecycle</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Production worker model</span>
              <span className="p light" data-label="Confirmed value">Concurrency 1</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>Worker concurrency 1</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 216px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Listening window</span>
              <span className="p light" data-label="Confirmed value">120 seconds</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>Max VAD window</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Known limitations & boundary</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Security limitation</span>Public-readable media buckets</span>
              <span className="p light" data-label="Detail">Built as an experimental project; production use would require private media storage with signed access and automated security testing.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Testing limitation</span>No automated test suite</span>
              <span className="p light" data-label="Detail">No unit, integration, E2E, or load-test files.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Recording fallback</span>Preserve available evidence</span>
              <span className="p light" data-label="Detail">Muxed → screen-only → audio-only.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Claim boundary</span>No unsupported performance claims</span>
              <span className="p light" data-label="Detail">No uptime, benchmark, SLA, or load claims.</span>
            </div>
          </div>
        </section>
      </div>
      <section style={css("margin-top:112px;max-width:var(--measure)")}>
        <p className="eyebrow" data-reveal="1" style={css("margin:0")}>Note on scope</p>
        <p className="p light" data-reveal="1" style={css("margin:10px 0 0")}>High-level architecture and confirmed configuration only. No claims about users, revenue, uptime, benchmarks, reliability, privacy or load.</p>
      </section>
      <section id="contact" style={css("margin-top:80px")}>
        <h2 className="h2" data-reveal="1" style={css("margin:0")}>Want to talk about any of this?</h2>
        <p className="p light" data-reveal="1" style={css("margin:10px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Happy to go deeper on the <a href="https://webrtc.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>WebRTC</a> audio loop, the <a href="https://langchain-ai.github.io/langgraph" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>LangGraph</a> lifecycle, or live observability.</p>
        <div className="p light" data-reveal="1" style={css("display:flex;flex-wrap:wrap;gap:16px;margin-top:20px")}>
          <a href="mailto:sv.tharunpranav@gmail.com" style={css("text-decoration-color:var(--clay)")}>Email</a>
          {' '}
          <a href="https://www.linkedin.com/in/thrn" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>LinkedIn</a>
          {' '}
          <a href="https://github.com/thrns" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>GitHub</a>
        </div>
      </section>
    </article>
  );
}
