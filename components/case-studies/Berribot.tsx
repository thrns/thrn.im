import { Fragment } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { css } from '@/lib/css';
import { D } from '@/lib/case-studies/berribot-d';

export default function BerribotArticle({ toc }: { toc: ReactNode }) {
  return (
    <article style={css("max-width:var(--content-width);margin:0 auto;padding:var(--space-6xl) var(--page-gutter) 0;box-sizing:border-box")}>
      <Link href="/case-studies" aria-label="Back to case studies" data-anim="1" style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em;text-decoration:none;animation:fadeUp .6s var(--ease) both")} className="hv-clay"><span aria-hidden="true" style={css("color:var(--muted-foreground)")}>[←]</span>Case studies</Link>
      <h1 className="h1" data-anim="1" style={css("margin:32px 0 0;animation:fadeUp .7s var(--ease) 60ms both")}>Berribot: Engineering Production AI Systems</h1>
      <div aria-hidden="true" data-anim="1" style={css("width:32px;height:1px;margin:16px 0 0;background:var(--foreground);animation:fadeUp .7s var(--ease) 135ms both")}></div>
      <p className="p light" data-anim="1" style={css("margin:16px 0 0;max-width:520px;line-height:23px;animation:fadeUp .7s var(--ease) 160ms both")}>AI Engineer. I owned the system that matches and ranks candidates for job descriptions, and helped with tutoring, evals and deployment.</p>
      <nav aria-label="Sections" data-anim="1" style={css("margin-top:28px;display:flex;flex-wrap:wrap;gap:8px;animation:fadeUp .7s var(--ease) 220ms both")}>{toc}</nav>
      <div style={css("margin-top:56px;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px")}>
        {(D.stats || []).map((s, $i4) => (
          <Fragment key={$i4}><div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 260ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
              <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>{s.v}</div>
              <div className="p light" style={css("margin-top:6px")}>{s.l}</div>
              <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>{s.n}</div>
            </div></Fragment>
        ))}
      </div>
      <div style={css("margin-top:32px;border-top:1px solid var(--foreground)")}>
        <div data-anim="1" data-r="row" style={css("animation:fadeUp .7s var(--ease) 320ms both;display:grid;grid-template-columns:140px minmax(0,1fr);gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)")}>
          <span className="p light">Approach</span>
          <div data-label="Approach" style={css("display:flex;flex-wrap:wrap;align-items:center;gap:8px")}>
            {(D.approach || []).map((a, $i6) => (
              <Fragment key={$i6}><span style={css("display:inline-flex;align-items:center;gap:8px")}>
                  <span style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em")}><span style={css("color:var(--muted-foreground)")}>[{a.n}]</span>{a.t}</span>
                  {(a.next) ? (<><span aria-hidden="true" style={css("color:var(--muted-foreground);font-weight:300")}>→</span></>) : null}
                </span></Fragment>
            ))}
          </div>
        </div>
        <div data-anim="1" data-r="row" style={css("animation:fadeUp .7s var(--ease) 380ms both;display:grid;grid-template-columns:140px minmax(0,1fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
          <span className="p light">Technologies</span>
          {' '}
          <span className="p light" data-label="Technologies" style={css("display:flex;flex-wrap:wrap;gap:8px 10px")}>
            {(D.tech || []).map((x, $i6) => (
              <Fragment key={$i6}><span style={css("white-space:nowrap")}>
                  <a href={x.url} target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>{x.name}</a>
                  {(x.comma) ? (<>,</>) : null}
                </span></Fragment>
            ))}
          </span>
        </div>
      </div>
      <div id="rail-wrap" style={css("position:relative;margin-top:96px")}>
        <div aria-hidden="true" style={css("position:absolute;left:0;top:7.5px;bottom:0;width:1px;background:var(--border)")}></div>
        <div id="rail-fill" aria-hidden="true" style={css("position:absolute;left:0;top:7.5px;width:2px;height:0;background:var(--foreground);margin-left:-.5px;transition:height .25s var(--ease)")}></div>
        <section id="context" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[1] Context & ownership</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>How the systems connected, and where my ownership began and ended.</h2>
          <figure data-reveal="1" data-fig="1" style={css("margin:32px 0 0")} aria-labelledby="case-figure-caption-berribot-1">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="context" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-berribot-1" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 1 · Search & Match and BerriTutor (highlighted) are the two systems I worked on directly.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Ownership</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,2fr) 250px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Area</span>
              <span>Detail</span>
              <span style={css("justify-self:end")}>Role</span>
            </div>
            {(D.ledger || []).map((r, $i6) => (
              <Fragment key={$i6}><div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,2fr) 250px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
                  <span className="p light">{r.a}</span>
                  {' '}
                  <span className="p light" data-label="Detail">{r.b}</span>
                  {' '}
                  <span style={css(`justify-self:end;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:${r.pillBg};color:${r.pillFg};font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase`)}><span style={css(`width:6px;height:6px;border-radius:9999px;background:${r.dot}`)}></span>{r.c}</span>
                </div></Fragment>
            ))}
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Problems and objectives</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,3fr) 120px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Name</span>
              <span>Notes</span>
              <span style={css("justify-self:end")}>Type</span>
            </div>
            {(D.problems || []).map((r, $i6) => (
              <Fragment key={$i6}><div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,3fr) 120px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
                  <span className="p light">{r.a}</span>
                  {' '}
                  <span className="p light" data-label="Notes">{r.b}</span>
                  {' '}
                  <span style={css(`justify-self:end;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:${r.pillBg};color:${r.pillFg};font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase`)}><span style={css(`width:6px;height:6px;border-radius:9999px;background:${r.dot}`)}></span>{r.c}</span>
                </div></Fragment>
            ))}
          </div>
        </section>
        <section id="ranking" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[2] Search & ranking</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Re-architecting JD-to-candidate search & ranking</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>A staged ranking system, not a single matching call: retrieval and learning-to-rank in production, from diagnosis to recruiter feedback.</p>
          <div style={css("margin-top:32px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,3fr) 150px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Name</span>
              <span>Notes</span>
              <span style={css("justify-self:end")}>Phase</span>
            </div>
            {(D.phases || []).map((r, $i6) => (
              <Fragment key={$i6}><div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,3fr) 150px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
                  <span className="p light">{r.a}</span>
                  {' '}
                  <span className="p light" data-label="Notes" style={css("display:flex;flex-direction:column;gap:2px")}>
                    {(r.items || []).map((i, $i10) => (
                      <Fragment key={$i10}><span>{i}</span></Fragment>
                    ))}
                  </span>
                  {' '}
                  <span style={css(`justify-self:end;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:${r.pillBg};color:${r.pillFg};font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase`)}><span style={css(`width:6px;height:6px;border-radius:9999px;background:${r.dot}`)}></span>{r.c}</span>
                </div></Fragment>
            ))}
          </div>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Multi-stage ranking pipeline</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>One input feeds two retrieval paths, which fuse before the expensive stages.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-berribot-2">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="ranking" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-berribot-2" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 2 · Retrieve broadly, then spend expensive scoring on a reduced set.</figcaption>
          </figure>
          <div style={css("margin-top:32px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Step</span>
              <span>What it does</span>
              <span>Why it is here</span>
            </div>
            {(D.steps || []).map((r, $i6) => (
              <Fragment key={$i6}><div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1.2fr) minmax(0,2.4fr) minmax(0,2.4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
                  <span className="p light"><span style={css("color:var(--muted-foreground);font-weight:300;margin-right:8px")}>{r.n}</span>{r.a}</span>
                  {' '}
                  <span className="p light" data-label="What it does">{r.b}</span>
                  {' '}
                  <span className="p light" data-label="Why it is here" style={css("color:var(--muted-foreground)")}>{r.c}</span>
                </div></Fragment>
            ))}
          </div>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Candidate intelligence</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>From raw resume to a canonical profile the ranker can use.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-berribot-3">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="candidate" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-berribot-3" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 3 · Resume parsing and taxonomy.</figcaption>
          </figure>
        </section>
        <section id="tutor" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[3] BerriTutor</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Building BerriTutor</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Real-time personalized voice tutoring. I started it and led core development.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:32px 0 0")} aria-labelledby="case-figure-caption-berribot-4">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="tutor" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-berribot-4" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 4 · Runtime architecture for low-latency WebRTC conversations, shown at a high level to protect proprietary implementation details.</figcaption>
          </figure>
          <div style={css("margin-top:32px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,3fr) 120px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Name</span>
              <span>Notes</span>
              <span style={css("justify-self:end")}>Layer</span>
            </div>
            {(D.delivery || []).map((r, $i6) => (
              <Fragment key={$i6}><div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,3fr) 120px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
                  <span className="p light">{r.a}</span>
                  {' '}
                  <span className="p light" data-label="Notes">{r.b}</span>
                  {' '}
                  <span style={css(`justify-self:end;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:${r.pillBg};color:${r.pillFg};font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase`)}><span style={css(`width:6px;height:6px;border-radius:9999px;background:${r.dot}`)}></span>{r.c}</span>
                </div></Fragment>
            ))}
          </div>
        </section>
        <section id="reliability" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[4] Testable, reliable & operable</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Making AI systems testable, reliable & operable</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>What made it production-ready: evaluation, integrity automation, delivery and reliability.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:48px 0 0")}>LLM evaluation system</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>A regression loop that stays repeatable as prompts, models and behavior change.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-berribot-5">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="evals" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-berribot-5" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 5 · Release the change, or inspect the trace.</figcaption>
          </figure>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Production delivery</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}><a href="https://www.docker.com" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>Dockerized</a> services running on <a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>GCP</a>.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-berribot-6">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="delivery" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-berribot-6" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 6 · From commit to GKE / Cloud Run.</figcaption>
          </figure>
          <div style={css("margin-top:32px;border-top:1px solid var(--foreground)")}>
            {(D.opItems || []).map((d, $i6) => (
              <Fragment key={$i6}><div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
                  <span className="p light">{d.a}</span>
                  {' '}
                  <span className="p light" data-label="Detail">{d.b}</span>
                </div></Fragment>
            ))}
          </div>
        </section>
        <section id="results" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[5] Results & evidence</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Results, engineering decisions & evidence</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>The claims, architecture choices and engineering lessons, in one place.</p>
          <div style={css("margin-top:32px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,2fr) 250px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>System</span>
              <span>Result</span>
              <span style={css("justify-self:end")}>Framing</span>
            </div>
            {(D.results || []).map((r, $i6) => (
              <Fragment key={$i6}><div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,2fr) 250px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
                  <span className="p light">{r.a}</span>
                  {' '}
                  <span className="p light" data-label="Result">{r.b}</span>
                  {' '}
                  <span style={css(`justify-self:end;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:${r.pillBg};color:${r.pillFg};font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase`)}><span style={css(`width:6px;height:6px;border-radius:9999px;background:${r.dot}`)}></span>{r.c}</span>
                </div></Fragment>
            ))}
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Architecture decisions</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            {(D.archDecisions || []).map((d, $i6) => (
              <Fragment key={$i6}><div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
                  <span className="p light">{d.a}</span>
                  {' '}
                  <span className="p light" data-label="Why">{d.b}</span>
                </div></Fragment>
            ))}
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Engineering lessons</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            {(D.lessons || []).map((c, $i6) => (
              <Fragment key={$i6}><div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:44px minmax(0,1fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
                  <span className="p light" style={css("color:var(--muted-foreground)")}>{c.n}</span>
                  <div>
                    <div className="p" style={css("font-weight:500")}>{c.title}</div>
                    <p className="p light" style={css("margin:2px 0 0;max-width:var(--measure)")}>{c.text}</p>
                  </div>
                </div></Fragment>
            ))}
          </div>
          <p className="p-sm light" data-reveal="1" style={css("margin:32px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Evidence: public product evidence · internal measurement · high-level architecture · implementation.</p>
        </section>
      </div>
      <section style={css("margin-top:112px;max-width:var(--measure)")}>
        <p className="eyebrow" data-reveal="1" style={css("margin:0")}>Note on scope</p>
        <p className="p light" data-reveal="1" style={css("margin:10px 0 0")}>High-level architecture only. No proprietary code, candidate data, private endpoints, prompts or internal dashboards.</p>
      </section>
      <section id="contact" style={css("margin-top:80px")}>
        <h2 className="h2" data-reveal="1" style={css("margin:0")}>Want to talk about any of this?</h2>
        <p className="p light" data-reveal="1" style={css("margin:10px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Happy to go deeper on ranking, evaluation, or voice agents.</p>
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
