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
    a: 'Hammad Ur Rehman is an AI Engineer and Python developer based in Islamabad, Pakistan. He builds multi-agent LLM systems, retrieval-augmented generation pipelines and large-scale document automation at AIVSTUDIOS, where he was promoted from Junior AI Engineer within six months. His production work spans legal technology, healthcare, sports management and e-commerce for clients in the United States and Canada.',
  },
  {
    q: 'What does Hammad Ur Rehman do as an AI engineer?',
    a: 'Hammad Ur Rehman designs and ships systems that read documents and produce finished work from them. He is the lead developer of a court PDF pipeline that processes thousands of documents through automated extraction, LLM-agent analysis of court decisions, classification, numbering, de-duplication, record building and bookmark generation, replacing a manual process that previously took hours per record. He also builds the backends and agent workflows behind legal newsletters, medical record summarization, badminton club management and e-commerce analytics.',
  },
  {
    q: 'What programming languages and frameworks does Hammad Ur Rehman use?',
    a: 'Hammad Ur Rehman works primarily in Python, using FastAPI for backend services, PostgreSQL and vector databases for storage, and Next.js and Flutter on the front end. His AI stack includes the OpenAI API, Google Gemini, Hugging Face Transformers and Rasa, with Whisper and Vosk for speech, AdaFace for face recognition, and OCR pipelines for document processing.',
  },
  {
    q: 'Is Hammad Ur Rehman a Python developer?',
    a: 'Yes. Python is Hammad Ur Rehman’s primary language and the one every production system in his portfolio is written in, from FastAPI services and multi-agent LLM orchestration to OCR and PDF processing pipelines, web scraping, and machine learning work with scikit-learn and NumPy.',
  },
  {
    q: 'What are multi-agent systems, and what has Hammad Ur Rehman built with them?',
    a: 'A multi-agent system splits a task across several specialised LLM agents that each handle one step and pass their output to the next. Hammad Ur Rehman has built several in production: an appellate engine where one agent constructs supporting and counter arguments from the record on appeal and the parties’ briefs, a second consolidates them, and a third drafts the questions a judge would ask; a weekly legal newsletter pipeline where agents build and consolidate arguments across four court departments; and a medical records pipeline where OpenAI and Gemini agents condense large patient PDFs into readable summaries.',
  },
  {
    q: 'Where is Hammad Ur Rehman based, and does he work remotely?',
    a: 'Hammad Ur Rehman is based in Islamabad, Pakistan, and works remotely with teams anywhere. His shipped projects have been delivered for clients in the United States and Canada.',
  },
  {
    q: 'How much experience does Hammad Ur Rehman have?',
    a: 'Hammad Ur Rehman has over a year of professional experience shipping production AI, beginning as a Junior AI Engineer at AIVSTUDIOS in June 2025 and being promoted to AI Engineer in December 2025. He holds a BS in Computer Science completed in 2025, and has delivered more than fifteen systems across four industries.',
  },
  {
    q: 'What has Hammad Ur Rehman been recognised for?',
    a: 'Hammad Ur Rehman ranked 26th globally in the opening stage of the Agentic Legal RAG Challenge at over 80% accuracy, and 57th globally in the final stage. He was also promoted from Junior AI Engineer to AI Engineer at AIVSTUDIOS within six months.',
  },
  {
    q: 'Is Hammad Ur Rehman available for hire or freelance work?',
    a: 'Yes. Hammad Ur Rehman is open to AI engineering and Python development work, and takes on projects involving multi-agent systems, LLM pipelines, RAG, document and PDF automation, and backend API development. He can be reached at hammad@hammadurrehman.site, through the contact section of this site, or on LinkedIn.',
  },
  {
    q: 'Which live projects can I see from Hammad Ur Rehman?',
    a: 'Several of Hammad Ur Rehman’s systems are publicly reachable: Appellate Shark (appellateshark.com) for appellate argument analysis, AppealMate (appealmate.com) for the weekly legal newsletter engine, AcroDocz (acrodocz.com) for medical record summarization, Smashlytics (smashlytics.net) for badminton club management, and two independent builds at wholesale.agenticstacksystem.com and freelanceagent.agenticstacksystem.com.',
  },
];
