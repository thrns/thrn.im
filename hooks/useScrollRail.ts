'use client';
import { useEffect } from 'react';

/** Work page: the vertical rail fill follows page scroll with easing. */
export function useScrollRail() {
  useEffect(() => {
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
    window.addEventListener('scroll', rail, { passive: true });
    window.addEventListener('resize', rail);
    rail();
    if ((document as any).fonts && (document as any).fonts.ready) (document as any).fonts.ready.then(rail);
    return () => {
      window.removeEventListener('scroll', rail);
      window.removeEventListener('resize', rail);
      cancelAnimationFrame(railRaf);
    };
  }, []);
}
