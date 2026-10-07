// @ts-nocheck
import React from 'react';
import { LINKS, buildData } from './berribot';

const LINK_RX = new RegExp(
  '(?<![A-Za-z0-9])(' +
    Object.keys(LINKS).sort((a, b) => b.length - a.length).map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') +
    ')(?![A-Za-z0-9])',
  'g'
);

const linkify = (t) => {
  if (typeof t !== 'string') return t;
  const out = [];
  let last = 0, n = 0, m;
  LINK_RX.lastIndex = 0;
  while ((m = LINK_RX.exec(t))) {
    if (m.index > last) out.push(t.slice(last, m.index));
    out.push(React.createElement('a', { key: 'l' + n++, href: LINKS[m[1]], target: '_blank', rel: 'noopener noreferrer', style: { textDecorationColor: 'var(--clay)' } }, m[1]));
    last = m.index + m[1].length;
  }
  if (!out.length) return t;
  if (last < t.length) out.push(t.slice(last));
  return React.createElement(React.Fragment, null, ...out);
};

function build() {
  const o = buildData();
  for (const k of Object.keys(o)) {
    if (!Array.isArray(o[k])) continue;
    o[k] = o[k].map((r) => {
      if (!r || typeof r !== 'object') return r;
      const x = { ...r };
      for (const f of ['a', 'b', 'text', 'c']) if (typeof x[f] === 'string') x[f] = linkify(x[f]);
      if (Array.isArray(x.items)) x.items = x.items.map((t) => linkify(t));
      return x;
    });
  }
  return o;
}

export const D = build();
