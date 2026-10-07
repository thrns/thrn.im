import { EMAIL } from './chrome';

// Site content, copied verbatim from the original design.
export const PROFILE = {
  fullName: 'Tharun Pranav Sakthivel',
  displayName: 'TP',
  tagline: 'Build a compass to wander.',
  studyIntro: "Hi there! I'm TP, an AI engineer in my last year at UBC, studying Physics, Statistics, and Environmental Sciences.",
  recentWork: 'Most recently, I was an AI Engineer at Berribot, where I built and ran the system that matches candidates to job descriptions and ranks them for recruiters.',
  thirdSlatePocketlink: 'Before that, I co-founded ThirdSlate, a platform that helps people learn more efficiently, and Pocketlink, where creators can publish, sell, and grow their work all in one place.',
  hyrAgroBot: 'I also worked as a Technical Consultant at Hyr and as an AI Engineer at UBC AgroBot, where I got to use AI on agriculture problems.',
  research: "These days I'm deep in the research side of AI, exploring it and building as I go.",
  pastInterests: 'In a past life, I was into electronics and circuitry, and I spent a lot of time on debate and athletics.',
  workLink: 'You can learn more about my work here.',
  email: EMAIL,
  // Explicit anchors so role recency never has to be inferred from prose or array
  // order — these must match a `company` value in ROLES.
  currentRoleCompany: 'UBC AgroBot',
  mostRecentCompletedRoleCompany: 'Berribot',
} as const;

export const SOCIAL = {
  github: 'https://github.com/thrns',
  linkedin: 'https://www.linkedin.com/in/thrn',
  website: 'https://thrn.im',
} as const;

export type Course = { code: string; title: string };

export type Education = {
  institution: string;
  campus: string;
  degree: string;
  program: string;
  components: string[];
  startDate: string;
  expectedGraduation: string;
  // Keyed by subject prefix (CPSC, MATH, PHYS, ...) — this is the exact,
  // verified list of courses actually taken. Do not add or assume a course
  // beyond what's listed here.
  coursework: Record<string, Course[]>;
  certifications: string[];
  note: string;
};

// GPA is intentionally not included here — do not expose or estimate it.
export const EDUCATION: Education = {
  institution: 'University of British Columbia',
  campus: 'Vancouver, BC',
  degree: 'Bachelor of Science',
  program: 'Combined Major in Science',
  components: ['Statistics', 'Physics', 'Earth & Environmental Sciences'],
  startDate: '2022-09',
  expectedGraduation: '2027-04',
  coursework: {
    ASIA: [
      { code: 'ASIA 353', title: 'Introduction to Hindi Film' },
      { code: 'ASIA 379', title: 'The Persian Book of Kings' },
    ],
    ATSC: [
      { code: 'ATSC 201', title: 'Meteorology of Storms' },
    ],
    BIOL: [
      { code: 'BIOL 111', title: 'Introduction to Modern Biology' },
      { code: 'BIOL 342', title: 'Integrative Biology Laboratory' },
    ],
    CHEM: [
      { code: 'CHEM 121', title: 'Structure and Bonding in Chemistry' },
      { code: 'CHEM 355', title: 'Chemistry Integrated Laboratory' },
    ],
    CPSC: [
      { code: 'CPSC 110', title: 'Computation, Programs, and Programming' },
      { code: 'CPSC 121', title: 'Models of Computation' },
      { code: 'CPSC 210', title: 'Software Construction' },
      { code: 'CPSC 344', title: 'Introduction to Human Computer Interaction Methods' },
    ],
    CRWR: [
      { code: 'CRWR 200', title: 'Introduction to Creative Writing' },
      { code: 'CRWR 213', title: 'Introduction to Writing for the New Media' },
    ],
    DSCI: [
      { code: 'DSCI 100', title: 'Introduction to Data Science' },
    ],
    EOSC: [
      { code: 'EOSC 270', title: 'Marine Ecosystems' },
      { code: 'EOSC 310', title: 'The Earth and the Solar System' },
      { code: 'EOSC 326', title: 'Earth and Life Through Time' },
      { code: 'EOSC 340', title: 'Climate Change: Causes and Solutions' },
      { code: 'EOSC 442', title: 'Climate Measurement and Analysis' },
    ],
    FMST: [
      { code: 'FMST 210', title: 'Family Context of Human Development' },
    ],
    MATH: [
      { code: 'MATH 100', title: 'Differential Calculus with Applications' },
      { code: 'MATH 101', title: 'Integral Calculus with Applications' },
      { code: 'MATH 102', title: 'Differential Calculus with Applications to Life Sciences' },
      { code: 'MATH 103', title: 'Integral Calculus with Applications to Life Sciences' },
      { code: 'MATH 104', title: 'Differential Calculus with Applications to Commerce and Social Sciences' },
      { code: 'MATH 105', title: 'Integral Calculus with Applications to Commerce and Social Sciences' },
      { code: 'MATH 110', title: 'Differential Calculus' },
      { code: 'MATH 120', title: 'Honours Differential Calculus' },
      { code: 'MATH 121', title: 'Honours Integral Calculus' },
      { code: 'MATH 180', title: 'Differential Calculus with Applications' },
      { code: 'MATH 184', title: 'Differential Calculus for Social Science and Commerce' },
      { code: 'MATH 200', title: 'Calculus III' },
      { code: 'MATH 220', title: 'Mathematical Proof' },
      { code: 'MATH 221', title: 'Matrix Algebra' },
      { code: 'MATH 302', title: 'Introduction to Probability' },
      { code: 'MATH 307', title: 'Applied Linear Algebra' },
    ],
    PHYS: [
      { code: 'PHYS 117', title: 'Dynamics and Waves' },
      { code: 'PHYS 118', title: 'Electricity, Light and Radiation' },
      { code: 'PHYS 119', title: 'Experimental Physics Lab I' },
      { code: 'PHYS 203', title: 'Thermal Physics I' },
      { code: 'PHYS 219', title: 'Intermediate Experimental Physics I' },
      { code: 'PHYS 309', title: 'Electrical Laboratory' },
      { code: 'PHYS 310', title: 'Machine Learning for Physics and Astronomy Data Analysis' },
      { code: 'PHYS 319', title: 'Electronics Laboratory' },
      { code: 'PHYS 404', title: 'Introduction to Medical Physics' },
      { code: 'PHYS 409', title: 'Experimental Physics' },
    ],
    POLI: [
      { code: 'POLI 369', title: 'Topics in International Security' },
    ],
    SCIE: [
      { code: 'SCIE 113', title: 'First-Year Seminar in Science' },
      { code: 'SCIE 300', title: 'Communicating Science' },
    ],
    STAT: [
      { code: 'STAT 200', title: 'Elementary Statistics for Applications' },
      { code: 'STAT 251', title: 'Introductory Probability and Statistics' },
      { code: 'STAT 300', title: 'Intermediate Statistics for Applications' },
      { code: 'STAT 306', title: 'Finding Relationships in Data' },
    ],
    VISA: [
      { code: 'VISA 110', title: 'Foundation Studio: Digital Media' },
    ],
    WRDS: [
      { code: 'WRDS 150', title: 'Writing and Research in the Disciplines' },
    ],
  },
  certifications: ['TCPS 2: CORE-2022 — Course on Research Ethics (completed September 2026)'],
  note: 'No verified awards or scholarships are on record. Do not state or estimate GPA. Only courses explicitly listed in coursework were taken — do not infer or add others.',
};

