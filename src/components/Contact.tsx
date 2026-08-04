import { site } from '@/config/site';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="wrap">
        <p className="dept">
          <span className="dept-no">04</span>
          <span className="dept-name" id="contact-heading">
            Contact
          </span>
          <span className="dept-note">Open to work</span>
        </p>

        {/* the pitch holds the left column, the details fill the right */}
        <div className="contact-grid">
          <Reveal>
            <h2 className="contact-title">
              Got something <em>worth automating?</em>
            </h2>
            <p>
              Tell me what your team is doing by hand that a pipeline should be doing instead.
              I&rsquo;ll tell you honestly whether it&rsquo;s worth building.
            </p>
          </Reveal>

          <Reveal className="contact-details">
            <p className="meta">Email</p>
            <a className="contact-email" href={`mailto:${site.email}`}>
              {site.email}
            </a>

            <p className="meta">Phone</p>
            <a className="contact-phone" href={`tel:${site.phoneHref}`}>
              {site.phone}
            </a>

            <p className="meta">Elsewhere</p>
            <div className="elsewhere">
              <a
                className="tlink tlink-muted"
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer me"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a
                className="tlink tlink-muted"
                href={site.github}
                target="_blank"
                rel="noopener noreferrer me"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a className="tlink tlink-muted" href={site.resume} download>
                Résumé <span aria-hidden="true">↓</span>
              </a>
            </div>

            <p className="meta">Based in</p>
            <p className="contact-place">
              {site.location.city}, {site.location.country}. Working with teams anywhere.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
