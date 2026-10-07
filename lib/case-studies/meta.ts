export const CASE_STUDIES = [
  {
    slug: 'hyr',
    title: 'Hyr: Engineering a Connected AI Recruiting Platform · Case study',
    description: 'Built the AI behind a recruiting platform, from understanding candidates and matching roles to running connected interview workflows.',
    canonicalPath: '/case-studies/hyr',
  },
  {
    slug: 'pocketlink',
    title: 'Pocketlink: Creator Infrastructure, Commerce & AI · Case study',
    description: 'Built a platform where creators make their own page and sell their work, covering the editor, commerce infrastructure and AI features.',
    canonicalPath: '/case-studies/pocketlink',
  },
  {
    slug: 'rkgt',
    title: 'RK&GT: Applied ML & Document Intelligence · Case study',
    description: 'Worked on applied machine learning for document intelligence and tagged-item tracking, including search through documents and office assets.',
    canonicalPath: '/case-studies/rkgt',
  },
  {
    slug: 'tekkscope',
    title: 'Tekkscope: Full-Stack AI Research Platform · Case study',
    description: 'Built an AI research assistant that searches the web, reads sources, streams answers and switches to backup models when providers fail.',
    canonicalPath: '/case-studies/tekkscope',
  },
  {
    slug: 'thirdslate',
    title: 'ThirdSlate: Agentic RAG for Course-Grounded Learning · Case study',
    description: "Built a course-grounded AI learning platform using retrieval, evaluation and human review to answer from a student's own material.",
    canonicalPath: '/case-studies/thirdslate',
  },
  {
    slug: 'tracebox',
    title: 'TraceBox: Real WebRTC Voice-Agent Testing · Case study',
    description: 'Built a system that tests voice AI agents through real browser and WebRTC sessions, with observability and evidence captured for debugging.',
    canonicalPath: '/case-studies/tracebox',
  },
  {
    slug: 'berribot',
    title: 'Berribot: Engineering Production AI Systems · Case study',
    description: 'Took over how candidates get matched to jobs, building the search, ranking, evaluation and production systems behind Berribot.',
    canonicalPath: '/case-studies/berribot',
  },
] as const;

export type CaseStudySlug = (typeof CASE_STUDIES)[number]['slug'];

export const SLUGS: string[] = CASE_STUDIES.map(({ slug }) => slug);

export function getCaseStudyMetadata(slug: string) {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
