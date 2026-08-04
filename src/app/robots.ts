import type { MetadataRoute } from 'next';
import { site } from '@/config/site';

// Required by `output: 'export'`.
export const dynamic = 'force-static';

/** Statically emitted to /robots.txt at build time. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
