'use client';
import { useEffect, useRef, useState } from 'react';
import { css } from '@/lib/css';
import { CATS, STACK } from '@/lib/data';
import { Icon } from '@/components/ui';
import { useChrome } from '@/components/layout/ChromeContext';
import PageMain from '@/components/layout/PageMain';
import PageHeading, { PageSection } from '@/components/common/PageHeading';
import { DataRow, DataTable, RowLink } from '@/components/common/DataTable';
import StatusPill from '@/components/common/StatusPill';

const COLS = 'minmax(120px,1.2fr) minmax(120px,1.2fr) minmax(240px,4fr) 112px';
const HEADERS = [{ label: 'Name' }, { label: 'Purpose' }, { label: 'Thoughts' }, { label: 'Status', end: true }];
const CHIP = 'display:inline-flex;gap:6px;padding:4px 8px;border:0;border-radius:0;color:var(--foreground);font:inherit;font-size:14px;line-height:20px;letter-spacing:-.011em;cursor:pointer;transition:background-color 120ms var(--ease)';
const STATUS_FILTERS = [['All', 'E', 'All'], ['Active', 'U', 'A'], ['Planned', 'N', 'P'], ['Inactive', 'I', 'I']] as const;

function FilterChip({ active, hint, label, count, onClick, filterTarget }: { active: boolean; hint?: string; label: string; count: number; onClick: () => void; filterTarget?: string }) {
  return (
    <button className="chip" type="button" data-stack-filter={filterTarget} onClick={onClick} aria-pressed={active} style={css(`${CHIP};background:${active ? 'var(--clay-wash)' : 'var(--muted)'};font-weight:${active ? 500 : 400}`)}>
      {hint && <span style={css(`color:${active ? 'var(--foreground)' : 'var(--muted-foreground)'}`)}>[{hint}]</span>}
      {label}
      <span style={css(`color:${active ? 'var(--foreground)' : 'var(--muted-foreground)'};font-weight:300`)}>{count}</span>
    </button>
  );
}

export default function StackPage() {
  const { sRef } = useChrome();
  const [sfilter, setSfilter] = useState('All');
  const [scat, setScat] = useState('All');
  const [catOpen, setCatOpen] = useState(false);
  const catOpenRef = useRef(catOpen);
  const catTriggerRef = useRef<HTMLButtonElement>(null);
  catOpenRef.current = catOpen;

  /* E U N I filter by status, G toggles the category row */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (catOpenRef.current) {
          setCatOpen(false);
          catTriggerRef.current?.focus();
        }
        return;
      }
      const tg = e.target as HTMLElement, tag = tg && tg.tagName;
      if (e.metaKey || e.ctrlKey || e.altKey || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (tg && tg.isContentEditable)) return;
      const k = e.key.length === 1 ? e.key.toLowerCase() : '';
      const st = sRef.current;
      if (st.chat || st.guide || st.email) return;
      const f: Record<string, string> = { e: 'All', u: 'Active', n: 'Planned', i: 'Inactive' };
      if (f[k]) {
        setSfilter(f[k]);
        document.querySelector<HTMLButtonElement>(`[data-stack-filter="${f[k]}"]`)?.focus({ preventScroll: true });
        return;
      }
      if (k === 'g') { catTriggerRef.current?.focus({ preventScroll: true }); setCatOpen((o) => !o); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rows = STACK.filter((x) => (sfilter === 'All' || x.label === sfilter) && (scat === 'All' || x.cat === scat));
  const catLabel = scat === 'All' ? 'Category' : scat;

  return (
    <PageMain>
      <PageSection id="stack">
        <PageHeading title="Stack" intro="What I use, what I want to learn next, and what I've dropped." />
        <div data-anim="1" style={css('position:relative;z-index:25;margin-top:32px;display:flex;flex-wrap:wrap;gap:8px;animation:fadeUp .7s var(--ease) 160ms both')}>
          {STATUS_FILTERS.map(([label, hint, k]) => (
            <FilterChip
              key={label}
              active={sfilter === label}
              hint={hint}
              label={label}
              filterTarget={label}
              count={STACK.filter((x) => (k === 'All' || x.k === k) && (scat === 'All' || x.cat === scat)).length}
              onClick={() => setSfilter(label)}
            />
          ))}
          <span aria-hidden="true" style={css('align-self:stretch;width:1px;margin:2px 4px;background:var(--border)')}></span>
          <div style={css('position:relative;display:inline-flex')}>
            <button ref={catTriggerRef} id="stack-category-button" className="chip" type="button" onClick={() => setCatOpen((o) => !o)} aria-expanded={catOpen} aria-controls={catOpen ? 'stack-category-filters' : undefined}
              style={css(`display:inline-flex;gap:6px;align-items:center;padding:4px 8px;border:0;border-radius:0;background:${scat !== 'All' || catOpen ? 'var(--clay-wash)' : 'var(--muted)'};color:var(--foreground);font:inherit;font-size:14px;line-height:20px;letter-spacing:-.011em;cursor:pointer;transition:background-color 120ms var(--ease)`)}>
              <span className="mono" style={css('color:var(--muted-foreground)')}>[G]</span>{catLabel}<Icon name="LucideChevronDown" size={14} />
            </button>
          </div>
          {catOpen && (
            <div id="stack-category-filters" style={css('flex-basis:100%;display:flex;flex-wrap:wrap;gap:8px;padding-top:12px;margin-top:4px;border-top:1px solid var(--border);animation:fadeIn .2s var(--ease) both')}>
              {['All', ...CATS].map((c) => (
                <FilterChip
                  key={c}
                  active={scat === c}
                  label={c}
                  count={STACK.filter((x) => (c === 'All' || x.cat === c) && (sfilter === 'All' || x.label === sfilter)).length}
                  onClick={() => setScat(c)}
                />
              ))}
            </div>
          )}
        </div>
        <DataTable marginTop="32px" columns={COLS} caption="Stack" headers={HEADERS}>
          {rows.map((r, i) => (
            <DataRow key={r.name} columns={COLS} headers={HEADERS} delay={200 + Math.min(i, 12) * 50}>
              <RowLink href={r.url}>{r.name}</RowLink>
              <span className="p light" data-label="Purpose">{r.purpose}</span>
              <span className="p light" data-label="Thoughts" style={css('font-style:italic')}>{r.thoughts}</span>
              <StatusPill status={r.status} pulse={r.k === 'A'} />
            </DataRow>
          ))}
        </DataTable>
      </PageSection>
    </PageMain>
  );
}
