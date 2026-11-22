import { hasBookingUrl, site } from '@/config/site';
import { figures } from '@/data/content';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <p className="meta">
          {site.role} · {site.location.city}, {site.location.country}
        </p>

        {/* the portrait sits in front of the nameplate, on the same line */}
        <div className="nameline">
          <img
            className="portrait"
            src={site.portraitSmall}
            srcSet={`${site.portraitSmall} 560w, ${site.portrait} 1120w`}
            sizes="200px"
            width={1120}
            height={1120}
            alt={`${site.name}, ${site.role}`}
            fetchPriority="high"
            decoding="async"
          />
          <h1 className="nameplate">{site.name}</h1>
        </div>

        <div className="double-rule" role="presentation" />

        {/* the figures sit in the column the statement leaves empty */}
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="statement">
              I build systems that read <em>thousands</em>{' '}
              of documents so people don&rsquo;t have to.
            </p>

            <p className="hero-bio">
              2 years shipping production AI at {site.employer.name}: multi-agent LLM pipelines for
              legal document automation, medical record summarization, and platforms that run
              themselves.
            </p>

            <p className="hero-avail">{site.availability}</p>

            <div className="hero-links">
              <a className="tlink tlink-primary" href="#projects">
                View my work
              </a>
              <a className="tlink" href={site.resume} download={site.resumeFilename}>
                Download CV
              </a>
              {/* TODO: set site.bookingUrl in src/config/site.ts; this link appears once it's real. */}
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
            </div>
          </div>

          <Reveal as="dl" className="figures">
            {figures.map((figure) => (
              <div className="figure" key={figure.label}>
                <dt>{figure.label}</dt>
                <dd>
                  {figure.value}
                  {figure.suffix && <sup>{figure.suffix}</sup>}
                </dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </header>
  );
}
