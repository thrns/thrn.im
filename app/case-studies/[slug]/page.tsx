import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudy from '@/components/CaseStudy';
import { SLUGS, TITLES } from '@/lib/case-studies/meta';

export const dynamicParams = false;

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return { title: TITLES[params.slug] };
}

export default function Page({ params }: { params: { slug: string } }) {
  if (!SLUGS.includes(params.slug)) notFound();
  return <CaseStudy slug={params.slug} />;
}