export type Publication = { title: string; venue: string; year: string; coauthors: string; doi: string; context: string };

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Detection of COVID-19 from Chest X-ray Images using Concatenated Deep Learning Neural Networks',
    venue: 'International Journal of Current Research and Review (IJCRR)',
    year: '2022',
    coauthors: 'Anand Jeyasingh',
    doi: '10.31782/ijcrr.2022.14310',
    context: 'Trained on 11,302 chest X-rays using Xception+ResNet152V2 and Xception+EfficientNet-B7 architectures; later portfolio material reports roughly 94% three-class accuracy with improved minority-class sensitivity.',
  },
];

// Recruiter-facing facts. Several fields are deliberately phrased as "not
// confirmed" / "do not invent" — these are guardrails against fabrication for
// exactly the kind of question (visa, sponsorship, start date, resume link)
// that should never be guessed.
export const RECRUITER_INFO = {
  location: 'Vancouver, British Columbia, Canada',
  status: 'UBC undergraduate, expected graduation April 2027',
  primaryTarget: 'AI Engineer / Applied AI Engineer / LLM Engineer',
  alsoInterestedIn: 'Generative AI Engineer, Forward Deployed AI Engineer; Backend Engineer as a secondary interest',
  preferredCompanyType: 'Startups, especially Series A/B/C',
  targetGeographies: 'Canada, United States, United Kingdom',
  workAuthorization: 'International student in Canada, currently on a Canadian study permit. Exact post-graduation work authorization and sponsorship needs are not finalized — do not state that sponsorship is or is not required.',
  relocation: 'Targets roles outside Vancouver, but an unqualified "open to relocating anywhere" has not been confirmed — do not assume unlimited relocation.',
  employmentPreference: 'Full-time, new-grad AI roles are the clearest target. An internship or contract preference has not been confirmed.',
  availability: 'No confirmed start date exists — do not invent one.',
  resume: 'No separate canonical resume link is currently published — do not invent or guess a URL; point them to the portfolio or to get in touch directly.',
} as const;

export type PersonalTopic = { id: string; title: string; keywords: string[]; text: string };

