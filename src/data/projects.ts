export type Category = 'client' | 'indie' | 'earlier';

export type Screenshot = {
  /** Path in /public, e.g. '/work/appellateshark.png'. */
  src: string;
  width: number;
  height: number;
  /** Describe what the screenshot shows, not just the product name. */
  alt: string;
};

export type Project = {
  /** Stable slug, used as the React key and the JSON-LD item id. */
  slug: string;
  title: string;
  /** Short label shown top-right on the card. */
  kicker: string;
  category: Category;
  /** Keyword-rich one-liner shown under the title. Also feeds JSON-LD and llms.txt. */
  description: string;
  /** One line: the problem the product solves. */
  problem?: string;
  /** One line: what I built. */
  built?: string;
  stack: string[];
  /** Live deployment. Omitted where the build is not publicly reachable. */
  url?: string;
  /** Screenshot shown at the top of the card. Omit until a real image exists. */
  image?: Screenshot;
};

/** A compact row in a list: problem, what was built and stack, without a full card. */
export type ListItem = {
  slug: string;
  title: string;
  problem: string;
  built: string;
  stack: string[];
};

/**
 * The index is grouped rather than filtered: each group is its own block with
 * its own subhead, so the whole list is visible in one pass.
 */
export const projectGroups: { category: Category; label: string; note: string }[] = [
  {
    category: 'client',
    label: 'Production systems',
    note: 'Shipped for clients and running live',
  },
  {
    category: 'indie',
    label: 'Independent builds',
    note: 'Products started and finished on my own',
  },
];

/** Homepage summary of the flagship. The full write-up is `caseStudy` below. */
export const featured = {
  label: 'Flagship case study',
  title: 'A Document AI pipeline that reads, sorts and rebuilds thousands of court documents',
  href: '/work/court-document-pipeline/',
  /** `term` is set as a run-in side head at the start of each paragraph. */
  blocks: [
    {
      term: 'The problem',
      detail:
        'Legal teams were manually collecting, reading and reformatting thousands of court PDFs into standardized records. Slow, repetitive, and easy to get wrong.',
    },
    {
      term: 'What I built',
      detail:
        'A production pipeline for legal document automation: document ingestion, information extraction and LLM-agent analysis of court decisions, then classification, standardizing, de-duplication, splitting, numbering and bookmark generation.',
    },
    {
      term: 'Human in the loop',
      detail:
        'An AI-powered PDF editor lets reviewers refine any output, with agents behind it for edits, rendering, volume assembly, OCR and final flattening. It replaced a manual process that took hours per record.',
    },
  ],
  stack: ['Python', 'Multi-agent LLM', 'OCR', 'PDF processing', 'Workflow automation'],
  credit: 'Lead developer, AIVSTUDIOS',
};

