import { independentCount, productionCount } from './projects';

/*
 * The two counts are derived from src/data/projects.ts, so they always match
 * what the projects section actually lists.
 */
export const figures = [
  { value: '2', suffix: '', label: 'Years shipping production AI' },
  { value: String(productionCount), suffix: '', label: 'Production systems' },
  { value: String(independentCount), suffix: '', label: 'Independent builds' },
  // TODO: add the total team count to the label once known, e.g. "Globally, of N teams".
  { value: '26', suffix: 'th', label: 'Globally · Agentic Legal RAG Challenge' },
];

export const skillGroups = [
  {
    title: 'LLMs & AI agents',
    items: [
      'LLMs',
      'AI agents',
      'Multi-agent systems',
      'Agentic workflows',
      'RAG',
      'Prompt engineering',
    ],
  },
  {
    title: 'Models & APIs',
    items: ['OpenAI API', 'Google Gemini API', 'Hugging Face Transformers'],
  },
  {
    title: 'Machine learning',
    items: [
      'PyTorch',
      'scikit-learn',
      'Machine learning',
      'Deep learning',
      'NLP',
      'Computer vision',
    ],
  },
  {
    title: 'Document AI',
    items: [
      'PDF processing',
      'OCR',
      'Information extraction',
      'Document classification',
      'Summarization',
    ],
  },
  {
    title: 'Backend & data',
    items: ['Python', 'FastAPI', 'REST APIs', 'SQL', 'PostgreSQL', 'SQLite', 'Vector databases'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['Docker', 'AWS', 'Google Cloud (GCP)', 'Microsoft Azure', 'Git', 'GitHub', 'CI/CD'],
  },
  {
    title: 'Frontend & mobile',
    items: ['Next.js', 'Flutter'],
  },
  {
    title: 'Speech & vision',
    items: ['Whisper', 'Vosk', 'gTTS', 'pyttsx3', 'AdaFace'],
  },
  {
    title: 'Automation & integrations',
    items: [
      'Zapier',
      'ActiveCampaign',
      'QuickBooks',
      'CourtListener API',
      'Web scraping',
      'Email automation',
    ],
  },
];

export type TimelineEntry = {
  date: string;
  title: string;
  org?: string;
  detail: string;
  /** Shows a small "Promoted" label next to the title. */
  promoted?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    date: 'Dec 2025 – Nov 2026',
    title: 'AI Engineer',
    org: 'AIVSTUDIOS, Islamabad',
    detail:
      'Led the court-document pipeline and built its human-in-the-loop AI PDF editor. Designed and shipped AppealMate alone, built AppellateShark, backend modules for AcroDocz and the Smashlytics backend, plus business automation for clients in the US and Canada.',
    promoted: true,
  },
  {
    date: 'Jun 2025 – Dec 2025',
    title: 'Junior AI Engineer',
    org: 'AIVSTUDIOS, Islamabad',
    detail:
      'LLM backend features, FastAPI services and automation pipelines, containerized with Docker and shipped through Git-based CI/CD. Promoted within six months.',
  },
  {
    date: 'Jun 2024 – Sep 2024',
    title: 'Python Developer Intern',
    org: 'OctaNet Services, remote (India)',
    detail: 'Python development internship.',
  },
  {
    date: '2025',
    title: 'Agentic Legal RAG Challenge',
    // TODO: add the total number of competing teams, e.g. "26th of N teams".
    detail: '26th globally in the opening stage (80%+ accuracy) and 57th in the final stage.',
  },
  {
    date: '2021 – 2025',
    title: 'BS Computer Science',
    org: 'Government College University Faisalabad',
    detail:
      'Machine learning, computer vision and automation throughout. Final-year project: RJ Assistant, an offline-capable AI assistant.',
  },
];

export const certifications = [
  { name: 'Deep Learning Prerequisites: The NumPy Stack in Python, DeepLearningCourses', when: '2025' },
  { name: 'Python (Basic), HackerRank', when: '2025' },
];
