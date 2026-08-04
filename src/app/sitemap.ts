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
      // Declaring the portrait here is what gets it into Google Images, where a
      // name query for a person very often surfaces a face before a page.
      images: [`${site.url}${site.portrait}`, `${site.url}/opengraph-image`],
    },
  ];
}
