import type { MetadataRoute } from 'next';
import { CASE_STUDIES } from '@/lib/case-studies/meta';
import { absoluteUrl, PAGE_METADATA } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const indexPages = [
    PAGE_METADATA.home,
    PAGE_METADATA.work,
    PAGE_METADATA.projects,
    PAGE_METADATA.caseStudies,
    PAGE_METADATA.stack,
    PAGE_METADATA.resume,
  ];

  return [
    ...indexPages.map(({ canonicalPath }) => ({ url: absoluteUrl(canonicalPath) })),
    ...CASE_STUDIES.map(({ canonicalPath }) => ({ url: absoluteUrl(canonicalPath) })),
  ];
}
