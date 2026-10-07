'use client';
import React from 'react';
import { useRef } from 'react';
import { css } from '@/lib/css';
import { Button, IconButton, Icon, Switch } from '@/components/ui';
import { Tag } from '@/components/common/Tag';
import { DEFAULT_MO, MOMENTS, hide, dropTf } from '@/lib/chrome';
import { useChrome } from './ChromeContext';
import { usePresence } from './usePresence';
import { useDialogFocus } from './useDialogFocus';

/** Cursor settings popover, anchored under the header actions. */
export default function CursorPanel() {
  const { s, setState, saveCur } = useChrome();
  const { mounted, visible } = usePresence(s.curOpen, 200);
  const panelRef = useRef<HTMLDivElement>(null);
  const focus = useDialogFocus(visible, panelRef, () => setState({ curOpen: false }), false, undefined, '[aria-label="More"]');
  if (!mounted) return null;

  return (
            <span data-r="cur" style={css('display:contents')}>
              <div id="cursor-settings" ref={panelRef} role="dialog" aria-labelledby="cursor-dialog-title" aria-describedby="cursor-dialog-description" aria-hidden={!visible} inert={!visible} tabIndex={-1} onKeyDown={focus.onKeyDown} style={{ ...css('position:absolute;top:calc(100% + 10px);right:0;width:340px;max-width:calc(100vw - 2 * var(--page-gutter));max-height:calc(100vh - 90px);overflow-y:auto;box-sizing:border-box;padding:20px;background:var(--card);border:1px solid var(--border);border-radius:14px;box-shadow:0 12px 32px rgba(0,0,0,.12);z-index:60;transition:opacity var(--dur) var(--ease), transform var(--dur) var(--ease)'), ...hide(visible), transform: dropTf(visible) } as any}>
                <div style={css('display:flex;align-items:center;justify-content:space-between')}>
                  <h2 id="cursor-dialog-title" style={css('margin:0;font-size:20px;line-height:28px;font-weight:600;letter-spacing:-0.011em;color:var(--foreground)')}>Cursor</h2>
                  <IconButton size="sm" data-dialog-initial-focus="true" aria-label="Close cursor settings" onClick={() => setState({ curOpen: false })}><Icon name="LucideX" size={16} /></IconButton>
                </div>
                <p id="cursor-dialog-description" className="light" style={css('font-size:13px;line-height:19px;letter-spacing:-0.011em;margin:6px 0 0')}>A little personality. Just your amount.</p>
                <div style={css('margin-top:16px;border-top:1px solid var(--foreground)')}></div>
                <div style={css('display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:14px')}>
                  <Tag size="sm" hint="O">Custom cursor</Tag>
                  <Switch checked={s.curOn} ariaLabel="Custom cursor" onChange={() => saveCur({ curOn: !s.curOn })} />
                </div>
                <div style={css('margin-top:20px;display:flex')}><Tag size="sm" hint="F">Shape</Tag></div>
                <div style={css(`display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px;opacity:${s.curOn ? 1 : 0.5};transition:opacity 200ms var(--ease)`)}>
                  {([['circle', 'Circle', '50%', 'none'], ['triangle', 'Triangle', '0', 'polygon(0 0,100% 40%,40% 100%)'], ['diamond', 'Diamond', '0', 'polygon(50% 0,100% 50%,50% 100%,0 50%)']] as const).map(([id, label, radius, clip]) => (
                    <button key={id} type="button" onClick={() => saveCur({ curShape: id, curOn: true })} aria-pressed={s.curShape === id}
                      style={css(`display:flex;flex-direction:column;align-items:center;gap:8px;padding:10px 4px 8px;border-radius:10px;cursor:pointer;font:inherit;font-size:13px;line-height:19px;letter-spacing:-0.011em;font-weight:300;color:var(--foreground);background:${s.curShape === id ? 'var(--accent)' : 'transparent'};border:1px solid ${s.curShape === id ? 'var(--foreground)' : 'var(--border)'};transition:background-color 120ms var(--ease)`)}>
                      <span style={css(`display:block;width:12px;height:12px;background:var(--muted-foreground);border-radius:${radius};clip-path:${clip};transition:background-color 200ms var(--ease)`)}></span>{label}
                    </button>
                  ))}
                </div>
                <div style={css('margin-top:20px;display:flex')}><Tag size="sm" hint="L">Little moments</Tag></div>
                <div style={css(`margin-top:8px;opacity:${s.curOn ? 1 : 0.5};transition:opacity 200ms var(--ease)`)}>
                  {MOMENTS.map(([id, label, svg]) => (
                    <div key={id} style={css('display:flex;align-items:center;gap:12px;padding:5px 0')}>
                      <span aria-hidden="true" style={css('width:28px;height:22px;flex:none;color:var(--muted-foreground);display:inline-flex')} dangerouslySetInnerHTML={{ __html: '<svg width="28" height="22" viewBox="0 0 28 22">' + svg + '</svg>' }}></span>
                      <span className="light" style={css('font-size:13px;line-height:19px;letter-spacing:-0.011em;flex:1;color:var(--foreground)')}>{label}</span>
                      <Switch checked={!!s.mo[id]} ariaLabel={label} onChange={() => saveCur({ mo: { ...s.mo, [id]: !s.mo[id] } })} />
                    </div>
                  ))}
                </div>
                <div style={css('display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:20px')}>
                  <span className="light" style={css('font-size:13px;line-height:19px;letter-spacing:-0.011em;')}>Saved for your next visit.</span>
                  <Button variant="primary" size="sm" onClick={() => { localStorage.removeItem('pf-cursor'); setState({ curOn: true, curShape: 'circle', mo: { ...DEFAULT_MO } }); }}>Reset</Button>
                </div>
              </div>
            </span>
  );
}
