'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import icons from '@/lib/icon-data';

/* ---------- Icon ---------- */
export function Icon({ name, size, ...rest }: { name: string; size?: number | string } & React.SVGProps<SVGSVGElement>) {
  const d = icons[name];
  if (!d) return null;
  return (
    <svg width={size} height={size} viewBox={d.viewBox} fill="none" dangerouslySetInnerHTML={{ __html: d.body }} {...rest} />
  );
}

/* ---------- Button ---------- */
const SZ: Record<string, any> = {
  default: { p: '6px 10px', r: 10, fs: 14, lh: '20px', g: 6 },
  lg: { p: '8px 10px', r: 10, fs: 14, lh: '20px', g: 6 },
  sm: { p: '4px 10px', r: 8, fs: 14, lh: '20px', g: 6 },
  xs: { p: '3px 8px', r: 8, fs: 12, lh: '16px', g: 4 },
};
const hairline = 'inset 0 0 0 1px var(--border)';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
  size?: 'default' | 'lg' | 'sm' | 'xs';
};

export function Button({ variant = 'primary', size = 'default', disabled = false, children, style, onFocus, onBlur, ...rest }: ButtonProps) {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const s = SZ[size] || SZ.default;
  const V: any = ({
    primary: { background: hover ? 'color-mix(in srgb, var(--primary) 85%, var(--background))' : 'var(--primary)', color: 'var(--primary-foreground)' },
    secondary: { background: 'var(--secondary)', color: 'var(--secondary-foreground)', opacity: hover ? 0.8 : 1 },
    outline: {
      background: hover ? 'transparent' : 'color-mix(in srgb, var(--background) 30%, transparent)',
      color: 'var(--foreground)',
      boxShadow: hairline + (hover ? ', var(--shadow-xs)' : ''),
    },
    ghost: { background: hover ? 'var(--hover-ghost)' : 'transparent', color: 'var(--foreground)' },
    destructive: { background: 'color-mix(in srgb, var(--destructive) ' + (hover ? 20 : 10) + '%, transparent)', color: 'var(--destructive)' },
    link: {
      background: hover ? 'var(--clay-wash)' : 'transparent',
      color: 'var(--foreground)',
      textDecoration: 'underline',
      textDecorationColor: hover ? 'var(--clay)' : 'var(--border)',
      textUnderlineOffset: 3,
    },
  } as any)[variant] || {};
  const rings = [V.boxShadow, focus && 'inset 0 0 0 1px rgba(0,0,0,.2), var(--focus-ring)'].filter(Boolean).join(', ');
  return (
    <button
      {...rest}
      data-primary={variant === 'primary' ? '' : undefined}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={(e) => { setFocus(true); onFocus && onFocus(e); }}
      onBlur={(e) => { setFocus(false); onBlur && onBlur(e); }}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: s.g, padding: s.p, borderRadius: s.r,
        fontFamily: 'var(--font-sans)', fontSize: s.fs, lineHeight: s.lh, fontWeight: 500, whiteSpace: 'nowrap',
        border: 0, outline: 0, cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background var(--dur-fast) var(--ease), opacity var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease)',
        ...V, boxShadow: rings || undefined, ...(disabled ? { opacity: 0.5, pointerEvents: 'none' } : null), ...style,
      }}
    >
      {children}
    </button>
  );
}

/* ---------- IconButton ---------- */
const ISZ: Record<string, { w: number; r: number }> = { default: { w: 32, r: 10 }, lg: { w: 36, r: 10 }, sm: { w: 28, r: 8 }, xs: { w: 22, r: 8 } };

export function IconButton({ variant = 'ghost', size = 'default', disabled = false, children, style, ...rest }:
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'ghost'; size?: 'default' | 'lg' | 'sm' | 'xs' }) {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const s = ISZ[size] || ISZ.default;
  const V: any = ({
    primary: { background: hover ? 'color-mix(in srgb, var(--primary) 85%, var(--background))' : 'var(--primary)', color: 'var(--primary-foreground)' },
    secondary: { background: 'var(--secondary)', color: 'var(--secondary-foreground)', opacity: hover ? 0.8 : 1 },
    outline: { background: 'transparent', color: 'var(--foreground)', boxShadow: 'inset 0 0 0 1px var(--border)' + (hover ? ', var(--shadow-xs)' : '') },
    ghost: { background: hover ? 'var(--hover-ghost)' : 'transparent', color: 'var(--foreground)' },
  } as any)[variant] || {};
  return (
    <button
      {...rest}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: s.w, height: s.w, padding: 0, borderRadius: s.r,
        border: 0, outline: 0, cursor: disabled ? 'not-allowed' : 'pointer', transition: 'background var(--dur-fast) var(--ease)',
        ...V, ...(focus ? { boxShadow: (V.boxShadow ? V.boxShadow + ', ' : '') + 'var(--focus-ring)' } : null),
        ...(disabled ? { opacity: 0.5, pointerEvents: 'none' } : null), ...style,
      }}
    >
      {children}
    </button>
  );
}

/* ---------- Kbd ---------- */
export function Kbd({ children, style, ...rest }: React.HTMLAttributes<HTMLElement>) {
  return (
    <kbd
      {...rest}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '2px 4px', minWidth: 20, borderRadius: 6,
        background: 'var(--muted)', color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: '16px', ...style,
      }}
    >
      {children}
    </kbd>
  );
}

