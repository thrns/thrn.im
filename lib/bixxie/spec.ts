import { validateSpec, type Spec } from "@json-render/core";
import { z } from "zod";

import { catalog } from "@/lib/bixxie/catalog";

export type BixxieSpecFailureKind =
  | "invalid_spec_shape"
  | "catalog_schema_rejected"
  | "unknown_component"
  | "invalid_component_props"
  | "dangling_child_reference"
  | "root_not_answer"
  | "empty_answer";

export type BixxieSpecInspection =
  | { spec: Spec; failureKind?: never; detail?: never }
  | { spec: null; failureKind: BixxieSpecFailureKind; detail?: string };

/**
 * Reads a numeric Zod check (e.g. "max_length") off a schema. Zod v4 exposes
 * a convenience `.maxLength` getter on string schemas but not on array
 * schemas, so array bounds have to be read from the internal check list
 * directly — this covers both.
 */
function readNumericCheck(schema: z.ZodTypeAny, checkName: string): number | undefined {
  const checks = (schema as unknown as { _zod?: { def?: { checks?: unknown } } })._zod?.def?.checks;
  if (!Array.isArray(checks)) return undefined;
  for (const check of checks) {
    const def = (check as { _zod?: { def?: Record<string, unknown> } })._zod?.def;
    if (!def) continue;
    for (const key of ["maximum", "minimum", "value"]) {
      if (def.check === checkName && typeof def[key] === "number") return def[key] as number;
    }
  }
  return undefined;
}

/**
 * Smooths over habits the model reliably has, recursing into nested
 * arrays/objects (e.g. each item of Metrics.items) because these habits show
 * up there too, not just at a component's top-level props. None of this
 * invents or guesses content — it only trims/drops what the model already
 * sent so one bad or oversized detail doesn't sink an otherwise-good answer,
 * the same way the component renderers already look up each referenced name
 * and silently skip the ones they can't find:
 * - Nullable catalog props are still required keys under each component's
 *   strict() schema, but the model reliably omits them instead of writing
 *   null — backfill any missing key whose field actually accepts null. An
 *   extra key the model wasn't supposed to add (e.g. an injected "url") is
 *   deliberately left alone here so strict() still rejects it downstream —
 *   see the "rejects generated URLs" test in catalog.test.ts.
 * - The model occasionally drifts a few characters past a string field's
 *   max length (especially under instructions to keep prose short but
 *   still say something real) — clamp to the schema's max instead of
 *   rejecting an otherwise-valid answer over a minor overage.
 * - A name array (Stack.names, Projects.names, …) is a closed enum of
 *   app-owned data, but the model sometimes adds a plausible-sounding name
 *   that isn't in the canonical list (e.g. a real technology TP uses that
 *   just isn't in the portfolio's Stack entries), or adds more items than
 *   the array's max allows. Drop a still-invalid item and trim past the max
 *   instead of rejecting the entire array over it.
 */
function normalizePropsDeep(schema: z.ZodTypeAny, value: unknown): unknown {
  if (schema instanceof z.ZodNullable || schema instanceof z.ZodOptional) {
    return normalizePropsDeep(schema.unwrap() as z.ZodTypeAny, value);
  }

  if (schema instanceof z.ZodString) {
    const maxLength = schema.maxLength ?? readNumericCheck(schema, "max_length");
    if (typeof value === "string" && typeof maxLength === "number" && value.length > maxLength) {
      return value.slice(0, maxLength);
    }
    return value;
  }

  if (schema instanceof z.ZodObject) {
    if (!value || typeof value !== "object" || Array.isArray(value)) return value;

    // Deliberately keep any key the model added beyond the schema's shape
    // (rather than stripping it): an unexpected extra property — most
    // notably an injected "url" — is a signal worth failing loudly on, not
    // smoothing over. strict() still rejects it a few lines up the call
    // stack in inspectBixxieSpec, by design (see catalog.test.ts).
    const shape = schema.shape as Record<string, z.ZodTypeAny>;
    const result: Record<string, unknown> = { ...(value as Record<string, unknown>) };
    for (const key of Object.keys(shape)) {
      if (!(key in result)) {
        if (shape[key].safeParse(null).success) result[key] = null;
        continue;
      }
      result[key] = normalizePropsDeep(shape[key], result[key]);
    }
    return result;
  }

  if (schema instanceof z.ZodArray) {
    if (!Array.isArray(value)) return value;
    const element = schema.element as z.ZodTypeAny;
    const maxLength = readNumericCheck(schema, "max_length");
    const normalized = value
      .map((item) => normalizePropsDeep(element, item))
      .filter((item) => element.safeParse(item).success);
    return typeof maxLength === "number" ? normalized.slice(0, maxLength) : normalized;
  }

  return value;
}

