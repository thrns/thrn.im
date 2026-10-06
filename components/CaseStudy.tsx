'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { css } from '@/lib/css';
import PageMain from '@/components/layout/PageMain';
import { REGISTRY } from '@/components/case-studies/registry';
import { CASE_CSS } from '@/lib/case-studies/css';

const EASE = 'cubic-bezier(.2,.7,.2,1)';
const MERMAID_SRC = 'https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js';
let uid = 0;

const loadMermaid = () =>
  new Promise<void>((resolve) => {
    const w = window as any;
    if (w.mermaid) return resolve();
    let s = document.querySelector('script[data-mermaid]') as HTMLScriptElement | null;
    if (!s) {
      s = document.createElement('script');
      s.src = MERMAID_SRC;
      s.async = true;
      s.setAttribute('data-mermaid', '1');
      document.head.appendChild(s);
    }
    s.addEventListener('load', () => resolve());
    s.addEventListener('error', () => resolve());
  });

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
};

export default function CaseStudy({ slug }: { slug: string }) {
  const router = useRouter();
  const cs = REGISTRY[slug];
  const { Article, SRC, THEME_CSS, IDS, TOC } = cs;

  useEffect(() => {
    let d = false;
    try { d = localStorage.getItem('pf-dark') === '1'; } catch (e) {}
    document.documentElement.classList.toggle('dark', d);
    const rm = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches);
    let armed = false;
    let cancelled = false;
    let tickT: any;
    const armEv = ['wheel', 'touchstart', 'keydown', 'pointerdown', 'scroll'];

    const rail = () => {
      const w = document.getElementById('rail-wrap'), f = document.getElementById('rail-fill');
      if (!w || !f) return;
      const r = w.getBoundingClientRect(), line = window.innerHeight * 0.55;
      f.style.height = Math.max(0, Math.min(r.height - 7.5, line - r.top - 7.5)) + 'px';
      document.querySelectorAll('[data-mark]').forEach((m) => m.classList.toggle('on', m.getBoundingClientRect().top < line));
    };

    const prep = (fig: HTMLElement) => {
      let ni = 0, ei = 0;
      fig.querySelectorAll('[data-mmd] svg').forEach((svg) => {
        svg.querySelectorAll<HTMLElement>('.node,.cluster').forEach((n) => { n.style.opacity = '0'; n.style.transition = 'opacity .5s ' + EASE + ' ' + (150 + ni++ * 80) + 'ms'; });
        svg.querySelectorAll<SVGPathElement>('.edgePaths path').forEach((p) => {
          let L = 200; try { L = p.getTotalLength(); } catch (e) {}
          const dl = 350 + ei++ * 90;
          p.style.strokeDasharray = String(L); p.style.strokeDashoffset = String(L); p.style.opacity = '0';
          p.style.transition = 'stroke-dashoffset .7s ' + EASE + ' ' + dl + 'ms,opacity .3s ' + dl + 'ms';
        });
      });
      fig.dataset.prepped = '1';
    };
    const maybePrep = (fig: HTMLElement) => {
      if (!armed || fig.dataset.prepped || rm) return;
      if (!fig.querySelector('[data-mmd] svg')) return;
      if (fig.getBoundingClientRect().top > window.innerHeight * 0.94) prep(fig);
    };
    const play = (fig: HTMLElement) => {
      if (fig.dataset.prepped !== '1' || fig.dataset.played) return;
      fig.dataset.played = '1';
      void fig.offsetHeight;
      setTimeout(() => {
        fig.querySelectorAll<HTMLElement>('[data-mmd] svg .node,[data-mmd] svg .cluster').forEach((n) => { n.style.opacity = '1'; });
        fig.querySelectorAll<SVGPathElement>('[data-mmd] svg .edgePaths path').forEach((p) => { p.style.strokeDashoffset = '0'; p.style.opacity = '1'; });
      }, 40);
    };
    const tick = () => {
      if (!armed) return;
      const H = window.innerHeight * 0.94;
      document.querySelectorAll('[data-reveal].hid:not(.in)').forEach((el) => { if (el.getBoundingClientRect().top < H) el.classList.add('in'); });
      document.querySelectorAll<HTMLElement>('[data-fig]').forEach((f) => { if (f.dataset.prepped === '1' && !f.dataset.played && f.getBoundingClientRect().top < H) play(f); });
    };
    const arm = () => {
      if (armed) return;
      armed = true;
      armEv.forEach((n) => window.removeEventListener(n, arm));
      const H = window.innerHeight;
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        if (el.getBoundingClientRect().top > H * 0.94) {
          const sibs = Array.from(el.parentElement!.children).filter((c) => c.hasAttribute('data-reveal'));
          el.style.transitionDelay = el.dataset.d || Math.min(sibs.indexOf(el), 6) * 70 + 'ms';
          el.classList.add('hid');
        }
      });
      document.querySelectorAll<HTMLElement>('[data-fig]').forEach((f) => maybePrep(f));
      tick();
    };
    if (!rm) {
      armEv.forEach((n) => window.addEventListener(n, arm, { passive: true }));
      tickT = setInterval(tick, 300);
    }

    const onScroll = () => { rail(); tick(); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    const onKey = (e: KeyboardEvent) => {
      const tg = e.target as HTMLElement, tag = tg && tg.tagName;
      if (e.metaKey || e.ctrlKey || e.altKey || tag === 'INPUT' || tag === 'TEXTAREA' || (tg && tg.isContentEditable)) return;
      const i = '12345'.indexOf(e.key);
      if (e.key.length !== 1 || i < 0) return;
      const el = document.getElementById(IDS[i]);
      if (!el) return;
      e.preventDefault();
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
    };
    window.addEventListener('keydown', onKey);

    const src = (k: string) => {
      let s = SRC[k];
      if (window.innerWidth <= 640) s = s.replace(/^(\s*(?:flowchart|graph))\s+(?:LR|RL)/, '$1 TB').replace(/^(\s*direction)\s+(?:LR|RL)/gm, '$1 TB');
      return s;
    };
    let mobile = window.innerWidth <= 640;
    const draw = async () => {
      await loadMermaid();
      const mm = (window as any).mermaid;
      if (!mm || cancelled) return;
      try { await (document as any).fonts.ready; } catch (e) {}
      mm.initialize({
        startOnLoad: false, securityLevel: 'loose', theme: 'base',
        flowchart: { htmlLabels: true, curve: 'linear', padding: 14, nodeSpacing: 30, rankSpacing: 34, wrappingWidth: 500, useMaxWidth: true },
        themeVariables: { fontFamily: 'var(--font-sans)', fontSize: '13px' },
        themeCSS: THEME_CSS,
      });
      for (const el of Array.from(document.querySelectorAll<HTMLElement>('[data-mmd]'))) {
        if (cancelled) return;
        const k = el.getAttribute('data-mmd')!;
        try {
          let svg: string = '', err: any;
          for (let a = 0; a < 3; a++) {
            try {
              ({ svg } = await mm.render('mmd-' + k + '-' + (uid++), src(k) + '\nclassDef key stroke-width:1px'));
              err = null;
              break;
            } catch (e2) {
              err = e2;
              document.querySelectorAll('[id^="dmmd-"]').forEach((n) => n.remove());
              await new Promise((r) => setTimeout(r, 400));
            }
          }
          if (err) throw err;
          el.innerHTML = svg;
          {
            const sv = el.querySelector('svg');
            if (sv && window.innerWidth <= 640) {
              const vb = sv.viewBox.baseVal;
              if (vb && vb.width) sv.style.minWidth = Math.round(vb.width * 0.8) + 'px';
            }
          }
          el.querySelectorAll('marker').forEach((m) => {
            const start = /pointStart/.test(m.id);
            m.setAttribute('markerWidth', '9'); m.setAttribute('markerHeight', '9'); m.setAttribute('refX', start ? '1' : '8'); m.setAttribute('refY', '5');
            const p = m.querySelector('path');
            if (p) {
              p.setAttribute('d', start ? 'M9,1 L2,5 L9,9' : 'M1,1 L8,5 L1,9');
              (p as any).style.cssText = 'fill:none!important;stroke:var(--muted-foreground)!important;stroke-width:1px!important;stroke-dasharray:none!important';
            }
          });
          const fig = el.closest('[data-fig]') as HTMLElement | null;
          if (fig && !(rm || fig.dataset.played)) maybePrep(fig);
        } catch (e) { console.error('mermaid', k, e); }
      }
      rail();
    };
    const onBreak = () => {
      const n = window.innerWidth <= 640;
      if (n !== mobile) { mobile = n; draw(); }
    };
    window.addEventListener('resize', onBreak);

    draw();
    const t0 = setTimeout(onScroll, 50);

    return () => {
      cancelled = true;
      clearTimeout(t0);
      clearInterval(tickT);
      armEv.forEach((n) => window.removeEventListener(n, arm));
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('resize', onBreak);
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const toc = TOC.map(([hint, label, id]) => (
    <a
      key={id}
      href={'#' + id}
      className="hv-clay"
      onClick={(e) => { e.preventDefault(); scrollToId(id); }}
      style={css('display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em;text-decoration:none;transition:background-color 120ms var(--ease)')}
    >
      <span style={css('color:var(--muted-foreground)')}>[{hint}]</span>
      {label}
    </a>
  ));
  const goCases = (e: React.MouseEvent) => { e.preventDefault(); router.push('/case-studies'); };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CASE_CSS }} />
      <PageMain footerPad="var(--space-6xl)">
        <Article toc={toc} goCases={goCases} />
      </PageMain>
    </>
  );
}
