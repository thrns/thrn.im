import type { Metadata } from 'next';
import Link from 'next/link';
import { css } from '@/lib/css';
import PageMain from '@/components/layout/PageMain';
import { PageSection } from '@/components/common/PageHeading';

export const metadata: Metadata = {
  title: { absolute: 'Not found' },
  robots: { index: false, follow: false },
  alternates: {},
};

export default function NotFound() {
  return (
    <PageMain>
      <PageSection id="not-found">
        <h1 className="h1" style={css('margin:0')}>Not found</h1>
        <p className="p light" style={css('margin:14px 0 0;max-width:var(--measure)')}>This page could not be found.</p>
        <p className="p light" style={css('margin:24px 0 0')}><Link href="/">Home</Link></p>
      </PageSection>
    </PageMain>
  );
}
