'use client';

import { useEffect } from 'react';
import { renderMermaid } from '@/lib/mermaid';

const EASE = 'cubic-bezier(.2,.7,.2,1)';
let uid = 0;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}

export default function CaseStudyEnhancements({ ids, src, themeCss }: {
  ids: string[];
  src: Record<string, string>;
  themeCss: string;
}) {
  useEffect(() => {
    let cancelled = false;
    let armed = false;
    let tickT: ReturnType<typeof setInterval> | undefined;
    const armEv = ['wheel', 'touchstart', 'keydown', 'pointerdown', 'scroll'] as const;
    const reducedMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches);

    const rail = () => {
      const wrap = document.getElementById('rail-wrap');
      const fill = document.getElementById('rail-fill');
      if (!wrap || !fill) return;
      const rect = wrap.getBoundingClientRect();
      const line = window.innerHeight * 0.55;
      fill.style.height = Math.max(0, Math.min(rect.height - 7.5, line - rect.top - 7.5)) + 'px';
      document.querySelectorAll('[data-mark]').forEach((mark) => mark.classList.toggle('on', mark.getBoundingClientRect().top < line));
    };

    const prep = (figure: HTMLElement) => {
      let nodeIndex = 0;
      let edgeIndex = 0;
      figure.querySelectorAll('[data-mmd] svg').forEach((svg) => {
        svg.querySelectorAll<HTMLElement>('.node,.cluster').forEach((node) => {
          node.style.opacity = '0';
          node.style.transition = 'opacity .5s ' + EASE + ' ' + (150 + nodeIndex++ * 80) + 'ms';
        });
        svg.querySelectorAll<SVGPathElement>('.edgePaths path').forEach((path) => {
          let length = 200;
          try { length = path.getTotalLength(); } catch {}
          const delay = 350 + edgeIndex++ * 90;
          path.style.strokeDasharray = String(length);
          path.style.strokeDashoffset = String(length);
          path.style.opacity = '0';
          path.style.transition = 'stroke-dashoffset .7s ' + EASE + ' ' + delay + 'ms,opacity .3s ' + delay + 'ms';
        });
      });
      figure.dataset.prepped = '1';
    };

    const maybePrep = (figure: HTMLElement) => {
      if (!armed || figure.dataset.prepped || reducedMotion) return;
      if (!figure.querySelector('[data-mmd] svg')) return;
      if (figure.getBoundingClientRect().top > window.innerHeight * 0.94) prep(figure);
    };

    const play = (figure: HTMLElement) => {
      if (figure.dataset.prepped !== '1' || figure.dataset.played) return;
      figure.dataset.played = '1';
      void figure.offsetHeight;
      setTimeout(() => {
        figure.querySelectorAll<HTMLElement>('[data-mmd] svg .node,[data-mmd] svg .cluster').forEach((node) => { node.style.opacity = '1'; });
        figure.querySelectorAll<SVGPathElement>('[data-mmd] svg .edgePaths path').forEach((path) => { path.style.strokeDashoffset = '0'; path.style.opacity = '1'; });
      }, 40);
    };

    const tick = () => {
      if (!armed) return;
      const threshold = window.innerHeight * 0.94;
      document.querySelectorAll('[data-reveal].hid:not(.in)').forEach((el) => {
        if (el.getBoundingClientRect().top < threshold) el.classList.add('in');
      });
      document.querySelectorAll<HTMLElement>('[data-fig]').forEach((figure) => {
        if (figure.dataset.prepped === '1' && !figure.dataset.played && figure.getBoundingClientRect().top < threshold) play(figure);
      });
    };

    const arm = () => {
      if (armed) return;
      armed = true;
      armEv.forEach((name) => window.removeEventListener(name, arm));
      const height = window.innerHeight;
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        if (el.getBoundingClientRect().top > height * 0.94) {
          const siblings = Array.from(el.parentElement!.children).filter((child) => child.hasAttribute('data-reveal'));
          el.style.transitionDelay = el.dataset.d || Math.min(siblings.indexOf(el), 6) * 70 + 'ms';
          el.classList.add('hid');
        }
      });
      document.querySelectorAll<HTMLElement>('[data-fig]').forEach((figure) => maybePrep(figure));
      tick();
    };

    if (!reducedMotion) {
      armEv.forEach((name) => window.addEventListener(name, arm, { passive: true }));
      tickT = setInterval(tick, 300);
    }

    const onScroll = () => { rail(); tick(); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const tag = target && target.tagName;
      if (event.metaKey || event.ctrlKey || event.altKey || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (target && target.isContentEditable)) return;
      const index = '12345'.indexOf(event.key);
      if (event.key.length !== 1 || index < 0) return;
      const el = document.getElementById(ids[index]);
      if (!el) return;
      event.preventDefault();
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: reducedMotion ? 'auto' : 'smooth' });
    };
    window.addEventListener('keydown', onKey);

    const onTocClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>('[data-cs-toc][href^="#"]');
      const id = link?.getAttribute('href')?.slice(1);
      if (!id || !ids.includes(id)) return;
      event.preventDefault();
      scrollToId(id);
    };
    document.addEventListener('click', onTocClick);

    const renderDiagrams = async () => {
      const diagrams = Array.from(document.querySelectorAll<HTMLElement>('[data-mmd]'));
      if (!diagrams.length) return;
      try { await document.fonts.ready; } catch {}
      if (cancelled) return;

      const mobile = window.innerWidth <= 640;
      const sourceFor = (key: string) => {
        let source = src[key];
        if (mobile) source = source.replace(/^(\s*(?:flowchart|graph))\s+(?:LR|RL)/, '$1 TB').replace(/^(\s*direction)\s+(?:LR|RL)/gm, '$1 TB');
        return source;
      };
      const config = {
        startOnLoad: false,
        securityLevel: 'loose',
        theme: 'base',
        flowchart: { htmlLabels: true, curve: 'linear', padding: 14, nodeSpacing: 30, rankSpacing: 34, wrappingWidth: 500, useMaxWidth: true },
        themeVariables: { fontFamily: 'var(--font-sans)', fontSize: '13px' },
        themeCSS: themeCss,
      };

      for (const el of diagrams) {
        if (cancelled) return;
        const key = el.getAttribute('data-mmd');
        if (!key || !src[key]) continue;
        let error: unknown;
        let svg = '';
        for (let attempt = 0; attempt < 3; attempt++) {
          try {
            ({ svg } = await renderMermaid(`mmd-${key}-${uid++}`, sourceFor(key) + '\nclassDef key stroke-width:1px', config));
            error = undefined;
            break;
          } catch (caught) {
            error = caught;
            document.querySelectorAll('[id^="dmmd-"]').forEach((node) => node.remove());
            await new Promise((resolve) => setTimeout(resolve, 400));
          }
        }
        if (error) throw error;
        el.innerHTML = svg;
        const svgElement = el.querySelector('svg');
        svgElement?.setAttribute('focusable', 'false');
        svgElement?.removeAttribute('tabindex');
        if (svgElement && window.innerWidth <= 640) {
          const viewBox = svgElement.viewBox.baseVal;
          if (viewBox && viewBox.width) svgElement.style.minWidth = Math.round(viewBox.width * 0.8) + 'px';
        }
        el.querySelectorAll('marker').forEach((marker) => {
          const start = /pointStart/.test(marker.id);
          marker.setAttribute('markerWidth', '9');
          marker.setAttribute('markerHeight', '9');
          marker.setAttribute('refX', start ? '1' : '8');
          marker.setAttribute('refY', '5');
          const path = marker.querySelector('path');
          if (path) {
            path.setAttribute('d', start ? 'M9,1 L2,5 L9,9' : 'M1,1 L8,5 L1,9');
            (path as SVGPathElement).style.cssText = 'fill:none!important;stroke:var(--muted-foreground)!important;stroke-width:1px!important;stroke-dasharray:none!important';
          }
        });
        const figure = el.closest<HTMLElement>('[data-fig]');
        if (figure && !(reducedMotion || figure.dataset.played)) maybePrep(figure);
      }
      syncScrollers();
      rail();
    };

    // A diagram wider than its box scrolls sideways; make that scroller reachable by keyboard only while it overflows.
    const syncScrollers = () => {
      document.querySelectorAll<HTMLElement>('[data-mmd]').forEach((diagram) => {
        const scroller = diagram.parentElement;
        const figure = diagram.closest<HTMLElement>('figure');
        if (!scroller || !figure) return;
        const overflows = scroller.scrollWidth > scroller.clientWidth;
        if (overflows) {
          scroller.setAttribute('data-mmd-scroll', '');
          scroller.tabIndex = 0;
          scroller.setAttribute('role', 'region');
          const caption = figure.getAttribute('aria-labelledby');
          if (caption) scroller.setAttribute('aria-labelledby', caption);
        } else if (scroller.hasAttribute('data-mmd-scroll')) {
          scroller.removeAttribute('data-mmd-scroll');
          scroller.removeAttribute('tabindex');
          scroller.removeAttribute('role');
          scroller.removeAttribute('aria-labelledby');
        }
      });
    };
    window.addEventListener('resize', syncScrollers);

    let mobile = window.innerWidth <= 640;
    const onBreakpoint = () => {
      const nextMobile = window.innerWidth <= 640;
      if (nextMobile !== mobile) {
        mobile = nextMobile;
        void renderDiagrams().catch((error) => console.error('mermaid', error));
      }
    };
    window.addEventListener('resize', onBreakpoint);

    let dark = false;
    try { dark = localStorage.getItem('pf-dark') === '1'; } catch {}
    document.documentElement.classList.toggle('dark', dark);
    void renderDiagrams().catch((error) => console.error('mermaid', error));
    const initialRail = setTimeout(onScroll, 50);

    return () => {
      cancelled = true;
      clearTimeout(initialRail);
      if (tickT) clearInterval(tickT);
      armEv.forEach((name) => window.removeEventListener(name, arm));
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('resize', onBreakpoint);
      window.removeEventListener('resize', syncScrollers);
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onTocClick);
    };
  }, [ids, src, themeCss]);

  return null;
}
