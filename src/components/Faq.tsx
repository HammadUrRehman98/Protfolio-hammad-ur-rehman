import { faq } from '@/data/faq';
import { Reveal } from './Reveal';

/**
 * Rendered open rather than as <details> accordions. Collapsed text is still in
 * the HTML and Google reads it, but text extractors that feed answer engines
 * frequently drop or de-weight hidden content, and this section exists to be
 * quoted. The cost is page length; the benefit is that every answer is plainly
 * visible to a reader and a crawler alike.
 */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading">
      <div className="wrap">
        <p className="dept">
          <span className="dept-no">04</span>
          <span className="dept-name" id="faq-heading">
            Questions
          </span>
          <span className="dept-note">The short answers</span>
        </p>

        <div className="sec-head">
          <Reveal as="h2" className="h2">
            What people <em>ask first</em>.
          </Reveal>
          <Reveal as="p" className="lede">
            The same handful of questions come up every time, so here they are answered plainly.
          </Reveal>
        </div>

        <Reveal as="dl" className="faq">
          {faq.map((item) => (
            <div className="faq-item" key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
