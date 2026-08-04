import { site } from '@/config/site';
import { projects } from '@/data/projects';
import { skillGroups } from '@/data/content';

/**
 * Structured data for rich results. Emits a single @graph containing:
 *   Person       the knowledge-panel entity (name, role, employer, skills, profiles)
 *   WebSite      site-level entity
 *   ProfilePage  declares this page as the Person's profile, its mainEntity
 *   ItemList     the project list, so each build is individually addressable
 *
 * Validate at https://search.google.com/test/rich-results after deploying.
 */
export function JsonLd() {
  const personId = `${site.url}/#person`;
  const siteId = `${site.url}/#website`;

  const sameAs = [site.linkedin, site.github];

  const graph = [
    {
      '@type': 'Person',
      '@id': personId,
      name: site.name,
      givenName: site.firstName,
      familyName: site.lastName,
      jobTitle: site.jobTitle,
      description: site.description,
      url: site.url,
      image: {
        '@type': 'ImageObject',
        url: `${site.url}${site.portrait}`,
        width: 1120,
        height: 1120,
        caption: `${site.name}, ${site.role}`,
      },
      ...(sameAs.length ? { sameAs } : {}),
      ...(site.email.includes('example.com') ? {} : { email: `mailto:${site.email}` }),
      telephone: site.phoneHref,
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.location.city,
        addressRegion: site.location.region,
        addressCountry: site.location.countryCode,
      },
      worksFor: {
        '@type': 'Organization',
        name: site.employer.name,
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: site.alumniOf,
      },
      knowsAbout: skillGroups.flatMap((group) => group.items),
      knowsLanguage: ['en'],
    },
    {
      '@type': 'WebSite',
      '@id': siteId,
      url: site.url,
      name: `${site.name} · ${site.role}`,
      description: site.description,
      inLanguage: 'en',
      publisher: { '@id': personId },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${site.url}/#profilepage`,
      url: site.url,
      name: `${site.name} · ${site.role}`,
      isPartOf: { '@id': siteId },
      about: { '@id': personId },
      mainEntity: { '@id': personId },
      inLanguage: 'en',
    },
    {
      '@type': 'ItemList',
      '@id': `${site.url}/#projects`,
      name: 'Selected work',
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          '@id': `${site.url}/#${project.slug}`,
          name: project.title,
          description: project.description,
          ...(project.url ? { url: project.url } : {}),
          creator: { '@id': personId },
          keywords: project.stack.join(', '),
        },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // Content is authored in this repo, not user input, so it is safe to inline.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  );
}
