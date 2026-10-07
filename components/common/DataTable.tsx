import { Children, type ReactNode } from 'react';
import { css } from '@/lib/css';

const LINK_UL = 'font-size:14px;line-height:21px;font-weight:300;letter-spacing:-0.011em;text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px';
type Column = { label: string; end?: boolean };

/** Ruled table whose rows retain their grid layout and collapse to stacked cells on small screens. */
export function DataTable({ marginTop, columns, headers, caption, children }: {
  marginTop: string;
  columns: string;
  headers: Column[];
  caption: string;
  children: ReactNode;
}) {
  return (
    <div data-r="scroll" style={css('margin-top:' + marginTop)}>
      <table data-r="tbl" role="table" style={css('display:block;width:100%;min-width:0;border-collapse:collapse')}>
        <caption className="sr-only">{caption}</caption>
        <thead data-r="thead" role="rowgroup">
          <tr role="row" className="p" style={css(`display:grid;grid-template-columns:${columns};gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)`) }>
            {headers.map((header) => (
              <th key={header.label} scope="col" role="columnheader" style={{ ...css('padding:0;text-align:left;font:inherit'), ...(header.end ? css('justify-self:end') : undefined) }}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody role="rowgroup" style={css('display:block')}>
          {children}
        </tbody>
      </table>
    </div>
  );
}

export function DataRow({ columns, headers, delay, children }: { columns: string; headers: Column[]; delay: number; children: ReactNode }) {
  return (
    <tr data-r="row" data-anim="1" role="row" style={css(`display:grid;grid-template-columns:${columns};gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border);animation:fadeUp .6s var(--ease) ${delay}ms both`)}>
      {Children.toArray(children).map((child, index) => (
        <td key={index} role="cell" style={{ ...css('display:block;min-width:0;padding:0'), ...(headers[index]?.end ? css('justify-self:end') : undefined) }}>{child}</td>
      ))}
    </tr>
  );
}

/** Underlined first-column link used in the Projects and Stack tables. */
export function RowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={css(`${LINK_UL};justify-self:start;overflow-wrap:anywhere`)}>
      {children}
    </a>
  );
}
