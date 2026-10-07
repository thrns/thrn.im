'use client';

import { useCallback, useLayoutEffect, useRef, type KeyboardEvent, type RefObject } from 'react';

const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

/** Move focus into an open dialog, keep modal focus inside it, and restore focus on close. */
export function useDialogFocus(
  open: boolean,
  dialogRef: RefObject<HTMLElement | null>,
  onClose: () => void,
  modal = true,
  opener?: HTMLElement | null,
  fallbackSelector?: string,
) {
  const triggerRef = useRef<HTMLElement | null>(null);
  const wasOpenRef = useRef(false);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (open && dialog && !wasOpenRef.current) {
      wasOpenRef.current = true;
      const active = document.activeElement;
      triggerRef.current = opener?.isConnected
        ? opener
        : active instanceof HTMLElement && active !== document.body && !dialog.contains(active)
          ? active
          : null;

      const target = dialog.querySelector<HTMLElement>('[data-dialog-initial-focus]')
        ?? dialog.querySelector<HTMLElement>(FOCUSABLE);
      if (!dialog.inert && dialog.getAttribute('aria-hidden') !== 'true') {
        (target ?? dialog).focus({ preventScroll: true });
      }
    } else if (!open && wasOpenRef.current) {
      wasOpenRef.current = false;
      const active = document.activeElement;
      const hadDialogFocus = active instanceof HTMLElement && !!dialog?.contains(active);
      if (hadDialogFocus) active.blur();
      if (modal || hadDialogFocus) {
        const trigger = triggerRef.current?.isConnected
          ? triggerRef.current
          : fallbackSelector
            ? document.querySelector<HTMLElement>(fallbackSelector)
            : null;
        if (trigger?.getClientRects().length) trigger.focus({ preventScroll: true });
      }
      triggerRef.current = null;
    }

  }, [open, dialogRef, opener, fallbackSelector]);

  const onKeyDown = useCallback((event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      closeRef.current();
      return;
    }

    if (!modal || event.key !== 'Tab') return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const items = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE))
      .filter((item) => item.getAttribute('aria-hidden') !== 'true' && item.getClientRects().length > 0);
    if (!items.length) {
      event.preventDefault();
      dialog.focus({ preventScroll: true });
      return;
    }

    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (event.shiftKey && (active === first || !dialog.contains(active))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (active === last || !dialog.contains(active))) {
      event.preventDefault();
      first.focus();
    }
  }, [dialogRef, modal]);

  return { onKeyDown };
}
