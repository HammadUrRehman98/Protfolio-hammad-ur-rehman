import { independentCount, productionCount } from './projects';

/**
 * Questions and answers, written for retrieval rather than for reading order.
 *
 * Two rules govern the phrasing, and both exist because of how answer engines
 * work rather than how people read:
 *
 *  1. Every answer opens with a complete declarative sentence that names the
 *     subject. Retrieval splits a page into chunks and hands a model one chunk
 *     with no surrounding context, so "He builds…" is unusable while
 *     "Hammad Ur Rehman builds…" can be quoted directly.
 *  2. Every answer repeats the entity name instead of pronouns, and states
 *     concrete facts — tools, places, numbers — because those are the parts a
 *     model can attribute and a reviewer can verify.
 *
 * The questions themselves are phrased the way people type them into a search
 * box or an assistant, not the way a brochure would pose them.
 */
export const faq: { q: string; a: string }[] = [
  {
    q: 'Who is Hammad Ur Rehman?',
    a: 'Hammad Ur Rehman is an Applied AI Engineer based in Islamabad, Pakistan, with 2 years of experience shipping production AI. He builds multi-agent LLM systems, retrieval-augmented generation (RAG) pipelines and legal document automation at AIVSTUDIOS, where he was promoted from Junior AI Engineer to AI Engineer within six months. His production work spans legal tech, healthcare, sports and e-commerce for clients in the United States and Canada.',
  },
  {
    q: 'What does Hammad Ur Rehman do as an Applied AI Engineer?',
    a: 'Hammad Ur Rehman designs and ships Document AI systems that read documents and produce finished work from them. He led the court-document pipeline at AIVSTUDIOS, which reads, classifies, standardizes and rebuilds thousands of court PDFs into structured records through extraction, LLM analysis of court decisions, de-duplication, splitting, numbering and bookmarks. He also built its AI-powered PDF editor for human-in-the-loop review, which replaced a manual process that took hours per record. Beyond that he builds the backends and agent workflows behind legal newsletters, appellate brief analysis, medical record summarization, badminton club management and e-commerce analytics.',
  },
  {
    q: 'What programming languages and frameworks does Hammad Ur Rehman use?',
    a: 'Hammad Ur Rehman works primarily in Python, using FastAPI for REST APIs, PostgreSQL, SQLite and vector databases for storage, and Next.js and Flutter on the front end. His AI stack includes the OpenAI API, the Google Gemini API, Hugging Face Transformers, PyTorch and scikit-learn, with Whisper and Vosk for speech, AdaFace for face recognition, and OCR for document processing. He ships with Docker, Git and CI/CD, and has worked on AWS, Google Cloud and Microsoft Azure.',
  },
  {
    q: 'Is Hammad Ur Rehman a Python developer?',
    a: 'Yes. Python is Hammad Ur Rehman’s primary language and runs on the backend of every production system in his portfolio, from FastAPI services and multi-agent LLM orchestration to OCR and PDF processing pipelines, web scraping, and machine learning work with PyTorch, scikit-learn and NumPy. He started as a Python Developer Intern at OctaNet Services in 2024.',
  },
  {
    q: 'What are multi-agent systems, and what has Hammad Ur Rehman built with them?',
    a: 'A multi-agent system splits a task across several specialised LLM agents that each handle one step and pass their output to the next. Hammad Ur Rehman has built several in production: AppellateShark, where one agent builds supporting and counter-arguments from the appellate record and briefs, a second consolidates them, and a third drafts likely questions from the bench; AppealMate, a weekly legal newsletter engine where agents build and consolidate arguments from new court decisions across four departments; and AcroDocz, where OpenAI and Gemini agents summarize large patient-record PDFs.',
  },
  {
    q: 'Where is Hammad Ur Rehman based, and does he work remotely?',
    a: 'Hammad Ur Rehman is based in Islamabad, Pakistan, and is open to remote roles worldwide. His shipped projects have been delivered for clients in the United States and Canada.',
  },
  {
    q: 'How much experience does Hammad Ur Rehman have?',
    a: `Hammad Ur Rehman has 2 years of professional experience. He was a Python Developer Intern at OctaNet Services from June to September 2024, joined AIVSTUDIOS as a Junior AI Engineer in June 2025, and was promoted to AI Engineer in December 2025. He holds a BS in Computer Science from Government College University Faisalabad (2021–2025). His portfolio lists ${productionCount} production systems and ${independentCount} independent builds across legal, healthcare, sports and commerce.`,
  },
  {
    q: 'What has Hammad Ur Rehman been recognised for?',
    a: 'Hammad Ur Rehman ranked 26th globally in the opening stage of the Agentic Legal RAG Challenge with over 80% accuracy, and 57th globally in the final stage. He was also promoted from Junior AI Engineer to AI Engineer at AIVSTUDIOS within six months.',
  },
  {
    q: 'Is Hammad Ur Rehman available for hire or freelance work?',
    a: 'Yes. Hammad Ur Rehman is open to full-time remote Applied AI roles and freelance legal-AI projects, including multi-agent LLM systems, RAG pipelines, document and PDF automation, and FastAPI backend development. He can be reached at hammad@hammadurrehman.site, through the contact section of this site, or on LinkedIn.',
  },
  {
    q: 'Which live projects can I see from Hammad Ur Rehman?',
    a: 'Five of Hammad Ur Rehman’s products are publicly reachable: AppealMate (appealmate.com), a weekly legal newsletter engine; AppellateShark (appellateshark.com), legal AI for appellate arguments; AcroDocz (acrodocz.com), medical record summarization; Smashlytics (smashlytics.net), a badminton club platform; and Shopiease (shopiease.com), an e-commerce storefront.',
  },
];
