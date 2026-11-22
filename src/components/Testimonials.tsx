import { testimonials } from '@/data/testimonials';
import { Reveal } from './Reveal';

/**
 * Ready-to-use testimonials section. Renders nothing until
 * src/data/testimonials.ts has at least one real quote.
 *
 * TODO: add a real, attributed quote to src/data/testimonials.ts to show this.
 */
export function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading">
      <div className="wrap">
        <p className="dept">
          <span className="dept-name" id="testimonials-heading">
            What clients say
          </span>
        </p>
        <div className="quotes">
          {testimonials.map((t) => (
            <Reveal as="figure" className="quote" key={t.name}>
              <blockquote>
                <p>{t.quote}</p>
              </blockquote>
              <figcaption>
                {t.url ? (
                  <a href={t.url} target="_blank" rel="noopener noreferrer">
                    {t.name}
                  </a>
                ) : (
                  t.name
                )}
                <span>{t.role}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
