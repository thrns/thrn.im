// @ts-nocheck
const N = (n, t, s) => (n ? `<span class='n'>[${n}]</span>` : '') + `<b>${t}</b>` + (s ? `<br/><span class='s'>${s}</span>` : '');
const R = (id, n, t, s) => `${id}("${N(n, t, s)}")`;
export const SRC: Record<string, string> = {
  context: `flowchart TB
subgraph Hiring["Hiring flow"]
direction LR
${R('A','01','Recruiter / JD','input')} --> ${R('B','02','Search &amp; Match','candidate ranking')} --> ${R('C','03','Shortlist','recruiter review')} --> ${R('D','04','Interview','MasterMind')} --> ${R('E','05','Integrity / Proctor','signals + reports')}
end
subgraph Workforce["Parallel workforce development"]
direction LR
${R('F','01','Requirements','skills / gaps')} --> ${R('G','02','BerriTutor','personalized training')}
end
subgraph Shared["Shared by both"]
${R('S','','Shared engineering layer','evaluation · prompt/agent testing · deployment / observability')}
end
Hiring ~~~ Workforce
Workforce ~~~ Shared
class B,G key`,
  ranking: `flowchart TB
subgraph R1["Retrieval"]
direction LR
${R('JD','01','Job description','JD processing')} --> ${R('BM','02','BM25','lexical retrieval')} --> ${R('RRF','04','RRF','fused top-K')}
JD --> ${R('DN','03','Dense retrieval','gemini embeddings')} --> RRF
end
subgraph R2["Ranking"]
direction LR
${R('RR','05','Qwen3 reranker','cross-encoder')} --> ${R('FT','06','Ranking features','assembles signals')} --> ${R('LM','07','LambdaMART','ranked shortlist')}
end
R1 --> R2
class LM key`,
  candidate: `flowchart LR
${R('A','01','Resume')} --> ${R('B','02','Extraction')} --> ${R('C','03','Normalization')} --> ${R('D','04','Canonical taxonomy')} --> ${R('E','05','Candidate profile')}
class E key`,
  tutor: `flowchart TB
subgraph R1["Voice session"]
direction LR
${R('A','01','Learner','voice input')} --> ${R('B','02','LiveKit / WebRTC','voice session')} --> ${R('C','03','Session agent','session state')}
end
subgraph R2["Orchestration"]
direction LR
${R('D','04','Context / memory','persistent user context')} <--> ${R('E','05','Tutor orchestration','multi-agent harness')} --> ${R('F','06','LLM reasoning','response generation')} --> ${R('G','07','Speech response','back to learner')}
end
R1 --> R2
class E key`,
  evals: `flowchart TB
subgraph R1["Inputs"]
direction LR
${R('A','01','Versioned','prompt / app')} --> ${R('B','02','Evaluation','dataset')} --> ${R('C','03','Candidate','model / app')}
end
subgraph R2["Judging"]
direction LR
${R('D','04','Output','candidate response')} --> ${R('E','05','Judge + checks','LLM-as-a-judge<br/>+ deterministic checks')} --> ${R('F','06','Regression gate','release or inspect trace')}
end
R1 --> R2
class F key`,
  delivery: `flowchart TB
subgraph R1["Build"]
direction LR
${R('A','01','GitHub','source')} --> ${R('B','02','GitHub Actions','pipeline')} --> ${R('C','03','Test','checks')}
end
subgraph R2["Ship"]
direction LR
${R('D','04','Build Docker','container image')} --> ${R('E','05','Artifact Registry','image storage')} --> ${R('F','06','GKE / Cloud Run','production services')}
end
R1 --> R2
class F key`
};

