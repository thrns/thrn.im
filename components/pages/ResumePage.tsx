'use client';
import { useEffect, useState } from 'react';
import { css } from '@/lib/css';
import PageMain from '@/components/layout/PageMain';
import PageHeading, { PageSection } from '@/components/common/PageHeading';

export default function ResumePage() {
  const [hasPdf, setHasPdf] = useState(false);
  useEffect(() => {
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((r) => setHasPdf(r.ok && !/html/.test(r.headers.get('content-type') || '')))
      .catch(() => {});
  }, []);
  return (
    <PageMain>
      <PageSection id="resume">
        <PageHeading title="Resume" intro="The short version of my work history, as a PDF." />
        <div className="p light" style={css('display:flex;flex-wrap:wrap;gap:16px;margin-top:12px')}>
          <a href="/resume.pdf" target="_blank" style={css('text-decoration-color:var(--clay)')}>Open in new tab</a>
          <a href="/resume.pdf" download="resume.pdf" style={css('text-decoration-color:var(--clay)')}>Download</a>
        </div>
        <div style={css('margin-top:48px')}>
          {hasPdf && <iframe data-r="pdf" src="/resume.pdf#view=FitH" title="Resume" style={css('display:block;width:100%;height:min(1100px,80vh);min-height:560px;border:1px solid var(--border);border-radius:6px;background:var(--card)')}></iframe>}
          {!hasPdf && (
            <div data-r="pdfnote" style={css('padding:64px 24px;border:1px solid var(--border);border-radius:6px;background:var(--card);text-align:center')}>
              <p className="p light muted" style={css('margin:0')}>No resume.pdf found. Add your PDF to the project as resume.pdf and it will show here.</p>
            </div>
          )}
        </div>
      </PageSection>
    </PageMain>
  );
}
