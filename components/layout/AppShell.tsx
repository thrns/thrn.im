'use client';
import type { ReactNode } from 'react';
import { css } from '@/lib/css';
import { useCustomCursor } from '@/hooks/useCustomCursor';
import { ChromeProvider } from './ChromeContext';
import Header from './Header';
import ChatPanel from './ChatPanel';
import { EmailDialog, GuideDialog, InfoDialog } from './Dialogs';

function Frame({ children }: { children: ReactNode }) {
  useCustomCursor();
  return (
    <div id="top" style={css('min-height:100vh;display:flex;flex-direction:column;background:var(--background);color:var(--foreground);font-family:var(--font-sans);transition:background-color .35s var(--ease),color .35s var(--ease)')}>
      <Header />
      {children}
      <ChatPanel />
      <InfoDialog />
      <EmailDialog />
      <GuideDialog />
    </div>
  );
}

/** Persistent chrome: header, Ask AI chat, dialogs, shortcuts, theme and cursor. Lives in the root layout so state survives page changes. */
export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <ChromeProvider>
      <Frame>{children}</Frame>
    </ChromeProvider>
  );
}
