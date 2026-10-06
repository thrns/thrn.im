import { CASES, CASE_TIMEFRAMES, EDUCATION, PERSONAL, PROFILE, PROJECTS, PUBLICATIONS, RECRUITER_INFO, ROLES, STACK } from '@/lib/data';
import { buildData as buildBerribotData } from '@/lib/case-studies/berribot';
import { buildData as buildHyrData } from '@/lib/case-studies/hyr';
import { buildData as buildPocketlinkData } from '@/lib/case-studies/pocketlink';
import { buildData as buildRkgtData } from '@/lib/case-studies/rkgt';
import { buildData as buildTekkscopeData } from '@/lib/case-studies/tekkscope';
import { buildData as buildThirdslateData } from '@/lib/case-studies/thirdslate';
import { buildData as buildTraceboxData } from '@/lib/case-studies/tracebox';

export type GroundingSource = {
  id: string;
  type: 'profile' | 'contact' | 'role' | 'project' | 'stack' | 'case-study' | 'personal' | 'education' | 'publication' | 'recruiting';
  title: string;
  text: string;
  href?: string;
  keywords: string[];
};

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Roles/education store dates as "YYYY-MM"; this renders them as "Mon YYYY"
// so Bixxie gets a human-readable, unambiguous date instead of having to
// reformat (or guess at) the raw string itself.
function formatMonthYear(value: string): string {
  const [year, month] = value.split('-');
  const index = Number(month) - 1;
  return MONTH_NAMES[index] ? `${MONTH_NAMES[index]} ${year}` : value;
}

function formatDateRange(start: string, end: string | null): string {
  return `${formatMonthYear(start)} – ${end ? formatMonthYear(end) : 'Present'}`;
}

const CASE_BUILDERS: Record<string, () => unknown> = {
  berribot: buildBerribotData,
  hyr: buildHyrData,
  pocketlink: buildPocketlinkData,
  rkgt: buildRkgtData,
  tekkscope: buildTekkscopeData,
  thirdslate: buildThirdslateData,
  tracebox: buildTraceboxData,
};

const CASE_SLUGS = ['berribot', 'hyr', 'pocketlink', 'rkgt', 'tekkscope', 'thirdslate', 'tracebox'] as const;

const PROFILE_SUMMARY_SOURCE: GroundingSource = {
  id: `profile-summary:${PROFILE.fullName}`,
  type: 'profile',
  title: PROFILE.fullName,
  text: [`Display name: ${PROFILE.displayName}`, PROFILE.tagline].join('\n'),
  keywords: ['profile', 'about', 'who', 'hi', 'hello'],
};

const PROFILE_SOURCE: GroundingSource = {
  id: `profile:${PROFILE.fullName}`,
  type: 'profile',
  title: PROFILE.fullName,
  text: [
    `Display name: ${PROFILE.displayName}`,
    PROFILE.tagline,
    PROFILE.studyIntro,
    PROFILE.recentWork,
    PROFILE.thirdSlatePocketlink,
    PROFILE.hyrAgroBot,
    PROFILE.research,
    PROFILE.pastInterests,
  ].join('\n'),
  keywords: ['profile', 'about', 'contact', 'email', 'hire', 'reach', 'availability', 'education', 'study'],
};

const CONTACT_SOURCE: GroundingSource = {
  id: 'contact:email',
  type: 'contact',
  title: 'Contact',
  text: `Email: ${PROFILE.email}`,
  href: `mailto:${PROFILE.email}`,
  keywords: ['contact', 'email', 'hire', 'reach', 'availability'],
};

const EDUCATION_SOURCE: GroundingSource = {
  id: 'education:ubc',
  type: 'education',
  title: 'Education',
  text: [
    `Institution: ${EDUCATION.institution} (${EDUCATION.campus})`,
    `Degree: ${EDUCATION.degree}`,
    `Program: ${EDUCATION.program} — ${EDUCATION.components.join(', ')}`,
    `Dates: ${formatMonthYear(EDUCATION.startDate)} – expected ${formatMonthYear(EDUCATION.expectedGraduation)}`,
    ...Object.entries(EDUCATION.coursework).map(([area, courses]) => `${area} coursework: ${courses.join(', ')}`),
    `Certifications: ${EDUCATION.certifications.join(', ')}`,
    EDUCATION.note,
  ].join('\n'),
  keywords: ['education', 'degree', 'university', 'ubc', 'study', 'studying', 'major', 'program', 'coursework', 'course', 'gpa', 'graduate', 'graduation', 'school'],
};

const PUBLICATIONS_SOURCE: GroundingSource = {
  id: 'publications:all',
  type: 'publication',
  title: 'Publications',
  text: PUBLICATIONS.map((pub) =>
    [`Title: ${pub.title}`, `Venue: ${pub.venue} (${pub.year})`, `Co-authors: ${pub.coauthors}`, `DOI: ${pub.doi}`, pub.context].join('\n'),
  ).join('\n\n'),
  keywords: ['publication', 'paper', 'research', 'published', 'ijcrr', 'journal', 'doi'],
};

