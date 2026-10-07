import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudy from '@/components/CaseStudy';
import JsonLd from '@/components/JsonLd';
import { CASE_STUDIES, getCaseStudyMetadata, SLUGS } from '@/lib/case-studies/meta';
import { caseStudyBreadcrumbData } from '@/lib/structured-data';
import { routeMetadata } from '@/lib/seo';

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export function generateStaticParams() {
  return CASE_STUDIES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const study = getCaseStudyMetadata(params.slug);
  if (!study) notFound();
  return routeMetadata(study);
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  if (!SLUGS.includes(params.slug)) notFound();
  const study = getCaseStudyMetadata(params.slug);
  if (!study) notFound();
  return (
    <>
      <JsonLd data={caseStudyBreadcrumbData(study.title, study.canonicalPath)} />
      <CaseStudy slug={params.slug} />
    </>
  );
}