// Personal, non-work facts about TP, used to ground Bixxie's answers to "about him as a person"
// questions (hobbies, personality, favorites, values, etc.), not just his career.
export const PERSONAL: PersonalTopic[] = [
  {
    id: 'background',
    title: 'Background',
    keywords: ['background', 'hometown', 'grew up', 'family', 'languages', 'school', 'origin', 'india', 'tamil nadu', 'vancouver', 'uncle', 'more', 'fun'],
    text: "Full name Tharun Pranav Sakthivel, goes by TP. Grew up in Tiruchengode, Tamil Nadu, India, also lived in Coimbatore, now based in Vancouver. First language is Tamil, fluent in English, and can read, write, and understand Hindi. Went to Yuvabharathi Public School in Coimbatore before UBC. Got into coding around Grade 6 because of his uncle, a software engineer who built websites — watching him work was the first time TP thought he could build things himself. Growing up he did track and field, basketball, football, and hockey, running the 400m at district level, plus a huge amount of Model UN: about 68 conferences, chaired 13, helped organize 2. Published a research paper in IJCRR in Grade 12.",
  },
  {
    id: 'personality',
    title: 'Personality',
    keywords: ['personality', 'traits', 'introvert', 'extrovert', 'stress', 'conflict', 'decisions', 'pet peeves', 'humour', 'humor', 'more', 'fun'],
    text: "Describes himself as ambitious, curious, analytical, extroverted, and a little too into optimizing everything. Extroverted — loves reaching out to people, networking, pitching ideas. A night owl, sleeps around 1-2am and wakes around 9-10am. Handles stress by diagnosing what went wrong and fixing it, and gets impatient with things that are slow for no reason. Handles conflict by naming the real issue, solving it, and moving on, no dragging it out. Handles failure by being annoyed briefly, overthinking it, finding the root cause, then trying again with a better setup. Makes decisions fast and mostly data-driven — if a decision is reversible he just acts and adjusts, if it's expensive or risky he gets deep into spreadsheets and edge cases first. Pet peeves: pointless bureaucracy, vague answers, slow systems, overcomplicated simple things, software that almost works. Humor leans dry, sarcastic, and absurd. Recharges from building something he's into, talking to interesting people, cracking hard problems, and seeing real progress; drains from admin work, pointless meetings, being stuck, or doing something just because that's how it's always been done. A mix of planner and improviser: takes risks but checks the downside first, and if it's survivable and reversible, takes the shot and learns from it.",
  },
  {
    id: 'hobbies',
    title: 'Hobbies & Interests',
    keywords: ['hobbies', 'sports', 'gaming', 'games', 'music', 'reading', 'books', 'cooking', 'travel', 'fitness', 'swim', 'run', 'bike', 'pickleball', 'playstation', 'more', 'fun'],
    text: "Currently into swimming, running, biking, lifting, and pickleball, and occasionally signs up for things like competitive LongBoat races. Games mostly on PlayStation — Valorant, Apex, Warzone, Minecraft, racing games, and story games, in all-or-nothing phases. Music spans Tamil music, hip-hop, R&B, and trap: Tamil side includes Anirudh, Hiphop Tamizha, A.R. Rahman, Sai Abhyankkar, and G. V. Prakash; English side includes Juice WRLD, XXXTentacion, Kanye, Drake, The Weeknd, Travis Scott, Metro Boomin, Don Toliver, and Chord Overstreet, plus niche picks like Baalti, Lapgan, Raf Saperra, Akshara, and UK Punjabi/South Asian diaspora artists. Getting into Dostoevsky and Kafka for reading — picked existential, psychological books despite usually struggling to finish novels. Loves cooking, mostly Indian food, and can't follow a recipe without changing something. Used to draw a lot and still loves visual design, now channeled into UI/UX, websites, typography, and spacing. Travel style: plans enough that nothing goes badly wrong, then changes half of it on arrival; the UK trip is a favorite, no fixed dream destination because he'd rather keep seeing new places. Not actively doing formal debate or MUN anymore, but both were huge in school.",
  },
  {
    id: 'favorites',
    title: 'Favorites & Taste',
    keywords: ['favorite', 'favourite', 'movies', 'music', 'food', 'biryani', 'quote', 'colour', 'color', 'black', 'winter', 'season', 'more', 'fun'],
    text: "Favorite directors: Christopher Nolan and Martin Scorsese — Interstellar is his all-time favorite movie. Also big on Tamil cinema, with Mani Ratnam as favorite director and Alaipayuthey and 96 as top Tamil films. Favorite food is Indian food, biryani specifically is his go-to answer for where to eat. Hasn't really clicked with East/Southeast Asian food yet. Favorite quote: \"If not now, when? If not you, who?\" — his operating principle, preferring to start underprepared over waiting for a perfect moment. Admires his dad most, especially for responsibility, work ethic, and showing up for people. Favorite season is winter, a good excuse to hibernate and call it a \"winter arc\"; summer is better for actually doing things like running, biking, and swimming. Favorite color is black. Favorite smell is the Zara Tobacco Collection.",
  },
  {
    id: 'fun-facts',
    title: 'Fun Facts & Quirks',
    keywords: ['fun', 'fun fact', 'quirks', 'weird', 'talent', 'unpopular opinion', 'pets', 'dogs', 'nickname', 'habit', 'more'],
    text: "Can sleep almost anywhere, anytime, and still wants another nap afterward — probably his most developed skill. Unpopular opinion: winter is better than summer. His initials are TP, so friends joke it stands for Toilet Paper, and he's fully accepted there's no coming back from that. Something people wouldn't guess: he used to draw a lot and was pretty into art before coding took over his free time. Has two Indian-breed dogs — a little scared of them and loves them to death at the same time. Signature habit: sleep in, feel guilty about how much he slept, then work for hours to make up for it. Also prone to Googling one small question and ending up 25 tabs deep knowing way more than he needed to.",
  },
  {
    id: 'values',
    title: 'Values & Philosophy',
    keywords: ['values', 'philosophy', 'belief', 'compass', 'wander', 'success', 'ai industry', 'worldview', 'meaning', 'more', 'fun'],
    text: "His tagline \"Build a compass to wander\" means having enough direction and values that life doesn't need to be fully mapped out — know roughly where north is, then take the weird road if it feels right. Core belief: life, work, relationships, and getting good at anything are all hard, but that's never felt like a good reason to quit — he'd rather get good at enjoying the struggle, or at least like who it makes him become. Thinks the AI industry has a problem with bolting AI onto products that don't need it just to look current; he's genuinely into AI, which is exactly why he thinks it should be used more carefully, only when it actually makes something better, faster, more accessible, or newly possible. Success, to him, means being able to go to sleep peacefully at night: being okay with his decisions, doing right by people around him, doing something meaningful with the day. Used to think a good plan meant sticking to it closely; after building things and making uncertain calls, realized a plan is just a best guess with current information, and refusing to change course can be the real failure.",
  },
  {
    id: 'life-now',
    title: 'Life Right Now',
    keywords: ['life now', 'currently', 'today', 'this year', 'week', 'current focus', 'graduation', 'studying', 'guitar', 'piano', 'more', 'fun'],
    text: "A normal week is gym or cardio, eat, work, eat, work, gym or cardio again, eat, work or hang out, sleep, repeat, with social time kept in the mix on purpose. Right now he's finishing his last year at UBC and figuring out what's next, building things he cares about, going deeper into AI, and trying to turn years of projects, startups, and experiments into something real. Main focus this year: finish uni strong and land an AI or applied AI engineering role building real products, plus getting his portfolio to actually represent what he can do. Outside of work he's casually learning philosophy (reading Dostoevsky and Kafka) and picking up guitar and piano. Lately his mind has been on graduation, exams, the job search, and endlessly tweaking his portfolio.",
  },
  {
    id: 'career-anecdotes',
    title: 'Career Anecdotes & Lessons',
    keywords: ['proud', 'proudest', 'mistake', 'lesson', 'mentor', 'district', '400m', 'mun', 'more', 'fun'],
    text: "Proudest product moment: watching Pocketlink pass 24,000 users — proof that building software and building a product are different skills. Proudest technical moment: turning Berribot's candidate-matching from \"the LLM does some magic\" into a real retrieval and ranking system (BM25, embeddings, RRF, reranking, LambdaMART, evals, tracing, deployment). Recurring mistake: building too much before checking if anyone actually needs it; startups taught him to ship the smallest useful version fast and build from what reality tells him. His uncle, a software engineer, first got him curious about building things around Grade 6; later founders, engineers, professors, and collaborators taught him that the smartest technical solution isn't always the best one. Track and field (400m to district level) taught him that results come from a lot of unseen boring reps, not one heroic day. Model UN (68 conferences, 13 chaired, 2 organized) taught him to think fast, speak clearly, defend an argument, and stay calm when everyone's trying to be heard. His career has followed a fairly consistent, if unplanned, progression: learn to code, build products, get users, build AI products, get obsessed with the systems underneath the AI.",
  },
  {
    id: 'relationships',
    title: 'Relationships & Community',
    keywords: ['friends', 'community', 'family', 'parents', 'mentorship', 'ubc', 'residence', 'more', 'fun'],
    text: "His close friend group is a deliberate mix — some very ambitious, some professional chaos agents, often both — full of roasting, spontaneous plans, food, sports, and conversations that swing from serious to unserious in minutes. Mostly part of the UBC community (classmates, residence, engineering and design teams, student events) and startup/AI engineering communities on and offline. Being part of the Residence Hall Association and campus residence life made university feel like a community, not just classes. He currently serves as Brock Commons Area President in the Residence Hall Association (2025–26), a formal leadership role on top of his engineering work. Credits his parents first for backing decisions that didn't always look safe, and his close friends for still picking up the phone. Mentorship has come from his uncle (the original spark), and later founders, engineers, professors, and collaborators; the mentoring he does himself is informal — helping friends or teammates with code, projects, resumes, or interviews.",
  },
  {
    id: 'early-roles',
    title: 'Early Experience',
    keywords: ['early', 'first job', 'sparkdial', 'anna university', 'computer technician', '2019', '2020', 'before', 'more'],
    text: "Before the roles on his main work timeline, TP worked as a Full Stack Developer at SparkDial Online Services Pvt. Ltd. (March–April 2020) and as a Computer Technician at Anna University (May 2019). These are early, pre-college roles and not part of his primary AI/software engineering experience list.",
  },
  {
    id: 'future',
    title: 'Future & Aspirations',
    keywords: ['future', 'five years', 'ten years', 'goals', 'bucket list', 'legacy', 'remembered', 'more', 'fun'],
    text: "In five years, wants to be genuinely excellent at applied AI — someone who can take a vague, hard problem and build the real system behind it, ideally at a small ambitious company or building one himself. In ten years, title matters less than having enough technical depth, financial freedom, and experience to choose his own problems. Wants to master deep technical problem-solving so specific tools and frameworks become secondary, and outside of work wants to get properly good at an instrument. Bucket-list item: a real solo trip with minimal pre-planning. Dream project: an AI product that becomes part of someone's daily life without constantly reminding them it's \"AI-powered.\" Wants to be remembered for building useful things, taking big ideas seriously, helping people around him, and not becoming unbearable once things started going well.",
  },
  {
    id: 'voice',
    title: 'Voice & Texting Style',
    keywords: ['voice', 'texting', 'tone', 'talk', 'style', 'slang', 'fun', 'more'],
    text: "His day-to-day texting voice is casual, warm, and a little self-aware — things like \"Just chilling, got some music on,\" \"Mann, just because you're free but yeah, swamped with assignments,\" \"LMAOO, dang...\", \"Bruhh how are you this stupid,\" and \"Yoooo my bad, been busy for the last two days. How have you been?\" Short, friendly, a bit sarcastic, never overly formal with people he's close to.",
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle',
    keywords: ['coffee', 'tea', 'food', 'weather', 'rainy', 'vancouver', 'smell', 'more', 'fun'],
    text: "Coffee over tea, no contest — usual order is an Arabica lungo with milk and three teaspoons of sugar. Loves Indian food, especially anything spicy, with biryani as his easiest answer for where to eat. Favorite weather is cozy and rainy: grey sky, rain on the window, cold outside, warm room, laptop open, which makes Vancouver either great or dangerous for his productivity. The Zara Tobacco Collection scent feels like comfort to him.",
  },
];

