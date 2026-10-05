'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { css } from '@/lib/css';
import { Button, Icon, Kbd, Message, Spinner } from '@/components/ui';
import { SUGS, SUG_ICON } from '@/lib/chrome';
import { useChrome } from './ChromeContext';

/** Full-screen "Ask AI" chat (Bixxie). */
export default function ChatPanel() {
  const { s, setState, closeChat, send, greeting, endRef } = useChrome();
  useEffect(() => {
    const el = endRef.current;
    if (el && el.parentElement) el.parentElement.scrollTop = el.parentElement.scrollHeight;
  });
  return (
    <>
      {/* ---------- chat ---------- */}
      <aside style={css(`position:fixed;inset:0;z-index:40;display:flex;flex-direction:column;background:var(--background);transition:transform var(--dur-slow) var(--ease), visibility var(--dur-slow);transform:${s.chat ? 'none' : 'translateY(100%)'};visibility:${s.chat ? 'visible' : 'hidden'}`)}>
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
        <div style={css('flex:1;overflow-y:auto')}>
          <div data-r="chatp" style={css('width:100%;max-width:640px;margin:0 auto;padding:24px var(--page-gutter);box-sizing:border-box;display:flex;flex-direction:column;gap:12px;min-height:100%;justify-content:flex-end')}>
            <p className="p-lg light" style={css('margin:0 0 8px;min-height:56px')}>{greeting}</p>
            {s.msgs.map((m, i) => (
              <div key={i} data-anim="1" style={css('animation:fadeUp .45s var(--ease) both')}>
                {m.align === 'right' ? <Message align="right">{m.text}</Message> : <p className="p-lg light" style={css('margin:8px 0')}>{m.text}</p>}
              </div>
            ))}
            {s.busy && <div data-anim="1" style={css('animation:fadeIn .3s var(--ease) both;padding:8px 0')}><Spinner size={14} /></div>}
            <div ref={endRef}></div>
          </div>
        </div>
        <div style={css('width:100%;max-width:720px;margin:0 auto;padding:8px var(--page-gutter) 24px;box-sizing:border-box;display:flex;flex-direction:column;gap:12px')}>
          <button className="toggle-q" onClick={() => setState((x) => ({ hideQ: !x.hideQ }))} style={css('align-self:center;display:inline-flex;align-items:center;gap:6px;border:0;background:transparent;color:var(--muted-foreground);font:inherit;font-size:13px;line-height:20px;font-weight:300;cursor:pointer;padding:4px 8px')}>
            <Icon name={s.hideQ ? 'LucideChevronUp' : 'LucideChevronDown'} size={14} />{s.hideQ ? 'Show quick questions' : 'Hide quick questions'}
          </button>
          {!s.hideQ && (
            <div data-r="sugs" style={css('display:flex;flex-wrap:nowrap;justify-content:center;gap:8px')}>
              {SUGS.map((x, i) => {
                const more = x === 'More';
                const delay = s.chat ? 380 + i * 60 + 'ms' : '0ms';
                return (
                  <button key={x} onClick={() => send(x)} aria-label={x}
                    style={css(`display:inline-flex;align-items:center;justify-content:center;gap:${more ? '0' : '8px'};flex:${more ? '0 0 48px' : '1 1 0'};min-width:0;height:48px;padding:0 ${more ? '0' : '10px'};border:1px solid var(--border);border-radius:14px;background:var(--card);color:var(--foreground);font:inherit;font-size:14px;line-height:21px;font-weight:300;letter-spacing:-0.011em;cursor:pointer;opacity:${s.chat ? 1 : 0};transform:${s.chat ? 'none' : 'translateY(10px)'};transition:background var(--dur) var(--ease),opacity .5s var(--ease) ${delay},transform .5s var(--ease) ${delay}`)}>
                    <span style={css('display:inline-flex;color:var(--muted-foreground)')}><Icon name={SUG_ICON[x]} size={16} /></span>{more ? '' : x}
                  </button>
                );
              })}
            </div>
          )}
          <div style={css('display:flex;align-items:center;gap:8px;height:56px;padding:0 8px 0 24px;border:1px solid var(--border);border-radius:9999px;background:color-mix(in srgb, var(--foreground) 4%, var(--card))')}>
            <input value={s.draft} onChange={(e) => setState({ draft: e.target.value })} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); send(s.draft); } }} placeholder="Ask about my work…"
              style={css('flex:1;min-width:0;border:0;outline:0;background:transparent;color:var(--foreground);font:inherit;font-size:15px;font-weight:300;letter-spacing:-0.011em')} />
            <button className="send-btn" onClick={() => send(s.draft)} aria-label="Send" style={css('flex:none;width:40px;height:40px;border:0;border-radius:9999px;background:var(--foreground);color:var(--background);display:inline-flex;align-items:center;justify-content:center;cursor:pointer')}>
              <Icon name="LucideArrowUp" size={18} />
            </button>
          </div>
        </div>
      </aside>

    </>
  );
}
