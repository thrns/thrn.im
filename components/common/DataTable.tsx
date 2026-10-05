import type { ReactNode } from 'react';
import { css } from '@/lib/css';

const LINK_UL = 'font-size:14px;line-height:21px;font-weight:300;letter-spacing:-0.011em;text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px';

/** Ruled table: header row plus animated rows. Collapses to stacked rows on small screens via the global [data-r] rules. */
export function DataTable({ marginTop, columns, headers, children }: {
  marginTop: string;
  columns: string;
  headers: { label: string; end?: boolean }[];
  children: ReactNode;
}) {
  return (
    <div data-r="scroll" style={css('margin-top:' + marginTop)}>
      <div data-r="tbl">
        <div data-r="thead" className="p" style={css(`display:grid;grid-template-columns:${columns};gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)`)}>
          {headers.map((h) => (
            <span key={h.label} style={h.end ? css('justify-self:end') : undefined}>{h.label}</span>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}

export function DataRow({ columns, delay, children }: { columns: string; delay: number; children: ReactNode }) {
  return (
    <div data-r="row" data-anim="1" style={css(`display:grid;grid-template-columns:${columns};gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border);animation:fadeUp .6s var(--ease) ${delay}ms both`)}>
      {children}
    </div>
  );
}

/** Underlined first-column link used in the Projects and Stack tables. */
export function RowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener" style={css(`${LINK_UL};justify-self:start;overflow-wrap:anywhere`)}>
      {children}
    </a>
  );
}