export const PROJECTS: { name: string; what: string; status: string; url: string; timeframe: string }[] = [
  { name: "RepoView", what: "Building a way to share a private GitHub project with a recruiter or investor without making the code public, and see how they actually go through it.", status: 'Working', url: 'https://repoview.thrn.im/', timeframe: 'Start date unknown – present' },
  { name: "OutKey", what: "Building a way for apps to issue signed credentials that can't be faked or reused, so every action has a clear record of who approved it. Open source.", status: 'Working', url: 'https://github.com/thrns/Outkey', timeframe: 'Dates unknown' },
  { name: "OutPost", what: "Building one place to chat with different AI models, organize notes by project, and set up AI agents that turn a conversation into a repeatable workflow.", status: 'Working', url: 'https://github.com/thrns/outpost', timeframe: 'Start date unknown – present' },
  { name: "OutPay", what: "Building a checkout that lets online businesses accept cryptocurrency payments (USDC) straight into their own wallet, with payment confirmation and bookkeeping handled for them.", status: 'Active', url: 'https://outpay.tech/', timeframe: 'Start date unknown – present' },
  { name: "TinyShell", what: "Trained a small language model (SLM) that turns plain English into terminal commands, so nobody has to memorize them.", status: 'Inactive', url: 'https://github.com/thrns/TinyShell', timeframe: 'Dates unknown' },
  { name: "TabFM-Benchmark", what: "Compared different machine learning models on spreadsheet style data to see which one gave the most reliable results.", status: 'Inactive', url: 'https://github.com/thrns/tabfm-benchmark-lab', timeframe: 'Dates unknown; confirmed active as of July 2026' },
  { name: "TraceBox", what: "Built a tool that tests voice AI agents, like automated phone assistants, by holding real conversations with them and saving the transcripts, recordings, and failures for debugging.", status: 'Inactive', url: 'https://github.com/thrns/tracebox', timeframe: 'Dates unknown' },
  { name: "TekkScope", what: "Built an AI research assistant that searches the web, reads through sources, and answers with what it found, switching to a backup model if one goes down.", status: 'Inactive', url: 'https://github.com/thrns/tekkscope', timeframe: 'Dates unknown; active development evidence Aug–Sep 2026' },
  { name: "USDT-Futures-Trading-Bot", what: "Built a bot that turns buy and sell signals into real cryptocurrency futures trades on Binance, and tracks positions and profit along the way.", status: 'Inactive', url: 'https://github.com/thrns/USDT-Futures-Trading-Bot', timeframe: 'Dates unknown' },
  { name: "CovidScan", what: "An early project that tested whether a deep learning model could spot COVID-19 from chest X-rays, and it later became a published paper.", status: 'Inactive', url: 'https://github.com/thrns/TP-COVID19', timeframe: 'Dates unknown' }
];

