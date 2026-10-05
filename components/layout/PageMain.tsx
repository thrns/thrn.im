import type { ReactNode } from 'react';
import { css } from '@/lib/css';
import Footer from './Footer';

/** <main> plus footer: the body of every page. */
export default function PageMain({ children, footerPad }: { children: ReactNode; footerPad?: string }) {
  return (
    <>
      <main style={css('flex:1 0 auto;padding-top:var(--header-height);box-sizing:border-box')}>{children}</main>
      <Footer padTop={footerPad} />
    </>
  );
}
