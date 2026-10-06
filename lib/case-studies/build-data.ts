import { CASES } from '@/lib/data';

/** Returns the existing canonical case-study facts in a flattenable data shape. */
export function buildCaseStudyData(slug: string, toc: string[][]) {
  const href = `/case-studies/${slug}`;
  const [title, , role, summary] = CASES.find((study) => study[4] === href) ?? [];

  return {
    title: title ?? '',
    role: role ?? '',
    summary: summary ?? '',
    sections: toc.map(([, label]) => label),
  };
}
