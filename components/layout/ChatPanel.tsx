'use client';
import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { css } from '@/lib/css';
import { Button, Icon, Kbd, Message } from '@/components/ui';
import BixxieRenderer from '@/components/bixxie/BixxieRenderer';
import { useBixxieChat } from '@/hooks/useBixxieChat';
import { SUGS, SUG_ICON } from '@/lib/chrome';
import { GREETING } from '@/lib/data';
import { useChrome } from './ChromeContext';

/** Full-screen "Ask AI" chat (Bixxie). */
export default function ChatPanel() {
  const { s, setState, closeChat } = useChrome();
  const { messages, draft, setDraft, busy, send, retry, abort } = useBixxieChat();
  const [hideQuickQuestions, setHideQuickQuestions] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const wasOpenRef = useRef(false);
  const pendingFocusRef = useRef<'open' | 'close' | null>(null);
  const focusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const finishFocusTransition = () => {
    const action = pendingFocusRef.current;
    pendingFocusRef.current = null;
    if (focusTimerRef.current) clearTimeout(focusTimerRef.current);
    focusTimerRef.current = null;

    if (action === 'open') {
      inputRef.current?.focus({ preventScroll: true });
    } else if (action === 'close' && openerRef.current?.isConnected) {
      openerRef.current.focus({ preventScroll: true });
    }
  };

  useLayoutEffect(() => {
    if (s.chat && !wasOpenRef.current) {
      const active = document.activeElement;
      openerRef.current = active instanceof HTMLElement && active !== document.body && !panelRef.current?.contains(active)
        ? active
        : null;
      pendingFocusRef.current = 'open';
      focusTimerRef.current = setTimeout(finishFocusTransition, 450);
    } else if (!s.chat && wasOpenRef.current) {
      // The panel becomes aria-hidden in this same render; blur whatever
      // inside it still has focus (e.g. the button just clicked to close)
      // so it isn't left focused under an aria-hidden ancestor until the
      // transition hands focus back to the opener.
      const active = document.activeElement;
      if (active instanceof HTMLElement && panelRef.current?.contains(active)) active.blur();
      abort();
      pendingFocusRef.current = 'close';
      focusTimerRef.current = setTimeout(finishFocusTransition, 450);
    }

    wasOpenRef.current = s.chat;
    return () => {
      if (focusTimerRef.current) clearTimeout(focusTimerRef.current);
    };
  }, [s.chat, abort]);

  useEffect(() => {
    const scroll = endRef.current?.closest<HTMLElement>('[data-r="chat-scroll"]');
    if (scroll) scroll.scrollTop = scroll.scrollHeight;
  }, [messages]);

  return (
    <>
      {/* ---------- chat ---------- */}
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Bixxie"
        aria-hidden={!s.chat}
        onTransitionEnd={(event) => {
          if (event.target === event.currentTarget && event.propertyName === 'transform') finishFocusTransition();
        }}
        style={css(`position:fixed;inset:0;z-index:40;width:100%;max-width:100vw;height:100dvh;box-sizing:border-box;overflow-x:hidden;display:flex;flex-direction:column;background:var(--background);transition:transform var(--dur-slow) var(--ease), visibility var(--dur-slow);transform:${s.chat ? 'none' : 'translateY(100%)'};visibility:${s.chat ? 'visible' : 'hidden'}`)}
      >
        <div style={css('width:100%;max-width:var(--content-width);margin:0 auto;padding:12px var(--page-gutter);box-sizing:border-box;display:flex;align-items:center;gap:12px')}>
          <div style={css('flex:1;padding:10px 0 10px 10px;display:flex;align-items:center')}>
            <Link className="bixxie" href="/" aria-label="Bixxie, home" onClick={closeChat} style={css('display:inline-flex;align-items:center;gap:8px;height:32px;padding:0 12px;border-radius:6px;background:var(--muted);color:var(--foreground);text-decoration:none;cursor:pointer;transition:background var(--dur) var(--ease)')}>
              <span style={css('width:9px;height:9px;flex:none;transform:rotate(45deg);background:var(--clay)')}></span>
              <span style={css('font-size:14px;line-height:20px;font-weight:500;letter-spacing:-.011em')}>Bixxie</span>
            </Link>
          </div>
          <Button variant="outline" size="sm" onClick={() => setState({ info: true })}><span style={css('display:inline-flex;align-items:center;gap:6px')}><Icon name="LucideInfo" size={14} />Info</span></Button>
          <Button variant="outline" size="sm" onClick={closeChat}><span style={css('display:inline-flex;align-items:center;gap:6px')}>Close<span data-r="kbd" style={css('display:inline-flex')}><Kbd>Esc</Kbd></span></span></Button>
        </div>
        <div data-r="chat-scroll" style={css('flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;-webkit-overflow-scrolling:touch')}>
          <div
            data-r="chatp"
            aria-busy={busy}
            style={css('width:100%;max-width:640px;margin:0 auto;padding:24px var(--page-gutter);box-sizing:border-box;display:flex;flex-direction:column;gap:20px;min-height:100%;justify-content:flex-end')}
          >
            <p className="p-lg light" style={css('margin:0;min-height:56px')}>{GREETING}</p>
            {messages.map((message) => (
              <div key={message.id} data-anim="1" style={css('animation:fadeUp .45s var(--ease) both')}>
                {message.role === 'user' ? (
                  <Message align="right">{message.text}</Message>
                ) : (
                  <div aria-live={message.status === 'done' ? 'polite' : 'off'}>
                    {message.spec || message.status === 'streaming' ? (
                      <BixxieRenderer
                        spec={message.spec}
                        onAsk={(question) => { void send(question); }}
                        loading={message.status === 'streaming' && !message.spec}
                      />
                    ) : null}
                    {message.status === 'error' && message.error && (
                      <div style={css(`display:flex;flex-direction:column;align-items:flex-start;gap:8px;margin-top:${message.spec ? '12px' : '0'}`)}>
                        <div role="alert" style={css('width:100%;box-sizing:border-box;padding:12px 14px;border-radius:0;background:var(--muted);color:var(--muted-foreground);font-size:14px;line-height:21px;font-weight:300')}>
                          {message.error}
                        </div>
                        <Button variant="outline" size="sm" onClick={() => { void retry(message.id); }}>Retry</Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div ref={endRef}></div>
          </div>
        </div>
        <div data-r="chat-footer" style={css('flex:none;width:100%;max-width:720px;margin:0 auto;padding:8px var(--page-gutter) 24px;box-sizing:border-box;display:flex;flex-direction:column;gap:12px')}>
          <button className="toggle-q" onClick={() => setHideQuickQuestions((hidden) => !hidden)} style={css('align-self:center;display:inline-flex;align-items:center;gap:6px;border:0;background:transparent;color:var(--muted-foreground);font:inherit;font-size:13px;line-height:20px;font-weight:300;cursor:pointer;padding:4px 8px')}>
            <Icon name={hideQuickQuestions ? 'LucideChevronUp' : 'LucideChevronDown'} size={14} />{hideQuickQuestions ? 'Show quick questions' : 'Hide quick questions'}
          </button>
          {!hideQuickQuestions && (
            <div data-r="sugs" style={css('display:flex;flex-wrap:nowrap;justify-content:center;gap:8px')}>
              {SUGS.map((x, i) => {
                const more = x === 'More';
                const delay = s.chat ? 380 + i * 60 + 'ms' : '0ms';
                return (
                  <button key={x} type="button" onClick={() => { void send(x); }} aria-label={x} disabled={busy}
                    style={css(`display:inline-flex;align-items:center;justify-content:center;gap:${more ? '0' : '8px'};flex:${more ? '0 0 48px' : '1 1 0'};min-width:0;height:48px;padding:0 ${more ? '0' : '10px'};border:1px solid var(--border);border-radius:14px;background:var(--card);color:var(--foreground);font:inherit;font-size:14px;line-height:21px;font-weight:300;letter-spacing:-0.011em;cursor:${busy ? 'default' : 'pointer'};opacity:${s.chat ? 1 : 0};transform:${s.chat ? 'none' : 'translateY(10px)'};transition:background var(--dur) var(--ease),opacity .5s var(--ease) ${delay},transform .5s var(--ease) ${delay}`)}>
                    <span style={css('display:inline-flex;color:var(--muted-foreground)')}><Icon name={SUG_ICON[x]} size={16} /></span>{more ? '' : x}
                  </button>
                );
              })}
            </div>
          )}
          <form onSubmit={(event) => { event.preventDefault(); void send(draft); }} style={css('display:flex;align-items:center;gap:8px;width:100%;height:56px;box-sizing:border-box;padding:0 8px 0 24px;border:1px solid var(--border);border-radius:9999px;background:color-mix(in srgb, var(--foreground) 4%, var(--card))')}>
            <input ref={inputRef} value={draft} maxLength={2000} onChange={(e) => setDraft(e.target.value)} placeholder="Ask about my work…"
              style={css('flex:1;min-width:0;border:0;outline:0;background:transparent;color:var(--foreground);font-family:var(--font-sans);font-size:15px;font-weight:300;letter-spacing:-0.011em')} />
            <button className="send-btn" type="submit" aria-label="Send" disabled={!draft.trim() || busy} style={css(`flex:none;width:40px;height:40px;border:0;border-radius:9999px;background:var(--foreground);color:var(--background);display:inline-flex;align-items:center;justify-content:center;cursor:${!draft.trim() || busy ? 'default' : 'pointer'}`)}>
              <Icon name="LucideArrowUp" size={18} />
            </button>
          </form>
        </div>
      </aside>

    </>
  );
}
