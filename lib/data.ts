// Site content, copied verbatim from the original design.
export const PROJECTS: { name: string; what: string; status: string; url: string }[] = [
  { name: "RepoView", what: "Building a way to share a private GitHub project with a recruiter or investor without making the code public, and see how they actually go through it.", status: 'Working', url: 'https://repoview.thrn.im/' },
  { name: "OutKey", what: "Building a way for apps to issue signed credentials that can't be faked or reused, so every action has a clear record of who approved it. Open source.", status: 'Working', url: 'https://github.com/thrns/Outkey' },
  { name: "OutPost", what: "Building one place to chat with different AI models, organize notes by project, and set up AI agents that turn a conversation into a repeatable workflow.", status: 'Working', url: 'https://github.com/thrns/outpost' },
  { name: "OutPay", what: "Building a checkout that lets online businesses accept cryptocurrency payments (USDC) straight into their own wallet, with payment confirmation and bookkeeping handled for them.", status: 'Active', url: 'https://outpay.tech/' },
  { name: "TinyShell", what: "Trained a small language model (SLM) that turns plain English into terminal commands, so nobody has to memorize them.", status: 'Inactive', url: 'https://github.com/thrns/TinyShell' },
  { name: "TabFM-Benchmark", what: "Compared different machine learning models on spreadsheet style data to see which one gave the most reliable results.", status: 'Inactive', url: 'https://github.com/thrns/tabfm-benchmark-lab' },
  { name: "TraceBox", what: "Built a tool that tests voice AI agents, like automated phone assistants, by holding real conversations with them and saving the transcripts, recordings, and failures for debugging.", status: 'Inactive', url: 'https://github.com/thrns/tracebox' },
  { name: "TekkScope", what: "Built an AI research assistant that searches the web, reads through sources, and answers with what it found, switching to a backup model if one goes down.", status: 'Inactive', url: 'https://github.com/thrns/tekkscope' },
  { name: "USDT-Futures-Trading-Bot", what: "Built a bot that turns buy and sell signals into real cryptocurrency futures trades on Binance, and tracks positions and profit along the way.", status: 'Inactive', url: 'https://github.com/thrns/USDT-Futures-Trading-Bot' },
  { name: "CovidScan", what: "An early project that tested whether a deep learning model could spot COVID-19 from chest X-rays, and it later became a published paper.", status: 'Inactive', url: 'https://github.com/thrns/TP-COVID19' }
];
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
export const GREETING = "Hi, I'm Bixxie, an assistant who knows Tharun Pranav Sakthivel's work. Pick a topic or ask anything.";

export type Role = { rail: string; title: string; company: string; url: string; summary: string; summary2?: string; highlight: string; wins: string[]; stack: string };
export const ROLES: Role[] = [
  { rail: 'var(--foreground)', title: "AI Engineer | Technical Operations & Partnerships Lead", company: "UBC AgroBot", url: "https://ubcagrobot.com/", summary: "Spent a few years on UBC's robotics team training the vision models that let the robot see what's growing in a field.", summary2: "Took on technical operations and partnerships for AgroBot, which meant talking to sponsors as much as to engineers.", highlight: '', wins: [], stack: '' },
  { rail: 'var(--border)', title: "AI Engineer", company: "Berribot", url: "https://www.berribot.com/", summary: "Joined Berribot and took over how candidates get matched to open roles, rebuilding it so recruiters spent less time sifting and more time talking to people.", highlight: '', wins: [], stack: '' },
  { rail: 'var(--border)', title: "Co-founder & AI Engineer", company: "ThirdSlate", url: "https://github.com/thrns/thirdslate", summary: "Co-founded ThirdSlate, an AI study platform for students, and spent most of the time making sure its answers could be trusted, with a real person stepping in when they couldn't.", highlight: '', wins: [], stack: '' },
  { rail: 'var(--border)', title: "Software Engineer", company: "Uniffy.me", url: "https://uniffy.me/", summary: "Spent a summer on the backend of an insurance platform, connecting providers so things just worked for the people using it.", highlight: '', wins: [], stack: '' },
  { rail: 'var(--border)', title: "Co-founder & Full-Stack Engineer", company: "Pocketlink", url: "https://github.com/thrns/pocketlink", summary: "Co-founded a platform where creators publish and sell their work, and built most of it. Watching people actually use it was the best part.", highlight: '', wins: [], stack: '' },
  { rail: 'var(--border)', title: "Founding Engineer", company: "Hyr", url: "https://hyr.works/", summary: "Started as the first engineer at Hyr, building the tools that helped recruiters screen candidates faster and understand why each one was recommended.", highlight: '', wins: [], stack: '' },
  { rail: 'var(--border)', title: "Co-founder & Software Engineer", company: "Allotrix", url: "https://github.com/thrns/allotrix", summary: "Started Allotrix to take the headaches out of organizing conferences, then watched it get used at real events.", highlight: '', wins: [], stack: '' },
  { rail: 'var(--border)', title: "Software Engineer", company: "RK&GT Technologies", url: "https://rkgt-tech.com/", summary: "Joined RK&GT for the summer and worked on two things: helping software find what's inside PDFs, and tracking where tagged items sit around an office.", highlight: '', wins: [], stack: '' },
  { rail: 'var(--border)', title: "Machine Learning Engineer", company: "Schneider Electric Sustainability Business", url: "https://www.se.com/", summary: "Worked on a computer vision project during COVID that helped check mask use and distancing.", highlight: '', wins: [], stack: '' }
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

export const ANSWERS: Record<string, string> = {
  'Me': 'I am Tharun Pranav Sakthivel, an AI engineer. I am an AI engineer at Berribot, and have co-founded ThirdSlate, Pocketlink and Allotrix. Earlier I worked on vision models at UBC AgroBot.',
  'Projects': 'Ten are listed under Projects, newest first: RepoView, OutKey, OutPost and OutPay are in progress. Earlier ones include TinyShell, TraceBox, TekkScope and CovidScan.',
  'Skills': 'Python, pgvector, FastAPI, Kafka, Postgres and AWS. Day to day I work on agents, retrieval and evals.',
  'Fun': 'I care about boring reliability more than demos. Outside work I tinker with voice tools and try every new terminal.',
  'More': 'Ask me about my stack, past roles or availability.',
  'Contact': 'Email is the fastest way to reach me. I am open to AI engineering roles.'
  };

export const TOPICS: [string, RegExp][] = [
  ['Projects', /project|built|build|ship|repo|outkey|outpost|outpay|tinyshell|tracebox|tekkscope|covidscan/i],
  ['Skills', /skill|stack|tech|python|tool|language|framework|know|aws|postgres/i],
  ['Contact', /contact|email|mail|reach|hire|hiring|available|availability|open to|work with|connect/i],
  ['Fun', /fun|hobb|outside|free time|interest|like to/i],
  ['Me', /who|about|you\b|yourself|role|experience|background|career|work|job|company|education|intern/i],
  ['More', /help|what can|more|topic|ask/i]
  ];
