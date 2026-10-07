import { defineCatalog } from "@json-render/core";
import { schema } from "@json-render/react/schema";
import { z } from "zod";

import { PROJECTS, ROLES, STACK } from "@/lib/data";

const roleCompanies = ROLES.map(({ company }) => company) as [string, ...string[]];
const projectNames = PROJECTS.map(({ name }) => name) as [string, ...string[]];
const stackNames = STACK.map(({ name }) => name) as [string, ...string[]];

const presentationGuidance =
  "Keep the reply conversational and short; use a structured component only for real list, numeric or named data. Never invent portfolio facts, generate arbitrary URLs, or generate arbitrary HTML/CSS. This catalog controls presentation only; Bixxie is not an agent.";

const describe = (description: string) => `${description} ${presentationGuidance}`;

const components = {
    Answer: {
      props: z
        .object({
          text: z.string().max(420),
        })
        .strict(),
      slots: ["default"],
      description: describe(
        "The required root of every generated response, shown as Bixxie's chat bubble. `text` is the spoken reply itself: first person, one to three short sentences, no heading or title. Any structured content goes in its default slot, rendered beneath the bubble.",
      ),
    },
    Section: {
      props: z
        .object({
          label: z.string().max(40).nullable(),
          title: z.string().max(80).nullable(),
        })
        .strict(),
      slots: ["default"],
      description: describe("A titled or labeled grouping for related response content."),
    },
    TextBlock: {
      props: z
        .object({
          text: z.string().max(260),
          tone: z.enum(["default", "muted"]).nullable(),
        })
        .strict(),
      description: describe("A follow-on chat bubble after the Answer: one or two short sentences that add a point the Answer.text did not cover. Not for restating the Answer or a component. Use Facts rows rather than a long chain of bubbles."),
    },
    Metrics: {
      props: z
        .object({
          items: z
            .array(
              z
                .object({
                  value: z.string().max(24),
                  label: z.string().max(80),
                  note: z.string().max(100).nullable(),
                })
                .strict(),
            )
            .min(1)
            .max(4),
        })
        .strict(),
      description: describe(
        "A compact set of metrics. Use only for verified numeric facts; never estimate or invent numbers.",
      ),
    },
    Experience: {
      props: z
        .object({
          company: z.enum(roleCompanies),
          showSummary: z.boolean().nullable(),
          showRole: z.boolean().nullable(),
        })
        .strict(),
      description: describe(
        "References canonical app-owned role data by company. Do not recreate, rewrite, or invent role details.",
      ),
    },
    Education: {
      props: z
        .object({
          showCoursework: z.boolean().nullable(),
        })
        .strict(),
      description: describe(
        "References the single canonical app-owned education record (institution, degree, program, dates, coursework). Do not recreate, rewrite, or invent education details such as GPA, honors, or coursework that is not supplied.",
      ),
    },
    Projects: {
      props: z
        .object({
          names: z.array(z.enum(projectNames)).min(1).max(6),
        })
        .strict(),
      description: describe(
        "References canonical app-owned project data by exact project name. Do not recreate project facts or URLs.",
      ),
    },
    Stack: {
      props: z
        .object({
          names: z.array(z.enum(stackNames)).min(1).max(12),
        })
        .strict(),
      description: describe(
        "References canonical app-owned technology data by exact stack name. Do not recreate stack details or URLs.",
      ),
    },
    CaseStudy: {
      props: z
        .object({
          slug: z.enum(["berribot", "hyr", "pocketlink", "rkgt", "tekkscope", "thirdslate", "tracebox"]),
          summary: z.string().max(240).nullable(),
        })
        .strict(),
      description: describe(
        "References a canonical app-owned case study by slug. Do not recreate its facts or generate a URL.",
      ),
    },
    Facts: {
      props: z
        .object({
          rows: z
            .array(
              z
                .object({
                  label: z.string().max(40),
                  value: z.string().max(280),
                })
                .strict(),
            )
            .min(1)
            .max(6),
        })
        .strict(),
      description: describe("A short set of verified facts presented as labeled rows."),
    },
    Comparison: {
      props: z
        .object({
          leftTitle: z.string().max(50),
          rightTitle: z.string().max(50),
          rows: z
            .array(
              z
                .object({
                  label: z.string().max(40),
                  left: z.string().max(220),
                  right: z.string().max(220),
                })
                .strict(),
            )
            .min(1)
            .max(6),
        })
        .strict(),
      description: describe("A comparison for actual, evidence-backed differences. Do not use for unrelated facts."),
    },
    Notice: {
      props: z
        .object({
          kind: z.enum(["unknown", "security", "note"]),
          title: z.string().max(70),
          body: z.string().max(280),
        })
        .strict(),
      description: describe("A brief note, security notice, or statement that information is unknown."),
    },
    Links: {
      props: z
        .object({
          items: z
            .array(
              z.enum([
                "email",
                "linkedin",
                "github",
                "work",
                "projects",
                "case-studies",
                "stack",
                "resume",
              ]),
            )
            .min(1)
            .max(5),
        })
        .strict(),
      description: describe("Selects named app-owned links. Choose from the listed names; never generate arbitrary URLs."),
    },
    FollowUps: {
      props: z
        .object({
          items: z.array(z.string().max(80)).min(1).max(3),
        })
        .strict(),
      description: describe("Up to three suggested next questions, shown as tappable chips under the reply. Write each as the visitor would ask it, in first person to Bixxie (e.g. \"What did you build at Tekkscope?\"), under 60 characters."),
    },
    Diagram: {
      props: z
        .object({
          title: z.string().max(80).nullable(),
          definition: z.string().max(1600),
        })
        .strict(),
      description: describe(
        "A flow or architecture diagram rendered from Mermaid syntax (flowchart/sequence/graph only — e.g. `flowchart TD`). Use for a case study's pipeline, request flow, or system architecture when a question asks how something works or flows, not for data that fits Metrics/Facts/Comparison better. Write only standard Mermaid node/edge syntax: no click/href/callback directives, no %%{init}%% config blocks, no raw HTML in labels, no styling/class directives. Base every node and edge strictly on facts already in PORTFOLIO_CONTEXT; never invent an architecture.",
      ),
    },
} satisfies Record<string, { props: z.ZodObject<z.ZodRawShape>; slots?: string[]; description: string }>;