const RECRUITER_SOURCE: GroundingSource = {
  id: 'recruiting:info',
  type: 'recruiting',
  title: 'Recruiting information',
  text: [
    `Location: ${RECRUITER_INFO.location}`,
    `Status: ${RECRUITER_INFO.status}`,
    `Primary target role: ${RECRUITER_INFO.primaryTarget}`,
    `Also interested in: ${RECRUITER_INFO.alsoInterestedIn}`,
    `Preferred company type: ${RECRUITER_INFO.preferredCompanyType}`,
    `Target geographies: ${RECRUITER_INFO.targetGeographies}`,
    `Work authorization: ${RECRUITER_INFO.workAuthorization}`,
    `Relocation: ${RECRUITER_INFO.relocation}`,
    `Employment preference: ${RECRUITER_INFO.employmentPreference}`,
    `Availability: ${RECRUITER_INFO.availability}`,
    `Resume: ${RECRUITER_INFO.resume}`,
  ].join('\n'),
  keywords: ['recruiter', 'hire', 'hiring', 'visa', 'sponsorship', 'sponsor', 'relocate', 'relocation', 'location', 'based', 'start date', 'available', 'availability', 'resume', 'cv', 'authorization', 'authorized', 'work permit', 'internship', 'full-time', 'fulltime'],
};

function flattenCaseStudy(value: unknown): string[] {
  const text: string[] = [];
  const ignoredKeys = new Set(['url', 'href', 'uri', 'link', 'pillbg', 'pillfg', 'dot', 'comma', 'next']);

  function visit(current: unknown, key?: string) {
    if (key && ignoredKeys.has(key.toLowerCase())) return;

    if (typeof current === 'string') {
      const trimmed = current.trim();
      if (!trimmed || /^(?:https?:\/\/|mailto:|tel:|\/[^\s]*)/i.test(trimmed)) return;
      text.push(trimmed);
      return;
    }

    if (typeof current === 'number' && Number.isFinite(current)) {
      text.push(String(current));
      return;
    }

    if (Array.isArray(current)) {
      for (const item of current) visit(item);
      return;
    }

    if (current && typeof current === 'object') {
      for (const [childKey, childValue] of Object.entries(current)) visit(childValue, childKey);
    }
  }

  visit(value);
  return text;
}

function createSources(): GroundingSource[] {
  const roleSources: GroundingSource[] = ROLES.map((role) => {
    const recencyTag = role.company === PROFILE.currentRoleCompany
      ? '[CURRENT ROLE — this is the most recent / ongoing role]'
      : role.company === PROFILE.mostRecentCompletedRoleCompany
        ? '[MOST RECENT COMPLETED ROLE — the most recent job that has ended]'
        : null;

    return {
      id: `role:${role.company}`,
      type: 'role',
      title: role.company,
      text: [
        recencyTag,
        [role.title, role.altTitle].filter(Boolean).join(' / '),
        role.employmentType,
        `Dates: ${formatDateRange(role.startDate, role.endDate)}`,
        role.summary,
        role.summary2,
        role.highlight,
        ...role.wins,
        role.stack && `Stack: ${role.stack}`,
      ].filter(Boolean).join('\n'),
      href: role.url,
      keywords: ['experience', 'role', 'company', role.title, role.company],
    };
  });

  const projectSources: GroundingSource[] = PROJECTS.map((project) => ({
    id: `project:${project.name}`,
    type: 'project',
    title: project.name,
    text: [project.what, project.status, `Timeframe: ${project.timeframe}`].join('\n'),
    href: project.url,
    keywords: ['project', project.status],
  }));

  const stackSources: GroundingSource[] = STACK.map((item) => ({
    id: `stack:${item.name}`,
    type: 'stack',
    title: item.name,
    text: [item.purpose, item.thoughts, item.status, item.cat].filter(Boolean).join('\n'),
    href: item.url,
    keywords: ['technology', 'stack', 'tool', item.purpose, item.status, item.cat],
  }));

  const caseSources: GroundingSource[] = CASE_SLUGS.flatMap((slug) => {
    const study = CASES.find(([, , , , href]) => href === `/case-studies/${slug}`);
    const build = CASE_BUILDERS[slug];
    if (!study || !build) return [];

    const [title, , role, summary, href] = study;
    const flattenedBuildData = flattenCaseStudy(build()).join('\n');
    const timeframe = CASE_TIMEFRAMES[slug];

    return [{
      id: `case-study:${slug}`,
      type: 'case-study',
      title,
      text: [role, summary, timeframe && `Timeframe: ${timeframe}`, flattenedBuildData].filter(Boolean).join('\n'),
      href,
      keywords: ['case study', 'case-study', slug, role],
    }];
  });

  const personalSources: GroundingSource[] = PERSONAL.map((topic) => ({
    id: `personal:${topic.id}`,
    type: 'personal',
    title: topic.title,
    text: topic.text,
    keywords: topic.keywords,
  }));

  return [
    PROFILE_SOURCE,
    CONTACT_SOURCE,
    EDUCATION_SOURCE,
    PUBLICATIONS_SOURCE,
    RECRUITER_SOURCE,
    ...roleSources,
    ...projectSources,
    ...stackSources,
    ...caseSources,
    ...personalSources,
  ];
}

