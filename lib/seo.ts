import type { Metadata } from 'next';

export const SITE_ORIGIN = 'https://www.thrn.im';
export const SITE_URL = `${SITE_ORIGIN}/`;
export const SITE_NAME = 'Tharun Pranav Sakthivel';
export const HOME_TITLE = 'Tharun Pranav Sakthivel — AI Engineer';
export const SITE_DESCRIPTION = 'AI engineer in my last year at UBC, building and researching AI systems across recruiting, robotics, creator tools, and course-grounded learning.';
export const OG_IMAGE_PATH = '/opengraph-image';
export const OG_IMAGE_ALT = 'Tharun Pranav Sakthivel — AI Engineer';

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, SITE_ORIGIN).toString();
}

type RouteMetadataInput = {
  title: string;
  description: string;
  canonicalPath: string;
};

export function routeMetadata({ title, description, canonicalPath }: RouteMetadataInput): Metadata {
  const url = absoluteUrl(canonicalPath);
  const imageUrl = absoluteUrl(OG_IMAGE_PATH);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export const PAGE_METADATA = {
  home: {
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    canonicalPath: '/',
  },
  work: {
    title: 'Work — AI Engineering Experience',
    description: 'Ten roles across startups, robotics and applied AI, including work on recruiting systems, AI products, machine learning and software engineering.',
    canonicalPath: '/work',
  },
  projects: {
    title: 'Projects — AI & Software Engineering',
    description: 'Projects built across AI, backend systems, developer tools, payments, research, security and software engineering.',
    canonicalPath: '/projects',
  },
  caseStudies: {
    title: 'Case Studies — AI Engineering',
    description: 'Technical case studies covering AI systems, RAG, recruiting, WebRTC agents, search, ranking, machine learning and production engineering.',
    canonicalPath: '/case-studies',
  },
  stack: {
    title: 'Stack — Tools & Technologies',
    description: 'Tools and technologies I use across AI engineering, software development, infrastructure, research and everyday work.',
    canonicalPath: '/stack',
  },
  resume: {
    title: 'Resume — AI Engineer',
    description: 'Resume for Tharun Pranav Sakthivel, an AI engineer studying Physics, Statistics and Environmental Sciences at UBC.',
    canonicalPath: '/resume',
  },
} satisfies Record<string, RouteMetadataInput>;
