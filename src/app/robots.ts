import type { MetadataRoute } from 'next';
import { site } from '@/config/site';

// Required by `output: 'export'`.
export const dynamic = 'force-static';

/**
 * The wildcard rule already permits everything, so the named agents below grant
 * nothing extra in strict robots terms. They are listed because several are
 * opt-in by convention rather than by syntax — Google-Extended and
 * Applebot-Extended in particular gate whether a page may be used for AI
 * answers at all — and because an explicit allow is unambiguous to anyone
 * checking for their own crawler by name.
 */
const aiCrawlers = [
  'GPTBot', // OpenAI, training and retrieval
  'OAI-SearchBot', // ChatGPT search results
  'ChatGPT-User', // fetches a page a user linked in a prompt
  'ClaudeBot', // Anthropic
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended', // gates Gemini and AI Overviews
  'Applebot-Extended', // gates Apple Intelligence
  'Bingbot', // Copilot's index
  'Amazonbot',
  'meta-externalagent',
  'cohere-ai',
  'YouBot',
  'Diffbot',
  'CCBot', // Common Crawl, the corpus most open models train on
];

/** Statically emitted to /robots.txt at build time. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
