import { Fragment } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { css } from '@/lib/css';

export default function PocketlinkArticle({ toc }: { toc: ReactNode }) {
  return (
    <article style={css("max-width:var(--content-width);margin:0 auto;padding:var(--space-6xl) var(--page-gutter) 0;box-sizing:border-box")}>
      <Link href="/case-studies" aria-label="Back to case studies" data-anim="1" style={css("display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em;text-decoration:none;animation:fadeUp .6s var(--ease) both")} className="hv-clay"><span aria-hidden="true" style={css("color:var(--muted-foreground)")}>[←]</span>Case studies</Link>
      <h1 className="h1" data-anim="1" style={css("margin:32px 0 0;animation:fadeUp .7s var(--ease) 60ms both")}>Pocketlink: Creator Infrastructure, Commerce & AI</h1>
      <div aria-hidden="true" data-anim="1" style={css("width:32px;height:1px;margin:16px 0 0;background:var(--foreground);animation:fadeUp .7s var(--ease) 135ms both")}></div>
      <p className="p light" data-anim="1" style={css("margin:16px 0 0;max-width:520px;line-height:23px;animation:fadeUp .7s var(--ease) 160ms both")}>Co-founder. I built a single page where creators publish, sell and grow, and owned the editor, domains, commerce, AI tools and infrastructure.</p>
      <nav aria-label="Sections" data-anim="1" style={css("margin-top:28px;display:flex;flex-wrap:wrap;gap:8px;animation:fadeUp .7s var(--ease) 220ms both")}>{toc}</nav>
      <div style={css("margin-top:56px;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px")}>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 260ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>24,000+</div>
          <div className="p light" style={css("margin-top:6px")}>users</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>reached at product scale</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 320ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>30+</div>
          <div className="p light" style={css("margin-top:6px")}>analytics signals</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>behavior + heatmaps</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 380ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>14 mo</div>
          <div className="p light" style={css("margin-top:6px")}>to 24,000+ users</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>confirmed scale window</div>
        </div>
        <div data-anim="1" style={css("animation:fadeUp .7s var(--ease) 440ms both;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
          <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>3</div>
          <div className="p light" style={css("margin-top:6px")}>clicks to checkout</div>
          <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>lower-friction funnel</div>
        </div>
      </div>
      <div style={css("margin-top:32px;border-top:1px solid var(--foreground)")}>
        <div data-anim="1" data-r="row" style={css("animation:fadeUp .7s var(--ease) 500ms both;display:grid;grid-template-columns:140px minmax(0,1fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
          <span className="p light">Technologies</span>
          <span className="p light" data-label="Technologies" style={css("display:flex;flex-wrap:wrap;gap:8px 10px")}>
            <span style={css("white-space:nowrap")}><a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Next.js 15</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://react.dev" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>React 19</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://github.com/react-grid-layout/react-grid-layout" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>React Grid Layout</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://supabase.com" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Supabase</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://posthog.com" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>PostHog</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Cloudflare</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://ai.google.dev/gemini-api/docs/models" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Gemini 2.5 Flash</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://aws.amazon.com/s3" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>AWS S3</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://aws.amazon.com/lambda" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>AWS Lambda</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://aws.amazon.com/route53" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Route 53</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://aws.amazon.com/cloudwatch" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>CloudWatch</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://www.docker.com" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Docker</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://github.com/features/actions" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>GitHub Actions</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://kubernetes.io" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>Kubernetes</a>,</span>
            <span style={css("white-space:nowrap")}><a href="https://aws.amazon.com/eks/" target="_blank" rel="noopener noreferrer" style={css("text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px")}>AWS EKS</a></span>
          </span>
        </div>
      </div>
      <div id="rail-wrap" style={css("position:relative;margin-top:96px")}>
        <div aria-hidden="true" style={css("position:absolute;left:0;top:7.5px;bottom:0;width:1px;background:var(--border)")}></div>
        <div id="rail-fill" aria-hidden="true" style={css("position:absolute;left:0;top:7.5px;width:2px;height:0;background:var(--foreground);margin-left:-.5px;transition:height .25s var(--ease)")}></div>
        <section id="s1" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[1] Product</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Product problem & ownership</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>One creator-owned page for publishing, selling, analytics and brand work.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Platform system landscape</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>The dashboard splits into four product areas, then comes back together on the public creator page.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-pocketlink-1">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f0" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-pocketlink-1" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 1 · Four product systems feed one public creator page.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Product goals</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Goal 01</span>Position creators effectively</span>
              <span className="p light" data-label="Detail">A customizable page gives creators more than a fixed list of links.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Goal 02</span>Help creators monetize</span>
              <span className="p light" data-label="Detail">Products, subscriptions, digital downloads, checkout and brand deals all live in one product.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Goal 03</span>Operational intelligence</span>
              <span className="p light" data-label="Detail">Analytics, heatmaps, AI business analysis and automated collaboration management turn page activity into decisions.</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Ownership ledger</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>Area</span>
              <span>Detail</span>
              <span>Ownership</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Bento editor + page/card model</span>
              <span className="p light" data-label="Detail">Responsive desktop/mobile composition</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Built</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Nested cards / nested pages</span>
              <span className="p light" data-label="Detail">Deeper creator content paths</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Built</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>Cloudflare</a> domain + SSL lifecycle</span>
              <span className="p light" data-label="Detail">15-second status polling · TLS 1.2+</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Engineered</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Creator commerce</span>
              <span className="p light" data-label="Detail">Products · inventory · checkout · orders</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Built</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Autosave + undo/redo</span>
              <span className="p light" data-label="Detail">2.5 s save cadence · 10 snapshots</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Built</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Multi-tenant public routing</span>
              <span className="p light" data-label="Detail">Pocketlink subdomains + custom domains</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Engineered</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Analytics + heatmaps</span>
              <span className="p light" data-label="Detail">30+ visitor/behavior signals</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Built</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">AI, email + platform integrations</span>
              <span className="p light" data-label="Detail">BI agent · manager · campaigns · infra</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Built</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>My role</p>
          <p className="p light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure)")}>I co-founded it and owned product and engineering: the editor and page architecture, multi-tenancy and domains, commerce, analytics, AI tools, email, integrations, deployment and infrastructure.</p>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Product surface</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Creator destination</span>Publishing</span>
              <span className="p light" data-label="Detail">Profile · bento editor · themes · nested pages.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Commerce + subscriptions</span>Monetization</span>
              <span className="p light" data-label="Detail">Products · checkout · gated downloads.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Behavior + AI</span>Intelligence</span>
              <span className="p light" data-label="Detail">Analytics · heatmaps · <a href="https://ai.google.dev" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>Gemini</a> BI agent.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Creator business tooling</span>Operations</span>
              <span className="p light" data-label="Detail">Email · social · domains · integrations.</span>
            </div>
          </div>
        </section>
        <section id="s2" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[2] Editor</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Editor & publishing architecture</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>A responsive bento layout with saved page state, autosave, nested pages and hybrid public rendering.</p>
          <div style={css("margin-top:32px;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px")}>
            <div data-reveal="1" style={css("background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
              <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>2 → 12</div>
              <div className="p light" style={css("margin-top:6px")}>grid mapping</div>
              <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>mobile columns → desktop</div>
            </div>
            <div data-reveal="1" style={css("background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
              <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>2.5 s</div>
              <div className="p light" style={css("margin-top:6px")}>autosave cadence</div>
              <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>save window</div>
            </div>
            <div data-reveal="1" style={css("background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
              <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>10</div>
              <div className="p light" style={css("margin-top:6px")}>history snapshots</div>
              <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>bounded undo/redo</div>
            </div>
          </div>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Editor state & persistence</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Desktop and mobile layouts branch from shared <a href="https://react.dev" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>React</a> state and merge back into the saved page.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-pocketlink-2">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f1" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-pocketlink-2" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 2 · Desktop and mobile layouts merge into one saved page config.</figcaption>
          </figure>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Autosave flow</h3>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-pocketlink-3">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f2" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-pocketlink-3" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 3 · Creator action to saved state.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>State & delivery</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Autosave</span>Save without a publish step</span>
              <span className="p light" data-label="Detail">Creator action → <a href="https://react.dev" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>React</a> state → unsaved → 2.5-second save window → <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>Supabase</a> update → saved state.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Undo / redo</span>Bounded snapshot history</span>
              <span className="p light" data-label="Detail">Edits are grouped on a 250 ms timer, with up to 10 desktop and mobile snapshots. A new edit after undo clears the redo history.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Public rendering</span>Hybrid server + client path</span>
              <span className="p light" data-label="Detail">The server resolves tenant data, metadata and profile. The client then hydrates the responsive grid and interactions.</span>
            </div>
          </div>
          <p className="p light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure)")}>The public page reads the saved configuration directly, so edits show up with no separate publish step.</p>
        </section>
        <section id="s3" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[3] Domains & commerce</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Multi-tenancy, domains & commerce</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Hostname-based routing, <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>Cloudflare</a> domain handling and a three-click purchase.</p>
          <div style={css("margin-top:32px;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px")}>
            <div data-reveal="1" style={css("background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
              <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>15 s</div>
              <div className="p light" style={css("margin-top:6px")}>domain / SSL polling</div>
              <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>provider status cadence</div>
            </div>
            <div data-reveal="1" style={css("background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
              <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>TLS 1.2+</div>
              <div className="p light" style={css("margin-top:6px")}>minimum enforced</div>
              <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>TLS 1.3 supported</div>
            </div>
            <div data-reveal="1" style={css("background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));padding:12px 14px")}>
              <div style={css("font-size:18px;line-height:24px;font-weight:600;letter-spacing:-.011em")}>3</div>
              <div className="p light" style={css("margin-top:6px")}>clicks to checkout</div>
              <div className="p-sm light" style={css("margin-top:2px;color:var(--stat-muted-foreground)")}>reduced purchase friction</div>
            </div>
          </div>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Custom domain + tenant routing</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}><a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>Cloudflare</a> handles hostnames and SSL. <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>Next.js</a> maps each active hostname to the right creator.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-pocketlink-4">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f3" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-pocketlink-4" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 4 · Custom domains and subdomains resolve to one tenant resolver.</figcaption>
          </figure>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Commerce path</h3>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-pocketlink-5">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f4" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-pocketlink-5" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 5 · Product block to shipping or digital access.</figcaption>
          </figure>
          <p className="p-sm light" data-reveal="1" style={css("margin:20px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Commerce covers products, inventory, discounts, cart, checkout, shipping, payments, orders, reviews, subscriptions and gated downloads.</p>
        </section>
        <section id="s4" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[4] Analytics & AI</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Analytics, AI & audience operations</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Behavior tracking, creator insights, collaboration management and audience workflows.</p>
          <h3 className="h3" data-reveal="1" style={css("margin:32px 0 0")}>Behavioral analytics pipeline</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Visitor events become behavior signals and heatmap batches, which feed the creator's analytics.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-pocketlink-6">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f5" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-pocketlink-6" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 6 · From visitor session to creator-facing analytics.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>AI operations</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Gemini 2.5 Flash</span>Creator business intelligence</span>
              <span className="p light" data-label="Detail">Creators ask questions in plain language about sales, inventory, product movement, churn and conversion, and get predicted stock estimates.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>AI Creator Manager</span>Brand collaboration operations</span>
              <span className="p light" data-label="Detail">It judges creator-product fit and risks, negotiates terms and moves opportunities to an agreed deal.</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Audience operations</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Audience communication</span>Email marketing</span>
              <span className="p light" data-label="Detail">Contact lists, templates, drafts, personalization, instant and scheduled sends, unsubscribe handling, Gmail API and Nodemailer delivery, and queued sends.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Creator-facing data</span>Integrations</span>
              <span className="p light" data-label="Detail">YouTube · Instagram · Facebook · Gmail · Maps · image, product and OG-image tools.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Layout assistance</span>AI page tooling</span>
              <span className="p light" data-label="Detail">Generation · onboarding generation · optimization · builder workflows.</span>
            </div>
          </div>
        </section>
        <section id="s5" data-sec="1" data-r="sec" style={css("position:relative;padding-left:35px;margin-top:112px")}>
          <span data-mark="1" aria-hidden="true"></span>
          <p className="eyebrow" data-reveal="1" style={css("margin:0")}>[5] Delivery & results</p>
          <h2 className="h2" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);text-wrap:balance")}>Delivery, results & engineering lessons</h2>
          <p className="p light" data-reveal="1" style={css("margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Infrastructure, scale, architecture decisions and lessons from a platform with 24,000+ users.</p>
          <div style={css("margin-top:16px")}>
            <div data-r="thead" className="p" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)")}>
              <span>System</span>
              <span>Confirmed result</span>
              <span>Framing</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Product scale</span>
              <span className="p light" data-label="Confirmed result">24,000+ users in 14 months</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:rgba(22,163,74,.1);color:var(--status-pill-active-fg);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:#16a34a")}></span>Confirmed headline fact</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Creator analytics</span>
              <span className="p light" data-label="Confirmed result">30+ visitor / behavior signals</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>Includes heatmaps</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Custom domains</span>
              <span className="p light" data-label="Confirmed result">15-second domain / SSL polling</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>TLS 1.2+ enforced</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:200px minmax(0,1fr) 285px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light">Commerce</span>
              <span className="p light" data-label="Confirmed result">Three-click checkout path</span>
              <span style={css("justify-self:start;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:5px 11px;border-radius:9999px;background:color-mix(in srgb, var(--foreground) 7%, transparent);color:var(--muted-foreground);font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;")}><span style={css("width:6px;height:6px;flex:none;border-radius:9999px;background:var(--muted-foreground)")}></span>Lower-friction checkout path</span>
            </div>
          </div>
          <h3 className="h3" data-reveal="1" style={css("margin:72px 0 0")}>Delivery path</h3>
          <p className="p light" data-reveal="1" style={css("margin:6px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>From a push to the repo to a replicated <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>Next.js</a> app on <a href="https://aws.amazon.com/eks/" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>AWS EKS</a>.</p>
          <figure data-reveal="1" data-fig="1" style={css("margin:24px 0 0")} aria-labelledby="case-figure-caption-pocketlink-7">
            <div style={css("border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px;overflow-x:auto")}><div data-mmd="f6" style={css("min-width:560px")}></div></div>
            <figcaption id="case-figure-caption-pocketlink-7" className="p-sm light" style={css("margin-top:10px;color:var(--muted-foreground)")}>Fig. 7 · From GitHub push to AWS EKS.</figcaption>
          </figure>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Architecture decisions</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Editor model</span>Separate responsive arrays</span>
              <span className="p light" data-label="Detail">2-column mobile → 12-column desktop synchronization.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Tenancy</span>Host-based public routing</span>
              <span className="p light" data-label="Detail">One shared route tree for Pocketlink and custom domains.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Integration boundary</span>Browser + route-handler split</span>
              <span className="p light" data-label="Detail">Core state goes straight to <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" style={css("text-decoration-color:var(--clay)")}>Supabase</a>. Server routes handle providers, secrets and orchestration.</span>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,3fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light"><span style={css("display:block;margin-bottom:2px;font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>Public rendering</span>Hybrid server / client model</span>
              <span className="p light" data-label="Detail">Server tenant + metadata; client interactive grid and cards.</span>
            </div>
          </div>
          <p className="eyebrow" data-reveal="1" style={css("margin:56px 0 0")}>Engineering lessons</p>
          <div style={css("margin-top:16px;border-top:1px solid var(--foreground)")}>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:44px minmax(0,1fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light" style={css("color:var(--muted-foreground)")}>01</span>
              <div>
                <div className="p" style={css("font-weight:500")}>Composable page model.</div>
                <p className="p light" style={css("margin:2px 0 0;max-width:var(--measure)")}>Card-oriented schema across publishing and commerce.</p>
              </div>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:44px minmax(0,1fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light" style={css("color:var(--muted-foreground)")}>02</span>
              <div>
                <div className="p" style={css("font-weight:500")}>Domains as product infrastructure.</div>
                <p className="p light" style={css("margin:2px 0 0;max-width:var(--measure)")}>Tenant routing, DNS, and SSL lifecycle.</p>
              </div>
            </div>
            <div data-reveal="1" data-r="row" style={css("display:grid;grid-template-columns:44px minmax(0,1fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)")}>
              <span className="p light" style={css("color:var(--muted-foreground)")}>03</span>
              <div>
                <div className="p" style={css("font-weight:500")}>Intelligence near operations.</div>
                <p className="p light" style={css("margin:2px 0 0;max-width:var(--measure)")}>Analytics, commerce context, and AI action.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id="contact" style={css("margin-top:112px")}>
        <h2 className="h2" data-reveal="1" style={css("margin:0")}>Want to talk about any of this?</h2>
        <p className="p light" data-reveal="1" style={css("margin:10px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>Happy to go deeper on the editor, multi-tenant routing, or commerce.</p>
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
