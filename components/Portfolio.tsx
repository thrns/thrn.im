'use client';
import React, { useEffect, useRef, useState } from 'react';
import { css } from '@/lib/css';
import { Button, IconButton, Icon, Kbd, Message, NavBar, Separator, Spinner, Switch } from '@/components/ui';
import { ANSWERS, CASES, CATS, GREETING, PROJECTS, ROLES, STACK, TOPICS } from '@/lib/data';

const EMAIL = 'sv.tharunpranav@gmail.com';
const DEFAULT_MO = { caret: false, arrow: true, soft: false, liquid: true, drop: false, morph: true, rot: false };
const SHAPES = ['circle', 'triangle', 'diamond'];
const NAV: [string, string, string][] = [['W', 'Work', 'work'], ['P', 'Projects', 'projects'], ['T', 'Case studies', 'cases'], ['S', 'Stack', 'stack'], ['R', 'Resume', 'resume']];

type State = {
  email: boolean; copied: boolean; moreOpen: boolean; guide: boolean; info: boolean; typed: number; hideQ: boolean; chat: boolean; dark: boolean;
  curOpen: boolean; curOn: boolean; curShape: string; mo: Record<string, boolean>; msgs: { text: string; align: string }[]; draft: string; busy: boolean;
  hasPdf: boolean; menu: boolean; page: string; sfilter: string; scat: string; catOpen: boolean;
};

const INIT: State = {
  email: false, copied: false, moreOpen: false, guide: false, info: false, typed: 0, hideQ: false, chat: false, dark: false, curOpen: false, curOn: true,
  curShape: 'circle', mo: { ...DEFAULT_MO }, msgs: [], draft: '', busy: false, hasPdf: false, menu: false, page: 'home', sfilter: 'All', scat: 'All', catOpen: false,
};

const MOMENTS: [string, string, string][] = [
  ['caret', 'Text caret', '<text x="1" y="16" font-family="Georgia,serif" font-size="14" fill="currentColor" opacity=".55">Aa</text><rect x="22" y="4" width="2" height="14" rx="1" fill="currentColor"/>'],
  ['arrow', 'Link arrow', '<path d="M9 15L17 7M10.5 7H17v6.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 20h22" stroke="currentColor" opacity=".4"/>'],
  ['soft', 'Soft buttons', '<rect x="2" y="4" width="24" height="14" rx="5" fill="none" stroke="currentColor" opacity=".5"/><rect x="10" y="7" width="8" height="8" rx="2.5" fill="currentColor"/>'],
  ['liquid', 'Liquid clicks', '<circle cx="14" cy="11" r="9" fill="none" stroke="currentColor" opacity=".5"/><circle cx="14" cy="11" r="4" fill="currentColor"/>'],
  ['drop', 'Motion droplet', '<circle cx="5" cy="11" r="2" fill="currentColor" opacity=".6"/><circle cx="18" cy="11" r="4.5" fill="currentColor"/>'],
  ['morph', 'Smooth morphs', '<rect x="11" y="2" width="6" height="18" rx="3" fill="currentColor"/>'],
  ['rot', 'Shape rotation', '<polygon points="14,2 22,7 21,16 14,20 7,16 6,7" fill="currentColor"/>'],
];

const GUIDE_L: [string, string][] = [['Home', 'H'], ['Work', 'W'], ['Projects', 'P'], ['Case studies', 'T'], ['Stack', 'S'], ['Resume', 'R'], ['Cursor on / off', 'O'], ['Cursor shape', 'F'], ['Little moments', 'L']];
const GUIDE_R: [string, string][] = [['Ask AI', '/'], ['Email me', 'M'], ['Day / night mode', 'D'], ['Cursor settings', 'C'], ['This guide', '?'], ['Stack: all, active, planned, inactive', 'E U N I'], ['Stack: category', 'G'], ['Copy email address', 'K'], ['Open mail app', 'J'], ['Close a window', 'Esc']];

const PILL: Record<string, { pillBg: string; pillFg: string; dot: string }> = {
  Active: { pillBg: 'rgba(22,163,74,.1)', pillFg: '#15803d', dot: '#16a34a' },
  Working: { pillBg: 'rgba(217,119,6,.1)', pillFg: '#b45309', dot: '#d97706' },
  Planned: { pillBg: 'rgba(217,119,6,.1)', pillFg: '#b45309', dot: '#d97706' },
};
const PILL_DEFAULT = { pillBg: 'color-mix(in srgb, var(--foreground) 7%, transparent)', pillFg: 'var(--muted-foreground)', dot: 'var(--muted-foreground)' };

const TAG = 'display:inline-flex;gap:6px;align-self:start;justify-self:start;padding:4px 8px;border-radius:0;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em';
const TAG_SM = 'display:inline-flex;gap:6px;align-self:start;justify-self:start;padding:4px 8px;border-radius:0;background:var(--muted);font-size:13px;line-height:18px;letter-spacing:-.011em';
const KEY = 'display:inline-flex;align-items:center;justify-content:center;min-width:28px;box-sizing:border-box;padding:3px 8px;background:var(--muted);color:var(--foreground);font-size:13px;line-height:18px;letter-spacing:-.011em';
const LINK_UL = 'font-size:14px;line-height:21px;font-weight:300;letter-spacing:-0.011em;text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px';
const SECTION = 'max-width:var(--content-width);margin:0 auto;padding:var(--space-6xl) var(--page-gutter) 0;box-sizing:border-box';
const PILL_STYLE = 'justify-self:end;display:inline-flex;align-items:center;gap:7px;padding:5px 11px;border-radius:9999px;font-size:11px;line-height:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase';
const ROLE_LINK = 'text-decoration:none;border-radius:4px;letter-spacing:-0.011em;font-size:14px;line-height:21px';

function StatusPill({ status, pulse }: { status: string; pulse: boolean }) {
  const c = PILL[status] || PILL_DEFAULT;
  return (
    <span style={css(`${PILL_STYLE};background:${c.pillBg};color:${c.pillFg}`)}>
      <span data-anim="1" style={css(`width:6px;height:6px;border-radius:9999px;background:${c.dot};animation:${pulse ? 'pulse 2.2s ease-in-out infinite' : 'none'}`)}></span>
      {status}
    </span>
  );
}

