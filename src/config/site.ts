/**
 * Single source of truth for identity, contact details and SEO.
 *
 * ─────────────────────────────────────────────────────────────
 *  Everything on the site (nav, contact buttons, footer,
 *  <title>, canonical URLs, Open Graph tags, Twitter cards,
 *  JSON-LD structured data, sitemap.xml and robots.txt) is
 *  generated from this file. You do not need to edit anything else.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Hammad Ur Rehman',
  firstName: 'Hammad',
  lastName: 'Ur Rehman',
  role: 'Applied AI Engineer',
  jobTitle: 'Applied AI Engineer',

  /** The CV headline. Used under the nameplate on the OG card and in llms.txt. */
  headline: 'Applied AI Engineer · Agentic LLM Systems, RAG & Legal AI',

  /** Production origin, no trailing slash. Used for canonical URLs, OG tags and the sitemap. */
  url: 'https://hammadurrehman.site',

  /** The address every "Get in touch" link on the site opens. */
  email: 'hammad@hammadurrehman.site',

  /** Display form of the phone number; `phoneHref` is the E.164 form for tel: links. */
  phone: '+92 306 9822189',
  phoneHref: '+923069822189',

  /** Full LinkedIn profile URL. */
  linkedin: 'https://www.linkedin.com/in/hammad-ur-rehman-ai',

  /** Full GitHub profile URL. */
  github: 'https://github.com/HammadUrRehman98',

  /*
   * The PDF in /public. Named for what it is, with no spaces so the URL needs
   * no escaping; every previous filename 301s to it from public/_redirects.
   */
  resume: '/Hammad-Ur-Rehman-Applied-AI-Engineer-CV.pdf',
  resumeFilename: 'Hammad Ur Rehman - Applied AI Engineer CV.pdf',

  /*
   * TODO: replace with your real Calendly (or other booking) URL.
   * The "Book a call" link only renders once this is a real https:// URL, so
   * the placeholder can never ship as a broken link.
   */
  bookingUrl: 'TODO_CALENDLY_URL',

  /*
   * TODO: set your working-hours overlap, e.g. 'Overlap with US Eastern and UK hours.'
   * The line in the contact section stays hidden while this is empty.
   */
  timezoneOverlap: '',

  /** One line under the hero subheadline and in the contact section. */
  availability: 'Open to full-time remote Applied AI roles and freelance legal-AI projects.',

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

  education: {
    degree: 'BS Computer Science',
    school: 'Government College University Faisalabad',
    years: '2021–2025',
  },

  /** Spellings people actually type. Feeds the JSON-LD `alternateName` array. */
  alternateNames: ['Hammad Ur Rehman', 'Hammad-ur-Rehman', 'Hammad Rehman', 'Hammad UR Rehman'],

  /*
   * Cited in the JSON-LD `award` field, the FAQ and the experience timeline.
   * TODO: add the total number of competing teams once you have it,
   * e.g. "26th of N teams globally".
   */
  award:
    'Agentic Legal RAG Challenge: 26th globally in the opening stage (80%+ accuracy) and 57th in the final stage',

  tagline: 'I build multi-agent systems that turn thousands of raw documents into finished work.',

  /** The <title> for the home page. */
  seoTitle: 'Hammad Ur Rehman | Applied AI Engineer | LLM Agents, RAG & Legal AI',

  /** Meta description, about 155 characters. */
  description:
    'Applied AI Engineer building production multi-agent LLM systems, RAG pipelines and legal document automation for US and Canadian clients. Open to remote roles.',

  /** Meta description for /faq/, which has its own title and canonical. */
  faqDescription:
    'Answers to the questions people ask most about Hammad Ur Rehman, Applied AI Engineer: what he builds, his LLM, RAG and Python stack, the legal AI systems he has shipped, and his availability.',

  /**
   * One sentence, no adjectives, subject-verb-object. This is the line a
   * retrieval model is most likely to lift verbatim when asked who he is, so it
   * carries the name, the role and the location in a single quotable unit.
   */
  entitySentence:
    'Hammad Ur Rehman is an Applied AI Engineer based in Islamabad, Pakistan, who builds multi-agent LLM systems, RAG pipelines and legal document automation at AIVSTUDIOS.',

  /**
   * Feeds the JSON-LD `knowsAbout` array. The `keywords` meta tag was removed on
   * purpose: search engines ignore it and it read as keyword stuffing.
   */
  knowsAbout: [
    'Applied AI',
    'Large Language Models (LLMs)',
    'AI Agents',
    'Multi-Agent Systems',
    'Agentic Workflows',
    'Retrieval-Augmented Generation (RAG)',
    'Prompt Engineering',
    'Vector Databases',
    'Document AI',
    'Legal AI',
    'Legal Tech',
    'Information Extraction',
    'OCR',
    'Document Classification',
    'Summarization',
    'Medical Record Summarization',
    'Python',
    'FastAPI',
    'Machine Learning',
    'Deep Learning',
    'NLP',
    'Computer Vision',
  ],

  /** Optional: leave empty strings to omit the tag entirely. */
  twitterHandle: '',
  googleSiteVerification: '',
} as const;

/** True once `site.bookingUrl` holds a real link rather than the TODO placeholder. */
export const hasBookingUrl = site.bookingUrl.startsWith('https://');

/*
 * Root-relative rather than bare fragments, so the same links work from /faq/
 * and the case-study page as well as from the portfolio page.
 */
export const navLinks = [
  { href: '/#projects', label: 'Projects' },
  { href: '/#expertise', label: 'Expertise' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' },
] as const;

/** Bottom navigation. The FAQ and the case study live here rather than in the masthead. */
export const footerLinks = [
  ...navLinks,
  { href: '/work/court-document-pipeline/', label: 'Case study' },
  { href: '/faq/', label: 'FAQ' },
] as const;
