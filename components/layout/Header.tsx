'use client';
import React from 'react';
import Link from 'next/link';
import { css } from '@/lib/css';
import { Button, IconButton, Icon, Kbd, NavBar } from '@/components/ui';
import { NAV, PATH, hide, dropTf } from '@/lib/chrome';
import { useChrome } from './ChromeContext';
import CursorPanel from './CursorPanel';

export default function Header() {
  const { s, setState, openChat, setDark, navItems, active } = useChrome();
  return (
    <>
      {/* ---------- header ---------- */}
      <header data-anim="1" style={css('animation:fadeIn .6s var(--ease) 0ms both;position:fixed;top:0;left:0;right:0;z-index:20;background:color-mix(in srgb, var(--background) 88%, transparent);backdrop-filter:blur(8px)')}>
        <div data-r="hdr" style={css('max-width:var(--content-width);margin:0 auto;padding:0 var(--page-gutter);display:flex;align-items:center;justify-content:space-between;gap:12px')}>
          <NavBar items={navItems} brand={{ href: '/' }} />
          <button
            data-r="mbtn" onClick={() => setState((x) => ({ menu: !x.menu }))} aria-expanded={s.menu} aria-label="Collection"
            style={css(`display:none;align-items:center;gap:6px;padding:4px 8px;border:0;border-radius:0;background:${s.menu ? 'var(--clay-wash)' : 'var(--muted)'};color:var(--foreground);font:inherit;font-size:14px;line-height:20px;letter-spacing:-.011em;cursor:pointer`)}
          >Collection</button>
          <div data-r="acts" style={css('display:flex;align-items:center;gap:8px;position:relative')}>
            <Button variant="outline" size="sm" onClick={openChat}>
              <span style={css('display:inline-flex;align-items:center;gap:6px')}>Ask AI<span data-r="kbd" style={css('display:inline-flex;gap:2px')}><Kbd>/</Kbd></span></span>
            </Button>
            <div data-r="more" style={css('position:relative;display:inline-flex')}>
              <IconButton size="sm" aria-label="More" title="More" aria-expanded={s.moreOpen} onClick={() => setState((x) => ({ moreOpen: !x.moreOpen }))}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="1.6"></circle><circle cx="12" cy="12" r="1.6"></circle><circle cx="12" cy="19" r="1.6"></circle></svg>
              </IconButton>
              <div role="menu" style={{ ...css('position:absolute;top:calc(100% + 6px);left:-4px;right:-4px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:4px;padding:4px;background:var(--card);border-radius:10px;box-shadow:inset 0 0 0 1px var(--border),0 12px 32px rgba(0,0,0,.12);z-index:60;transition:opacity var(--dur-fade) var(--ease), transform var(--dur-fade) var(--ease)'), ...hide(s.moreOpen), transform: dropTf(s.moreOpen) } as any}>
                {(() => {
                  const themeTip = s.dark ? 'Dark mode on (D) · switch to light' : 'Light mode on (D) · switch to dark';
                  return (
                    <span data-tip={themeTip} style={css('display:inline-flex')}>
                      <IconButton size="sm" aria-label={themeTip} onClick={() => setDark(!s.dark)}><Icon name={s.dark ? 'LucideSun' : 'LucideMoon'} size={16} /></IconButton>
                    </span>
                  );
                })()}
                <span data-tip="Cursor settings (C)" style={css('display:inline-flex')}>
                  <IconButton size="sm" aria-label="Cursor settings (C)" aria-expanded={s.curOpen} onClick={() => setState((x) => ({ curOpen: !x.curOpen, moreOpen: false }))}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 3.5l14 6.2-6 2.1-2.1 6z"></path></svg>
                  </IconButton>
                </span>
                <span data-tip="Keyboard shortcuts (?)" style={css('display:inline-flex')}>
                  <IconButton size="sm" aria-label="Keyboard shortcuts (?)" onClick={() => setState({ guide: true, moreOpen: false })}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9.2 9a3 3 0 0 1 5.8 1c0 2-3 2.6-3 4.5"></path><path d="M12 18.5v.01"></path></svg>
                  </IconButton>
                </span>
              </div>
            </div>

            <CursorPanel />
          </div>
        </div>
        {s.menu && (
          <nav data-r="mpanel" aria-label="Collection" style={css('position:absolute;top:100%;left:0;right:0;box-sizing:border-box;padding:6px var(--page-gutter) 16px;background:var(--background);border-bottom:1px solid var(--border);display:flex;flex-direction:column;align-items:flex-start;gap:8px;animation:fadeIn .2s var(--ease) both')}>
            {NAV.map(([hint, label, id]) => (
              <Link key={id} href={PATH[id]} onClick={() => setState({ menu: false })} aria-current={active === id ? 'page' : undefined}
                style={css(`display:inline-flex;gap:6px;padding:4px 8px;border-radius:0;background:${active === id ? 'var(--clay-wash)' : 'var(--muted)'};color:var(--foreground);text-decoration:none;font-size:14px;line-height:20px;font-weight:${active === id ? 500 : 400};letter-spacing:-.011em`)}>
                <span style={css('color:var(--muted-foreground)')}>[{hint}]</span>{label}
              </Link>
            ))}
          </nav>
        )}
      </header>

    </>
  );
}
