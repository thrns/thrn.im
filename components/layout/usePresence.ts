'use client';

import { useLayoutEffect, useRef, useState } from 'react';

/** Keep an animated surface mounted through its exit transition, but omit it while closed. */
export function usePresence(open: boolean, durationMs: number, initiallyOpen = open) {
  const [mounted, setMounted] = useState(initiallyOpen);
  const [visible, setVisible] = useState(initiallyOpen);
  const mountedRef = useRef(initiallyOpen);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const frameRef = useRef<number[]>([]);

  useLayoutEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
    frameRef.current.forEach(cancelAnimationFrame);
    frameRef.current = [];

    if (open) {
      if (!mountedRef.current) {
        mountedRef.current = true;
        setMounted(true);
        setVisible(false);

        // Let the closed position paint before changing to the open position.
        const first = requestAnimationFrame(() => {
          const second = requestAnimationFrame(() => {
            frameRef.current = [];
            setVisible(true);
          });
          frameRef.current = [second];
        });
        frameRef.current = [first];
      } else {
        setVisible(true);
      }
    } else if (mountedRef.current) {
      setVisible(false);
      const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      timerRef.current = setTimeout(() => {
        timerRef.current = null;
        mountedRef.current = false;
        setMounted(false);
      }, reducedMotion ? 20 : durationMs);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = null;
      frameRef.current.forEach(cancelAnimationFrame);
      frameRef.current = [];
    };
  }, [open, durationMs]);

  return { mounted, visible };
}
