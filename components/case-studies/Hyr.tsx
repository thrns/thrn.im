import { Fragment } from 'react';
import type { MouseEventHandler, ReactNode } from 'react';
import { css } from '@/lib/css';

export default function HyrArticle({ toc, goCases }: { toc: ReactNode; goCases: MouseEventHandler }) {
  return (
    <article style={css("max-width:var(--content-width);margin:0 auto;padding:var(--space-6xl) var(--page-gutter) 0;box-sizing:border-box")}>
      <a href="/case-studies" onClick={goCases} aria-label="Back to case studies" data-anim="1" style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em;text-decoration:none;animation:fadeUp .6s var(--ease) both")} className="hv-clay"><span aria-hidden="true" style={css("color:var(--muted-foreground)")}>[←]</span>Case studies</a>
      <h1 className="h1" data-anim="1" style={css("margin:32px 0 0;animation:fadeUp .7s var(--ease) 60ms both")}>Hyr: Engineering a Connected AI Recruiting Platform</h1>
      <div aria-hidden="true" data-anim="1" style={css("width:32px;height:1px;margin:16px 0 0;background:var(--foreground);animation:fadeUp .7s var(--ease) 135ms both")}></div>
      <p className="p light" data-anim="1" style={css("margin:16px 0 0;max-width:520px;line-height:23px;animation:fadeUp .7s var(--ease) 160ms both")}>I built the engine that turns a role and a candidate into structured data, then runs the interviews and ranks the results.</p>
      <nav aria-label="Sections" data-anim="1" style={css("margin-top:28px;display:flex;flex-wrap:wrap;gap:8px;animation:fadeUp .7s var(--ease) 220ms both")}>{toc}</nav>
      <div style={css("margin-top:56px;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px")}>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 260ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>10K+</div>
          <div className="p light" style={css("margin-top:6px")}>users served</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--muted-foreground)")}>platform scale</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 320ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>70%</div>
          <div className="p light" style={css("margin-top:6px")}>lower screening time</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--muted-foreground)")}>verified outcome</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 380ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>80%</div>
          <div className="p light" style={css("margin-top:6px")}>lower role setup time</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--muted-foreground)")}>verified outcome</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 440ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>4</div>
          <div className="p light" style={css("margin-top:6px")}>system layers</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--muted-foreground)")}>architecture model</div>
        </div>
      </div>
      <div style={css("margin-top:32px;border-top:1px solid var(--foreground)")}>
        <div data-anim="1" data-r="row" style={css("animation:fadeUp .7s var(--ease) 500ms both;display:grid;grid-template-columns:140px minmax(0,1fr);gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)")}>
          <span className="p light">Approach</span>
          <div data-label="Approach" style={css("display:flex;flex-wrap:wrap;align-items:center;gap:8px")}>
            <span style={css("display:inline-flex;align-items:center;gap:8px")}>
              <span style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em")}><span style={css("color:var(--muted-foreground)")}>[01]</span>Structured candidate + role context</span>
              <span aria-hidden="true" style={css("color:var(--muted-foreground);font-weight:300")}>→</span>
            </span>
            <span style={css("display:inline-flex;align-items:center;gap:8px")}>
              <span style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em")}><span style={css("color:var(--muted-foreground)")}>[02]</span>Automated interviews</span>
              <span aria-hidden="true" style={css("color:var(--muted-foreground);font-weight:300")}>→</span>
            </span>
            <span style={css("display:inline-flex;align-items:center;gap:8px")}><span style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em")}><span style={css("color:var(--muted-foreground)")}>[03]</span>Ranked decision signals</span></span>
          </div>
        </div>
        <div data-anim="1" data-r="row" style={css("animation:fadeUp .7s var(--ease) 560ms both;display:grid;grid-template-columns:140px minmax(0,1fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
          <span className="p light">Technologies</span>
          <span className="p light" data-label="Technologies" style={css("display:flex;flex-wrap:wrap;gap:8px 10px")}>
            <span style={css("white-space:nowrap")}><a href="https://platform.openai.com/docs/guides/structured-outputs" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>structured-output LLM engine</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://platform.openai.com/docs/guides/function-calling" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>OpenAI function calling</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://spacy.io" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>spaCy</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>pgvector</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://platform.openai.com/docs/guides/embeddings" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>skill embeddings</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://en.wikipedia.org/wiki/Weighted_sum_model" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>composite scoring</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://docs.celeryq.dev" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Celery</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://docs.pydantic.dev" target="_blank" rel="noopener" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Pydantic</a></span>
          </span>
        </div>
      </div>
      <div id="rail-wrap" style={css("position:relative;margin-top:96px")}>
        <div aria-hidden="true" style={css("position:absolute;left:0;top:7.5px;bottom:0;width:1px;background:var(--border)")}></div>
        <div id="rail-fill" aria-hidden="true" style={css("position:absolute;left:0;top:7.5px;width:2px;height:0;background:var(--foreground);margin-left:-.5px;transition:height .25s var(--ease)")}></div>
        <section id="s1" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[1] Product flow</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Product flow & engineering ownership</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Two journeys, candidate and role, feed one evaluation and decision flow.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Connected recruiting flow</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>A candidate's context carries from profile to ranking.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f0" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 1 · Context carried from profile to evaluation.</figcaption>
          </figure>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Product journeys</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Employer and candidate context remain connected to evaluation.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f1" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 2 · Two journeys converge on one evaluation step.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Ownership ledger</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 200px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Area</span>
              <span>Detail</span>
              <span>Ownership</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 200px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Structured-output LLM engine</span>
              <span className="p light" data-label="Detail">JD generation + evaluation</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Built</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 200px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><a href="https://docs.pydantic.dev" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Pydantic</a> validation</span>
              <span className="p light" data-label="Detail">Structured JD outputs</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Implemented</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 200px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Candidate profiling</span>
              <span className="p light" data-label="Detail"><a href="https://spacy.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>spaCy</a> + <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>pgvector</a> + scoring</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Built</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 200px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Candidate ranking</span>
              <span className="p light" data-label="Detail">Experience · skills · interview</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Built</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 200px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Async <a href="https://docs.celeryq.dev" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Celery</a> pipeline</span>
              <span className="p light" data-label="Detail">JD generation</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Built</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 200px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Multi-stage interview agents</span>
              <span className="p light" data-label="Detail"><a href="https://platform.openai.com/docs/guides/function-calling" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>OpenAI function calling</a></span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Engineered</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 200px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Candidate profile workflow</span>
              <span className="p light" data-label="Detail">Match → apply → interview → evaluate</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>Connected</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 200px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Recruiting distribution</span>
              <span className="p light" data-label="Detail">Career pages + external channels</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>Supported</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Core system responsibilities</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Context</span>Candidate intelligence</span>
              <span className="p light" data-label="Detail">The profile is reused for matching, interviews and evaluation.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Context</span>Role intelligence</span>
              <span className="p light" data-label="Detail">A role's details carry through to interviews and scoring.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Automation</span>Structured interviews</span>
              <span className="p light" data-label="Detail">Interview templates cover technical, experience, coding and Q&A rounds.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Decisions</span>Ranked signals</span>
              <span className="p light" data-label="Detail">Ranking uses experience fit, skills match, and interview performance.</span>
            </div>
          </div>
        </section>
        <section id="s2" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[2] Candidates</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Candidate intelligence & matching</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>A resume becomes structured data the matcher can use.</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">NLP · <a href="https://spacy.io" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>spaCy</a></span>
              <span className="p light" data-label="Detail">Resume parsing and structured candidate information.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Vector signals · <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>pgvector</a></span>
              <span className="p light" data-label="Detail">Skill embeddings within candidate intelligence.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Scoring · composite score</span>
              <span className="p light" data-label="Detail">Produced as part of the candidate profile.</span>
            </div>
          </div>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Candidate profiling pipeline</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Resume → structured profile → matching signals → composite score.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f2" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 3 · From resume to composite score.</figcaption>
          </figure>
          <p className="p light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure)")}>The profile holds normalized skills, a summary, skill embeddings, experience context, matching signals and a composite score.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Matched role workflow</h3>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f3" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 4 · Profile context reused for matching and application.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Profile behavior</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Reuse</span>Connected candidate context</span>
              <span className="p light" data-label="Detail">Candidates never re-enter details between matching, applying, interviewing and evaluation.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Matching</span>Automatic role surfacing</span>
              <span className="p light" data-label="Detail">Matched roles appear after the structured candidate profile exists.</span>
            </div>
          </div>
        </section>
        <section id="s3" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[3] Roles & interviews</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Role intelligence & AI interviews</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Structured role data feeds configurable multi-stage AI interviews.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Structured role generation and interview automation</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Creating a role generates a description, screening questions and structured requirements that carry into evaluation.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Role-generation flow</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Asynchronous structured-output generation with validation.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f4" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 5 · Celery, structured-output LLM, then Pydantic validation.</figcaption>
          </figure>
          <div style={css("margin-top:32px;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px")}>
            <div data-reveal="1" style={css("background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
              <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>80%</div>
              <div className="p light" style={css("margin-top:6px")}>lower role setup time</div>
              <div className="p-sm light" style={css("margin-top:2px;color:var(--muted-foreground)")}>verified outcome</div>
            </div>
          </div>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Supported interview stage types</h3>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f5" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 6 · Four configurable interview rounds.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Interview system</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Agents</span>Multi-stage LLM interviews</span>
              <span className="p light" data-label="Detail">Interview agents use <a href="https://platform.openai.com/docs/guides/function-calling" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>OpenAI function calling</a>.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Context</span>Continuity across stages</span>
              <span className="p light" data-label="Detail">The role brief, interview flow, candidate context and scoring stay linked.</span>
            </div>
          </div>
          <div style={css("margin-top:32px;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px")}>
            <div data-reveal="1" style={css("background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
              <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>70%</div>
              <div className="p light" style={css("margin-top:6px")}>lower screening time</div>
              <div className="p-sm light" style={css("margin-top:2px;color:var(--muted-foreground)")}>verified outcome</div>
            </div>
          </div>
        </section>
        <section id="s4" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[4] Architecture</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Four-layer system architecture</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Four layers connect the data, the AI, the workflow and the decisions.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:32px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f6" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 7 · Four high-level boundaries; no unstated service topology is implied.</figcaption>
          </figure>
          <p className="p light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure)")}>Ranking weighs experience fit, skills match and interview performance, and keeps the reasoning.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Connected recruiting channels</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Career pages and external channels distribute each role.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")}>
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f7" style={css("min-width:560px")}></div></div>
            <figcaption className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 8 · Distribution to external channels.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Decision layer outputs</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Output</span>Candidate ranking</span>
              <span className="p light" data-label="Detail">The ranked list shows the strongest signals and why each candidate was recommended.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Output</span>Hiring analytics</span>
              <span className="p light" data-label="Detail">The platform also includes decision analytics.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Output</span>Conversion + role insights</span>
              <span className="p light" data-label="Detail">It tracks conversion and role-level performance.</span>
            </div>
          </div>
        </section>
        <section id="s5" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[5] Results & evidence</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Results, engineering decisions & evidence</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>The verified numbers, plus the implementation choices I can confirm.</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 200px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>System</span>
              <span>Result</span>
              <span>Framing</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 200px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Platform scale</span>
              <span className="p light" data-label="Result">10K+ users</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Verified scale</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 200px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Role setup workflow</span>
              <span className="p light" data-label="Result">80% reduction in setup time</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Verified outcome</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 200px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Structured AI interviews</span>
              <span className="p light" data-label="Result">70% reduction in screening time</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:#15803d;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Verified outcome</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Engineering decisions</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Structure</span>Structured outputs + <a href="https://docs.pydantic.dev" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Pydantic</a></span>
              <span className="p light" data-label="Detail">Role generation uses validated, structured LLM outputs.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">
                <span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Async</span>
                <a href="https://docs.celeryq.dev" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Celery</a> JD generation
              </span>
              <span className="p light" data-label="Detail">Job descriptions are generated through an asynchronous <a href="https://docs.celeryq.dev" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>Celery</a> pipeline.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Interviews</span>Function-calling agents</span>
              <span className="p light" data-label="Detail">Multi-stage LLM interview agents use <a href="https://platform.openai.com/docs/guides/function-calling" target="_blank" rel="noopener" style={css("text-decoration-color:var(--clay)")}>OpenAI function calling</a>.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Ranking</span>Three evaluation dimensions</span>
              <span className="p light" data-label="Detail">Experience fit · skills match · interview performance.</span>
            </div>
          </div>
          <p className="p-sm light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Evidence: 10K+ users · 80% faster role setup · 70% faster screening · high-level architecture.</p>
        </section>
      </div>
      <section style={css("margin-top:112px;max-width:var(--measure)")}>
        <p className="eyebrow" data-reveal="1" style={css("margin:0")}>Note on scope</p>
        <p className="p light" data-reveal="1" style={css("margin:10px 0 0")}>Only named technologies, confirmed flows and verified numbers. No model names, scoring weights, infrastructure details or prompts.</p>
      </section>
      <section id="contact" style={css("margin-top:80px")}>
        <h2 className="h2" data-reveal="1" style={css("margin:0")}>Want to talk about any of this?</h2>
        <p className="p light" data-reveal="1" style={css("margin:10px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Happy to go deeper on structured outputs, interview agents, or candidate ranking.</p>
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
