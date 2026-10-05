'use client';
import { useEffect } from 'react';
import { useChrome } from '@/components/layout/ChromeContext';

/** Custom cursor: dot, trail, morphing shapes and click ripples. Driven by the cursor settings in the chrome state. */
export function useCustomCursor() {
  const { sRef, setState } = useChrome();
  useEffect(() => {
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
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      tr.remove(); d.remove();
      document.documentElement.classList.remove('pf-cc');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