/* ---------- Separator ---------- */
export function Separator({ vertical = false, style, ...rest }: { vertical?: boolean } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="separator"
      {...rest}
      style={vertical ? { width: 1, alignSelf: 'stretch', background: 'var(--border)', ...style } : { height: 1, width: '100%', background: 'var(--border)', ...style }}
    />
  );
}

/* ---------- Spinner ---------- */
export function Spinner({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
  return <Icon name="LucideLoader" size={size} style={{ animation: 'ds-spin 1s linear infinite', color: 'currentColor', ...style }} />;
}

/* ---------- Switch ---------- */
export function Switch({ checked = false, onChange, disabled = false, label, ariaLabel, style }: {
  checked?: boolean; onChange?: (v: boolean) => void; disabled?: boolean; label?: React.ReactNode; ariaLabel?: string; style?: React.CSSProperties;
}) {
  const s = { w: 32, h: 18, t: 16 };
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: '20px', fontWeight: 500, color: 'var(--foreground)', ...style }}>
      <button
        type="button" role="switch" aria-checked={checked} aria-label={ariaLabel} disabled={disabled} onClick={() => onChange && onChange(!checked)}
        style={{
          position: 'relative', width: s.w, height: s.h, padding: 0, border: 0, outline: 0, flexShrink: 0, borderRadius: 999, cursor: 'inherit',
          background: checked ? 'var(--primary)' : 'linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)), var(--secondary)',
          transition: 'background var(--dur-fast) var(--ease)',
        }}
      >
        <span style={{ position: 'absolute', top: (s.h - s.t) / 2, left: checked ? s.w - s.t - 1 : 1, width: s.t, height: s.t, borderRadius: 999, background: checked ? 'var(--primary-foreground)' : '#fff', transition: 'left var(--dur-fast) var(--ease)' }} />
      </button>
      {label}
    </label>
  );
}

/* ---------- Bubble / Message ---------- */
const BV: Record<string, React.CSSProperties> = {
  primary: { background: 'var(--bubble-primary)', color: 'var(--bubble-primary-fg)' },
  secondary: { background: 'var(--bubble-secondary)', color: 'var(--bubble-secondary-fg)' },
  suggestion: { background: 'var(--background)', color: 'var(--foreground)', outline: '1px dashed var(--border)', outlineOffset: -1 },
};

/** Chat bubble. `suggestion` is the dashed-outline tappable chip; pass `onClick` to render it as a button. */
export function Bubble({ variant = 'secondary', onClick, disabled, children, style, ...rest }: {
  variant?: 'primary' | 'secondary' | 'suggestion'; onClick?: () => void; disabled?: boolean; children?: React.ReactNode; style?: React.CSSProperties;
} & Omit<React.HTMLAttributes<HTMLElement>, 'onClick' | 'style'>) {
  const base: React.CSSProperties = {
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '100%', boxSizing: 'border-box', padding: '10px 14px', borderRadius: 14,
    border: 0, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: '20px', fontWeight: 400, textAlign: 'left', overflowWrap: 'anywhere',
    ...BV[variant], ...style,
  };
  if (onClick) {
    return <button type="button" className="bx-chip" onClick={onClick} disabled={disabled} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)} style={{ ...base, cursor: disabled ? 'default' : 'pointer', opacity: disabled ? .5 : 1 }}>{children}</button>;
  }
  return <div {...rest} style={base}>{children}</div>;
}

export function Message({ align = 'left', children }: { align?: 'left' | 'right'; children?: React.ReactNode }) {
  const right = align === 'right';
  return (
    <div style={{ display: 'flex', flexDirection: right ? 'row-reverse' : 'row', alignItems: 'flex-end', gap: 8, fontFamily: 'var(--font-sans)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: right ? 'flex-end' : 'flex-start', minWidth: 0 }}>
        <div
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: 334, boxSizing: 'border-box', padding: '10px 14px', borderRadius: 14,
            border: 0, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: '20px', fontWeight: 400, textAlign: 'left', cursor: 'default',
            transition: 'opacity var(--dur-fast) var(--ease)', ...(right ? BV.primary : BV.secondary),
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---------- NavBar ---------- */
export type NavItemData = { hint?: string; label: string; href?: string; active?: boolean };

export function NavBar({ items = [], brand }: { items?: NavItemData[]; brand?: { href?: string; label?: string } }) {
  return (
    <nav aria-label="Primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: 10, fontFamily: 'var(--font-sans)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        {brand && (
          <Link href={brand.href || '/'} aria-label={brand.label || 'Home'} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: 6, background: 'var(--muted)', textDecoration: 'none' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--clay)' }} />
          </Link>
        )}
        {items.map((it) => <NavItem key={it.label} {...it} />)}
      </div>
    </nav>
  );
}

function NavItem({ hint, label, href = '#', active }: NavItemData) {
  const [h, setH] = useState(false);
  return (
    <Link
      href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} aria-current={active ? 'page' : undefined}
      style={{
        display: 'inline-flex', gap: 6, padding: '4px 8px', borderRadius: 6, background: h || active ? 'var(--clay-wash)' : 'var(--muted)',
        color: 'var(--foreground)', textDecoration: 'none', fontSize: 14, lineHeight: '20px', fontWeight: active ? 500 : 400,
        letterSpacing: '-.011em', transition: 'background var(--dur-fast) var(--ease)',
      }}
    >
      {hint && <span className="mono" style={{ color: h || active ? 'var(--clay)' : 'var(--muted-foreground)' }}>[{hint}]</span>}
      {label}
    </Link>
  );
}
