/**
 * Single source of truth for identity, contact details and SEO.
 *
 * ─────────────────────────────────────────────────────────────
 *  TODO: replace the values marked `REPLACE ME` below.
 *  Everything else on the site (nav, contact buttons, footer,
 *  <title>, canonical URLs, Open Graph tags, Twitter cards,
 *  JSON-LD structured data, sitemap.xml and robots.txt) is
 *  generated from this file. You do not need to edit anything else.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Hammad Ur Rehman',
  firstName: 'Hammad',
  lastName: 'Ur Rehman',
  role: 'AI Engineer',
  jobTitle: 'AI Engineer',

  /** Production origin, no trailing slash. Used for canonical URLs, OG tags and the sitemap. */
  url: 'https://hammadurrehman.site',

  /** REPLACE ME: the address the "Get in touch" button opens. */
  email: 'your.email@example.com',

  /** Display form of the phone number; `phoneHref` is the E.164 form for tel: links. */
  phone: '+92 306 9822189',
  phoneHref: '+923069822189',

  /** Full LinkedIn profile URL. */
  linkedin: 'https://www.linkedin.com/in/hammad-ur-rehman-ai',

  /** Full GitHub profile URL. */
  github: 'https://github.com/HammadUrRehman98',

  /** Drop the PDF in /public with this exact filename to enable the download button. */
  resume: '/Hammad_Ur_Rehman_Resume.pdf',

  /** Portrait in /public. The 560px variant is the srcset small; the 1120 is the full plate. */
  portrait: '/hammad-ur-rehman-1120.jpg',
  portraitSmall: '/hammad-ur-rehman-560.jpg',

  location: {
    city: 'Islamabad',
    region: 'Islamabad Capital Territory',
    country: 'Pakistan',
    countryCode: 'PK',
  },

  employer: {
    name: 'AIVSTUDIOS',
    url: 'https://aivstudios.com',
  },

  alumniOf: 'BS Computer Science',

  /** Spellings people actually type. Feeds the JSON-LD `alternateName` array. */
  alternateNames: ['Hammad Ur Rehman', 'Hammad-ur-Rehman', 'Hammad Rehman', 'Hammad UR Rehman'],

  /** Second job title, so "Python developer" queries have an entity to match. */
  secondaryRole: 'Python Developer',

  /** Cited by name in the JSON-LD `award` field and the FAQ. */
  award: 'Ranked 26th globally in the opening stage of the Agentic Legal RAG Challenge',

  tagline: 'I build multi-agent systems that turn thousands of raw documents into finished work.',

  /**
   * The <title>. Name first because name queries are the ones actually winnable;
   * the two role terms follow so the SERP line reads as a description as well.
   */
  seoTitle: 'Hammad Ur Rehman — AI Engineer & Python Developer',

  description:
    'Hammad Ur Rehman is an AI Engineer and Python developer in Islamabad, Pakistan, building multi-agent LLM systems, RAG pipelines and document automation with Python and FastAPI. Production AI shipped across legal tech, healthcare, sports and e-commerce for clients in the US and Canada.',

  /**
   * One sentence, no adjectives, subject-verb-object. This is the line a
   * retrieval model is most likely to lift verbatim when asked who he is, so it
   * carries the name, both roles and the location in a single quotable unit.
   */
  entitySentence:
    'Hammad Ur Rehman is an AI Engineer and Python developer based in Islamabad, Pakistan, who builds multi-agent LLM systems and document automation pipelines at AIVSTUDIOS.',

  /** Feeds <meta name="keywords"> and the JSON-LD knowsAbout array. */
  keywords: [
    'Hammad Ur Rehman',
    'AI Engineer',
    'Python Developer',
    'Machine Learning Engineer',
    'LLM Engineer',
    'Generative AI Engineer',
    'Multi-agent systems',
    'Agentic AI',
    'LLM pipelines',
    'RAG',
    'Document automation',
    'AI automation',
    'Python',
    'FastAPI',
    'Next.js',
    'Machine learning',
    'Deep learning',
    'Computer vision',
    'NLP',
    'OCR',
    'PDF automation',
    'Legal tech',
    'AI Engineer Islamabad',
    'AI Engineer Pakistan',
    'Python developer Pakistan',
    'Hire AI engineer',
    'Islamabad',
    'Pakistan',
  ],

  /** Optional: leave empty strings to omit the tag entirely. */
  twitterHandle: '',
  googleSiteVerification: '',
} as const;

export const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
] as const;

/** True while a REPLACE ME value is still in place, used to warn in the dev console. */
export const hasPlaceholders = site.email.includes('example.com');
