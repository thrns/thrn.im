import type { ReactNode } from 'react';
import { css } from '@/lib/css';

const TAG = 'display:inline-flex;gap:6px;align-self:start;justify-self:start;padding:4px 8px;border-radius:0;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em';
const TAG_SM = 'display:inline-flex;gap:6px;align-self:start;justify-self:start;padding:4px 8px;border-radius:0;background:var(--muted);font-size:13px;line-height:18px;letter-spacing:-.011em';
const KEY = 'display:inline-flex;align-items:center;justify-content:center;min-width:28px;box-sizing:border-box;padding:3px 8px;background:var(--muted);color:var(--foreground);font-size:13px;line-height:18px;letter-spacing:-.011em';

/** Muted label chip, optionally with a bracketed key hint: [K] Copy */
export function Tag({ hint, size = 'md', children }: { hint?: string; size?: 'md' | 'sm'; children?: ReactNode }) {
  return (
    <span style={css(size === 'sm' ? TAG_SM : TAG)}>
      {hint && <span className="mono" style={css('color:var(--muted-foreground)')}>[{hint}]</span>}
      {children}
    </span>
  );
}

/** Keyboard key label used in the shortcuts guide. */
export function KeyCap({ children }: { children: ReactNode }) {
  return <span className="mono" style={css(KEY)}>{children}</span>;
}