// Do not derive a project's start date from repository history (first commit,
// activity logs, etc). "Dates unknown" means exactly that — use Notice
// kind="unknown" rather than inferring or guessing a date.
export const STACK_CAT: Record<string, string> = {"LiteLLM":"AI & agents","Supermemory":"AI & agents","LangGraph":"AI & agents","OpenRouter":"AI & agents","PydanticAI":"AI & agents","LangChain":"AI & agents","Superset":"AI & agents","Hugging Face":"Models & ML","scikit-learn":"Models & ML","PyTorch":"Models & ML","TensorFlow":"Models & ML","Ollama":"Models & ML","Qwen":"Models & ML","MLflow":"Models & ML","R":"Models & ML","Claude Code":"Coding tools","Codex":"Coding tools","Cursor":"Coding tools","OpenCode":"Coding tools","Gemini CLI":"Coding tools","Zed":"Coding tools","Ghostty":"Coding tools","Linear":"Coding tools","Tree-sitter":"Coding tools","Python":"Languages & runtimes","TypeScript":"Languages & runtimes","Rust":"Languages & runtimes","Go":"Languages & runtimes","Bun":"Languages & runtimes","Node.js":"Languages & runtimes","Tailwind CSS":"Frontend & design","Figma":"Frontend & design","Next.js":"Frontend & design","Framer Motion":"Frontend & design","shadcn/ui":"Frontend & design","React":"Frontend & design","Three.js":"Frontend & design","Mermaid":"Frontend & design","FastAPI":"Backend & APIs","Celery":"Backend & APIs","Pydantic":"Backend & APIs","Zod":"Backend & APIs","Better Auth":"Backend & APIs","Supabase":"Backend & APIs","Kafka":"Backend & APIs","SSE":"Backend & APIs","Playwright":"Web & scraping","Crawlee":"Web & scraping","SearXNG":"Web & scraping","PostgreSQL":"Data & storage","Redis":"Data & storage","Neon":"Data & storage","Elasticsearch":"Data & storage","Qdrant":"Data & storage","DuckDB":"Data & storage","Neo4j":"Data & storage","Docker":"Infra & observability","Kubernetes":"Infra & observability","Terraform":"Infra & observability","Helm":"Infra & observability","Langfuse":"Infra & observability","RAGAS":"Infra & observability","OpenTelemetry":"Infra & observability","Prometheus":"Infra & observability","Grafana":"Infra & observability"};
export const CATS: string[] = ["AI & agents","Models & ML","Coding tools","Languages & runtimes","Frontend & design","Backend & APIs","Web & scraping","Data & storage","Infra & observability"];
export const STACK: { name: string; purpose: string; thoughts: string; k: string; url: string; status: string; label: string; cat: string }[] = `Docker|Containers|Can't ship anything without it, so no complaints here.|A|https://www.docker.com
LiteLLM|Model routing|Handles my routing, and sometimes I use it to run Chinese models with Claude Code. Very useful.|A|https://www.litellm.ai
Tailwind CSS|Styling|Styling without leaving the markup. It's on almost everything I build and I haven't looked back.|A|https://tailwindcss.com
Supermemory|AI memory|Way easier to integrate than Mem0, and the features keep shipping, which I like.|A|https://supermemory.ai
Pydantic|Data validation|Shows up in almost everything I write in Python. Hard to remember life before it.|A|https://docs.pydantic.dev
Figma|Design|Still where I sketch out UI before building anything.|A|https://www.figma.com
LangGraph|Agent orchestration|Has almost everything you need to take an AI product to production. Best of the bunch for me.|A|https://www.langchain.com/langgraph
Redis|Caching|Somehow always ends up in my stack.|A|https://redis.io
Hugging Face|Model hub|Where I go to try new lightweight models and deep learning projects. The datasets are the best part.|A|https://huggingface.co
Next.js|Web framework|My default for anything on the web.|A|https://nextjs.org
Claude Code|Coding agent|Best for architecting and the more complicated stuff. Most of my heavier work goes through it.|A|https://docs.claude.com/en/docs/claude-code/overview
Neon|Serverless database|Spins up fast and is perfect for side projects.|A|https://neon.com
Playwright|Browser automation|Reliable for testing and scraping.|A|https://playwright.dev
scikit-learn|Classical ML|Still helps on deep learning projects, just not as much as when ML was all I did.|A|https://scikit-learn.org
Bun|JS runtime|Very fast, though I don't feel much pull toward it since Anthropic acquired it.|A|https://bun.sh
Framer Motion|Animation|Makes adding motion easy without much effort.|A|https://motion.dev
Celery|Task queue|Takes the heavy jobs off the API so nothing hangs.|A|https://docs.celeryq.dev
Python|Main language|Great for most of my AI work. Slow, but not as slow as JS, so I manage.|A|https://www.python.org
Langfuse|LLM observability|One suite for testing, observation, and versioning. Works really well.|A|https://langfuse.com
Mermaid|Diagrams|Fastest way to get an architecture diagram into a doc.|A|https://mermaid.js.org
PostgreSQL|Database|Does almost everything I need, so why look elsewhere?|A|https://www.postgresql.org
OpenRouter|Model gateway|Great for production apps. Swapping models is easy and I get analytics too.|A|https://openrouter.ai
Zod|Validation|Keeps inputs and outputs honest on the TypeScript side.|A|https://zod.dev
Kubernetes|Orchestration|Reach for it when a project outgrows a single box.|A|https://kubernetes.io
PyTorch|Deep learning|Best framework out there and easier than TensorFlow. Most of my deep learning projects run on it.|A|https://pytorch.org
Better Auth|Authentication|Easy to set up and does the job without any drama.|A|https://www.better-auth.com
Ghostty|Terminal|Fast and clean, and I'm in it every day.|A|https://ghostty.org
shadcn/ui|UI components|Clean UI without fighting a design system.|A|https://ui.shadcn.com
Codex|Coding agent|Very budget friendly, especially with ChatGPT Luna.|A|https://openai.com/codex
FastAPI|Backend framework|My go-to for backends. Quick to build with and fits the AI stack well.|A|https://fastapi.tiangolo.com
Elasticsearch|Search engine|Powerful, scales well, and great for full-text, log, and vector search. The learning curve is steep and it eats memory though.|A|https://www.elastic.co/elasticsearch
TypeScript|Main language|Great for quick prototyping. Don't really use it for much else.|A|https://www.typescriptlang.org
PydanticAI|Agent framework|Very powerful, just not LangGraph powerful. Good for prototyping fast.|A|https://ai.pydantic.dev
Supabase|Backend platform|Quickest way to get a backend running without much setup.|A|https://supabase.com
Superset|Agent multitasking|I love multitasking, so I mostly want to see how well it supports that.|P|https://superset.sh
MLflow|Experiment tracking|Curious how it compares to the other debug, evaluate, and monitor tools.|P|https://mlflow.org
OpenTelemetry|Observability|Been meaning to learn it properly instead of half understanding it.|P|https://opentelemetry.io
Qdrant|Vector database|Mostly just trying to find an alternative to pgvector because I'm bored.|P|https://qdrant.tech
Rust|Systems language|Very interested since it's so memory efficient, but still thinking about that steep learning curve.|P|https://www.rust-lang.org
Go|Backend language|Just curious.|P|https://go.dev
Kafka|Event streaming|Still learning it and want to build something real with it.|P|https://kafka.apache.org
DuckDB|Local analytics|Want to try it for quick analysis without spinning up a whole database.|P|https://duckdb.org
Terraform|Infrastructure code|Learning it so I can stop clicking around cloud dashboards.|P|https://developer.hashicorp.com/terraform
Prometheus|Monitoring|Want to learn it alongside Grafana.|P|https://prometheus.io
Grafana|Dashboards|Want to learn it so I can actually see what my systems are doing.|P|https://grafana.com
Helm|Kubernetes packaging|Next up once I'm comfortable with Kubernetes.|P|https://helm.sh
Tree-sitter|Code parsing|Want to understand how code actually gets parsed.|P|https://tree-sitter.github.io
Cursor|Code editor|Used it for a while, but it slowly fell out of my rotation.|I|https://cursor.com
OpenCode|Coding agent|Was nice and still is, but I settled on Codex and Claude Code since I'm more into their ecosystems.|I|https://opencode.ai
Gemini CLI|Coding agent|Plainly sucks.|I|https://github.com/google-gemini/gemini-cli
Zed|Code editor|Nice and fast, but extension support is limited for now. Might switch back later.|I|https://zed.dev
Ollama|Local models|Very useful, my laptop just can't handle local models.|I|https://ollama.com
Qwen|Open-source models|Used it for projects and work and it's wonderful. I just don't need it right now.|I|https://qwen.ai
TensorFlow|Deep learning|Great for very advanced deep learning, but I moved over to PyTorch.|I|https://www.tensorflow.org
LangChain|LLM framework|Shifted toward agentic products instead of chain-style ones.|I|https://www.langchain.com
RAGAS|RAG evaluation|Used it for a while, then moved to Langfuse.|I|https://www.ragas.io
R|Data analysis|Used it heavily for data work until I realised pandas and Python's plotting libraries could do the same.|I|https://www.r-project.org
React|UI library|Still around through Next.js, I just don't touch it on its own anymore.|I|https://react.dev
Three.js|3D graphics|Fun to play with, but no reason to use it right now.|I|https://threejs.org
Node.js|JS runtime|Python and Bun cover most of what I need now.|I|https://nodejs.org
SSE|Response streaming|Used it for streaming responses, but I don't need it much at the moment.|I|https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events
Neo4j|Graph database|Tried it, but haven't had a project that needed a graph lately.|I|https://neo4j.com
SearXNG|Metasearch|Used it for search in a few projects, nothing needs it right now.|I|https://docs.searxng.org
Crawlee|Web scraping|Used it for scraping, but nothing calls for it at the moment.|I|https://crawlee.dev
Linear|Issue tracking|Never really became part of my workflow.|I|https://linear.app`.split('\n').map(l => { const [name, purpose, thoughts, k, url] = l.split('|'); return { name, purpose, thoughts, k, url, status: { A: 'Active', P: 'Planned', I: 'Inactive' }[k], label: { A: 'Active', P: 'Planned', I: 'Inactive' }[k], cat: STACK_CAT[name] || 'Other' }; });
export const GREETING = "Hi, I'm Bixxie. I can answer questions about Tharun's work, projects and stack. I only know what is on this site.";

