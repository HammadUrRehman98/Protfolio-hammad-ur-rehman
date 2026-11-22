import { site } from '@/config/site';
import { caseStudy, featured, projects } from '@/data/projects';
import { skillGroups } from '@/data/content';

/**
 * Structured data for rich results. Emits a single @graph containing:
 *   Person       the knowledge-panel entity (name, role, employer, skills, profiles)
 *   WebSite      site-level entity
 *   ProfilePage  declares this page as the Person's profile, its mainEntity
 *   ItemList     the project list, so each build is individually addressable;
 *                live products are SoftwareApplication, the rest CreativeWork
 *
 * Validate at https://search.google.com/test/rich-results after deploying.
 */
export function JsonLd() {
  const personId = `${site.url}/#person`;
  const siteId = `${site.url}/#website`;

  // Evaluated once per build. The site is statically exported, so "when this
  // page was last built" is exactly what `dateModified` should report.
  const buildDate = new Date().toISOString();

  const sameAs = [site.linkedin, site.github];

  const graph = [
    {
      '@type': 'Person',
      '@id': personId,
      name: site.name,
      alternateName: [...site.alternateNames].filter((n) => n !== site.name),
      givenName: site.firstName,
      familyName: site.lastName,
      jobTitle: site.jobTitle,
      description: site.entitySentence,
      disambiguatingDescription: site.description,
      award: site.award,
      url: site.url,
      image: {
        '@type': 'ImageObject',
        '@id': `${site.url}/#portrait`,
        url: `${site.url}${site.portrait}`,
        contentUrl: `${site.url}${site.portrait}`,
        width: 1120,
        height: 1120,
        caption: `${site.name}, ${site.role}`,
      },
      ...(sameAs.length ? { sameAs } : {}),
      email: `mailto:${site.email}`,
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
        url: site.employer.url,
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: site.education.school,
      },
      /*
       * `hasOccupation` is what lets a search engine answer "what does this
       * person do" with a category rather than a job title string. The ONET
       * code is the standard identifier for software developers, which is how
       * the role gets tied to an established taxonomy instead of free text.
       */
      hasOccupation: [
        {
          '@type': 'Occupation',
          name: site.jobTitle,
          occupationalCategory: '15-1252.00',
          skills: skillGroups.flatMap((group) => group.items).join(', '),
          occupationLocation: {
            '@type': 'City',
            name: site.location.city,
          },
        },
      ],
      homeLocation: {
        '@type': 'City',
        name: `${site.location.city}, ${site.location.country}`,
      },
      knowsAbout: [...site.knowsAbout],
      // English only: it is the one language the résumé evidences. Nationality
      // is deliberately absent too — the city is a fact, citizenship is not.
      knowsLanguage: [{ '@type': 'Language', name: 'English', alternateName: 'en' }],
      mainEntityOfPage: { '@id': `${site.url}/#profilepage` },
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
      name: site.seoTitle,
      description: site.description,
      isPartOf: { '@id': siteId },
      about: { '@id': personId },
      mainEntity: { '@id': personId },
      inLanguage: 'en',
      dateModified: buildDate,
      primaryImageOfPage: { '@id': `${site.url}/#portrait` },
      /*
       * Names the elements worth reading aloud or lifting as an answer. Voice
       * results and answer engines use it to pick the passage; without it they
       * fall back to whatever text happens to come first in the document.
       */
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.statement', '.hero-bio'],
      },
    },
    {
      '@type': 'ItemList',
      '@id': `${site.url}/#projects`,
      name: 'Selected work',
      numberOfItems: projects.length + 1,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'CreativeWork',
            '@id': `${site.url}${featured.href}#work`,
            name: caseStudy.shortTitle,
            description: caseStudy.description,
            url: `${site.url}${featured.href}`,
            creator: { '@id': personId },
            keywords: caseStudy.stack.join(', '),
          },
        },
        ...projects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 2,
          item: project.url
            ? {
                '@type': 'SoftwareApplication',
                '@id': `${site.url}/#${project.slug}`,
                name: project.title,
                description: project.description,
                url: project.url,
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Web',
                creator: { '@id': personId },
                keywords: project.stack.join(', '),
              }
            : {
                '@type': 'CreativeWork',
                '@id': `${site.url}/#${project.slug}`,
                name: project.title,
                description: project.description,
                creator: { '@id': personId },
                keywords: project.stack.join(', '),
              },
        })),
      ],
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