function normalizeComponentProps(type: unknown, props: unknown): { value: unknown; changed: boolean } {
  if (typeof type !== "string" || !props || typeof props !== "object" || Array.isArray(props)) {
    return { value: props, changed: false };
  }

  const components = catalog.data.components as Record<string, { props?: z.ZodTypeAny }>;
  const componentSchema = components[type]?.props;
  if (!componentSchema) return { value: props, changed: false };

  const value = normalizePropsDeep(componentSchema, props);
  const changed = JSON.stringify(value) !== JSON.stringify(props);
  return { value, changed };
}

/**
 * The model occasionally writes a component's own fields directly on the
 * element instead of nested under props — e.g.
 * `{type:"FollowUps", items:[...]}` instead of
 * `{type:"FollowUps", props:{items:[...]}}` — most often on the last
 * element of a response. Move any such sibling key that matches one of the
 * component's own schema fields into props before validating, so the
 * answer isn't lost over a placement slip the model otherwise got right.
 */
function backfillPropsFromElementSiblings(type: unknown, elementRecord: Record<string, unknown>): unknown {
  if (typeof type !== "string") return elementRecord.props;

  const components = catalog.data.components as Record<string, { props?: z.ZodTypeAny }>;
  const componentSchema = components[type]?.props;
  if (!(componentSchema instanceof z.ZodObject)) return elementRecord.props;

  const existingProps = elementRecord.props && typeof elementRecord.props === "object" && !Array.isArray(elementRecord.props)
    ? { ...(elementRecord.props as Record<string, unknown>) }
    : {};

  let changed = false;
  for (const fieldKey of Object.keys(componentSchema.shape as Record<string, z.ZodTypeAny>)) {
    if (fieldKey === "type" || fieldKey === "props" || fieldKey === "children") continue;
    if (fieldKey in existingProps || !(fieldKey in elementRecord)) continue;
    existingProps[fieldKey] = elementRecord[fieldKey];
    changed = true;
  }

  return changed ? existingProps : elementRecord.props;
}

function normalizeSpec(value: object): unknown {
  const candidate = value as { elements?: unknown };
  if (!candidate.elements || typeof candidate.elements !== "object" || Array.isArray(candidate.elements)) {
    return value;
  }

  let changed = false;
  const elements = Object.fromEntries(
    Object.entries(candidate.elements).map(([key, element]) => {
      if (!element || typeof element !== "object" || Array.isArray(element)) {
        return [key, element];
      }

      const elementRecord = element as Record<string, unknown> & { type?: unknown; props?: unknown; children?: unknown };
      const backfilledProps = backfillPropsFromElementSiblings(elementRecord.type, elementRecord);
      const { value: props } = normalizeComponentProps(elementRecord.type, backfilledProps);
      // Some SpecStream examples omit children on leaf nodes. Normalize that
      // equivalent leaf form to the explicit empty array required by schema.
      const children = "children" in elementRecord ? elementRecord.children : [];

      // Rebuild to exactly {type, props, children}: the model occasionally
      // leaks an extra stray key onto the element (component fields written
      // directly on the element rather than under props, or a hallucinated
      // key like "id"), and the catalog's element schema is strict about
      // element shape, so any leftover key would otherwise sink an entire,
      // otherwise-valid response.
      const rebuilt = { type: elementRecord.type, props, children };
      if (JSON.stringify(rebuilt) === JSON.stringify(element)) return [key, element];

      changed = true;
      return [key, rebuilt];
    }),
  );

  return changed ? { ...value, elements } : value;
}

