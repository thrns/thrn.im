"use client";

import { createContext, useContext, useEffect, useId, useRef, useState } from "react";
import { defineRegistry } from "@json-render/react";

import StatusPill from "@/components/common/StatusPill";
import { Tag } from "@/components/common/Tag";
import TextLink from "@/components/common/TextLink";
import { Bubble, Icon } from "@/components/ui";
import BixxieMark from "@/components/bixxie/BixxieMark";
import { CASES, EDUCATION, PROJECTS, ROLES, STACK } from "@/lib/data";
import { css } from "@/lib/css";
import { EMAIL, PATH } from "@/lib/chrome";
import { catalog } from "@/lib/bixxie/catalog";
import { renderMermaid } from "@/lib/mermaid";

type BixxieActions = { onAsk: (question: string) => void; onNavigate: () => void };

export const BixxieActionContext = createContext<BixxieActions | null>(null);

// strict + htmlLabels:false reject click/href callbacks and raw HTML in node
// labels regardless of what the model's definition string tries to include —
// defense-in-depth on top of the prompt-level instruction not to write them.

const LINK_DESTINATIONS = [
  { key: "email", label: "Email", href: `mailto:${EMAIL}` },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/thrn" },
  { key: "github", label: "GitHub", href: "https://github.com/thrns" },
  { key: "work", label: "Work", href: PATH.work },
  { key: "projects", label: "Projects", href: PATH.projects },
  { key: "case-studies", label: "Case studies", href: PATH.cases },
  { key: "stack", label: "Stack", href: PATH.stack },
  { key: "resume", label: "Resume", href: PATH.resume },
] as const;

const CARD = "min-width:0;box-sizing:border-box;border:1px solid var(--border);border-radius:14px;background:var(--card);padding:14px";
const RULE = "border-top:1px solid var(--border)";