export type Role = {
  rail: string;
  title: string;
  altTitle?: string;
  company: string;
  url: string;
  summary: string;
  summary2?: string;
  highlight: string;
  wins: string[];
  stack: string;
  employmentType: string;
  startDate: string;
  // null = present / ongoing (this is the only signal for "current role" —
  // never infer currentness from array order or prose).
  endDate: string | null;
};

// Ordered most-recent-first by endDate (present sorts first); this order is
// derived from the explicit startDate/endDate fields below, not the other
// way around — do not reorder this array without updating the dates.
export const ROLES: Role[] = [
  {
    rail: 'var(--foreground)',
    title: "AI Engineer | Technical Operations & Partnerships Lead",
    altTitle: "Corporate Relations Lead",
    company: "UBC AgroBot",
    url: "https://ubcagrobot.com/",
    summary: "Spent a few years on UBC's robotics team training the vision models that let the robot see what's growing in a field.",
    summary2: "Took on technical operations and partnerships for AgroBot, which meant talking to sponsors as much as to engineers.",
    highlight: '',
    wins: [
      "Computer vision: worked on agricultural-robotics perception models including YOLO and Faster R-CNN, reaching approximately 86% mAP across 8,000+ images.",
      "Research & engineering operations: produced 20+ literature reviews, 12 briefing notes, 6 dashboards, 10 datasets, 3 proposals, and 10 reports/publications.",
      "Partnerships: helped secure 6 partnerships and $8K+ in commitments while maintaining an 80+ prospect pipeline.",
      "Operations: worked across 7 team leads, 25+ stakeholders, and a $15K+ operations budget.",
    ],
    stack: '',
    employmentType: "Part-time, student engineering/design team",
    startDate: '2023-10',
    endDate: null,
  },
  {
    rail: 'var(--border)',
    title: "AI Engineer",
    company: "Berribot",
    url: "https://www.berribot.com/",
    summary: "Joined Berribot and took over how candidates get matched to open roles, rebuilding it so recruiters spent less time sifting and more time talking to people.",
    highlight: '',
    wins: [
      "Candidate ranking: built a hybrid JD-to-candidate retrieval/ranking pipeline using BM25, Gemini embeddings, RRF, Qwen3 reranking, and LambdaMART, cutting shortlisting time 42%, false positives 30%, and improving matching precision 35%.",
      "AI tutoring: built BerriTutor, a voice-first AI tutor using Python, Graphify, LiveKit, Supermemory, and a multi-agent architecture, supporting thousands of concurrent sessions.",
      "LLM evaluation: built Langfuse-based tracing, prompt versioning, and testing with 800+ LLM-as-judge tests, reducing review workflows from hours to minutes.",
      "Production infrastructure: deployed services on Docker/GCP/GitHub Actions/GKE/Cloud Run at roughly 99.8% availability, supporting 1K+ applicant submissions/day.",
    ],
    stack: '',
    employmentType: "Full-time",
    startDate: '2026-01',
    endDate: '2026-04',
  },
  {
    rail: 'var(--border)',
    title: "Co-founder & AI Engineer",
    altTitle: "Product Engineer",
    company: "ThirdSlate",
    url: "https://github.com/thrns/thirdslate",
    summary: "Co-founded ThirdSlate, an AI study platform for students, and spent most of the time making sure its answers could be trusted, with a real person stepping in when they couldn't.",
    highlight: '',
    wins: [
      "Product: built an AI tutoring/study platform used by 1,000+ users.",
      "RAG: built LangGraph-based RAG workflows with citations, memory, and checkpointed agent flows.",
      "Evaluation: created a 500+ case evaluation system reaching 94% response relevance and 89% RAGAS faithfulness.",
      "Quality: reduced hallucinations by roughly 38% and manual QA by roughly 55% while maintaining about 99.8% uptime.",
    ],
    stack: '',
    employmentType: "Founder",
    startDate: '2025-03',
    endDate: '2026-01',
  },
  {
    rail: 'var(--border)',
    title: "Software Engineer",
    company: "Uniffy.me",
    url: "https://uniffy.me/",
    summary: "Spent a summer on the backend of an insurance platform, connecting providers so things just worked for the people using it.",
    highlight: '',
    wins: [
      "Integrated 4 insurance APIs supporting approximately 2K+ weekly transactions.",
      "Built reconciliation/automation workflows that reduced reconciliation work by roughly 65%.",
      "Worked on infrastructure serving 10K+ users at 99.9% uptime.",
      "Implemented access control with 3 permission tiers, RBAC, and audit logging.",
    ],
    stack: '',
    employmentType: "Internship",
    startDate: '2025-05',
    endDate: '2025-08',
  },
  {
    rail: 'var(--border)',
    title: "Co-founder & Full-Stack Engineer",
    altTitle: "Product Engineer",
    company: "Pocketlink",
    url: "https://github.com/thrns/pocketlink",
    summary: "Co-founded a platform where creators publish and sell their work, and built most of it. Watching people actually use it was the best part.",
    highlight: '',
    wins: [
      "Built and scaled the creator platform to 24,000+ creators/users.",
      "Built a customizable bento-grid profile/editor.",
      "Shipped custom domains, commerce, and analytics.",
      "Added AI-powered functionality including a Gemini-based agent.",
    ],
    stack: '',
    employmentType: "Founder",
    startDate: '2023-12',
    endDate: '2025-02',
  },
  {
    rail: 'var(--border)',
    title: "Co-founder & Software Engineer",
    altTitle: "CTO",
    company: "Allotrix",
    url: "https://github.com/thrns/allotrix",
    summary: "Started Allotrix to take the headaches out of organizing conferences, then watched it get used at real events.",
    highlight: '',
    wins: [
      "Built software for MUN/conference operations, processing 1,000+ delegate assignments per event.",
      "Used across approximately 12 conferences.",
      "Supported 30+ organizers, with major reductions in manual coordination work.",
    ],
    stack: '',
    employmentType: "Founder",
    startDate: '2023-08',
    endDate: '2024-10',
  },
  {
    rail: 'var(--border)',
    title: "Founding Engineer",
    altTitle: "Technical Consultant",
    company: "Hyr",
    url: "https://hyr.works/",
    summary: "Started as the first engineer at Hyr, building the tools that helped recruiters screen candidates faster and understand why each one was recommended.",
    highlight: '',
    wins: [
      "Built an AI recruiting workflow from JD intake through candidate shortlisting, reducing manual candidate screening from roughly 8 minutes to under 2 minutes.",
      "Worked across UI/UX, frontend, and major backend components.",
    ],
    stack: '',
    employmentType: "Startup engineering role",
    startDate: '2024-01',
    endDate: '2024-07',
  },
  {
    rail: 'var(--border)',
    title: "Software Engineer",
    company: "RK&GT Technologies",
    url: "https://rkgt-tech.com/",
    summary: "Joined RK&GT for the summer and worked on two things: helping software find what's inside PDFs, and tracking where tagged items sit around an office.",
    highlight: '',
    wins: [
      "Built NLP pipelines using spaCy over 10K+ records, reaching approximately 85% classification accuracy.",
      "Improved a GAN/TensorFlow model by approximately 15% accuracy.",
      "Reduced processing/latency by approximately 20%.",
      "Built validation/reporting tooling that caught 40+ defects and reduced reporting time around 45%.",
    ],
    stack: '',
    employmentType: "Internship",
    startDate: '2023-05',
    endDate: '2023-09',
  },
  {
    rail: 'var(--border)',
    title: "Machine Learning Engineer",
    company: "Schneider Electric Sustainability Business",
    url: "https://www.se.com/",
    summary: "Worked on a computer vision project during COVID that helped check mask use and distancing.",
    highlight: '',
    wins: [],
    stack: '',
    employmentType: "Internship",
    startDate: '2021-04',
    endDate: '2021-05',
  },
];

