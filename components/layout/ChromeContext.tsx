'use client';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ANSWERS, GREETING, TOPICS } from '@/lib/data';
import { DEFAULT_MO, EMAIL, NAV, PATH, SHAPES, activeOf } from '@/lib/chrome';

export type ChromeState = {
  email: boolean; copied: boolean; moreOpen: boolean; guide: boolean; info: boolean; typed: number; hideQ: boolean; chat: boolean; dark: boolean;
  curOpen: boolean; curOn: boolean; curShape: string; mo: Record<string, boolean>; msgs: { text: string; align: string }[]; draft: string; busy: boolean; menu: boolean;
};
const INIT: ChromeState = {
  email: false, copied: false, moreOpen: false, guide: false, info: false, typed: 0, hideQ: false, chat: false, dark: false, curOpen: false, curOn: true,
  curShape: 'circle', mo: { ...DEFAULT_MO }, msgs: [], draft: '', busy: false, menu: false,
};

type Setter = (p: Partial<ChromeState> | ((s: ChromeState) => Partial<ChromeState>)) => void;
export type Chrome = {
  s: ChromeState; sRef: React.MutableRefObject<ChromeState>; setState: Setter;
  setDark: (d: boolean) => void; copyAddr: () => void; saveCur: (p: Partial<ChromeState>) => void; send: (text: string) => void;
  openChat: (e?: React.SyntheticEvent) => void; closeChat: () => void; openEmail: (e?: React.SyntheticEvent) => void;
  closeEmail: () => void; closeInfo: () => void; closeGuide: () => void;
  endRef: React.RefObject<HTMLDivElement | null>; greeting: string; active: string;
  navItems: { hint: string; label: string; href: string; active: boolean }[];
};

const Ctx = createContext<Chrome>(null as any);
export const useChrome = () => useContext(Ctx);

export function ChromeProvider({ children }: { children: React.ReactNode }) {
  const [s, _set] = useState<ChromeState>(INIT);
  const sRef = useRef(s);
  sRef.current = s;
  const setState: Setter = (p) => _set((prev) => ({ ...prev, ...(typeof p === 'function' ? p(prev) : p) }));
  const endRef = useRef<HTMLDivElement>(null);
  const t = useRef<{ copy?: any; typer?: any; reply?: any }>({});
  const api = useRef<any>({});
  const router = useRouter();
  const pathname = usePathname();
  const pathRef = useRef(pathname);
  pathRef.current = pathname;
  const active = activeOf(pathname);

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
  const saveCur = (p: Partial<ChromeState>) => {
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

  /* close the mobile menu whenever the page changes */
  useEffect(() => { setState({ menu: false }); }, [pathname]);

  /* keys, header fit, saved preferences */
  useEffect(() => {
    const fitNav = () => {
      const r = document.documentElement;
      r.removeAttribute('data-nav');
      const as = document.querySelectorAll<HTMLElement>('[data-r=hdr] nav a');
      const wrapped = as.length > 2 && as[as.length - 1].offsetTop > as[0].offsetTop + 6;
      if (wrapped || window.innerWidth <= 640) r.setAttribute('data-nav', 'c');
    };
    window.addEventListener('resize', fitNav);
    const fitTimers = [0, 150, 500, 1200].map((ms) => setTimeout(fitNav, ms));
    if ((document as any).fonts && (document as any).fonts.ready) (document as any).fonts.ready.then(fitNav);

    const go: Record<string, string> = { h: '/', w: PATH.work, p: PATH.projects, t: PATH.cases, s: PATH.stack, r: PATH.resume };
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
      if (e.key === 'ArrowLeft' && !st.email && !st.info && /^\/case-studies\/[^/]+/.test(pathRef.current)) { e.preventDefault(); router.push(PATH.cases); return; }
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
      if (k === 'm') { e.preventDefault(); setState({ email: true, copied: false }); }
      else if (go[k]) { router.push(go[k]); }
      else if (k === 'd') api.current.setDark(!sRef.current.dark);
      else if (k === 'c') setState((x) => ({ curOpen: !x.curOpen }));
      else if (k === '/') { e.preventDefault(); setState({ chat: true }); }
    };
    window.addEventListener('keydown', key);

    if (localStorage.getItem('pf-dark') === '1') setDark(true);
    try {
      const c = JSON.parse(localStorage.getItem('pf-cursor') || 'null');
      if (c) setState((x) => ({ curOn: c.on !== false, curShape: SHAPES.includes(c.shape) ? c.shape : 'circle', mo: { ...x.mo, ...(c.mo || {}) } }));
    } catch (e) {}

    return () => {
      clearInterval(t.current.reply); clearInterval(t.current.typer);
      fitTimers.forEach(clearTimeout);
      window.removeEventListener('resize', fitNav);
      window.removeEventListener('keydown', key);
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


  const greeting = GREETING.slice(0, s.typed) + (s.typed < GREETING.length && s.chat ? '\u258D' : '');
  const navItems = NAV.map(([hint, label, id]) => ({ hint, label, href: PATH[id], active: active === id }));
  const openEmail = (e?: React.SyntheticEvent) => { e && e.preventDefault && e.preventDefault(); setState({ email: true, copied: false }); };
  const openChat = (e?: React.SyntheticEvent) => { e && e.preventDefault && e.preventDefault(); setState({ chat: true }); };
  const closeChat = () => setState({ chat: false, info: false });
  const closeEmail = () => setState({ email: false });
  const closeInfo = () => setState({ info: false });
  const closeGuide = () => setState({ guide: false });

  const value: Chrome = { s, sRef, setState, setDark, copyAddr, saveCur, send, openChat, closeChat, openEmail, closeEmail, closeInfo, closeGuide, endRef, greeting, active, navItems };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