const SOURCES = createSources();
const STOPWORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'how', 'i', 'in', 'is', 'it',
  'me', 'my', 'of', 'on', 'or', 'the', 'to', 'what', 'where', 'who', 'with', 'you', 'your',
]);

function normalizeQuery(query: string): { tokens: string[]; text: string } {
  const tokens = [...new Set(
    query.normalize('NFKC')
      .toLowerCase()
      .split(/[^\p{L}\p{N}]+/u)
      .filter((token) => token && !STOPWORDS.has(token)),
  )];

  return { tokens, text: tokens.join(' ') };
}

function tokenize(value: string): string[] {
  return value.normalize('NFKC').toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(Boolean);
}

function canonicalName(source: GroundingSource): string {
  return tokenize(source.title.split(':', 1)[0]).join(' ');
}

function containsPhrase(text: string, phrase: string): boolean {
  return Boolean(phrase && ` ${text} `.includes(` ${phrase} `));
}

function hasExactCanonicalMatch(queryText: string, source: GroundingSource): boolean {
  if (!['role', 'project', 'case-study', 'stack'].includes(source.type)) return false;
  const name = canonicalName(source);
  return containsPhrase(queryText, name);
}

function isContactQuery(tokens: string[]): boolean {
  const contactTerms = new Set(['contact', 'email', 'hire', 'reach', 'availability', 'available']);
  return tokens.some((token) => contactTerms.has(token));
}

// "More" and "Fun" are quick-question chips with no inherent keyword overlap in the
// portfolio data; without this, they'd fall through to score 0 and return almost nothing.
// Treat them (and similar broad asks) as a cue to surface the personal-facts sources.
function isPersonalQuery(tokens: string[]): boolean {
  const personalTerms = new Set(['more', 'fun', 'personal', 'personality', 'hobbies', 'hobby', 'yourself']);
  return tokens.some((token) => personalTerms.has(token));
}

function scoreSource(tokens: string[], queryText: string, source: GroundingSource): number {
  const title = tokenize(source.title);
  const titleText = title.join(' ');
  let score = queryText && (containsPhrase(queryText, titleText) || containsPhrase(titleText, queryText)) ? 12 : 0;

  const titleAndKeywordTokens = new Set([...title, ...source.keywords.flatMap(tokenize)]);
  const bodyTokens = new Set(tokenize(source.text));

  for (const token of tokens) {
    if (titleAndKeywordTokens.has(token)) score += 4;
    if (bodyTokens.has(token)) score += 1;
  }

  return score;
}

function serializeSources(sources: GroundingSource[]): string {
  const maximum = 10_000;
  let output = '';

  for (const source of sources) {
    const separator = output ? '\n' : '';
    const start = `[SOURCE: ${source.id}]\n`;
    const end = `\n[/SOURCE]`;
    const remaining = maximum - output.length - separator.length - start.length - end.length;
    if (remaining < 0) break;

    const body = source.text.slice(0, remaining);
    output += `${separator}${start}${body}${end}`;
    if (body.length < source.text.length) break;
  }

  return output;
}

export function retrievePortfolioContext(query: string): string {
  const { tokens, text } = normalizeQuery(query);
  const contactQuery = isContactQuery(tokens);
  const personalQuery = isPersonalQuery(tokens);
  const ranked = SOURCES
    .filter((source) => source !== PROFILE_SOURCE && source !== CONTACT_SOURCE)
    .map((source, index) => ({
      source,
      index,
      score: scoreSource(tokens, text, source),
      forced: hasExactCanonicalMatch(text, source) || (personalQuery && source.type === 'personal'),
    }))
    .filter((result) => result.forced || result.score > 0)
    .sort((left, right) => Number(right.forced) - Number(left.forced) || right.score - left.score || left.index - right.index);

  // A short profile summary is always included so Bixxie can answer "who are you"-style
  // questions concisely; the full bio is only pulled in when the query actually matches a
  // profile/about keyword or the person's name (not merely a word that appears in the bio
  // body text, and not for a bare greeting or unrelated question).
  const profileKeywordTokens = new Set(PROFILE_SOURCE.keywords.flatMap(tokenize));
  const profileMatched = contactQuery
    || hasExactCanonicalMatch(text, PROFILE_SOURCE)
    || tokens.some((token) => profileKeywordTokens.has(token));
  const profileSource = profileMatched ? PROFILE_SOURCE : PROFILE_SUMMARY_SOURCE;
  const selected = [
    profileSource,
    ...(contactQuery ? [CONTACT_SOURCE] : []),
    ...ranked.map(({ source }) => source),
  ].slice(0, personalQuery ? 10 : 7);
  return serializeSources(selected);
}
