import { css } from "@/lib/css";

/** Bixxie's avatar: the clay diamond on a hairline-ringed muted disc. */
export default function BixxieMark({ size = 24 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      style={css(`flex:none;width:${size}px;height:${size}px;border-radius:9999px;background:var(--muted);box-shadow:inset 0 0 0 1px var(--border);display:inline-flex;align-items:center;justify-content:center`)}
    >
      <span style={css("width:8px;height:8px;transform:rotate(45deg);background:var(--clay)")} />
    </span>
  );
}
