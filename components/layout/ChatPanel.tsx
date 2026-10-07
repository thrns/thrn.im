'use client';
import React, { useEffect, useRef, useState } from 'react';
import { css } from '@/lib/css';
import { Bubble, Button, Icon, IconButton, Kbd, Message } from '@/components/ui';
import BixxieMark from '@/components/bixxie/BixxieMark';
import Marker from '@/components/bixxie/Marker';
import BixxieRenderer from '@/components/bixxie/BixxieRenderer';
import { useBixxieChat } from '@/hooks/useBixxieChat';
import { MORE_QUESTIONS, SUGS, SUG_ICON } from '@/lib/chrome';
import { GREETING } from '@/lib/data';
import { useChrome } from './ChromeContext';
import { usePresence } from './usePresence';
import { useDialogFocus } from './useDialogFocus';

/** "Ask Bixxie" chat: a right-hand side panel over a scrim (full width on small screens). */
export default function ChatPanel() {
  const { s, setState, closeChat, dialogOpeners } = useChrome();
  // The panel is first imported on demand; start closed so the first opening still animates.
  const { mounted, visible } = usePresence(s.chat, 400, false);
  const panelRef = useRef<HTMLElement>(null);
  const focus = useDialogFocus(visible, panelRef, closeChat, true, dialogOpeners.current.chat);
  const { messages, draft, setDraft, busy, send, retry, abort } = useBixxieChat();
  const [showMoreQuestions, setShowMoreQuestions] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!s.chat || !s.queuedQuestion || busy) return;
    const question = s.queuedQuestion;
    setState({ queuedQuestion: null });
    void send(question);
  }, [s.chat, s.queuedQuestion, busy, send, setState]);

  useEffect(() => {
    if (!s.chat) setShowMoreQuestions(false);
    if (!s.chat) abort();
  }, [s.chat, abort]);

  useEffect(() => {
    const scroll = endRef.current?.closest<HTMLElement>('[data-r="chat-scroll"]');
    if (scroll) scroll.scrollTop = scroll.scrollHeight;
  }, [messages]);

  const started = messages.length > 0;
  const aside = 'position:fixed;top:0;right:0;bottom:0;z-index:40;width:min(440px,100vw);max-width:100vw;height:100dvh;box-sizing:border-box;overflow-x:hidden;display:flex;flex-direction:column;background:var(--popover);box-shadow:inset 1px 0 0 var(--border),var(--shadow-xl)';

  if (!mounted) return null;

  return (
    <>
      {/* ---------- scrim ---------- */}
      <div
        aria-hidden="true"
        onClick={closeChat}
        style={css(`position:fixed;inset:0;z-index:39;background:rgba(10,10,10,.25);transition:opacity var(--dur-slow) var(--ease), visibility var(--dur-slow);opacity:${visible ? 1 : 0};visibility:${visible ? 'visible' : 'hidden'};pointer-events:${visible ? 'auto' : 'none'}`)}
      />
      {/* ---------- chat ---------- */}
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="bixxie-dialog-title"
        aria-describedby="bixxie-dialog-description"
        aria-hidden={!visible}
        inert={!visible}
        tabIndex={-1}
        data-r="chat-panel"
        onKeyDown={focus.onKeyDown}
        style={css(`${aside};transition:transform var(--dur-slow) var(--ease), visibility var(--dur-slow);transform:${visible ? 'none' : 'translateX(105%)'};visibility:${visible ? 'visible' : 'hidden'}`)}
      >
        <div style={css('flex:none;display:flex;align-items:center;gap:12px;padding:16px 16px 12px;border-bottom:1px solid var(--border)')}>
          <BixxieMark size={32} />
          <div style={css('flex:1;min-width:0')}>
            <h2 id="bixxie-dialog-title" style={css('margin:0;font-size:14px;line-height:20px;font-weight:500;letter-spacing:-.011em')}>Ask Bixxie</h2>
          </div>
          <Button variant="outline" size="sm" onClick={closeChat} aria-label="Close chat" data-dialog-initial-focus="true"><span style={css('display:inline-flex;align-items:center;gap:6px')}>Close<span data-r="kbd" style={css('display:inline-flex')}><Kbd>Esc</Kbd></span></span></Button>
        </div>
        <div data-r="chat-scroll" style={css('flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;-webkit-overflow-scrolling:touch')}>
          <div data-r="chatp" role="log" aria-label="Conversation" aria-live="off" aria-relevant="additions" aria-atomic="false" aria-busy={busy} style={css('width:100%;padding:16px;box-sizing:border-box;display:flex;flex-direction:column;gap:16px;min-height:100%;justify-content:flex-end')}>
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
                  <div aria-live={message.status === 'done' ? 'polite' : 'off'} aria-atomic="true">
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
                  {...(more ? { 'aria-expanded': showMoreQuestions, 'aria-controls': showMoreQuestions ? 'bixxie-more' : undefined } : {})}
                  onClick={() => { if (more) setShowMoreQuestions((open) => !open); else { setShowMoreQuestions(false); void send(x); } }}
                  style={{ flexDirection: 'row', alignItems: 'center', gap: 6, flex: 'none', whiteSpace: 'nowrap', padding: '6px 12px' }}>
                  <span style={css('display:inline-flex;color:var(--muted-foreground)')}><Icon name={SUG_ICON[x]} size={14} /></span>{more ? '' : x}
                </Bubble>
              );
            })}
          </div>
          <form onSubmit={(event) => { event.preventDefault(); void send(draft); }} style={css('display:flex;align-items:center;gap:8px;width:100%;box-sizing:border-box;padding:6px 6px 6px 16px;border:1px solid var(--border);border-radius:14px;background:var(--background)')}>
            <label className="sr-only" htmlFor="bixxie-message">Message Bixxie</label>
            <input id="bixxie-message" value={draft} maxLength={2000} onChange={(e) => setDraft(e.target.value)} placeholder="Ask about my work…"
              style={css('flex:1;min-width:0;height:36px;border:0;outline:0;background:transparent;color:var(--foreground);font-family:var(--font-sans);font-size:14px;font-weight:400;letter-spacing:-0.011em')} />
            <IconButton className="send-btn" type="submit" aria-label="Send" variant="primary" size="sm" disabled={!draft.trim() || busy} style={{ borderRadius: 9999 }}>
              <Icon name="LucideArrowUp" size={16} />
            </IconButton>
          </form>
          <span id="bixxie-dialog-description" className="p-mini muted" style={css('text-align:center')}>Enter to send. I only know what is on this site.</span>
        </div>
      </aside>
    </>
  );
}
