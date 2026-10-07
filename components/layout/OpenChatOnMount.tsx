'use client';
import { useEffect } from 'react';
import { useChrome } from './ChromeContext';

/** Opens the Ask Bixxie panel when a page loads, for the shareable /chat link. */
export default function OpenChatOnMount() {
  const { openChat } = useChrome();
  useEffect(() => { openChat(); }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
}
