import { css } from '@/lib/css';
import { PROJECTS } from '@/lib/data';
import PageMain from '@/components/layout/PageMain';
import PageHeading, { PageSection } from '@/components/common/PageHeading';
import { DataRow, DataTable, RowLink } from '@/components/common/DataTable';
import StatusPill from '@/components/common/StatusPill';

const COLS = 'minmax(160px,1.4fr) minmax(240px,5fr) 104px';
const HEADERS = [{ label: 'Name' }, { label: 'Notes' }, { label: 'Status', end: true }];

export default function ProjectsPage() {
  return (
    <PageMain>
      <PageSection id="projects">
        <PageHeading title="Projects" intro="Ten things I've built, with links to each repository." sorted />
        <DataTable marginTop="48px" columns={COLS} caption="Projects" headers={HEADERS}>
          {PROJECTS.map((p, i) => (
            <DataRow key={p.name} columns={COLS} headers={HEADERS} delay={240 + i * 90}>
              <RowLink href={p.url}>{p.name}</RowLink>
              <span className="p light" data-label="Notes">{p.what}</span>
              <StatusPill status={p.status} pulse={p.status === 'Active'} />
            </DataRow>
          ))}
        </DataTable>
      </PageSection>
    </PageMain>
  );
}
