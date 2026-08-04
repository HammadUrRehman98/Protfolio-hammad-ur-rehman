import { faq } from '@/data/faq';
import { site } from '@/config/site';
import { Reveal } from './Reveal';

/**
 * The FAQ body, rendered on its own route rather than inside the portfolio page.
 *
 * Answers stay open rather than sitting in <details> accordions. Collapsed text
 * is still in the HTML and Google reads it, but text extractors that feed answer
 * engines frequently drop or de-weight hidden content, and this page exists to
 * be quoted. On a dedicated route that page length costs the portfolio nothing.
 */
export function Faq() {
  return (
    <section id="faq" className="faq-page" aria-labelledby="faq-heading">
      <div className="wrap">
        <p className="dept">
          <span className="dept-no">FAQ</span>
          <span className="dept-name">Questions</span>
          <span className="dept-note">The short answers</span>
        </p>

        <div className="sec-head">
          <h1 className="h2" id="faq-heading">
            What people <em>ask first</em>.
          </h1>
          <p className="lede">
            The same handful of questions come up every time, so here they are answered plainly.
            For the work itself, see the <a href="/#projects">projects</a>.
          </p>
        </div>

        <Reveal as="dl" className="faq">
          {faq.map((item) => (
            <div className="faq-item" key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </Reveal>

        <div className="faq-foot">
          <p className="faq-foot-note">
            Still something unanswered? Ask directly, and expect an honest answer about whether
            it is worth building.
          </p>
          <div className="hero-links">
            <a className="tlink" href={`mailto:${site.email}`}>
              {site.email} <span aria-hidden="true">→</span>
            </a>
            <a className="tlink tlink-muted" href="/">
              Back to the portfolio <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