/** Validate generated content before it is allowed to reach the renderer. */
export function inspectBixxieSpec(value: unknown): BixxieSpecInspection {
  if (!value || typeof value !== "object") return { spec: null, failureKind: "invalid_spec_shape" };

  // Check component names before the broad json-render schema so an invented
  // type is reported as such instead of being hidden inside a generic Zod error.
  const candidate = value as { elements?: unknown };
  if (candidate.elements && typeof candidate.elements === "object" && !Array.isArray(candidate.elements)) {
    const allowedComponents = catalog.componentNames;
    for (const element of Object.values(candidate.elements)) {
      if (
        element && typeof element === "object" &&
        "type" in element && typeof element.type === "string" &&
        !allowedComponents.includes(element.type)
      ) {
        return { spec: null, failureKind: "unknown_component" };
      }
    }
  }

  const result = catalog.validate(normalizeSpec(value));
  if (!result.success || !result.data) return { spec: null, failureKind: "catalog_schema_rejected" };

  const spec = result.data as Spec;
  const components = catalog.data.components as Record<string, { props: z.ZodTypeAny }>;

  // json-render's generic propsOf schema becomes a record when a catalog has
  // multiple components. Reapply each catalog-owned Zod props schema here so
  // enums and strict-object constraints remain enforced for every element.
  for (const element of Object.values(spec.elements ?? {})) {
    const component = components[element.type];
    if (!component) return { spec: null, failureKind: "unknown_component" };
    const parsed = component.props.safeParse(element.props);
    if (!parsed.success) {
      const issues = parsed.error.issues
        .map((issue) => `${issue.path.join(".") || "<root>"}: ${issue.message}`)
        .join("; ");
      return { spec: null, failureKind: "invalid_component_props", detail: `${element.type} — ${issues}` };
    }
  }

  // The catalog's Zod schema only checks each element's own shape; it does not
  // confirm every referenced child key actually has an entry in elements. A
  // dangling reference (e.g. an Answer child key with no matching element)
  // would otherwise sail through here and only surface as a silent
  // "Missing element" warning from the renderer.
  if (!validateSpec(spec).valid) {
    return { spec: null, failureKind: "dangling_child_reference" };
  }

  const root = spec.elements?.[spec.root];
  if (root?.type !== "Answer" || Object.keys(spec.elements ?? {}).length === 0) {
    return { spec: null, failureKind: "root_not_answer" };
  }

  const props = root.props as { text?: unknown } | undefined;
  const hasText = typeof props?.text === "string" && props.text.trim().length > 0;
  const hasChildren = (root.children?.length ?? 0) > 0;

  return hasText || hasChildren
    ? { spec }
    : { spec: null, failureKind: "empty_answer" };
}

export function validateBixxieSpec(value: unknown): Spec | null {
  return inspectBixxieSpec(value).spec;
}

/**
 * A short plain-text gist of a completed answer (the root Answer's text), for sending back as light conversation history. Not a transcript
 * of the full structured output — just enough for the model to know what it
 * already said, e.g. to avoid re-greeting on a follow-up question.
 */
export function summarizeBixxieSpec(spec: Spec): string {
  const root = spec.elements?.[spec.root] as { props?: { text?: unknown } } | undefined;

  return typeof root?.props?.text === "string" ? root.props.text.trim() : "";
}

type RenderableElement = { type: string; props: unknown; children: string[] };

/**
 * Best-effort progressive view of an in-progress stream: unlike
 * inspectBixxieSpec (which rejects the whole tree if any single element is
 * still incomplete), this renders every element that is individually
 * complete and valid right now, and simply omits elements that are still
 * streaming in (and any reference to them) rather than hiding everything
 * until the full Answer is done. Intended only for intermediate stream
 * chunks; the final chunk should still be checked with inspectBixxieSpec.
 */
export function extractRenderablePrefix(value: unknown): Spec | null {
  if (!value || typeof value !== "object") return null;

  const candidate = value as { root?: unknown; elements?: unknown };
  if (typeof candidate.root !== "string") return null;
  if (!candidate.elements || typeof candidate.elements !== "object" || Array.isArray(candidate.elements)) return null;

  const allowedComponents = catalog.componentNames;
  const components = catalog.data.components as Record<string, {
    props: { safeParse: (props: unknown) => { success: boolean } };
  }>;

  const complete: Record<string, RenderableElement> = {};
  for (const [key, raw] of Object.entries(candidate.elements as Record<string, unknown>)) {
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) continue;

    const record = raw as Record<string, unknown> & { type?: unknown; props?: unknown; children?: unknown };
    if (typeof record.type !== "string" || !allowedComponents.includes(record.type)) continue;

    const component = components[record.type];
    if (!component) continue;

    const backfilledProps = backfillPropsFromElementSiblings(record.type, record);
    const { value: normalizedProps } = normalizeComponentProps(record.type, backfilledProps);
    if (!normalizedProps || typeof normalizedProps !== "object" || Array.isArray(normalizedProps)) continue;
    if (!component.props.safeParse(normalizedProps).success) continue;

    const children = Array.isArray(record.children)
      ? record.children.filter((childKey): childKey is string => typeof childKey === "string")
      : [];

    complete[key] = { type: record.type, props: normalizedProps, children };
  }

  // Drop dangling references to elements that are still incomplete so an
  // already-valid parent can render its already-valid children without
  // waiting on an in-progress sibling later in the same children array.
  for (const element of Object.values(complete)) {
    element.children = element.children.filter((childKey) => childKey in complete);
  }

  const root = complete[candidate.root];
  if (!root || root.type !== "Answer") return null;

  const rootProps = root.props as { text?: unknown };
  const hasText = typeof rootProps.text === "string" && rootProps.text.trim().length > 0;
  if (!hasText && root.children.length === 0) return null;

  return { root: candidate.root, elements: complete } as Spec;
}
