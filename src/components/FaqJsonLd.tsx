import { site } from '@/config/site';
import { faq } from '@/data/faq';

/**
 * Structured data for /faq/ only.
 *
 * The FAQPage node has to live on the page whose visible text it mirrors:
 * Google requires the marked-up answers and the rendered answers to match
 * exactly, and both read from src/data/faq.ts so they cannot drift.
 */
export function FaqJsonLd() {
  const pageId = `${site.url}/faq/#webpage`;

  const graph = [
    {
      '@type': 'FAQPage',
      '@id': pageId,
      url: `${site.url}/faq/`,
      name: `Frequently asked questions about ${site.name}`,
      description: site.faqDescription,
      inLanguage: 'en',
      isPartOf: { '@id': `${site.url}/#website` },
      about: { '@id': `${site.url}/#person` },
      /* Voice results and answer engines use this to pick the passage to lift. */
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.faq-item'],
      },
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${site.url}/faq/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: site.name, item: `${site.url}/` },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${site.url}/faq/` },
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