export const THEME_CSS = ".node rect,.node polygon{fill:color-mix(in srgb,var(--foreground) 9%,var(--card))!important;stroke:color-mix(in srgb,var(--foreground) 14%,var(--card))!important;stroke-width:1px!important;rx:0;ry:0}\n.node.key rect{fill:color-mix(in srgb,var(--foreground) 18%,var(--card))!important;stroke:var(--foreground)!important}\n.nodeLabel,.label,.label div,.label span{color:var(--foreground)!important;font-family:var(--font-sans)!important;font-size:13px;line-height:1.45;text-align:left!important;white-space:nowrap!important}\n.label .n,.nodeLabel .n{color:color-mix(in srgb,var(--foreground) 60%,transparent)!important;font-size:11px!important;font-weight:400!important;margin-right:8px}\nb{font-weight:500;letter-spacing:-.011em}\n.label .s,.nodeLabel .s{display:inline-block;color:color-mix(in srgb,var(--foreground) 68%,transparent)!important;font-weight:400!important;font-size:11px!important;line-height:1.4}\n.cluster rect{fill:transparent!important;stroke:var(--border)!important;stroke-dasharray:3 3;rx:6;ry:6}\n.cluster-label .nodeLabel,.cluster-label span{font-size:11px!important;font-weight:600!important;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-foreground)!important}\n.flowchart-link{stroke:var(--muted-foreground)!important;stroke-width:1px!important;fill:none}\n.edgeLabel{background:var(--card)}";
export const PILL = {
  own: { pillBg: 'rgba(22,163,74,.1)', pillFg: '#15803d', dot: '#16a34a' },
  warn: { pillBg: 'rgba(217,119,6,.1)', pillFg: '#b45309', dot: '#d97706' },
  neutral: { pillBg: 'color-mix(in srgb, var(--foreground) 7%, transparent)', pillFg: 'var(--muted-foreground)', dot: 'var(--muted-foreground)' }
};
export const LINKS = {"LinkedIn":"https://www.linkedin.com/in/thrn","GitHub":"https://github.com","Python":"https://www.python.org","BM25":"https://en.wikipedia.org/wiki/Okapi_BM25","gemini-embedding-001":"https://ai.google.dev/gemini-api/docs/embeddings","RRF":"https://plg.uwaterloo.ca/~gvcormac/cormacksigir09-rrf.pdf","Qwen3-Reranker":"https://huggingface.co/Qwen/Qwen3-Reranker-8B","LambdaMART":"https://www.microsoft.com/en-us/research/publication/from-ranknet-to-lambdarank-to-lambdamart-an-overview/","W&B":"https://wandb.ai","LiveKit":"https://livekit.io","Supermemory":"https://supermemory.ai","MediaPipe":"https://ai.google.dev/edge/mediapipe/solutions/guide","Docker":"https://www.docker.com","GitHub Actions":"https://github.com/features/actions","Artifact Registry":"https://cloud.google.com/artifact-registry","GKE":"https://cloud.google.com/kubernetes-engine","OpenAI function calling":"https://platform.openai.com/docs/guides/function-calling","spaCy":"https://spacy.io","pgvector":"https://github.com/pgvector/pgvector","Celery":"https://docs.celeryq.dev","Pydantic":"https://docs.pydantic.dev","Next.js 15":"https://nextjs.org","React 19":"https://react.dev","React Grid Layout":"https://github.com/react-grid-layout/react-grid-layout","Supabase":"https://supabase.com","PostHog":"https://posthog.com","Cloudflare":"https://www.cloudflare.com","AWS S3":"https://aws.amazon.com/s3","AWS Lambda":"https://aws.amazon.com/lambda","Route 53":"https://aws.amazon.com/route53","CloudWatch":"https://aws.amazon.com/cloudwatch","Kubernetes":"https://kubernetes.io","Azure AKS":"https://azure.microsoft.com/products/kubernetes-service","Gemini":"https://ai.google.dev/gemini-api/docs","React":"https://react.dev","Next.js":"https://nextjs.org","pandas":"https://pandas.pydata.org","TensorFlow":"https://www.tensorflow.org","Keras":"https://keras.io","NLTK":"https://www.nltk.org","Haystack":"https://haystack.deepset.ai","FAISS":"https://github.com/facebookresearch/faiss","PostgreSQL":"https://www.postgresql.org","PyPDF2":"https://pypdf2.readthedocs.io","pdfplumber":"https://github.com/jsvine/pdfplumber","PyMuPDF":"https://pymupdf.readthedocs.io","pdf2image":"https://github.com/Belval/pdf2image","pytesseract":"https://github.com/madmaze/pytesseract","pygame":"https://www.pygame.org","Redis":"https://redis.io","FastAPI":"https://fastapi.tiangolo.com","LangChain":"https://www.langchain.com","LangGraph":"https://langchain-ai.github.io/langgraph","SearXNG":"https://docs.searxng.org","Crawlee":"https://crawlee.dev","Playwright":"https://playwright.dev","AKS":"https://azure.microsoft.com/products/kubernetes-service","RAGAS":"https://docs.ragas.io","Mem0":"https://mem0.ai","DeepEval":"https://deepeval.com","AWS EKS":"https://aws.amazon.com/eks","WebRTC":"https://webrtc.org","Cloud Run":"https://cloud.google.com/run","TypeScript":"https://www.typescriptlang.org","Stagehand":"https://www.stagehand.dev","Chromium":"https://www.chromium.org","Chrome DevTools Protocol":"https://chromedevtools.github.io/devtools-protocol","Deepgram Nova-2":"https://deepgram.com","GPT 4.1":"https://platform.openai.com/docs/models","ElevenLabs":"https://elevenlabs.io","FFmpeg":"https://ffmpeg.org","OCR":"https://en.wikipedia.org/wiki/Optical_character_recognition","GCP":"https://cloud.google.com","Postgres":"https://www.postgresql.org","MCP":"https://modelcontextprotocol.io","SSE":"https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events","RAG":"https://en.wikipedia.org/wiki/Retrieval-augmented_generation","NER":"https://en.wikipedia.org/wiki/Named-entity_recognition","JWT":"https://jwt.io","AWS":"https://aws.amazon.com","Azure":"https://azure.microsoft.com","OpenAI":"https://openai.com","EKS":"https://aws.amazon.com/eks","Dockerized":"https://www.docker.com","Gemini 2.5 Flash":"https://ai.google.dev/gemini-api/docs/models","Qwen3":"https://huggingface.co/Qwen/Qwen3-Reranker-8B","Google Cloud":"https://cloud.google.com","Weights & Biases":"https://wandb.ai"};
export const IDS: string[] = ["context","ranking","tutor","reliability","results"];
export const TOC: string[][] = [["1","Context","context"],["2","Search & ranking","ranking"],["3","BerriTutor","tutor"],["4","Reliability","reliability"],["5","Results","results"]];
export function buildData(): any {
    const pill = (k, o) => ({ ...o, ...PILL[k] });
    const lead = /^(Primary|Initiated|Proposed)/;
    return {
      stats: [
        { v: '42%', l: 'lower shortlisting time', n: 'internally measured' },
        { v: '100×1K', l: 'JD × resume benchmark', n: 'cost / latency study' },
        { v: '4+', l: 'services deployed', n: 'production delivery' },
        { v: '≈99.8%', l: 'production uptime', n: 'production reliability' }
      ],
      approach: ['Diagnosed', 'Benchmarked', 'Designed', 'Built', 'Evaluated', 'Deployed', 'Measured'].map((t, i, a) => ({ t, n: String(i + 1).padStart(2, '0'), next: i < a.length - 1 })),
      tech: [["Python","https://www.python.org"],["BM25","https://en.wikipedia.org/wiki/Okapi_BM25"],["gemini-embedding-001","https://ai.google.dev/gemini-api/docs/embeddings"],["RRF","https://plg.uwaterloo.ca/~gvcormac/cormacksigir09-rrf.pdf"],["Qwen3-Reranker","https://huggingface.co/Qwen/Qwen3-Reranker-8B"],["LambdaMART","https://www.microsoft.com/en-us/research/publication/from-ranknet-to-lambdarank-to-lambdamart-an-overview/"],["W&B","https://wandb.ai"],["LiveKit","https://livekit.io"],["Supermemory","https://supermemory.ai"],["MediaPipe","https://ai.google.dev/edge/mediapipe/solutions/guide"],["Docker","https://www.docker.com"],["GitHub Actions","https://github.com/features/actions"],["Artifact Registry","https://cloud.google.com/artifact-registry"],["GKE","https://cloud.google.com/kubernetes-engine"],["Cloud Run","https://cloud.google.com/run"]].map(([name, url], i, a) => ({ name, url, comma: i < a.length - 1 })),
      ledger: [
        ['JD-to-candidate matching & ranking', 'Architecture + implementation', 'Primary owner'],
        ['Ranking evaluation', 'Relevance evaluation', 'Primary owner'],
        ['Resume parsing / taxonomy', 'Candidate intelligence', 'Built / contributed'],
        ['BerriTutor', 'Core development', 'Initiated + led'],
        ['LLM evaluation infrastructure', 'Testing / regression', 'Proposed + implemented'],
        ['Interview integrity', 'MediaPipe-based signals', 'Contributed'],
        ['Recruiting-platform integration', 'Workflow integration', 'Integrated'],
        ['Cloud deployment', 'Production services', 'Built / deployed']
      ].map(([a, b, c]) => pill(lead.test(c) ? 'own' : 'neutral', { a, b, c })),
      problems: [
        ['Candidate ranking', 'Slow, costly and not relevant enough. I benchmarked 100 JDs against 1,000 resumes.', 'Problem', 'warn'],
        ['LLM development', 'Prompts tied to one model, results hard to compare, and a lot of manual review.', 'Problem', 'warn'],
        ['Voice tutoring', 'Personalized tutoring that remembers the student, over low-latency WebRTC.', 'Objective', 'neutral'],
        ['Integrity automation', 'Flag suspicious behavior and cut the human review load.', 'Objective', 'neutral']
      ].map(([a, b, c, k]) => pill(k, { a, b, c })),
      phases: [
        ['Prior path', ['Latency / cost / scalability issues', 'High false-positive recommendations'], 'Before', 'warn'],
        ['100 × 1,000', ['Benchmarked 100 JD × 1,000 resume', 'Exposed bottlenecks'], 'Investigation', 'neutral'],
        ['nDCG@k · MRR · Recall@k', ['Recruiter judgment set', 'Weights & Biases'], 'Evaluation', 'own']
      ].map(([a, items, c, k]) => pill(k, { a, items, c })),
      steps: [
        ['Job description', 'Turns the job description into a query for both retrieval paths.', 'One input feeds two complementary searches.'],
        ['BM25', 'Lexical retrieval over candidate text.', 'Catches exact skills and terms.'],
        ['Dense retrieval', 'Embedding search with gemini-embedding-001.', 'Catches meaning when wording differs.'],
        ['RRF', 'Fuses the two ranked lists into one top-K.', 'BM25 and dense scores are not directly comparable, so it fuses by rank.'],
        ['Qwen3 reranker', 'Cross-encoder scoring of JD and candidate pairs.', 'Accurate but costly, so it only runs on the fused top-K.'],
        ['Ranking features', 'Assembles signals for the learned ranker.', 'Bridges retrieval output and learning-to-rank input.'],
        ['LambdaMART', 'Learning-to-rank model producing the final order.', 'Trained on recruiter relevance judgments.']
      ].map(([a, b, c], i) => ({ n: String(i + 1).padStart(2, '0'), a, b, c })),
      delivery: [
        ['Persistent user context', 'Saved student context loads into each session so the tutor can personalize.', 'Context'],
        ['Low-latency voice', 'LiveKit and WebRTC carry the real-time voice.', 'Transport'],
        ['Core technology stack', 'Python · LiveKit · Supermemory · WebRTC · multi-agent harness', 'Stack']
      ].map(([a, b, c]) => pill('neutral', { a, b, c })),
      opItems: [
        ['Interview integrity', 'I added MediaPipe signals that help flag suspicious behavior in interviews.'],
        ['Repeatable evaluation', 'Datasets, evaluators, comparable scores and trace inspection.'],
        ['Containerized delivery', 'Dockerized services running on GCP.']
      ].map(([a, b]) => ({ a, b })),
      results: [
        ['Search / ranking', '42% reduction in shortlisting time', 'Internal measurement', 'own'],
        ['Search / ranking', '100 JD × 1,000 resume benchmark', 'Investigation benchmark', 'neutral'],
        ['Production', '4+ services deployed', 'Implementation', 'neutral'],
        ['Production', '≈99.8% production uptime', 'Production reliability', 'own']
      ].map(([a, b, c, k]) => pill(k, { a, b, c })),
      archDecisions: [
        ['Hybrid retrieval', 'Combine keyword and dense retrieval so each covers what the other misses.'],
        ['Multi-stage ranking', 'Retrieve widely, then run the costly scoring on a smaller set.'],
        ['Recruiter-labelled LTR', 'Train on recruiter relevance judgments, not just fixed weights.'],
        ['Model-independent evaluation', 'Share datasets and evaluators so regression checks still work when the model or provider changes.']
      ].map(([a, b]) => ({ a, b })),
      lessons: [
        { title: 'Retrieval quality is architectural.', text: 'Keyword search, dense search, reranking, learning-to-rank and evaluation work as one system.' },
        { title: 'Evaluation should survive model changes.', text: 'What matters is how the application behaves, not tests tied to one provider.' },
        { title: 'Production AI is systems engineering.', text: 'Latency, cost, deployment, observability and human workflows matter as much as the model.' }
      ].map((x, i) => ({ ...x, n: String(i + 1).padStart(2, '0') }))
    };

}
