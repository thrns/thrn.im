// Generated 2026-10-06.
// PUBLIC-REPOSITORY SAFE knowledge records for Bixxie.
// Suggested repo path: lib/bixxie/knowledge/master.ts
// Entries that were private in the master source contain only a public refusal/policy response.

export type BixxieKnowledgeStatus = "known" | "partial" | "unknown" | "optional" | "conflict";
export type BixxieKnowledgeItem = {
  id: number;
  section: string;
  question: string;
  status: BixxieKnowledgeStatus;
  statusRaw: string;
  visibility: string;
  answer: string;
};

export const BIXXIE_KNOWLEDGE: readonly BixxieKnowledgeItem[] = [
  {
    "id": 1,
    "section": "1–6 · Identity and professional positioning",
    "question": "What exact professional title should Bixxie use today?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Use **AI Engineer** as the default. More specifically, TP is an **Applied AI / LLM Engineer** who works on retrieval, agentic systems, evaluation, backend systems, and production reliability. “Backend Engineer” is a credible secondary label, and “Founding Engineer” is relevant to his startup experience, but neither should replace AI Engineer as the default current identity."
  },
  {
    "id": 2,
    "section": "1–6 · Identity and professional positioning",
    "question": "Give Bixxie a 15-second professional description.",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "TP is an AI engineer at UBC finishing a BSc in a combined science program. He has built production AI systems across recruiting, education, research tooling, voice agents, and ML products, with particular depth in retrieval/ranking, RAG, agents, LLM evaluation, backend APIs, and deployment. He is most interested in turning unreliable model behavior into measurable, dependable products that real users can trust."
  },
  {
    "id": 3,
    "section": "1–6 · Identity and professional positioning",
    "question": "What are the three strongest reasons someone should hire TP over another early-career AI engineer?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "1. **He has already built AI systems beyond the demo stage.** At Berribot he owned the JD-to-candidate retrieval/ranking workflow and worked across evaluation, tracing, backend services, and deployment. At ThirdSlate he built course-grounded RAG, agent orchestration, human review, and an evaluation harness.\n2. **He combines AI depth with end-to-end product ownership.** Pocketlink reached 24,000+ users; ThirdSlate reached 1,000+ users; Hyr went from an empty-repo-style early product to a recruiter pilot. He has repeatedly worked from problem definition through product, backend, AI, deployment, and iteration.\n3. **He thinks like a systems/product engineer, not only a model integrator.** He cares about failure modes, metrics, observability, security, cost, latency, human verification, and whether the product is actually useful. That direction is also what he wants to deepen over the next several years."
  },
  {
    "id": 4,
    "section": "1–6 · Identity and professional positioning",
    "question": "What labels should Bixxie avoid using as TP's primary identity?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Do not primarily describe TP as a **data scientist**, **ML researcher**, **frontend engineer**, or generic **“AI enthusiast.”** He has research and frontend experience, but his strongest current identity is applied/production AI engineering. Avoid “expert” unless a visitor uses it casually; the more defensible framing is that he has unusually broad production experience for an early-career engineer and is deliberately building deeper technical mastery."
  },
  {
    "id": 5,
    "section": "1–6 · Identity and professional positioning",
    "question": "How should his university status be phrased?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "“**Final-year UBC BSc student in the Combined Major in Science — Statistics, Physics, and Earth & Environmental Sciences — expecting to graduate in April 2027.**” When brevity matters: “final-year UBC student, graduating April 2027.”"
  },
  {
    "id": 6,
    "section": "1–6 · Identity and professional positioning",
    "question": "How is his name used socially/professionally?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "OPTIONAL/PUBLIC",
    "answer": "His full name is **Tharun Pranav Sakthivel**, and most people call him **TP**. The preferred pronunciation has not been explicitly documented, so Bixxie should not invent a pronunciation guide."
  },
  {
    "id": 7,
    "section": "7–12 · Personal origin and background",
    "question": "Where did TP grow up?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "TP's hometown is **Tiruchengode, Tamil Nadu, India**. He also lived in **Coimbatore**, where he attended Yuvabharathi Public School, and now lives in **Vancouver, Canada**. His background is useful context for a career that moved from early self-taught coding and Indian internships/startups into UBC, Canadian engineering teams, and global remote work."
  },
  {
    "id": 8,
    "section": "7–12 · Personal origin and background",
    "question": "What first got him interested in computers and engineering?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He started learning to code around **Grade 6** because of his uncle, a software engineer who built websites. Watching someone actually create things with a computer changed the machine from something he consumed into something he could build with. A lot of his later instinct — “wait, I can build that myself” — traces back to that experience."
  },
  {
    "id": 9,
    "section": "7–12 · Personal origin and background",
    "question": "Why did he choose UBC and Canada?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "UBC became the university around which he built his undergraduate path, and prior context describes it as a particularly important target for him. What is well supported is that university in Vancouver became the place where his interests expanded beyond coursework into design teams, residence leadership, startups, research, and applied AI. A detailed “why Canada versus every other country” story has not been fully documented, so Bixxie should not invent one."
  },
  {
    "id": 10,
    "section": "7–12 · Personal origin and background",
    "question": "Why a Combined Major in Statistics, Physics, and Earth & Environmental Sciences instead of a conventional CS degree?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The best grounded explanation is that TP's degree gives him a quantitatively broad base rather than defining him by a single software curriculum. Statistics directly supports evaluation and ML reasoning; physics reinforces mathematical modeling and problem-solving; Earth/environmental science broadens scientific context. His engineering ability has largely been developed by building systems, startups, internships, and self-directed technical work alongside the degree. Do not imply that he deliberately rejected CS for a fully articulated philosophical reason unless he says so later."
  },
  {
    "id": 11,
    "section": "7–12 · Personal origin and background",
    "question": "What was the turning point toward AI engineering?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "The progression was gradual: **learn to code → build products → get real users → build AI products → become increasingly interested in the systems underneath the AI.** ThirdSlate pulled him deeply into RAG, agents, memory, grounding, and evaluation; Berribot made the direction especially clear because he enjoyed turning “LLM magic” into an inspectable retrieval/ranking/evaluation/deployment system. That is the work he wants to get much better at."
  },
  {
    "id": 12,
    "section": "7–12 · Personal origin and background",
    "question": "What upbringing/background details is Bixxie allowed to discuss?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "OPTIONAL",
    "answer": "Safe public context includes hometown, school, languages, early coding influence, sports, MUN, and his admiration for his parents/uncle. Detailed family circumstances, finances, private relationships, home addresses, and other sensitive information should not be surfaced merely because Bixxie may know them."
  },
  {
    "id": 13,
    "section": "13–22 · Education",
    "question": "What is the exact degree record?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "**University of British Columbia, Vancouver** — **Bachelor of Science, Combined Major in Science**, combining **Statistics, Physics, and Earth & Environmental Sciences**. Start: **September 2022**. Expected graduation: **April 2027**."
  },
  {
    "id": 14,
    "section": "13–22 · Education",
    "question": "What GPA/percentage should Bixxie state?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 15,
    "section": "13–22 · Education",
    "question": "Which courses are most relevant to engineering/AI work?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Useful anchors include **STAT 200/251/300/302/306** for probability, inference, regression/modeling and statistical reasoning; **MATH 200/221/302/307** for multivariable calculus, linear algebra, probability/differential-equation-style mathematical tools; **CPSC 110/121/210** for programming, systems/fundamentals, and software construction; and upper-level physics for analytical modeling. The strongest career story is not “course X taught framework Y,” but that formal quantitative training complements substantial self-directed production engineering."
  },
  {
    "id": 16,
    "section": "13–22 · Education",
    "question": "What has physics contributed to his engineering thinking?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Physics trained him to reason from assumptions, model a system, separate what is observed from what is inferred, and stay comfortable with mathematics when intuition breaks. That mindset transfers well to debugging and system design: define constraints, isolate variables, test hypotheses, and avoid accepting a plausible explanation simply because it sounds right. A single canonical physics-to-project anecdote has not yet been documented."
  },
  {
    "id": 17,
    "section": "13–22 · Education",
    "question": "What has statistics contributed to his AI work?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Statistics is directly relevant to how TP thinks about evaluation: metrics need definitions, sample sizes, baselines, error costs, and uncertainty. It reinforces why a “better model” claim requires a measurement framework rather than a few good examples. That shows up in Berribot's ranking metrics, ThirdSlate's RAG evaluations, and his interest in benchmarking work such as TabFM."
  },
  {
    "id": 18,
    "section": "13–22 · Education",
    "question": "What substantial academic projects or reports has he done?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The strongest documented academic/research artifact is the published chest-X-ray study in **IJCRR (2022)**, using **11,302 images** and staged Xception + ResNet152V2 / EfficientNet-B7 architectures. UBC AgroBot also generated research proposals, literature reviews, datasets, technical briefs, and computer-vision experiments. Other course-specific academic projects have not been catalogued deeply enough to claim details."
  },
  {
    "id": 19,
    "section": "13–22 · Education",
    "question": "Which statistics concepts can he confidently use in production ML evaluation?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "The evidence supports practical familiarity with evaluation metrics, benchmark construction, relevance metrics, calibration/robustness thinking, and comparison against baselines. His TabFM work explicitly evaluates classification/regression, calibration, low-data behavior, latency, memory and robustness. Bixxie should not claim advanced experimental-design methods such as sophisticated causal inference or a particular hypothesis-testing framework unless tied to a documented project."
  },
  {
    "id": 20,
    "section": "13–22 · Education",
    "question": "Which CS fundamentals did he learn outside formal coursework?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Through projects and work he has dealt with API design, relational schemas/indexes, authentication and RBAC, queues/workers, async execution, Docker/Kubernetes, HTTP/SSE/WebRTC, background jobs, CI/CD, observability, retrieval/indexing, security boundaries, browser automation, and distributed service failure modes. His learning has been project-driven rather than restricted to the CS courses on his transcript."
  },
  {
    "id": 21,
    "section": "13–22 · Education",
    "question": "What has been his favourite UBC course?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "OPTIONAL",
    "answer": "No single favourite UBC course is reliably documented. Bixxie should not guess one based on his major. It can say his current interests gravitate toward statistics, AI systems, physics-style problem solving, and HCI/product work, but that is not the same as a declared favourite course."
  },
  {
    "id": 22,
    "section": "13–22 · Education",
    "question": "What was his hardest academic setback and how did he respond?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "CONDITIONAL",
    "answer": "His transcript/history includes difficult academic periods and at least one notably weak physics result, while he has continued the degree and remains on track under the approved Combined Major requirements. The public-facing lesson should be framed around persistence and adapting systems rather than broadcasting a grade: he does not treat one poor result as identity, and he tends to diagnose the failure, rebuild the process, and keep moving. Do not disclose a specific grade unless TP explicitly decides it belongs in Bixxie's public knowledge."
  },
  {
    "id": 23,
    "section": "23–34 · Canonical employment chronology",
    "question": "What is the UBC AgroBot title timeline?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "- **Machine Learning Engineer:** Oct 2023–Present.\n- **Internal Operations & Technical Lead:** Jan 2024–Present.\n- **Corporate Relations Lead:** Jan 2024–Present.\n\nThe public compact title can be **“Machine Learning Engineer | Internal Operations & Technical Lead”**, with Corporate Relations Lead as an additional leadership role. UBC AgroBot is TP's current ongoing role."
  },
  {
    "id": 24,
    "section": "23–34 · Canonical employment chronology",
    "question": "What was TP's official/canonical Berribot title?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Current `thrn.im` uses **AI Engineer**, while an older consolidated inventory used **Software Engineer**. For the portfolio, use **AI Engineer** because it matches the work and current positioning, but retain an internal note that older records differ. If legal/HR-title precision matters, say the historical source contains a title discrepancy rather than pretending there is none."
  },
  {
    "id": 25,
    "section": "23–34 · Canonical employment chronology",
    "question": "What title should be used for ThirdSlate?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Use **Co-founder & AI Engineer**, with **Product Engineer** as a reasonable alternate descriptor. It captures both founder-level product ownership and the RAG/agent/evaluation work TP actually owned."
  },
  {
    "id": 26,
    "section": "23–34 · Canonical employment chronology",
    "question": "What was TP's relationship to Hyr?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The safest representation is **Founding Engineer / Technical Consultant**, Jan–Jul 2024, remote with a Singapore startup context. Current portfolio positioning uses Founding Engineer; the earlier inventory used Technical Consultant. The engagement was early-stage/project-based and centered on building the recruiting MVP from zero. Do not imply a conventional permanent full-time employment relationship unless verified."
  },
  {
    "id": 27,
    "section": "23–34 · Canonical employment chronology",
    "question": "What are the exact RK&GT dates?",
    "status": "conflict",
    "statusRaw": "CONFLICT",
    "visibility": "PUBLIC WITH CAUTION",
    "answer": "Two historical sources disagree: one says **Jun–Aug 2023**, while the current site says **May–Sep 2023**. Until TP verifies the employment record, Bixxie should either avoid exact month-level dates in casual answers or explicitly state that the portfolio records contain a date discrepancy."
  },
  {
    "id": 28,
    "section": "23–34 · Canonical employment chronology",
    "question": "Schneider Electric role and dates?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "**Machine Learning Engineer Intern**, **Apr–May 2021**, Schneider Electric Sustainability Business, remote from Bengaluru/India context. The work focused on a COVID-era computer-vision compliance system for mask use and social distancing."
  },
  {
    "id": 29,
    "section": "23–34 · Canonical employment chronology",
    "question": "Allotrix title and dates?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "**Co-founder & CTO** (software/product engineering), **Aug 2023–Oct 2024**, India/hybrid context. Allotrix automated MUN conference operations such as delegate allotment, communication, and organizer analytics."
  },
  {
    "id": 30,
    "section": "23–34 · Canonical employment chronology",
    "question": "SparkDial title and dates?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "**Full Stack Developer**, SparkDial Online Services Pvt. Ltd., **Mar–Apr 2020**, remote from Coimbatore. It was an early role focused on HTML/CSS/PHP web applications and user-management software."
  },
  {
    "id": 31,
    "section": "23–34 · Canonical employment chronology",
    "question": "What exactly was the Anna University May 2019 experience?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC/LOW PRIORITY",
    "answer": "The documented title is **Computer Technician**, May 2019, on-site in Coimbatore. Work included hardware assembly, OS installation, peripheral/device setup, development-tool installation and troubleshooting. Whether the formal arrangement was internship, short program, temporary role, or another category is not currently established, so Bixxie should not invent the contract type."
  },
  {
    "id": 32,
    "section": "23–34 · Canonical employment chronology",
    "question": "Are there any other jobs/contracts missing from the known timeline?",
    "status": "known",
    "statusRaw": "KNOWN AS OF CURRENT RECORD",
    "visibility": "INTERNAL",
    "answer": "The currently catalogued timeline includes UBC AgroBot, Berribot, ThirdSlate, Uniffy.me, Pocketlink, Allotrix, Hyr, RK&GT Technologies, Schneider Electric Sustainability Business, SparkDial, and Anna University. No additional employment should be invented from GitHub activity or informal collaboration unless TP explicitly adds it."
  },
  {
    "id": 33,
    "section": "23–34 · Canonical employment chronology",
    "question": "What was the employment type for each role?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "UBC AgroBot: part-time student engineering/design team. Berribot: current portfolio says full-time. ThirdSlate/Pocketlink/Allotrix: founder roles. Uniffy/RK&GT/Schneider: internships. Hyr: early-stage startup engineering/technical-consulting engagement. SparkDial: short developer role/internship-like early experience, exact contract type not fully documented. Anna University: short technical role, exact contract type unknown."
  },
  {
    "id": 34,
    "section": "23–34 · Canonical employment chronology",
    "question": "What locations/work modes are known?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "UBC AgroBot — Vancouver, Canada. Berribot — San Francisco company context, remote. ThirdSlate — Vancouver. Uniffy — remote. Pocketlink — Chennai/India context, remote. Allotrix — India, hybrid. Hyr — Singapore context, remote. RK&GT — Ohio/US context, remote. Schneider — Bengaluru/India context, remote. SparkDial — Coimbatore, remote. Anna University — Coimbatore, on-site. Do not invent office attendance beyond these records."
  },
  {
    "id": 35,
    "section": "35–63 · Universal work-experience answers",
    "question": "What did each organization do while TP was there?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "- **UBC AgroBot:** multidisciplinary agricultural robotics/precision-weeding design team.\n- **Berribot:** AI recruiting platform across matching, screening/interviews and recruiter workflows.\n- **ThirdSlate:** course-grounded AI tutoring/study platform.\n- **Uniffy.me:** insurance/benefits infrastructure and workflow platform.\n- **Pocketlink:** creator/link-in-bio publishing, analytics and monetization platform.\n- **Allotrix:** MUN/conference operations automation.\n- **Hyr:** early AI recruiting and candidate-screening product.\n- **RK&GT:** software/ML work spanning RFID data, NLP and operational dashboards.\n- **Schneider:** sustainability/business organization; TP's project was workplace CV compliance monitoring.\n- **SparkDial:** client-facing web application work.\n- **Anna University:** short hardware/software system-setup work."
  },
  {
    "id": 36,
    "section": "35–63 · Universal work-experience answers",
    "question": "What industries/customer types did these roles serve?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Recruiting/HR tech (Berribot, Hyr), education (ThirdSlate), creator economy (Pocketlink), insurance infrastructure (Uniffy), agricultural robotics/research (AgroBot), event/MUN operations (Allotrix), enterprise/industrial/IoT-style workflows (RK&GT), workplace sustainability/compliance (Schneider), and general web/client delivery (SparkDial). The mix is part of TP's strength: he has repeatedly had to learn the domain rather than only reuse one product template."
  },
  {
    "id": 37,
    "section": "35–63 · Universal work-experience answers",
    "question": "What stage were the companies/teams when TP joined?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Hyr, ThirdSlate, Pocketlink and Allotrix were explicitly early/zero-to-one founder or founding-engineering contexts. Berribot was an operating startup with real recruiter workflows. UBC AgroBot is a student engineering/design team rather than a venture stage company. Exact fundraising stage/headcount for Berribot, Uniffy and other employers is not consistently documented and should not be invented."
  },
  {
    "id": 38,
    "section": "35–63 · Universal work-experience answers",
    "question": "How many employees/contributors did each organization have?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "CONDITIONAL",
    "answer": "Precise company/team headcounts are not reliably recorded. AgroBot worked across at least seven cross-functional leads and multiple workstreams, but that is not the same as total team size. Bixxie should avoid guessing company size from startup stage."
  },
  {
    "id": 39,
    "section": "35–63 · Universal work-experience answers",
    "question": "Who did TP report to?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "CONDITIONAL",
    "answer": "Specific reporting lines are not consistently documented and should not be inferred from founder names or org charts. In founder roles he shared founder-level ownership; in internships he worked within engineering/project teams. If asked about a specific role, answer what is documented about collaborators/ownership rather than inventing a manager."
  },
  {
    "id": 40,
    "section": "35–63 · Universal work-experience answers",
    "question": "What immediate teams did he belong to?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Berribot work crossed AI/search, recruiting workflow, tutoring/evaluation, and production infrastructure. ThirdSlate crossed product, AI/backend and frontend. AgroBot crossed ML plus operations/corporate-relations leadership. Uniffy was production/backend/integration work. Hyr was an early founding build. Exact team sizes are unknown."
  },
  {
    "id": 41,
    "section": "35–63 · Universal work-experience answers",
    "question": "Why did he join these roles?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The consistent pattern is wanting to build real systems rather than isolated exercises. He joined AgroBot to apply AI to a physical agricultural problem; Hyr to build a recruiting product almost from zero; Uniffy to learn inside an established production environment; Berribot because applied AI directly affected a real business workflow. Founder projects were ways to own the entire problem rather than only one ticket."
  },
  {
    "id": 42,
    "section": "35–63 · Universal work-experience answers",
    "question": "What problems was he originally brought in to solve?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Berribot: candidate matching/ranking quality and recruiter workflow efficiency. Uniffy: provider integration/reconciliation and platform reliability/security. RK&GT: NLP/RFID/data-processing workflows. Schneider: CV-based workplace compliance. AgroBot: crop/weed perception plus later technical/organizational operations. For founder roles, TP was not “hired to solve” a defined task; he helped define the problem itself."
  },
  {
    "id": 43,
    "section": "35–63 · Universal work-experience answers",
    "question": "What responsibilities did he start with?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The most explicit evolution is AgroBot: ML engineering first, then technical operations and corporate relations leadership. In founder roles he started broad by definition. Berribot centered first on the candidate-matching/ranking system and expanded into evaluation/tutoring/deployment contributions. Exact first-week task lists are not documented."
  },
  {
    "id": 44,
    "section": "35–63 · Universal work-experience answers",
    "question": "How did responsibilities change?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "TP tends to expand from implementation into system/product ownership. AgroBot is clearest: ML engineering grew into technical operations, budget/procurement, dashboards/research synthesis, and partnerships. Founder roles naturally spanned engineering, product and operations. At Berribot his strongest documented ownership was ranking, but he also worked on BerriTutor, LLM evaluation and deployments."
  },
  {
    "id": 45,
    "section": "35–63 · Universal work-experience answers",
    "question": "What did he personally own end-to-end?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Strongest examples: Berribot JD-to-candidate matching/ranking architecture and evaluation; Hyr's early recruiter flow from JD/resume processing through scoring/shortlist pilot; major ThirdSlate RAG/agent/evaluation components; Pocketlink product/engineering releases as co-founder; Allotrix's conference-automation product; and RepoView/Bixxie/TinyShell as personal projects. Use “primary owner” only where the evidence supports it."
  },
  {
    "id": 46,
    "section": "35–63 · Universal work-experience answers",
    "question": "What work belonged to teammates rather than TP?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC/INTERNAL",
    "answer": "Bixxie must not convert “worked at company X” into “built everything at company X.” Berribot's broader interview/proctoring/recruiting suite had other owners; TP's primary area was matching/ranking, plus documented contributions elsewhere. ThirdSlate and Pocketlink were co-founded/collaborative. UBC AgroBot was multidisciplinary. Exact teammate ownership maps are incomplete, so the safe language is to name TP's concrete area rather than claim the entire product."
  },
  {
    "id": 47,
    "section": "35–63 · Universal work-experience answers",
    "question": "Which metrics are attributable to TP versus team/company?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC WITH CARE",
    "answer": "Metrics tied directly to a system TP owned can be presented as outcomes of that system — e.g., Berribot shortlisting time/false positives/matching precision; Hyr screening time; ThirdSlate evaluation metrics; AgroBot model performance. Company-wide uptime/user counts are context/scale, not proof that TP alone caused them. Bixxie should never phrase a team/company metric as a solo achievement unless explicitly supported."
  },
  {
    "id": 48,
    "section": "35–63 · Universal work-experience answers",
    "question": "What was the most important thing he shipped in each role?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Berribot: multi-stage candidate retrieval/ranking system. ThirdSlate: grounded course-tutoring RAG/agent/evaluation system. Pocketlink: creator platform itself, scaled to 24K+. Hyr: recruiter MVP/pilot. Uniffy: provider integration/reconciliation and access-control work. AgroBot: crop-detection ML plus operational infrastructure/partnerships. RK&GT: NLP/RFID pipelines and live monitoring. Schneider: CV compliance pipeline."
  },
  {
    "id": 49,
    "section": "35–63 · Universal work-experience answers",
    "question": "What was the technically hardest thing he shipped?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "His strongest current answer is **Berribot's production ranking architecture**, because it combined lexical and dense retrieval, fusion, cross-encoder reranking, learning-to-rank, evaluation, tracing and deployment rather than relying on one model call. TraceBox's real WebRTC voice-agent test harness is another technically intricate system. “Hardest” is subjective, so Bixxie can frame Berribot as the one TP is proudest of technically rather than an objectively proven hardest system."
  },
  {
    "id": 50,
    "section": "35–63 · Universal work-experience answers",
    "question": "What was his most ambiguous task?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The strongest recurring example is early-stage/founding work: at Hyr and his own startups the initial state was not a detailed specification but a business problem. He had to define the workflow, decide what mattered enough for v1, choose architecture, and get something usable in front of people. Exact moment-by-moment STAR story details are not fully documented."
  },
  {
    "id": 51,
    "section": "35–63 · Universal work-experience answers",
    "question": "What did he decide without waiting for someone to tell him?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "He repeatedly introduced structure where a system was too opaque: a staged ranking architecture and evaluation at Berribot, grounding/evaluation/human review at ThirdSlate, and automation/data visibility in founder products. This is consistent with his working style: if the decision is reversible and the downside is understood, he prefers to act, measure and adjust."
  },
  {
    "id": 52,
    "section": "35–63 · Universal work-experience answers",
    "question": "What did he ship unusually quickly?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "There is strong evidence of fast iteration — Pocketlink sustained roughly four feature releases per month and startup roles demanded rapid building — but there is no single verified “built X in 48 hours” story in the current record. Bixxie should not invent a dramatic elapsed-time anecdote."
  },
  {
    "id": 53,
    "section": "35–63 · Universal work-experience answers",
    "question": "What took longer than expected?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "A recurring pattern TP openly acknowledges is overbuilding before validating whether users need something. That can make technically clean systems take longer than the smallest useful version required. No single role-specific schedule-overrun story is documented strongly enough to fabricate."
  },
  {
    "id": 54,
    "section": "35–63 · Universal work-experience answers",
    "question": "What did he initially underestimate?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He underestimated how often product success depends on **validation and user feedback rather than architecture quality**. His recurring mistake is building too much before proving demand. Pocketlink and later startup work taught him to ship a smaller useful version, watch where reality disagrees, then deepen the system."
  },
  {
    "id": 55,
    "section": "35–63 · Universal work-experience answers",
    "question": "What technical/product decision did he get wrong?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The strongest defensible answer is strategic rather than a fabricated outage: he has over-engineered early versions and built measurement/reconciliation too late in some projects. In Outpay interview prep, the reconciliation layer was explicitly identified as something he would prioritize earlier. In AI systems, he has also learned to build evals alongside the feature rather than after model behavior becomes difficult to reason about."
  },
  {
    "id": 56,
    "section": "35–63 · Universal work-experience answers",
    "question": "What important disagreement did he have with teammates?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "CONDITIONAL",
    "answer": "No sufficiently detailed, verifiable disagreement story is currently documented. Bixxie should not manufacture a conflict to satisfy a behavioral question. It can describe TP's conflict style — isolate the actual disagreement, use evidence, resolve it without dragging it out — while saying a specific public example is not currently documented."
  },
  {
    "id": 57,
    "section": "35–63 · Universal work-experience answers",
    "question": "What manager/founder feedback changed how he worked?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The strongest grounded evolution came from founders, collaborators, and product experience teaching him that the technically smartest solution is not automatically the best one. Context, user need, speed, communication and deciding what not to build matter. A direct quote from a particular manager should not be invented."
  },
  {
    "id": 58,
    "section": "35–63 · Universal work-experience answers",
    "question": "What measurable results did his work create?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC WITH APPROXIMATION",
    "answer": "Examples include ~42% lower Berribot shortlisting time, ~30% fewer false positives, ~35% higher matching precision; ThirdSlate 1,000+ users, ~89% RAGAS faithfulness, ~94% response relevance and ~38% lower hallucination rate; Pocketlink 24,000+ users/creators; Uniffy ~65% lower reconciliation work across ~2K weekly transactions; Hyr screening from ~8 minutes to under 2; AgroBot ~86% mAP over 8K+ annotated images plus partnerships/funding commitments. Metric definitions/measurement windows remain incomplete for several numbers, so Bixxie should preserve “roughly/approximately.”"
  },
  {
    "id": 59,
    "section": "35–63 · Universal work-experience answers",
    "question": "Why did each role end?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Internships ended on their normal internship timelines. Hyr was a project/consulting-style early-stage engagement that wrapped. ThirdSlate/Pocketlink founder periods ended as TP's direction increasingly moved toward deeper AI engineering, though exact shutdown/business circumstances are not fully documented. Berribot ended Apr 2026; the precise reason for departure is not publicly documented and should not be invented. UBC AgroBot is ongoing."
  },
  {
    "id": 60,
    "section": "35–63 · Universal work-experience answers",
    "question": "Would he work with those teams/founders again?",
    "status": "unknown",
    "statusRaw": "UNKNOWN/PERSONAL",
    "visibility": "CONDITIONAL",
    "answer": "No canonical yes/no exists for every team. Bixxie should not make interpersonal judgments about former colleagues without explicit TP input. It can say he credits founders, engineers, professors and collaborators with materially shaping how he thinks about products and engineering."
  },
  {
    "id": 61,
    "section": "35–63 · Universal work-experience answers",
    "question": "What would a former manager say is his strongest trait?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "CONDITIONAL",
    "answer": "Do not impersonate a reference. The best evidence-based inference is **ownership across boundaries**: TP often moves from the assigned technical problem into measurement, product workflow, reliability and delivery. Bixxie should phrase that as “his work suggests…” rather than “his manager would say…”"
  },
  {
    "id": 62,
    "section": "35–63 · Universal work-experience answers",
    "question": "What would a former manager say he needs to improve?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "CONDITIONAL",
    "answer": "TP's self-identified improvement area is overbuilding/over-optimizing before proving a user need. He also gets impatient with unnecessary slowness. The mature version of that lesson is to validate earlier, reduce scope when appropriate, and distinguish reversible decisions from high-risk ones."
  },
  {
    "id": 63,
    "section": "35–63 · Universal work-experience answers",
    "question": "What proof exists for the roles?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Proof surfaces include `thrn.im` case studies, public GitHub repositories, company/team websites, the IJCRR publication, demos such as RepoView/Outpay, and private/collaborative source evidence where appropriate. Bixxie should prefer portfolio case study → public repo/README → demo, while never exposing private company code, customer data, credentials, or confidential screenshots."
  },
  {
    "id": 64,
    "section": "64–96 · Berribot",
    "question": "What exact problem existed before the ranking system?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "The prior candidate-ranking path was too slow/costly and produced too many irrelevant or false-positive recommendations. TP benchmarked the workflow at **100 job descriptions × 1,000 resumes** and moved the system away from a single opaque matching idea toward staged retrieval and ranking. The business problem was recruiter time: surface a smaller, more relevant shortlist that a recruiter can inspect."
  },
  {
    "id": 65,
    "section": "64–96 · Berribot",
    "question": "Who used the Berribot ranking system?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "The direct users were **recruiters/hiring workflow users** reviewing candidate recommendations and shortlists. TP also participated in client discovery/onboarding conversations, so recruiter feedback was part of the loop rather than an offline research proxy."
  },
  {
    "id": 66,
    "section": "64–96 · Berribot",
    "question": "What did TP personally own?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He was the **primary owner of JD-to-candidate matching/ranking architecture and implementation**, plus ranking evaluation. He also built/contributed to resume parsing/taxonomy, initiated and led core BerriTutor development, proposed/implemented LLM evaluation infrastructure, contributed interview-integrity signals, integrated recruiting workflows, and deployed production services."
  },
  {
    "id": 67,
    "section": "64–96 · Berribot",
    "question": "What did teammates own?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Berribot's broader platform included outreach, screening/interview, proctoring/integrity and other recruiting workflows. TP should not be represented as sole builder of the entire company product. The exact per-person map is not documented, so Bixxie should anchor to the ownership ledger above."
  },
  {
    "id": 68,
    "section": "64–96 · Berribot",
    "question": "Describe the request flow from JD to ranked candidates.",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "A job description feeds two complementary retrieval paths: **BM25 lexical retrieval** and **dense retrieval using `gemini-embedding-001`**. Their ranked lists are fused with **Reciprocal Rank Fusion (RRF)** to produce a reduced candidate set. That set is scored by a **Qwen3 cross-encoder reranker**, features are assembled, and **LambdaMART** produces the final order using recruiter relevance judgments. The design spends expensive scoring only after broad retrieval has narrowed the set."
  },
  {
    "id": 69,
    "section": "64–96 · Berribot",
    "question": "Where did BM25 run and what fields were indexed?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "BM25 was the lexical branch over candidate text/profile information and existed specifically to preserve exact-skill/term matching that dense search can miss. The exact search engine/index implementation and field weighting are not reliably documented; Bixxie should not invent Elasticsearch/OpenSearch/etc. merely because BM25 often runs there."
  },
  {
    "id": 70,
    "section": "64–96 · Berribot",
    "question": "Why `gemini-embedding-001`?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "It was used for the dense semantic retrieval branch so candidates could match a JD even when wording differed. The architecture intentionally paired semantic retrieval with BM25 instead of asking embeddings to do everything. A documented head-to-head embedding-model bakeoff is not available, so do not invent one."
  },
  {
    "id": 71,
    "section": "64–96 · Berribot",
    "question": "Which vector index/database and similarity metric were used?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "Not reliably documented. Bixxie may say dense retrieval used `gemini-embedding-001`, but should not name a vector database, ANN index, or similarity metric without an additional source."
  },
  {
    "id": 72,
    "section": "64–96 · Berribot",
    "question": "How many candidates came from each retrieval branch before fusion?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "The architecture used a fused top-K before reranking, but the exact BM25 K, dense K and fused K are not currently recorded. Do not manufacture values."
  },
  {
    "id": 73,
    "section": "64–96 · Berribot",
    "question": "Why RRF instead of weighted-score fusion?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "Because BM25 and dense retrieval produce scores on different scales that are not naturally comparable. RRF combines **rank positions** instead of pretending the raw scores share a calibrated meaning. It is simple, robust, and gave a clean way to exploit lexical and semantic retrieval before the more expensive reranker."
  },
  {
    "id": 74,
    "section": "64–96 · Berribot",
    "question": "What RRF constant/settings were used?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "The current portfolio does not preserve the exact RRF `k`/constant or sensitivity analysis. Bixxie should explain the choice conceptually but not invent configuration values."
  },
  {
    "id": 75,
    "section": "64–96 · Berribot",
    "question": "Where was the Qwen reranker hosted and why was it chosen?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "A **Qwen3 reranker/cross-encoder** was used to score JD–candidate pairs after fusion because pairwise semantic scoring is more accurate but too expensive to run across the full corpus. Exact model size/hosting hardware has appeared inconsistently across records, so the safe statement is Qwen3 reranking on the fused set; do not assert a hosting topology unless verified."
  },
  {
    "id": 76,
    "section": "64–96 · Berribot",
    "question": "How many candidates were reranked per query?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "Not currently documented. The correct architecture-level answer is “only the fused top-K, to bound cost/latency,” without inventing K."
  },
  {
    "id": 77,
    "section": "64–96 · Berribot",
    "question": "Why add LambdaMART after a cross-encoder?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "The reranker provides a strong semantic relevance signal, but the final ranking can benefit from **multiple structured signals and recruiter judgments**. LambdaMART lets the system learn how to combine those ranking features rather than relying on hand-tuned fixed weights. It therefore bridges semantic pair scoring and the actual recruiter definition of a good shortlist."
  },
  {
    "id": 78,
    "section": "64–96 · Berribot",
    "question": "What features went into LambdaMART?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The case study confirms a ranking-feature assembly stage combining retrieval/reranking signals before LambdaMART. The exact feature vector is not fully documented, so Bixxie should not list fabricated signals such as years-of-experience, location, recency, etc. unless later verified."
  },
  {
    "id": 79,
    "section": "64–96 · Berribot",
    "question": "Where did LambdaMART training labels come from?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The documented source is **recruiter relevance judgments**. The exact label scale, sampling protocol, train/validation split and number of judgments are not preserved in current public data."
  },
  {
    "id": 80,
    "section": "64–96 · Berribot",
    "question": "What were nDCG/MRR/Recall before and after?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Those were the documented ranking metrics, tracked with Weights & Biases, but the exact before/after numeric values are not present in the current source of truth. Bixxie should not substitute the business metrics (42%/30%/35%) as if they were nDCG/MRR/Recall."
  },
  {
    "id": 81,
    "section": "64–96 · Berribot",
    "question": "How large was the evaluation set?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The investigation benchmark was **100 JDs × 1,000 resumes**. That establishes benchmark scale, but it does not by itself establish the number of manually judged relevance labels or every evaluation split. Keep those separate."
  },
  {
    "id": 82,
    "section": "64–96 · Berribot",
    "question": "How did he avoid leakage/overfitting?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "No verified protocol is currently recorded. Bixxie should not claim a held-out methodology that is not documented."
  },
  {
    "id": 83,
    "section": "64–96 · Berribot",
    "question": "What was end-to-end p50/p95 latency?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "Not documented. The architecture clearly reduces expensive work by reranking only a fused top-K, but there are no safe p50/p95 numbers in the current knowledge base."
  },
  {
    "id": 84,
    "section": "64–96 · Berribot",
    "question": "What latency did each ranking stage add?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "Not documented. Do not reverse-engineer latency from generic model benchmarks."
  },
  {
    "id": 85,
    "section": "64–96 · Berribot",
    "question": "What did ranking cost per request/month?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 86,
    "section": "64–96 · Berribot",
    "question": "What did Celery/Redis do?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Berribot's production stack included **Celery + Redis** for asynchronous/background work so long-running or batch processing did not block request/interactive paths. The exact queue names/job taxonomy are not preserved. If someone asks at implementation depth, state that the specific task map is not documented."
  },
  {
    "id": 87,
    "section": "64–96 · Berribot",
    "question": "How were GKE and Cloud Run divided?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "TP deployed multiple containerized services through GitHub Actions/Artifact Registry into **GKE and Cloud Run**. The current portfolio proves both were used but does not safely map each service to one platform. Do not invent a “stateful on GKE/stateless on Cloud Run” division unless verified."
  },
  {
    "id": 88,
    "section": "64–96 · Berribot",
    "question": "Was Berribot uptime 99.2% or 99.8%?",
    "status": "conflict",
    "statusRaw": "CONFLICT",
    "visibility": "PUBLIC WITH DISCLOSURE",
    "answer": "Two sources disagree: the older Master Work Inventory says **99.2%**, while the newer portfolio/case study says **≈99.8%**. Until the measurement source/window is checked, Bixxie should either say “roughly 99%+ production availability” or explicitly disclose the discrepancy rather than choosing the higher figure."
  },
  {
    "id": 89,
    "section": "64–96 · Berribot",
    "question": "What do the scale claims mean?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC WITH CARE",
    "answer": "The strongest grounded scale facts are **1,000+ daily applicant submissions**, **500+ daily candidate evaluations**, the **100×1,000 ranking benchmark**, and **4+ services deployed**. Some prior material refers to thousands of concurrent BerriTutor/interview sessions, but the exact test/production definition is not sufficiently grounded; Bixxie should not present those as audited production concurrency without verification."
  },
  {
    "id": 90,
    "section": "64–96 · Berribot",
    "question": "Describe a real Berribot production incident.",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "A verified pattern is that TP audited **inconsistent AI/model outputs in production** across hundreds of daily evaluations and used tracing/evaluation to make those failures inspectable. However, the full incident chronology — symptom, timestamp, root cause, concrete fix, prevention — is not captured well enough to invent a postmortem. For deep interviews, Bixxie should say a detailed incident story is not presently documented."
  },
  {
    "id": 91,
    "section": "64–96 · Berribot",
    "question": "What retrieval edge cases caused the worst failures?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The architecture itself indicates the failure class: lexical-only retrieval misses semantically equivalent wording, while dense-only retrieval can miss exact terms/skills and produce plausible-but-wrong matches. The hybrid design was meant to cover those complementary failure modes. Specific anonymized candidate/JD examples are not recorded."
  },
  {
    "id": 92,
    "section": "64–96 · Berribot",
    "question": "What tried approach failed to improve ranking?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The known “before” state had latency/cost/scalability problems and high false positives; the project moved away from relying on a simpler matching path toward staged retrieval/ranking. It is not safe to invent a named failed fusion algorithm/model experiment that is not recorded."
  },
  {
    "id": 93,
    "section": "64–96 · Berribot",
    "question": "What did Langfuse trace?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Langfuse was introduced for **agent/model tracing, prompt management/versioning and evaluation**, so the team could compare behavior and inspect regressions rather than debug prompts manually. Exact captured fields (every token/cost/tool span/etc.) are not fully documented."
  },
  {
    "id": 94,
    "section": "64–96 · Berribot",
    "question": "What did the 800+ LLM-as-a-judge tests test?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The suite supported repeatable evaluation of prompts/application behavior and regression detection across AI workflows. The design combined LLM-as-judge with deterministic checks and trace inspection. The exact rubric dimensions, human calibration set and inter-rater agreement are not currently documented, so those should remain unknown."
  },
  {
    "id": 95,
    "section": "64–96 · Berribot",
    "question": "Describe BerriTutor and TP's role.",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "TP **initiated and led core development** of a voice-first AI tutor. The flow used **LiveKit/WebRTC** for low-latency voice, persistent user context through **Supermemory**, a Python multi-agent/orchestration layer, LLM reasoning and speech responses. His interest was not “voice chat” alone but personal tutoring that remembers the learner. Exact production-concurrency evidence should remain conservative."
  },
  {
    "id": 96,
    "section": "64–96 · Berribot",
    "question": "What would TP redesign at Berribot today?",
    "status": "partial",
    "statusRaw": "PARTIAL/INFERRED FROM HIS CURRENT ENGINEERING PHILOSOPHY",
    "visibility": "PUBLIC",
    "answer": "He would likely make measurement and provenance even more first-class: freeze better eval sets earlier, preserve exact metric definitions/windows, make stage-level latency/cost observable, and keep ownership between retrieval, reranking, LTR and business outcomes explicit. That aligns with what he has learned since: build the measurement system alongside the AI feature, not after it becomes difficult to reason about. This should be framed as a current retrospective, not a claim that those pieces were absent."
  },
  {
    "id": 97,
    "section": "97–117 · ThirdSlate",
    "question": "Why did TP start ThirdSlate?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "ThirdSlate came from a problem TP understood personally: learning from dense course material while knowing that a fluent AI answer is not automatically a trustworthy one. He wanted to build a study product where answers were grounded in the student's own course evidence, then use that product as a serious engineering environment for RAG, agents, memory, evaluation, and human review. The long-term lesson was important to his current direction: he became more interested in making AI systems reliable than simply wrapping a model in a student-facing UI."
  },
  {
    "id": 98,
    "section": "97–117 · ThirdSlate",
    "question": "Who were the co-founders and how was ownership divided?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "CONDITIONAL",
    "answer": "ThirdSlate was collaborative and TP was a co-founder, but the current knowledge base does not contain a complete co-founder roster or a defensible ownership percentage/task matrix. What is safe: TP owned major product/technical areas including the RAG pipeline, LangGraph workflow, grounding/human-review gate, and evaluation harness. Bixxie should not imply sole ownership of the whole company."
  },
  {
    "id": 99,
    "section": "97–117 · ThirdSlate",
    "question": "What did TP own as a founder beyond code?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "He helped define the product around a real student problem, made architecture/product decisions around trust, citations, human review and personalization, shipped the product, and used evaluation results to guide iteration. Founder experience also taught him that a technically elegant system does not matter if nobody needs it. Specific fundraising, equity, hiring or sales responsibilities are not sufficiently documented and should not be invented."
  },
  {
    "id": 100,
    "section": "97–117 · ThirdSlate",
    "question": "Describe the three-service/production architecture.",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The product used a **Next.js/React frontend and API layer**, **Supabase Auth/Postgres/pgvector/storage**, and **FastAPI/Python AI services**. The Next.js side authenticated students, validated requests and streamed responses; FastAPI revalidated identity and orchestrated the RAG/agent workflow; document-processing paths extracted/normalized/chunked course material into vector storage. Deployment history includes Docker, GitHub Actions and Kubernetes/EKS. Earlier records mention three FastAPI microservices, but the precise final service names/boundaries are not consistently preserved, so Bixxie should describe the functional layers rather than fabricate names."
  },
  {
    "id": 101,
    "section": "97–117 · ThirdSlate",
    "question": "What exactly did LangGraph orchestrate?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "LangGraph represented the tutoring workflow as explicit state rather than one giant prompt. The documented flow covered **retrieval/context assembly → answer generation → grounding/evidence check → optional revision/human-review decision → citation handling → streaming/persistence**, with checkpointed agent state. That structure made failures inspectable and allowed the system to pause rather than always forcing an answer."
  },
  {
    "id": 102,
    "section": "97–117 · ThirdSlate",
    "question": "How did Mem0 memory differ from ordinary conversation history?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Recent chat history was one source of short-term conversational context. **Mem0** was used for longer-lived student preferences/personal context that could be recalled beyond the immediate transcript. ThirdSlate also had semantic/session memory and LangGraph checkpoint state, so “memory” was deliberately separated into different jobs rather than one ever-growing prompt. The exact final production usage of Mem0 should still be described as documented product scope rather than overstated."
  },
  {
    "id": 103,
    "section": "97–117 · ThirdSlate",
    "question": "How were documents chunked?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The pipeline was **upload → extract → normalize → chunk → embed → pgvector**, with course/user/material scoping. The exact chunk size, overlap, semantic-splitting policy and per-file heuristics are not preserved in the canonical source. Bixxie should explain the pipeline and admit the configuration is not currently documented rather than inventing standard values."
  },
  {
    "id": 104,
    "section": "97–117 · ThirdSlate",
    "question": "Why was the embedding model chosen?",
    "status": "conflict",
    "statusRaw": "CONFLICT/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Historical records differ: some ThirdSlate material says **Google embeddings**, while newer portfolio data lists **OpenAI embeddings / `text-embedding-3-small`**. That could reflect a migration, but it is not proven. Bixxie should not silently choose one. The durable design point is that course chunks were embedded into pgvector for scoped semantic retrieval."
  },
  {
    "id": 105,
    "section": "97–117 · ThirdSlate",
    "question": "What did pgvector store and how was search configured?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "pgvector stored embeddings for course/knowledge material and supported scoped vector similarity search. Retrieval was constrained by authenticated user/course/material context so one student's evidence could not casually bleed into another's workspace. Exact index type, distance operator and tuning parameters are not currently documented."
  },
  {
    "id": 106,
    "section": "97–117 · ThirdSlate",
    "question": "Was retrieval lexical, dense or hybrid? Was there reranking?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The strongest repository evidence supports **dense vector retrieval** over course evidence, returning up to about five relevant knowledge items before generation. The current canonical record does not establish BM25 hybrid retrieval or a separate cross-encoder reranker at ThirdSlate. Bixxie should not borrow Berribot's architecture and project it onto ThirdSlate."
  },
  {
    "id": 107,
    "section": "97–117 · ThirdSlate",
    "question": "What does the 89% RAGAS result mean?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "The documented number is approximately **89% RAGAS faithfulness** over a **500+ case evaluation suite spanning eight knowledge domains**. It represents evidence support/groundedness, not generic “model accuracy.” Exact version, aggregation method, frozen-test composition and confidence intervals are not preserved, so the number should stay approximate and scoped."
  },
  {
    "id": 108,
    "section": "97–117 · ThirdSlate",
    "question": "What does the 94% relevance result mean?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "The portfolio records **~94% response relevance** on the internal/live benchmark. It should be described as an evaluation result for the tutoring system, not as “94% correct answers.” The exact evaluator definition — RAGAS answer relevancy versus another automated/human rubric — needs verification."
  },
  {
    "id": 109,
    "section": "97–117 · ThirdSlate",
    "question": "What does the 38% hallucination-reduction claim mean?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC WITH CAVEAT",
    "answer": "The reduction followed the grounding/review improvements: retrieve evidence, generate, run a grounding critic, revise/escalate weakly grounded drafts, and attach citations. The exact baseline definition and measurement procedure are not fully preserved. Use **“roughly 38% reduction in measured hallucination rate in the internal evaluation”** rather than presenting it as a universal model property."
  },
  {
    "id": 110,
    "section": "97–117 · ThirdSlate",
    "question": "What were the worst hallucination modes?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The key failure class was a response that was **fluent and plausible but not actually supported by the student's course material**. Another trust risk was retrieving the wrong/insufficient context and then producing a confident answer anyway. ThirdSlate's grounding critic, citations and human-review branch were designed around those silent failures. Specific anonymized examples are not stored in the current source."
  },
  {
    "id": 111,
    "section": "97–117 · ThirdSlate",
    "question": "How did citation generation/verification work?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Retrieved course evidence was preserved through the answer pipeline, and citations were mapped back to the source material used to support the response. The grounding step compared the draft against evidence before final release; weak cases could be revised or reviewed by a person. Exact citation-span matching/verification code is not summarized deeply enough to claim sentence-level entailment."
  },
  {
    "id": 112,
    "section": "97–117 · ThirdSlate",
    "question": "What were response latency and model cost?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 113,
    "section": "97–117 · ThirdSlate",
    "question": "What happened when Gemini or another dependency failed?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The architecture had service boundaries, health/deployment checks, and an evaluation/review path, but a specific provider-outage fallback policy is not reliably documented. Do not claim multi-provider failover merely because TP built it in Tekkscope later."
  },
  {
    "id": 114,
    "section": "97–117 · ThirdSlate",
    "question": "How did ThirdSlate acquire its first 10, 100 and 1,000 users?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "FOUNDER",
    "answer": "The product reached **1,000+ users**, but the acquisition channel breakdown is not in the canonical record. Bixxie should not invent campus ambassadors, paid ads, virality, or particular launch channels."
  },
  {
    "id": 115,
    "section": "97–117 · ThirdSlate",
    "question": "What student feedback changed the roadmap?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "FOUNDER",
    "answer": "The documented product evolution emphasizes grounded answers, citations, personalization, practice/quiz generation and human review, which are responses to trust/usefulness needs. A specific quote or “user asked X, so we built Y” story is not preserved well enough to state as fact."
  },
  {
    "id": 116,
    "section": "97–117 · ThirdSlate",
    "question": "Why did ThirdSlate end in March 2026?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The strongest personal account is that TP's interests increasingly shifted from only building the education product toward the **underlying AI engineering problems themselves** — RAG, agents, evaluation, reliability and production systems. The precise business/legal shutdown context is not documented, so Bixxie should not invent founder conflict, funding failure or revenue reasons."
  },
  {
    "id": 117,
    "section": "97–117 · ThirdSlate",
    "question": "What would he change if restarting ThirdSlate?",
    "status": "known",
    "statusRaw": "KNOWN/RETROSPECTIVE",
    "visibility": "PUBLIC",
    "answer": "He would likely put **evaluation, retrieval-quality measurement, and user validation even earlier**, keep the initial product scope narrower, and treat trust/grounding as a first-class product feature from day one. He would also preserve exact metric provenance and test data more rigorously. This reflects his broader lesson: build the smallest useful thing, measure it, then deepen the architecture where reality says it matters."
  },
  {
    "id": 118,
    "section": "118–131 · Pocketlink",
    "question": "What problem did Pocketlink originally solve?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Pocketlink was built to give creators one place to **publish their identity/work, measure engagement, and monetize**, rather than stitching together a basic link page plus separate commerce/analytics tools. It became a creator/link-in-bio product with a customizable visual profile/editor, custom domains, analytics, conversion integrations and commerce."
  },
  {
    "id": 119,
    "section": "118–131 · Pocketlink",
    "question": "Who were the co-founders and what did TP own?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "TP was a **co-founder and full-stack/product engineer** and describes himself as having built most of the product and owned product/engineering releases. The complete co-founder roster and ownership split are not in the current Bixxie source, so do not invent them."
  },
  {
    "id": 120,
    "section": "118–131 · Pocketlink",
    "question": "What was the editor's data model?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The product had a customizable **bento-grid profile/editor**, but the exact block schema, persistence model, layout constraints and serialization format are not reliably documented. Bixxie should describe the capability without fabricating implementation details."
  },
  {
    "id": 121,
    "section": "118–131 · Pocketlink",
    "question": "How did autosave/conflict prevention work?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "Not currently documented. Do not invent debouncing, optimistic concurrency, CRDTs or revision IDs."
  },
  {
    "id": 122,
    "section": "118–131 · Pocketlink",
    "question": "How did custom-domain provisioning work?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Custom domains were a shipped Pocketlink capability. The exact DNS-verification/SSL/provisioning stack is not safely established in the canonical work inventory. Bixxie can say TP shipped custom domains but should not attribute Route 53, Cloudflare, ACME, or a particular CDN unless source code confirms it."
  },
  {
    "id": 123,
    "section": "118–131 · Pocketlink",
    "question": "How did commerce work?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Commerce/monetization was part of Pocketlink and sat alongside creator publishing/analytics. The exact payment processor, order model, webhooks and fulfillment flow are not in the grounded record. Avoid importing details from Outpay."
  },
  {
    "id": 124,
    "section": "118–131 · Pocketlink",
    "question": "How did analytics work?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "TP built real-time data pipelines and growth dashboards tracking **30+ creator-behavior signals**, then used behavior data alongside direct creator feedback to guide product decisions. The underlying event store/warehouse and exact aggregation architecture are not established."
  },
  {
    "id": 125,
    "section": "118–131 · Pocketlink",
    "question": "How did campaign scheduling/delivery work?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Prior portfolio descriptions include creator/growth tooling, but the canonical record does not safely establish a campaign scheduler architecture. Do not manufacture queues, cron or email providers."
  },
  {
    "id": 126,
    "section": "118–131 · Pocketlink",
    "question": "What were the largest tables/data volumes?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "Not documented. The user count is known; storage/query volume is not."
  },
  {
    "id": 127,
    "section": "118–131 · Pocketlink",
    "question": "What was Pocketlink's peak traffic and architecture behavior?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The product reached **24,000+ users/creators**, which proves meaningful user adoption, but peak RPS/concurrency/MAU and bottlenecks are not documented. Bixxie should not turn user count into traffic statistics."
  },
  {
    "id": 128,
    "section": "118–131 · Pocketlink",
    "question": "How did Pocketlink reach 24,000+ users?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "FOUNDER",
    "answer": "TP conducted creator interviews, founder outreach and ecosystem/partnership conversations, while product analytics informed iteration. The exact acquisition breakdown — organic/referral/paid/partnership — is not documented. What is safe is that growth was connected to founder-led product iteration, not just a classroom launch."
  },
  {
    "id": 129,
    "section": "118–131 · Pocketlink",
    "question": "What activation, retention or revenue metrics did he track?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "FOUNDER",
    "answer": "A documented product metric is about **22% improvement in creator engagement** after using behavior analytics to identify conversion patterns, and the platform tracked 30+ behavior signals. Exact activation/retention/revenue figures are unavailable and should not be invented."
  },
  {
    "id": 130,
    "section": "118–131 · Pocketlink",
    "question": "What was his biggest Pocketlink mistake?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Pocketlink is the clearest place where TP learned the recurring lesson that he could **build too much before proving what users needed**. The product taught him that building software and building a product are different skills: user value, distribution and feedback can matter more than a beautiful architecture. He now tries to get the smallest useful version into someone's hands sooner."
  },
  {
    "id": 131,
    "section": "118–131 · Pocketlink",
    "question": "Why did Pocketlink stop/end?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The founder period ended in **Feb 2025**. TP's own retrospective says his interests moved increasingly toward AI systems and deeper applied-AI engineering. Exact company shutdown/business circumstances are not established enough to invent a single-cause narrative."
  },
  {
    "id": 132,
    "section": "132–143 · UBC AgroBot",
    "question": "Resolve the exact AgroBot title timeline.",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "**Machine Learning Engineer: Oct 2023–Present. Internal Operations & Technical Lead: Jan 2024–Present. Corporate Relations Lead: Jan 2024–Present.** This is TP's current ongoing engineering/design-team role."
  },
  {
    "id": 133,
    "section": "132–143 · UBC AgroBot",
    "question": "What physical problem was AgroBot solving?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "UBC AgroBot is a multidisciplinary agricultural robotics team. The flagship work includes **precision intra-row weeding and crop-data collection**, where perception quality matters because the robot needs to distinguish crops from weeds/field background before downstream action."
  },
  {
    "id": 134,
    "section": "132–143 · UBC AgroBot",
    "question": "How big was the team and what subteams existed?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The team spans multiple engineering disciplines and TP's operations work coordinated across **seven cross-functional leads** and multiple active workstreams. Exact total membership/subteam headcount is not canonical. Bixxie should say multidisciplinary — software/ML, robotics/mechanical/electrical/research/operations — without inventing exact headcount."
  },
  {
    "id": 135,
    "section": "132–143 · UBC AgroBot",
    "question": "What ML problems did TP work on?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "He worked on **agricultural computer vision**, especially crop/maize detection for perception in a precision-agriculture context. He trained/compared **YOLO and Faster R-CNN** approaches and supported the data/annotation pipeline feeding them."
  },
  {
    "id": 136,
    "section": "132–143 · UBC AgroBot",
    "question": "What datasets, models and hardware did he use?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The documented dataset contains **8,000+ annotated agricultural images**. Models include YOLO and Faster R-CNN, with Python/PyTorch/OpenCV in the public stack. The exact camera/sensor/edge-compute hardware and model variants are not sufficiently documented."
  },
  {
    "id": 137,
    "section": "132–143 · UBC AgroBot",
    "question": "Did his model run on the physical robot?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The inventory calls four models **production-tested**, but explicitly flags the exact physical-robot deployment/integration boundary for verification. Bixxie should not convert “production-tested” into “deployed autonomously on the field robot” without proof."
  },
  {
    "id": 138,
    "section": "132–143 · UBC AgroBot",
    "question": "What latency/power/environmental constraints mattered?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The general robotics context makes inference speed, field visual variation and the asymmetric cost of crop/weed mistakes important. Exact hardware latency/power budgets are not documented and should not be guessed."
  },
  {
    "id": 139,
    "section": "132–143 · UBC AgroBot",
    "question": "Explain the six partnerships and $8K+ commitments.",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "As Corporate Relations Lead, TP built an **80+ prospect pipeline**, ran **five targeted outreach campaigns**, presented technical work to **25+ external stakeholders across ten engagements**, and helped convert outreach into **six active external partnerships** and **$8K+ in funding/collaboration commitments**. The split between cash, in-kind support and collaboration value is not fully verified, so Bixxie should preserve the broader “commitments” wording."
  },
  {
    "id": 140,
    "section": "132–143 · UBC AgroBot",
    "question": "Give one partnership story from cold outreach to agreement.",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "BEHAVIORAL",
    "answer": "The process is documented — target research/company fit, translate technical needs into a partner-facing case, outreach, follow-up, connect to technical leads — but a named end-to-end partner story is not in the current public record. Do not invent a company name."
  },
  {
    "id": 141,
    "section": "132–143 · UBC AgroBot",
    "question": "How did he balance technical work and operations/partnership leadership?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He used the roles as complementary rather than unrelated jobs: ML/research taught him what the technical team needed; operations exposed resource/budget/procurement constraints; corporate relations forced him to explain the same engineering work to nontechnical stakeholders. That is one reason he likes operating near the boundary between engineering and getting the larger product/team to work."
  },
  {
    "id": 142,
    "section": "132–143 · UBC AgroBot",
    "question": "Describe an AgroBot conflict/leadership challenge.",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "CONDITIONAL",
    "answer": "No defensible detailed conflict story is currently documented. Bixxie can discuss coordinating multiple leads and competing resource needs but should not fabricate interpersonal conflict."
  },
  {
    "id": 143,
    "section": "132–143 · UBC AgroBot",
    "question": "What did the design-team environment teach him?",
    "status": "known",
    "statusRaw": "KNOWN/INFERRED",
    "visibility": "PUBLIC",
    "answer": "It taught him to work in a multidisciplinary environment where engineering, research, procurement, partnerships and timelines are interdependent and where formal company structure is limited. He learned that technical leadership often means making information usable across disciplines, not only writing the model code."
  },
  {
    "id": 144,
    "section": "144–150 · Uniffy.me",
    "question": "What was Uniffy and TP's title?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Uniffy is an insurance/benefits infrastructure platform that consolidates policy, claims/member servicing and embedded-insurance-style workflows. TP was a **Software Engineering Intern**, May–Aug 2025, working remotely."
  },
  {
    "id": 145,
    "section": "144–150 · Uniffy.me",
    "question": "What were the four insurance APIs?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "TP integrated **four third-party insurance data APIs** into a unified workflow and normalized their records. The provider names are not safely documented, so Bixxie should not invent them or expose confidential partners."
  },
  {
    "id": 146,
    "section": "144–150 · Uniffy.me",
    "question": "How did reconciliation work before and after?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Before, fragmented provider data required repeated manual reconciliation before records could be trusted downstream. TP's integration/standardization and automation reduced that manual work and made provider records flow through a more consistent schema/workflow. Exact matching keys/exception rules are not recorded."
  },
  {
    "id": 147,
    "section": "144–150 · Uniffy.me",
    "question": "What does the 65% reconciliation improvement mean?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The documented metric is **~65% reduction in manual reconciliation time/work across 2,000+ weekly transactions**, plus **40+ analyst hours/month** removed through automation. The precise study window/baseline is not preserved, so keep the metric approximate and describe the operational unit."
  },
  {
    "id": 148,
    "section": "144–150 · Uniffy.me",
    "question": "Describe the RBAC/audit model.",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "TP implemented **role-based access control across three permission tiers** and audit logging so sensitive insurance/user workflows had explicit access boundaries and traceability. Supabase Auth/JWT/OAuth patterns are documented in related records. Exact tier names/permissions are not known."
  },
  {
    "id": 149,
    "section": "144–150 · Uniffy.me",
    "question": "What was the hardest production bug at Uniffy?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "No specific incident chronology is currently documented. Do not invent one from the existence of multi-provider integrations."
  },
  {
    "id": 150,
    "section": "144–150 · Uniffy.me",
    "question": "What did Uniffy teach him that founder projects did not?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "It gave him more experience inside a system where **existing users depend on reliability**, and where the “boring” parts — provider APIs, schema normalization, permissions, auditability, caching, real-time infrastructure and reconciliation — matter as much as a novel feature. That reinforced his interest in production engineering rather than prototype-only work."
  },
  {
    "id": 151,
    "section": "151–157 · Hyr",
    "question": "What was TP's exact Hyr relationship?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Use **Founding Engineer / Technical Consultant**, Jan–Jul 2024, Singapore startup context, remote. The engagement was early and project-oriented; current portfolio uses Founding Engineer, while older records use Technical Consultant."
  },
  {
    "id": 152,
    "section": "151–157 · Hyr",
    "question": "How early was he?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "His own description is that the appeal was essentially staring at an **empty repository** and building the recruiting product from zero. The portfolio frames him as the first/founding engineer. Do not attach a numbered-employee claim unless verified."
  },
  {
    "id": 153,
    "section": "151–157 · Hyr",
    "question": "What business problem did Hyr solve?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Hyr aimed to reduce recruiter effort between a job description and an auditable shortlist: parse candidate resumes, normalize experience/skills, score/match them to roles, let recruiters validate the data, and later support automated interview/evaluation workflows."
  },
  {
    "id": 154,
    "section": "151–157 · Hyr",
    "question": "What system did he build?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "The MVP used **React, Node.js, FastAPI, PostgreSQL, Gemini and spaCy**. Resume input became structured candidate profiles; skills/titles/work history were normalized; matching/scoring ranked **1,200+ records**; recruiters reviewed the result. Later case-study architecture also includes structured-output JD generation, Pydantic validation, Celery async work, embeddings/pgvector, multi-stage AI interviews and evaluation."
  },
  {
    "id": 155,
    "section": "151–157 · Hyr",
    "question": "What was his biggest independent technical decision?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "FOUNDER/TECHNICAL",
    "answer": "A strong documented design choice was to use a **staged, inspectable workflow — parse → normalize → score → rank → review — rather than collapsing recruiting into one opaque LLM call**. That pattern became a recurring engineering preference for TP: structure over opaque “AI magic.”"
  },
  {
    "id": 156,
    "section": "151–157 · Hyr",
    "question": "Give an ambiguity example.",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "FOUNDER",
    "answer": "Hyr itself is the example: the starting point was a recruiting problem, not a mature codebase/spec. TP had to translate the workflow into product/data structures and determine the shortest useful path from job intake to a recruiter-validated shortlist. Precise meeting-by-meeting decisions are not stored."
  },
  {
    "id": 157,
    "section": "151–157 · Hyr",
    "question": "Why did Hyr end?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "It was a consulting/project-based early-stage engagement and that chapter wrapped in July 2024. No dramatic resignation/failure story is documented, so Bixxie should not create one."
  },
  {
    "id": 158,
    "section": "158–165 · RK&GT Technologies",
    "question": "Confirm title and dates.",
    "status": "conflict",
    "statusRaw": "CONFLICT",
    "visibility": "PUBLIC",
    "answer": "Use **Machine Learning Engineer Intern** (also historically described as Software Engineer). Dates are unresolved between **Jun–Aug 2023** and **May–Sep 2023**. Do not hide the discrepancy if exact dates are asked."
  },
  {
    "id": 159,
    "section": "158–165 · RK&GT Technologies",
    "question": "What did RK&GT do and what product/client did TP work on?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "TP's work combined **RFID data engineering/localization/anomaly monitoring**, NLP/document-style processing, synthetic-data ML, backend optimization and a React monitoring dashboard. The exact client name/business context is not publicly documented and should not be invented."
  },
  {
    "id": 160,
    "section": "158–165 · RK&GT Technologies",
    "question": "What NLP task processed 10K+ records?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "He built scalable **spaCy NLP pipelines over 10,000+ records** for classification/anomaly/document intelligence related work. Some current portfolio copy emphasizes finding information inside PDFs, while the master inventory ties the NLP to RFID-related anomaly/classification. Because the descriptions differ, Bixxie should avoid over-specific linkage unless the source code/case study resolves it."
  },
  {
    "id": 161,
    "section": "158–165 · RK&GT Technologies",
    "question": "What does 85% classification mean?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Historical material calls it approximately **85% text-classification accuracy**. There is no safe evidence that it was F1/precision/recall. Bixxie should use “accuracy” and avoid relabeling the metric."
  },
  {
    "id": 162,
    "section": "158–165 · RK&GT Technologies",
    "question": "What latency was reduced 20%?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "TP parallelized ingestion across **four RFID streams**, reducing backend/data-processing pipeline latency by roughly **20%**. Exact milliseconds before/after are not documented."
  },
  {
    "id": 163,
    "section": "158–165 · RK&GT Technologies",
    "question": "What were the “40+ defects”?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "He built automated end-to-end regression/testing workflows that caught **40+ critical/pre-release defects** across the integrated data/API/automation/monitoring system. The individual defect list is not in the canonical record."
  },
  {
    "id": 164,
    "section": "158–165 · RK&GT Technologies",
    "question": "Which models/frameworks were involved?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Python, spaCy, TensorFlow/Keras, PostgreSQL, React and REST APIs are grounded. GAN workflows were used to generate synthetic data; model/data workflow changes improved a documented downstream quality/accuracy measure by about 15%."
  },
  {
    "id": 165,
    "section": "158–165 · RK&GT Technologies",
    "question": "What would he change today?",
    "status": "partial",
    "statusRaw": "RETROSPECTIVE/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "He would define model/data-quality metrics more precisely, preserve exact labels/evaluation splits, and separate pipeline/runtime improvements from model-quality claims. That reflects how his later AI engineering became much more evaluation- and observability-driven."
  },
  {
    "id": 166,
    "section": "166–172 · Schneider Electric Sustainability Business",
    "question": "Confirm role type/title.",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "**Machine Learning Engineer Intern**, Apr–May 2021, remote/Bengaluru context."
  },
  {
    "id": 167,
    "section": "166–172 · Schneider Electric Sustainability Business",
    "question": "Was it employment, internship, project or program?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Treat it as an **internship** in the current portfolio."
  },
  {
    "id": 168,
    "section": "166–172 · Schneider Electric Sustainability Business",
    "question": "What was the CV problem/dataset?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The project used computer vision for **COVID-era workplace compliance**, detecting social-distancing violations and mask usage across employee-monitoring feeds. It processed **8+ monitoring streams across four facility zones**. The exact dataset size/source is not documented."
  },
  {
    "id": 169,
    "section": "166–172 · Schneider Electric Sustainability Business",
    "question": "Which model/framework was used?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "The exact detector architecture/framework is not safely established in the recovered records. Do not assume YOLO/OpenCV just because TP used them elsewhere."
  },
  {
    "id": 170,
    "section": "166–172 · Schneider Electric Sustainability Business",
    "question": "How was accuracy evaluated?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "A documented result is approximately **87% detection accuracy**, but the evaluation-set size, class breakdown and false-positive/false-negative metrics are unknown. Bixxie should describe the number conservatively."
  },
  {
    "id": 171,
    "section": "166–172 · Schneider Electric Sustainability Business",
    "question": "What did TP personally build?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "He contributed to image processing, person/distance identification and real-time mask-use tracking within the broader compliance pipeline. Exact module boundaries/team member ownership are not fully documented."
  },
  {
    "id": 172,
    "section": "166–172 · Schneider Electric Sustainability Business",
    "question": "Was it deployed?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The work was production-oriented and covered multiple employee-monitoring streams/zones, but the recovered source explicitly leaves open whether all streams were simultaneously live production feeds. Use “worked on a real-time monitoring system/prototype” rather than overstating deployment status."
  },
  {
    "id": 173,
    "section": "173–178 · Allotrix, SparkDial and Anna University",
    "question": "What was Allotrix and what did TP build?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Allotrix was a **MUN/conference automation product** born from a domain TP knew unusually well after ~68 MUN conferences. It automated high-friction organizer work: delegate allotment, participant communication and analytics/reporting. TP co-founded it and built/led the product from problem definition through use at real conferences."
  },
  {
    "id": 174,
    "section": "173–178 · Allotrix, SparkDial and Anna University",
    "question": "What traction did Allotrix achieve and why did it end?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The smart-allotment system handled **1,000+ delegate assignments per event**, was used across roughly **12 conferences**, supported **30+ organizers**, and automated communication to 1,000+ delegates/event. Organizer coordination time was reported down roughly 70%. Revenue/status and exact reason the project ended in Oct 2024 are not canonical."
  },
  {
    "id": 175,
    "section": "173–178 · Allotrix, SparkDial and Anna University",
    "question": "What was Allotrix's architecture?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Historical records mention JavaScript/APIs/asynchronous integrations and analytics dashboards; older material also mentions Kubernetes/Plotly and possibly Kafka, but those technology claims are explicitly flagged for verification. Bixxie should focus on the algorithmic allotment engine, automated email workflow and dashboard unless code confirms more."
  },
  {
    "id": 176,
    "section": "173–178 · Allotrix, SparkDial and Anna University",
    "question": "What was SparkDial?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "An early **Full Stack Developer** role, Mar–Apr 2020. TP built **five web applications/user-management systems** with HTML, CSS and PHP, serving **1,000+ users across three client deployments** in the historical inventory. Exact app/client names and database/auth implementation are unknown."
  },
  {
    "id": 177,
    "section": "173–178 · Allotrix, SparkDial and Anna University",
    "question": "What was the Anna University experience?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "In May 2019 TP worked as a **Computer Technician**, assembling/configuring computers, installing operating systems and development software, setting up peripherals and troubleshooting systems. It matters mainly as early evidence that his interest in computers existed below the application layer long before his AI work."
  },
  {
    "id": 178,
    "section": "173–178 · Allotrix, SparkDial and Anna University",
    "question": "Should Bixxie proactively mention these early roles?",
    "status": "known",
    "statusRaw": "KNOWN POLICY",
    "visibility": "PUBLIC/CONDITIONAL",
    "answer": "Usually **no**. Lead with current AI/founder/production experience. Mention SparkDial/Anna University when someone asks how early he started, his first technical work, or the complete timeline. They are useful origin-story context, not the strongest modern hiring signal."
  },
  {
    "id": 179,
    "section": "179–216 · Universal project record",
    "question": "What are the canonical project names and one-line descriptions?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "- **RepoView:** secure read-only sharing of private GitHub projects with recruiter/investor browsing analytics.\n- **Bixxie:** grounded generative-UI assistant for `thrn.im` that lets visitors explore TP conversationally.\n- **OutKey:** signed delegated credentials/authorization that are verifiable, auditable and replay-resistant.\n- **OutPost:** workspace for chatting across models, organizing project context and turning conversations into repeatable agent workflows.\n- **OutPay:** non-custodial USDC checkout/payment tracking for online merchants.\n- **TinyShell:** natural-language request → typed ShellIntent IR → deterministic cross-platform shell command text.\n- **TabFM Benchmark:** reproducible evaluation of TabFM versus classical tabular baselines.\n- **TraceBox:** real-browser/WebRTC test harness for voice AI agents with persistent evidence.\n- **TekkScope:** AI research system combining web search/crawling, model routing, streaming, MCP and report generation.\n- **USDT Futures Trading Bot:** webhook-driven Binance futures execution demo with position state/alerts.\n- **CovidScan:** early chest-X-ray deep-learning research that became an IJCRR paper.\n- **OpenNeural:** local-first no-code desktop ML experimentation app (alpha; useful secondary project).\n- **Synapse:** experimental infrastructure-heavy project; current canonical description is incomplete."
  },
  {
    "id": 180,
    "section": "179–216 · Universal project record",
    "question": "When did each project start/end?",
    "status": "partial",
    "statusRaw": "PARTIAL/UNKNOWN",
    "visibility": "PUBLIC WITH POLICY",
    "answer": "Project start dates are not reliably documented for most current personal repos. **Do not infer dates from first commits.** Current status/time windows can be stated where explicitly known (e.g., TabFM active by Jul 2026, TekkScope active evidence Aug–Sep 2026), but Bixxie should say “start date not currently documented” rather than fabricate."
  },
  {
    "id": 181,
    "section": "179–216 · Universal project record",
    "question": "What is each project's current state?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "**Working:** RepoView, OutKey, OutPost. **Active:** OutPay. **Inactive/paused:** TinyShell, TabFM Benchmark, TraceBox, TekkScope, USDT Futures Trading Bot, CovidScan. TekkScope is a project TP has expressed interest in bringing back. OpenNeural is alpha. “Inactive” does not mean abandoned forever; it means it is not the current active focus."
  },
  {
    "id": 182,
    "section": "179–216 · Universal project record",
    "question": "Where did the ideas come from?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "RepoView came from the practical problem of showing private source code to recruiters/investors without making it public. Bixxie came from wanting a portfolio visitor to explore the person behind the résumé conversationally. TinyShell explores safer structured NL-to-shell generation. TabFM is a benchmarking/research question. TraceBox solves the difficulty of testing voice agents under real browser/WebRTC conditions. Allotrix/Pocketlink/ThirdSlate came from domains TP directly experienced. Exact “moment of inspiration” stories for OutKey/OutPost/OutPay/TekkScope are not fully documented."
  },
  {
    "id": 183,
    "section": "179–216 · Universal project record",
    "question": "What concrete problems do the projects solve?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "The common pattern is **making opaque or fragmented workflows inspectable and useful**: safe code sharing, grounded personal knowledge, verifiable authorization, research across many sources, reliable voice-agent testing, non-custodial payment state, reproducible ML benchmarks, safe-ish structured shell intent. They are not all commercial products; some deliberately exist to explore a hard systems/research question."
  },
  {
    "id": 184,
    "section": "179–216 · Universal project record",
    "question": "Who are the intended users?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "RepoView: candidates/recruiters/investors reviewing private projects. Bixxie: anyone exploring TP's portfolio. OutPay: online merchants accepting USDC. TraceBox: teams building/testing voice agents. TekkScope: researchers/knowledge workers/agents. TinyShell: developers/researchers exploring NL-to-shell compilation. TabFM: ML practitioners/researchers benchmarking tabular models. OpenNeural: researchers/ML engineers/data scientists wanting local experimentation. Exact target users for OutKey/OutPost are developer/product teams; market segmentation is not fully finalized."
  },
  {
    "id": 185,
    "section": "179–216 · Universal project record",
    "question": "Are these real-user products or technical explorations?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Both. RepoView has been used for real private-share review sessions; Pocketlink/ThirdSlate/Hyr/Allotrix had real users; OutPay has a validated real 1-USDC merchant path but should not be marketed as proven at scale; TinyShell/TabFM are explicitly research/benchmark projects; the trading bot is an educational/demo codebase; TraceBox/TekkScope are technically substantial but do not have verified customer-scale usage in the current source."
  },
  {
    "id": 186,
    "section": "179–216 · Universal project record",
    "question": "Solo or collaborative?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "TinyShell and the trading-bot repositories currently show TP as the sole GitHub contributor. `thrn.im`/Bixxie and several personal repos are his work, but AI coding tools/commit history are not equivalent to sole intellectual authorship of every line. ThirdSlate/Pocketlink/Allotrix are collaborative founder projects. RepoView/OutKey/OutPay/TraceBox/TekkScope should be described from their repo/ownership evidence rather than assumed solo when not explicit."
  },
  {
    "id": 187,
    "section": "179–216 · Universal project record",
    "question": "What did TP personally implement?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "The safest answer is project-specific: Bixxie generative UI/grounding/security; RepoView share/security/view-tracking architecture; TinyShell IR/schema/renderers/dataset/eval; TekkScope search/crawl/routing/streaming/MCP architecture; TraceBox browser/WebRTC test runtime; OutKey credential verification/replay/security; OutPay checkout/payment-state/reconciliation prototype. Never generalize “repo exists under his account” into sole authorship if collaboration is possible."
  },
  {
    "id": 188,
    "section": "179–216 · Universal project record",
    "question": "How long did each first version take?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "FOUNDER",
    "answer": "Exact idea-to-v1 elapsed times are not documented for most projects. Bixxie should not generate “weekend build” mythology."
  },
  {
    "id": 189,
    "section": "179–216 · Universal project record",
    "question": "Describe project architecture.",
    "status": "known",
    "statusRaw": "KNOWN FOR KEY PROJECTS",
    "visibility": "TECHNICAL",
    "answer": "Detailed architectures are documented for RepoView, Bixxie, TinyShell, TekkScope, TraceBox, ThirdSlate/Berribot and portions of OutKey/OutPay. See the dedicated project sections below. For sparse repos such as OutPost/Synapse, state that the public architecture is not yet sufficiently documented."
  },
  {
    "id": 190,
    "section": "179–216 · Universal project record",
    "question": "What does each language/framework do?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Prefer functional explanations over a stack dump: Next.js/React for product/UI and route handlers; FastAPI/Python for AI/backend orchestration; Postgres/Supabase for relational/auth/storage; Redis for queues/pubsub/cache where documented; LangGraph for explicit agent state/workflows; Docker/Kubernetes/Cloud Run/EKS/GKE for deployment; Playwright/Stagehand/Chromium for browser automation; pgvector for vector retrieval; model APIs for generation/reranking/embeddings."
  },
  {
    "id": 191,
    "section": "179–216 · Universal project record",
    "question": "What are the primary data models?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "RepoView has explicit `repositories`, `shares`, `viewer_sessions`, `view_events`, `notification_deliveries`. OutPay has a normalized payment/merchant/checkout state model described as ~38 tables in prior prep, but entity names need verification. ThirdSlate models users/courses/material/chunks/sessions/memory. TraceBox models workspaces/runs/bots/evidence. Exact models for sparse projects should remain unknown."
  },
  {
    "id": 192,
    "section": "179–216 · Universal project record",
    "question": "What APIs/request flows exist?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "RepoView has token exchange, viewer confirmation/heartbeat, protected tree/blob/assets; Bixxie has a constrained `/api/bixxie` message endpoint; TekkScope exposes research/search/report/MCP surfaces; TraceBox has run/workspace APIs; the trading bot exposes `/api/webhook` plus health/test. Do not infer API surfaces for projects without code."
  },
  {
    "id": 193,
    "section": "179–216 · Universal project record",
    "question": "What auth/authorization models are used?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Supabase Auth/JWT/RLS appears in RepoView/ThirdSlate/TraceBox-related systems; RepoView adds high-entropy share tokens exchanged into hashed viewer sessions; OutKey exists specifically around signed delegated authorization; Uniffy/Berribot used RBAC/audit. Project-specific details should be stated, not collapsed into “everything uses Supabase.”"
  },
  {
    "id": 194,
    "section": "179–216 · Universal project record",
    "question": "What async/background work exists?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Examples: Celery/Redis in Berribot/Hyr-style workflows, background persistence in ThirdSlate, Redis Pub/Sub and asyncio queues in TekkScope, worker isolation in TraceBox, Node worker_threads in the trading bot, notification delivery/heartbeats in RepoView. Exact queueing is project-specific."
  },
  {
    "id": 195,
    "section": "179–216 · Universal project record",
    "question": "What caching exists?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Caching is documented in Uniffy and in general platform stacks, but not every project has a canonical cache strategy. Do not claim Redis caching simply because Redis appears elsewhere."
  },
  {
    "id": 196,
    "section": "179–216 · Universal project record",
    "question": "How are projects deployed?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Examples include Vercel/Next.js, Railway for some personal prototypes, Cloud Run for TraceBox, EKS/GKE/Kubernetes for heavier AI services, and containerized GitHub Actions pipelines. RepoView is a Next.js/Supabase/GitHub App product. The canonical deployment should be stated per project, not inferred from old experiments."
  },
  {
    "id": 197,
    "section": "179–216 · Universal project record",
    "question": "What CI/CD exists?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "GitHub Actions is used across several serious repos; Berribot/ThirdSlate have container build/deploy pipelines; TinyShell runs unit tests, compile checks and Ruff; `thrn.im` has tests/typecheck/build. Some projects have no meaningful CI and Bixxie should say so."
  },
  {
    "id": 198,
    "section": "179–216 · Universal project record",
    "question": "What automated tests exist?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Bixxie/`thrn.im` has catalog/schema/security/grounding/streaming tests. TinyShell has schema/renderer/regression tests. Berribot/ThirdSlate had LLM evaluation suites in addition to software tests. The trading bot currently has **no real automated test suite** (`npm test` is a placeholder), which should be stated plainly if asked."
  },
  {
    "id": 199,
    "section": "179–216 · Universal project record",
    "question": "What observability exists?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Langfuse/W&B for AI eval/tracing at Berribot; evaluation/health/deployment instrumentation at ThirdSlate; Redis/SSE status and research events in TekkScope; Supabase Realtime/evidence in TraceBox; structured metadata-only failures/security handling in Bixxie; event/session analytics in RepoView. Exact dashboards/alerts are not universal."
  },
  {
    "id": 200,
    "section": "179–216 · Universal project record",
    "question": "What is the current real scale?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC WITH CARE",
    "answer": "Do not collapse user counts, load tests and production traffic. Strong facts include Pocketlink 24K+ users/creators; ThirdSlate 1K+ users; Uniffy 10K+ users; Hyr pilot 4 recruiters/8 workflows/1,200+ candidate records; Berribot 1K+ applicant submissions/day and 500+ daily evaluations; Allotrix 1K+ delegates/event across ~12 conferences; RepoView real individual review sessions. Personal research projects generally lack verified production scale."
  },
  {
    "id": 201,
    "section": "179–216 · Universal project record",
    "question": "What are p50/p95/p99 latencies?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Most projects do not have canonical end-to-end latency numbers. A notable exception is **OutKey warm verification: about 0.254 ms p50 and 0.804 ms p99** in prior project evidence. TinyShell reports model-generation median latency in a controlled pilot (LFM2.5 ~1,260 ms), which is not production service latency. Never invent percentile numbers."
  },
  {
    "id": 202,
    "section": "179–216 · Universal project record",
    "question": "What do projects cost to operate?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 203,
    "section": "179–216 · Universal project record",
    "question": "What were the largest performance bottlenecks?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Examples with evidence: Berribot's expensive ranking path before staged retrieval; RK&GT ingestion across multiple RFID streams; ThirdSlate document-processing/retrieval workflow; TekkScope fan-out/crawling/model calls; TraceBox browser/WebRTC execution. Exact profiler traces are not universally documented."
  },
  {
    "id": 204,
    "section": "179–216 · Universal project record",
    "question": "What was the nastiest bug?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "No single canonical “nastiest bug” story spans all projects. Known concrete defects include stale/partial system states, provider/output inconsistency, production build/deployment issues, and the trading bot's inconsistent Firebase paths/commented balance writes found during code audit. Bixxie should not turn code-review findings into claimed incidents TP personally debugged unless documented."
  },
  {
    "id": 205,
    "section": "179–216 · Universal project record",
    "question": "Describe one outage/failure investigation.",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The best general pattern is TP's approach: detect the symptom, narrow whether it is data/model/application/infrastructure/external-provider, make the invisible measurable with logs/traces/evals, reproduce, fix, then add a guard/test. A full public postmortem with timestamps/root cause is still missing, so Bixxie should not invent one."
  },
  {
    "id": 206,
    "section": "179–216 · Universal project record",
    "question": "What security threats did he explicitly design against?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "RepoView: token leakage, cross-share access, private-key/service-role exposure, path traversal, hidden-file leakage, scanner-triggered false views, raw IP collection. Bixxie: prompt extraction, origin abuse, oversized payloads, arbitrary tool/code/UI output, provider/credential leakage. OutKey: forgery/replay/revocation/order-of-verification errors. ThirdSlate/Uniffy: cross-user/course/tenant data access. Security is one of his increasingly strong systems interests."
  },
  {
    "id": 207,
    "section": "179–216 · Universal project record",
    "question": "What alternatives did he consider?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Documented examples: Berribot chose hybrid retrieval over only lexical/dense and learned ranking over fixed weighting; ThirdSlate chose explicit graph/workflow + grounding over one free-form prompt; TinyShell chose typed IR + deterministic compiler over letting a model directly emit/execute shell; RepoView chose hashed high-entropy tokens/server-side authorization over exposing private GitHub access. Do not invent alternatives for projects where no record exists."
  },
  {
    "id": 208,
    "section": "179–216 · Universal project record",
    "question": "Which decisions had the most interesting tradeoffs?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "His recurring tradeoff is **flexibility/speed versus inspectability/safety**. He consistently gravitates toward staged/typed/observable systems even when that adds components: RRF+rereanking+LTR rather than opaque score; graph+grounding+human review rather than one prompt; typed ShellIntent rather than raw commands; token exchange/server authorization rather than convenient direct links. He has also learned not to over-apply that instinct before product need is proven."
  },
  {
    "id": 209,
    "section": "179–216 · Universal project record",
    "question": "What did he over-engineer?",
    "status": "known",
    "statusRaw": "KNOWN AS SELF-ASSESSMENT",
    "visibility": "PUBLIC",
    "answer": "His recurring mistake is making an early product “proper” before proving demand: architecture, nice-to-haves, cleanup and systems before enough user validation. He now treats this as a bias to manage rather than a virtue. The goal is not to stop caring about quality; it is to spend rigor where risk/value justify it."
  },
  {
    "id": 210,
    "section": "179–216 · Universal project record",
    "question": "What did he intentionally not build?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PRODUCT",
    "answer": "His current philosophy is to leave out things that do not prove the core user value. TinyShell deliberately does not execute model-generated commands. RepoView deliberately does not grant recipients GitHub repository access or send hidden files to the browser. Bixxie deliberately does not expose arbitrary tools/provider internals. Broader v1 feature-cut lists are not fully documented."
  },
  {
    "id": 211,
    "section": "179–216 · Universal project record",
    "question": "What measurable outcomes show projects work?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Use the strongest grounded metric appropriate to the project: user adoption (Pocketlink/ThirdSlate), workflow reductions (Berribot/Hyr/Uniffy/Allotrix), model/eval results (AgroBot/ThirdSlate/TinyShell/TabFM/CovidScan), or validated path/evidence (RepoView sessions, OutPay 1-USDC flow). Do not pretend every research project needs a user-growth metric."
  },
  {
    "id": 212,
    "section": "179–216 · Universal project record",
    "question": "What user feedback changed projects?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PRODUCT",
    "answer": "Pocketlink explicitly combined creator interviews/feedback with behavioral analytics; Berribot used recruiter/client feedback; Hyr built recruiter validation into the loop; ThirdSlate's trust design centers student evidence/review. Exact quotes/features tied to individual users are not consistently preserved."
  },
  {
    "id": 213,
    "section": "179–216 · Universal project record",
    "question": "Why did projects succeed, fail or stall?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Projects succeeded when they connected a real problem to a short feedback loop — Pocketlink users, recruiter workflows, MUN organizers. Projects stalled when TP's attention moved, when they were research explorations rather than businesses, or when the learning objective had been reached. He does not want Bixxie to rebrand every inactive repo as a failed startup."
  },
  {
    "id": 214,
    "section": "179–216 · Universal project record",
    "question": "What would he redesign today?",
    "status": "known",
    "statusRaw": "KNOWN AS GENERAL RETROSPECTIVE",
    "visibility": "PUBLIC",
    "answer": "Across older work he would: validate earlier, define metrics and ownership more rigorously, build evaluation/observability alongside AI features, simplify where complexity does not buy reliability, and document exact performance/cost/baseline evidence so future claims are auditable."
  },
  {
    "id": 215,
    "section": "179–216 · Universal project record",
    "question": "What lessons transferred into later work?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Pocketlink/Allotrix taught product/user reality; ThirdSlate taught grounding/evals; Hyr/Berribot taught structured AI decision support; Uniffy taught production integration/security; AgroBot taught multidisciplinary leadership; TinyShell/OutKey/RepoView sharpened security/typed-boundary thinking. The progression is cumulative rather than a collection of unrelated repos."
  },
  {
    "id": 216,
    "section": "179–216 · Universal project record",
    "question": "What proof links should be used?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Start with **`https://thrn.im`**, relevant case-study pages, **`https://github.com/thrns`**, **`https://repoview.thrn.im/`**, **`https://outpay.tech/`**, and public repositories such as TinyShell/TabFM/OutKey where applicable. For proprietary/private work, use sanitized case studies rather than source code. Never invent a demo URL because a repo name exists."
  },
  {
    "id": 217,
    "section": "217–226 · RepoView",
    "question": "Why build RepoView instead of adding a recruiter as a GitHub collaborator?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Because “give someone repository access” is too coarse for a portfolio-review workflow. RepoView lets TP share selected private source **read-only**, constrain what paths are visible, expire/revoke access, avoid revealing GitHub credentials, and understand whether/how the recipient actually reviewed the work. The product is specifically about controlled evidence sharing rather than turning a recruiter into a repository collaborator."
  },
  {
    "id": 218,
    "section": "217–226 · RepoView",
    "question": "Who has actually used RepoView?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC WITH PRIVACY",
    "answer": "There is real share activity. A private **TekkScope** share was opened and one later session lasted about **51 minutes**, with **31 files and two directories viewed**, one search, and no copies/downloads. This proves a real review flow; it does not justify a large user/customer count. Visitor identities should remain private unless explicitly supplied by the recipient."
  },
  {
    "id": 219,
    "section": "217–226 · RepoView",
    "question": "What is the security boundary that lets recipients read private code without GitHub access?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "GitHub credentials and installation tokens exist only on the **server**. An admin creates a high-entropy share secret; only its keyed hash is persisted. When the recipient opens `/s/<token>`, the server validates the token, share status, repository/ref and visibility rules, then exchanges it for a separate random **viewer-session token** stored as a secure HttpOnly cookie and redirects to a token-free `/view/<shareId>` URL. Every tree/file request re-authorizes the session server-side before fetching GitHub content."
  },
  {
    "id": 220,
    "section": "217–226 · RepoView",
    "question": "What GitHub App permissions does RepoView need?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "The design intentionally keeps the GitHub App minimal: repository **Contents: read-only** plus the metadata access GitHub inherently requires. It should be installed only on selected repositories. RepoView should not request administration, write access, secrets, deployment writes, issue/PR writes, or other capabilities unrelated to read-only review."
  },
  {
    "id": 221,
    "section": "217–226 · RepoView",
    "question": "How is cross-workspace/share isolation enforced?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "A visible `shareId` is **not a credential**. The server validates that the hashed viewer-session cookie exists, belongs to that exact share, the share is not expired/revoked, and the repository remains enabled. Content paths are normalized and passed through repository/share visibility policies before private bytes are fetched. Database access for public viewers goes through server code rather than privileged client access."
  },
  {
    "id": 222,
    "section": "217–226 · RepoView",
    "question": "How do analytics work?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "RepoView models repositories, shares, viewer sessions, view events and notification deliveries. It records meaningful events such as `link_opened`, `view_confirmed`, `file_viewed`, `markdown_viewed` and heartbeat/activity rather than invasive mouse telemetry. Session data can include coarse browser/device/referrer/geography signals; raw IP is deliberately not required, and any abuse/dedup signal should be keyed/hashed rather than stored as a raw address."
  },
  {
    "id": 223,
    "section": "217–226 · RepoView",
    "question": "How are notifications deduplicated and retried?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "A GET alone is not treated as a human view because link scanners may fetch links. The browser confirms a meaningful view after roughly **five seconds visible or real interaction**, then the server sets `confirmed_at`. If notifications are enabled and `notified_at` is still null, it sends the owner email and persists delivery status. Email failure must not block the recipient's valid access. Exact queue/retry policy beyond delivery records is not fully canonical."
  },
  {
    "id": 224,
    "section": "217–226 · RepoView",
    "question": "What analytics does RepoView intentionally avoid collecting?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "It intentionally avoids **raw IP storage**, high-volume mouse-move surveillance, and leaking private GitHub URLs or hidden-file bytes. The goal is “did someone meaningfully review the project and what did they inspect?” rather than fingerprinting or spying on a recipient."
  },
  {
    "id": 225,
    "section": "217–226 · RepoView",
    "question": "What is the largest real RepoView session/load?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The strongest real session evidence is the ~**51-minute TekkScope review** covering 31 files/two directories. That is useful proof of the product's intended behavior, not a scale benchmark. There is no defensible high-concurrency/RPS claim yet."
  },
  {
    "id": 226,
    "section": "217–226 · RepoView",
    "question": "Is RepoView production-ready?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "It is a **working project** with real private-share usage and a thoughtfully designed security model. TP should not oversell it as a mature multi-tenant SaaS with audited scale. The honest current framing is: working product, useful for his own recruiter/investor-sharing workflow, still being iterated."
  },
  {
    "id": 227,
    "section": "227–240 · Bixxie",
    "question": "What is Bixxie's real product thesis?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "A static portfolio forces every visitor through the same small set of résumé bullets. Bixxie's thesis is that the portfolio can become a **grounded conversational interface to a person**: a recruiter can scan fit, an engineer can drill into architecture, a founder can ask about ambiguity/ownership, and a casual visitor can ask about personality — while all of them get answers constrained to verified personal knowledge rather than generic model invention. The long-term interesting part is not “a chatbot on a website”; it is whether a personal site can behave like a high-fidelity, evidence-backed interface to someone's work and thinking."
  },
  {
    "id": 228,
    "section": "227–240 · Bixxie",
    "question": "What visitor behavior would make Bixxie successful?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PRODUCT",
    "answer": "Success would mean visitors ask questions they would normally save for a recruiter screen or coffee chat, receive a useful answer quickly, and continue into deeper follow-ups rather than abandoning the portfolio. For a recruiter, Bixxie should reduce time-to-understanding; for an engineer, it should surface evidence and architecture; for TP, it should lead people toward case studies, projects or contact when there is genuine fit. Exact conversion/KPI targets have not been fixed."
  },
  {
    "id": 229,
    "section": "227–240 · Bixxie",
    "question": "Describe the current end-to-end request flow.",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "The browser sends a bounded conversation to `/api/bixxie`. Server security validates JSON content type, body size, origin and conversation shape and blocks direct extraction attempts. `retrievePortfolioContext()` selects relevant canonical profile/role/project/case-study/personal sources, wraps the conversation and portfolio context as explicitly **untrusted data**, and sends them with trusted Bixxie instructions to the model layer. The model streams **json-render Standalone SpecStream JSONL** constrained to a strict component catalog. Output is redacted while streaming and rendered only through registered components rooted at `Answer`."
  },
  {
    "id": 230,
    "section": "227–240 · Bixxie",
    "question": "How is personal knowledge retrieved today?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "Today it is primarily **structured/static TypeScript knowledge**, not a vector database. `lib/data.ts` holds profile, education, recruiter, personal, project, role and stack data; case-study builders provide deeper facts. `grounding.ts` turns those into typed sources, tokenizes the query, scores exact-name/keyword/body matches, and serializes only the top relevant sources into a bounded context. That simple retrieval is intentionally inspectable."
  },
  {
    "id": 231,
    "section": "227–240 · Bixxie",
    "question": "How should this 675-answer knowledge base be represented?",
    "status": "known",
    "statusRaw": "KNOWN RECOMMENDATION",
    "visibility": "INTERNAL",
    "answer": "Do **not** dump the entire document into every model call. Treat this file as the human-maintained canonical record, then split it into granular `GroundingSource` records by category/question/project with explicit keywords and disclosure/confidence metadata. Retrieve only the small set relevant to the visitor's question. For long-term maintainability, separate **fact**, **ownership/scope**, **date**, **provenance**, **visibility**, and **confidence/status** instead of storing only prose."
  },
  {
    "id": 232,
    "section": "227–240 · Bixxie",
    "question": "Why generative UI instead of normal Markdown chat?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "Because portfolio questions often map naturally to structured evidence: role timelines, metrics, project cards, comparisons, architecture/case-study links, stack details and contact actions. A constrained generative UI lets the model choose the right presentation while preserving the site's editorial design and preventing arbitrary HTML/CSS/JS. Text remains part of the answer, but structure should make the answer faster to scan."
  },
  {
    "id": 233,
    "section": "227–240 · Bixxie",
    "question": "How does the schema constrain invalid model output?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "Only components in Bixxie's catalog are valid; component prop objects are strict; children must reference defined elements; array sizes are bounded; the root must be `Answer`; arbitrary state/actions/html/scripts/styles are not available. Streaming patches/spec lines are validated before reaching the renderer. This turns model output into a typed UI decision rather than trusted executable markup."
  },
  {
    "id": 234,
    "section": "227–240 · Bixxie",
    "question": "What if output is syntactically valid but factually unsupported?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The trusted prompt requires answers only from retrieved `PORTFOLIO_CONTEXT` and uses an explicit unknown notice when a fact is absent/conflicted. That reduces hallucination, but prompt instruction alone is not perfect factual verification. The next maturity step is stronger fact-level provenance/claim validation — exactly why this master knowledge base should carry confidence and sources rather than only prose."
  },
  {
    "id": 235,
    "section": "227–240 · Bixxie",
    "question": "How should Bixxie be evaluated?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Use a frozen question set across the five visitor levels: direct facts, role ownership, technical multi-hop follow-ups, founder/behavioral questions, and personal conversation. Score at least **factual support, contradiction handling, correct unknown behavior, retrieval recall, answer relevance, component validity, security/extraction resistance, latency and cost**. Include adversarial questions that bait it into inventing GPA, visa status, team ownership, private provider details, or metric precision."
  },
  {
    "id": 236,
    "section": "227–240 · Bixxie",
    "question": "How should multi-hop follow-ups be tested?",
    "status": "known",
    "statusRaw": "KNOWN RECOMMENDATION",
    "visibility": "TECHNICAL",
    "answer": "Create conversation chains such as: “Why RRF?” → “why not weighted sum?” → “what was K?” → “what did nDCG improve?” The correct system must answer the first two from known reasoning, then **stop cleanly** on the undocumented K/numeric nDCG rather than filling gaps. Test anaphora (“that system”), corrections, topic shifts, and cases where earlier assistant summaries should provide continuity but never become new factual evidence."
  },
  {
    "id": 237,
    "section": "227–240 · Bixxie",
    "question": "How should citations/provenance appear?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PRODUCT",
    "answer": "For public portfolio facts, the most useful provenance is a link to the relevant **case study, project repo/demo, publication or portfolio section**, not internal database jargon. For claims without a public artifact, Bixxie can simply answer conservatively. Internally, every important metric should still retain its provenance/measurement status so the assistant knows how strongly it can speak."
  },
  {
    "id": 238,
    "section": "227–240 · Bixxie",
    "question": "How are sensitive/private fields kept away from visitors?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "The strongest approach is **data minimization before model invocation**: private facts should not be part of a public retrievable source at all. Bixxie's prompt also explicitly blocks model/provider/credentials/environment/system-prompt disclosure; origin/body/security checks defend the endpoint; output redaction protects configured sensitive terms. Private information should not rely only on “please don't say it.”"
  },
  {
    "id": 239,
    "section": "227–240 · Bixxie",
    "question": "What latency/token-cost budget is acceptable?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "INTERNAL",
    "answer": "No canonical dollar/latency SLO is fixed. The product direction favors short retrieved context, bounded output and fast scan-oriented responses, so the system should be optimized for seconds rather than long research-agent waits. Bixxie should not state an internal cost target publicly until one is actually defined/measured."
  },
  {
    "id": 240,
    "section": "227–240 · Bixxie",
    "question": "What has TP learned from real Bixxie users?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PRODUCT",
    "answer": "The strongest current learning is from building the product itself: shallow résumé facts are not enough; visitors immediately ask recency, ownership and “why” questions, and structured UI fails if schemas/context are not carefully bounded. The 675-question exercise exists because Bixxie needs a much richer and more trustworthy personal model. Broad external user-study results are not yet documented."
  },
  {
    "id": 241,
    "section": "241–250 · TekkScope",
    "question": "What is TekkScope from the user's perspective?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "TekkScope is an **AI research assistant/platform** that can search the web, open/read sources, combine evidence and produce answers/reports, while hiding model/provider complexity behind a common research layer. It also exposes the research capabilities to external agents through MCP. TP's interest is in the systems behind deep research: retrieval, crawling, routing, streaming, structured extraction and reproducible outputs."
  },
  {
    "id": 242,
    "section": "241–250 · TekkScope",
    "question": "Describe the architecture.",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "A FastAPI/backend research core orchestrates **SearXNG search**, **Crawlee + Playwright browser extraction**, bounded parallel fan-out, source cleaning/metadata, and LLM generation. A unified LLM factory routes to hosted providers (documented adapters include Gemini/OpenAI/Anthropic/Grok) or local adapters (Ollama/vLLM/LM Studio/llama.cpp). Redis Pub/Sub moves research events between workers, per-user bounded asyncio queues feed **SSE/EventSource** clients, and an MCP stdio/JSON-RPC server exposes seven research tools. Report output can be PDF, DOCX or Markdown."
  },
  {
    "id": 243,
    "section": "241–250 · TekkScope",
    "question": "How does provider routing/failover work?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Callers use a provider-independent interface. The router maintains an **ordered candidate set**; if a provider/model call fails, it can fall through to the next configured candidate in the same request. The same factory supports sync/async/tool-capable calls. Exact health scoring/circuit-breaker thresholds are not documented, so don't invent them."
  },
  {
    "id": 244,
    "section": "241–250 · TekkScope",
    "question": "What made a provider “unhealthy”?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The architecture definitely reacts to request failures and can try ordered fallbacks. A formal health-state machine, rolling error-rate threshold or circuit breaker is not established in the current source. Bixxie should distinguish “fallback on call failure” from a sophisticated health-management system."
  },
  {
    "id": 245,
    "section": "241–250 · TekkScope",
    "question": "Explain SSE and reconnect/resume behavior.",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "A research producer can publish events through **Redis Pub/Sub** across workers. The worker holding the active client connection forwards them into a **per-user bounded asyncio queue**, which streams to the browser over SSE/EventSource and is cleaned up on disconnect. Exact replay IDs/resume-after-disconnect semantics are not currently documented."
  },
  {
    "id": 246,
    "section": "241–250 · TekkScope",
    "question": "How are SearXNG/Crawlee results processed?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "SearXNG provides search results; URL work is bounded/deduplicated before **Crawlee + Playwright** opens browser-rendered pages; the system extracts clean text, metadata, links and citation material for downstream research. Exact rank-merging/dedup heuristics are not fully documented."
  },
  {
    "id": 247,
    "section": "241–250 · TekkScope",
    "question": "What does the MCP server expose?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "An MCP server over **JSON-RPC/stdio** reuses the same research core and exposes seven tools: **search, browse, batch extract, search+extract, saved-source retrieval, report generation, and report export**. The point is not to duplicate a second research engine for agents; external clients get the same underlying capabilities."
  },
  {
    "id": 248,
    "section": "241–250 · TekkScope",
    "question": "What does “500+ concurrent sessions” mean?",
    "status": "unknown",
    "statusRaw": "UNVERIFIED",
    "visibility": "DO NOT CLAIM AS PRODUCTION",
    "answer": "A prior summary mentioned 500+ concurrent sessions, but the connected repository evidence does **not** establish live customer concurrency or an audited load-test methodology. Until a benchmark artifact is recovered, Bixxie should not present that number as real production scale."
  },
  {
    "id": 249,
    "section": "241–250 · TekkScope",
    "question": "What bottlenecks appeared under load?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Architectural pressure points are browser crawling, external search/model calls, fan-out and streaming across workers — which is why the system uses semaphores, Redis Pub/Sub and bounded queues. A verified load-test bottleneck profile is not available."
  },
  {
    "id": 250,
    "section": "241–250 · TekkScope",
    "question": "Why is TekkScope inactive, and what would TP bring back?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "It is currently paused/inactive while TP focuses on university, job preparation, Bixxie/portfolio and newer projects. He has explicitly said he wants to **bring it back**. The likely future direction is not “another chat search app” but a stronger research/agent infrastructure project where routing, extraction, evidence and external tool interfaces are the interesting part."
  },
  {
    "id": 251,
    "section": "251–260 · OutKey, OutPost, OutPay",
    "question": "Give a precise one-sentence description of each.",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "**OutKey:** a way for applications/agents to issue signed, constrained credentials/approvals that can be verified, audited and protected against replay.  \n**OutPost:** a workspace for chatting with different AI models, organizing context by project, and turning useful conversations into repeatable agent workflows.  \n**OutPay:** a non-custodial checkout/payment system that lets online merchants accept USDC directly to their own wallet while the application handles confirmation and bookkeeping."
  },
  {
    "id": 252,
    "section": "251–260 · OutKey, OutPost, OutPay",
    "question": "How do the three relate?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "They share a theme more than a proven commercial suite: **agent/software infrastructure where authorization, workflow and value transfer should be explicit instead of opaque**. OutKey is trust/authorization; OutPost is AI/workflow orchestration; OutPay is payment state/settlement. Bixxie should not call them an integrated platform unless code/product integration exists."
  },
  {
    "id": 253,
    "section": "251–260 · OutKey, OutPost, OutPay",
    "question": "Describe OutKey credential issuance/verification.",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "OutKey uses **ES256-signed credentials** containing constrained authorization context. Verification is deliberately ordered: parse/validate structure and issuer/key/signature, enforce time/audience/policy constraints, then check replay/revocation/state as appropriate before accepting the action. The design goal is that a delegated approval is cryptographically attributable and cannot simply be copied/reused indefinitely."
  },
  {
    "id": 254,
    "section": "251–260 · OutKey, OutPost, OutPay",
    "question": "Why ES256?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "ES256 gives compact signatures, widely available JOSE/JWT-style ecosystem support and asymmetric verification without sharing the issuer's signing secret with verifiers. It is a reasonable fit for portable delegated credentials. A formal benchmark against Ed25519/RS256 for this project is not currently documented, so avoid claiming it “won” a bakeoff."
  },
  {
    "id": 255,
    "section": "251–260 · OutKey, OutPost, OutPay",
    "question": "How does replay protection work?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The project explicitly includes replay protection and revocation/ordered verification. The credential carries unique/time-bounded authorization context that a verifier checks against accepted-use/revocation state before execution. Exact nonce-store schema/TTL implementation should be read from the repo before Bixxie names it."
  },
  {
    "id": 256,
    "section": "251–260 · OutKey, OutPost, OutPay",
    "question": "Why is verification order security-sensitive?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "Because performing stateful/policy work on an untrusted or unauthenticated credential can create both security and denial-of-service problems, and accepting claims before signature/time/audience checks can let attacker-controlled data influence authorization. The verifier should establish authenticity and validity before relying on the authorization payload, then enforce replay/revocation and action constraints before the protected action."
  },
  {
    "id": 257,
    "section": "251–260 · OutKey, OutPost, OutPay",
    "question": "What threat model does OutKey address?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Forgery/tampering, replay of a previously valid approval, stale/revoked credentials, confused-deputy/audience misuse, overly broad delegation, and insufficient auditability. It does **not** magically secure a compromised issuer/private key or badly implemented downstream action; verifier adapters still need correct authorization boundaries."
  },
  {
    "id": 258,
    "section": "251–260 · OutKey, OutPost, OutPay",
    "question": "What is OutPost's architecture?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The current public definition is strong enough to say it is a multi-model/project-context/agent-workflow workspace, but the repository's architecture is not sufficiently documented in the recovered source. Bixxie should not invent its database, agent framework, routing or deployment stack."
  },
  {
    "id": 259,
    "section": "251–260 · OutKey, OutPost, OutPay",
    "question": "Describe OutPay's payment flow/security model.",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "OutPay is **non-custodial**: the merchant receives USDC directly rather than TP's application taking custody. Checkout creates a payment expectation/state; wallet/network activity is observed/verified; webhooks/RPC-style reconciliation update the payment state; duplicate events are suppressed; bookkeeping records preserve the merchant/payment lifecycle. Prior design work includes a substantial normalized data model, idempotency/dedup layers and reconciliation. A **real 1-USDC merchant transfer** validated the path, but that is proof-of-flow, not scale."
  },
  {
    "id": 260,
    "section": "251–260 · OutKey, OutPost, OutPay",
    "question": "Which of OutKey/OutPost/OutPay is safe to show today?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "OutKey is a strong **security/authorization engineering** project; OutPay is a useful **validated prototype/active build** with public site/docs; OutPost is working but currently has less public architecture/evidence. Bixxie should describe maturity honestly rather than making all three sound like production businesses."
  },
  {
    "id": 261,
    "section": "261–274 · TraceBox, TinyShell, TabFM, CovidScan, Trading Bot, Synapse",
    "question": "What actual user problem does TraceBox solve?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Voice agents often look fine in unit tests but fail in the **real browser/WebRTC environment** where audio, timing, UI actions and external services interact. TraceBox creates automated test “bots” that enter the actual web session, converse with the target voice agent, capture transcripts/recordings/screens and persist failures so a developer can inspect what really happened."
  },
  {
    "id": 262,
    "section": "261–274 · TraceBox, TinyShell, TabFM, CovidScan, Trading Bot, Synapse",
    "question": "How do LangGraph, browser automation and audio interact?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "The test runtime uses an **eight-state LangGraph lifecycle** around navigation, setup, listening, transcription, reasoning, action/speech and finalization. Stagehand/Playwright drive headless Chromium; the real WebRTC remote audio track is captured; RMS-based silence/VAD logic bounds listening; **Deepgram Nova-2** transcribes; GPT-4.1/Gemini can reason about the conversation; Stagehand performs browser actions or ElevenLabs generates speech; PCM audio is injected back through the WebRTC sender. Evidence is persisted through Supabase/storage."
  },
  {
    "id": 263,
    "section": "261–274 · TraceBox, TinyShell, TabFM, CovidScan, Trading Bot, Synapse",
    "question": "What is technically difficult/novel about TraceBox?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "It tests the agent **through the real product surface**, not by mocking an API. Coordinating headless browser state, real WebRTC media, transcription, model reasoning, speech injection, timeout/silence logic, live observation and persisted evidence creates a systems problem across browser automation, media and AI. The value is diagnostic fidelity rather than a novel foundation model."
  },
  {
    "id": 264,
    "section": "261–274 · TraceBox, TinyShell, TabFM, CovidScan, Trading Bot, Synapse",
    "question": "What is TinyShell and why build it?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "TinyShell explores whether a small model can translate natural-language shell intent into a **typed, platform-neutral intermediate representation** while keeping command rendering deterministic and execution outside the model boundary. It was built as a research prototype around structured model output and safety, not as an autonomous terminal agent."
  },
  {
    "id": 265,
    "section": "261–274 · TraceBox, TinyShell, TabFM, CovidScan, Trading Bot, Synapse",
    "question": "What shell/OS concepts does TinyShell implement?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "Its `ShellIntent v1` schema covers **30 operations** across archive, data, filesystem, Git, network, process, security, system and text families. Deterministic renderers target **Linux/bash, macOS/zsh and Windows/PowerShell**, handling platform-specific quoting/semantics. It validates intent and can return `compile`, `clarify` or `unsupported`; it does **not execute commands**. It is not meant to claim a full interactive shell with job control/pipelines as a Unix-shell replacement."
  },
  {
    "id": 266,
    "section": "261–274 · TraceBox, TinyShell, TabFM, CovidScan, Trading Bot, Synapse",
    "question": "What question is TabFM Benchmark trying to answer?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Whether **Google Research TabFM** is a better practical first baseline than strong classical tabular models such as **Random Forest, XGBoost and CatBoost**, especially when considering more than leaderboard accuracy."
  },
  {
    "id": 267,
    "section": "261–274 · TraceBox, TinyShell, TabFM, CovidScan, Trading Bot, Synapse",
    "question": "What does TabFM Benchmark evaluate?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "Classification/regression quality, low-data behavior, latency, memory footprint, calibration, row/column-shuffle robustness, missing-value robustness and high-cardinality categorical stress. The suite writes benchmark metrics, train-size sweeps, stress-test results, plots and a generated report, with a Streamlit dashboard for exploration."
  },
  {
    "id": 268,
    "section": "261–274 · TraceBox, TinyShell, TabFM, CovidScan, Trading Bot, Synapse",
    "question": "What did CovidScan actually do?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "It was an early deep-learning study on **11,302 chest X-ray images** across COVID-19, pneumonia and normal classes. The work combined **Xception + ResNet152V2** and **Xception + EfficientNet-B7** architectures; later portfolio material reports roughly **94% three-class accuracy** with improved minority-class sensitivity. It became an IJCRR publication in 2022 with Anand Jeyasingh."
  },
  {
    "id": 269,
    "section": "261–274 · TraceBox, TinyShell, TabFM, CovidScan, Trading Bot, Synapse",
    "question": "What methodological limitations should be acknowledged?",
    "status": "known",
    "statusRaw": "KNOWN/RETROSPECTIVE",
    "visibility": "PUBLIC/RESEARCH",
    "answer": "A chest-X-ray classifier can easily overstate clinical generalization if train/test splits leak patient/site/scanner characteristics or if evaluation uses curated public datasets unlike deployment populations. Accuracy alone is insufficient; sensitivity/specificity, external validation, patient-level splitting and clinical workflow validation matter. The project should be presented as early academic ML research, **not a medical device or clinical claim**."
  },
  {
    "id": 270,
    "section": "261–274 · TraceBox, TinyShell, TabFM, CovidScan, Trading Bot, Synapse",
    "question": "What was the USDT Futures Trading Bot and was real money used?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "It is a webhook-driven **Node.js Binance USDT-M futures execution demo** that turns `buy`/`sell` signals into market orders, tracks position state in Firebase and sends email alerts. The current source does not provide a reliable statement about actual live-money use or profitability. Bixxie should never imply profitable trading or recommend its use with real funds."
  },
  {
    "id": 271,
    "section": "261–274 · TraceBox, TinyShell, TabFM, CovidScan, Trading Bot, Synapse",
    "question": "What strategy/risk/backtesting/execution did it use?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The active code path accepts only lowercase `buy`/`sell`, skips same-side signals, closes/reverses opposite positions, polls orders until filled, and sizes using current ticker/symbol metadata with a hardcoded **30× leverage** constant and 5-USDT balance gate. Historical notes mention indicators/extra signals but those branches are not active. There is **no checked-in profitability/backtest evidence and no real automated test suite**. Current code also has state-path/balance-update issues, so it should be treated as educational/demo code."
  },
  {
    "id": 272,
    "section": "261–274 · TraceBox, TinyShell, TabFM, CovidScan, Trading Bot, Synapse",
    "question": "What is Synapse?",
    "status": "partial",
    "statusRaw": "INCOMPLETE",
    "visibility": "INTERNAL/LOW CONFIDENCE",
    "answer": "Prior notes describe an infrastructure-heavy experiment involving **Postgres/RLS, Temporal, object storage, Valkey and OpenTelemetry**, but the product purpose and verified implemented boundary are not strong enough in the current canonical record. Bixxie should not surface it as a flagship project until the repo is inspected and a one-sentence user problem is established."
  },
  {
    "id": 273,
    "section": "261–274 · TraceBox, TinyShell, TabFM, CovidScan, Trading Bot, Synapse",
    "question": "What parts of Synapse did TP personally design?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "INTERNAL",
    "answer": "Not sufficiently grounded. Do not transform an architecture wishlist into a shipped ownership claim."
  },
  {
    "id": 274,
    "section": "261–274 · TraceBox, TinyShell, TabFM, CovidScan, Trading Bot, Synapse",
    "question": "Why were these projects paused/inactive and what did he learn?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "They are mostly **experiments/research projects with different learning goals**, not businesses that all “failed.” TinyShell taught typed AI boundaries/evaluation; TabFM sharpened benchmarking; TraceBox explored real-environment AI testing; TekkScope explored research infrastructure; the trading bot is an older systems exercise; CovidScan was early ML research. TP tends to move on when the question has been explored or a newer problem becomes more relevant, and he is increasingly trying to focus on fewer, deeper projects rather than collecting half-explained repositories."
  },
  {
    "id": 275,
    "section": "275–286 · Technical-skill depth",
    "question": "How should Bixxie rate TP's practical depth with technologies?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Use evidence-based tiers rather than a self-scored 1–10.\n\n- **Production / strongest:** Python, TypeScript/JavaScript, FastAPI/backend APIs, PostgreSQL/Supabase, React/Next.js, Docker, Git/GitHub Actions, LLM application engineering, retrieval/RAG, evaluation, LangGraph-style orchestration.\n- **Production / meaningful use:** Redis, Kubernetes, AWS/GCP deployment, pgvector, WebRTC/SSE, browser automation, RBAC/auth/JWT, PyTorch/TensorFlow/OpenCV in ML contexts.\n- **Project/research depth:** Hugging Face/Transformers, compact-model fine-tuning, XGBoost/CatBoost/scikit-learn, Electron, ONNX, Optuna, cryptographic credential verification, MCP.\n- **Exposure / listed tools:** broader stack entries such as Rust, Terraform, Helm, Neo4j, Qdrant, Elasticsearch, etc. should **not** be called advanced unless a project backs them.\n\n“Expert” should be used sparingly; TP's strongest differentiator is breadth plus real production ownership, while he is deliberately working toward deeper mastery."
  },
  {
    "id": 276,
    "section": "275–286 · Technical-skill depth",
    "question": "How long has he used each important technology?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Exact first-use dates are not fully documented, so Bixxie should anchor duration to visible work instead of inventing “X years.” Python/ML work is evidenced by at least the Schneider 2021 period and heavily from 2023 onward; JS/web development goes back to SparkDial 2020; modern React/Node/TypeScript appear across 2023–26 work; FastAPI/LangGraph/RAG/LLM systems become especially prominent 2024–26; container/Kubernetes/cloud production work is strongest in 2025–26. Use “several projects/years” only where defensible."
  },
  {
    "id": 277,
    "section": "275–286 · Technical-skill depth",
    "question": "Where has he used the important technologies?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Python: Schneider, RK&GT, AgroBot, Hyr, ThirdSlate, Berribot, TinyShell/TekkScope. TypeScript/React/Next.js: Pocketlink-era product work, ThirdSlate, Hyr, RepoView, Bixxie, TraceBox. FastAPI: Hyr, ThirdSlate, TekkScope and related AI services. Postgres/Supabase/pgvector: Hyr, ThirdSlate, RepoView, TraceBox. Docker/Kubernetes/cloud: Berribot, ThirdSlate and project deployments. Redis: Berribot queues and TekkScope streaming. This “where used” evidence should accompany any strong skill claim."
  },
  {
    "id": 278,
    "section": "275–286 · Technical-skill depth",
    "question": "What has he built with those technologies?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He has used them to build candidate-ranking systems, AI tutoring/RAG, recruiter platforms, insurance integrations, creator products, computer-vision models, browser/WebRTC agent testing, research/crawling infrastructure, secure code-sharing, signed authorization credentials, payment-state prototypes, ML benchmark suites and typed model-to-shell research. Bixxie should prefer concrete systems over reciting technology badges."
  },
  {
    "id": 279,
    "section": "275–286 · Technical-skill depth",
    "question": "Has he used them in production, and at what scale?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC WITH CARE",
    "answer": "Yes for core languages/backend/cloud in systems such as Berribot, ThirdSlate, Uniffy and Pocketlink. Scale should be expressed using the project's verified unit — users, daily submissions, evaluations, weekly transactions — rather than “X RPS” unless measured. Some tools appear only in research/personal projects, and Bixxie should clearly distinguish that from production."
  },
  {
    "id": 280,
    "section": "275–286 · Technical-skill depth",
    "question": "What advanced features has he used?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Examples: async/background workers, streaming SSE/WebRTC, JWT/RBAC/RLS, vector search, LangGraph checkpoints/state, human-in-loop pauses, structured output validation, LLM eval/judge harnesses, Kubernetes health/autoscaling work, browser/media automation, deterministic compiler/renderers, JOSE/ES256 verification, replay protection, and prompt-injection/output-schema boundaries. Advanced-feature claims should always attach to a real project."
  },
  {
    "id": 281,
    "section": "275–286 · Technical-skill depth",
    "question": "What has broken while he used those technologies?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The record includes model-output inconsistency, ranking false positives, deployment/startup/health issues in containerized services, build failures in `thrn.im`, external-provider integration complexity, state/reconciliation weaknesses found in older projects, and AI outputs that were fluent but weakly grounded. Exact incident narratives are incomplete, so Bixxie should avoid invented war stories."
  },
  {
    "id": 282,
    "section": "275–286 · Technical-skill depth",
    "question": "How comfortable is he debugging without AI assistance?",
    "status": "partial",
    "statusRaw": "KNOWN AS WORKING STYLE/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "TP uses AI coding tools heavily, but his body of work predates current agents and includes debugging across model behavior, APIs, databases, Docker/Kubernetes, browser/WebRTC and data pipelines. The honest claim is that AI is part of his workflow, not a substitute for understanding. He wants to get to the point where tools/frameworks are secondary to his ability to reason through the system."
  },
  {
    "id": 283,
    "section": "275–286 · Technical-skill depth",
    "question": "What technology limitations has he personally encountered?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Dense retrieval misses exact lexical signals; single LLM outputs are hard to trust/compare; browser/WebRTC testing is difficult to mock faithfully; vector/memory systems can mix irrelevant/stale context; external APIs create schema/reliability problems; Kubernetes adds operational complexity; generative UI schemas can reject oversized/invalid model output; provider coupling makes evaluation brittle. These are grounded in systems he has built."
  },
  {
    "id": 284,
    "section": "275–286 · Technical-skill depth",
    "question": "What alternatives has he compared?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Lexical vs dense vs hybrid retrieval; fixed ranking vs learning-to-rank; RAG/workflow structures versus direct generation; human review versus auto-release; classical tabular models versus TabFM; several compact models in TinyShell; hosted versus local LLM adapters in TekkScope; direct raw model command generation versus typed IR + deterministic compilation. Avoid claiming head-to-head comparisons that are not documented."
  },
  {
    "id": 285,
    "section": "275–286 · Technical-skill depth",
    "question": "When would he *not* choose his preferred tools?",
    "status": "known",
    "statusRaw": "KNOWN AS ENGINEERING PHILOSOPHY",
    "visibility": "PUBLIC",
    "answer": "He does not want “favorite stack” to become dogma. He would avoid an LLM where deterministic logic solves the problem better; avoid agents when a workflow/state machine is simpler; avoid microservices/Kubernetes when a small monolith is easier to operate; avoid vector retrieval when exact relational/keyword search is enough; avoid a trendy library if the abstraction hides critical behavior. His direction is to choose based on failure modes and product constraints rather than brand familiarity."
  },
  {
    "id": 286,
    "section": "275–286 · Technical-skill depth",
    "question": "Could he design and operate a production system from scratch?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes, with evidence rather than a hypothetical claim: Hyr's early recruiting MVP, ThirdSlate's production AI stack, Pocketlink/Allotrix founder products, RepoView, and multiple AI/backend systems demonstrate architecture → implementation → deployment → iteration. He is still early career and would not claim mastery of every scale regime, but “can own a production system from zero” is a defensible part of his profile."
  },
  {
    "id": 287,
    "section": "287–297 · Programming and computer-science fundamentals",
    "question": "What is TP's strongest programming language?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "**Python** is his strongest language for AI/backend work, with **TypeScript** close behind for product/full-stack systems. Python covers ML, retrieval, agents, FastAPI, data and research tooling; TypeScript/React/Next.js lets him take those systems all the way to a user-facing product. That combination is more representative than picking only one ecosystem."
  },
  {
    "id": 288,
    "section": "287–297 · Programming and computer-science fundamentals",
    "question": "What Python has he written beyond notebooks/API glue?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "FastAPI production services, async orchestration, Celery/background tasks, retrieval/ranking pipelines, LangGraph workflows, document ingestion, ML training/evaluation, deterministic compilers/renderers (TinyShell), web research/crawling orchestration (TekkScope), data-processing pipelines, model benchmark/eval code, and test/validation tooling. He should not be framed as an “AI API wrapper” developer."
  },
  {
    "id": 289,
    "section": "287–297 · Programming and computer-science fundamentals",
    "question": "What TypeScript/Node server systems has he owned?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Next.js route handlers/server components/auth flows in RepoView/Bixxie/ThirdSlate-style systems, Node backend components in Hyr and older products, webhook/worker execution in the trading bot, and product/backend logic around creator and portfolio tools. Exact backend language split varies by project; do not call every backend TypeScript."
  },
  {
    "id": 290,
    "section": "287–297 · Programming and computer-science fundamentals",
    "question": "What concurrency models has he used?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "Async/await in Python/JS; Celery distributed/background work; Redis Pub/Sub; bounded asyncio queues/semaphores; WebSocket/SSE streaming; Node `worker_threads`; background persistence; multi-service/container concurrency; Cloud Run worker concurrency control. Direct low-level OS threading/multiprocessing expertise beyond these project uses should not be overstated."
  },
  {
    "id": 291,
    "section": "287–297 · Programming and computer-science fundamentals",
    "question": "Give a real race-condition/concurrency bug he debugged.",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "No specific race-condition story is preserved. Bixxie can explain systems in which concurrency mattered, but should not invent a bug."
  },
  {
    "id": 292,
    "section": "287–297 · Programming and computer-science fundamentals",
    "question": "What database indexes has he designed?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "RepoView's design includes explicit indexes on share/repository/activity/session access patterns and unique indexes on hashed secrets. ThirdSlate uses pgvector indexing/search and relational scopes. RK&GT involved normalized PostgreSQL schema work. Exact index methods/query plans are not consistently documented, so avoid claims like “optimized B-tree/GiST/HNSW X” without repo evidence."
  },
  {
    "id": 293,
    "section": "287–297 · Programming and computer-science fundamentals",
    "question": "Give a slow-query diagnosis example.",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "ThirdSlate repository history contains scalability work that moved similarity filtering/search into the vector database rather than doing inefficient application-side processing. RK&GT also improved backend ingestion latency. A complete `EXPLAIN ANALYZE` story is not in the public knowledge base."
  },
  {
    "id": 294,
    "section": "287–297 · Programming and computer-science fundamentals",
    "question": "What transaction/isolation problems has he encountered?",
    "status": "partial",
    "statusRaw": "PARTIAL/UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "Payment/reconciliation work in OutPay and stateful authorization in OutKey necessarily deal with idempotency and duplicate/replayed events, but a verified SQL isolation-level incident is not documented. Bixxie should discuss idempotency/state-machine design rather than pretending he debugged a specific serialization anomaly."
  },
  {
    "id": 295,
    "section": "287–297 · Programming and computer-science fundamentals",
    "question": "Which networking concepts have mattered?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "HTTP/REST, SSE/EventSource, WebSockets, WebRTC, DNS/custom domains, TLS/HTTPS, OAuth/JWT, load balancers/proxies, GitHub App auth, browser/CDP protocols, SMTP, provider APIs and cloud service networking. TraceBox and RepoView are especially good evidence that he understands networking as part of product behavior, not abstract trivia."
  },
  {
    "id": 296,
    "section": "287–297 · Programming and computer-science fundamentals",
    "question": "Give a networking bug he debugged.",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "No fully reconstructed named incident is in the current source. The projects contain real networking complexity — WebRTC media, SSE disconnect cleanup, auth redirects, cloud health/readiness and external APIs — but Bixxie should not fabricate an incident timeline."
  },
  {
    "id": 297,
    "section": "287–297 · Programming and computer-science fundamentals",
    "question": "What is the most complex unfamiliar codebase he learned quickly?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Berribot and Uniffy are strong examples because TP joined existing production systems and had to ship across AI/backend/infrastructure rather than only a greenfield repo. Exact “first N days” learning story is not documented. His general approach is to map the request/data flow first, identify state/ownership boundaries, reproduce one path end-to-end, then modify the smallest surface with tests/observability."
  },
  {
    "id": 298,
    "section": "298–305 · AI/model experience",
    "question": "Which model families has TP meaningfully used?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Documented meaningful use includes **Google Gemini** families (generation/embeddings), **OpenAI** models/APIs, **Qwen3 reranking**, compact/open models used in TinyShell (**FunctionGemma, LFM2.5, Falcon-H1**), and TensorFlow/PyTorch classical/deep-learning models across earlier ML work. TekkScope includes adapters for Anthropic/Grok/local backends, but adapter support is not the same as deep production experience with every provider."
  },
  {
    "id": 299,
    "section": "298–305 · AI/model experience",
    "question": "What tasks did those models serve?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "Generation/tutoring and structured extraction; embeddings for retrieval; Qwen cross-encoder reranking; LLM-as-judge evaluation; voice-agent reasoning; resume/JD parsing; compact model structured-IR generation in TinyShell; computer vision/classification/synthetic-data work in earlier ML systems. Model choice is task-specific rather than one “favorite model.”"
  },
  {
    "id": 300,
    "section": "298–305 · AI/model experience",
    "question": "Why did he choose particular models?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Choices reflect capability/latency/cost/integration constraints: embeddings for semantic retrieval; cross-encoder only on a reduced set because it is more expensive; compact models in TinyShell because the research question is whether small models can reliably generate typed intent; hosted models for production capability; local adapters where control/privacy matter. Do not invent vendor bakeoffs when none are documented."
  },
  {
    "id": 301,
    "section": "298–305 · AI/model experience",
    "question": "What benchmark/eval drove model selection?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Berribot used application ranking metrics and recruiter judgments; ThirdSlate used RAGAS/DeepEval/LLM judges; TinyShell compared parse validity, schema validity, exact IR match, slot F1 and median generation latency; TabFM compares task quality/calibration/robustness/latency/memory. This is closer to TP's philosophy than generic leaderboard scores: evaluate the **application behavior that matters**."
  },
  {
    "id": 302,
    "section": "298–305 · AI/model experience",
    "question": "What model limitations has he encountered?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "Hallucination/unsupported claims, structured-output violations, provider/model coupling, latency/cost variance, retrieval dependence, judging bias, semantic search missing exact terms, context/memory pollution, and voice-agent failures caused by real-world browser/audio conditions. These limitations are why he increasingly builds explicit validation and measurement around models."
  },
  {
    "id": 303,
    "section": "298–305 · AI/model experience",
    "question": "Which models has he replaced after testing?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The current record proves multi-model/benchmark experimentation but does not preserve a clean list of “model A replaced by B in production because X.” TinyShell has direct comparative pilot results; Berribot replaced a simpler matching approach with a multi-stage architecture rather than merely swapping one foundation model. Do not invent migration stories."
  },
  {
    "id": 304,
    "section": "298–305 · AI/model experience",
    "question": "How does he choose between a large expensive model and a smaller one?",
    "status": "known",
    "statusRaw": "KNOWN AS PHILOSOPHY",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "Start from task difficulty and failure cost. Use deterministic logic or retrieval where possible; use a smaller model for bounded/structured tasks if it meets the eval threshold; reserve bigger models for reasoning/generation where quality materially changes user value. Measure latency/cost and keep provider/model choice separable from the application eval. TinyShell is a direct expression of his interest in small models for constrained work."
  },
  {
    "id": 305,
    "section": "298–305 · AI/model experience",
    "question": "Has he used open-weight models?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes. Qwen3 reranking is part of Berribot's ranking stack; TinyShell fine-tunes/evaluates compact models such as FunctionGemma, LFM2.5 and Falcon-H1. TekkScope has local adapters for Ollama/vLLM/LM Studio/llama.cpp. Hosting details should be stated only where the project documents them."
  },
  {
    "id": 306,
    "section": "306–312 · Prompting and structured generation",
    "question": "How does TP structure prompts in production?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "He prefers clear separation between **trusted system/application rules**, **untrusted user/context data**, and **typed output/tool contracts**. Bixxie is an explicit example: trusted instructions are server-defined; conversation and portfolio data are delimited as untrusted; the model must emit a strict generative-UI schema. The same philosophy appears in structured candidate/JD extraction and TinyShell's typed IR."
  },
  {
    "id": 307,
    "section": "306–312 · Prompting and structured generation",
    "question": "Give an example where prompt changes improved a measured outcome.",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "ThirdSlate and Berribot evaluation loops explicitly used prompt/workflow changes against repeatable eval suites, reducing hallucination/manual review and improving application quality. A single isolated “prompt v17 changed score from X to Y” record is not preserved, so Bixxie should not fabricate one."
  },
  {
    "id": 308,
    "section": "306–312 · Prompting and structured generation",
    "question": "How does he version prompts?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "At Berribot, **Langfuse prompt management/versioning** was part of the evaluation stack; versioned prompts/app changes were run against datasets/evaluators. Bixxie stores trusted prompt code in the repository, so prompt changes can be code-reviewed/versioned. Exact naming/release convention is not canonical."
  },
  {
    "id": 309,
    "section": "306–312 · Prompting and structured generation",
    "question": "How does he regression-test prompt changes?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "Run a fixed evaluation dataset through candidate prompt/model/app versions, score with deterministic checks and/or LLM judges/application metrics, inspect regressions/traces, and gate release when quality drops. TP specifically values **model-independent evals** so the test framework remains useful even when the provider changes."
  },
  {
    "id": 310,
    "section": "306–312 · Prompting and structured generation",
    "question": "Which structured-output mechanisms has he used?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "JSON Schema, Pydantic-style validation, OpenAI/function-tool style schemas, strict component schemas/Zod-style validation in TypeScript, and typed intermediate representations. Hyr used structured-output JD/candidate workflows; Bixxie uses strict json-render specs; TinyShell uses `ShellIntent` JSON Schema and deterministic compilation."
  },
  {
    "id": 311,
    "section": "306–312 · Prompting and structured generation",
    "question": "What if a model repeatedly violates the structured contract?",
    "status": "known",
    "statusRaw": "KNOWN AS PRACTICE",
    "visibility": "TECHNICAL",
    "answer": "Do not keep parsing fragile prose. Tighten the schema/prompt, use native structured/tool output where available, validate server-side, bound retries, and fail to a controlled unknown/error rather than accepting malformed output. If the model cannot meet the contract reliably, route to a more suitable model or simplify the contract. Bixxie's renderer never trusts arbitrary model HTML/JS."
  },
  {
    "id": 312,
    "section": "306–312 · Prompting and structured generation",
    "question": "What belongs in prompt vs retrieval vs application logic?",
    "status": "known",
    "statusRaw": "KNOWN AS PHILOSOPHY",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "**Prompt:** behavioral instructions and task framing. **Retrieval:** facts/evidence that may be large, dynamic or query-dependent. **Application logic:** authorization, safety boundaries, deterministic calculations, state transitions, validation and anything that must not depend on model obedience. TP's systems increasingly move high-consequence logic out of the prompt."
  },
  {
    "id": 313,
    "section": "313–324 · RAG and information retrieval",
    "question": "Which real systems used RAG?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "ThirdSlate is the clearest production RAG system: course-scoped retrieval, memory, generation, grounding, citations and human review. Berribot used retrieval/ranking rather than classic “RAG answer generation.” TekkScope performs source-backed research/context gathering. TP should not call every vector search use “RAG.”"
  },
  {
    "id": 314,
    "section": "313–324 · RAG and information retrieval",
    "question": "What chunking strategies has he tested?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "ThirdSlate had explicit document extraction/normalization/chunking before embedding, but the recovered knowledge base does not preserve a safe list of fixed/semantic/recursive strategies or benchmark results. Bixxie should not invent chunking experiments."
  },
  {
    "id": 315,
    "section": "313–324 · RAG and information retrieval",
    "question": "How did he choose chunk size/overlap?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "No canonical numeric configuration is available. The correct principle is to tune chunking against retrieval/evaluation quality and document structure rather than copy a fashionable token size, but do not present that principle as a historical measurement."
  },
  {
    "id": 316,
    "section": "313–324 · RAG and information retrieval",
    "question": "Which embedding models has he directly compared?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The records show Gemini embeddings at Berribot and conflicting Google/OpenAI embedding references at ThirdSlate. A documented head-to-head embedding bakeoff is not available. Do not claim one."
  },
  {
    "id": 317,
    "section": "313–324 · RAG and information retrieval",
    "question": "Which vector databases/indexes has he used?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "**pgvector/PostgreSQL** is strongly evidenced in ThirdSlate/Hyr-related work. His broad tool inventory includes Qdrant/other systems, but production depth should not be inferred from a badge. Berribot's dense-search backing store is currently unspecified."
  },
  {
    "id": 318,
    "section": "313–324 · RAG and information retrieval",
    "question": "Where has he used hybrid lexical+dense retrieval?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "Berribot: BM25 + dense Gemini embeddings, fused with RRF, then reranked and learned-to-rank. This is his strongest concrete hybrid-search example."
  },
  {
    "id": 319,
    "section": "313–324 · RAG and information retrieval",
    "question": "How else has he combined heterogeneous scores?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Berribot deliberately avoided pretending BM25/dense raw scores were calibrated by using rank fusion first and learned ranking later. Hyr used composite matching signals. Exact score-normalization formulas beyond that are not canonical."
  },
  {
    "id": 320,
    "section": "313–324 · RAG and information retrieval",
    "question": "Which rerankers has he used?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "**Qwen3 Reranker** is the clear documented cross-encoder reranker at Berribot, applied only after initial retrieval/fusion to control cost/latency."
  },
  {
    "id": 321,
    "section": "313–324 · RAG and information retrieval",
    "question": "What does he do when recall is poor?",
    "status": "known",
    "statusRaw": "KNOWN AS TECHNICAL REASONING",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "First determine whether relevant items are absent from the corpus/index or just not surfaced. Inspect lexical/dense candidate sets separately; add complementary retrieval if wording mismatch or exact-term sensitivity is the problem; check chunking/metadata/filters; increase candidate breadth before expensive reranking; evaluate Recall@k on a labelled set rather than judge from anecdotes."
  },
  {
    "id": 322,
    "section": "313–324 · RAG and information retrieval",
    "question": "What if retrieved context is relevant but the final answer is wrong?",
    "status": "known",
    "statusRaw": "KNOWN AS TECHNICAL REASONING",
    "visibility": "TECHNICAL",
    "answer": "That points downstream of retrieval: prompt/context assembly, model reasoning, conflicting evidence, citation mapping or generation constraints. TP's ThirdSlate approach is to score grounding against evidence, revise/escalate low-grounded drafts and evaluate generation separately from retrieval. Do not “fix retrieval” when retrieval already contains the answer."
  },
  {
    "id": 323,
    "section": "313–324 · RAG and information retrieval",
    "question": "How does he handle stale/duplicated/contradictory context?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Normalize/dedupe sources, keep provenance/metadata, scope by user/course/time/project, and make contradictions visible rather than silently collapsing them. Bixxie's current policy follows exactly that rule for personal facts: if sources conflict, disclose the discrepancy. A generic production dedupe algorithm is not universally documented."
  },
  {
    "id": 324,
    "section": "313–324 · RAG and information retrieval",
    "question": "When would he fine-tune instead of use RAG?",
    "status": "known",
    "statusRaw": "KNOWN AS OPINION",
    "visibility": "PUBLIC",
    "answer": "Fine-tune when the desired change is **model behavior/format/style/task skill** that should generalize across inputs and enough representative training data exists; use RAG when the problem is **access to changing/private/domain facts** that need provenance. TinyShell uses fine-tuning for structured intent generation; ThirdSlate uses retrieval for course knowledge. Many systems need both, but they solve different problems."
  },
  {
    "id": 325,
    "section": "325–333 · Agents, tools and orchestration",
    "question": "Which serious agent systems has he built?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "ThirdSlate's LangGraph tutoring workflow, BerriTutor's multi-agent tutoring/orchestration, TraceBox's eight-state test agent, TekkScope's research/tool/MCP layer, and Bixxie's constrained UI-generation workflow. The strongest examples are explicit workflows with state/tools/evaluation, not “prompt + loop = agent.”"
  },
  {
    "id": 326,
    "section": "325–333 · Agents, tools and orchestration",
    "question": "Why use an agent instead of deterministic workflow?",
    "status": "known",
    "statusRaw": "KNOWN AS PHILOSOPHY",
    "visibility": "TECHNICAL",
    "answer": "Use model agency only where the next action depends on ambiguous natural-language/context reasoning. Keep deterministic steps — auth, validation, persistence, safety, routing constraints, compilation — outside the agent. ThirdSlate is graph-like because retrieval/generation/grounding/review can branch; TinyShell intentionally keeps rendering deterministic. TP does not think “more agentic” automatically means better."
  },
  {
    "id": 327,
    "section": "325–333 · Agents, tools and orchestration",
    "question": "Which LangGraph primitives has he used?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Explicit state/nodes/conditional edges, checkpoint/persistence concepts, human-in-loop pauses/interrupt-style review, session/thread identifiers and graph-controlled transitions are evidenced in ThirdSlate/TraceBox. Exact subgraph API usage/version should be claimed only if repo code confirms it."
  },
  {
    "id": 328,
    "section": "325–333 · Agents, tools and orchestration",
    "question": "How does he define/validate tool schemas?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "Treat tool inputs as typed contracts: schema-defined fields, explicit enums/nullable behavior, server-side validation before action, and narrow capabilities. The model decides **which valid action** to request; application code still checks authorization/preconditions. This is the same pattern behind Bixxie components, Hyr structured outputs and TinyShell's IR."
  },
  {
    "id": 329,
    "section": "325–333 · Agents, tools and orchestration",
    "question": "How does he handle tool errors/partial failure/retries?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Differentiate transient provider/network failure from invalid input/policy failure. Retry only transient/idempotent operations with bounds/backoff; preserve partial state/evidence; route to fallback where appropriate; surface controlled failure instead of endless loops. TekkScope provider fallback and Bixxie's safe service-unavailable response embody this, though every project does not use the same strategy."
  },
  {
    "id": 330,
    "section": "325–333 · Agents, tools and orchestration",
    "question": "How does he prevent runaway agents?",
    "status": "known",
    "statusRaw": "KNOWN AS DESIGN PRINCIPLE",
    "visibility": "TECHNICAL",
    "answer": "Bound state/action space, use explicit graph transitions, tool allowlists/schema validation, iteration/time/output limits, and require deterministic checks/human confirmation for consequential actions. Bixxie has no arbitrary tool execution; TinyShell does not execute at all; OutKey constrains delegated authority. The model should not be its own authorization boundary."
  },
  {
    "id": 331,
    "section": "325–333 · Agents, tools and orchestration",
    "question": "How does the system decide continue/retry/ask/escalate?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Use explicit state and confidence/evidence conditions rather than free-form self-reflection. ThirdSlate's grounding gate can pass, revise or escalate to human review; TinyShell can return `clarify`/`unsupported`; Bixxie emits unknown when evidence is missing. Exact thresholds are system-specific and not always documented."
  },
  {
    "id": 332,
    "section": "325–333 · Agents, tools and orchestration",
    "question": "Has he built multi-agent systems?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Yes in BerriTutor/ThirdSlate-style orchestrated workflows. But TP's current philosophy is skeptical of unnecessary agent multiplicity: separate agents/nodes should exist because responsibilities/evaluation/state differ, not because “multi-agent” sounds sophisticated."
  },
  {
    "id": 333,
    "section": "325–333 · Agents, tools and orchestration",
    "question": "What agent architecture has he abandoned as overcomplicated?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "There is no canonical named architecture he can truthfully say he abandoned. His broader lesson is that deterministic workflows often beat unconstrained agent loops and that he now asks whether an “agent” is necessary before adding one. Do not fabricate a failure story."
  },
  {
    "id": 334,
    "section": "334–345 · Evaluation",
    "question": "Which AI systems had formal eval sets?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Berribot ranking and LLM application workflows; ThirdSlate RAG/tutoring; TinyShell structured generation; TabFM benchmark experiments; earlier CV/classification work with measured test metrics. Hyr used pilot/recruiter validation, though its formal eval-set structure is less documented."
  },
  {
    "id": 335,
    "section": "334–345 · Evaluation",
    "question": "How was each eval dataset built?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Berribot used recruiter relevance judgments and a 100-JD/1,000-resume investigation benchmark. ThirdSlate had 500+ cases across eight knowledge domains, but the real/synthetic mix is not canonical. TinyShell has a frozen 2,000-row pilot with 1,600/200/200 splits drawn from a 65,848-record dataset. TabFM uses reproducible benchmark datasets/stress suites. Never fill missing composition details."
  },
  {
    "id": 336,
    "section": "334–345 · Evaluation",
    "question": "How many examples were in each?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Berribot: investigation benchmark 100×1,000 pairs/candidate set context; exact labelled relevance count unknown. ThirdSlate: 500+ cases. TinyShell: 65,848 canonical records; frozen 2,000-row pilot, 200 held-out test. TabFM varies by benchmark dataset. Berribot LLM-as-judge suite: 800+ tests. Keep these units distinct."
  },
  {
    "id": 337,
    "section": "334–345 · Evaluation",
    "question": "How were easy/hard/edge/adversarial cases segmented?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "TinyShell's dataset/eval explicitly has typed operation/safety/platform concerns; Bixxie security tests include adversarial extraction/schema cases. For ThirdSlate/Berribot, an exact difficulty taxonomy is not documented. Bixxie's future eval suite should intentionally add these categories."
  },
  {
    "id": 338,
    "section": "334–345 · Evaluation",
    "question": "Which metrics has he used?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "nDCG@k, MRR, Recall@k, matching precision/false-positive rate, RAGAS faithfulness/relevance, LLM judge/rubric scores, hallucination rate, exact IR match, slot F1, JSON parse/schema validity, latency, classification accuracy/mAP, robustness/calibration in TabFM, plus product metrics such as screening/reconciliation time and user adoption."
  },
  {
    "id": 339,
    "section": "334–345 · Evaluation",
    "question": "Why are those metrics appropriate?",
    "status": "known",
    "statusRaw": "KNOWN AS REASONING",
    "visibility": "TECHNICAL",
    "answer": "Because each measures a different failure surface: retrieval/ranking metrics ask whether the right items are surfaced in the right order; grounding metrics ask whether claims are supported; exact/schema metrics ask whether structured output is machine-consumable; latency/cost asks whether the system is usable; product metrics ask whether technical improvement changes the user's workflow. TP does not believe one “AI score” is enough."
  },
  {
    "id": 340,
    "section": "334–345 · Evaluation",
    "question": "How did the LLM-as-judge system work?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Candidate outputs were run through evaluator prompts/rubrics alongside deterministic checks and compared across prompt/model/app versions. Langfuse/tracing supported inspection and regression workflows at Berribot; ThirdSlate used RAGAS/DeepEval/LLM-as-judge. Exact judge models/rubrics are not fully documented."
  },
  {
    "id": 341,
    "section": "334–345 · Evaluation",
    "question": "How was the judge calibrated against humans?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "No sufficiently precise human-calibration protocol is preserved. Bixxie should not claim high judge-human agreement without data. TP's current direction is to make this explicit in future eval systems."
  },
  {
    "id": 342,
    "section": "334–345 · Evaluation",
    "question": "What judge biases/failure modes did he encounter?",
    "status": "partial",
    "statusRaw": "KNOWN AS DOMAIN UNDERSTANDING/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "LLM judges can reward verbosity/style, agree with model-like phrasing, miss subtle factual errors or drift as the judge model changes. That is why TP combines judges with deterministic/app metrics and trace inspection instead of treating judge scores as ground truth. Specific measured bias rates are not documented."
  },
  {
    "id": 343,
    "section": "334–345 · Evaluation",
    "question": "Did any project use online A/B evaluation?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Product analytics/feedback loops existed, especially Pocketlink/Berribot, but a formal randomized online A/B experiment for an AI change is not reliably documented. Do not claim one."
  },
  {
    "id": 344,
    "section": "334–345 · Evaluation",
    "question": "What threshold made an AI change good enough to ship?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The general policy is “no regression on key quality/safety metrics plus acceptable latency/cost and human review of important failure cases.” Exact numerical gates are not preserved. ThirdSlate's architecture explicitly had a quality gate before release, but threshold values are unknown."
  },
  {
    "id": 345,
    "section": "334–345 · Evaluation",
    "question": "Did offline eval ever look good while real users disagreed?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The broader lesson from his startup/product work is yes: metrics do not replace users, and a technically “better” system can still be the wrong product. But no specific documented AI experiment with exact offline score versus online failure is available. Bixxie should use the lesson without inventing data."
  },
  {
    "id": 346,
    "section": "346–353 · Hallucination, safety and guardrails",
    "question": "How has TP operationally defined hallucination?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "For grounded applications such as ThirdSlate, the important failure is a claim presented as an answer that is **not supported by the retrieved/course evidence** or contradicts it. That is more actionable than philosophically defining hallucination. Bixxie similarly treats unsupported portfolio claims as errors even when they sound plausible."
  },
  {
    "id": 347,
    "section": "346–353 · Hallucination, safety and guardrails",
    "question": "What techniques has he used to reduce hallucination?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "Scoped retrieval, evidence-grounded prompting, citations, explicit grounding critics/checks, revision paths, human-in-the-loop review, structured outputs, constrained schemas, application-level unknown behavior, repeatable evals and trace inspection. He increasingly prefers reducing what the model is *allowed/required* to guess rather than only adding “be accurate” to a prompt."
  },
  {
    "id": 348,
    "section": "346–353 · Hallucination, safety and guardrails",
    "question": "Has he built citation/groundedness checks?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes. ThirdSlate maps answers to course sources and runs a grounding critic before finalization; TekkScope preserves source/citation material for research outputs; Bixxie constrains answers to retrieved portfolio facts. Exact entailment algorithm details vary."
  },
  {
    "id": 349,
    "section": "346–353 · Hallucination, safety and guardrails",
    "question": "How does he handle prompt injection in retrieved content?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Treat retrieved/user content as **data, never trusted instructions**. Bixxie's system explicitly labels `USER_CONVERSATION` and `PORTFOLIO_CONTEXT` as untrusted and prevents them from overriding trusted rules. For tool-using systems, narrow schemas/allowlists and application authorization matter more than trying to prompt-engineer perfect immunity."
  },
  {
    "id": 350,
    "section": "346–353 · Hallucination, safety and guardrails",
    "question": "How does he prevent unsafe tool execution?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "The model does not get unrestricted code/tool power. Bixxie has no arbitrary tool execution. TinyShell outputs typed intent/command text but **never executes** it. OutKey makes delegated authority explicit. Consequential actions should be authorized/validated by application logic and often require confirmation, not merely requested by a model."
  },
  {
    "id": 351,
    "section": "346–353 · Hallucination, safety and guardrails",
    "question": "How does he separate model authorization from user authorization?",
    "status": "known",
    "statusRaw": "KNOWN AS SECURITY PRINCIPLE",
    "visibility": "TECHNICAL",
    "answer": "Authenticate the human/service first, derive allowed resources/actions server-side, then give the model only tools/data within that boundary. The model can help decide *what* to do but cannot grant itself access. ThirdSlate user/course scopes, RepoView viewer-session authorization and Bixxie's server-side retrieval are good examples."
  },
  {
    "id": 352,
    "section": "346–353 · Hallucination, safety and guardrails",
    "question": "What privacy controls has he implemented around LLMs?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Server-only credentials, scoping retrieved data by authenticated user/context, limiting what enters prompts, redacting sensitive configured terms in Bixxie streams, avoiding provider/model/security metadata disclosure, and not logging arbitrary prompts/responses in Bixxie's current endpoint. Uniffy/RepoView work also reinforces access/audit/data-minimization thinking."
  },
  {
    "id": 353,
    "section": "346–353 · Hallucination, safety and guardrails",
    "question": "Give a case where safety/privacy changed architecture.",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "**RepoView:** the raw share token is shown once, hashed at rest, exchanged for a scoped HttpOnly viewer session, and hidden paths are never fetched/sent to the browser. **TinyShell:** the model emits a validated IR; deterministic renderers produce text; execution stays outside the repository. In both cases, security is architectural rather than a warning message."
  },
  {
    "id": 354,
    "section": "354–362 · LLM latency, cost and production operation",
    "question": "What model latencies has he operated around?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Exact production min/max values are not canonical. TinyShell reports controlled-pilot median generation latencies of about **1.26s (LFM2.5), 2.05s (FunctionGemma), 3.7s (Falcon-H1)**. Voice/streaming systems prioritize low perceived latency, but Bixxie should not invent p95 numbers for BerriTutor/ThirdSlate."
  },
  {
    "id": 355,
    "section": "354–362 · LLM latency, cost and production operation",
    "question": "Which systems stream responses?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "ThirdSlate streams generated tutoring responses through the Python/Next.js path to the browser; Bixxie streams json-render specs; TekkScope streams research events over SSE; voice systems use WebRTC for continuous media. Streaming is used when partial output meaningfully improves interactive latency, not by default for background tasks."
  },
  {
    "id": 356,
    "section": "354–362 · LLM latency, cost and production operation",
    "question": "What latency optimizations has he used?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Parallel/bounded retrieval or URL fan-out; two-stage/multi-stage ranking so expensive models only touch a reduced set; background persistence; async workers; streaming; moving similarity work into the database; caching/edge infrastructure where documented; provider routing/fallback to maintain availability. Exact before/after numbers exist only for some systems."
  },
  {
    "id": 357,
    "section": "354–362 · LLM latency, cost and production operation",
    "question": "What kinds of LLM caching has he used?",
    "status": "partial",
    "statusRaw": "PARTIAL/UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "Caching is part of his broader infrastructure toolkit, but a canonical semantic/prompt-response cache implementation for a production LLM system is not clearly documented. Do not claim one just because Cloudflare/Redis are present. Bixxie's AI Gateway cache was intentionally configured **off** in current setup."
  },
  {
    "id": 358,
    "section": "354–362 · LLM latency, cost and production operation",
    "question": "When is caching unsafe?",
    "status": "known",
    "statusRaw": "KNOWN AS REASONING",
    "visibility": "TECHNICAL",
    "answer": "When output depends on user authorization, private context, rapidly changing data, tool state or personalized memory and the cache key does not encode those dimensions. Cached AI output can leak one user's context to another or become dangerously stale. TP would prefer no cache to an incorrectly scoped one."
  },
  {
    "id": 359,
    "section": "354–362 · LLM latency, cost and production operation",
    "question": "Which projects tracked model spend?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "INTERNAL",
    "answer": "Berribot's benchmark explicitly considered cost/scalability and modern AI infrastructure can track token/cost; Bixxie uses gateway controls. Exact project spend dashboards/numbers are not canonical. Do not claim cost reductions without data."
  },
  {
    "id": 360,
    "section": "354–362 · LLM latency, cost and production operation",
    "question": "Give an example of materially reducing AI cost.",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Berribot's architecture is a clear cost-aware design: cheap/broad lexical+dense retrieval first, then run the expensive cross-encoder only on the fused top-K, then learning-to-rank. That structurally reduces expensive pair evaluations versus reranking the whole corpus. A verified dollar/percentage savings figure is not available."
  },
  {
    "id": 361,
    "section": "354–362 · LLM latency, cost and production operation",
    "question": "What model fallback/routing has he built?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "TekkScope has a unified model factory with ordered hosted/local candidates and in-request fallthrough on failure. Other systems should not be described as multi-provider unless documented."
  },
  {
    "id": 362,
    "section": "354–362 · LLM latency, cost and production operation",
    "question": "What does he do when an AI provider degrades?",
    "status": "partial",
    "statusRaw": "KNOWN AS PRACTICE/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Separate provider failure from application failure using traces/metrics; bound retries; fail over only when semantics permit; preserve a safe degraded response instead of hanging; and keep application eval independent of provider so a swap can be validated. Bixxie currently returns a generic safe “service unavailable” response rather than leaking upstream details."
  },
  {
    "id": 363,
    "section": "363–372 · Backend architecture",
    "question": "How should Bixxie answer “Can TP do backend engineering?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes. His strongest backend evidence includes FastAPI/Node services, PostgreSQL/Supabase schemas, auth/RBAC/audit, queues/workers, Redis, API integrations, streaming (SSE/WebSockets/WebRTC), background jobs, Docker/Kubernetes deployment, and production troubleshooting across Berribot, ThirdSlate, Uniffy, Hyr, TekkScope, RepoView and TraceBox. Backend is a secondary career target but a core part of how he builds AI products."
  },
  {
    "id": 364,
    "section": "363–372 · Backend architecture",
    "question": "What is the largest backend he has owned?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "By user scale, Pocketlink reached 24K+ users and Uniffy infrastructure served 10K+ users; by AI/backend technical depth, Berribot/ThirdSlate are the strongest owned systems. “Largest” depends on metric, so Bixxie should avoid manufacturing one winner."
  },
  {
    "id": 365,
    "section": "363–372 · Backend architecture",
    "question": "How many endpoints/services and what load?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Berribot: 4+ services deployed and 1K+ applicant submissions/day; ThirdSlate: multiple services with 1K+ users; Uniffy: 2K+ weekly transactions and up to 1,200+ peak concurrent sessions in the historical inventory. Exact endpoint counts/RPS are generally unknown."
  },
  {
    "id": 366,
    "section": "363–372 · Backend architecture",
    "question": "Give a service-boundary design example.",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "ThirdSlate separated the web/auth/API layer from Python AI/document-processing workflows so interactive product concerns and model/retrieval work could evolve/deploy independently. TekkScope similarly centralizes a shared research core while exposing web and MCP surfaces. The rule is to split around meaningful scaling/failure/ownership boundaries, not because microservices are fashionable."
  },
  {
    "id": 367,
    "section": "363–372 · Backend architecture",
    "question": "Synchronous vs asynchronous decisions?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "Keep user-critical validation/auth and simple reads synchronous; move expensive persistence, document processing, batch ingestion, notifications or long-running work into background/async paths; stream when the user benefits from partial progress. Examples include ThirdSlate background message persistence, Celery workloads, TekkScope async fan-out and SSE, and trading-bot worker isolation."
  },
  {
    "id": 368,
    "section": "363–372 · Backend architecture",
    "question": "Which queues/background systems has he operated?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "Celery + Redis, Redis Pub/Sub/asyncio queues, Node worker_threads, background tasks in web services, and cloud/container workers. Broad Kafka expertise should not be claimed from an uncertain Allotrix record."
  },
  {
    "id": 369,
    "section": "363–372 · Backend architecture",
    "question": "How has he made jobs idempotent?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Payment and notification workflows use state/dedup concepts: OutPay's reconciliation design included multiple dedupe layers; RepoView guards one-time view notification with `notified_at`; OutKey protects against credential replay. A generic reusable job-idempotency library is not documented."
  },
  {
    "id": 370,
    "section": "363–372 · Backend architecture",
    "question": "Give retry/backoff/dead-letter behavior.",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Repository history shows retry/backoff/jitter patterns in production-oriented services and bounded retry/fallback in provider workflows. Exact dead-letter queue policy is not canonical. Do not invent RabbitMQ/Kafka DLQs."
  },
  {
    "id": 371,
    "section": "363–372 · Backend architecture",
    "question": "How does he version APIs?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "He has worked with API versioning and contract-driven interfaces, but there is no single canonical migration story. His design preference is backwards-compatible schemas, explicit validation, and avoiding silent breaking changes. Project-specific version routes should be taken from code."
  },
  {
    "id": 372,
    "section": "363–372 · Backend architecture",
    "question": "When would he choose a monolith over microservices?",
    "status": "known",
    "statusRaw": "KNOWN AS OPINION",
    "visibility": "PUBLIC",
    "answer": "For a small team/product with one deployment/scaling domain, he would usually start with a **well-structured monolith** because it is cheaper to understand, test and operate. Split services only when independent scaling, failure isolation, language/runtime constraints or team ownership create enough benefit to justify distributed-systems overhead. This follows directly from his “do not overcomplicate simple things” bias."
  },
  {
    "id": 373,
    "section": "373–382 · Infrastructure, deployment and reliability",
    "question": "What has he personally deployed?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Containerized Python/Node AI services to **GCP (Artifact Registry, GKE, Cloud Run)** at Berribot; Docker/Kubernetes/AWS EKS deployment at ThirdSlate; Cloud Run for TraceBox; Vercel/Next.js personal/product applications; Supabase/Postgres-backed applications; Railway for some prototypes/services. Avoid claiming ownership of every cloud resource around an employer's system."
  },
  {
    "id": 374,
    "section": "373–382 · Infrastructure, deployment and reliability",
    "question": "What Docker decisions has he made beyond a Dockerfile?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Production/local image separation, non-root containers, dependency layering/builds, health/readiness behavior, container image publishing to registries, deployment through CI, runtime resource/startup debugging. ThirdSlate repo history includes runner disk-space and container startup/liveness issues, showing operational rather than tutorial-only use."
  },
  {
    "id": 375,
    "section": "373–382 · Infrastructure, deployment and reliability",
    "question": "Which Kubernetes resources has he configured?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Deployments/services, health/readiness probes, resource CPU/memory tuning, horizontal autoscaling work and manifests/pipeline deployment are evidenced in ThirdSlate/Berribot contexts. Exact ingress/configmap/secret/HPA policies should be claimed only from code."
  },
  {
    "id": 376,
    "section": "373–382 · Infrastructure, deployment and reliability",
    "question": "Has he handled autoscaling?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "ThirdSlate repository evidence includes **Horizontal Pod Autoscaler** work and CPU/memory tuning. Exact target utilization/min/max replicas are not in the canonical Bixxie source."
  },
  {
    "id": 377,
    "section": "373–382 · Infrastructure, deployment and reliability",
    "question": "Describe his strongest CI/CD pipeline.",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "At Berribot: source change → GitHub Actions tests/checks → Docker image → GCP Artifact Registry → GKE/Cloud Run services. ThirdSlate similarly used GitHub Actions → test/build → image push → Kubernetes/EKS deploy → health verification. The important part is that AI services were treated as deployable software, not manually run notebooks."
  },
  {
    "id": 378,
    "section": "373–382 · Infrastructure, deployment and reliability",
    "question": "What rollback strategy did it use?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "No safe canonical rollback mechanism (blue/green/canary/image revision command) is documented. Bixxie should not invent one."
  },
  {
    "id": 379,
    "section": "373–382 · Infrastructure, deployment and reliability",
    "question": "Has he run live schema migrations safely?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "He has designed/changed relational schemas in production-oriented systems and OpenNeural uses Alembic, but a detailed zero-downtime production migration story is not documented. Avoid overclaiming."
  },
  {
    "id": 380,
    "section": "373–382 · Infrastructure, deployment and reliability",
    "question": "What SLO/SLA/uptime targets has he been accountable for?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Historical outcomes include about 99.8% ThirdSlate uptime, 99.9% Uniffy uptime, and conflicting 99.2/99.8 Berribot availability records. Those are observed metrics, not necessarily contractual SLOs. Exact targets/measurement windows are unknown."
  },
  {
    "id": 381,
    "section": "373–382 · Infrastructure, deployment and reliability",
    "question": "What was his longest production outage?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "Not documented. Do not invent downtime duration."
  },
  {
    "id": 382,
    "section": "373–382 · Infrastructure, deployment and reliability",
    "question": "What postmortem/prevention changes followed an outage?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "His systems show the kinds of prevention he values — health probes, tests/evals, tracing, retries, safe failures, strict contracts — but a specific postmortem sequence is missing. Bixxie should not pretend preventive controls came from one named outage unless source confirms it."
  },
  {
    "id": 383,
    "section": "383–391 · Observability and debugging",
    "question": "Which projects used observability/evaluation tooling?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "Berribot used **Langfuse** for model/agent traces and prompt/eval workflows and **W&B** for ranking/evaluation metrics. ThirdSlate used RAGAS/DeepEval plus health/deployment telemetry. TekkScope exposes research/stream events; TraceBox persists transcripts/media/run states; Bixxie logs only safe request-failure metadata and avoids leaking upstream content."
  },
  {
    "id": 384,
    "section": "383–391 · Observability and debugging",
    "question": "What did he log/measure/trace?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Model outputs/traces, prompt/eval versions, ranking metrics, application failures, deployment health, research events, session/run states and user/product analytics depending on system. Exact field-level logging differs, and sensitive content should not be assumed logged."
  },
  {
    "id": 385,
    "section": "383–391 · Observability and debugging",
    "question": "What alerts actually paged/notified someone?",
    "status": "partial",
    "statusRaw": "PARTIAL/UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "RepoView sends owner view notifications; infrastructure health/monitoring existed in production stacks, but a verified on-call pager/alert taxonomy is not documented. Do not claim formal 24/7 paging."
  },
  {
    "id": 386,
    "section": "383–391 · Observability and debugging",
    "question": "What is TP's debugging sequence?",
    "status": "known",
    "statusRaw": "KNOWN AS WORKING STYLE",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "1. Reproduce the symptom and define what “wrong” actually means.  \n2. Trace the request/state/data path and locate the first boundary where reality diverges.  \n3. Classify the problem: data, model/prompt, application logic, database, infrastructure/network, or external provider.  \n4. Add instrumentation if the failure is invisible.  \n5. Change one relevant variable/hypothesis at a time.  \n6. Fix the root cause, then add a test/eval/guard so the same failure becomes cheaper to detect next time.  \n\nThat is consistent with his tendency to overanalyse briefly, find root cause, then rebuild the setup."
  },
  {
    "id": 387,
    "section": "383–391 · Observability and debugging",
    "question": "Give a bug where the obvious first hypothesis was wrong.",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "No sufficiently detailed canonical example. Bixxie should not fabricate one."
  },
  {
    "id": 388,
    "section": "383–391 · Observability and debugging",
    "question": "Give an infrastructure-not-app-code bug.",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "ThirdSlate's repository history includes deployment/startup/liveness and CI runner disk-space issues — failures where the application logic was not necessarily the root problem. Exact incident timeline should be pulled from commits/logs before telling a detailed story."
  },
  {
    "id": 389,
    "section": "383–391 · Observability and debugging",
    "question": "Give an external-provider/API bug.",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Multi-provider insurance/recruiting/model/search integrations necessarily produced schema/transient dependency issues, and TP built normalization/fallback around them. A single named provider incident is not canonical."
  },
  {
    "id": 390,
    "section": "383–391 · Observability and debugging",
    "question": "Give an AI failure caused by data/context rather than model.",
    "status": "known",
    "statusRaw": "KNOWN AS FAILURE CLASS",
    "visibility": "TECHNICAL",
    "answer": "ThirdSlate's central failure mode is exactly this: a capable model can answer badly if the **retrieved evidence is irrelevant, insufficient or cross-scoped**. The fix is retrieval/scoping/grounding/evaluation, not immediately swapping models. Berribot likewise shows retrieval quality can dominate ranking behavior before the reranker/model is blamed."
  },
  {
    "id": 391,
    "section": "383–391 · Observability and debugging",
    "question": "What debugging tool/technique does he reach for first?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "He tends to first make the system **observable**: logs/traces, request flow, database state, reproducible inputs, evaluation examples. There is no single favorite CLI debugger to canonize. His preference is evidence over guessing."
  },
  {
    "id": 392,
    "section": "392–399 · Security",
    "question": "Which projects involved security boundaries?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "RepoView: secure private-source sharing, hashed tokens, server-only GitHub credentials, path/visibility rules. OutKey: ES256 signatures, replay/revocation/policy. Uniffy/Berribot: RBAC, JWT/auth, audit logging, sensitive workflows. ThirdSlate: user/course scoping. Bixxie: prompt extraction/origin/size/schema/provider-secret boundaries. OutPay: wallet/payment-state/idempotency/reconciliation."
  },
  {
    "id": 393,
    "section": "392–399 · Security",
    "question": "What is the strongest auth/authorization system he built?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "**RepoView/OutKey** are the strongest demonstrations because authorization is the product's core, not a login checkbox. RepoView has admin auth plus capability-like share tokens exchanged to scoped viewer sessions; OutKey explores signed delegated authorization and replay-safe verification. Uniffy provides strong enterprise RBAC/audit experience."
  },
  {
    "id": 394,
    "section": "392–399 · Security",
    "question": "Give a tenant-isolation example.",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "ThirdSlate scoped retrieval by authenticated **user/course/material**; RepoView binds viewer session to a specific share/repository/ref and applies visibility rules before fetching. These are explicit anti-cross-tenant/data-leak boundaries."
  },
  {
    "id": 395,
    "section": "392–399 · Security",
    "question": "What secrets-management strategies has he used?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Environment/server-only credentials, cloud secrets/config rather than browser code, GitHub App private keys/installation tokens server-side, Supabase service-role key server-only, high-entropy share tokens hashed at rest, and never committing provider secrets. Exact employer secret manager products are not always public."
  },
  {
    "id": 396,
    "section": "392–399 · Security",
    "question": "Which web vulnerabilities does he explicitly protect against?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Authorization bypass/IDOR, token leakage/replay, path traversal, secret exposure, prompt injection/model data exfiltration, oversized request abuse, unsafe output rendering, cross-tenant data leakage, scanner/bot false positives, and untrusted Markdown/URL content. Do not claim a formal OWASP audit unless one happened."
  },
  {
    "id": 397,
    "section": "392–399 · Security",
    "question": "Has he done threat modeling?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Yes in practical design terms. RepoView explicitly enumerates browser↔app, app↔GitHub, app↔Supabase and app↔SMTP trust boundaries and what secrets can never cross them. OutKey similarly models forgery/replay/revocation. Whether he used a formal STRIDE document in every case is not established."
  },
  {
    "id": 398,
    "section": "392–399 · Security",
    "question": "Give a security flaw he found in his own implementation.",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "The current record contains proactive fixes/constraints but not a fully documented self-discovered vulnerability story suitable for public retelling. Do not fabricate one. It is safe to discuss design reviews that identified risks such as direct share-token persistence, hidden bytes sent client-side, or unsafe AI tool exposure as patterns the architecture avoids."
  },
  {
    "id": 399,
    "section": "392–399 · Security",
    "question": "What is his view on fail-open vs fail-closed?",
    "status": "known",
    "statusRaw": "KNOWN AS PHILOSOPHY",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "For **authorization/security boundaries**, fail closed: if the share/session/signature/policy cannot be verified, deny. For non-security enhancements such as RepoView's email notification, fail open to the core user task: a mail failure should not block an otherwise valid code view. He prefers deciding this boundary explicitly per failure rather than globally."
  },
  {
    "id": 400,
    "section": "400–407 · Performance and scale",
    "question": "What are TP's three largest systems by scale?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "There is no single comparable scale unit, so Bixxie should answer by dimension:\n- **Pocketlink:** 24,000+ creators/users — strongest consumer/product user-count evidence.\n- **Uniffy:** infrastructure serving 10,000+ users, ~2,000+ weekly transactions and historical evidence of up to ~1,200 concurrent sessions.\n- **Berribot:** 1,000+ applicant submissions/day, 500+ daily candidate evaluations, plus a 100-JD × 1,000-resume ranking benchmark.\n\nThirdSlate's 1,000+ users and Allotrix's 1,000+ delegates/event are also meaningful. Do not compare a load test to an MAU count as if they were the same metric."
  },
  {
    "id": 401,
    "section": "400–407 · Performance and scale",
    "question": "What limited those systems?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Berribot's limiting factors included expensive relevance scoring, latency and false-positive quality, which motivated staged retrieval/reranking. Uniffy had external-provider/data reconciliation and real-time/backend constraints. ThirdSlate was constrained by document processing, retrieval/model latency and trust/grounding. Pocketlink's exact infrastructure bottleneck is not documented. Bixxie should distinguish known pressure points from guessed CPU/database diagnoses."
  },
  {
    "id": 402,
    "section": "400–407 · Performance and scale",
    "question": "What is the highest concurrency he personally load-tested?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "A 500+ concurrent TekkScope number exists in older summaries but is not backed by a recovered benchmark artifact, so it should not be treated as verified. Uniffy has a historical **1,200+ peak concurrent-session** platform figure, but that is platform scale and not necessarily a load test TP personally ran. Better to say the exact personal load-test maximum is not currently documented."
  },
  {
    "id": 403,
    "section": "400–407 · Performance and scale",
    "question": "What load-testing methodology/tool did he use?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "No canonical tool/methodology is recorded for a high-concurrency benchmark. Do not invent k6, Locust, JMeter, Artillery, etc."
  },
  {
    "id": 404,
    "section": "400–407 · Performance and scale",
    "question": "What broke first under load?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "No verified load-test postmortem is available. Architecture evidence shows known pressure areas — model calls, browser workers, DB/retrieval, worker queues — but “broke first” must not be inferred."
  },
  {
    "id": 405,
    "section": "400–407 · Performance and scale",
    "question": "Best before/after latency optimization story?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "RK&GT is the clearest measured example: parallelizing ingestion across four RFID streams reduced backend processing latency by about **20%**. Berribot's staged retrieval architecture is a stronger systems-design example of controlling expensive work, although an exact before/after millisecond measurement is not available."
  },
  {
    "id": 406,
    "section": "400–407 · Performance and scale",
    "question": "Best database-performance story?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "ThirdSlate repository history includes moving vector similarity work into the database instead of application-side processing, which improved scalability and reduced avoidable data movement. Exact query plans/timing are not included in the current knowledge base."
  },
  {
    "id": 407,
    "section": "400–407 · Performance and scale",
    "question": "Best infrastructure-cost story?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "TP has designed for cost — staged model use, bounded fan-out, smaller models, Cloud Run-style isolated workers — but no verified dollar before/after infrastructure story should be claimed."
  },
  {
    "id": 408,
    "section": "408–416 · Product thinking and customer work",
    "question": "Which projects involved direct user/customer interaction?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Berribot involved recruiter/client discovery and onboarding; Pocketlink involved creator interviews/outreach and behavior analytics; Hyr included recruiter pilot/review; Allotrix served conference organizers TP understood firsthand; ThirdSlate served students; AgroBot corporate relations involved sponsors/research/industry stakeholders. TP is not purely an internal engineer; he has repeatedly had to translate user pain into implementation."
  },
  {
    "id": 409,
    "section": "408–416 · Product thinking and customer work",
    "question": "How many user/customer calls has he done?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "No total reliable count exists across projects. AgroBot records at least **10 external engagements with 25+ stakeholders**, but that is not the same as product user interviews. Bixxie should not invent a lifetime number."
  },
  {
    "id": 410,
    "section": "408–416 · Product thinking and customer work",
    "question": "Give a customer complaint that changed what he built.",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PRODUCT",
    "answer": "The broad pattern is documented — recruiter false positives/slow screening drove Berribot's ranking redesign; creators' needs plus behavior analytics drove Pocketlink iteration; trust in study answers drove ThirdSlate's grounding/citation/review system. A verbatim customer complaint is not preserved, so Bixxie should paraphrase the observed problem rather than quote someone."
  },
  {
    "id": 411,
    "section": "408–416 · Product thinking and customer work",
    "question": "Give a feature he chose not to build despite a request.",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "BEHAVIORAL",
    "answer": "No specific story is reliably documented. Bixxie can explain his current prioritization philosophy but should not invent a customer request."
  },
  {
    "id": 412,
    "section": "408–416 · Product thinking and customer work",
    "question": "How does he distinguish a loud user request from a broadly important problem?",
    "status": "known",
    "statusRaw": "KNOWN AS PRODUCT PHILOSOPHY",
    "visibility": "PUBLIC",
    "answer": "Look for repeated pain across users/behavior, not volume of one person's opinion. Check whether the request maps to the core job the product is meant to do, inspect usage data where possible, and ask what outcome the user is actually trying to achieve. Build the smallest experiment that can test the hypothesis before committing architecture."
  },
  {
    "id": 413,
    "section": "408–416 · Product thinking and customer work",
    "question": "Give an example where he reduced scope to ship sooner.",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "FOUNDER",
    "answer": "The current answer is more of a learned operating principle than a perfectly documented story: after overbuilding earlier products, TP deliberately tries to ship the **smallest useful version** and let usage tell him what deserves depth. TinyShell is explicitly bounded to compile-only rather than execution, and RepoView deliberately focuses on read-only review instead of becoming a GitHub replacement."
  },
  {
    "id": 414,
    "section": "408–416 · Product thinking and customer work",
    "question": "Give an example where he delayed shipping for quality/reliability.",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "ThirdSlate's grounding/evaluation/human-review path and TinyShell's non-execution boundary show cases where correctness/safety wins over maximal autonomy. Exact schedule delay is not documented, so don't say “shipping was delayed X weeks.”"
  },
  {
    "id": 415,
    "section": "408–416 · Product thinking and customer work",
    "question": "Which product metric does he instinctively look at first after launch?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PRODUCT",
    "answer": "There is no universal single metric. His instinct is to ask whether users **reach the core value and come back/use it**, then inspect the bottleneck in that journey. For AI products he also immediately cares about failure quality: grounded/task-success rate, latency, and where human intervention is needed. He dislikes vanity metrics without a decision attached."
  },
  {
    "id": 416,
    "section": "408–416 · Product thinking and customer work",
    "question": "What product decision is he proud of that was not technically complex?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The strongest theme is recognizing that trust and user control are product features: recruiter audit/override, course citations/human review, or RepoView's read-only controlled sharing. None is impressive because of a novel algorithm alone; they make users more willing to rely on the system."
  },
  {
    "id": 417,
    "section": "417–423 · 0→1 building and speed",
    "question": "Strongest example of blank page → real users?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "**Pocketlink** is the strongest product-scale example: co-founded, built across the product stack, iterated with users, and grew to **24,000+ creators/users**. **Hyr** is the strongest hiring-context example of taking an early/empty repo to a recruiter pilot. ThirdSlate is the strongest AI-specific founder example. Which one Bixxie chooses should depend on whether the visitor cares about product scale, startup engineering, or AI."
  },
  {
    "id": 418,
    "section": "417–423 · 0→1 building and speed",
    "question": "How long did idea → prototype → user → stable product take?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "FOUNDER",
    "answer": "The overall founder-role date ranges are known, but milestone elapsed times are not. Bixxie should not retrofit timelines from commit dates."
  },
  {
    "id": 419,
    "section": "417–423 · 0→1 building and speed",
    "question": "What did version one deliberately leave out?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "FOUNDER",
    "answer": "Exact founder v1 cut lists are not canonical. The current philosophy is to leave out secondary workflow/automation/polish until the core user problem is validated. RepoView/TinyShell provide current concrete examples of intentionally narrow boundaries."
  },
  {
    "id": 420,
    "section": "417–423 · 0→1 building and speed",
    "question": "How did he choose an initial stack with no existing architecture?",
    "status": "known",
    "statusRaw": "KNOWN AS PRACTICE",
    "visibility": "TECHNICAL",
    "answer": "Prefer tools he can move quickly with and operate: TypeScript/Next.js for web product surfaces, Python/FastAPI for AI/backend work, Postgres/Supabase for relational/auth needs, then add specialized infrastructure only when required. The priority is short feedback loop and clear operational behavior, not novelty."
  },
  {
    "id": 421,
    "section": "417–423 · 0→1 building and speed",
    "question": "What did he manualize before automating?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "FOUNDER",
    "answer": "Recruiter judgment/manual QA remained part of Berribot/ThirdSlate while automation was evaluated; human review in ThirdSlate is explicitly a controlled step. A detailed founder “concierge MVP” story is not documented."
  },
  {
    "id": 422,
    "section": "417–423 · 0→1 building and speed",
    "question": "Fastest useful production feature shipped?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "FOUNDER",
    "answer": "No defensible hour/day figure is stored. Pocketlink's cadence of roughly four releases/month demonstrates regular shipping, but not a single fastest feature."
  },
  {
    "id": 423,
    "section": "417–423 · 0→1 building and speed",
    "question": "Where did moving too quickly create debt?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "OutPay's retrospective highlights the importance of building reconciliation/idempotency early rather than proving only the happy path first. More generally, TP has learned that speed without explicit state/evals creates expensive ambiguity later. His goal now is “fast with a measurement/safety boundary,” not merely “fast.”"
  },
  {
    "id": 424,
    "section": "424–429 · Ownership and autonomy",
    "question": "Best story of finding an unassigned problem?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Berribot's matching quality is a strong example: instead of treating poor recommendations as “the model is imperfect,” TP benchmarked the workflow, decomposed it into retrieval/ranking/evaluation stages and built an architecture that could be measured. His pattern is to turn vague pain into an observable system rather than wait for a perfectly scoped ticket."
  },
  {
    "id": 425,
    "section": "424–429 · Ownership and autonomy",
    "question": "How did he prove the problem mattered?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He ties technical failures to workflow impact: recruiter shortlisting time/false positives, reconciliation hours, student hallucination/manual review, creator engagement, conference organizer coordination. That is a recurring operating habit — establish the user/business cost before spending engineering complexity."
  },
  {
    "id": 426,
    "section": "424–429 · Ownership and autonomy",
    "question": "What did he personally decide?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Examples include Berribot's multi-stage retrieval/ranking structure, ThirdSlate's explicit grounding/human-review workflow, RepoView's token/session security model, and TinyShell's typed-IR/non-execution boundary. Each replaces an easier but less inspectable option with a system whose behavior can be reasoned about."
  },
  {
    "id": 427,
    "section": "424–429 · Ownership and autonomy",
    "question": "Who did he need to persuade?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "BEHAVIORAL",
    "answer": "Recruiters/clients had to trust ranking outcomes; founder/product collaborators had to accept architecture/product tradeoffs; AgroBot partners had to see value in technical work. Exact named persuasion conversations are not stored and should not be fabricated."
  },
  {
    "id": 428,
    "section": "424–429 · Ownership and autonomy",
    "question": "What was the outcome?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Where measurement exists: Berribot reduced shortlisting/false positives; ThirdSlate improved groundedness/manual QA; AgroBot generated partnerships/commitments; Hyr reduced recruiter screening time. The broader outcome is that TP repeatedly moved beyond implementation into evidence and adoption."
  },
  {
    "id": 429,
    "section": "424–429 · Ownership and autonomy",
    "question": "Example of ownership outside formal role?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "AgroBot is the clearest: he began as an ML engineer and took on **technical operations, budget/resource coordination and corporate relations**. That is materially outside a narrow “train models” job and reflects his interest in making the whole team/system work."
  },
  {
    "id": 430,
    "section": "430–437 · Ambiguity and prioritization",
    "question": "Strongest “figure it out” story?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Hyr is a good founder-facing story: early-stage recruiting problem, little mature infrastructure, and a need to turn job/resume data into a useful recruiter workflow quickly. TP had to decide what “good enough to pilot” meant and connect extraction, normalization, ranking, review and product surfaces."
  },
  {
    "id": 431,
    "section": "430–437 · Ambiguity and prioritization",
    "question": "What was unknown at the start?",
    "status": "partial",
    "statusRaw": "KNOWN AS CONTEXT/PARTIAL",
    "visibility": "FOUNDER",
    "answer": "Exact product shape, data representation, acceptable ranking quality, recruiter workflow and how much should be automated versus human-reviewed. In most zero-to-one projects, the uncertainty was not “how do I code this endpoint?” but “what system should exist at all?”"
  },
  {
    "id": 432,
    "section": "430–437 · Ambiguity and prioritization",
    "question": "What questions does he ask first?",
    "status": "known",
    "statusRaw": "KNOWN AS WORKING STYLE",
    "visibility": "PUBLIC",
    "answer": "Who has the problem? What are they doing today? What is expensive/painful about it? What does a successful outcome look like? Which failure is unacceptable? Which decisions are reversible? What is the smallest build that gives us real information? Then he maps technical constraints."
  },
  {
    "id": 433,
    "section": "430–437 · Ambiguity and prioritization",
    "question": "Which assumptions does he explicitly make?",
    "status": "known",
    "statusRaw": "KNOWN AS PRACTICE",
    "visibility": "PUBLIC",
    "answer": "He tries to surface assumptions about user workflow, data availability/quality, model capability, scale, security and what “better” means. An assumption should be tied to how cheaply it can be tested; high-impact irreversible assumptions need more evidence before committing."
  },
  {
    "id": 434,
    "section": "430–437 · Ambiguity and prioritization",
    "question": "How does he choose what *not* to investigate?",
    "status": "known",
    "statusRaw": "KNOWN AS PRACTICE",
    "visibility": "FOUNDER",
    "answer": "By expected decision value: if learning the answer will not change what he builds next, defer it. Prioritize unknowns that could invalidate the core product or architecture. This is an area he is deliberately improving because his natural curiosity can send him 25 tabs deep on a minor question."
  },
  {
    "id": 435,
    "section": "430–437 · Ambiguity and prioritization",
    "question": "How does he sequence ambiguous work?",
    "status": "known",
    "statusRaw": "KNOWN AS PRACTICE",
    "visibility": "FOUNDER",
    "answer": "Risk first: validate the user/problem and the hardest technical assumption, then establish the minimal end-to-end path, then reliability/measurement, then depth/polish. He is increasingly wary of building broad infrastructure before one thin slice works."
  },
  {
    "id": 436,
    "section": "430–437 · Ambiguity and prioritization",
    "question": "What later proved wrong?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "His recurring wrong assumption was that more features/engineering automatically produced a better product. Founder experience showed that users may value a simpler solution or a different pain point entirely. Specific project hypotheses should be named only when documented."
  },
  {
    "id": 437,
    "section": "430–437 · Ambiguity and prioritization",
    "question": "How does he adapt without losing momentum?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Treat plans as **best guesses with current information**, not commitments to ego. Keep the north star/problem stable while changing implementation/scope. His “Build a compass to wander” philosophy is partly this: direction matters more than pretending the whole route is fixed."
  },
  {
    "id": 438,
    "section": "438–445 · Leadership",
    "question": "What is the largest group he has led?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "AgroBot operational leadership coordinates across **seven cross-functional leads and 25+ external/internal stakeholders**, and his Residence Hall Association role involves a substantial student community. Exact direct-report counts are not canonical, so “led X people” should be avoided unless verified."
  },
  {
    "id": 439,
    "section": "438–445 · Leadership",
    "question": "What authority did he have versus influence?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Founder roles had product/technical decision ownership; AgroBot leadership included budget/resource/operations and corporate-relations responsibility but still required coordination across peer leads; residence leadership is elected/formal community leadership. Much of his leadership is influence without unilateral authority — aligning technical and nontechnical people around a decision."
  },
  {
    "id": 440,
    "section": "438–445 · Leadership",
    "question": "Give a project coordinating multiple people.",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "AgroBot is the strongest documented case: coordinate technical operations across multiple concurrent initiatives/leads while managing a **$15K+ operations budget**, research assets/dashboards and external partnerships. Exact task-assignment mechanics are not fully recorded."
  },
  {
    "id": 441,
    "section": "438–445 · Leadership",
    "question": "How does he divide work?",
    "status": "partial",
    "statusRaw": "KNOWN AS STYLE/PARTIAL",
    "visibility": "BEHAVIORAL",
    "answer": "He prefers clear ownership boundaries around outcomes rather than micromanaging implementation, with shared interfaces/definitions and visible progress. The evidence from his projects shows he likes explicit responsibility and measurable outputs. A detailed team ritual/process is not canonical."
  },
  {
    "id": 442,
    "section": "438–445 · Leadership",
    "question": "Tell me about helping someone who was struggling.",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "OPTIONAL/BEHAVIORAL",
    "answer": "He informally helps friends/teammates with code, projects, résumés and interviews, but no fully documented STAR story should be fabricated. Bixxie can say informal mentoring is part of how he contributes and leave the specific anecdote unknown."
  },
  {
    "id": 443,
    "section": "438–445 · Leadership",
    "question": "Has he mentored/onboarded engineers?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Informally, yes — teammates/friends and project collaborators. Formal sustained engineering-manager-style mentorship is not strongly documented, so do not overstate it."
  },
  {
    "id": 444,
    "section": "438–445 · Leadership",
    "question": "Example where team wanted one thing and he advocated another?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "BEHAVIORAL",
    "answer": "No verified story is available. Avoid inventing conflict."
  },
  {
    "id": 445,
    "section": "438–445 · Leadership",
    "question": "How does he lead without final authority?",
    "status": "known",
    "statusRaw": "KNOWN AS STYLE",
    "visibility": "PUBLIC",
    "answer": "Make the problem legible, bring evidence, translate between technical/nontechnical priorities, propose a concrete next step and make it easy for others to engage. AgroBot corporate relations and cross-functional operations are strong evidence that he can move work through influence rather than formal command."
  },
  {
    "id": 446,
    "section": "446–452 · Teamwork, conflict and disagreement",
    "question": "Give a real technical disagreement.",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "BEHAVIORAL",
    "answer": "No detailed, verified disagreement story is currently in the knowledge base. Bixxie must not invent one."
  },
  {
    "id": 447,
    "section": "446–452 · Teamwork, conflict and disagreement",
    "question": "What evidence changed the decision?",
    "status": "unknown",
    "statusRaw": "UNKNOWN FOR A SPECIFIC STORY",
    "visibility": "BEHAVIORAL",
    "answer": "General style: benchmark, prototype, logs/evals or user evidence instead of argument by preference. But do not attach this to an invented disagreement."
  },
  {
    "id": 448,
    "section": "446–452 · Teamwork, conflict and disagreement",
    "question": "Give a disagreement where TP changed his mind.",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "His broader product evolution is a real example of changing his mind: he used to believe a good plan meant sticking to it and that more complete engineering meant a better product; startup experience taught him that changing course when evidence changes is often the more disciplined choice. No named teammate dispute is canonical."
  },
  {
    "id": 449,
    "section": "446–452 · Teamwork, conflict and disagreement",
    "question": "Give a disagreement where he supported a team decision despite disagreeing.",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "BEHAVIORAL",
    "answer": "Not documented."
  },
  {
    "id": 450,
    "section": "446–452 · Teamwork, conflict and disagreement",
    "question": "Conflict with founder/product person?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "BEHAVIORAL",
    "answer": "Not documented. Do not invent interpersonal stories about identifiable former colleagues."
  },
  {
    "id": 451,
    "section": "446–452 · Teamwork, conflict and disagreement",
    "question": "What teammate behavior is hardest for him?",
    "status": "known",
    "statusRaw": "KNOWN/PERSONAL",
    "visibility": "OPTIONAL",
    "answer": "He gets drained by **vagueness without action, pointless meetings, bureaucracy, unnecessary slowness, and “we do it this way because we always have.”** He handles that best when he can turn the discussion into a concrete decision/owner/next step."
  },
  {
    "id": 452,
    "section": "446–452 · Teamwork, conflict and disagreement",
    "question": "What does he do when code review stalls?",
    "status": "known",
    "statusRaw": "KNOWN AS STYLE",
    "visibility": "PUBLIC",
    "answer": "Reduce the disagreement to the actual tradeoff, identify what can be tested, separate preference from requirement, and choose the simplest decision that meets constraints. If both approaches are acceptable and the cost of delay exceeds the difference, pick one and move. He does not enjoy conflict lingering for its own sake."
  },
  {
    "id": 453,
    "section": "453–461 · Failure, mistakes and lessons",
    "question": "What is the most meaningful professional failure he can discuss?",
    "status": "known",
    "statusRaw": "KNOWN AS PATTERN",
    "visibility": "PUBLIC",
    "answer": "**Building too much before proving that people actually needed it.** Across startup projects, TP sometimes optimized architecture/features before the user signal justified the work. That is a more meaningful failure than a manufactured outage because it changed how he now approaches 0→1 work."
  },
  {
    "id": 454,
    "section": "453–461 · Failure, mistakes and lessons",
    "question": "What did he believe at the time?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "That if the product was more complete, flexible and technically polished, it would naturally become more valuable. He over-weighted building quality relative to learning quality."
  },
  {
    "id": 455,
    "section": "453–461 · Failure, mistakes and lessons",
    "question": "What signal did he miss?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Whether the feature/problem was important enough to users **now**, and whether the smallest version already answered the key hypothesis. He sometimes treated a technical opportunity as product evidence."
  },
  {
    "id": 456,
    "section": "453–461 · Failure, mistakes and lessons",
    "question": "What were the consequences?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Time and attention went into features/infrastructure that produced less learning than a smaller release or more user conversations would have. This is not framed as catastrophic failure; the cost was slower iteration and opportunity cost."
  },
  {
    "id": 457,
    "section": "453–461 · Failure, mistakes and lessons",
    "question": "How did he take responsibility?",
    "status": "known",
    "statusRaw": "KNOWN AS SELF-ASSESSMENT",
    "visibility": "PUBLIC",
    "answer": "He does not blame “users not understanding the product.” His own stated lesson is that he built too much and should have validated sooner. The behavioral change is the important evidence."
  },
  {
    "id": 458,
    "section": "453–461 · Failure, mistakes and lessons",
    "question": "What permanently changed afterward?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Ship the smallest useful version, talk to users/inspect behavior, measure failure modes, and add complexity only when it buys something concrete. Distinguish reversible choices from high-risk ones so he can move faster without becoming careless."
  },
  {
    "id": 459,
    "section": "453–461 · Failure, mistakes and lessons",
    "question": "Biggest technical mistake?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "A recurring technical mistake is **adding infrastructure/complexity before measurement is mature**, or building the happy path before reconciliation/eval/observability catches edge cases. OutPay's retrospective around reconciliation is a concrete example. A single “worst bug” is not documented."
  },
  {
    "id": 460,
    "section": "453–461 · Failure, mistakes and lessons",
    "question": "Biggest startup/product mistake?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Overbuilding before validating the user's real need. This is the cleanest founder answer and aligns with Pocketlink/other startup lessons."
  },
  {
    "id": 461,
    "section": "453–461 · Failure, mistakes and lessons",
    "question": "Communication/people mistake?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "CONDITIONAL",
    "answer": "TP can be impatient with processes that seem unnecessarily slow and naturally wants to move to the fix. The improvement is to first make sure the other person feels the problem/constraint was understood, especially when the “slow” thing protects a need he has not yet seen. A specific harmful incident is not documented."
  },
  {
    "id": 462,
    "section": "462–467 · Communication",
    "question": "How does he communicate progress when things are going well?",
    "status": "known",
    "statusRaw": "KNOWN AS STYLE",
    "visibility": "PUBLIC",
    "answer": "Concise, outcome-focused updates: what changed, what is verified, what remains risky, and what is next. He prefers concrete artifacts — demo, metric, PR, trace, dashboard — over long status narratives."
  },
  {
    "id": 463,
    "section": "462–467 · Communication",
    "question": "How does he communicate a slipping deadline?",
    "status": "known",
    "statusRaw": "KNOWN AS STYLE",
    "visibility": "PUBLIC",
    "answer": "Say it early, name the reason rather than hide behind “unexpected complexity,” separate must-have from nice-to-have, and propose the revised scope/date/decision needed. His bias is to reduce scope before silently letting an ambiguous deadline drift."
  },
  {
    "id": 464,
    "section": "462–467 · Communication",
    "question": "Example explaining technical work to nontechnical people?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "AgroBot corporate-relations work required turning agricultural robotics/ML research into proposals and presentations for **25+ external stakeholders** and sponsors. Founder products similarly required describing AI outcomes to recruiters/students/creators rather than explaining embeddings or graphs first."
  },
  {
    "id": 465,
    "section": "462–467 · Communication",
    "question": "How does he write design proposals?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "He prefers problem → constraints → current failure → options/tradeoffs → chosen approach → architecture/data flow → risks → measurement/rollback/open questions. His case studies and system diagrams reflect this style. A single formal RFC template is not canonical."
  },
  {
    "id": 466,
    "section": "462–467 · Communication",
    "question": "Sync discussion, docs or prototypes?",
    "status": "known",
    "statusRaw": "KNOWN AS STYLE",
    "visibility": "PUBLIC",
    "answer": "Use the cheapest medium that resolves the uncertainty. A quick conversation is good for ambiguity/alignment; a short written design is better for consequential technical decisions; a prototype is best when people are debating assumptions that can be tested. He dislikes meetings that do not produce a clearer decision."
  },
  {
    "id": 467,
    "section": "462–467 · Communication",
    "question": "What communication feedback has he acted on?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "His MUN/founder/partnership experience taught him that being technically right is not enough; the explanation must fit the audience and decision. He has also learned to be less eager to over-explain systems before establishing why the listener should care. No verbatim manager feedback should be invented."
  },
  {
    "id": 468,
    "section": "468–477 · Founder/co-founder experience",
    "question": "What did “co-founder” mean operationally?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "It meant TP was not handed a bounded engineering spec. He helped decide the product, built significant portions end to end, dealt with users/feedback/operations, and lived with consequences such as adoption and prioritization. Pocketlink, ThirdSlate and Allotrix are evidence of product + engineering ownership rather than title inflation."
  },
  {
    "id": 469,
    "section": "468–477 · Founder/co-founder experience",
    "question": "Was he responsible for incorporation/equity/legal formation?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 470,
    "section": "468–477 · Founder/co-founder experience",
    "question": "Did he recruit teammates/co-founders?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "FOUNDER",
    "answer": "Collaborative founder teams existed, but a verified recruiting story/count is not documented. Do not invent hiring authority."
  },
  {
    "id": 471,
    "section": "468–477 · Founder/co-founder experience",
    "question": "Did he interview/hire people?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "FOUNDER",
    "answer": "No canonical hiring count/process. Distinguish building hiring software from personally being a hiring manager."
  },
  {
    "id": 472,
    "section": "468–477 · Founder/co-founder experience",
    "question": "Did he sell/pitch/onboard/support customers?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes in founder/partner/client contexts: Pocketlink creator interviews/outreach, Berribot client discovery/onboarding, Hyr recruiter pilot interactions, AgroBot sponsor/industry outreach, and Allotrix conference-organizer use. Formal quota-carrying sales experience is not claimed."
  },
  {
    "id": 473,
    "section": "468–477 · Founder/co-founder experience",
    "question": "Did any of his companies generate revenue?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 474,
    "section": "468–477 · Founder/co-founder experience",
    "question": "Did he raise funding or speak with investors?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "CONDITIONAL",
    "answer": "AgroBot partnerships generated $8K+ commitments, but that is not startup venture funding. TP has explored startup/co-founder ecosystems and RepoView explicitly considers investor review, but a verified startup fundraising round is not documented."
  },
  {
    "id": 475,
    "section": "468–477 · Founder/co-founder experience",
    "question": "How did founder teams divide equity/responsibility/conflict?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 476,
    "section": "468–477 · Founder/co-founder experience",
    "question": "What did founding teach him about engineering priorities?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Engineering quality matters, but product value is an empirical question. Get the core workflow in front of people, understand what failure costs users, measure the thing that matters, and avoid infrastructure that the current stage cannot justify. Founding made him more product-minded without making him less technical."
  },
  {
    "id": 477,
    "section": "468–477 · Founder/co-founder experience",
    "question": "Why seek a role instead of only starting another company?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Right now TP wants to become **genuinely excellent at applied AI by working on hard real systems with strong people**, finish UBC, and deepen the engineering judgment that will make him better whether he later becomes a staff-level builder or starts another company. He still likes entrepreneurship; the near-term goal is not “founder at all costs,” but maximizing learning, technical depth and useful ownership."
  },
  {
    "id": 478,
    "section": "478–482 · Research and academic work",
    "question": "Has he authored papers/posters/preprints?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes: **“Detection of COVID-19 from Chest X-ray Images using Concatenated Deep Learning Neural Networks,” IJCRR, 2022**, co-authored with Anand Jeyasingh, DOI `10.31782/ijcrr.2022.14310`. TinyShell also contains a draft whitepaper/research artifacts, but it should not be represented as a formally published paper unless that changes."
  },
  {
    "id": 479,
    "section": "478–482 · Research and academic work",
    "question": "Has he worked formally in a professor/research lab?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "UBC AgroBot contributes to university research/proposals and TP has produced literature reviews/datasets/proposals, but a formal paid research-assistant/lab appointment with a professor is not currently documented."
  },
  {
    "id": 480,
    "section": "478–482 · Research and academic work",
    "question": "Has he reproduced papers/research methods?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "TabFM Benchmark is explicitly a reproducible evaluation of a research model against classical baselines; TinyShell runs controlled compact-model fine-tuning/evaluation. Earlier deep-learning work implemented published architectures such as Xception/ResNet/EfficientNet. A formal paper-reproduction claim should be tied to a specific repo."
  },
  {
    "id": 481,
    "section": "478–482 · Research and academic work",
    "question": "Which AI papers influenced his systems?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "OPTIONAL/TECHNICAL",
    "answer": "RRF and LambdaMART are directly reflected in Berribot's architecture; retrieval/ranking and modern RAG/agent evaluation literature influence current work. There is no curated “top five papers” list from TP, so Bixxie should not invent favorite citations."
  },
  {
    "id": 482,
    "section": "478–482 · Research and academic work",
    "question": "Which research areas does he want to explore?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Applied AI systems where evaluation, agents, retrieval, memory, small/efficient models and reliability meet real products. He is especially interested in the system behavior around models — what makes them observable, controllable and useful — rather than purely training frontier foundation models from scratch."
  },
  {
    "id": 483,
    "section": "483–487 · Open source",
    "question": "Which repos are genuine open-source/research projects?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "TinyShell, TabFM Benchmark, OutKey and several public personal projects are intended to be inspectable/shareable. TinyShell's dataset is CC BY 4.0, but the repository's overall software license was not fully established in the recovered snapshot, so “open source” should be used carefully for the code itself. A public GitHub repo is not automatically licensed open source."
  },
  {
    "id": 484,
    "section": "483–487 · Open source",
    "question": "Which upstream external projects has he contributed to?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "PUBLIC",
    "answer": "No verified list of merged upstream contributions is in the current knowledge base. Do not invent open-source cred from dependencies used."
  },
  {
    "id": 485,
    "section": "483–487 · Open source",
    "question": "Which external PRs were merged?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "PUBLIC",
    "answer": "Not documented."
  },
  {
    "id": 486,
    "section": "483–487 · Open source",
    "question": "Example of learning an unfamiliar open-source codebase?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "His projects integrate and reason about substantial open-source ecosystems (LangGraph, Supabase, Kubernetes, Crawlee/Playwright, model libraries), but a named upstream contribution story is not canonical. Bixxie should not imply maintainer-level work."
  },
  {
    "id": 487,
    "section": "483–487 · Open source",
    "question": "Do external developers depend on something he maintains?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "There is no documented package/download/dependent count proving a developer ecosystem. His public repos are useful portfolio/research artifacts, but dependency adoption should not be invented."
  },
  {
    "id": 488,
    "section": "488–492 · Awards, competitions and recognition",
    "question": "List his hackathons.",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "No exhaustive, verified hackathon history is currently present in Bixxie's source. Do not generate event names/results from memory fragments."
  },
  {
    "id": 489,
    "section": "488–492 · Awards, competitions and recognition",
    "question": "List awards/scholarships/technical recognition.",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The current education source explicitly says **no verified awards or scholarships are on record**. Other recognition includes district-level 400m participation, extensive MUN activity, a peer-reviewed publication, and selection/leadership roles, but those are not scholarships. Do not convert them into awards."
  },
  {
    "id": 490,
    "section": "488–492 · Awards, competitions and recognition",
    "question": "What did judges recognize in anything he won?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "PUBLIC",
    "answer": "No reliable technical-award judging feedback is documented."
  },
  {
    "id": 491,
    "section": "488–492 · Awards, competitions and recognition",
    "question": "Have projects been featured/incubated/funded?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "AgroBot secured external partnership/funding commitments; TP's publication is peer-reviewed; founder projects gained real users. No verified accelerator acceptance, major press feature or VC funding should be claimed."
  },
  {
    "id": 492,
    "section": "488–492 · Awards, competitions and recognition",
    "question": "Which recognition mattered to him personally?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "OPTIONAL",
    "answer": "His own stated pride centers less on formal awards and more on **Pocketlink crossing 24,000 users** and **turning Berribot's matching into a real measurable ranking system**. Those moments mattered because they proved product usefulness and technical growth, respectively."
  },
  {
    "id": 493,
    "section": "493–496 · University and community involvement",
    "question": "Describe the Residence Hall Association role.",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "TP serves as **Brock Commons Area President in the Residence Hall Association for 2025–26**. The role is meaningful because it made UBC feel like a community rather than just classes and gives him a non-engineering leadership context around residents/events/community issues. Exact resident count, budget and event metrics are not canonical."
  },
  {
    "id": 494,
    "section": "493–496 · University and community involvement",
    "question": "Give a difficult community-leadership story.",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "BEHAVIORAL",
    "answer": "No sufficiently detailed public story is documented. Do not invent residence incidents or sensitive student situations."
  },
  {
    "id": 495,
    "section": "493–496 · University and community involvement",
    "question": "What other clubs/teams/communities matter?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "UBC AgroBot/design-team community, residence/RHA, student/startup/AI engineering communities, recreational sports such as pickleball/LongBoat, and earlier MUN/debate communities. These matter because TP's university experience has been highly extracurricular/people-facing alongside coursework."
  },
  {
    "id": 496,
    "section": "493–496 · University and community involvement",
    "question": "Which activities does he genuinely enjoy?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "Sports and social/community activities are genuine: swimming, running, biking, lifting, pickleball, spontaneous time with friends, and occasional events such as LongBoat. MUN was a major genuine school-era interest even though he no longer does it formally."
  },
  {
    "id": 497,
    "section": "497–502 · Career goals",
    "question": "What roles is TP applying for right now, in priority order?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "1. **AI Engineer / Applied AI Engineer**\n2. **LLM / Generative AI Engineer**\n3. **Forward-Deployed AI Engineer / product-facing AI engineer**\n4. **Founding Engineer** where the work is heavily technical and AI/product-oriented\n5. **Backend Engineer** as a secondary path when the backend work is substantive\n\nThe common denominator matters more than the exact title: he wants to own real AI/product systems, not spend his day only wiring demos or moving narrowly scoped tickets."
  },
  {
    "id": 498,
    "section": "497–502 · Career goals",
    "question": "Which role titles is he *not* primarily targeting?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He is not primarily targeting **data scientist**, pure **ML research scientist**, pure **frontend engineer**, traditional **IT**, or roles where “AI” mostly means prompt-writing without engineering ownership. Product-management/VC/product-owner directions have interested him at different moments, but they are not his current primary career identity."
  },
  {
    "id": 499,
    "section": "497–502 · Career goals",
    "question": "What AI problems does he want to work on for the next 2–3 years?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Problems where models are only one component of a real system: agent/tool orchestration, reliable RAG/search, evaluation, model routing, memory/context, voice/multimodal interaction, human-in-loop workflows, inference/cost/latency tradeoffs, and the backend/infrastructure needed to make those systems dependable. He especially wants problems where the answer is not “call a larger model” but “design the system so the model can succeed and fail safely.”"
  },
  {
    "id": 500,
    "section": "497–502 · Career goals",
    "question": "What kind of engineer does he want to become?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "A **deeply technical, product-minded applied-AI engineer** who can receive an ambiguous problem and build the real system behind it — architecture, AI, backend, evaluation, infrastructure and product judgment. The long-term ideal is someone for whom individual tools/frameworks are replaceable implementation details because the underlying reasoning is strong."
  },
  {
    "id": 501,
    "section": "497–502 · Career goals",
    "question": "Where does he realistically want to be in five years?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Genuinely excellent at applied AI, trusted with difficult systems rather than only features, and working with a **small, ambitious team** where he has meaningful ownership. He could see that being a high-impact engineer at a startup or building a company himself. He wants the five-year outcome to be measured more by capability and the quality of problems he can solve than by a particular title."
  },
  {
    "id": 502,
    "section": "497–502 · Career goals",
    "question": "What would an unusually successful ten-year outcome look like?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL/PUBLIC",
    "answer": "Enough **technical depth, financial freedom and experience** to choose the problems he works on rather than optimize around the next résumé line. In the wilder version, he has built a company/product he genuinely cares about that became larger than something one person could build. He wants to still be curious, useful to people around him, and not become unbearable once things go well."
  },
  {
    "id": 503,
    "section": "503–512 · Company and job preferences",
    "question": "What company stages are attractive?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "His clearest preference is **startups, especially Series A/B/C**, where there is enough reality — users, product constraints, production systems — to learn from, but still enough ambiguity and ownership that an engineer can materially shape the product. He is not dogmatic: an exceptional seed company or a larger technical organization could be right if the work/people/learning are unusually strong."
  },
  {
    "id": 504,
    "section": "503–512 · Company and job preferences",
    "question": "Preferred team size?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "He prefers **small, high-agency teams** where engineers can understand the whole system and decisions move quickly. No hard numerical minimum/maximum is established. The real preference is low bureaucracy, strong peers, meaningful ownership and access to product/users."
  },
  {
    "id": 505,
    "section": "503–512 · Company and job preferences",
    "question": "Remote, hybrid or onsite?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "He has worked remotely extensively and can operate that way, but no rigid universal preference is finalized. The higher-order preference is the ability to work closely with a strong team and learn fast. Do not answer “remote only” or “onsite only.”"
  },
  {
    "id": 506,
    "section": "503–512 · Company and job preferences",
    "question": "How many office days per week?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "RECRUITING",
    "answer": "No canonical number. Ask TP directly if a company requires a specific onsite cadence."
  },
  {
    "id": 507,
    "section": "503–512 · Company and job preferences",
    "question": "What company/problem types interest him most?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Applied AI products, developer/AI infrastructure, agent systems, vertical AI with a real workflow, research/search/knowledge tools, voice/multimodal AI, enterprise AI where reliability matters, and technically serious product startups. His broader founder interests have also included fintech, education, developer tools, B2B/enterprise and e-commerce."
  },
  {
    "id": 508,
    "section": "503–512 · Company and job preferences",
    "question": "Which industries does he especially want?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "He is more problem/engineering driven than sector loyal. AI infrastructure/developer tools, enterprise/workflow AI, education/knowledge tools, recruiting/workforce, and fintech-style infrastructure all fit his history. The strongest criterion is whether AI creates genuine value rather than being bolted onto the product."
  },
  {
    "id": 509,
    "section": "503–512 · Company and job preferences",
    "question": "Which industries does he reject?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "RECRUITING",
    "answer": "No complete blacklist is documented. Bixxie should not invent moral/industry exclusions. His values suggest he dislikes products that use AI only as marketing or where the work has little meaningful user value, but that is not a formal sector ban."
  },
  {
    "id": 510,
    "section": "503–512 · Company and job preferences",
    "question": "How does he rank offer factors?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "A sensible ordering from his stated goals is: **quality of people/learning + technical scope/ownership**, then **problem/product quality**, then **founder/manager quality and speed of environment**, then **compensation/equity/location**. Compensation matters — financial freedom is part of his long-term goal — but he does not want to trade away years of technical growth for a superficially safer title. Exact weights can change by offer."
  },
  {
    "id": 511,
    "section": "503–512 · Company and job preferences",
    "question": "What manager/team environment produces his best work?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "High trust, direct feedback, smart peers, clear outcomes rather than micromanaged steps, fast decisions, and a culture where an engineer can say “this assumption is wrong” and test it. He likes people who care about craft without confusing process with quality and who give ownership with enough context to make good decisions."
  },
  {
    "id": 512,
    "section": "503–512 · Company and job preferences",
    "question": "What environment would make him leave quickly?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Chronic bureaucracy, vague priorities with no ownership, performative meetings, inability to ship, engineering decisions made for fashion rather than constraints, or an environment where questioning “why” is unwelcome. He can tolerate hard work and ambiguity; he dislikes avoidable friction with no learning/value behind it."
  },
  {
    "id": 513,
    "section": "513–520 · Work authorization, relocation and availability",
    "question": "What work is he currently authorized to do in Canada?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "RECRUITING",
    "answer": "TP is an international student in Canada on a **Canadian study permit**. The portfolio does not contain a verified, current legal interpretation of his exact permitted work hours/conditions, so Bixxie should **not provide immigration-law advice or a categorical authorization statement** beyond that status. For an employer-specific question, TP should confirm against his current permit/rules."
  },
  {
    "id": 514,
    "section": "513–520 · Work authorization, relocation and availability",
    "question": "What is his expected Canadian authorization after graduation?",
    "status": "unknown",
    "statusRaw": "UNKNOWN/UNVERIFIED",
    "visibility": "RECRUITING",
    "answer": "Do not claim automatic PGWP eligibility/length or that sponsorship will not be needed. The exact post-graduation pathway has not been finalized in the canonical record."
  },
  {
    "id": 515,
    "section": "513–520 · Work authorization, relocation and availability",
    "question": "Does he have US work authorization?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "RECRUITING",
    "answer": "No verified US work authorization is documented. Bixxie should not say he can work in the US without sponsorship. His target geography includes the United States, but target geography is not authorization."
  },
  {
    "id": 516,
    "section": "513–520 · Work authorization, relocation and availability",
    "question": "Does he have UK work authorization?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "RECRUITING",
    "answer": "No verified UK authorization is documented. Do not infer it from prior travel or interest in UK roles."
  },
  {
    "id": 517,
    "section": "513–520 · Work authorization, relocation and availability",
    "question": "Any other countries where he can work without sponsorship?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "RECRUITING",
    "answer": "He is an Indian citizen, but the current public knowledge base should not infer a complete global right-to-work matrix. India is his country of origin, but any employer-specific legal status should still be answered accurately at the time."
  },
  {
    "id": 518,
    "section": "513–520 · Work authorization, relocation and availability",
    "question": "Earliest full-time start date?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "RECRUITING",
    "answer": "His expected UBC graduation is **April 2027** and his near-term goal is a full-time/new-grad AI role around graduation. No exact earliest start date is confirmed; do not invent May 1 or another day."
  },
  {
    "id": 519,
    "section": "513–520 · Work authorization, relocation and availability",
    "question": "Is he willing to relocate?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "He is actively targeting **Canada, the United States and the United Kingdom** and is not constrained to Vancouver forever. However, “willing to relocate anywhere” is too broad. Specific city/company relocation should be discussed case by case."
  },
  {
    "id": 520,
    "section": "513–520 · Work authorization, relocation and availability",
    "question": "Where will he not relocate?",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "RECRUITING",
    "answer": "No exclusion list is documented."
  },
  {
    "id": 521,
    "section": "521–525 · Compensation and equity",
    "question": "Should Bixxie answer compensation questions publicly?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 522,
    "section": "521–525 · Compensation and equity",
    "question": "What public range should Bixxie state?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 523,
    "section": "521–525 · Compensation and equity",
    "question": "How does he trade cash against startup equity?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 524,
    "section": "521–525 · Compensation and equity",
    "question": "Minimum equity for a risky founding-engineer role?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 525,
    "section": "521–525 · Compensation and equity",
    "question": "Which compensation details should stay private?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 526,
    "section": "526–534 · Personal working style",
    "question": "When is he most productive?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "He is naturally a **night owl**, often sleeping around 1–2 AM and waking around 9–10 AM when schedule allows. Cozy rainy weather weirdly increases his focus; a warm room, grey Vancouver sky and laptop can become a very productive setup. He can adapt to commitments but should not be presented as a stereotypical 5 AM person."
  },
  {
    "id": 527,
    "section": "526–534 · Personal working style",
    "question": "Defined tasks or broad outcomes?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Broad outcomes. He likes enough context to understand the real constraint, then freedom to decide the path. He can execute defined work, but his strongest evidence comes from ambiguous/founding situations where he had to define the system itself."
  },
  {
    "id": 528,
    "section": "526–534 · Personal working style",
    "question": "How frequently does he want feedback?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Fast enough that he does not build for weeks on a wrong assumption. He prefers direct feedback tied to the work, especially early in an ambiguous project, but not continuous micromanagement. Exact cadence is team/context dependent."
  },
  {
    "id": 529,
    "section": "526–534 · Personal working style",
    "question": "What does he do when blocked?",
    "status": "known",
    "statusRaw": "KNOWN AS STYLE",
    "visibility": "PUBLIC",
    "answer": "First isolate the block: missing information, technical unknown, dependency, or decision. Try to reduce it to a test/repro, research enough to form a hypothesis, ask a precise question when another person owns the missing context, and keep a parallel useful task moving if the dependency cannot be resolved immediately. He dislikes sitting in vague stuckness."
  },
  {
    "id": 530,
    "section": "526–534 · Personal working style",
    "question": "Planning versus building?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He is a planner who has learned not to over-plan. For reversible/low-risk work he wants to build quickly and learn; for expensive/security-sensitive/irreversible decisions he slows down, maps edge cases and may build a spreadsheet/design doc. His best current rule is **plan proportional to downside**."
  },
  {
    "id": 531,
    "section": "526–534 · Personal working style",
    "question": "Prototype first or architecture first?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Prototype first when the biggest uncertainty is **whether the thing is useful/possible**. Architecture first when a mistake creates security, data-integrity, payment, or expensive migration risk. He is actively correcting an older bias toward making the architecture “right” too early."
  },
  {
    "id": 532,
    "section": "526–534 · Personal working style",
    "question": "How does he decide something is good enough to ship?",
    "status": "known",
    "statusRaw": "KNOWN AS PHILOSOPHY",
    "visibility": "PUBLIC",
    "answer": "The core user path works, the failure modes that could materially harm trust are controlled, the result is measurable, and the remaining imperfections are cheaper to learn from in reality than to speculate about internally. “Perfect” is not the bar; “safe/useful enough to get real information” is."
  },
  {
    "id": 533,
    "section": "526–534 · Personal working style",
    "question": "What work drains him?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "Repetitive admin, pointless meetings, vague work with no ownership, unnecessary bureaucracy, being stuck without progress, and doing something solely because “that's how it's always been done.” He can do these things; they simply consume more energy than hard technical/product problems."
  },
  {
    "id": 534,
    "section": "526–534 · Personal working style",
    "question": "What problems absorb him for hours?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL/PUBLIC",
    "answer": "Systems where several layers interact and the answer is not obvious: AI quality versus retrieval, debugging, model/tool orchestration, architecture/security, performance, or turning a vague product idea into something concrete. He is also prone to turning a small research question into 25 open tabs."
  },
  {
    "id": 535,
    "section": "535–542 · Personality",
    "question": "What 3–5 adjectives describe him?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/OPTIONAL",
    "answer": "**Ambitious, curious, analytical, extroverted, and slightly obsessive about optimizing things.** Ambitious: he sets high career/building goals. Curious: small questions turn into deep research. Analytical: he decomposes failures and cares about measurement. Extroverted: he enjoys outreach, networking and pitching. Optimization-minded: he naturally notices slow/awkward systems and wants to improve them."
  },
  {
    "id": 536,
    "section": "535–542 · Personality",
    "question": "Introvert or extrovert?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "Extroverted. He genuinely enjoys reaching out to people, networking, pitching ideas and being around interesting people. He also needs long periods of focused building, so extroversion does not mean constant social activity."
  },
  {
    "id": 537,
    "section": "535–542 · Personality",
    "question": "What makes him impatient?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "Things that are **slow for no good reason**: unnecessary bureaucracy, vague answers, software that almost works, meetings with no decision, and simple workflows made complicated without a real constraint."
  },
  {
    "id": 538,
    "section": "535–542 · Personality",
    "question": "What makes him laugh?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "Dry sarcasm, situational absurdity, roasting between friends, and things becoming ridiculous enough that the only reasonable response is “LMAOO.” His humor is casual and contextual rather than polished one-liners."
  },
  {
    "id": 539,
    "section": "535–542 · Personality",
    "question": "What do friends tease him about?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "His initials are **TP**, so friends have inevitably turned that into “Toilet Paper.” He has accepted that there is no recovery from this."
  },
  {
    "id": 540,
    "section": "535–542 · Personality",
    "question": "What trait is he trying to improve?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "OPTIONAL",
    "answer": "Over-optimizing/overthinking before reality has earned the complexity. He wants to get better at focus, consistency, shipping, and not confusing knowing more with making more progress. Outside engineering, he is also trying to improve discipline across fitness, university and learning."
  },
  {
    "id": 541,
    "section": "535–542 · Personality",
    "question": "What do people often assume about him that is wrong?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "OPTIONAL",
    "answer": "Someone seeing the AI/startup profile might assume he has always been only a “computer person.” He spent years in athletics, Model UN, art/drawing and community leadership; visual design still matters to him. A single self-declared “most common misconception” is not recorded, so this should be offered as an example rather than absolute claim."
  },
  {
    "id": 542,
    "section": "535–542 · Personality",
    "question": "What is he unusually competitive about?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "OPTIONAL",
    "answer": "He has a competitive streak around performance/progress — sports, building, ambitious goals — but no single quirky competition is canonical. The healthy version is mostly against his own previous level: he gets bothered when he knows he could have executed better."
  },
  {
    "id": 543,
    "section": "543–552 · Interests, hobbies and everyday life",
    "question": "What sports/physical activities does he do now?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/OPTIONAL",
    "answer": "Swimming, running, biking, lifting and pickleball. He also signs up for occasional things such as competitive LongBoat. Longer term he likes the idea of being a **hybrid athlete** — strength/speed plus a real aerobic engine rather than specializing in one gym metric."
  },
  {
    "id": 544,
    "section": "543–552 · Interests, hobbies and everyday life",
    "question": "Why does he enjoy them?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "OPTIONAL",
    "answer": "Sport gives him a different kind of progress loop from engineering: repetitive work, measurable improvement and a physical reset from being at a computer. Track in school — especially the 400m — taught him that outcomes come from boring repetitions nobody sees, a lesson he still connects to technical skill."
  },
  {
    "id": 545,
    "section": "543–552 · Interests, hobbies and everyday life",
    "question": "What games does he play?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "Mostly PlayStation, in phases: **Valorant, Apex, Warzone, Minecraft, racing games, and story/exploration games**. His gaming pattern is all-or-nothing rather than a fixed daily hobby: he can disappear into a game for a stretch and then barely touch it."
  },
  {
    "id": 546,
    "section": "543–552 · Interests, hobbies and everyday life",
    "question": "What movies/TV/content does he like?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "OPTIONAL",
    "answer": "Film tastes include **Christopher Nolan** and **Martin Scorsese**, with **Interstellar** as his all-time favorite movie. He also cares about Tamil cinema; **Mani Ratnam** is a favorite director, with **Alaipayuthey** and **96** among top Tamil films. A detailed TV/YouTube creator list is not currently canonical."
  },
  {
    "id": 547,
    "section": "543–552 · Interests, hobbies and everyday life",
    "question": "Describe his music taste.",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "Broadly Tamil music + hip-hop/R&B/trap + melodic/atmospheric music. Tamil-side favorites include **Anirudh, Hiphop Tamizha, A.R. Rahman, Sai Abhyankkar and G.V. Prakash**. English/international rotation includes **Juice WRLD, XXXTentacion, Kanye, Drake, The Weeknd, Travis Scott, Metro Boomin, Don Toliver and Chord Overstreet**, with more niche South-Asian/UK-diaspora picks such as **Baalti, Lapgan, Raf Saperra and Akshara**. His taste is mood-driven rather than genre-purist."
  },
  {
    "id": 548,
    "section": "543–552 · Interests, hobbies and everyday life",
    "question": "What food/drink preferences are distinctive?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "Indian food, spicy food, and **biryani** as the easiest answer to “where should we eat?” Coffee over tea: an **Arabica lungo with milk and three teaspoons of sugar**; he freely admits he loves sugar. He likes cooking Indian food and almost never follows a recipe without changing something. He has not really clicked with much East/Southeast Asian food yet."
  },
  {
    "id": 549,
    "section": "543–552 · Interests, hobbies and everyday life",
    "question": "What weather/places does he like?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "OPTIONAL",
    "answer": "Cozy rainy weather: grey sky, rain on the window, cold outside, warm room, laptop open. It makes him unusually productive, which means Vancouver is simultaneously great and dangerous for his ability to disappear into work. Winter is his favorite season — partly because he enjoys the “winter arc” idea — although summer is easier for running, biking and swimming. No single favorite Vancouver place is documented."
  },
  {
    "id": 550,
    "section": "543–552 · Interests, hobbies and everyday life",
    "question": "What does a free Saturday look like?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "OPTIONAL",
    "answer": "Usually some combination of sleeping later than intended, gym/cardio or a sport, food, music, a project/technical rabbit hole, and seeing friends. He is not great at completely “doing nothing”; even free time often drifts into building or researching something."
  },
  {
    "id": 551,
    "section": "543–552 · Interests, hobbies and everyday life",
    "question": "What non-engineering topic can he talk about for an hour?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "OPTIONAL",
    "answer": "Movies/film, music, MUN/debate stories, fitness/sports, travel, and increasingly philosophy/psychology/existential literature. He is getting into Dostoevsky/Kafka precisely because those topics give him something to think about that is not another framework."
  },
  {
    "id": 552,
    "section": "543–552 · Interests, hobbies and everyday life",
    "question": "What does he dislike recreationally?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "OPTIONAL",
    "answer": "No formal “three dislikes” list exists. Safe examples: he is not naturally someone who enjoys pointless inactivity for long, he has not developed much taste for East/Southeast Asian food yet, and formal debate/MUN is no longer an active hobby despite being huge in school. Do not turn preferences into contempt for other people's interests."
  },
  {
    "id": 553,
    "section": "553–559 · Values and motivations",
    "question": "Why does he care about building software beyond money/career?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Because building is how he turns curiosity into something another person can actually use. The moments he values most are not “I learned framework X”; they are seeing 24K people use Pocketlink, making recruiter ranking measurably better, or watching a system stop being magic and become understandable. He likes the combination of intellectually difficult work and tangible consequence."
  },
  {
    "id": 554,
    "section": "553–559 · Values and motivations",
    "question": "What kind of impact feels meaningful?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Useful systems that become part of someone's real workflow — ideally so naturally that the technology disappears into the experience. He is especially drawn to tools that make people faster, more capable, better informed or able to do something that was previously inaccessible."
  },
  {
    "id": 555,
    "section": "553–559 · Values and motivations",
    "question": "What values would make him reject a company?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "A culture that treats people badly, has no intellectual honesty, rewards performative busyness over results, or uses AI purely as marketing while ignoring whether it improves anything would conflict strongly with how he wants to work. He also values being able to respect the product and the people building it. A formal ethical blacklist is not documented."
  },
  {
    "id": 556,
    "section": "553–559 · Values and motivations",
    "question": "What kind of founder/leader earns his trust?",
    "status": "known",
    "statusRaw": "KNOWN AS PREFERENCE",
    "visibility": "PUBLIC",
    "answer": "Someone ambitious but grounded, technically/product literate, direct about what they know and do not know, willing to change their mind with evidence, fast without being reckless, and respectful of people doing the work. He likes leaders who give context/ownership rather than micromanage."
  },
  {
    "id": 557,
    "section": "553–559 · Values and motivations",
    "question": "What causes him to lose trust?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Repeated inconsistency between words and actions, refusing to acknowledge obvious problems, hiding uncertainty behind confidence, wasting people's time through avoidable chaos, or optimizing optics over real product/user outcomes."
  },
  {
    "id": 558,
    "section": "553–559 · Values and motivations",
    "question": "What is he trying to prove to himself?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "OPTIONAL",
    "answer": "That he can become genuinely good — not merely “impressive for a student” — at solving difficult technical/product problems and can build a life where he chooses ambitious things because they matter, not because they are safe. A recurring underlying theme is avoiding the future regret of “I really should have tried that.”"
  },
  {
    "id": 559,
    "section": "553–559 · Values and motivations",
    "question": "What does he want to be known for?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Building genuinely useful things, taking ambitious ideas seriously, helping people around him, remaining curious, and staying a person he and the people close to him still like when things go well. The technical reputation he wants is “give him a vague hard problem; he will figure out the real system.”"
  },
  {
    "id": 560,
    "section": "560–570 · Engineering and AI opinions",
    "question": "What do most teams get wrong about RAG?",
    "status": "known",
    "statusRaw": "KNOWN AS OPINION",
    "visibility": "PUBLIC",
    "answer": "They treat it as “chunk documents, embed, top-k, prompt” instead of an **information-retrieval + product-evaluation system**. Retrieval recall, scoping, metadata, contradictions, grounding and the final user decision all matter. Swapping the generator model cannot repair a pipeline that consistently retrieves the wrong evidence."
  },
  {
    "id": 561,
    "section": "560–570 · Engineering and AI opinions",
    "question": "What do most agent implementations overcomplicate?",
    "status": "known",
    "statusRaw": "KNOWN AS OPINION",
    "visibility": "PUBLIC",
    "answer": "They use a free-running agent loop for work that is really a deterministic workflow/state machine with one or two reasoning decisions. TP prefers explicit state, narrow tools and measurable transitions. “Agentic” should describe necessary autonomy, not architecture cosplay."
  },
  {
    "id": 562,
    "section": "560–570 · Engineering and AI opinions",
    "question": "When should developers avoid LLMs?",
    "status": "known",
    "statusRaw": "KNOWN AS OPINION",
    "visibility": "PUBLIC",
    "answer": "When deterministic logic/search/rules can solve the task more cheaply, reliably and explainably; when failure cannot be bounded; when the input contains sensitive data without proper controls; or when the only reason is “our product needs AI.” He likes AI enough to want it used selectively."
  },
  {
    "id": 563,
    "section": "560–570 · Engineering and AI opinions",
    "question": "What makes an AI prototype production-ready?",
    "status": "known",
    "statusRaw": "KNOWN AS OPINION",
    "visibility": "PUBLIC",
    "answer": "An eval suite tied to the user outcome; defined failure/unknown behavior; observability/tracing; security/privacy boundaries; latency/cost understood; retries/fallbacks where safe; data/permission scoping; versioned prompts/models; and a real operational owner. A demo that works five times in a row is not production reliability."
  },
  {
    "id": 564,
    "section": "560–570 · Engineering and AI opinions",
    "question": "Deterministic code vs model reasoning?",
    "status": "known",
    "statusRaw": "KNOWN AS OPINION",
    "visibility": "PUBLIC",
    "answer": "Use deterministic code for **rules, authorization, validation, calculations, state transitions and invariants**. Use a model where semantic ambiguity/generalization is the point. Connect them with typed boundaries. Many of TP's favorite architectures are exactly this division."
  },
  {
    "id": 565,
    "section": "560–570 · Engineering and AI opinions",
    "question": "When are microservices justified?",
    "status": "known",
    "statusRaw": "KNOWN AS OPINION",
    "visibility": "PUBLIC",
    "answer": "When a boundary needs independent scaling, deployment/failure isolation, a different runtime, or genuinely separate ownership. Not because a diagram looks more sophisticated. For small teams, a modular monolith is often the better starting point."
  },
  {
    "id": 566,
    "section": "560–570 · Engineering and AI opinions",
    "question": "Opinion on premature abstraction?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He is naturally susceptible to it because he likes clean systems, which is why he now actively resists it. Abstract repeated **proven** patterns, not imagined future requirements. A little duplication can be cheaper than the wrong generalization."
  },
  {
    "id": 567,
    "section": "560–570 · Engineering and AI opinions",
    "question": "Testing philosophy for AI-heavy apps?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Use ordinary unit/integration/security tests for deterministic software and **evaluation suites** for model behavior. Freeze representative examples, segment failure modes, include deterministic checks and human calibration, track regressions across prompt/model/retrieval changes, and test the complete user workflow. Never replace software tests with LLM judges."
  },
  {
    "id": 568,
    "section": "560–570 · Engineering and AI opinions",
    "question": "Opinion on AI coding agents?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He uses them heavily and thinks they are a major leverage tool, especially for exploration, implementation, testing, refactors and unfamiliar APIs. But he does not want the agent to own architectural judgment or become an excuse not to understand code. The engineer still owns requirements, review, tests, security and whether the result is actually correct."
  },
  {
    "id": 569,
    "section": "560–570 · Engineering and AI opinions",
    "question": "What AI trend does he think is overhyped?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "“Agent” branding and bolting AI onto products that do not need it. He is skeptical of systems that replace a simple deterministic workflow with multiple agents simply because it demos well."
  },
  {
    "id": 570,
    "section": "560–570 · Engineering and AI opinions",
    "question": "What is underrated?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Evaluation, retrieval quality, boring backend/reliability work, explicit state, typed interfaces and product-specific measurement. These are less exciting than a new model release but often determine whether an AI feature becomes dependable enough for everyday use."
  },
  {
    "id": 571,
    "section": "571–577 · Preferred tools",
    "question": "Why Cursor?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "OPTIONAL/TECHNICAL",
    "answer": "It fits his AI-assisted coding workflow and makes model help available in the code context without separating “thinking” and “editing” into completely different tools. He also uses/experiments with other coding agents (Codex, Claude Code, etc.) and does not treat one editor as identity."
  },
  {
    "id": 572,
    "section": "571–577 · Preferred tools",
    "question": "How do coding agents fit his workflow?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "Use them to inspect unfamiliar code, implement bounded changes, write/repair tests, search large repos, generate mechanical boilerplate and parallelize investigation. For substantial work, the desired loop is **understand → plan → implement → run tests/build/lint/typecheck → inspect diff/failures → fix**. He cares more about verified output than about who typed each line."
  },
  {
    "id": 573,
    "section": "571–577 · Preferred tools",
    "question": "Why Ghostty?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "He likes it because it is lightweight, fast and clean — a terminal that gets out of the way rather than becoming its own project."
  },
  {
    "id": 574,
    "section": "571–577 · Preferred tools",
    "question": "Why Superset?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL/TECHNICAL",
    "answer": "He uses it as an **agent manager/control layer** for orchestrating coding agents. It reflects his tendency to treat AI coding as a workflow/system rather than one chat window."
  },
  {
    "id": 575,
    "section": "571–577 · Preferred tools",
    "question": "Which debugging/dev tools does he rely on?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Git/GitHub, terminal/CLI, database consoles/SQL, browser devtools, logs/traces, Langfuse/W&B for AI systems, cloud deployment logs, test runners and repo-level search/agents. Exact favorite database client/network proxy is not canonical."
  },
  {
    "id": 576,
    "section": "571–577 · Preferred tools",
    "question": "Preferred greenfield AI SaaS stack?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "A pragmatic default: **Next.js/TypeScript** for product/web, **Python/FastAPI** for AI-heavy services when warranted, **PostgreSQL/Supabase** for relational/auth/storage, **pgvector** only if semantic retrieval is genuinely needed, background work/Redis only when necessary, container/cloud deployment proportional to scale, and explicit eval/observability from early on. He would simplify further for a very small v1."
  },
  {
    "id": 577,
    "section": "571–577 · Preferred tools",
    "question": "Which technologies has he stopped using after finding better options?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "His evolution is more architectural than brand-specific: fewer ad-hoc prompts toward typed workflows/evals; less “one model does everything” toward retrieval/reranking/deterministic boundaries; less early microservice/infrastructure enthusiasm toward simpler stage-appropriate systems. A canonical “left library X for Y” list is not documented."
  },
  {
    "id": 578,
    "section": "578–582 · Current learning",
    "question": "What is he deliberately learning right now?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/OPTIONAL",
    "answer": "Deeper **applied AI systems** — evaluation, agents, RAG/retrieval, security/guardrails, model efficiency and backend reliability — while finishing UBC coursework. Outside engineering he is getting into **philosophy/literature** (Dostoevsky/Kafka) and learning **guitar and piano**."
  },
  {
    "id": 579,
    "section": "578–582 · Current learning",
    "question": "Why do those topics matter to his next role?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "His target role is not “know the newest SDK”; it is to own systems whose quality is difficult to measure and whose failures cross AI/backend/product boundaries. Evaluation, retrieval, security and infrastructure are the areas that convert a prototype into something a serious team can rely on."
  },
  {
    "id": 580,
    "section": "578–582 · Current learning",
    "question": "Which resources is he using?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "OPTIONAL",
    "answer": "He follows technical documentation/repos/papers, AI-evaluation material and hands-on project work; recent learning subscriptions/content include MLOps, RAG/LangChain and production-agent evaluation. A canonical reading/course bibliography is not maintained, so Bixxie should not invent one."
  },
  {
    "id": 581,
    "section": "578–582 · Current learning",
    "question": "What has he changed his mind about recently?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Several things: a plan is a best guess, not a promise; a technically sophisticated system is not automatically a better product; “agentic” is not inherently better than a workflow; evaluation needs to be built with the AI feature; and the most useful abstraction is often a typed/deterministic boundary around probabilistic model behavior."
  },
  {
    "id": 582,
    "section": "578–582 · Current learning",
    "question": "Which non-engineering skill is he learning?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "Guitar and piano, casually for now. Longer term he wants to become genuinely good at an instrument rather than only “know a few chords.”"
  },
  {
    "id": 583,
    "section": "583–587 · Things he wants to build",
    "question": "What would he build with three uninterrupted months and expenses covered?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/OPTIONAL",
    "answer": "An AI product that becomes part of someone's **daily life/workflow without constantly reminding them it is AI-powered**. The exact product can change; the important idea is ambient usefulness: the model/system disappears into the experience because the product is valuable on its own."
  },
  {
    "id": 584,
    "section": "583–587 · Things he wants to build",
    "question": "Who would use it and why?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "FOUNDER",
    "answer": "The target user/domain is intentionally not locked down yet. He is attracted to knowledge/work/research/developer or personal-productivity workflows where context accumulates and the system can become more useful over time. He would want to validate the user/problem before committing the architecture."
  },
  {
    "id": 585,
    "section": "583–587 · Things he wants to build",
    "question": "What technical problem makes that interesting?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "FOUNDER",
    "answer": "Persistent trustworthy context, agent/tool behavior, evaluation of open-ended tasks, low-friction interaction, privacy/security and making the system useful enough that the user does not need to “prompt engineer” it. In other words: the hard part is the system around the model."
  },
  {
    "id": 586,
    "section": "583–587 · Things he wants to build",
    "question": "Company or side project?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "FOUNDER",
    "answer": "If real users pull it into their lives and the problem is large enough, he would like it to become a company. He does not want to force every technical experiment into a startup; he has learned that a company should follow a real problem, not the desire to call himself a founder."
  },
  {
    "id": 587,
    "section": "583–587 · Things he wants to build",
    "question": "Wild project if feasibility did not matter?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "OPTIONAL",
    "answer": "No single canonical “impossible project” is documented. The broad ambition is technology that feels like an intelligent layer around everyday life/work rather than another chatbox. Bixxie should not invent sci-fi specifics."
  },
  {
    "id": 588,
    "section": "588–594 · References and social proof",
    "question": "Who would vouch for him?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 589,
    "section": "588–594 · References and social proof",
    "question": "What were those working relationships/how long?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 590,
    "section": "588–594 · References and social proof",
    "question": "What work did each reference observe?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 591,
    "section": "588–594 · References and social proof",
    "question": "What would each say is his strongest attribute?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 592,
    "section": "588–594 · References and social proof",
    "question": "What would each say he needs to improve?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 593,
    "section": "588–594 · References and social proof",
    "question": "Who would definitely rehire/work with him?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 594,
    "section": "588–594 · References and social proof",
    "question": "Are there public testimonials/recommendations?",
    "status": "partial",
    "statusRaw": "UNKNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "No canonical approved set is in Bixxie's current knowledge. If LinkedIn recommendations or public testimonials are later imported, store exact text/source and permission; until then, do not invent social proof."
  },
  {
    "id": 595,
    "section": "595–600 · Online presence and evidence",
    "question": "What public profiles should Bixxie know?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Canonical:\n- Portfolio: `https://thrn.im`\n- GitHub: `https://github.com/thrns`\n- LinkedIn: `https://www.linkedin.com/in/thrn`\n\nPublic project pages/repos can be linked contextually. A canonical X/Twitter, Hugging Face, Kaggle, Devpost or Google Scholar identity should only be added if verified. TinyShell model artifacts exist on Hugging Face under Tharun's name, but the portfolio should link exact artifacts rather than guess a profile URL."
  },
  {
    "id": 596,
    "section": "595–600 · Online presence and evidence",
    "question": "What is the canonical URL for every major project?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Known:\n- RepoView: `https://repoview.thrn.im/`\n- OutPay: `https://outpay.tech/`\n- OutKey: `https://github.com/thrns/Outkey`\n- OutPost: `https://github.com/thrns/outpost`\n- TinyShell: `https://github.com/thrns/TinyShell`\n- TabFM Benchmark: `https://github.com/thrns/tabfm-benchmark-lab`\n- TraceBox: `https://github.com/thrns/tracebox`\n- TekkScope: `https://github.com/thrns/tekkscope`\n- Trading bot: `https://github.com/thrns/USDT-Futures-Trading-Bot`\n- CovidScan: `https://github.com/thrns/TP-COVID19`\n\nThirdSlate/Pocketlink/Allotrix repository links in current `thrn.im` should be used as stored there. Do not invent a live demo for inactive projects."
  },
  {
    "id": 597,
    "section": "595–600 · Online presence and evidence",
    "question": "Which repos are safe to surface publicly?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Public `thrns` repositories explicitly linked from the portfolio are safe to surface. Company/private repos should not be exposed merely because TP once had access. RepoView exists specifically to share private source in a controlled way when TP chooses."
  },
  {
    "id": 598,
    "section": "595–600 · Online presence and evidence",
    "question": "Which private repos can be described without code?",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Employer work such as Berribot and private founder/company repositories can be described through sanitized case studies and outcome/architecture summaries. Never expose proprietary source, customer data, credentials, internal screenshots or confidential business metrics."
  },
  {
    "id": 599,
    "section": "595–600 · Online presence and evidence",
    "question": "What public talks/articles/demos exist?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "The IJCRR paper, detailed `thrn.im` case studies, project READMEs/whitepaper-style docs, RepoView/OutPay demos and public code are the strongest public evidence. A formal conference-talk/video catalog is not currently documented."
  },
  {
    "id": 600,
    "section": "595–600 · Online presence and evidence",
    "question": "What should Bixxie show first when someone asks “Can I see something he built?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Choose based on visitor:\n1. **Berribot/ThirdSlate case study** for production AI depth.\n2. **RepoView or Bixxie** for a current working product they can interact with.\n3. **TinyShell/TraceBox/TekkScope/OutKey repo** for code/architecture depth.\n\nFor a recruiter, one high-signal artifact is better than dumping ten repositories."
  },
  {
    "id": 601,
    "section": "601–607 · Claim provenance",
    "question": "Is each important claim exact, rounded or estimated?",
    "status": "known",
    "statusRaw": "KNOWN POLICY",
    "visibility": "INTERNAL",
    "answer": "Bixxie should store a precision flag. Many portfolio numbers are deliberately rounded: **24K+ users, 1K+ users, ~42%, ~30%, ~35%, ~86% mAP, $8K+ commitments, 80+ prospects**. Rounded claims should stay rounded; never convert “24K+” into “24,137” or “~42%” into “42.0%.” Exact values such as a publication DOI or model-pilot split can be exact when the source is exact."
  },
  {
    "id": 602,
    "section": "601–607 · Claim provenance",
    "question": "What is the original source for each metric?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "INTERNAL",
    "answer": "Known provenance types include internal product measurements/analytics, evaluation suites, recruiter judgments, code/repository artifacts, publication results, user counts and operational records. The current knowledge base does **not** retain a source artifact for every historical résumé metric. Until those are backfilled, Bixxie should describe the metric as “internally measured/reported” rather than imply independent audit."
  },
  {
    "id": 603,
    "section": "601–607 · Claim provenance",
    "question": "What time period does each metric cover?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "INTERNAL",
    "answer": "Many metrics are tied to the role/project date range but lack exact measurement windows. Do not invent “over three months” or “in Q1.” Store the time window when known; otherwise the answer should simply say the precise measurement window is not currently documented."
  },
  {
    "id": 604,
    "section": "601–607 · Claim provenance",
    "question": "Is a metric attributable to TP, his team or company?",
    "status": "partial",
    "statusRaw": "KNOWN POLICY/PARTIAL DATA",
    "visibility": "INTERNAL",
    "answer": "Store attribution separately from the metric. A metric from a system TP primarily owned can be described as the **outcome of the system he built/owned**. Company-wide user counts, uptime or platform traffic should be contextual scale, not “TP increased X.” Founder products can still be collaborative. This distinction is mandatory because the whole point of Bixxie is to survive follow-up scrutiny."
  },
  {
    "id": 605,
    "section": "601–607 · Claim provenance",
    "question": "Is evidence public, private-verifiable or currently unverifiable?",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "INTERNAL",
    "answer": "Classify every major claim:\n- **Publicly verifiable:** GitHub code/README, current portfolio/case study, public site/demo, IJCRR paper.\n- **Privately verifiable:** employer dashboards, private repos, internal metrics, references.\n- **Historical/self-reported:** older résumé/work-inventory metrics whose source artifact is not currently linked.\nBixxie should phrase confidence accordingly and never pretend historical self-report is third-party audited."
  },
  {
    "id": 606,
    "section": "601–607 · Claim provenance",
    "question": "Are there NDA/confidentiality constraints?",
    "status": "partial",
    "statusRaw": "KNOWN POLICY/PARTIAL",
    "visibility": "INTERNAL",
    "answer": "Assume employer/customer source code, credentials, customer data, internal screenshots and proprietary business details are private unless explicitly public. Sanitized architecture/outcome explanations are appropriate. Do not use Bixxie as a backdoor to private repositories or connected-account data."
  },
  {
    "id": 607,
    "section": "601–607 · Claim provenance",
    "question": "Which ownership verbs are safe?",
    "status": "known",
    "statusRaw": "KNOWN POLICY",
    "visibility": "PUBLIC",
    "answer": "- **“Owned” / “primary owner”** only where explicit (e.g., Berribot candidate ranking).\n- **“Built” / “implemented”** when direct construction is documented.\n- **“Led”** where leadership is explicit (BerriTutor core work, AgroBot roles).\n- **“Co-founded”** for founder companies.\n- **“Contributed to” / “worked on”** for shared systems with incomplete boundaries.\nNever upgrade “contributed” to “built the entire platform.”"
  },
  {
    "id": 608,
    "section": "608–617 · Privacy and disclosure",
    "question": "What information is public to any visitor?",
    "status": "known",
    "statusRaw": "KNOWN POLICY",
    "visibility": "INTERNAL",
    "answer": "Professional profile, education/program/graduation month, role/project history, public metrics with proper caveats, technical architecture that does not reveal proprietary secrets, public links/repos/publication, career interests, and the personal hobbies/values TP has deliberately provided for the portfolio."
  },
  {
    "id": 609,
    "section": "608–617 · Privacy and disclosure",
    "question": "What may Bixxie use internally but never reveal?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 610,
    "section": "608–617 · Privacy and disclosure",
    "question": "What should not be stored in Bixxie's public knowledge at all?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 611,
    "section": "608–617 · Privacy and disclosure",
    "question": "Should Bixxie expose TP's email?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "The current portfolio intentionally includes a public contact email and Bixxie can use the site's canonical contact action. Prefer rendering the portfolio's contact destination rather than reciting private alternatives. Do not expose any other email discovered through connected accounts."
  },
  {
    "id": 612,
    "section": "608–617 · Privacy and disclosure",
    "question": "Should Bixxie expose his phone number?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 613,
    "section": "608–617 · Privacy and disclosure",
    "question": "Should Bixxie disclose compensation expectations?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 614,
    "section": "608–617 · Privacy and disclosure",
    "question": "Should Bixxie answer grade/GPA questions?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 615,
    "section": "608–617 · Privacy and disclosure",
    "question": "Should Bixxie answer age/date-of-birth questions?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 616,
    "section": "608–617 · Privacy and disclosure",
    "question": "Which personal/sensitive categories should receive “I don't share that”?",
    "status": "known",
    "statusRaw": "PUBLIC DISCLOSURE POLICY",
    "visibility": "PUBLIC-SAFE RESPONSE",
    "answer": "This detail is private or negotiation-specific. Bixxie should not disclose it publicly; direct the visitor to TP if it is legitimately needed."
  },
  {
    "id": 617,
    "section": "608–617 · Privacy and disclosure",
    "question": "What if a public answer could indirectly reveal a private fact?",
    "status": "known",
    "statusRaw": "KNOWN POLICY",
    "visibility": "INTERNAL",
    "answer": "Prefer the **least revealing answer that satisfies the legitimate question**. Do not combine innocuous facts to infer sensitive ones. If a recruiter needs a specific legal/work-authorization fact, TP can provide it directly; a general website visitor does not need the underlying document details."
  },
  {
    "id": 618,
    "section": "618–623 · Uncertainty, recency and contradiction handling",
    "question": "What source-of-truth hierarchy should Bixxie use?",
    "status": "known",
    "statusRaw": "KNOWN POLICY",
    "visibility": "INTERNAL",
    "answer": "1. **Current explicit statement from TP.**\n2. **Current manually curated canonical portfolio/knowledge record.**\n3. **Primary artifact** (contract/official publication/repo/current product analytics) when available.\n4. **Current case study/repository documentation.**\n5. **Older master inventory/resume/interview notes.**\n6. **Old conversational summaries.**\n\nA newer claim does not automatically win if it is clearly a draft/typo; conflicts should be surfaced for manual resolution."
  },
  {
    "id": 619,
    "section": "618–623 · Uncertainty, recency and contradiction handling",
    "question": "Should approximate facts remain approximate?",
    "status": "known",
    "statusRaw": "KNOWN POLICY",
    "visibility": "PUBLIC",
    "answer": "Yes. Say “about/roughly/1,000+” rather than fabricating precision. Precision is itself a factual claim."
  },
  {
    "id": 620,
    "section": "618–623 · Uncertainty, recency and contradiction handling",
    "question": "What should Bixxie do when only partial information exists?",
    "status": "known",
    "statusRaw": "KNOWN POLICY",
    "visibility": "PUBLIC",
    "answer": "Answer the supported part, explicitly mark the missing part, and do not turn absence into a guess. Example: “He used BM25 + Gemini embeddings + RRF; the exact RRF constant is not documented in the public portfolio.”"
  },
  {
    "id": 621,
    "section": "618–623 · Uncertainty, recency and contradiction handling",
    "question": "Must Bixxie distinguish TP's work from team work?",
    "status": "known",
    "statusRaw": "KNOWN POLICY",
    "visibility": "PUBLIC",
    "answer": "Absolutely. This is one of the most important rules. “The company built X” and “TP owned X” are different statements, and sophisticated visitors will probe that distinction immediately."
  },
  {
    "id": 622,
    "section": "618–623 · Uncertainty, recency and contradiction handling",
    "question": "How should historical/current facts be timestamped?",
    "status": "known",
    "statusRaw": "KNOWN POLICY",
    "visibility": "INTERNAL/PUBLIC",
    "answer": "Store explicit `startDate`, `endDate`/`Present`, `lastVerifiedAt` and project `status`. “Current,” “latest” and “most recent” must be computed from those fields, never array order or vague prose. Unknown project dates remain unknown."
  },
  {
    "id": 623,
    "section": "618–623 · Uncertainty, recency and contradiction handling",
    "question": "How often should current-role/project/job-search fields be updated?",
    "status": "known",
    "statusRaw": "KNOWN RECOMMENDATION",
    "visibility": "INTERNAL",
    "answer": "At least whenever TP changes a role, project status, graduation plan, authorization/availability, or active job target — and ideally a quick **monthly review** during the job search. Technical case studies can be updated when material architecture/metrics change. Bixxie should prioritize freshness of “what is he doing now?” over maintaining trivia."
  },
  {
    "id": 624,
    "section": "624–637 · Recruiter answer bank",
    "question": "“Tell me about Tharun.”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Tharun “TP” Sakthivel is a final-year UBC student and AI engineer focused on **applied AI systems — retrieval/RAG, agents, evaluation and the backend/infrastructure around them**. He has built across recruiting, education, creator tools, research tooling and robotics, including Berribot's candidate-ranking system, co-founding ThirdSlate/Pocketlink and current work with UBC AgroBot. He's looking for a role where he can own hard AI/product problems end to end and grow into a deeply technical systems engineer."
  },
  {
    "id": 625,
    "section": "624–637 · Recruiter answer bank",
    "question": "“What is he working on right now?”",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "His current ongoing role is **UBC AgroBot**, where he combines ML with technical operations/corporate relations. Outside that, he is finishing UBC, job-searching for applied-AI roles, and actively building/maintaining personal systems such as **Bixxie, RepoView, OutKey/OutPost/OutPay**. TekkScope/TraceBox/TinyShell/TabFM are currently paused or research-stage rather than his daily focus."
  },
  {
    "id": 626,
    "section": "624–637 · Recruiter answer bank",
    "question": "“When does he graduate?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Expected **April 2027** from UBC's Bachelor of Science, Combined Major in Science."
  },
  {
    "id": 627,
    "section": "624–637 · Recruiter answer bank",
    "question": "“What roles is he looking for?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "AI Engineer / Applied AI Engineer first; LLM/Generative AI and forward-deployed/product-facing AI roles also fit; founding-engineer roles are attractive when they involve real technical ownership. Backend engineering is a secondary path."
  },
  {
    "id": 628,
    "section": "624–637 · Recruiter answer bank",
    "question": "“What is his strongest technical area?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "**Production applied AI systems**, especially retrieval/ranking/RAG, agent/workflow orchestration, evaluation and the backend/reliability needed around models. His strongest evidence is not one framework; it is repeatedly turning model-centric prototypes into systems that can be measured and debugged."
  },
  {
    "id": 629,
    "section": "624–637 · Recruiter answer bank",
    "question": "“Does he actually have production AI experience?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes. Berribot, ThirdSlate and other systems involved real users/workflows, backend services, evaluation, deployment and reliability rather than only notebooks. Berribot alone combined hybrid retrieval, reranking/LambdaMART, production services, LLM tracing/evals and recruiter outcomes."
  },
  {
    "id": 630,
    "section": "624–637 · Recruiter answer bank",
    "question": "“Can he do backend engineering too?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes. FastAPI/Node, Postgres/Supabase, Redis/Celery, auth/RBAC/audit, REST/streaming/WebRTC, background jobs, Docker/Kubernetes, AWS/GCP and integration/reconciliation work are core parts of his projects. AI is his specialization, but backend is not an afterthought."
  },
  {
    "id": 631,
    "section": "624–637 · Recruiter answer bank",
    "question": "“Has he worked at startups?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Extensively. He has co-founded **Pocketlink, ThirdSlate and Allotrix**, worked as a founding engineer/consultant at **Hyr**, and worked at Berribot/Uniffy-style startup environments. He understands that startup engineering includes product judgment and user feedback, not only fast code."
  },
  {
    "id": 632,
    "section": "624–637 · Recruiter answer bank",
    "question": "“What has he built that real people used?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Pocketlink: 24K+ creators/users. ThirdSlate: 1K+ users. Hyr: recruiter pilots and 1,200+ candidate records. Allotrix: ~12 conferences/1K+ delegate assignments per event. Berribot/Uniffy: production recruiter/insurance workflows. RepoView has real review sessions. He has both product-user and internal-enterprise workflow evidence."
  },
  {
    "id": 633,
    "section": "624–637 · Recruiter answer bank",
    "question": "“What is his most impressive project?”",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "For **technical AI depth**, Berribot's ranking system. For **0→1/product traction**, Pocketlink. For **current personal engineering**, RepoView/Bixxie/TinyShell each show a different strength. Bixxie should answer based on what the visitor cares about rather than pretend there is one universal winner."
  },
  {
    "id": 634,
    "section": "624–637 · Recruiter answer bank",
    "question": "“Where is he located?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Vancouver, British Columbia, Canada."
  },
  {
    "id": 635,
    "section": "624–637 · Recruiter answer bank",
    "question": "“Where can he legally work?”",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "RECRUITING",
    "answer": "He is an international student in Canada on a study permit and targets Canada/US/UK roles. Exact post-graduation Canadian status and US/UK sponsorship requirements are **not currently verified in this knowledge base**, so Bixxie should not give categorical legal advice."
  },
  {
    "id": 636,
    "section": "624–637 · Recruiter answer bank",
    "question": "“When can he start?”",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "RECRUITING",
    "answer": "He is targeting full-time/new-grad roles around his expected **April 2027 graduation**, but no exact earliest start date is published. For a specific opening, ask TP directly."
  },
  {
    "id": 637,
    "section": "624–637 · Recruiter answer bank",
    "question": "“Show me his best code/project.”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "For directly inspectable work: **RepoView**, **TinyShell**, **OutKey**, **TraceBox/TekkScope** and `thrn.im` itself. For employer-quality AI depth where source is not public, show the **Berribot/ThirdSlate case studies**. Tailor the evidence to the role instead of dumping every repository."
  },
  {
    "id": 638,
    "section": "638–649 · Founder/CTO answer bank",
    "question": "“Why should I trust him as one of my first engineers?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Because he has repeatedly operated where the job is “there is a problem; make a system exist,” not only “implement ticket 423.” Hyr/founder work shows zero-to-one behavior; Berribot/ThirdSlate show he can go deep on AI architecture/evaluation; Pocketlink shows he has lived with real user adoption; AgroBot shows he can operate outside code. The caveat is that he is still early career — the bet is on demonstrated ownership plus a steep learning curve, not decades of scale experience."
  },
  {
    "id": 639,
    "section": "638–649 · Founder/CTO answer bank",
    "question": "“What has he built completely from scratch?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Founder/personal systems including Pocketlink, Allotrix, much of ThirdSlate, Hyr's early MVP, RepoView, Bixxie, TinyShell, TekkScope/TraceBox and OutKey/OutPay-style projects. Ownership varies by collaborative project, so Bixxie should distinguish solo/personal from co-founded work."
  },
  {
    "id": 640,
    "section": "638–649 · Founder/CTO answer bank",
    "question": "“How fast does he actually ship?”",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "PUBLIC",
    "answer": "There is evidence of regular shipping — Pocketlink roughly four releases/month and multiple zero-to-one builds — but no reliable “X features in Y hours” brag metric. His current goal is **fast iteration with enough evaluation/safety that speed does not create invisible debt**."
  },
  {
    "id": 641,
    "section": "638–649 · Founder/CTO answer bank",
    "question": "“Can he work without a PM handing him specs?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes. Co-founding products, Hyr's early build, AgroBot leadership and personal projects are direct evidence. He actually prefers enough product context to help define the spec."
  },
  {
    "id": 642,
    "section": "638–649 · Founder/CTO answer bank",
    "question": "“Has he spoken directly with customers?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes: recruiters/clients, creators, conference organizers, students and external AgroBot stakeholders. Exact lifetime call count is unknown, but direct user/customer/stakeholder interaction is a recurring part of his work."
  },
  {
    "id": 643,
    "section": "638–649 · Founder/CTO answer bank",
    "question": "“Can he determine what *not* to build?”",
    "status": "known",
    "statusRaw": "KNOWN AS LEARNED SKILL",
    "visibility": "PUBLIC",
    "answer": "Increasingly, yes — and he is unusually explicit that this was once a weakness. His founder mistake was overbuilding; his current operating rule is to prove the core user value first and add complexity only when it buys reliability, safety or user outcome. The self-awareness is part of the evidence."
  },
  {
    "id": 644,
    "section": "638–649 · Founder/CTO answer bank",
    "question": "“What happens when he has insufficient information?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He identifies the highest-risk unknown, makes assumptions explicit, gets the cheapest evidence that could change the decision, and moves on reversible parts instead of waiting for perfect certainty. For irreversible/high-risk decisions, he slows down and maps edge cases."
  },
  {
    "id": 645,
    "section": "638–649 · Founder/CTO answer bank",
    "question": "“What has he done when a launch was going badly?”",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "FOUNDER",
    "answer": "No fully documented public launch-crisis story exists. His general pattern is instrument the failure, cut scope, protect the critical path and communicate early. Bixxie should not invent a dramatic launch night."
  },
  {
    "id": 646,
    "section": "638–649 · Founder/CTO answer bank",
    "question": "“Does he care about business/user outcomes or only architecture?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He explicitly cares about user/business outcomes: recruiter time/false positives, creator adoption/engagement, reconciliation hours, organizer coordination, student trust, partnerships/funding. In fact, his main self-criticism is that he used to overvalue architecture before validation."
  },
  {
    "id": 647,
    "section": "638–649 · Founder/CTO answer bank",
    "question": "“What does founder experience change about him as an engineer?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He asks “why are we building this, for whom, and what will tell us it worked?” before he asks “what framework?” He has felt the cost of both overbuilding and under-measuring, which makes him more likely to connect technical design to stage/user/business constraints."
  },
  {
    "id": 648,
    "section": "638–649 · Founder/CTO answer bank",
    "question": "“How does he handle intense deadlines?”",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "He tends to get analytical rather than freeze: isolate the critical path, reduce scope, prioritize reversible decisions, and work hard until the ambiguity shrinks. The risk is over-focusing and sleep getting messy; he is aware that sustainable consistency matters more than heroic bursts."
  },
  {
    "id": 649,
    "section": "638–649 · Founder/CTO answer bank",
    "question": "“What would former founders say?”",
    "status": "unknown",
    "statusRaw": "UNKNOWN/PRIVATE",
    "visibility": "CONDITIONAL",
    "answer": "Bixxie should not put words in former founders' mouths. It can say the work demonstrates broad ownership and suggest direct references when appropriate."
  },
  {
    "id": 650,
    "section": "650–663 · Engineer-to-engineer answer bank",
    "question": "“What's the hardest backend/distributed system he has built?”",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Berribot's production AI stack and TekkScope/TraceBox are the strongest candidates by different definitions. Berribot had real recruiter scale plus ranking/evaluation/deployment; TekkScope combines crawling, cross-worker Redis/SSE, model routing and MCP; TraceBox coordinates browser/WebRTC/media/model state. “Hardest” is subjective."
  },
  {
    "id": 651,
    "section": "650–663 · Engineer-to-engineer answer bank",
    "question": "“Why RRF?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/TECHNICAL",
    "answer": "Because BM25 and dense retrieval scores live on incomparable scales. RRF combines their **rank positions** without pretending score calibration is meaningful, giving a simple robust hybrid candidate set before expensive reranking."
  },
  {
    "id": 652,
    "section": "650–663 · Engineer-to-engineer answer bank",
    "question": "“Why LambdaMART after a reranker?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "The cross-encoder provides one strong semantic relevance signal. LambdaMART can learn from recruiter labels how multiple ranking signals should combine and order the final shortlist. It turns “semantic similarity” into a more task-specific ranking objective."
  },
  {
    "id": 653,
    "section": "650–663 · Engineer-to-engineer answer bank",
    "question": "“What did the actual eval show?”",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Business outcomes: ~42% lower shortlisting time, ~30% fewer false positives, ~35% higher matching precision. The ranking eval tracked nDCG@k/MRR/Recall@k, but exact before/after numeric values are not in the current canonical source. Bixxie should say that rather than fabricate them."
  },
  {
    "id": 654,
    "section": "650–663 · Engineer-to-engineer answer bank",
    "question": "“What happened when retrieval failed?”",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "TECHNICAL",
    "answer": "Lexical-only and dense-only retrieval have complementary misses; hybrid retrieval was the architectural response. Downstream reranking cannot rescue a relevant candidate that never enters the candidate set, which is why Recall@k matters. Specific incident examples are not stored."
  },
  {
    "id": 655,
    "section": "650–663 · Engineer-to-engineer answer bank",
    "question": "“How does he evaluate agents?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "Break the agent into observable tasks/states and evaluate both deterministic correctness and model behavior: tool selection/arguments, task success, grounding, retries/failure behavior, latency/cost and end-to-end user outcome. Use fixed scenarios, adversarial cases and trace inspection. Do not grade the agent only by whether the final prose “looks good.”"
  },
  {
    "id": 656,
    "section": "650–663 · Engineer-to-engineer answer bank",
    "question": "“How does he stop hallucinations?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "Scoped retrieval, evidence preservation, grounding checks, citation mapping, constrained/structured output, human review for low-confidence cases, and explicit unknown behavior. The deeper answer: you cannot guarantee a model never hallucinates; you design the application so unsupported behavior is detected/contained."
  },
  {
    "id": 657,
    "section": "650–663 · Engineer-to-engineer answer bank",
    "question": "“What's his worst production incident?”",
    "status": "unknown",
    "statusRaw": "UNKNOWN",
    "visibility": "TECHNICAL",
    "answer": "No canonical detailed incident is currently documented. Bixxie should not manufacture one."
  },
  {
    "id": 658,
    "section": "650–663 · Engineer-to-engineer answer bank",
    "question": "“How does he debug a system he didn't write?”",
    "status": "known",
    "statusRaw": "KNOWN AS METHOD",
    "visibility": "TECHNICAL",
    "answer": "Map the request/data flow, get one failing input, reproduce it, find the first state boundary where output diverges, inspect logs/traces/DB rather than reading the whole codebase, then narrow hypotheses. Once fixed, add a regression test/eval around the failure. He uses tooling/AI to accelerate navigation but still verifies the path himself."
  },
  {
    "id": 659,
    "section": "650–663 · Engineer-to-engineer answer bank",
    "question": "“What does he consider an acceptable p95?”",
    "status": "known",
    "statusRaw": "KNOWN AS REASONING, NOT A NUMBER",
    "visibility": "TECHNICAL",
    "answer": "There is no universal p95. It depends on user interaction and the cost of the work: voice/audio needs far tighter responsiveness than a background report; search/autocomplete differs from deep research. Define the UX/SLO first, then instrument against it. A generic “p95 under 200ms” would be meaningless for LLM generation."
  },
  {
    "id": 660,
    "section": "650–663 · Engineer-to-engineer answer bank",
    "question": "“When would he use a queue?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "When work is slow/bursty/retriable, should survive request disconnect, needs concurrency control, or can be processed asynchronously — document ingestion, batch evaluation, email/notifications, heavy background tasks. Not for a simple synchronous read just because Redis/Celery exists."
  },
  {
    "id": 661,
    "section": "650–663 · Engineer-to-engineer answer bank",
    "question": "“When would he avoid microservices?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "TECHNICAL",
    "answer": "When the team/system is small and service boundaries would mostly add deployments, network failure and observability burden. Start modular in one codebase, split when independent scaling/runtime/ownership/failure isolation is real."
  },
  {
    "id": 662,
    "section": "650–663 · Engineer-to-engineer answer bank",
    "question": "“What technical decision does he regret?”",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Not one framework choice; the repeated regret is **architecting deeper than the evidence justified** or delaying measurement/reconciliation. The lesson is to prove the user path and instrument it first, then earn complexity."
  },
  {
    "id": 663,
    "section": "650–663 · Engineer-to-engineer answer bank",
    "question": "“What has he changed his mind about technically?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He is less impressed by unconstrained agents/microservice complexity and more impressed by **typed interfaces, deterministic boundaries, strong retrieval, evals, observability and simple systems that fail clearly**. He also increasingly believes the best AI system may use *less* model reasoning, not more."
  },
  {
    "id": 664,
    "section": "664–675 · Personal/conversational answer bank",
    "question": "“What is Tharun like outside work?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL/PUBLIC",
    "answer": "Extroverted, competitive, curious and fairly unserious with friends. He likes sports, gaming in phases, music, movies, cooking Indian food, design and increasingly philosophy/literature. He can go from a technical rabbit hole to arguing about a movie soundtrack to getting roasted by friends for being “TP” surprisingly quickly."
  },
  {
    "id": 665,
    "section": "664–675 · Personal/conversational answer bank",
    "question": "“What does he do on weekends?”",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "OPTIONAL",
    "answer": "Some combination of gym/cardio or a sport, food, music, friends, sleep, and inevitably a project/research rabbit hole. He is capable of relaxing, but his version of relaxing often somehow ends with a terminal open."
  },
  {
    "id": 666,
    "section": "664–675 · Personal/conversational answer bank",
    "question": "“What music does he listen to?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "Tamil music plus hip-hop/R&B/trap/atmospheric music. Anirudh/A.R. Rahman/Hiphop Tamizha/Sai Abhyankkar/G.V. Prakash on one side; Juice WRLD, XXXTentacion, Kanye, Drake, The Weeknd, Travis Scott, Metro Boomin, Don Toliver and smaller South Asian/UK-diaspora artists on the other."
  },
  {
    "id": 667,
    "section": "664–675 · Personal/conversational answer bank",
    "question": "“Does he play games?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "Yes, but in phases rather than as a strict daily routine. PlayStation plus Valorant/Apex/Warzone/Minecraft/racing/story games."
  },
  {
    "id": 668,
    "section": "664–675 · Personal/conversational answer bank",
    "question": "“What sports does he do?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "Currently swimming, running, biking, lifting and pickleball, with interest in triathlon-style hybrid fitness. In school he was especially serious about track and ran the 400m at district level; he also played basketball, football and hockey."
  },
  {
    "id": 669,
    "section": "664–675 · Personal/conversational answer bank",
    "question": "“Coffee or tea?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "Coffee. Arabica lungo, milk, **three teaspoons of sugar**. Yes, three."
  },
  {
    "id": 670,
    "section": "664–675 · Personal/conversational answer bank",
    "question": "“What weather does he like?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "Cold/cozy/rainy weather. Rain on a window + warm room + laptop somehow makes him more productive. Winter is his favorite season."
  },
  {
    "id": 671,
    "section": "664–675 · Personal/conversational answer bank",
    "question": "“What's something weirdly specific he likes?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "OPTIONAL",
    "answer": "He can sleep basically anywhere, loves sleep, then feels guilty for sleeping and tries to compensate by working. Also: he'll research a tiny question until it has somehow become 25 browser tabs."
  },
  {
    "id": 672,
    "section": "664–675 · Personal/conversational answer bank",
    "question": "“What is he learning right now?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/OPTIONAL",
    "answer": "Deeper applied-AI engineering plus university coursework, while outside engineering he is exploring philosophy/literature and learning guitar/piano."
  },
  {
    "id": 673,
    "section": "664–675 · Personal/conversational answer bank",
    "question": "“What would he build if money wasn't a constraint?”",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC/OPTIONAL",
    "answer": "An AI product that becomes so useful in everyday life/work that people stop thinking about the fact it uses AI. He is more interested in the system becoming a natural part of the workflow than in a product that constantly advertises “AI-powered.”"
  },
  {
    "id": 674,
    "section": "664–675 · Personal/conversational answer bank",
    "question": "“What is he bad at?”",
    "status": "partial",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "OPTIONAL",
    "answer": "He can overthink, over-research and overbuild; he gets impatient with avoidable slowness; consistency/sleep can get messy when he is very focused. He is also slightly scared of his own two dogs despite loving them, which is not helping the formidable-engineer image."
  },
  {
    "id": 675,
    "section": "664–675 · Personal/conversational answer bank",
    "question": "“What would his friends say about him?”",
    "status": "partial",
    "statusRaw": "PARTIAL",
    "visibility": "OPTIONAL",
    "answer": "Probably ambitious, curious, social, chronically trying to optimize something, easy to drag into both serious and absurd conversations, and someone who can turn “quick question” into a research project. They would also almost certainly call him **Toilet Paper** before giving Bixxie a usable professional quote."
  },
  {
    "id": 676,
    "section": "446–452 · Teamwork, conflict and disagreement",
    "question": "Is he a team player?",
    "status": "known",
    "statusRaw": "KNOWN AS STYLE",
    "visibility": "PUBLIC",
    "answer": "Yes. He consistently works in multidisciplinary, cross-functional settings — engineering, research, and operations at UBC AgroBot; co-founder teams at ThirdSlate and Pocketlink — and leads through influence rather than formal authority: making the problem legible, bringing evidence, and proposing a concrete next step so others can engage. He credits founders, engineers, professors, and collaborators with materially shaping how he thinks about products and engineering, and when disagreement stalls he actively drives it toward a decision rather than letting it linger."
  },
  {
    "id": 677,
    "section": "446–452 · Teamwork, conflict and disagreement",
    "question": "Is he a self-starter?",
    "status": "known",
    "statusRaw": "KNOWN AS STYLE",
    "visibility": "PUBLIC",
    "answer": "Yes. He has co-founded and built products end to end (ThirdSlate, Pocketlink, Allotrix), taken on an AgroBot corporate-relations lead role without being asked twice, and built personal/founder-stage systems like Bixxie, RepoView, and TinyShell on his own initiative rather than as assigned work."
  },
  {
    "id": 678,
    "section": "446–452 · Teamwork, conflict and disagreement",
    "question": "Is he coachable / open to feedback?",
    "status": "known",
    "statusRaw": "KNOWN AS STYLE",
    "visibility": "PUBLIC",
    "answer": "Yes. His own account of changing his mind is explicit: he used to believe a good plan meant sticking to it and that more complete engineering meant a better product, and startup experience — shaped by founders, collaborators, and user feedback — taught him that changing course when evidence changes is the more disciplined choice."
  },
  {
    "id": 679,
    "section": "424–429 · Ownership and autonomy",
    "question": "Does he take ownership of problems?",
    "status": "known",
    "statusRaw": "KNOWN AS STYLE",
    "visibility": "PUBLIC",
    "answer": "Yes. At AgroBot he expanded from ML engineer into technical operations, budget/resource coordination, and corporate relations without being asked — ownership well outside his formal title. He also communicates a slipping deadline early and names the real reason rather than hiding behind \"unexpected complexity,\" which is ownership of the bad news too, not just the wins."
  },
  {
    "id": 680,
    "section": "373–382 · Infrastructure, deployment and reliability",
    "question": "Is he detail-oriented?",
    "status": "known",
    "statusRaw": "KNOWN AS STYLE",
    "visibility": "PUBLIC",
    "answer": "Yes, especially where correctness or safety is on the line. ThirdSlate's grounding/citation/human-review path and TinyShell's deliberate non-execution boundary are both cases where he chose to slow down and add rigor rather than ship something faster but looser."
  },
  {
    "id": 681,
    "section": "638–649 · Founder/CTO answer bank",
    "question": "Does he handle pressure and tight deadlines well?",
    "status": "known",
    "statusRaw": "KNOWN/PARTIAL",
    "visibility": "PUBLIC",
    "answer": "Yes, with one honest caveat. Under pressure he tends to get analytical rather than freeze — isolating the critical path, cutting scope, and prioritizing reversible decisions — but he's self-aware that this can tip into over-focusing and messy sleep, and he actively values sustainable consistency over heroic bursts."
  },
  {
    "id": 682,
    "section": "430–437 · Ambiguity and prioritization",
    "question": "Is he a fast learner?",
    "status": "known",
    "statusRaw": "KNOWN AS STYLE",
    "visibility": "PUBLIC",
    "answer": "Yes. He's moved across very different domains in quick succession — recruiting AI, education, agricultural robotics, insurance infrastructure, security tooling — and at AgroBot he picked up operations, budgeting, and corporate relations on top of ML engineering without that being his starting role."
  },
  {
    "id": 683,
    "section": "417–423 · 0→1 building and speed",
    "question": "Can he work independently without close supervision?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes. TinyShell and his trading-bot repositories are solo work, and Bixxie, RepoView, and OutKey were built independently at founder-stage pace. He also says he prefers broad outcomes over narrowly defined tasks — enough context to understand the real constraint, then freedom to decide the path himself."
  },
  {
    "id": 684,
    "section": "430–437 · Ambiguity and prioritization",
    "question": "Is he resourceful — good at figuring things out with limited information?",
    "status": "known",
    "statusRaw": "KNOWN AS PRACTICE",
    "visibility": "PUBLIC",
    "answer": "Yes. His default approach to ambiguous work is risk-first: validate the user/problem and the hardest technical assumption, get a thin end-to-end path working, then add reliability and polish — rather than waiting for complete information before moving."
  },
  {
    "id": 685,
    "section": "446–452 · Teamwork, conflict and disagreement",
    "question": "Does he make decisions based on evidence rather than opinion?",
    "status": "known",
    "statusRaw": "KNOWN AS STYLE",
    "visibility": "PUBLIC",
    "answer": "Yes. His default style for resolving disagreement is to reach for a benchmark, prototype, logs/evals, or user evidence instead of arguing from preference or seniority — and to pick the simplest option that meets the actual constraint once that evidence is in."
  },
  {
    "id": 686,
    "section": "408–416 · Product thinking and customer work",
    "question": "Is he customer- or user-focused?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes. He's had direct user/stakeholder interaction across almost every project — recruiter and client discovery at Berribot, creator interviews at Pocketlink, conference organizers at Allotrix, students at ThirdSlate, and sponsors/industry stakeholders through AgroBot corporate relations. He's not purely an internal engineer; translating user pain into implementation is a recurring part of his work."
  },
  {
    "id": 687,
    "section": "638–649 · Founder/CTO answer bank",
    "question": "Does he know what not to build — can he avoid over-engineering?",
    "status": "known",
    "statusRaw": "KNOWN AS LEARNED SKILL",
    "visibility": "PUBLIC",
    "answer": "Increasingly, yes — and he's explicit that this was once a real weakness. His founder-era mistake was overbuilding before validating user need; his current rule is to prove core value first and only add complexity when it buys reliability, safety, or real user outcome."
  },
  {
    "id": 688,
    "section": "462–467 · Communication",
    "question": "Is he a good communicator?",
    "status": "known",
    "statusRaw": "KNOWN AS STYLE",
    "visibility": "PUBLIC",
    "answer": "Yes. He gives concise, outcome-focused updates — what changed, what's verified, what's risky, what's next — prefers concrete artifacts (a demo, metric, PR, trace) over long status narratives, and adapts the medium to the audience: a quick conversation for alignment, a short written design for consequential decisions, a prototype when people are debating an assumption that can just be tested."
  },
  {
    "id": 689,
    "section": "453–461 · Failure, mistakes and lessons",
    "question": "Is he resilient — does he recover well from failure or mistakes?",
    "status": "known",
    "statusRaw": "KNOWN AS STYLE",
    "visibility": "PUBLIC",
    "answer": "Yes. He treats plans as best guesses with current information rather than commitments to his ego, which is why he can change course — on product direction, on technical approach — without losing momentum. His \"build a compass to wander\" framing is partly this: keep the direction stable, let the route change."
  },
  {
    "id": 690,
    "section": "468–477 · Founder/co-founder experience",
    "question": "Does he think strategically / see the bigger picture, not just the code?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes. Founding taught him to ask why something is being built, for whom, and what will prove it worked before asking what framework to use — and AgroBot's corporate-relations work means he's had to connect technical decisions to budget, partnerships, and stakeholder priorities, not just implementation."
  },
  {
    "id": 691,
    "section": "468–477 · Founder/co-founder experience",
    "question": "Is he entrepreneurial?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes. He has co-founded or held founding-engineer roles at three ventures — ThirdSlate, Pocketlink, and Hyr — plus Co-founder & CTO at Allotrix, and builds founder-stage personal systems (Bixxie, RepoView, TinyShell) on his own initiative outside any formal role."
  },
  {
    "id": 692,
    "section": "392–399 · Security",
    "question": "Does he have strong technical/engineering judgment?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes. He's made deliberate, reasoned calls on fail-open versus fail-closed tradeoffs, Docker/deployment decisions beyond just writing a Dockerfile, and owned the architecture of multiple distinct systems — RepoView's share/security/view-tracking design, TinyShell's IR/schema/eval harness, TekkScope's search/crawl/streaming architecture — each shaped by the specific risk profile of that system rather than a one-size-fits-all default."
  },
  {
    "id": 693,
    "section": "132–143 · UBC AgroBot",
    "question": "Does he build trust with stakeholders — is he persuasive?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes. As AgroBot's Corporate Relations Lead he turned outreach into six active external partnerships and $8K+ in funding/collaboration commitments, across 80+ prospects, five campaigns, and 25+ external stakeholders over ten engagements — real, measurable evidence of earning buy-in rather than just pitching."
  },
  {
    "id": 694,
    "section": "462–467 · Communication",
    "question": "Is he reliable and dependable?",
    "status": "known",
    "statusRaw": "KNOWN AS STYLE",
    "visibility": "PUBLIC",
    "answer": "Yes. His stated default is to flag a slipping deadline early with the real reason rather than let it drift silently, and to separate must-have from nice-to-have so a revised scope/date can be agreed on — reducing scope before quietly missing a commitment."
  },
  {
    "id": 695,
    "section": "535–542 · Personality",
    "question": "Is he humble about his own mistakes and limitations?",
    "status": "known",
    "statusRaw": "KNOWN AS STYLE",
    "visibility": "PUBLIC",
    "answer": "Yes. He's explicit about past weaknesses rather than smoothing them over — naming his old bias toward overbuilding, his impatience with processes that feel unnecessarily slow, and his tendency to let curiosity pull him 25 tabs deep on a question that doesn't actually need an answer yet."
  },
  {
    "id": 696,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "Which additional leadership roles has TP held at UBC?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "His public profile adds several people-facing roles: **Brock Commons Area President** in the Residence Hall Association (2025–26), **VP Student Life** at the UBC Tamil Students' Association (Aug 2025–Jul 2026), and **VP Administration** at the Middle East Indian Students' Association at UBC (from Jul 2026). BOLT UBC also lists him as a **Corporate Relations Director**. These roles complement his engineering work with community, event, and partner leadership."
  },
  {
    "id": 697,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "How large was the Brock Commons community he represented?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "As Brock Commons Area President for 2025–26, TP led a residence association serving **800+ residents**. His public profile describes resident-focused programming and representing residents in discussions with UBC Housing."
  },
  {
    "id": 698,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "What operational responsibility did he own in the Residence Hall Association?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He managed a **$7K budget end to end**, including approvals, procurement, and vendor coordination. He also coordinated four stakeholder groups and six partnerships to expand community engagement."
  },
  {
    "id": 699,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "What is his strongest student-sponsorship result?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "As VP Student Life for the UBC Tamil Students' Association, TP led sponsorship outreach for its Grand Formal in Surrey and secured **$18K across 44 sponsors**. It is a concrete example of building external support for a large student event."
  },
  {
    "id": 700,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "What did he own as VP Student Life for the UBC Tamil Students' Association?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He owned student-life programming across planning, logistics, sponsorship, and partner relationships. His profile also describes coordinating executive teams and delivering cultural events that connected students and increased the association's visibility."
  },
  {
    "id": 701,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "What is TP's role with the Middle East Indian Students' Association at UBC?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "His public profile lists him as **VP Administration** at the Middle East Indian Students' Association at UBC, beginning in July 2026. It is another current example of taking responsibility for campus operations and community life."
  },
  {
    "id": 702,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "What is his role at BOLT UBC?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "BOLT UBC lists TP as a **Corporate Relations Director**. BOLT connects students with data and analytics through industry events, workshops, case competitions, and free consulting for local businesses, giving him another stakeholder-facing role alongside his technical work."
  },
  {
    "id": 703,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "Does he have evidence of leading outside software teams?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes. He has led residence and student-association work with real budgets, vendors, sponsors, executive teams, and resident communities. The record includes an 800+ resident community, a $7K operating budget, and an $18K student-event sponsorship effort across 44 sponsors."
  },
  {
    "id": 704,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "Which languages does his public profile list?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "His profile lists **Tamil** at native or bilingual proficiency and **English** at full professional proficiency. It also lists Hindi, without a proficiency level."
  },
  {
    "id": 705,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "What was TP's contribution to his published chest-X-ray research?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "TP is the first-listed author of the 2022 IJCRR paper **“Detection of COVID-19 from Chest X-ray Images using Concatenated Deep Learning Neural Networks.”** His public research profile describes him as proposing the two model combinations and leading the comparative evaluation. The journal record is available at [the article page](https://ijcrr.com/abstract.php?article_id=4341)."
  },
  {
    "id": 706,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "Which model architectures did his chest-X-ray paper compare?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "The study compared **Xception + ResNet152V2** with **Xception + EfficientNet-B7**. In each design, features from two pretrained networks were concatenated and passed to a classifier for chest-X-ray classification across COVID-19, pneumonia, and normal categories."
  },
  {
    "id": 707,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "What does the published research add to his engineering profile?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "It shows applied machine-learning experience beyond LLM products: framing a medical-imaging problem, combining transfer-learning features, implementing the experiment in Keras, and comparing model variants. That gives his current production-AI work an earlier foundation in hands-on ML experimentation."
  },
  {
    "id": 708,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "What result did TinyShell's compact-model pilot achieve?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "The TinyShell pilot reached **up to 96.5% schema-valid output** across its compact-model experiments. That is a structured-output validity result: the model proposes a typed intent, while deterministic code handles rendering and the system keeps command execution outside the model boundary."
  },
  {
    "id": 709,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "How does TinyShell evaluate model output separately from command rendering?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "It uses a frozen **2,000-example ShellIntent pilot** to measure JSON parsing, schema validity, exact intent matching, slot F1, and latency. This makes model interpretation measurable on its own, separately from the deterministic Bash, zsh, and PowerShell compilers."
  },
  {
    "id": 710,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "What validation work does TP include for OutKey?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "OutKey's CI includes **property-based tests, conformance vectors, and parser fuzzing**. Those checks exercise its credential and request-verification boundaries, adding repeatable evidence alongside the cryptographic design."
  },
  {
    "id": 711,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "What credential-issuance throughput did OutKey demonstrate?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "A single-node OutKey benchmark reported **6,479 credentials issued per second**. Present it as a project benchmark result, alongside the separate warm-verification latency measurements already documented."
  },
  {
    "id": 712,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "How much replay-cache memory did OutKey use in its benchmark?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "The benchmark reported **1.44 MB for 10,000 replay entries**. This gives a concrete memory figure for the replay-protection portion of the system."
  },
  {
    "id": 713,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "How does OutPay detect incoming USDC payments reliably?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "It uses two paths: low-latency Alchemy Address Activity webhooks with HMAC verification, plus a scheduled RPC reconciler that scans bounded ranges with cursors to recover missed or delayed events. Both paths feed the same payment matcher."
  },
  {
    "id": 714,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "How does OutPay decide whether a transaction matches a checkout?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "The matcher checks the chain, normalized USDC contract, merchant wallet, checkout expiry and grace period, exact six-decimal amount with an overpayment tolerance, and required confirmation depth before advancing payment state."
  },
  {
    "id": 715,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "How does OutPay prevent duplicate events from counting as multiple payments?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "It deduplicates at multiple layers: provider-event IDs, deterministic queue jobs, transaction hash plus log index, one payment per checkout, consumed-transaction checks, and database constraints. The webhook and RPC-reconciliation paths converge on those shared checks."
  },
  {
    "id": 716,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "How does OutPay verify a merchant's payout wallet?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "A merchant signs a fresh, time-limited challenge with an injected EIP-1193 wallet. The server recovers and verifies the signature before accepting that wallet as a payout destination."
  },
  {
    "id": 717,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "What database-migration discipline did he build into OutPay?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "OutPay uses PostgreSQL as its source of truth with **16 versioned migrations**. Its versioned API, durable BullMQ/Redis jobs, health-aware provider routing, and idempotency-key replay protection give the payment workflow explicit, reviewable state transitions."
  },
  {
    "id": 718,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "How many independent test bots can TraceBox run in a project session?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "TraceBox's public project description specifies runs of **1–100 independent bots**, each with its own headless Chrome session for conversations with a real browser-based voice agent. Describe this as the project's documented run range, not as a separately audited customer-concurrency figure."
  },
  {
    "id": 719,
    "section": "696–719 · Public leadership, research and project evidence",
    "question": "What evidence does TraceBox preserve from a voice-agent test?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Each run can preserve **recordings, transcripts, screenshots, timings, and logs**. That gives a development team concrete material to inspect when a voice agent behaves differently in a real browser and WebRTC session than it does in a mocked test."
  },
  {
    "id": 720,
    "section": "720–736 · Recent AI evaluation, builder practice and founder work",
    "question": "What recent local-model experiment did TP publish?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He published a controlled benchmark of local models answering technical questions from real documentation. It uses **7,648 multiple-choice questions** generated from Markdown documentation for Node.js, TypeScript, Vue, LangChain.js, and Transformers.js. [His experiment write-up](https://www.linkedin.com/posts/tharunpranavsakthivel_i-wanted-to-know-something-simple-can-a-activity-7493795112108326912-SWhb)"
  },
  {
    "id": 721,
    "section": "720–736 · Recent AI evaluation, builder practice and founder work",
    "question": "How did he compare local models in the documentation benchmark?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He tested each model in three conditions: answering from its own knowledge with no context, receiving the correct source document directly, and using a full RAG pipeline to retrieve the relevant document from the wider corpus. That separates model knowledge, best-case grounding, and realistic retrieval performance."
  },
  {
    "id": 722,
    "section": "720–736 · Recent AI evaluation, builder practice and founder work",
    "question": "How well did a small on-device model perform with RAG?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Apple's **AFM 2 3B** reached **86% accuracy** in TP's RAG condition. Because its context window was about 4K tokens, the experiment supplied the top three retrieved documents instead of five. It is a strong result for a compact model operating entirely on-device."
  },
  {
    "id": 723,
    "section": "720–736 · Recent AI evaluation, builder practice and founder work",
    "question": "What did his benchmark find about reasoning mode versus retrieval?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Turning on reasoning mode added about **1% accuracy** while taking dramatically longer. For this documentation task, grounding a model in the right retrieved material produced the more useful quality improvement per unit of time."
  },
  {
    "id": 724,
    "section": "720–736 · Recent AI evaluation, builder practice and founder work",
    "question": "What is TP's main takeaway from evaluating local models on technical questions?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "A good retrieval system can make a compact local model useful for everyday technical questions by giving it current, relevant documentation. His experiment emphasizes evidence selection and grounding as practical ways to improve answer quality, rather than relying only on a larger model."
  },
  {
    "id": 725,
    "section": "720–736 · Recent AI evaluation, builder practice and founder work",
    "question": "Which compact models did he test in his ShellIntent study?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He evaluated **FunctionGemma (268.1M parameters), LFM2.5 (229.7M), and Falcon-H1 (91.1M)** on converting plain-English shell requests into typed ShellIntent JSON. The models produce an intermediate representation; deterministic software handles command rendering."
  },
  {
    "id": 726,
    "section": "720–736 · Recent AI evaluation, builder practice and founder work",
    "question": "What did TP's held-out TinyShell evaluation show beyond valid JSON?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "On 200 held-out examples, the three models achieved **99.0–99.5% strict JSON parse rates** and **95.5–96.5% joint parse-and-schema validity**; exact intent matches were **33.0–37.5%**. TP's write-up uses the gap to make a valuable engineering distinction: valid structure is measurable, but it does not by itself establish that a model understood the request. [Evaluation details](https://www.linkedin.com/posts/tharunpranavsakthivel_every-model-i-tested-produced-valid-json-activity-7496309680076410880-b5Fy)"
  },
  {
    "id": 727,
    "section": "720–736 · Recent AI evaluation, builder practice and founder work",
    "question": "How did he make the TinyShell model comparison reproducible?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "All three compact models used the same frozen **1,600/200/200 train, validation, and test split** and the same evaluation pipeline. The comparison reported parsing, schema validity, exact intent matching, and latency separately, so a strong result in one dimension could not stand in for the others."
  },
  {
    "id": 728,
    "section": "720–736 · Recent AI evaluation, builder practice and founder work",
    "question": "Which TinyShell model had the lowest measured latency?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "**LFM2.5** had the fastest median latency in the held-out comparison at about **1,260 ms**, versus about 2,049 ms and 3,700 ms for the other models. The public write-up says that speed difference remained significant after Holm correction; it reports the semantic-accuracy comparisons separately."
  },
  {
    "id": 729,
    "section": "720–736 · Recent AI evaluation, builder practice and founder work",
    "question": "Has TP tested AI coding agents working together?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes. He ran **Claude Code and Codex in parallel** and reported noticeably better results than either agent working alone. He has also publicly shared that he evaluates the surrounding harness and tools, since those choices affect how effectively a model can work. [His workflow notes](https://www.linkedin.com/posts/tharunpranavsakthivel_i-paired-two-ai-coding-agents-against-each-activity-7487658122136666112-S5zg)"
  },
  {
    "id": 730,
    "section": "720–736 · Recent AI evaluation, builder practice and founder work",
    "question": "Why does TP sometimes pair different coding agents?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "A second model gives him an independent perspective for checking the first model's work, and different model families can surface different approaches. His practical workflow keeps engineering judgment with the developer: define the task, give agents useful context, and inspect what they produce."
  },
  {
    "id": 731,
    "section": "720–736 · Recent AI evaluation, builder practice and founder work",
    "question": "What safety habits does TP recommend when using coding agents?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He recommends reading commands before running them, keeping backups, and doing agent work on a copy rather than giving an agent direct access to production. Those habits let him use agents for speed while keeping consequential changes reviewable."
  },
  {
    "id": 732,
    "section": "720–736 · Recent AI evaluation, builder practice and founder work",
    "question": "What launch traction did Allotrix report?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "In his public launch announcement, TP reported **50+ pre-orders** for Allotrix, the Model United Nations conference-automation product he co-founded. This is an early launch-demand signal, distinct from the later event-usage figures in the portfolio's Allotrix case history."
  },
  {
    "id": 733,
    "section": "720–736 · Recent AI evaluation, builder practice and founder work",
    "question": "Did TP lead a communications and brand function at UBC AgroBot?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "Yes. An earlier public post described TP as **Integrated Marketing Lead** at UBC AgroBot, steering marketing, outreach, branding, and web-development divisions. It adds communications and team-coordination experience to his technical and corporate-relations work at AgroBot."
  },
  {
    "id": 734,
    "section": "720–736 · Recent AI evaluation, builder practice and founder work",
    "question": "What does TP's local-model benchmark show about his approach to AI engineering?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He turns a practical question into a controlled comparison: a large fixed question set, named source documents, multiple model sizes, and separate tests for no context, direct context, and retrieval. The result connects model evaluation to a real engineering decision—when a smaller model plus good retrieval is enough."
  },
  {
    "id": 735,
    "section": "720–736 · Recent AI evaluation, builder practice and founder work",
    "question": "What does TP's TinyShell work demonstrate about evaluating AI systems?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "He measures several distinct outcomes—whether output parses, satisfies the schema, captures the requested intent, handles unsupported requests, and responds quickly. He then keeps model generation separate from deterministic compilation and user confirmation, so the evaluation and safety boundary reflect what the product actually needs to do."
  },
  {
    "id": 736,
    "section": "720–736 · Recent AI evaluation, builder practice and founder work",
    "question": "What public evidence shows TP's interest in practical model efficiency?",
    "status": "known",
    "statusRaw": "KNOWN",
    "visibility": "PUBLIC",
    "answer": "His recent local-model benchmark tests whether compact models can answer technical questions when paired with retrieved documentation, and his TinyShell study evaluates models under 300M parameters on a typed-intent task. Both focus on measured capability, latency, and system design rather than parameter count alone."
  }
] as const;

export function getBixxieKnowledgeById(id: number): BixxieKnowledgeItem | undefined {
  return BIXXIE_KNOWLEDGE.find((item) => item.id === id);
}