/** Full write-up rendered at /work/court-document-pipeline/. */
export const caseStudy = {
  slug: 'court-document-pipeline',
  title: 'Court-document pipeline: legal document automation with LLM agents',
  shortTitle: 'Court-document pipeline',
  description:
    'Case study: a production Document AI pipeline that ingests thousands of court PDFs, uses OCR, classification and multi-agent LLM analysis of court decisions, and adds a human-in-the-loop PDF editor for review.',
  role: 'Lead developer, AIVSTUDIOS',
  period: '2025 – 2026',
  problem:
    'Legal teams were manually collecting, reading and reformatting thousands of court PDFs into standardized records. Every record had to be read, classified, cleaned up, numbered and bookmarked by hand: slow, repetitive, and easy to get wrong.',
  constraints: [
    {
      term: 'Confidential legal data',
      detail:
        'These are real court documents. This page describes the system rather than showing client records.',
    },
    {
      term: 'Thousands of PDFs',
      detail:
        'The volume rules out manual handling, so every repeatable step has to be automated end to end.',
    },
    {
      term: 'Accuracy matters',
      detail:
        'A misclassified decision or a wrong page number ends up in a court record, so a person reviews the output before it is final.',
    },
  ],
  /** Drawn by PipelineDiagram, in this order. `human` marks the review step. */
  architecture: [
    { step: 'PDF ingest', detail: 'An automation bot pulls court PDFs in' },
    { step: 'OCR', detail: 'Scanned pages become searchable text' },
    { step: 'Classification', detail: 'Each document is classified by type' },
    { step: 'LLM agents', detail: 'Agents read and analyze court decisions' },
    { step: 'Record builder', detail: 'Standardize, de-duplicate, split, number, bookmark' },
    { step: 'PDF editor', detail: 'Human-in-the-loop review and edits', human: true },
    { step: 'Final volumes', detail: 'Volume assembly and flattening' },
  ],
  built: [
    'Document ingestion: an automation bot collects the court PDFs, so nobody downloads them by hand.',
    'Information extraction and LLM analysis of court decisions: one agent reads each decision, a second classifies it.',
    'A record builder that shrinks, standardizes, numbers, titles and splits documents, checks for duplicates, and generates bookmarks.',
    'An AI-powered PDF editor for review, with agents for edits and rendering plus automation for volume assembly, OCR and flattening.',
  ],
  humanInTheLoop:
    'Automation does the volume work; people make the final call. Every output opens in a custom PDF editor where a reviewer can correct anything the pipeline got wrong. Agents behind the editor apply the edits and re-render the document, then the volume is assembled, OCR’d and flattened into its final form.',
  outcome: 'Replaced a manual process that took hours per record.',
  // TODO: add the measured time saved per record (e.g. "from ~N hours to M minutes") once you have the number.
  stack: [
    'Python',
    'Multi-agent LLM',
    'OpenAI API',
    'OCR',
    'PDF processing',
    'Information extraction',
    'Document classification',
    'Workflow automation',
  ],
  /*
   * TODO: add three blurred or sample screenshots (never real client records).
   * Drop them in /public/work/ and fill in the entries below, e.g.
   *   { src: '/work/court-pipeline-editor.png', width: 1600, height: 1000,
   *     alt: 'Human-in-the-loop PDF editor reviewing a sample court record' }
   * Suggested slots: 1) pipeline run / dashboard, 2) PDF editor review view,
   * 3) a finished, bookmarked volume.
   */
  screenshots: [] as Screenshot[],
};

/*
 * Order: legal AI first, then healthcare, sports, commerce, then independent
 * builds. Live products carry a problem/built pair and a screenshot slot.
 *
 * TODO: add a screenshot (`image`) to each live product card once you have one.
 */
export const projects: Project[] = [
  {
    slug: 'appealmate',
    title: 'AppealMate',
    kicker: 'Legal AI',
    category: 'client',
    description:
      'Legal AI newsletter engine: multiple LLM agents turn each week’s new court decisions into consolidated arguments.',
    problem:
      'A US legal-sector client needed every new court decision across four departments turned into a weekly newsletter.',
    built:
      'Designed and shipped it alone: decision extraction, multi-agent argument building and consolidation, served through FastAPI.',
    stack: ['Python', 'FastAPI', 'Multi-agent LLM', 'Scheduling'],
    url: 'https://appealmate.com/',
  },
  {
    slug: 'appellateshark',
    title: 'AppellateShark',
    kicker: 'Legal AI',
    category: 'client',
    description:
      'Legal AI that reads appellate records and briefs to draft arguments, counter-arguments and likely questions from the bench.',
    problem:
      'Preparing an appeal means reading the full appellate record and every brief before drafting a single argument.',
    built:
      'A multi-agent LLM pipeline: one agent builds supporting and counter-arguments, a second consolidates them, a third drafts likely questions from the bench.',
    stack: ['Python', 'Multi-agent LLM', 'Long-context RAG', 'PDF processing'],
    url: 'https://appellateshark.com/',
  },
  {
    slug: 'acrodocz',
    title: 'AcroDocz',
    kicker: 'Healthcare AI',
    category: 'client',
    description:
      'Medical record summarization: AI agents condense very large patient-record PDFs into short, organized summaries.',
    problem:
      'Patient records arrive as very large PDFs that doctors and patients don’t have time to read end to end.',
    built:
      'Backend modules for the clinical document processing pipeline: OpenAI and Gemini agents that summarize the records.',
    stack: ['Python', 'OpenAI API', 'Gemini API', 'PDF processing'],
    url: 'https://acrodocz.com/',
  },
  {
    slug: 'smashlytics',
    title: 'Smashlytics',
    kicker: 'Sports',
    category: 'client',
    description:
      'Badminton club platform for clubs in Canada, with live rankings, AI player evaluation and an AI coaching assistant.',
    problem:
      'Badminton clubs in Canada need court assignment, rankings and player development in one place.',
    built:
      'The backend: court assignment, live rankings, player stats, authentication, AI player evaluation and an AI coaching assistant.',
    stack: ['Python', 'Auth', 'AI evaluation', 'Coaching agent'],
    url: 'https://smashlytics.net/',
  },
  {
    slug: 'shopiease',
    title: 'Shopiease',
    kicker: 'Commerce',
    category: 'indie',
    description:
      'E-commerce storefront built for search visibility from the ground up rather than patched on afterwards.',
    problem: 'A storefront that has to be found in search from day one, not after a later SEO pass.',
    built:
      'The storefront end to end, with search visibility designed in from the start, on Next.js with a Python and PostgreSQL backend.',
    stack: ['Next.js', 'Python', 'PostgreSQL'],
    url: 'https://shopiease.com/',
  },
  {
    slug: 'automated-invoicing-saas',
    title: 'Automated Invoicing SaaS',
    kicker: 'SaaS',
    category: 'indie',
    description:
      'A multi-tenant SaaS that generates, sends and tracks invoices, with recurring billing and payment status for every customer.',
    // TODO: replace these feature tags with the real tech stack (framework, database, hosting).
    stack: ['Multi-tenant SaaS', 'Recurring billing', 'Payment tracking'],
  },
  {
    slug: 'child-care-center-management',
    title: 'Child Care Center Management App',
    kicker: 'Operations',
    category: 'indie',
    description:
      'One app for running a child care center: enrollment, attendance, staff, parent communication and billing.',
    // TODO: replace these feature tags with the real tech stack (framework, database, hosting).
    stack: ['Enrollment', 'Attendance', 'Billing'],
  },
  {
    slug: 'intelliintern',
    title: 'IntelliIntern',
    kicker: 'Independent',
    category: 'indie',
    description:
      'An internship platform where the testing, goal assignment and evaluation are all handled by AI, so companies can run a structured program without running it manually.',
    stack: ['AI evaluation', 'Python', 'Web'],
  },
  {
    slug: 'rj-assistant',
    title: 'RJ Assistant',
    kicker: 'Final-year project',
    category: 'indie',
    description:
      'A modular, privacy-first AI assistant that works online and offline. Understands voice and text commands for productivity, entertainment and system control, with local speech recognition and a local knowledge base so it keeps working without a connection.',
    stack: ['FastAPI', 'Whisper', 'Vosk', 'Vector DB'],
  },
];

