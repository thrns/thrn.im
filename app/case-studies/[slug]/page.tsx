import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudy from '@/components/CaseStudy';
import { SLUGS, TITLES } from '@/lib/case-studies/meta';

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  return { title: TITLES[params.slug] };
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  if (!SLUGS.includes(params.slug)) notFound();
  return <CaseStudy slug={params.slug} />;
}
