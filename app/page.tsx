import HomePage from '@/components/pages/HomePage';
import JsonLd from '@/components/JsonLd';
import { HOME_STRUCTURED_DATA } from '@/lib/structured-data';
import { SITE_URL } from '@/lib/seo';

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function Page() {
  return (
    <>
      <link rel="canonical" href={SITE_URL} />
      <meta property="og:url" content={SITE_URL} />
      <JsonLd data={HOME_STRUCTURED_DATA} />
      <HomePage />
    </>
  );
}
