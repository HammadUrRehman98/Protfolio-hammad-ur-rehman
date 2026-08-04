export type Category = 'client' | 'indie' | 'academic';

export type Project = {
  /** Stable slug, used as the React key and the JSON-LD item id. */
  slug: string;
  title: string;
  /** Short label shown top-right on the card. */
  kicker: string;
  category: Category;
  description: string;
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
  {
    category: 'academic',
    label: 'Research and coursework',
    note: 'Where the fundamentals were built',
  },
];

export const featured = {
  label: 'Flagship project',
  title: 'A pipeline that reads, sorts and rebuilds thousands of court documents',
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
        'An automation bot pulls the documents in. One agent reads each court decision, a second classifies it, then an automation layer handles the shrinking, standardizing, numbering, titling, splitting, duplicate checks, record building and bookmark generation.',
    },
    {
      term: 'Then the humans step in',
      detail:
        'A custom PDF editor lets users refine any output, with agents behind it handling edits and rendering, plus automation for volume assembly, OCR and final flattening.',
    },
  ],
  stack: ['Python', 'Multi-agent LLM', 'OCR', 'PDF engine', 'Workflow automation'],
  credit: 'Lead developer',
};

export const projects: Project[] = [
  {
    slug: 'weekly-legal-newsletter-engine',
    title: 'Weekly Legal Newsletter Engine',
    kicker: 'Legal',
    category: 'client',
    description:
      'Runs every week once new court decisions land. Pulls case data across four departments, then agents build arguments, consolidate them and assemble a finished newsletter served over an API. Built end to end by me.',
    stack: ['Python', 'FastAPI', 'Agents', 'Scheduling'],
  },
  {
    slug: 'patient-records-summarizer',
    title: 'Patient Records Summarizer',
    kicker: 'Health',
    category: 'client',
    description:
      'Users upload very large patient record PDFs; multiple agents condense them into short, organized summaries doctors and patients can actually read. I built a backend module of the pipeline.',
    stack: ['OpenAI', 'Gemini', 'Python', 'PDF'],
  },
  {
    slug: 'badminton-club-platform',
    title: 'Badminton Club Platform',
    kicker: 'Sports',
    category: 'client',
    description:
      'Court assignment, live rankings and player statistics for clubs in Canada, with full authentication, AI-based player evaluation and an AI coach that guides players on what to work on next.',
    stack: ['Python', 'Auth', 'AI evaluation', 'Coaching agent'],
  },
  {
    slug: 'commerce-platform-live-ops',
    title: 'Commerce Platform with Live Ops',
    kicker: 'Commerce',
    category: 'client',
    description:
      'Shopping store backend and companion app showing real-time user activity and live ordering statistics as they happen.',
    stack: ['Backend', 'Mobile app', 'Realtime'],
  },
  {
    slug: 'invoice-automation',
    title: 'Invoice Automation',
    kicker: 'Ops',
    category: 'client',
    description:
      'An end-to-end invoice build-and-send flow as a multi-step, multi-zap workflow wired into ActiveCampaign and QuickBooks.',
    stack: ['Zapier', 'ActiveCampaign', 'QuickBooks'],
  },
  {
    slug: 'court-record-builder',
    title: 'Court Record Builder',
    kicker: 'Legal',
    category: 'client',
    description:
      'Automated record assembly for a US legal use case, sourcing case data through the CourtListener API.',
    stack: ['Python', 'CourtListener API'],
  },
  {
    slug: 'face-recognition-attendance',
    title: 'Face-Recognition Attendance',
    kicker: 'Vision',
    category: 'client',
    description:
      'Attendance system with live tracking built on AdaFace. It recognizes people as they arrive and logs it without anyone touching a device.',
    stack: ['AdaFace', 'Computer vision', 'Python'],
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
    slug: 'parkely',
    title: 'Parkely',
    kicker: 'Independent',
    category: 'indie',
    description: 'AI-driven parking management: allocation and day-to-day operations for parking spaces.',
    stack: ['AI', 'Python'],
  },
  {
    slug: 'wholesale-management-system',
    title: 'Wholesale Management System',
    kicker: 'Independent',
    category: 'indie',
    description:
      'Local wholesalers were losing track of inventory and order bookers. I built the full management system plus a Flutter app so order bookers can work from the field.',
    stack: ['Flutter', 'Python', 'PostgreSQL'],
  },
  {
    slug: 'lead-generation-engine',
    title: 'Lead Generation Engine',
    kicker: 'Independent',
    category: 'indie',
    description:
      'Scrapes and organizes leads, checks whether each business is real and active, then feeds automated outreach.',
    stack: ['Scraping', 'Validation', 'Email automation'],
  },
  {
    slug: 'seo-ecommerce-store',
    title: 'E-Commerce Store',
    kicker: 'Independent',
    category: 'indie',
    description:
      'A storefront built for search visibility from the ground up rather than patched on afterwards.',
    stack: ['Next.js', 'Python', 'PostgreSQL'],
  },
  {
    slug: 'rj-assistant',
    title: 'RJ Assistant',
    kicker: 'Final-year project',
    category: 'academic',
    description:
      'A modular, privacy-first AI assistant that works online and offline. Understands voice and text commands for productivity, entertainment and system control, with local speech recognition and a local knowledge base so it keeps working without a connection.',
    stack: ['FastAPI', 'Rasa', 'Whisper', 'Vosk', 'Vector DB'],
  },
  {
    slug: 'ml-coursework-set',
    title: 'ML Coursework Set',
    kicker: 'Academic',
    category: 'academic',
    description:
      'Bike-sharing demand prediction, spam email detection, house price estimation, an e-commerce recommender and customer churn prediction.',
    stack: ['scikit-learn', 'NumPy', 'NLP'],
  },
];
