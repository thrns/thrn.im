"use client";

import { createContext, useContext } from "react";
import { defineRegistry } from "@json-render/react";

import { DataRow, RowLink } from "@/components/common/DataTable";
import StatusPill from "@/components/common/StatusPill";
import { Tag } from "@/components/common/Tag";
import TextLink from "@/components/common/TextLink";
import { CASES, EDUCATION, PROJECTS, ROLES, STACK } from "@/lib/data";
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

export const { registry } = defineRegistry(catalog, {
  components: {
    Answer: ({ props, children }) => (
      <div style={css("width:100%;display:flex;flex-direction:column;gap:20px")}>
        <div>
          {props.label && <span className="eyebrow">{props.label}</span>}
          <h2 className="h4" style={css(`margin:${props.label ? "8px" : "0"} 0 0;font-weight:var(--weight-semibold)`)}>{props.title}</h2>
          {props.intro && (
            <p className="p light" style={css("margin:10px 0 0;max-width:var(--measure)")}>
              {props.intro}
            </p>
          )}
        </div>
        {children}
      </div>
    ),
    Section: ({ props, children }) => (
      <section style={css("border-top:1px solid var(--border);padding-top:18px;display:flex;flex-direction:column;gap:12px")}>
        {props.label && <span className="eyebrow">{props.label}</span>}
        {props.title && <h4 className="h4" style={css(`margin:${props.label ? "10px" : "0"} 0 0`)}>{props.title}</h4>}
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
      <div
        data-bixxie="metrics"
        style={css("display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;border:1px solid var(--border);border-radius:6px;background:var(--card);padding:24px 16px")}
      >
        {props.items.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            style={css("min-width:0;background:color-mix(in srgb,var(--foreground) 9%,var(--card));border:1px solid color-mix(in srgb,var(--foreground) 14%,var(--card));border-radius:6px;padding:12px 14px")}
          >
            <div style={css("font-size:18px;line-height:24px;font-weight:var(--weight-semibold);letter-spacing:-.011em")}>{item.value}</div>
            <div className="p light" style={css("margin-top:6px")}>{item.label}</div>
            {item.note && <div className="p-sm light muted" style={css("margin-top:2px")}>{item.note}</div>}
          </div>
        ))}
      </div>
    ),
    Experience: ({ props }) => {
      const role = ROLES.find((item) => item.company === props.company);
      if (!role) return null;

      return (
        <div>
          {props.showRole !== false && <div className="p" style={css("font-weight:var(--weight-semibold)")}>{role.title}</div>}
          <div className="p-sm muted" style={css("margin-top:2px")}>{role.company}</div>
          {props.showSummary !== false && (
            <p className="p light" style={css("margin:10px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>
              {role.summary}
            </p>
          )}
        </div>
      );
    },
    Education: ({ props }) => (
      <div>
        <div className="p" style={css("font-weight:var(--weight-semibold)")}>{EDUCATION.degree}, {EDUCATION.program}</div>
        <div className="p-sm muted" style={css("margin-top:2px")}>{EDUCATION.institution} — {EDUCATION.campus}</div>
        <p className="p light" style={css("margin:10px 0 0;max-width:var(--measure);color:var(--muted-foreground)")}>
          {EDUCATION.components.join(', ')}
        </p>
        {props.showCoursework !== false && (
          <div style={css("margin-top:10px;display:flex;flex-wrap:wrap;gap:8px")}>
            {Object.values(EDUCATION.coursework).flat().map((course) => <Tag key={course} size="sm">{course}</Tag>)}
          </div>
        )}
      </div>
    ),
    Projects: ({ props }) => {
      const projects = props.names
        .map((name) => PROJECTS.find((project) => project.name === name))
        .filter((project) => project !== undefined);
      const columns = "minmax(120px,1.2fr) minmax(0,3fr) 100px";

      // Each Projects element may carry one project or several (the model streams some
      // answers one element at a time), so the row list never assumes a shared table
      // header — only a consistent per-row rule, matching the ruled rows on /projects.
      return (
        <div>
          {projects.map((project, index) => (
            <DataRow key={project.name} columns={columns} delay={index * 70}>
              <RowLink href={project.url}>{project.name}</RowLink>
              <span className="p light" data-label="Notes">{project.what}</span>
              <StatusPill status={project.status} pulse={project.status === "Active"} />
            </DataRow>
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
        <div style={css("padding-top:4px")}>
          <TextLink href={href}>{title}</TextLink>
          {summary && <p className="p light" style={css("margin:8px 0 0;max-width:var(--measure)")}>{summary}</p>}
        </div>
      );
    },
    Facts: ({ props }) => (
      <div style={css("border-top:1px solid var(--border);border-radius:8px;overflow:hidden")}>
        {props.rows.map((row, index) => (
          <div
            key={`${row.label}-${index}`}
            data-bixxie="fact-row"
            style={css(`display:grid;grid-template-columns:120px minmax(0,1fr);gap:20px;padding:12px 2px;border-top:${index === 0 ? "0" : "1px solid var(--border)"}`)}
          >
            <span className="eyebrow">{row.label}</span>
            <span className="p light">{row.value}</span>
          </div>
        ))}
      </div>
    ),
    Comparison: ({ props }) => (
      <div data-bixxie="comparison" style={css("display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;border-top:1px solid var(--border);border-bottom:1px solid var(--border)")}>
        <div className="p" style={css("padding:12px 0;font-weight:var(--weight-semibold)")}>{props.leftTitle}</div>
        <div data-bixxie="comparison-right-title" className="p" style={css("padding:12px 0 12px 20px;border-left:1px solid var(--border);font-weight:var(--weight-semibold)")}>
          {props.rightTitle}
        </div>
        {props.rows.map((row, index) => (
          <div
            key={`${row.label}-${index}`}
            data-bixxie="comparison-row"
            style={css("grid-column:1/-1;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:20px;row-gap:8px;padding:4px 0 12px")}
          >
            <span className="eyebrow" style={css("grid-column:1/-1")}>{row.label}</span>
            <span className="p-sm light">{row.left}</span>
            <span data-bixxie="comparison-value-right" className="p-sm light" style={css("padding-left:20px;border-left:1px solid var(--border)")}>
              {row.right}
            </span>
          </div>
        ))}
      </div>
    ),
    Notice: ({ props }) => (
      <aside style={css("padding:12px 14px;border-radius:8px;background:var(--muted);box-shadow:none")}>
        <div className="p" style={css("font-weight:var(--weight-medium)")}>{props.title}</div>
        <p className="p-sm light" style={css("margin:4px 0 0")}>{props.body}</p>
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
