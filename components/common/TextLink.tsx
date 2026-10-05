import type { ReactNode } from 'react';
import Link from 'next/link';
import { css } from '@/lib/css';

const STYLE = 'text-decoration-color:var(--clay)';

/** Body-copy link. Internal paths use client navigation, everything else opens in a new tab. */
export default function TextLink({ href, onClick, children }: { href: string; onClick?: (e: React.MouseEvent) => void; children: ReactNode }) {
  if (href.startsWith('/')) return <Link href={href} style={css(STYLE)}>{children}</Link>;
  if (href.startsWith('mailto:') || href.startsWith('#')) return <a href={href} onClick={onClick} style={css(STYLE)}>{children}</a>;
  return <a href={href} target="_blank" rel="noopener" style={css(STYLE)}>{children}</a>;
}
