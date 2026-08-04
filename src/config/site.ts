/**
 * Single source of truth for identity, contact details and SEO.
 *
 * ─────────────────────────────────────────────────────────────
 *  TODO: replace the four values marked `REPLACE ME` below.
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

  /** REPLACE ME: production origin, no trailing slash. Used for canonical URLs, OG tags and the sitemap. */
  url: 'https://hammadurrehman.com',

  /** REPLACE ME: the address the "Get in touch" button opens. */
  email: 'your.email@example.com',

  /** REPLACE ME: full LinkedIn profile URL. */
  linkedin: 'https://www.linkedin.com/in/YOUR-HANDLE',

  /** REPLACE ME: full GitHub profile URL. */
  github: 'https://github.com/YOUR-HANDLE',

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

  tagline: 'I build multi-agent systems that turn thousands of raw documents into finished work.',

  description:
    'AI Engineer in Islamabad building multi-agent systems and automation pipelines that turn thousands of raw documents into finished work. Production AI across legal, healthcare, sports and commerce.',

  /** Feeds <meta name="keywords"> and the JSON-LD knowsAbout array. */
  keywords: [
    'AI Engineer',
    'Multi-agent systems',
    'LLM pipelines',
    'RAG',
    'Document automation',
    'Python',
    'FastAPI',
    'Machine learning',
    'Computer vision',
    'NLP',
    'Legal tech',
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
  { href: '#contact', label: 'Contact' },
] as const;

/** True while a REPLACE ME value is still in place, used to warn in the dev console. */
export const hasPlaceholders =
  site.email.includes('example.com') ||
  site.linkedin.includes('YOUR-HANDLE') ||
  site.github.includes('YOUR-HANDLE');
