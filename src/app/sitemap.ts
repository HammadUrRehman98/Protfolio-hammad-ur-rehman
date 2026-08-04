import type { MetadataRoute } from 'next';
import { site } from '@/config/site';

// Required by `output: 'export'`.
export const dynamic = 'force-static';

/** Statically emitted to /sitemap.xml at build time. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