function GuideCol({ rows }: { rows: [string, string][] }) {
  return (
    <div style={css('border-top:1px solid var(--foreground)')}>
      {rows.map(([label, k]) => (
        <div key={label} style={css('display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-bottom:1px solid var(--border)')}>
          <span className="light" style={css('font-size:15px;line-height:22px;letter-spacing:-0.011em;color:var(--foreground)')}>{label}</span>
          <span style={css('display:inline-flex;align-items:center;gap:8px')}><span style={css(KEY)}>{k}</span></span>
        </div>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [s, _set] = useState<State>(INIT);
  const sRef = useRef(s);
  sRef.current = s;
  const setState = (p: Partial<State> | ((s: State) => Partial<State>)) =>
    _set((prev) => ({ ...prev, ...(typeof p === 'function' ? p(prev) : p) }));

  const endRef = useRef<HTMLDivElement>(null);
  const t = useRef<{ copy?: any; typer?: any; reply?: any }>({});
  const railFn = useRef<() => void>(() => {});
  const api = useRef<any>({});

  /* ---------- actions ---------- */
  const setDark = (d: boolean) => {
    document.documentElement.classList.toggle('dark', d);
    localStorage.setItem('pf-dark', d ? '1' : '0');
    setState({ dark: d });
  };
  const copyAddr = () => {
    const done = () => {
      setState({ copied: true });
      clearTimeout(t.current.copy);
      t.current.copy = setTimeout(() => setState({ copied: false }), 1800);
    };
    const fb = () => {
      const ta = document.createElement('textarea');
      ta.value = EMAIL; ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      ta.remove(); done();
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(EMAIL).then(done, fb); else fb();
  };
  const saveCur = (p: Partial<State>) => {
    const n = { ...sRef.current, ...p };
    setState(p);
    localStorage.setItem('pf-cursor', JSON.stringify({ on: n.curOn, shape: n.curShape, mo: n.mo }));
  };
  const reply = (q: string) => {
    if (ANSWERS[q]) return ANSWERS[q];
    const tp = TOPICS.find(([, re]) => re.test(q));
    return tp ? ANSWERS[tp[0]] : 'I only know what is on this site. Try asking about my experience, projects or availability.';
  };
  const send = (text: string) => {
    const q = (typeof text === 'string' ? text : '').trim();
    if (!q || sRef.current.busy) return;
    setState((x) => ({ msgs: [...x.msgs, { text: q, align: 'right' }], draft: '', busy: true }));
    setTimeout(() => {
      const full = reply(q);
      let n = 0;
      setState((x) => ({ busy: false, msgs: [...x.msgs, { text: '\u258D', align: 'left' }] }));
      clearInterval(t.current.reply);
      t.current.reply = setInterval(() => {
        n += 1;
        const done = n >= full.length;
        setState((x) => { const m = x.msgs.slice(); m[m.length - 1] = { ...m[m.length - 1], text: full.slice(0, n) + (done ? '' : '\u258D') }; return { msgs: m }; });
        if (done) clearInterval(t.current.reply);
      }, 22);
    }, 700);
  };
  api.current = { setDark, copyAddr, saveCur };

  /* ---------- mount: keys, hash, rail, cursor ---------- */
  useEffect(() => {
    const readHash = () => {
      const h = (location.hash || '').replace('#', '');
      const page = ['work', 'projects', 'cases', 'stack', 'resume'].includes(h) ? h : 'home';
      setState({ page, menu: false });
      window.scrollTo(0, 0);
    };

    const key = (e: KeyboardEvent) => {
      const st = sRef.current;
      if (e.key === 'Escape') {
        if (st.email) setState({ email: false });
        else if (st.guide) setState({ guide: false });
        else if (st.info) setState({ info: false });
        else if (st.curOpen) setState({ curOpen: false });
        else setState({ chat: false });
        return;
      }
      const tg = e.target as HTMLElement, tag = tg && tg.tagName;
      if (e.metaKey || e.ctrlKey || e.altKey || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (tg && tg.isContentEditable)) return;
      const k = e.key.length === 1 ? e.key.toLowerCase() : '';
      if (k === '?') { e.preventDefault(); setState((x) => ({ guide: !x.guide, info: false })); return; }
      if (st.chat || st.guide) return;
      if (st.email) {
        if (k === 'k') { e.preventDefault(); api.current.copyAddr(); }
        else if (k === 'j') { e.preventDefault(); window.location.href = 'mailto:' + EMAIL; }
        return;
      }
      if (st.curOpen) {
        if (k === 'o') { e.preventDefault(); api.current.saveCur({ curOn: !st.curOn }); return; }
        if (k === 'f') { e.preventDefault(); api.current.saveCur({ curShape: SHAPES[(SHAPES.indexOf(st.curShape) + 1) % 3], curOn: true }); return; }
        if (k === 'l') {
          e.preventDefault();
          const any = Object.values(st.mo).some((v) => !v);
          api.current.saveCur({ mo: Object.fromEntries(Object.keys(st.mo).map((id) => [id, any])) });
          return;
        }
      }
      if (st.page === 'stack') {
        const f: Record<string, string> = { e: 'All', u: 'Active', n: 'Planned', i: 'Inactive' };
        if (f[k]) { setState({ sfilter: f[k] }); return; }
        if (k === 'g') { setState((x) => ({ catOpen: !x.catOpen })); return; }
      }
      const go: Record<string, string> = { h: 'home', w: 'work', p: 'projects', t: 'cases', s: 'stack', r: 'resume' };
      if (k === 'm') { e.preventDefault(); setState({ email: true, copied: false }); }
      else if (go[k]) { location.hash = go[k]; }
      else if (k === 'd') api.current.setDark(!sRef.current.dark);
      else if (k === 'c') setState((x) => ({ curOpen: !x.curOpen }));
      else if (k === '/') { e.preventDefault(); setState({ chat: true }); }
    };
    window.addEventListener('keydown', key);
    window.addEventListener('hashchange', readHash);

    /* scroll rail on Work page */
    let railT = 0, railC: number | null = null, railEl: HTMLElement | null = null, railRaf = 0;
    const rail = () => {
      const w = document.getElementById('rail-wrap'), f = document.getElementById('rail-fill');
      if (!w || !f) return;
      const r = w.getBoundingClientRect();
      const all = w.querySelectorAll('[data-stack]'), last = all[all.length - 1];
      const t0 = all[0] ? all[0].getBoundingClientRect().bottom - r.top : 48;
      const end = last ? last.getBoundingClientRect().bottom - r.top : r.height;
      const range = document.documentElement.scrollHeight - window.innerHeight;
      const p = range < 8 ? 1 : Math.min(1, Math.max(0, window.scrollY / range));
      railT = t0 + (end - t0) * p;
      if (railC == null || railEl !== f) { railC = railT; railEl = f; f.style.height = railT + 'px'; }
      if (!railRaf) {
        const step = () => {
          const d = railT - railC!;
          if (Math.abs(d) < 0.3) { railC = railT; railRaf = 0; } else { railC! += d * 0.14; railRaf = requestAnimationFrame(step); }
          const el = document.getElementById('rail-fill');
          if (el) el.style.height = railC + 'px';
        };
        railRaf = requestAnimationFrame(step);
      }
    };
    railFn.current = rail;
    window.addEventListener('scroll', rail, { passive: true });
    window.addEventListener('resize', rail);

    fetch('/resume.pdf', { method: 'HEAD' })
      .then((r) => setState({ hasPdf: r.ok && !/html/.test(r.headers.get('content-type') || '') }))
      .catch(() => {});
    readHash();
    if (localStorage.getItem('pf-dark') === '1') setDark(true);
    try {
      const c = JSON.parse(localStorage.getItem('pf-cursor') || 'null');
      if (c) setState((x) => ({ curOn: c.on !== false, curShape: SHAPES.includes(c.shape) ? c.shape : 'circle', mo: { ...x.mo, ...(c.mo || {}) } }));
    } catch (e) {}

    /* custom cursor */
    const d = document.createElement('div');
    d.setAttribute('aria-hidden', 'true');
    d.style.cssText = 'position:fixed;left:0;top:0;width:0;height:0;pointer-events:none;z-index:99999;will-change:transform';
    const i = document.createElement('div');
    i.style.cssText = 'position:absolute;left:0;top:0;box-sizing:border-box;display:flex;align-items:center;justify-content:center;opacity:0;color:var(--foreground);will-change:transform';
    const tr = document.createElement('div');
    tr.style.cssText = 'position:fixed;left:0;top:0;width:5px;height:5px;margin:-2.5px 0 0 -2.5px;border-radius:50%;background:var(--muted-foreground);pointer-events:none;z-index:99998;opacity:0;transition:opacity 200ms;will-change:transform';
    d.appendChild(i); document.body.appendChild(tr); document.body.appendChild(d);
    let mx = -100, my = -100, dx = -100, dy = -100, tx = -100, ty = -100, rot = 0, press = 0, mode = 'base', shown = false, ckey = '', sp = 0, scl: number | null = null, last = 0;
    const fine = window.matchMedia('(pointer:fine)').matches;

    const modeOf = (el: any) => {
      const m = (q: string) => el && el.closest && el.closest(q);
      if (m('a[href]')) return 'arrow';
      if (m('button,[role=button],[role=switch],select,summary')) return 'soft';
      if (m('input,textarea,[contenteditable],p,h1,h2,h3,li,.p,.h1')) return 'caret';
      return 'base';
    };
    const paint = () => {
      const st = sRef.current, mo = st.mo || {}, on = !!(st.curOn && fine);
      document.documentElement.classList.toggle('pf-cc', on);
      const flag = ({ caret: 'caret', arrow: 'arrow', soft: 'soft' } as any)[mode];
      const md = flag && mo[flag] ? mode : 'base';
      const k = [md, st.curShape, mo.morph].join('|');
      if (k !== ckey) {
        ckey = k;
        const full = 'polygon(0 0,100% 0,100% 100%,0 100%,0 0)';
        const sh = ({ circle: ['50%', full], triangle: ['0', 'polygon(0 0,50% 20%,100% 40%,70% 70%,40% 100%)'], diamond: ['0', 'polygon(50% 0,100% 50%,50% 100%,0 50%,0 50%)'] } as any)[st.curShape];
        const S = ({
          base: { w: 8, h: 8, r: sh[0], c: sh[1], bg: 'var(--muted-foreground)', bd: '0', html: '' },
          caret: { w: 1.5, h: 20, r: '1px', c: full, bg: 'var(--foreground)', bd: '0', html: '' },
          arrow: { w: 20, h: 20, r: '0', c: full, bg: 'transparent', bd: '0', fg: 'var(--foreground)', html: '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12L12 4M5.5 4H12v6.5"/></svg>' },
          soft: { w: 30, h: 30, r: '10px', c: full, bg: 'color-mix(in srgb,var(--foreground) 6%,transparent)', bd: '1px solid color-mix(in srgb,var(--foreground) 20%,transparent)', html: '' },
        } as any)[md];
        const e = 'cubic-bezier(.34,1.35,.5,1)', e2 = 'cubic-bezier(.2,.7,.2,1)';
        i.style.transition = mo.morph
          ? 'width 360ms ' + e + ',height 360ms ' + e + ',border-radius 320ms ' + e2 + ',clip-path 320ms ' + e2 + ',background-color 240ms ' + e2 + ',border-color 240ms ' + e2 + ',color 240ms ' + e2 + ',opacity 220ms ' + e2
          : 'opacity 220ms';
        i.style.width = S.w + 'px'; i.style.height = S.h + 'px'; i.style.borderRadius = S.r; i.style.clipPath = S.c;
        i.style.background = S.bg; i.style.border = S.bd; i.style.color = S.fg || 'var(--muted-foreground)';
        if (i.dataset.h !== S.html) {
          i.innerHTML = S.html; i.dataset.h = S.html;
          if (i.firstChild && (i.firstChild as any).animate) (i.firstChild as any).animate([{ opacity: 0, transform: 'scale(.6)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 260, easing: e });
        }
      }
      if (md === 'base' && mo.rot) rot += sp * 1.1; else rot += (Math.round(rot / 360) * 360 - rot) * 0.18;
      scl = (scl == null ? 1 : scl) + ((press && mo.liquid ? 0.62 : 1) - (scl == null ? 1 : scl)) * (press ? 0.3 : 0.16);
      i.style.transform = 'translate(-50%,-50%) rotate(' + rot + 'deg) scale(' + scl + ')';
      const vis = on && shown;
      i.style.opacity = String(vis ? (md === 'base' ? 0.75 : 0.9) : 0);
      tr.style.opacity = String(vis && mo.drop && md === 'base' ? 0.35 : 0);
    };

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; shown = true; mode = modeOf(e.target); };
    const onLeave = () => { shown = false; };
    const onUp = () => { press = 0; };
    const onDown = (e: MouseEvent) => {
      const tg = e.target as any;
      if (!(tg.closest && tg.closest('[data-r=cur],[data-r=more]'))) setState({ curOpen: false });
      if (!(tg.closest && tg.closest('[data-r=more]'))) setState({ moreOpen: false });
      const st = sRef.current;
      if (!(st.curOn && fine && st.mo.liquid)) return;
      press = 1;
      const r = document.createElement('div');
      r.style.cssText = 'position:fixed;left:' + e.clientX + 'px;top:' + e.clientY + 'px;width:28px;height:28px;margin:-14px 0 0 -14px;border-radius:50%;border:.7px solid color-mix(in srgb,var(--foreground) 45%,transparent);background:color-mix(in srgb,var(--foreground) 10%,transparent);pointer-events:none;z-index:99997';
      document.body.appendChild(r);
      const an = r.animate([{ transform: 'scale(.2)', opacity: 0.9 }, { transform: 'scale(1.6)', opacity: 0 }], { duration: 760, easing: 'cubic-bezier(.16,.84,.3,1)' });
      an.onfinish = () => r.remove();
    };
    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    let raf = 0;
    const loop = () => {
      const now = performance.now(), dt = Math.min(now - (last || now), 50) || 16.7;
      last = now;
      const f = (k: number) => 1 - Math.pow(1 - k, dt / 16.7);
      const vx = mx - dx, vy = my - dy, spd = Math.min(Math.hypot(vx, vy), 40);
      dx += vx * f(0.32); dy += vy * f(0.32); tx += (mx - tx) * f(0.09); ty += (my - ty) * f(0.09);
      sp = sp + (spd - sp) * f(0.15);
      d.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
      tr.style.transform = 'translate(' + tx + 'px,' + ty + 'px)';
      paint();
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      clearInterval(t.current.reply); clearInterval(t.current.typer);
      window.removeEventListener('keydown', key);
      window.removeEventListener('hashchange', readHash);
      window.removeEventListener('scroll', rail);
      window.removeEventListener('resize', rail);
      cancelAnimationFrame(raf); cancelAnimationFrame(railRaf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      tr.remove(); d.remove();
      document.documentElement.classList.remove('pf-cc');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* greeting typewriter when chat opens */
  const prevChat = useRef<boolean | undefined>(undefined);
  useEffect(() => {
    if (prevChat.current === s.chat) return;
    prevChat.current = s.chat;
    clearInterval(t.current.typer);
    if (s.chat) {
      let n = 0;
      setState({ typed: 0 });
      t.current.typer = setInterval(() => {
        n += 1;
        setState({ typed: n });
        if (n >= GREETING.length) clearInterval(t.current.typer);
      }, 28);
    } else setState({ typed: 0 });
  });

  /* after every update: re-measure rail, keep chat scrolled to bottom */
  useEffect(() => {
    railFn.current();
    const el = endRef.current;
    if (el && el.parentElement) el.parentElement.scrollTop = el.parentElement.scrollHeight;
  });

  /* ---------- derived ---------- */
  const stop = (e: React.SyntheticEvent) => e.stopPropagation();
  const openEmail = (e: React.SyntheticEvent) => { e && e.preventDefault && e.preventDefault(); setState({ email: true, copied: false }); };
  const closeInfo = () => setState({ info: false });
  const closeEmail = () => setState({ email: false });
  const closeGuide = () => setState({ guide: false });
  const closeChat = () => setState({ chat: false, info: false });
  const openChat = (e?: React.SyntheticEvent) => { e && e.preventDefault && e.preventDefault(); setState({ chat: true }); };
  const hide = (open: boolean) => ({ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' });
  const dlgTf = (open: boolean) => (open ? 'none' : 'translateY(12px) scale(.98)');
  const dropTf = (open: boolean) => (open ? 'none' : 'translateY(-6px)');

  const greeting = GREETING.slice(0, s.typed) + (s.typed < GREETING.length && s.chat ? '\u258D' : '');
  const navItems = NAV.map(([hint, label, id]) => ({ hint, label, href: '#' + id, active: s.page === id }));
  const stackRows = STACK.filter((x) => (s.sfilter === 'All' || x.label === s.sfilter) && (s.scat === 'All' || x.cat === s.scat));
  const catLabel = s.scat === 'All' ? 'Category' : s.scat;
  const CHIP = 'display:inline-flex;gap:6px;padding:4px 8px;border:0;border-radius:0;color:var(--foreground);font:inherit;font-size:14px;line-height:20px;letter-spacing:-.011em;cursor:pointer;transition:background-color 120ms var(--ease)';
  const SUGS = ['Me', 'Projects', 'Skills', 'Fun', 'Contact', 'More'];
  const SUG_ICON: Record<string, string> = { Me: 'LucideGraduationCap', Projects: 'LucideBriefcase', Skills: 'LucideLayers', Fun: 'LucideSparkles', Contact: 'LucideMail', More: 'LucideEllipsis' };

  return (
    <div id="top" style={css('min-height:100vh;display:flex;flex-direction:column;background:var(--background);color:var(--foreground);font-family:var(--font-sans);transition:background-color .35s var(--ease),color .35s var(--ease)')}>

      {/* ---------- header ---------- */}
      <header data-anim="1" style={css('animation:fadeIn .6s var(--ease) 0ms both;position:sticky;top:0;z-index:20;background:color-mix(in srgb, var(--background) 88%, transparent);backdrop-filter:blur(8px)')}>
        <div data-r="hdr" style={css('max-width:var(--content-width);margin:0 auto;padding:0 var(--page-gutter);display:flex;align-items:center;justify-content:space-between;gap:12px')}>
          <NavBar items={navItems} brand={{ href: '#home' }} />
          <button
            data-r="mbtn" onClick={() => setState((x) => ({ menu: !x.menu }))} aria-expanded={s.menu} aria-label="Collection"
            style={css(`display:none;align-items:center;gap:6px;padding:4px 8px;border:0;border-radius:0;background:${s.menu ? 'var(--clay-wash)' : 'var(--muted)'};color:var(--foreground);font:inherit;font-size:14px;line-height:20px;letter-spacing:-.011em;cursor:pointer`)}
          >Collection</button>
          <div data-r="acts" style={css('display:flex;align-items:center;gap:8px;position:relative')}>
            <Button variant="outline" size="sm" onClick={openChat}>
              <span style={css('display:inline-flex;align-items:center;gap:6px')}>Ask AI<span data-r="kbd" style={css('display:inline-flex;gap:2px')}><Kbd>/</Kbd></span></span>
            </Button>
            <div data-r="more" style={css('position:relative;display:inline-flex')}>
              <IconButton size="sm" aria-label="More" title="More" aria-expanded={s.moreOpen} onClick={() => setState((x) => ({ moreOpen: !x.moreOpen }))}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="1.6"></circle><circle cx="12" cy="12" r="1.6"></circle><circle cx="12" cy="19" r="1.6"></circle></svg>
              </IconButton>
              <div role="menu" style={{ ...css('position:absolute;top:calc(100% + 6px);left:-4px;right:-4px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:4px;padding:4px;background:var(--card);border-radius:10px;box-shadow:inset 0 0 0 1px var(--border),0 12px 32px rgba(0,0,0,.12);z-index:60;transition:opacity var(--dur-fade) var(--ease), transform var(--dur-fade) var(--ease)'), ...hide(s.moreOpen), transform: dropTf(s.moreOpen) } as any}>
                {(() => {
                  const themeTip = s.dark ? 'Dark mode on (D) · switch to light' : 'Light mode on (D) · switch to dark';
                  return (
                    <span data-tip={themeTip} style={css('display:inline-flex')}>
                      <IconButton size="sm" aria-label={themeTip} onClick={() => setDark(!s.dark)}><Icon name={s.dark ? 'LucideSun' : 'LucideMoon'} size={16} /></IconButton>
                    </span>
                  );
                })()}
                <span data-tip="Cursor settings (C)" style={css('display:inline-flex')}>
                  <IconButton size="sm" aria-label="Cursor settings (C)" aria-expanded={s.curOpen} onClick={() => setState((x) => ({ curOpen: !x.curOpen, moreOpen: false }))}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 3.5l14 6.2-6 2.1-2.1 6z"></path></svg>
                  </IconButton>
                </span>
                <span data-tip="Keyboard shortcuts (?)" style={css('display:inline-flex')}>
                  <IconButton size="sm" aria-label="Keyboard shortcuts (?)" onClick={() => setState({ guide: true, moreOpen: false })}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9.2 9a3 3 0 0 1 5.8 1c0 2-3 2.6-3 4.5"></path><path d="M12 18.5v.01"></path></svg>
                  </IconButton>
                </span>
              </div>
            </div>

            <span data-r="cur" style={css('display:contents')}>
              <div role="dialog" aria-label="Cursor" style={{ ...css('position:absolute;top:calc(100% + 10px);right:0;width:340px;max-width:calc(100vw - 2 * var(--page-gutter));max-height:calc(100vh - 90px);overflow-y:auto;box-sizing:border-box;padding:20px;background:var(--card);border:1px solid var(--border);border-radius:14px;box-shadow:0 12px 32px rgba(0,0,0,.12);z-index:60;transition:opacity var(--dur-fade) var(--ease), transform var(--dur-fade) var(--ease)'), ...hide(s.curOpen), transform: dropTf(s.curOpen) } as any}>
                <div style={css('display:flex;align-items:center;justify-content:space-between')}>
                  <h2 style={css('margin:0;font-size:20px;line-height:28px;font-weight:600;letter-spacing:-0.011em;color:var(--foreground)')}>Cursor</h2>
                  <IconButton size="sm" aria-label="Close" onClick={() => setState({ curOpen: false })}><Icon name="LucideX" size={16} /></IconButton>
                </div>
                <p className="light" style={css('font-size:13px;line-height:19px;letter-spacing:-0.011em;margin:6px 0 0')}>A little personality. Just your amount.</p>
                <div style={css('margin-top:16px;border-top:1px solid var(--foreground)')}></div>
                <div style={css('display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:14px')}>
                  <span style={css(TAG_SM)}><span style={css('color:var(--muted-foreground)')}>[O]</span>Custom cursor</span>
                  <Switch checked={s.curOn} onChange={() => saveCur({ curOn: !s.curOn })} />
                </div>
                <div style={css('margin-top:20px;display:flex')}><span style={css(TAG_SM)}><span style={css('color:var(--muted-foreground)')}>[F]</span>Shape</span></div>
                <div style={css(`display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px;opacity:${s.curOn ? 1 : 0.5};transition:opacity 200ms var(--ease)`)}>
                  {([['circle', 'Circle', '50%', 'none'], ['triangle', 'Triangle', '0', 'polygon(0 0,100% 40%,40% 100%)'], ['diamond', 'Diamond', '0', 'polygon(50% 0,100% 50%,50% 100%,0 50%)']] as const).map(([id, label, radius, clip]) => (
                    <button key={id} type="button" onClick={() => saveCur({ curShape: id, curOn: true })} aria-pressed={s.curShape === id}
                      style={css(`display:flex;flex-direction:column;align-items:center;gap:8px;padding:10px 4px 8px;border-radius:10px;cursor:pointer;font:inherit;font-size:13px;line-height:19px;letter-spacing:-0.011em;font-weight:300;color:var(--foreground);background:${s.curShape === id ? 'var(--accent)' : 'transparent'};border:1px solid ${s.curShape === id ? 'var(--foreground)' : 'var(--border)'};transition:background-color 120ms var(--ease)`)}>
                      <span style={css(`display:block;width:12px;height:12px;background:var(--muted-foreground);border-radius:${radius};clip-path:${clip};transition:background-color 200ms var(--ease)`)}></span>{label}
                    </button>
                  ))}
                </div>
                <div style={css('margin-top:20px;display:flex')}><span style={css(TAG_SM)}><span style={css('color:var(--muted-foreground)')}>[L]</span>Little moments</span></div>
                <div style={css(`margin-top:8px;opacity:${s.curOn ? 1 : 0.5};transition:opacity 200ms var(--ease)`)}>
                  {MOMENTS.map(([id, label, svg]) => (
                    <div key={id} style={css('display:flex;align-items:center;gap:12px;padding:5px 0')}>
                      <span aria-hidden="true" style={css('width:28px;height:22px;flex:none;color:var(--muted-foreground);display:inline-flex')} dangerouslySetInnerHTML={{ __html: '<svg width="28" height="22" viewBox="0 0 28 22">' + svg + '</svg>' }}></span>
                      <span className="light" style={css('font-size:13px;line-height:19px;letter-spacing:-0.011em;flex:1;color:var(--foreground)')}>{label}</span>
                      <Switch checked={!!s.mo[id]} onChange={() => saveCur({ mo: { ...s.mo, [id]: !s.mo[id] } })} />
                    </div>
                  ))}
                </div>
                <div style={css('display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:20px')}>
                  <span className="light" style={css('font-size:13px;line-height:19px;letter-spacing:-0.011em;')}>Saved for your next visit.</span>
                  <Button variant="primary" size="sm" onClick={() => { localStorage.removeItem('pf-cursor'); setState({ curOn: true, curShape: 'circle', mo: { ...DEFAULT_MO } }); }}>Reset</Button>
                </div>
              </div>
            </span>
          </div>
        </div>
        {s.menu && (
          <nav data-r="mpanel" aria-label="Collection" style={css('position:absolute;top:100%;left:0;right:0;box-sizing:border-box;padding:6px var(--page-gutter) 16px;background:var(--background);border-bottom:1px solid var(--border);display:flex;flex-direction:column;align-items:flex-start;gap:8px;animation:fadeIn .2s var(--ease) both')}>
            {NAV.map(([hint, label, id]) => (
              <a key={id} href={'#' + id} onClick={() => setState({ menu: false })} aria-current={s.page === id ? 'page' : undefined}
                style={css(`display:inline-flex;gap:6px;padding:4px 8px;border-radius:0;background:${s.page === id ? 'var(--clay-wash)' : 'var(--muted)'};color:var(--foreground);text-decoration:none;font-size:14px;line-height:20px;font-weight:${s.page === id ? 500 : 400};letter-spacing:-.011em`)}>
                <span style={css('color:var(--muted-foreground)')}>[{hint}]</span>{label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* ---------- pages ---------- */}
      <main style={css('flex:1 0 auto')}>
        {s.page === 'home' && (
          <>
            <section style={css('max-width:var(--content-width);margin:0 auto;padding:var(--space-6xl) var(--page-gutter) 0;text-align:left;box-sizing:border-box')}>
              <h1 className="h1" data-anim="1" style={css('margin:0;animation:fadeUp .7s var(--ease) 60ms both')}>Tharun Pranav Sakthivel</h1>
              <p className="p light" data-anim="1" style={css('margin:8px 0 0;color:var(--muted-foreground);animation:fadeUp .7s var(--ease) 110ms both')}>Build a compass to wander.</p>
              <div aria-hidden="true" data-anim="1" style={css('width:32px;height:1px;margin:16px 0 0;background:var(--foreground);animation:fadeUp .7s var(--ease) 135ms both')}></div>
              <p className="p light" data-anim="1" style={css('margin:16px 0 0;max-width:520px;line-height:23px;text-align:left;animation:fadeUp .7s var(--ease) 160ms both')}>
                Hi there! I&apos;m TP, an AI engineer in my last year at <a href="https://www.ubc.ca/" target="_blank" rel="noopener" style={css('text-decoration-color:var(--clay)')}>UBC</a>, studying Physics, Statistics, and Environmental Sciences.
              </p>
            </section>
            <section style={css('max-width:var(--content-width);margin:0 auto;padding:32px var(--page-gutter) 0;box-sizing:border-box')}>
              <div data-anim="1" style={css('max-width:520px;margin:0;display:flex;flex-direction:column;gap:12px;text-align:left;animation:fadeUp .7s var(--ease) 380ms both')}>
                <p className="p light" style={css('margin:0;line-height:23px')}>Most recently, I was an AI Engineer at <a href="https://www.berribot.com/" target="_blank" rel="noopener" style={css('text-decoration-color:var(--clay)')}>Berribot</a>, where I built and ran the system that matches candidates to job descriptions and ranks them for recruiters.</p>
                <p className="p light" style={css('margin:0;line-height:23px')}>Before that, I co-founded <a href="https://github.com/thrns/thirdslate" target="_blank" rel="noopener" style={css('text-decoration-color:var(--clay)')}>ThirdSlate</a>, a platform that helps people learn more efficiently, and <a href="https://github.com/thrns/pocketlink" target="_blank" rel="noopener" style={css('text-decoration-color:var(--clay)')}>Pocketlink</a>, where creators can publish, sell, and grow their work all in one place.</p>
                <p className="p light" style={css('margin:0;line-height:23px')}>I also worked as a Technical Consultant at <a href="https://hyr.works/" target="_blank" rel="noopener" style={css('text-decoration-color:var(--clay)')}>Hyr</a> and as an AI Engineer at <a href="https://ubcagrobot.com/" target="_blank" rel="noopener" style={css('text-decoration-color:var(--clay)')}>UBC AgroBot</a>, where I got to use AI on agriculture problems.</p>
                <p className="p light" style={css('margin:0;line-height:23px')}>These days I&apos;m deep in the research side of AI, exploring it and building as I go.</p>
                <p className="p light" style={css('margin:0;line-height:23px')}>In a past life, I was into electronics and circuitry, and I spent a lot of time on debate and athletics.</p>
                <p className="p light" style={css('margin:0;line-height:23px')}>You can learn more about my work <a href="#work" style={css('text-decoration-color:var(--clay)')}>here</a>.</p>
              </div>
              <div className="p light" data-anim="1" style={css('animation:fadeUp .7s var(--ease) 480ms both;display:flex;justify-content:flex-start;flex-wrap:wrap;gap:16px;margin-top:24px')}>
                <a href={'mailto:' + EMAIL} onClick={openEmail} style={css('text-decoration-color:var(--clay)')}>Email</a>
                <a href="https://www.linkedin.com/in/thrn" target="_blank" rel="noopener" style={css('text-decoration-color:var(--clay)')}>LinkedIn</a>
                <a href="https://github.com/thrns" target="_blank" rel="noopener" style={css('text-decoration-color:var(--clay)')}>GitHub</a>
              </div>
            </section>
          </>
        )}

        {s.page === 'work' && (
          <section id="work" style={css(SECTION)}>
            <h1 className="h1" data-anim="1" style={css('margin:0;animation:fadeUp .7s var(--ease) 0ms both')}>Work</h1>
            <p className="p light" data-anim="1" style={css('margin:14px 0 0;max-width:var(--measure);animation:fadeUp .7s var(--ease) 100ms both')}>Ten roles across startups, robotics and applied AI.</p>
            <p data-anim="1" style={css('margin:8px 0 0;font-size:12px;line-height:18px;letter-spacing:-0.006em;font-weight:300;color:var(--muted-foreground);animation:fadeUp .7s var(--ease) 140ms both')}><span style={css('color:var(--clay)')}>*</span> Sorted from most recent to least</p>
            <div id="rail-wrap" style={css('margin-top:56px;position:relative')}>
              <div id="rail-fill" data-anim="1" style={css('position:absolute;left:0;top:0;width:2px;height:48px;background:var(--foreground);transform-origin:top;will-change:height;animation:growY 1s var(--ease) 200ms both')}></div>
              {ROLES.map((r, i, a) => {
                const [t1, t2] = r.title.split(' | ');
                return (
                  <div key={r.company}>
                    <div data-r="rolepad" data-anim="1" style={css(`padding:0 0 ${i < a.length - 1 ? '48px' : '0'} 35px;animation:fadeUp .7s var(--ease) ${300 + i * 70}ms both`)}>
                      <h2 style={css('margin:0;display:flex;flex-direction:column;align-items:flex-start;gap:6px')}>
                        <span style={css('display:flex;flex-wrap:wrap;align-items:baseline;gap:0 10px')}>
                          <a className="role-link" href={r.url} target="_blank" rel="noopener" style={css(`${ROLE_LINK};font-weight:600`)}>{t1}</a>
                          {!!r.summary2 && <span aria-hidden="true" style={css('font-size:14px;line-height:21px;font-weight:300;color:var(--muted-foreground)')}>|</span>}
                          {!!r.summary2 && <a className="role-link" href={r.url} target="_blank" rel="noopener" style={css(`${ROLE_LINK};font-weight:600`)}>{t2 || ''}</a>}
                        </span>
                        <a className="role-link" href={r.url} target="_blank" rel="noopener" style={css(`${ROLE_LINK};font-weight:300;font-style:italic`)}>{r.company}</a>
                      </h2>
                      <p className="p light" style={css('margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)')}>{r.summary}{' '}<span style={css('text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px;color:var(--muted-foreground)')}>{r.highlight}</span></p>
                      {!!r.summary2 && <p className="p light" style={css('margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)')}>{r.summary2}</p>}
                      <div data-stack="1" className="p-sm light" style={css('color:var(--muted-foreground)')}>{r.stack}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {s.page === 'projects' && (
          <section id="projects" style={css(SECTION)}>
            <h1 className="h1" data-anim="1" style={css('margin:0;animation:fadeUp .7s var(--ease) 0ms both')}>Projects</h1>
            <p className="p light" data-anim="1" style={css('margin:14px 0 0;max-width:var(--measure);animation:fadeUp .7s var(--ease) 100ms both')}>Ten things I&apos;ve built, with links to each repository.</p>
            <p data-anim="1" style={css('margin:8px 0 0;font-size:12px;line-height:18px;letter-spacing:-0.006em;font-weight:300;color:var(--muted-foreground);animation:fadeUp .7s var(--ease) 140ms both')}><span style={css('color:var(--clay)')}>*</span> Sorted from most recent to least</p>
            <div data-r="scroll" style={css('margin-top:48px')}><div data-r="tbl">
              <div data-r="thead" className="p" style={css('display:grid;grid-template-columns:minmax(160px,1.4fr) minmax(240px,5fr) 104px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)')}><span>Name</span><span>Notes</span><span style={css('justify-self:end')}>Status</span></div>
              {PROJECTS.map((p, i) => (
                <div key={p.name} data-r="row" data-anim="1" style={css(`display:grid;grid-template-columns:minmax(160px,1.4fr) minmax(240px,5fr) 104px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border);animation:fadeUp .6s var(--ease) ${240 + i * 90}ms both`)}>
                  <a href={p.url} target="_blank" rel="noopener" style={css(`${LINK_UL};justify-self:start;overflow-wrap:anywhere`)}>{p.name}</a>
                  <span className="p light" data-label="Notes">{p.what}</span>
                  <StatusPill status={p.status} pulse={p.status === 'Active'} />
                </div>
              ))}
            </div></div>
          </section>
        )}

        {s.page === 'stack' && (
          <section id="stack" style={css(SECTION)}>
            <h1 className="h1" data-anim="1" style={css('margin:0;animation:fadeUp .7s var(--ease) 0ms both')}>Stack</h1>
            <p className="p light" data-anim="1" style={css('margin:14px 0 0;max-width:var(--measure);animation:fadeUp .7s var(--ease) 100ms both')}>What I use, what I want to learn next, and what I&apos;ve dropped.</p>
            <div data-anim="1" style={css('position:relative;z-index:25;margin-top:32px;display:flex;flex-wrap:wrap;gap:8px;animation:fadeUp .7s var(--ease) 160ms both')}>
              {([['All', 'E', 'All'], ['Active', 'U', 'A'], ['Planned', 'N', 'P'], ['Inactive', 'I', 'I']] as const).map(([label, hint, k]) => {
                const on = s.sfilter === label;
                const count = STACK.filter((x) => (k === 'All' || x.k === k) && (s.scat === 'All' || x.cat === s.scat)).length;
                return (
                  <button key={label} className="chip" type="button" onClick={() => setState({ sfilter: label })} aria-pressed={on}
                    style={css(`${CHIP};background:${on ? 'var(--clay-wash)' : 'var(--muted)'};font-weight:${on ? 500 : 400}`)}>
                    <span style={css('color:var(--muted-foreground)')}>[{hint}]</span>{label}<span style={css('color:var(--muted-foreground);font-weight:300')}>{count}</span>
                  </button>
                );
              })}
              <span aria-hidden="true" style={css('align-self:stretch;width:1px;margin:2px 4px;background:var(--border)')}></span>
              <div style={css('position:relative;display:inline-flex')}>
                <button className="chip" type="button" onClick={() => setState((x) => ({ catOpen: !x.catOpen }))} aria-expanded={s.catOpen}
                  style={css(`display:inline-flex;gap:6px;align-items:center;padding:4px 8px;border:0;border-radius:0;background:${s.scat !== 'All' || s.catOpen ? 'var(--clay-wash)' : 'var(--muted)'};color:var(--foreground);font:inherit;font-size:14px;line-height:20px;letter-spacing:-.011em;cursor:pointer;transition:background-color 120ms var(--ease)`)}>
                  <span style={css('color:var(--muted-foreground)')}>[G]</span>{catLabel}<Icon name="LucideChevronDown" size={14} />
                </button>
              </div>
              {s.catOpen && (
                <div style={css('flex-basis:100%;display:flex;flex-wrap:wrap;gap:8px;padding-top:12px;margin-top:4px;border-top:1px solid var(--border);animation:fadeIn .2s var(--ease) both')}>
                  {['All', ...CATS].map((c) => {
                    const on = s.scat === c;
                    const count = STACK.filter((x) => (c === 'All' || x.cat === c) && (s.sfilter === 'All' || x.label === s.sfilter)).length;
                    return (
                      <button key={c} className="chip" type="button" onClick={() => setState({ scat: c })} aria-pressed={on}
                        style={css(`${CHIP};background:${on ? 'var(--clay-wash)' : 'var(--muted)'};font-weight:${on ? 500 : 400}`)}>
                        {c}<span style={css('color:var(--muted-foreground);font-weight:300')}>{count}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            <div data-r="scroll" style={css('margin-top:32px')}><div data-r="tbl">
              <div data-r="thead" className="p" style={css('display:grid;grid-template-columns:minmax(120px,1.2fr) minmax(120px,1.2fr) minmax(240px,4fr) 112px;gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)')}><span>Name</span><span>Purpose</span><span>Thoughts</span><span style={css('justify-self:end')}>Status</span></div>
              {stackRows.map((r, i) => (
                <div key={r.name} data-r="row" data-anim="1" style={css(`display:grid;grid-template-columns:minmax(120px,1.2fr) minmax(120px,1.2fr) minmax(240px,4fr) 112px;gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border);animation:fadeUp .6s var(--ease) ${200 + Math.min(i, 12) * 50}ms both`)}>
                  <a href={r.url} target="_blank" rel="noopener" style={css(`${LINK_UL};justify-self:start;overflow-wrap:anywhere`)}>{r.name}</a>
                  <span className="p light" data-label="Purpose">{r.purpose}</span>
                  <span className="p light" data-label="Thoughts" style={css('font-style:italic')}>{r.thoughts}</span>
                  <StatusPill status={r.status} pulse={r.k === 'A'} />
                </div>
              ))}
            </div></div>
          </section>
        )}

        {s.page === 'cases' && (
          <section id="cases" style={css(SECTION)}>
            <h1 className="h1" data-anim="1" style={css('margin:0;animation:fadeUp .7s var(--ease) 0ms both')}>Case studies</h1>
            <p className="p light" data-anim="1" style={css('margin:14px 0 0;max-width:var(--measure);animation:fadeUp .7s var(--ease) 100ms both')}>Seven problems I worked on, with a PDF write-up of each.</p>
            <div data-r="scroll" style={css('margin-top:48px')}><div data-r="tbl">
              <div data-r="thead" className="p" style={css('display:grid;grid-template-columns:44px 320px minmax(240px,4fr);gap:24px;align-items:start;padding:0 0 14px;border-bottom:1px solid var(--foreground)')}><span>No.</span><span>Case study</span><span>Summary</span></div>
              {CASES.map(([name, , , summary, url], i) => (
                <div key={name} data-r="row" data-anim="1" style={css(`display:grid;grid-template-columns:44px 320px minmax(240px,4fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border);animation:fadeUp .6s var(--ease) ${240 + i * 70}ms both`)}>
                  <span className="p light" style={css('color:var(--muted-foreground)')}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={css('display:flex;flex-direction:column;align-items:flex-start;gap:4px')}>
                    <a href={url} target="_blank" rel="noopener" style={css(`font-size:14px;white-space:nowrap;line-height:21px;font-weight:300;letter-spacing:-0.011em;text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px;overflow-wrap:anywhere`)}>{name}</a>
                  </span>
                  <span className="p light" data-label="Summary">{summary}</span>
                </div>
              ))}
            </div></div>
          </section>
        )}

        {s.page === 'resume' && (
          <section id="resume" style={css(SECTION)}>
            <h1 className="h1" data-anim="1" style={css('margin:0;animation:fadeUp .7s var(--ease) 0ms both')}>Resume</h1>
            <p className="p light" data-anim="1" style={css('margin:14px 0 0;max-width:var(--measure);animation:fadeUp .7s var(--ease) 100ms both')}>The short version of my work history, as a PDF.</p>
            <div className="p light" style={css('display:flex;flex-wrap:wrap;gap:16px;margin-top:12px')}>
              <a href="/resume.pdf" target="_blank" style={css('text-decoration-color:var(--clay)')}>Open in new tab</a>
              <a href="/resume.pdf" download="resume.pdf" style={css('text-decoration-color:var(--clay)')}>Download</a>
            </div>
            <div style={css('margin-top:48px')}>
              {s.hasPdf && <iframe data-r="pdf" src="/resume.pdf#view=FitH" title="Resume" style={css('display:block;width:100%;height:min(1100px,80vh);min-height:560px;border:1px solid var(--border);border-radius:6px;background:var(--card)')}></iframe>}
              {!s.hasPdf && (
                <div data-r="pdfnote" style={css('padding:64px 24px;border:1px solid var(--border);border-radius:6px;background:var(--card);text-align:center')}>
                  <p className="p light muted" style={css('margin:0')}>No resume.pdf found. Add your PDF to the project as resume.pdf and it will show here.</p>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      {/* ---------- footer ---------- */}
      <footer style={css('width:100%;max-width:var(--content-width);margin:auto auto 0;padding:var(--space-3xl) var(--page-gutter) 20px;box-sizing:border-box')}>
        <Separator />
        <div className="p-sm light" style={css('display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-top:20px')}>
          <span className="muted">© 2026 Tharun Pranav Sakthivel</span>
          <a href="#home">Home</a>
        </div>
      </footer>

      {/* ---------- chat ---------- */}
      <aside style={css(`position:fixed;inset:0;z-index:40;display:flex;flex-direction:column;background:var(--background);transition:transform var(--dur-slow) var(--ease), visibility var(--dur-slow);transform:${s.chat ? 'none' : 'translateY(100%)'};visibility:${s.chat ? 'visible' : 'hidden'}`)}>
        <div style={css('width:100%;max-width:var(--content-width);margin:0 auto;padding:12px var(--page-gutter);box-sizing:border-box;display:flex;align-items:center;gap:12px')}>
          <div style={css('flex:1;padding:10px 0 10px 10px;display:flex;align-items:center')}>
            <a className="bixxie" href="#home" aria-label="Bixxie, home" onClick={closeChat} style={css('display:inline-flex;align-items:center;gap:8px;height:32px;padding:0 12px;border-radius:6px;background:var(--muted);color:var(--foreground);text-decoration:none;cursor:pointer;transition:background var(--dur) var(--ease)')}>
              <span style={css('width:9px;height:9px;flex:none;transform:rotate(45deg);background:var(--clay)')}></span>
              <span style={css('font-size:14px;line-height:20px;font-weight:500;letter-spacing:-.011em')}>Bixxie</span>
            </a>
          </div>
          <Button variant="outline" size="sm" onClick={() => setState({ info: true })}><span style={css('display:inline-flex;align-items:center;gap:6px')}><Icon name="LucideInfo" size={14} />Info</span></Button>
          <Button variant="outline" size="sm" onClick={closeChat}><span style={css('display:inline-flex;align-items:center;gap:6px')}>Close<span data-r="kbd" style={css('display:inline-flex')}><Kbd>Esc</Kbd></span></span></Button>
        </div>
        <div style={css('flex:1;overflow-y:auto')}>
          <div data-r="chatp" style={css('width:100%;max-width:640px;margin:0 auto;padding:24px var(--page-gutter);box-sizing:border-box;display:flex;flex-direction:column;gap:12px;min-height:100%;justify-content:flex-end')}>
            <p className="p-lg light" style={css('margin:0 0 8px;min-height:56px')}>{greeting}</p>
            {s.msgs.map((m, i) => (
              <div key={i} data-anim="1" style={css('animation:fadeUp .45s var(--ease) both')}>
                {m.align === 'right' ? <Message align="right">{m.text}</Message> : <p className="p-lg light" style={css('margin:8px 0')}>{m.text}</p>}
              </div>
            ))}
            {s.busy && <div data-anim="1" style={css('animation:fadeIn .3s var(--ease) both;padding:8px 0')}><Spinner size={14} /></div>}
            <div ref={endRef}></div>
          </div>
        </div>
        <div style={css('width:100%;max-width:720px;margin:0 auto;padding:8px var(--page-gutter) 24px;box-sizing:border-box;display:flex;flex-direction:column;gap:12px')}>
          <button className="toggle-q" onClick={() => setState((x) => ({ hideQ: !x.hideQ }))} style={css('align-self:center;display:inline-flex;align-items:center;gap:6px;border:0;background:transparent;color:var(--muted-foreground);font:inherit;font-size:13px;line-height:20px;font-weight:300;cursor:pointer;padding:4px 8px')}>
            <Icon name={s.hideQ ? 'LucideChevronUp' : 'LucideChevronDown'} size={14} />{s.hideQ ? 'Show quick questions' : 'Hide quick questions'}
          </button>
          {!s.hideQ && (
            <div data-r="sugs" style={css('display:flex;flex-wrap:nowrap;justify-content:center;gap:8px')}>
              {SUGS.map((x, i) => {
                const more = x === 'More';
                const delay = s.chat ? 380 + i * 60 + 'ms' : '0ms';
                return (
                  <button key={x} onClick={() => send(x)} aria-label={x}
                    style={css(`display:inline-flex;align-items:center;justify-content:center;gap:${more ? '0' : '8px'};flex:${more ? '0 0 48px' : '1 1 0'};min-width:0;height:48px;padding:0 ${more ? '0' : '10px'};border:1px solid var(--border);border-radius:14px;background:var(--card);color:var(--foreground);font:inherit;font-size:14px;line-height:21px;font-weight:300;letter-spacing:-0.011em;cursor:pointer;opacity:${s.chat ? 1 : 0};transform:${s.chat ? 'none' : 'translateY(10px)'};transition:background var(--dur) var(--ease),opacity .5s var(--ease) ${delay},transform .5s var(--ease) ${delay}`)}>
                    <span style={css('display:inline-flex;color:var(--muted-foreground)')}><Icon name={SUG_ICON[x]} size={16} /></span>{more ? '' : x}
                  </button>
                );
              })}
            </div>
          )}
          <div style={css('display:flex;align-items:center;gap:8px;height:56px;padding:0 8px 0 24px;border:1px solid var(--border);border-radius:9999px;background:color-mix(in srgb, var(--foreground) 4%, var(--card))')}>
            <input value={s.draft} onChange={(e) => setState({ draft: e.target.value })} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); send(s.draft); } }} placeholder="Ask about my work…"
              style={css('flex:1;min-width:0;border:0;outline:0;background:transparent;color:var(--foreground);font:inherit;font-size:15px;font-weight:300;letter-spacing:-0.011em')} />
            <button className="send-btn" onClick={() => send(s.draft)} aria-label="Send" style={css('flex:none;width:40px;height:40px;border:0;border-radius:9999px;background:var(--foreground);color:var(--background);display:inline-flex;align-items:center;justify-content:center;cursor:pointer')}>
              <Icon name="LucideArrowUp" size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* ---------- info dialog ---------- */}
      <div onClick={closeInfo} style={{ ...css('position:fixed;inset:0;z-index:50;display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;background:rgba(12,11,10,.25);transition:opacity var(--dur) var(--ease)'), ...hide(s.info) } as any}>
        <div data-r="dlg" role="dialog" aria-label="About this chat" onClick={stop} style={{ ...css('width:100%;max-width:640px;max-height:100%;overflow-y:auto;box-sizing:border-box;padding:32px 32px 28px;border-radius:16px;background:var(--popover);color:var(--foreground);box-shadow:inset 0 0 0 1px var(--border), var(--shadow-xl);transition:transform var(--dur-slow) var(--ease)'), transform: dlgTf(s.info) }}>
          <div style={css('display:flex;align-items:flex-start;justify-content:space-between;gap:16px')}>
            <div>
              <h2 style={css('margin:0;font-size:24px;line-height:32px;font-weight:600;letter-spacing:-0.011em')}>About this chat</h2>
              <p className="p light" style={css('margin:10px 0 0;max-width:var(--measure)')}>An assistant that answers from this site, and nothing else.</p>
            </div>
            <IconButton size="sm" aria-label="Close info" onClick={closeInfo}><Icon name="LucideX" size={16} /></IconButton>
          </div>
          <div style={css('margin-top:32px;border-top:1px solid var(--foreground)')}>
            {([['What it is', 'Ask about my roles, projects, stack or availability. It replies in a few lines.'], ['Why', 'A portfolio is fixed. A recruiter wants experience, an engineer wants the projects. This lets you ask for what you came for.'], ['Limits', 'It only knows what is on this site. If it does not know, it says so.']] as const).map(([k, v]) => (
              <div key={k} data-r="irow" style={css('display:grid;grid-template-columns:132px minmax(0,1fr);gap:24px;align-items:start;padding:24px 0;border-bottom:1px solid var(--border)')}>
                <span style={css(TAG)}>{k}</span>
                <p className="p light" style={css('margin:0')}>{v}</p>
              </div>
            ))}
          </div>
          <div style={css('margin-top:24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px')}>
            <p className="p light" style={css('margin:0')}>Found a mistake? <a href={'mailto:' + EMAIL} style={css('text-decoration-color:var(--clay)')}>Contact me</a></p>
            <Button variant="primary" size="default" onClick={closeInfo}>Start chatting</Button>
          </div>
        </div>
      </div>

      {/* ---------- email dialog ---------- */}
      <div onClick={closeEmail} style={{ ...css('position:fixed;inset:0;z-index:56;display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;background:rgba(12,11,10,.25);transition:opacity var(--dur) var(--ease)'), ...hide(s.email) } as any}>
        <div data-r="dlg" role="dialog" aria-label="Email" onClick={stop} style={{ ...css('width:100%;max-width:640px;max-height:100%;overflow-y:auto;box-sizing:border-box;padding:32px 32px 28px;border-radius:16px;background:var(--popover);color:var(--foreground);box-shadow:inset 0 0 0 1px var(--border), var(--shadow-xl);transition:transform var(--dur-slow) var(--ease)'), transform: dlgTf(s.email) }}>
          <div style={css('display:flex;align-items:flex-start;justify-content:space-between;gap:16px')}>
            <div>
              <h2 style={css('margin:0;font-size:24px;line-height:32px;font-weight:600;letter-spacing:-0.011em')}>Email me</h2>
              <p className="p light" style={css('margin:10px 0 0;max-width:var(--measure)')}>{EMAIL}</p>
            </div>
            <IconButton size="sm" aria-label="Close email" onClick={closeEmail}><Icon name="LucideX" size={16} /></IconButton>
          </div>
          <div style={css('margin-top:32px;border-top:1px solid var(--foreground)')}>
            <div data-r="irow" style={css('display:grid;grid-template-columns:132px minmax(0,1fr);gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)')}>
              <span style={css(TAG)}><span style={css('color:var(--muted-foreground)')}>[K]</span>Copy</span>
              <div style={css('display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap')}>
                <p className="p light" style={css('margin:0')}>Copy the address to your clipboard.</p>
                <span data-copy="1" style={css('display:inline-flex')}>
                  <Button variant="outline" onClick={copyAddr}><span style={css('display:inline-flex;align-items:center;gap:6px')}><Icon name={s.copied ? 'LucideCheck' : 'LucideCopy'} size={16} />{s.copied ? 'Copied' : 'Copy address'}</span></Button>
                </span>
              </div>
            </div>
            <div data-r="irow" style={css('display:grid;grid-template-columns:132px minmax(0,1fr);gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)')}>
              <span style={css(TAG)}><span style={css('color:var(--muted-foreground)')}>[J]</span>Mail app</span>
              <div style={css('display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap')}>
                <p className="p light" style={css('margin:0')}>Open a new message in your mail app.</p>
                <Button variant="primary" onClick={() => { window.location.href = 'mailto:' + EMAIL; }}>Open mail app</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- shortcuts guide ---------- */}
      <div onClick={closeGuide} style={{ ...css('position:fixed;inset:0;z-index:55;display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;background:rgba(12,11,10,.25);transition:opacity var(--dur) var(--ease)'), ...hide(s.guide) } as any}>
        <div role="dialog" aria-label="Keyboard shortcuts" onClick={stop} style={{ ...css('width:100%;max-width:820px;max-height:100%;overflow-y:auto;box-sizing:border-box;padding:40px 40px 36px;border-radius:16px;background:var(--popover);color:var(--foreground);box-shadow:inset 0 0 0 1px var(--border), var(--shadow-xl);transition:transform var(--dur-slow) var(--ease)'), transform: dlgTf(s.guide) }}>
          <div style={css('display:flex;align-items:flex-start;justify-content:space-between;gap:16px')}>
            <div>
              <h2 style={css('margin:0;font-size:28px;line-height:36px;font-weight:600;letter-spacing:-0.011em')}>Guide for the lazy</h2>
              <p className="p light" style={css('margin:12px 0 0;max-width:var(--measure);color:var(--muted-foreground)')}>Less clicking. More wandering.<br />Press a letter from anywhere.</p>
            </div>
            <IconButton size="sm" aria-label="Close guide" onClick={closeGuide}><Icon name="LucideX" size={16} /></IconButton>
          </div>
          <div style={css('margin-top:32px;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0 48px;align-items:start')}>
            <GuideCol rows={GUIDE_L} />
            <GuideCol rows={GUIDE_R} />
          </div>
        </div>
      </div>
    </div>
  );
}
