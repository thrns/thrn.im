import Link from 'next/link';
import { css } from '@/lib/css';
import { CASES } from '@/lib/data';
import PageMain from '@/components/layout/PageMain';
import PageHeading, { PageSection } from '@/components/common/PageHeading';
import { DataRow, DataTable } from '@/components/common/DataTable';

const COLS = '44px 320px minmax(240px,4fr)';

export default function CaseStudiesPage() {
  return (
    <PageMain>
      <PageSection id="cases">
        <PageHeading title="Case studies" intro="Seven problems I worked on, with a PDF write-up of each." />
        <DataTable marginTop="48px" columns={COLS} headers={[{ label: 'No.' }, { label: 'Case study' }, { label: 'Summary' }]}>
          {CASES.map(([name, , , summary, url], i) => (
            <DataRow key={name} columns={COLS} delay={240 + i * 70}>
              <span className="p light" style={css('color:var(--muted-foreground)')}>{String(i + 1).padStart(2, '0')}</span>
              <span style={css('display:flex;flex-direction:column;align-items:flex-start;gap:4px')}>
                {url.startsWith('/')
                  ? <Link href={url} style={css('font-size:14px;white-space:nowrap;line-height:21px;font-weight:300;letter-spacing:-0.011em;text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px;overflow-wrap:anywhere')}>{name}</Link>
                  : <a href={url} target="_blank" rel="noopener" style={css('font-size:14px;white-space:nowrap;line-height:21px;font-weight:300;letter-spacing:-0.011em;text-decoration:underline;text-decoration-color:var(--foreground);text-decoration-thickness:1.5px;text-underline-offset:5px;overflow-wrap:anywhere')}>{name}</a>}
              </span>
              <span className="p light" data-label="Summary">{summary}</span>
            </DataRow>
          ))}
        </DataTable>
      </PageSection>
    </PageMain>
  );
}
