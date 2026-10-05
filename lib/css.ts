import type { CSSProperties } from 'react';

const cache = new Map<string, CSSProperties>();

/** Turns an inline CSS string ("display:flex;gap:8px") into a React style object. */
export function css(input: string): CSSProperties {
  const hit = cache.get(input);
  if (hit) return hit;
  const out: Record<string, string> = {};
  let depth = 0;
  let cur = '';
  const decls: string[] = [];
  for (const ch of input) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ';' && depth === 0) { decls.push(cur); cur = ''; } else cur += ch;
  }
  decls.push(cur);
  for (const d of decls) {
    const i = d.indexOf(':');
    if (i < 0) continue;
    const prop = d.slice(0, i).trim();
    const val = d.slice(i + 1).trim();
    if (!prop) continue;
    const key = prop.startsWith('--')
      ? prop
      : prop.replace(/^-(webkit|moz|ms)-/, (_, v) => v[0].toUpperCase() + v.slice(1) + '-').replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[key] = val;
  }
  cache.set(input, out as CSSProperties);
  return out as CSSProperties;
}