export const catalog = defineCatalog(schema, {
  components,
  actions: {},
});

// Gemini's structured-output schema has an undocumented total-size/
// complexity ceiling: the full 14-component schema was rejected outright
// (400 INVALID_ARGUMENT, no further detail) until Stack's `names` enum —
// 65 canonical technology names, by far the largest single piece of this
// schema — was trimmed down. Rather than hard-code a brittle "N entries is
// too many" cutoff (the exact ceiling isn't documented and may move), trim
// any enum whose literal list in the *schema* would be large regardless of
// which field it's on, so the catalog can keep growing without silently
// tripping this limit again. The real validation doesn't get any weaker
// for a trimmed field: lib/bixxie/spec.ts still re-validates every prop
// against this same component's full Zod schema (the actual `z.enum(...)`,
// never trimmed) after generation, and invalid/invented array entries are
// dropped there (see catalog.test.ts's "rejects arbitrary stack entries").
const MAX_SCHEMA_ENUM_SIZE = 20;

function trimOversizedEnums(node: unknown): unknown {
  if (Array.isArray(node)) return node.map(trimOversizedEnums);
  if (!node || typeof node !== "object") return node;

  const record = node as Record<string, unknown>;
  if (Array.isArray(record.enum) && record.enum.length > MAX_SCHEMA_ENUM_SIZE) {
    const { enum: _oversizedEnum, ...rest } = record;
    return trimOversizedEnums(rest);
  }

  return Object.fromEntries(
    Object.entries(record).map(([key, value]) => [key, trimOversizedEnums(value)]),
  );
}

/**
 * A JSON Schema for the Gemini API's `responseJsonSchema` structured-output
 * mode, built straight from the same Zod prop schemas every component above
 * already declares — one source of truth, not a hand-maintained duplicate.
 *
 * This is deliberately NOT `catalog.jsonSchema()`: that helper is built for
 * strict cross-provider compatibility (OpenAI, Anthropic, Gemini alike),
 * which requires `additionalProperties: false` everywhere and therefore
 * can't represent a dynamic-key map like `elements` at all (see its
 * documented limitation). Gemini specifically supports a *schema* value for
 * `additionalProperties` (not just a boolean), so `elements` below is typed
 * as "every value must match one of these component shapes" while still
 * allowing the model to choose its own element keys — exactly what the
 * `{root, elements}` Spec shape needs.
 */
function buildElementSchema(name: string, propsSchema: z.ZodTypeAny): object {
  const propsJsonSchema = trimOversizedEnums(z.toJSONSchema(propsSchema)) as Record<string, unknown>;
  delete propsJsonSchema.$schema;

  return {
    type: "object",
    properties: {
      type: { type: "string", enum: [name] },
      props: propsJsonSchema,
      children: { type: "array", items: { type: "string" } },
    },
    required: ["type", "props", "children"],
    additionalProperties: false,
  };
}

export const catalogResponseSchema = {
  type: "object",
  properties: {
    root: { type: "string" },
    elements: {
      type: "object",
      additionalProperties: {
        anyOf: Object.entries(components).map(([name, component]) => buildElementSchema(name, component.props)),
      },
    },
  },
  required: ["root", "elements"],
};
