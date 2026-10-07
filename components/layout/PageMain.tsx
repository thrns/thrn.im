import type { ReactNode } from 'react';
import { css } from '@/lib/css';
import Footer from './Footer';

/** <main> plus footer: the body of every page. */
export default function PageMain({ children, footerPad }: { children: ReactNode; footerPad?: string }) {
  return (
    <>
      <main id="main-content" tabIndex={-1} style={css('flex:1 0 auto;padding-top:var(--header-height);box-sizing:border-box')}>{children}</main>
      <Footer padTop={footerPad} />
    </>
  );
}
