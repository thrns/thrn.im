import type { Metadata } from 'next';
import HomePage from '@/components/pages/HomePage';
import OpenChatOnMount from '@/components/layout/OpenChatOnMount';
import { SITE_URL } from '@/lib/seo';

// Shareable link that lands on the home page with the Ask Bixxie chat already open.
// Not a second home: canonical points at "/", it stays out of the sitemap and search results.
export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
  robots: { index: false, follow: true },
};

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function Page() {
  return (
    <>
      <OpenChatOnMount />
      <HomePage />
    </>
  );
}
