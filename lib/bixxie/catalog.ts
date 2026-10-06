import { defineCatalog } from "@json-render/core";
import { schema } from "@json-render/react/schema";
import { z } from "zod";

import { PROJECTS, ROLES, STACK } from "@/lib/data";

const roleCompanies = ROLES.map(({ company }) => company) as [string, ...string[]];
const projectNames = PROJECTS.map(({ name }) => name) as [string, ...string[]];
const stackNames = STACK.map(({ name }) => name) as [string, ...string[]];

const presentationGuidance =
  "Prefer structured components over long prose. Never invent portfolio facts, generate arbitrary URLs, or generate arbitrary HTML/CSS. This catalog controls presentation only; Bixxie is not an agent.";

const describe = (description: string) => `${description} ${presentationGuidance}`;

export const catalog = defineCatalog(schema, {
  components: {
    Answer: {
      props: z
        .object({
          label: z.string().max(32).nullable(),
          title: z.string().max(90),
          intro: z.string().max(280).nullable(),
        })
        .strict(),
      slots: ["default"],
      description: describe(
        "The required root of every generated response. Every response must use Answer as its root, with any response content nested in its default slot.",
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
      description: describe("A short prose block (a sentence or two, never a long paragraph) for information that does not fit a structured component. Use several short TextBlocks, a Section, or Facts rows — not one long block — to cover more ground."),
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
      description: describe("A short list of suggested next questions for the visitor."),
    },
  },
  actions: {},
});
