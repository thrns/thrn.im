import { css } from '@/lib/css';

const PILL: Record<string, { pillBg: string; pillFg: string; dot: string }> = {
  Active: { pillBg: 'rgba(22,163,74,.1)', pillFg: 'var(--status-pill-active-fg)', dot: '#16a34a' },
  Working: { pillBg: 'rgba(217,119,6,.1)', pillFg: 'var(--status-pill-warm-fg)', dot: '#d97706' },
  Planned: { pillBg: 'rgba(217,119,6,.1)', pillFg: 'var(--status-pill-warm-fg)', dot: '#d97706' },
};
const PILL_DEFAULT = { pillBg: 'color-mix(in srgb, var(--foreground) 7%, transparent)', pillFg: 'var(--status-pill-muted-fg)', dot: 'var(--muted-foreground)' };
const PILL_STYLE = 'justify-self:end;display:inline-flex;align-items:center;gap:7px;padding:5px 11px;border-radius:9999px;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase';

export default function StatusPill({ status, pulse }: { status: string; pulse: boolean }) {
  const c = PILL[status] || PILL_DEFAULT;
  return (
    <span className="mono" style={css(`${PILL_STYLE};background:${c.pillBg};color:${c.pillFg}`)}>
      <span data-anim="1" style={css(`width:6px;height:6px;border-radius:9999px;background:${c.dot};animation:${pulse ? 'pulse 2.2s ease-in-out infinite' : 'none'}`)}></span>
      {status}
    </span>
  );
}
