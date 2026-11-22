import { certifications, timeline } from '@/data/content';
import { Reveal } from './Reveal';

export function Path() {
  return (
    <section id="experience" aria-labelledby="path-heading">
      <div className="wrap">
        <p className="dept">
          <span className="dept-no">03</span>
          <span className="dept-name" id="path-heading">
            Experience
          </span>
          <span className="dept-note">Islamabad, Pakistan</span>
        </p>

        <div className="sec-head">
          <Reveal as="h2" className="h2">
            How I <em>got here</em>.
          </Reveal>
          <Reveal as="p" className="lede">
            2 years of professional work, from a Python internship to Applied AI Engineer, on top
            of a computer science degree spent on machine learning, vision and automation.
          </Reveal>
        </div>

        <div className="two-col">
          <Reveal className="history">
            {timeline.map((entry) => (
              <article className="history-item" key={entry.title}>
                <p className="entry-year">{entry.date}</p>
                <h3>
                  {entry.title}
                  {entry.promoted && <span className="promoted">Promoted</span>}
                </h3>
                {entry.org && <p className="history-org">{entry.org}</p>}
                <p>{entry.detail}</p>
              </article>
            ))}
          </Reveal>

          <Reveal>
            <h3 className="meta" style={{ marginBottom: 16 }}>
              Certifications
            </h3>
            <ul className="certs">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  {cert.name}
                  <span>{cert.when}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
