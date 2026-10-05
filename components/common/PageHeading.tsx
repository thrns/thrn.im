import type { ReactNode } from 'react';
import { css } from '@/lib/css';

/** Page title, intro line and optional "sorted" note shared by the list pages. */
export default function PageHeading({ title, intro, sorted = false }: { title: string; intro: ReactNode; sorted?: boolean }) {
  return (
    <>
      <h1 className="h1" data-anim="1" style={css('margin:0;animation:fadeUp .7s var(--ease) 0ms both')}>{title}</h1>
      <p className="p light" data-anim="1" style={css('margin:14px 0 0;max-width:var(--measure);animation:fadeUp .7s var(--ease) 100ms both')}>{intro}</p>
      {sorted && (
        <p data-anim="1" style={css('margin:8px 0 0;font-size:12px;line-height:18px;letter-spacing:-0.006em;font-weight:300;color:var(--muted-foreground);animation:fadeUp .7s var(--ease) 140ms both')}>
          <span style={css('color:var(--clay)')}>*</span> Sorted from most recent to least
        </p>
      )}
    </>
  );
}

/** Standard page column. */
export function PageSection({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} style={css('max-width:var(--content-width);margin:0 auto;padding:var(--space-6xl) var(--page-gutter) 0;box-sizing:border-box')}>
      {children}
    </section>
  );
}
