'use client';
import { useRef, type ReactNode, type SyntheticEvent } from 'react';
import { css } from '@/lib/css';
import { Icon, IconButton } from '@/components/ui';
import { hide, dlgTf } from '@/lib/chrome';
import { usePresence } from './usePresence';
import { useDialogFocus } from './useDialogFocus';

/** Scrim + dialog surface shared by the Info, Email and Guide dialogs. */
export function Modal({ open, onClose, zIndex, label, titleId, descriptionId, opener, maxWidth, padding, dataR, children }: {
  open: boolean; onClose: () => void; zIndex: number; label: string; titleId: string; descriptionId: string; opener?: HTMLElement | null; maxWidth: number; padding: string; dataR?: string; children: ReactNode;
}) {
  const stop = (e: SyntheticEvent) => e.stopPropagation();
  const { mounted, visible } = usePresence(open, 400);
  const dialogRef = useRef<HTMLDivElement>(null);
  const focus = useDialogFocus(visible, dialogRef, onClose, true, opener, '[aria-label="More"]');
  if (!mounted) return null;

  return (
    <div
      onClick={onClose}
      aria-hidden={!visible}
      inert={!visible}
      style={{ ...css(`position:fixed;inset:0;z-index:${zIndex};display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;background:rgba(12,11,10,.25);transition:opacity var(--dur) var(--ease)`), ...hide(visible) } as any}
    >
      <div
        data-r={dataR}
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        aria-label={titleId ? undefined : label}
        tabIndex={-1}
        onKeyDown={focus.onKeyDown}
        onClick={stop}
        style={{ ...css(`width:100%;max-width:${maxWidth}px;max-height:100%;overflow-y:auto;box-sizing:border-box;padding:${padding};border-radius:16px;background:var(--popover);color:var(--foreground);box-shadow:inset 0 0 0 1px var(--border), var(--shadow-xl);transition:transform var(--dur-slow) var(--ease)`), transform: dlgTf(visible) }}
      >
        {children}
      </div>
    </div>
  );
}

export function ModalHeader({ title, titleId, descriptionId, titleStyle, subtitle, subtitleStyle, closeLabel, onClose }: {
  title: string; titleId: string; descriptionId: string; titleStyle: string; subtitle: ReactNode; subtitleStyle: string; closeLabel: string; onClose: () => void;
}) {
  return (
    <div style={css('display:flex;align-items:flex-start;justify-content:space-between;gap:16px')}>
      <div>
        <h2 id={titleId} style={css(`margin:0;${titleStyle};font-weight:600;letter-spacing:-0.011em`)}>{title}</h2>
        <p id={descriptionId} className="p light" style={css(subtitleStyle)}>{subtitle}</p>
      </div>
      <IconButton size="sm" aria-label={closeLabel} onClick={onClose}><Icon name="LucideX" size={16} /></IconButton>
    </div>
  );
}

/** Ruled two-column row: label tag on the left, content on the right. */
export function ModalRow({ align, children }: { align: 'start' | 'center'; children: ReactNode }) {
  return (
    <div data-r="irow" style={css(`display:grid;grid-template-columns:132px minmax(0,1fr);gap:24px;align-items:${align};padding:24px 0;border-bottom:1px solid var(--border)`)}>
      {children}
    </div>
  );
}
