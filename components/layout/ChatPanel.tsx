'use client';
import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { css } from '@/lib/css';
import { Bubble, Button, Icon, IconButton, Kbd, Message } from '@/components/ui';
import BixxieMark from '@/components/bixxie/BixxieMark';
import Marker from '@/components/bixxie/Marker';
import BixxieRenderer from '@/components/bixxie/BixxieRenderer';
import { useBixxieChat } from '@/hooks/useBixxieChat';
import { MORE_QUESTIONS, SUGS, SUG_ICON } from '@/lib/chrome';
import { GREETING } from '@/lib/data';
import { useChrome } from './ChromeContext';

/** "Ask Bixxie" chat: a right-hand side panel over a scrim (full width on small screens). */
export default function ChatPanel() {
  const { s, setState, closeChat } = useChrome();
  const { messages, draft, setDraft, busy, send, retry, abort } = useBixxieChat();
  const [showMoreQuestions, setShowMoreQuestions] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const wasOpenRef = useRef(false);
  const pendingFocusRef = useRef<'open' | 'close' | null>(null);
  const focusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!s.chat || !s.queuedQuestion || busy) return;
    const question = s.queuedQuestion;
    setState({ queuedQuestion: null });
    void send(question);
  }, [s.chat, s.queuedQuestion, busy, send, setState]);

  useEffect(() => {
    if (!s.chat) setShowMoreQuestions(false);
  }, [s.chat]);

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

  const started = messages.length > 0;
  const aside = 'position:fixed;top:0;right:0;bottom:0;z-index:40;width:min(440px,100vw);max-width:100vw;height:100dvh;box-sizing:border-box;overflow-x:hidden;display:flex;flex-direction:column;background:var(--popover);box-shadow:inset 1px 0 0 var(--border),var(--shadow-xl)';

  return (
    <>
      {/* ---------- scrim ---------- */}
      <div
        aria-hidden="true"
        onClick={closeChat}
        style={css(`position:fixed;inset:0;z-index:39;background:rgba(10,10,10,.25);transition:opacity var(--dur-slow) var(--ease), visibility var(--dur-slow);opacity:${s.chat ? 1 : 0};visibility:${s.chat ? 'visible' : 'hidden'}`)}
      />
      {/* ---------- chat ---------- */}
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Bixxie"
        aria-hidden={!s.chat}
        data-r="chat-panel"
        onTransitionEnd={(event) => {
          if (event.target === event.currentTarget && event.propertyName === 'transform') finishFocusTransition();
        }}
        style={css(`${aside};transition:transform var(--dur-slow) var(--ease), visibility var(--dur-slow);transform:${s.chat ? 'none' : 'translateX(105%)'};visibility:${s.chat ? 'visible' : 'hidden'}`)}
      >
        <div style={css('flex:none;display:flex;align-items:center;gap:12px;padding:16px 16px 12px;border-bottom:1px solid var(--border)')}>
          <BixxieMark size={32} />
          <div style={css('flex:1;min-width:0')}>
            <div style={css('font-size:14px;line-height:20px;font-weight:500;letter-spacing:-.011em')}>Ask Bixxie</div>
          </div>
          <Button variant="outline" size="sm" onClick={closeChat} aria-label="Close chat"><span style={css('display:inline-flex;align-items:center;gap:6px')}>Close<span data-r="kbd" style={css('display:inline-flex')}><Kbd>Esc</Kbd></span></span></Button>
        </div>
        <div data-r="chat-scroll" style={css('flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;-webkit-overflow-scrolling:touch')}>
          <div data-r="chatp" aria-busy={busy} style={css('width:100%;padding:16px;box-sizing:border-box;display:flex;flex-direction:column;gap:16px;min-height:100%;justify-content:flex-end')}>
            <Marker>Today</Marker>
            <div style={css('display:flex;align-items:flex-start;gap:8px')}>
              <div style={css('padding-top:8px')}><BixxieMark /></div>
              <Bubble variant="secondary">{GREETING}</Bubble>
            </div>
            {messages.map((message) => (
              <div key={message.id} data-anim="1" style={css('animation:fadeUp .3s var(--ease) both')}>
                {message.role === 'user' ? (
                  <Message align="right">{message.text}</Message>
                ) : (
                  <div aria-live={message.status === 'done' ? 'polite' : 'off'}>
                    {message.spec || message.status === 'streaming' ? (
                      <BixxieRenderer
                        spec={message.spec}
                        onAsk={(question) => { void send(question); }}
                        onNavigate={closeChat}
                        loading={message.status === 'streaming' && !message.spec}
                      />
                    ) : null}
                    {message.status === 'error' && message.error && (
                      <div style={css(`display:flex;align-items:flex-start;gap:8px;margin-top:${message.spec ? '8px' : '0'}`)}>
                        <div style={css('padding-top:8px;opacity:' + (message.spec ? '0' : '1'))}><BixxieMark /></div>
                        <div style={css('display:flex;flex-direction:column;align-items:flex-start;gap:8px;min-width:0')}>
                          <div role="alert" style={css('box-sizing:border-box;padding:10px 14px;border-radius:14px;background:color-mix(in srgb, var(--destructive) 10%, transparent);color:var(--destructive);font-size:14px;line-height:20px')}>
                            {message.error}
                          </div>
                          <Button variant="outline" size="sm" onClick={() => { void retry(message.id); }}>Try again</Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div ref={endRef}></div>
          </div>
        </div>
        <div data-r="chat-footer" style={css('flex:none;padding:8px 16px 16px;box-sizing:border-box;display:flex;flex-direction:column;gap:10px')}>
          {showMoreQuestions && (
            <div id="bixxie-more" role="group" aria-label="More questions" style={css('display:flex;flex-direction:column;align-items:flex-start;gap:6px;max-height:176px;overflow-y:auto')}>
              {MORE_QUESTIONS.map((question) => (
                <Bubble key={question} variant="suggestion" disabled={busy} onClick={() => { setShowMoreQuestions(false); void send(question); }}>
                  {question}
                </Bubble>
              ))}
            </div>
          )}
          <div data-r="sugs" role="group" aria-label="Quick questions" style={css(`display:flex;gap:6px;${started ? 'flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none' : 'flex-wrap:wrap'}`)}>
            {SUGS.map((x) => {
              const more = x === 'More';
              return (
                <Bubble key={x} variant="suggestion" disabled={!more && busy} aria-label={x}
                  {...(more ? { 'aria-expanded': showMoreQuestions, 'aria-controls': 'bixxie-more' } : {})}
                  onClick={() => { if (more) setShowMoreQuestions((open) => !open); else { setShowMoreQuestions(false); void send(x); } }}
                  style={{ flexDirection: 'row', alignItems: 'center', gap: 6, flex: 'none', whiteSpace: 'nowrap', padding: '6px 12px' }}>
                  <span style={css('display:inline-flex;color:var(--muted-foreground)')}><Icon name={SUG_ICON[x]} size={14} /></span>{more ? '' : x}
                </Bubble>
              );
            })}
          </div>
          <form onSubmit={(event) => { event.preventDefault(); void send(draft); }} style={css('display:flex;align-items:center;gap:8px;width:100%;box-sizing:border-box;padding:6px 6px 6px 16px;border:1px solid var(--border);border-radius:14px;background:var(--background)')}>
            <input ref={inputRef} value={draft} maxLength={2000} onChange={(e) => setDraft(e.target.value)} placeholder="Ask about my work…" aria-label="Message Bixxie"
              style={css('flex:1;min-width:0;height:36px;border:0;outline:0;background:transparent;color:var(--foreground);font-family:var(--font-sans);font-size:14px;font-weight:400;letter-spacing:-0.011em')} />
            <IconButton className="send-btn" type="submit" aria-label="Send" variant="primary" size="sm" disabled={!draft.trim() || busy} style={{ borderRadius: 9999 }}>
              <Icon name="LucideArrowUp" size={16} />
            </IconButton>
          </form>
          <span className="p-mini muted" style={css('text-align:center')}>Enter to send. I only know what is on this site.</span>
        </div>
      </aside>
    </>
  );
}
