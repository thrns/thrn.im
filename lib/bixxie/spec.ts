import type { Spec } from "@json-render/core";

import { catalog } from "@/lib/bixxie/catalog";

/** Validate generated content before it is allowed to reach the renderer. */
export function validateBixxieSpec(value: unknown): Spec | null {
  if (!value || typeof value !== "object") return null;

  const result = catalog.validate(value);
  if (!result.success || !result.data) return null;

  const spec = result.data as Spec;
  const components = catalog.data.components as Record<string, {
    props: { safeParse: (props: unknown) => { success: boolean } };
  }>;

  // json-render's generic propsOf schema becomes a record when a catalog has
  // multiple components. Reapply each catalog-owned Zod props schema here so
  // enums and strict-object constraints remain enforced for every element.
  for (const element of Object.values(spec.elements ?? {})) {
    const component = components[element.type];
    if (!component || !component.props.safeParse(element.props).success) return null;
  }

  const root = spec.elements?.[spec.root];
  if (root?.type !== "Answer" || Object.keys(spec.elements ?? {}).length === 0) return null;

  const props = root.props as { title?: unknown; intro?: unknown } | undefined;
  const hasTitle = typeof props?.title === "string" && props.title.trim().length > 0;
  const hasIntro = typeof props?.intro === "string" && props.intro.trim().length > 0;
  const hasChildren = (root.children?.length ?? 0) > 0;

  return hasTitle || hasIntro || hasChildren ? spec : null;
}
