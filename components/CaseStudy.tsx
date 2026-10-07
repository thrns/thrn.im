import { css } from '@/lib/css';
import PageMain from '@/components/layout/PageMain';
import { REGISTRY } from '@/components/case-studies/registry';
import { CASE_CSS } from '@/lib/case-studies/css';
import CaseStudyEnhancements from './CaseStudyEnhancements';

export default function CaseStudy({ slug }: { slug: string }) {
  const study = REGISTRY[slug];
  if (!study) return null;

  const { Article, SRC, THEME_CSS, IDS, TOC } = study;
  const toc = TOC.map(([hint, label, id]) => (
    <a
      key={id}
      href={'#' + id}
      data-cs-toc="1"
      className="hv-clay"
      style={css('display:inline-flex;gap:6px;padding:4px 8px;background:var(--muted);font-size:14px;line-height:20px;letter-spacing:-.011em;text-decoration:none;transition:background-color 120ms var(--ease)')}
    >
      <span style={css('color:var(--muted-foreground)')}>[{hint}]</span>
      {label}
    </a>
  ));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CASE_CSS }} />
      <PageMain footerPad="var(--space-6xl)">
        <CaseStudyEnhancements ids={IDS} src={SRC} themeCss={THEME_CSS} />
        <Article toc={toc} />
      </PageMain>
    </>
  );
}