export const { registry } = defineRegistry(catalog, {
  components: {
    // The root: Bixxie's chat message. `text` is the bubble; the children are
    // follow-on bubbles and structured blocks stacked beneath it.
    Answer: ({ props, children }) => (
      <div style={css("width:100%;display:flex;align-items:flex-start;gap:8px")}>
        <div style={css("padding-top:8px")}><BixxieMark /></div>
        <div style={css("flex:1;min-width:0;display:flex;flex-direction:column;align-items:flex-start;gap:8px")}>
          {props.text.trim() && <Bubble variant="secondary">{props.text}</Bubble>}
          {children}
        </div>
      </div>
    ),
    Section: ({ props, children }) => (
      <section style={css(`width:100%;display:flex;flex-direction:column;gap:8px;padding-top:6px`)}>
        {(props.label || props.title) && (
          <div style={css("display:flex;flex-direction:column;gap:2px")}>
            {props.label && <span className="eyebrow">{props.label}</span>}
            {props.title && <h4 className="p" style={css("margin:0;font-weight:var(--weight-semibold)")}>{props.title}</h4>}
          </div>
        )}
        {children}
      </section>
    ),
    TextBlock: ({ props }) => (
      <Bubble variant="secondary" style={props.tone === "muted" ? { color: "var(--muted-foreground)" } : undefined}>
        {props.text}
      </Bubble>
    ),
    Metrics: ({ props }) => (
      <div data-bixxie="metrics" style={css(`width:100%;${CARD};padding:0;overflow:hidden;display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr))`)}>
        {props.items.map((item, index) => (
          <div key={`${item.label}-${index}`} style={css(`min-width:0;padding:12px 14px;box-shadow:inset 1px 0 0 var(--border),inset 0 1px 0 var(--border);margin:-1px 0 0 -1px`)}>
            <div style={css("font-size:22px;line-height:28px;font-weight:var(--weight-semibold);letter-spacing:-.011em")}>{item.value}</div>
            <div className="eyebrow" style={css("margin-top:6px")}>{item.label}</div>
            {item.note && <div className="p-mini light muted" style={css("margin-top:3px")}>{item.note}</div>}
          </div>
        ))}
      </div>
    ),
    Experience: ({ props }) => {
      const role = ROLES.find((item) => item.company === props.company);
      if (!role) return null;

      return (
        <div style={css(`width:100%;${CARD}`)}>
          <div style={css("display:flex;align-items:baseline;justify-content:space-between;gap:12px")}>
            <span className="p" style={css("font-weight:var(--weight-semibold)")}>{props.showRole !== false ? role.title : role.company}</span>
            {props.showRole !== false && <span className="p-sm muted">{role.company}</span>}
          </div>
          {props.showSummary !== false && (
            <p className="p-sm light" style={css("margin:8px 0 0;color:var(--muted-foreground)")}>{role.summary}</p>
          )}
        </div>
      );
    },
    Education: ({ props }) => (
      <div style={css(`width:100%;${CARD}`)}>
        <div className="p" style={css("font-weight:var(--weight-semibold)")}>{EDUCATION.degree}, {EDUCATION.program}</div>
        <div className="p-sm muted" style={css("margin-top:2px")}>{EDUCATION.institution}, {EDUCATION.campus}</div>
        <p className="p-sm light" style={css("margin:8px 0 0;color:var(--muted-foreground)")}>{EDUCATION.components.join(", ")}</p>
        {props.showCoursework !== false && (
          <div style={css("margin-top:10px;display:flex;flex-wrap:wrap;gap:6px")}>
            {Object.values(EDUCATION.coursework).flat().map((course) => <Tag key={course.code} size="sm">{course.code}</Tag>)}
          </div>
        )}
      </div>
    ),
    Projects: ({ props }) => {
      const projects = props.names
        .map((name) => PROJECTS.find((project) => project.name === name))
        .filter((project) => project !== undefined);

      return (
        <div style={css(`width:100%;${CARD};padding:0`)}>
          {projects.map((project, index) => (
            <div key={project.name} data-bixxie="project-row" style={css(`padding:12px 14px;${index === 0 ? "" : RULE}`)}>
              <div style={css("display:flex;align-items:center;justify-content:space-between;gap:12px")}>
                <TextLink href={project.url}>{project.name}</TextLink>
                <StatusPill status={project.status} pulse={project.status === "Active"} />
              </div>
              <p className="p-sm light" style={css("margin:6px 0 0;color:var(--muted-foreground)")}>{project.what}</p>
            </div>
          ))}
        </div>
      );
    },
    Stack: ({ props }) => {
      const items = props.names
        .map((name) => STACK.find((item) => item.name === name))
        .filter((item) => item !== undefined);

      return (
        <div style={css("width:100%;display:flex;flex-wrap:wrap;gap:6px")}>
          {items.map((item) => <Tag key={item.name} size="sm">{item.name}</Tag>)}
        </div>
      );
    },
    CaseStudy: ({ props }) => {
      const context = useContext(BixxieActionContext);
      const study = CASES.find(([, , , , url]) => url === `${PATH.cases}/${props.slug}`);
      if (!study) return null;
      const [title, , , canonicalSummary, href] = study;
      const summary = props.summary ?? canonicalSummary;

      return (
        <div style={css(`width:100%;${CARD}`)}>
          <span className="eyebrow">Case study</span>
          <div style={css("margin-top:6px")}><TextLink href={href} onClick={() => context?.onNavigate()}>{title}</TextLink></div>
          {summary && <p className="p-sm light" style={css("margin:6px 0 0;color:var(--muted-foreground)")}>{summary}</p>}
        </div>
      );
    },
    Facts: ({ props }) => (
      <div style={css(`width:100%;${CARD};padding:0`)}>
        {props.rows.map((row, index) => (
          <div key={`${row.label}-${index}`} data-bixxie="fact-row" style={css(`padding:10px 14px;${index === 0 ? "" : RULE}`)}>
            <span className="eyebrow">{row.label}</span>
            <p className="p-sm light" style={css("margin:4px 0 0")}>{row.value}</p>
          </div>
        ))}
      </div>
    ),
    Comparison: ({ props }) => (
      <div data-bixxie="comparison" style={css(`width:100%;${CARD};padding:0;overflow:hidden`)}>
        <div style={css("display:grid;grid-template-columns:repeat(2,minmax(0,1fr))")}>
          <div className="p-sm" style={css("padding:10px 14px;font-weight:var(--weight-semibold)")}>{props.leftTitle}</div>
          <div className="p-sm" style={css("padding:10px 14px;font-weight:var(--weight-semibold);border-left:1px solid var(--border)")}>{props.rightTitle}</div>
        </div>
        {props.rows.map((row, index) => (
          <div key={`${row.label}-${index}`} data-bixxie="comparison-row" style={css(RULE)}>
            <span className="eyebrow" style={css("display:block;padding:8px 14px 0")}>{row.label}</span>
            <div style={css("display:grid;grid-template-columns:repeat(2,minmax(0,1fr))")}>
              <span className="p-sm light" style={css("padding:4px 14px 10px")}>{row.left}</span>
              <span className="p-sm light" style={css("padding:4px 14px 10px;border-left:1px solid var(--border)")}>{row.right}</span>
            </div>
          </div>
        ))}
      </div>
    ),
    Notice: ({ props }) => {
      const NOTICE_LABEL: Record<typeof props.kind, string> = { security: "Security", unknown: "Not on this site", note: "Note" };
      const NOTICE_ICON: Record<typeof props.kind, string> = { security: "LucideShieldAlert", unknown: "LucideInfo", note: "LucideInfo" };

      return (
        <aside role="note" style={css("width:100%;box-sizing:border-box;padding:12px 14px;border-radius:10px;background:var(--muted);display:flex;gap:10px;align-items:flex-start")}>
          <span style={css("flex:none;margin-top:2px;color:var(--muted-foreground);display:inline-flex")}><Icon name={NOTICE_ICON[props.kind]} size={14} /></span>
          <div style={css("min-width:0")}>
            <span className="eyebrow">{NOTICE_LABEL[props.kind]}</span>
            <div className="p-sm" style={css("margin-top:4px;font-weight:var(--weight-medium)")}>{props.title}</div>
            <p className="p-sm light" style={css("margin:2px 0 0;color:var(--muted-foreground)")}>{props.body}</p>
          </div>
        </aside>
      );
    },
    Links: ({ props }) => {
      const context = useContext(BixxieActionContext);
      const destinations = props.items
        .map((key) => LINK_DESTINATIONS.find((item) => item.key === key))
        .filter((item) => item !== undefined);

      return (
        <nav aria-label="Related links" style={css("display:flex;flex-wrap:wrap;gap:6px 16px;padding:2px 2px 0")}>
          {destinations.map((item) => (
            <TextLink key={item.key} href={item.href} onClick={() => context?.onNavigate()}>{item.label}</TextLink>
          ))}
        </nav>
      );
    },
    Diagram: ({ props }) => {
      const id = useId().replace(/[^a-zA-Z0-9]/g, "");
      const containerRef = useRef<HTMLDivElement>(null);
      const [failed, setFailed] = useState(false);

      useEffect(() => {
        let cancelled = false;
        setFailed(false);

        renderMermaid(`bixxie-diagram-${id}`, props.definition, {
          startOnLoad: false,
          securityLevel: "strict",
          htmlLabels: false,
          theme: "neutral",
        }, true)
          .then(({ svg }) => {
            if (!cancelled && containerRef.current) {
              containerRef.current.innerHTML = svg;
              const diagram = containerRef.current.querySelector('svg');
              diagram?.setAttribute('focusable', 'false');
              diagram?.removeAttribute('tabindex');
            }
          })
          .catch(() => {
            // Malformed or disallowed definition (e.g. a directive strict
            // mode rejects) — fail silently rather than showing broken
            // markup or a raw Mermaid parser error to the visitor.
            if (!cancelled) setFailed(true);
          });

        return () => {
          cancelled = true;
        };
      }, [props.definition, id]);

      if (failed) return null;

      return (
        <div style={css(`width:100%;${CARD}`)}>
          {props.title && <span className="eyebrow">{props.title}</span>}
          <div
            ref={containerRef}
            style={css(`margin-top:${props.title ? "10px" : "0"};overflow-x:auto;max-width:100%`)}
          />
        </div>
      );
    },
    FollowUps: ({ props }) => {
      const context = useContext(BixxieActionContext);

      return (
        <div data-bixxie="follow-ups" role="group" aria-label="Suggested questions" style={css("width:100%;display:flex;flex-wrap:wrap;gap:6px;padding-top:2px")}>
          {props.items.map((question, index) => (
            <Bubble key={`${question}-${index}`} variant="suggestion" onClick={() => context?.onAsk(question)}>
              {question}
            </Bubble>
          ))}
        </div>
      );
    },
  },
});
