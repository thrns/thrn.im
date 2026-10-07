import type { ReactNode } from "react";

import { css } from "@/lib/css";

/** Ruled centered label between chat groups, e.g. "Today". */
export default function Marker({ children }: { children: ReactNode }) {
  return (
    <div style={css("display:flex;align-items:center;gap:8px;height:20px;font-size:12px;line-height:16px;color:var(--muted-foreground)")}>
      <span style={css("flex:1;height:1px;background:var(--border)")} />
      <span>{children}</span>
      <span style={css("flex:1;height:1px;background:var(--border)")} />
    </div>
  );
}