/**
 * Smaller client systems, set as a compact list under the production cards
 * instead of one-line cards.
 */
export const moreClientWork: ListItem[] = [
  {
    slug: 'ecommerce-live-analytics',
    title: 'Real-time e-commerce analytics',
    problem: 'A shopping store needed to see user activity and orders as they happen.',
    built: 'The store backend and a companion app with live user and ordering statistics.',
    stack: ['Backend', 'Mobile app', 'Realtime'],
  },
  {
    slug: 'invoice-automation',
    title: 'Invoice automation',
    problem: 'Invoices needed to go from built to sent without manual steps in between.',
    built: 'An end-to-end, multi-step build-and-send workflow across ActiveCampaign and QuickBooks.',
    stack: ['Zapier', 'ActiveCampaign', 'QuickBooks'],
  },
  {
    slug: 'court-record-builder',
    title: 'US court-record assembly',
    problem: 'A US legal use case needed court records assembled from public case data.',
    built: 'Automated record assembly that sources case data through the CourtListener API.',
    stack: ['Python', 'CourtListener API'],
  },
  {
    slug: 'face-recognition-attendance',
    title: 'Face-recognition attendance',
    problem: 'Attendance had to be logged without anyone touching a device.',
    built: 'A live-tracking attendance system on AdaFace that recognizes people as they arrive.',
    stack: ['Python', 'AdaFace', 'Computer vision'],
  },
];

/** Earlier experiments and coursework. Not counted in the hero figures. */
export const earlierWork: { slug: string; title: string; detail: string; stack: string[] }[] = [
  {
    slug: 'parkely',
    title: 'Parkely',
    detail: 'AI-driven parking management: allocation and day-to-day operations for parking spaces.',
    stack: ['AI', 'Python'],
  },
  {
    slug: 'ml-coursework-set',
    title: 'ML coursework set',
    detail:
      'Bike-sharing demand prediction, spam email detection, house price estimation, an e-commerce recommender and customer churn prediction.',
    stack: ['scikit-learn', 'NumPy', 'NLP'],
  },
];

/** Flagship + production cards + the compact client list. Drives the hero figure. */
export const productionCount =
  1 + projects.filter((p) => p.category === 'client').length + moreClientWork.length;

export const independentCount = projects.filter((p) => p.category === 'indie').length;
