import Link from 'next/link';
import { Separator } from '@/components/ui';
import { css } from '@/lib/css';

export default function Footer({ padTop = 'var(--space-3xl)' }: { padTop?: string }) {
  return (
    <footer style={css(`width:100%;max-width:var(--content-width);margin:auto auto 0;padding:${padTop} var(--page-gutter) 20px;box-sizing:border-box`)}>
      <Separator />
      <div className="p-sm light" style={css('display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-top:20px')}>
        <span className="muted">© 2026 Tharun Pranav Sakthivel</span>
        <Link href="/">Home</Link>
      </div>
    </footer>
  );
}
