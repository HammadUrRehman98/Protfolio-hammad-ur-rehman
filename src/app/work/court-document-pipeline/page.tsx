import type { Metadata } from 'next';
import Image from 'next/image';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { PipelineDiagram } from '@/components/PipelineDiagram';
import { hasBookingUrl, site } from '@/config/site';
import { caseStudy, featured } from '@/data/projects';

const path = featured.href;
const pageTitle = 'Court-document pipeline case study: Legal AI & Document AI';

export const metadata: Metadata = {
  title: pageTitle,
  description: caseStudy.description,
  alternates: { canonical: path },
  openGraph: {
    type: 'article',
    title: `${pageTitle} · ${site.name}`,
    description: caseStudy.description,
    url: `${site.url}${path}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${pageTitle} · ${site.name}`,
    description: caseStudy.description,
  },
};

function CaseStudyJsonLd() {
  const url = `${site.url}${path}`;
  const graph = [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: caseStudy.title,
      description: caseStudy.description,
      url,
      inLanguage: 'en',
      author: { '@id': `${site.url}/#person` },
      isPartOf: { '@id': `${site.url}/#website` },
      about: { '@id': `${url}#work` },
      keywords: caseStudy.stack.join(', '),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: site.name, item: `${site.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: `${site.url}/#projects` },
        { '@type': 'ListItem', position: 3, name: caseStudy.shortTitle, item: url },
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

export default function CourtDocumentPipeline() {
  return (
    <>
      <CaseStudyJsonLd />
      <Nav />
      <main id="main">
        <article className="case">
          <div className="wrap">
            <p className="dept">
              <span className="dept-no">Case study</span>
              <span className="dept-name">Legal AI · Document AI</span>
              <span className="dept-note">{caseStudy.role}</span>
            </p>

            <h1 className="case-title">
              A pipeline that reads, sorts and rebuilds <em>thousands of court documents</em>.
            </h1>
            <p className="lede case-lede">
              Production legal document automation: OCR, document classification and multi-agent
              LLM analysis of court decisions, with a human-in-the-loop PDF editor before anything
              is final.
            </p>

            <div className="case-block">
              <h2 className="case-h">The problem</h2>
              <p>{caseStudy.problem}</p>
            </div>

            <div className="case-block">
              <h2 className="case-h">Constraints</h2>
              <dl className="case-constraints">
                {caseStudy.constraints.map((c) => (
                  <div key={c.term}>
                    <dt>{c.term}</dt>
                    <dd>{c.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="case-block case-arch">
              <div>
                <h2 className="case-h">Architecture</h2>
                <p>
                  Seven stages, each doing one job. Automation and LLM agents handle the volume;
                  a reviewer signs off in the PDF editor before volumes are assembled.
                </p>
                <ol className="case-steps">
                  {caseStudy.architecture.map((s) => (
                    <li key={s.step}>
                      <strong>{s.step}.</strong> {s.detail}.
                    </li>
                  ))}
                </ol>
              </div>
              <PipelineDiagram />
            </div>

            <div className="case-block">
              <h2 className="case-h">What I built</h2>
              <ul className="case-list">
                {caseStudy.built.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="case-block">
              <h2 className="case-h">Human-in-the-loop review</h2>
              <p>{caseStudy.humanInTheLoop}</p>
            </div>

            {/* Screenshot slots: TODO in src/data/projects.ts (caseStudy.screenshots). */}
            {caseStudy.screenshots.length > 0 && (
              <div className="case-block">
                <h2 className="case-h">Screenshots</h2>
                <div className="case-shots">
                  {caseStudy.screenshots.map((shot) => (
                    <Image
                      key={shot.src}
                      src={shot.src}
                      width={shot.width}
                      height={shot.height}
                      alt={shot.alt}
                      sizes="(max-width: 860px) 100vw, 1000px"
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="case-block">
              <h2 className="case-h">Outcome</h2>
              {/* TODO: add the measured time saved per record next to this line. */}
              <p className="case-outcome">{caseStudy.outcome}</p>
            </div>

            <div className="case-block">
              <h2 className="case-h">Stack</h2>
              <p className="entry-stack case-stack">
                {caseStudy.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </p>
            </div>

            <div className="case-foot">
              <p>Need a document pipeline like this? {site.availability}</p>
              <div className="hero-links">
                <a className="tlink" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                {hasBookingUrl && (
                  <a
                    className="tlink tlink-muted"
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a call
                  </a>
                )}
                <a className="tlink tlink-muted" href="/#projects">
                  All projects
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
