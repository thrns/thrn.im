"use client";

import { createContext, useContext } from "react";
import { defineRegistry } from "@json-render/react";

import StatusPill from "@/components/common/StatusPill";
import { Tag } from "@/components/common/Tag";
import TextLink from "@/components/common/TextLink";
import { CASES, PROJECTS, ROLES, STACK } from "@/lib/data";
import { css } from "@/lib/css";
import { EMAIL, PATH } from "@/lib/chrome";
import { catalog } from "@/lib/bixxie/catalog";

type BixxieActions = { onAsk: (question: string) => void };

export const BixxieActionContext = createContext<BixxieActions | null>(null);

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

const LINK_UL =
  "font-size:14px;line-height:21px;font-weight:300;letter-spacing:-0.011em;text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px";

export const { registry } = defineRegistry(catalog, {
  components: {
    Answer: ({ props, children }) => (
      <div style={css("width:100%;display:flex;flex-direction:column;gap:24px")}>
        {props.label && <span className="eyebrow">{props.label}</span>}
        <h3 className="h3" style={css("margin:0")}>{props.title}</h3>
        {props.intro && (
          <p className="p-lg light" style={css("margin:0;max-width:var(--measure)")}>
            {props.intro}
          </p>
        )}
        {children}
      </div>
    ),
    Section: ({ props, children }) => (
      <section style={css("border-top:1px solid var(--foreground);padding-top:14px;display:flex;flex-direction:column;gap:12px")}>
        {props.label && <span className="eyebrow">{props.label}</span>}
        {props.title && <h4 className="h4" style={css("margin:0")}>{props.title}</h4>}
        {children}
      </section>
    ),
    TextBlock: ({ props }) => (
      <p
        className="p light"
        style={css(`margin:0;max-width:var(--measure);color:${props.tone === "muted" ? "var(--muted-foreground)" : "var(--foreground)"}`)}
      >
        {props.text}
      </p>
    ),
    Metrics: ({ props }) => (
      <div data-bixxie="metrics" style={css("display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;border-top:1px solid var(--foreground)")}>
        {props.items.map((item, index) => (
          <div key={`${item.label}-${index}`} style={css("min-width:0;padding:16px 0;border-bottom:1px solid var(--border)")}>
            <div style={css("font-size:28px;line-height:34px;font-weight:600")}>{item.value}</div>
            <div style={css("font-size:13px;line-height:20px;font-weight:300")}>{item.label}</div>
            {item.note && <div style={css("margin-top:4px;font-size:12px;line-height:16px;color:var(--muted-foreground)")}>{item.note}</div>}
          </div>
        ))}
      </div>
    ),
    Experience: ({ props }) => {
      const role = ROLES.find((item) => item.company === props.company);
      if (!role) return null;

      return (
        <div>
          {props.showRole !== false && <div style={css("font-size:14px;line-height:21px;font-weight:600")}>{role.title}</div>}
          <div style={css("font-size:14px;line-height:21px;font-weight:300;font-style:italic")}>{role.company}</div>
          {props.showSummary !== false && (
            <p className="p light" style={css("margin:10px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>
              {role.summary}
            </p>
          )}
        </div>
      );
    },
    Projects: ({ props }) => {
      const projects = props.names
        .map((name) => PROJECTS.find((project) => project.name === name))
        .filter((project) => project !== undefined);

      return (
        <div>
          {projects.map((project, index) => (
            <div
              key={project.name}
              data-bixxie="project-row"
              style={css(`display:grid;grid-template-columns:minmax(120px,1.2fr) minmax(0,3fr) 100px;gap:16px;align-items:start;padding:14px 0;border-top:${index === 0 ? "1px solid var(--foreground)" : "0"};border-bottom:1px solid var(--border)`)}
            >
              <TextLink href={project.url}>
                <span style={css(LINK_UL)}>{project.name}</span>
              </TextLink>
              <span className="p light">{project.what}</span>
              <StatusPill status={project.status} pulse={project.status === "Active"} />
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
        <div style={css("display:flex;flex-wrap:wrap;gap:8px")}>
          {items.map((item) => <Tag key={item.name} size="sm">{item.name}</Tag>)}
        </div>
      );
    },
    CaseStudy: ({ props }) => {
      const study = CASES.find(([, , , , url]) => url === `${PATH.cases}/${props.slug}`);
      if (!study) return null;
      const [title, , , canonicalSummary, href] = study;
      const summary = props.summary ?? canonicalSummary;

      return (
        <div style={css("padding:16px 0;border-top:1px solid var(--foreground);border-bottom:1px solid var(--border)")}>
          <TextLink href={href}>
            <span style={css(LINK_UL)}>{title}</span>
          </TextLink>
          {summary && <p className="p light" style={css("margin:8px 0 0;max-width:var(--measure)")}>{summary}</p>}
        </div>
      );
    },
    Facts: ({ props }) => (
      <div>
        {props.rows.map((row, index) => (
          <div
            key={`${row.label}-${index}`}
            data-bixxie="fact-row"
            style={css(`display:grid;grid-template-columns:120px minmax(0,1fr);gap:20px;padding:12px 0;border-top:${index === 0 ? "1px solid var(--foreground)" : "0"};border-bottom:1px solid var(--border)`)}
          >
            <span style={css("font-family:var(--font-mono);font-size:12px;line-height:16px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>
              {row.label}
            </span>
            <span className="p light">{row.value}</span>
          </div>
        ))}
      </div>
    ),
    Comparison: ({ props }) => (
      <div data-bixxie="comparison" style={css("display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;border-top:1px solid var(--foreground);border-bottom:1px solid var(--foreground)")}>
        <div style={css("padding:12px 0;font-size:14px;line-height:21px;font-weight:600")}>{props.leftTitle}</div>
        <div data-bixxie="comparison-right-title" style={css("padding:12px 0 12px 20px;border-left:1px solid var(--border);font-size:14px;line-height:21px;font-weight:600")}>
          {props.rightTitle}
        </div>
        {props.rows.map((row, index) => (
          <div
            key={`${row.label}-${index}`}
            data-bixxie="comparison-row"
            style={css("grid-column:1/-1;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:20px;row-gap:8px;padding:4px 0 12px")}
          >
            <span style={css("grid-column:1/-1;font-family:var(--font-mono);font-size:11px;line-height:14px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)")}>
              {row.label}
            </span>
            <span style={css("font-size:13px;line-height:20px;font-weight:300")}>{row.left}</span>
            <span data-bixxie="comparison-value-right" style={css("padding-left:20px;border-left:1px solid var(--border);font-size:13px;line-height:20px;font-weight:300")}>
              {row.right}
            </span>
          </div>
        ))}
      </div>
    ),
    Notice: ({ props }) => (
      <aside style={css("padding:12px 14px;border-radius:0;background:var(--muted);box-shadow:none")}>
        <div style={css("font-size:14px;line-height:21px;font-weight:500")}>{props.title}</div>
        <p style={css("margin:4px 0 0;font-size:13px;line-height:20px;font-weight:300")}>{props.body}</p>
      </aside>
    ),
    Links: ({ props }) => {
      const destinations = props.items
        .map((key) => LINK_DESTINATIONS.find((item) => item.key === key))
        .filter((item) => item !== undefined);

      return (
        <nav aria-label="Related links" style={css("display:flex;flex-wrap:wrap;gap:16px")}>
          {destinations.map((item) => <TextLink key={item.key} href={item.href}>{item.label}</TextLink>)}
        </nav>
      );
    },
    FollowUps: ({ props }) => {
      const context = useContext(BixxieActionContext);

      return (
        <div data-bixxie="follow-ups" style={css("display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px")}>
          {props.items.map((question, index) => (
            <button
              key={`${question}-${index}`}
              type="button"
              onClick={() => context?.onAsk(question)}
              onMouseEnter={(event) => { event.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--foreground) 5%, var(--card))"; }}
              onMouseLeave={(event) => { event.currentTarget.style.backgroundColor = "var(--card)"; }}
              onFocus={(event) => { event.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--foreground) 5%, var(--card))"; }}
              onBlur={(event) => { event.currentTarget.style.backgroundColor = "var(--card)"; }}
              style={css("width:100%;height:48px;padding:0 10px;border:1px solid var(--border);border-radius:14px;background:var(--card);color:var(--foreground);font-size:14px;line-height:21px;font-weight:300;text-align:left;cursor:pointer;transition:background var(--dur) var(--ease)")}
            >
              {question}
            </button>
          ))}
        </div>
      );
    },
  },
});
