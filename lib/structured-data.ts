import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/seo';

const PERSON_ID = `${SITE_URL}#person`;
const WEBSITE_ID = `${SITE_URL}#website`;

export const HOME_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: 'TP',
      publisher: { '@id': PERSON_ID },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}#profilepage`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: SITE_NAME,
        alternateName: 'TP',
        url: SITE_URL,
        jobTitle: 'AI Engineer',
        sameAs: [
          'https://www.linkedin.com/in/thrn',
          'https://github.com/thrns',
        ],
      },
    },
  ],
};

export function caseStudyBreadcrumbData(title: string, canonicalPath: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Case studies', item: absoluteUrl('/case-studies') },
      { '@type': 'ListItem', position: 3, name: title, item: absoluteUrl(canonicalPath) },
    ],
  };
}
