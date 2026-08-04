import { site } from '@/config/site';
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
              A year shipping production AI at {site.employer.name}: pipelines for legal record
              building, clinical summarization, and platforms that run themselves.
            </p>

            <div className="hero-links">
              <a className="tlink" href="#projects">
                See the work <span aria-hidden="true">↓</span>
              </a>
              <a className="tlink tlink-muted" href="#contact">
                Get in touch <span aria-hidden="true">→</span>
              </a>
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
