'use client';
import { useEffect, useState, type ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { css } from '@/lib/css';
import { useCustomCursor } from '@/hooks/useCustomCursor';
import { ChromeProvider, useChrome } from './ChromeContext';
import Header from './Header';
import { EmailDialog, GuideDialog } from './Dialogs';

const loadChatPanel = () => import('./ChatPanel');
const ChatPanel = dynamic(loadChatPanel, { ssr: false });

function LazyChatPanel() {
  const { s } = useChrome();
  const [hasOpened, setHasOpened] = useState(false);

  // Load and mount the (still closed) panel once the page is idle, so the first open animates exactly like later ones
  // instead of paying the chunk load and mount cost mid-transition.
  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1200));
    const cancel = window.cancelIdleCallback ?? window.clearTimeout;
    const handle = idle(() => { void loadChatPanel().then(() => setHasOpened(true)); });
    return () => cancel(handle);
  }, []);

  useEffect(() => {
    if (s.chat) setHasOpened(true);
  }, [s.chat]);

  useEffect(() => {
    if (!s.chat) return;
    let frame = 0;
    let attempts = 0;
    const focusWhenReady = () => {
      attempts += 1;
      const dialog = document.querySelector<HTMLElement>('[data-r="chat-panel"]');
      const target = dialog?.querySelector<HTMLElement>('[data-dialog-initial-focus]');
      if (dialog && target && !dialog.inert && dialog.getAttribute('aria-hidden') !== 'true' && getComputedStyle(dialog).visibility !== 'hidden') {
        target.focus({ preventScroll: true });
        return;
      }
      if (attempts < 120) frame = requestAnimationFrame(focusWhenReady);
    };
    frame = requestAnimationFrame(focusWhenReady);
    return () => cancelAnimationFrame(frame);
  }, [s.chat]);

  return hasOpened || s.chat ? <ChatPanel /> : null;
}

function Frame({ children }: { children: ReactNode }) {
  useCustomCursor();
  const { s } = useChrome();
  const modalOpen = s.chat || s.email || s.guide || s.info;
  return (
    <div id="top" style={css('min-height:100vh;display:flex;flex-direction:column;background:var(--background);color:var(--foreground);font-family:var(--font-sans);transition:background-color .35s var(--ease),color .35s var(--ease)')}>
      <div id="site-content" inert={modalOpen} style={css('display:flex;flex:1 0 auto;flex-direction:column;min-height:100vh')}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header />
        {children}
      </div>
      <LazyChatPanel />
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
