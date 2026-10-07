'use client';
import { useEffect, useRef, useState } from 'react';
import { css } from '@/lib/css';
import PageMain from '@/components/layout/PageMain';
import PageHeading, { PageSection } from '@/components/common/PageHeading';
import { useChrome } from '@/components/layout/ChromeContext';

/** Renders every page of /resume.pdf to canvases, so it shows even where the browser has no built-in PDF viewer. */
function PdfPages({ onFail }: { onFail: () => void }) {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let dead = false;
    (async () => {
      try {
        const pdfjs = await import('pdfjs-dist');
        pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
        const doc = await pdfjs.getDocument({ url: '/resume.pdf' }).promise;
        const el = host.current;
        if (!el) return;
        const width = el.clientWidth;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        for (let n = 1; n <= doc.numPages; n++) {
          const page = await doc.getPage(n);
          if (dead) return;
          const base = page.getViewport({ scale: 1 });
          const scale = width / base.width;
          const vp = page.getViewport({ scale: scale * dpr });
          const wrap = document.createElement('div');
          wrap.style.cssText = `position:relative;${n > 1 ? 'border-top:1px solid var(--border)' : ''}`;
          const canvas = document.createElement('canvas');
          canvas.width = vp.width;
          canvas.height = vp.height;
          canvas.setAttribute('aria-hidden', 'true');
          canvas.style.cssText = 'display:block;width:100%;height:auto';
          wrap.appendChild(canvas);
          el.appendChild(wrap);
          // Clickable overlay for the PDF's link annotations, positioned in % so it survives resizing.
          const unit = page.getViewport({ scale: 1 });
          for (const an of await page.getAnnotations()) {
            if (an.subtype !== 'Link' || !an.url || !/^(https?:|mailto:|tel:)/i.test(an.url)) continue;
            const [vx, , , vy] = page.view;
            const [rx1, ry1, rx2, ry2] = an.rect as number[];
            const [x1, x2, y1, y2] = [rx1 - vx, rx2 - vx, vy - ry1, vy - ry2];
            const link = document.createElement('a');
            link.href = an.url;
            link.target = an.url.startsWith('http') ? '_blank' : '_self';
            link.rel = 'noopener noreferrer';
            link.style.cssText = `position:absolute;left:${(Math.min(x1, x2) / unit.width) * 100}%;top:${(Math.min(y1, y2) / unit.height) * 100}%;width:${(Math.abs(x2 - x1) / unit.width) * 100}%;height:${(Math.abs(y2 - y1) / unit.height) * 100}%`;
            link.setAttribute('aria-label', an.url);
            wrap.appendChild(link);
          }
          await page.render({ canvas, viewport: vp }).promise;
        }
      } catch {
        if (!dead) onFail();
      }
    })();
    return () => { dead = true; host.current?.replaceChildren(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div ref={host} data-r="pdf" role="region" aria-label="Resume preview" style={css('width:100%;border:1px solid var(--border);border-radius:6px;background:#fff;overflow:hidden;min-height:560px')} />;
}

export default function ResumePage() {
  const { sRef } = useChrome();
  const [hasPdf, setHasPdf] = useState(false);
  const dl = useRef<HTMLAnchorElement>(null);
  const open = useRef<HTMLAnchorElement>(null);

  /* O opens the PDF in a new tab, D downloads it */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tg = e.target as HTMLElement, tag = tg && tg.tagName;
      if (e.metaKey || e.ctrlKey || e.altKey || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (tg && tg.isContentEditable)) return;
      const st = sRef.current;
      if (st.chat || st.guide || st.email) return;
      const k = e.key.length === 1 ? e.key.toLowerCase() : '';
      if (k === 'o') open.current?.click();
      if (k === 'd') dl.current?.click();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((r) => setHasPdf(r.ok && !/html/.test(r.headers.get('content-type') || '')))
      .catch(() => {});
  }, []);
  return (
    <PageMain>
      <PageSection id="resume">
        <PageHeading title="Resume" intro="The short version of my work history, as a PDF. Everything here is also on the work page." />
        <div className="p light" style={css('display:flex;flex-wrap:wrap;gap:16px;margin-top:12px')}>
          <a ref={open} href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={css('text-decoration-color:var(--clay)')}>Open in new tab</a>
          <a ref={dl} href="/resume.pdf" download="TP_Resume.pdf" style={css('text-decoration-color:var(--clay)')}>Download</a>
        </div>
        <div style={css('margin-top:48px')}>
          {hasPdf && <PdfPages onFail={() => setHasPdf(false)} />}
          {!hasPdf && (
            <div data-r="pdfnote" style={css('padding:64px 24px;border:1px solid var(--border);border-radius:6px;background:var(--card);text-align:center')}>
              <p className="p light muted" style={css('margin:0')}>The PDF is not available right now. Email me and I will send it over.</p>
            </div>
          )}
        </div>
      </PageSection>
    </PageMain>
  );
}