export const CASES: string[][] = [
  ["Berribot: Production AI Systems","","AI Engineer","Took over how candidates get matched to jobs, building the search, ranking, and testing behind it.","/case-studies/berribot"],
  ["Hyr: Connected AI Hiring System","","Founding Engineer","Built the AI behind a recruiting platform, from understanding candidates to running interviews.","/case-studies/hyr"],
  ["Pocketlink: Creator Commerce AI","","Co-founder & Full-Stack Engineer","Built a platform where creators make their own page and sell their work, from the editor to the store.","/case-studies/pocketlink"],
  ["RK&GT: Document Intelligence ML","","Machine Learning Engineer Intern","Worked on two machine learning projects, one that tracks tagged items around an office and one that helps software search through documents.","/case-studies/rkgt"],
  ["Tekkscope: AI Research Platform","","Full-Stack AI Engineer","Built an AI research assistant that searches the web, reads the sources, and streams back answers, switching to a backup model if one goes down.","/case-studies/tekkscope"],
  ["ThirdSlate: Course-Grounded RAG","","Co-founder & AI Engineer","Built an AI study platform that answers from a student's own course material, with a check on every answer and a human review for the shaky ones.","/case-studies/thirdslate"],
  ["Tracebox: WebRTC Agent Test Lab","","Full-Stack AI Engineer","Built a tool that tests voice AI agents by talking to them in a real browser, then saves everything so problems are easy to trace.","/case-studies/tracebox"]
];

// Timeframes mirror each case study's underlying role dates in ROLES above —
// keyed by the slug used in CASE_SLUGS / CaseStudy.slug.
export const CASE_TIMEFRAMES: Record<string, string> = {
  berribot: 'Jan 2026 – Apr 2026',
  hyr: 'Jan 2024 – Jul 2024',
  pocketlink: 'Dec 2023 – Feb 2025',
  rkgt: 'May 2023 – Sep 2023',
  tekkscope: 'Dates unknown',
  thirdslate: 'Mar 2025 – Jan 2026',
  tracebox: 'Dates unknown',
};
