import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tharun Pranav Sakthivel',
  description: 'AI engineer portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
