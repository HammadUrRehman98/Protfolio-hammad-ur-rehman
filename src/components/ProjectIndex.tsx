import Image from 'next/image';
import type { ReactNode } from 'react';
import {
  earlierWork,
  moreClientWork,
  projectGroups,
  projects,
  type Project,
} from '@/data/projects';

/** `https://appellateshark.com/` → `appellateshark.com` */
function host(url: string) {
  return new URL(url).host.replace(/^www\./, '');
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="entry">
      {/* Screenshot slot: renders only once `image` is set in src/data/projects.ts. */}
      {project.image && (
        <Image
          className="entry-shot"
          src={project.image.src}
          width={project.image.width}
          height={project.image.height}
          alt={project.image.alt}
          sizes="(max-width: 860px) 100vw, 480px"
        />
      )}
      <p className="entry-tag">{project.kicker}</p>
      <h4 className="entry-title">
        {/* the card already highlights on hover, so a live build gets the
            title itself as the target */}
        {project.url ? (
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h4>
      <p className="entry-desc">{project.description}</p>
      {project.problem && project.built && (
        <dl className="entry-pb">
          <div>
            <dt>Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>Built</dt>
            <dd>{project.built}</dd>
          </div>
        </dl>
      )}
      <p className="entry-stack">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </p>
      {project.url && (
        <p className="entry-live">
          <a
            className="tlink tlink-muted"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live site · {host(project.url)}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      )}
    </article>
  );
}

/**
 * The rest of the work, grouped into blocks instead of filtered.
 *
 * Two cards per row on desktop: the list reads across the full measure rather
 * than leaving the right half of the page empty, and the page stays short.
 */
export function ProjectIndex({ lead }: { lead?: ReactNode }) {
  return (
    <div className="index">
      {projectGroups.map((group) => {
        const inGroup = projects.filter((project) => project.category === group.category);
        if (!inGroup.length) return null;
        const isClient = group.category === 'client';
        const extra = isClient ? moreClientWork : [];
        // the flagship sits at the top of the production group and counts in it
        const leadCount = isClient && lead ? 1 : 0;

        return (
          <section className="group" key={group.category} aria-labelledby={`group-${group.category}`}>
            <h3 className="group-head" id={`group-${group.category}`}>
              <span className="group-name">{group.label}</span>
              <span className="group-note">{group.note}</span>
              <span className="group-count">{leadCount + inGroup.length + extra.length}</span>
            </h3>

            {isClient && lead}

            <div className="cards">
              {inGroup.map((project) => (
                <ProjectCard project={project} key={project.slug} />
              ))}
            </div>

            {extra.length > 0 && (
              <div className="more">
                <h4 className="more-head">More client work</h4>
                <ul className="more-list">
                  {extra.map((item) => (
                    <li key={item.slug}>
                      <p className="more-title">
                        <strong>{item.title}</strong>
                        <span className="entry-stack">
                          {item.stack.map((tech) => (
                            <span key={tech}>{tech}</span>
                          ))}
                        </span>
                      </p>
                      <p className="more-detail">
                        {item.problem} {item.built}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        );
      })}

      <section className="group" aria-labelledby="group-earlier">
        <h3 className="group-head" id="group-earlier">
          <span className="group-name">Earlier work</span>
          <span className="group-note">Experiments and coursework</span>
        </h3>
        <ul className="more-list">
          {earlierWork.map((item) => (
            <li key={item.slug}>
              <p className="more-title">
                <strong>{item.title}</strong>
                <span className="entry-stack">
                  {item.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </span>
              </p>
              <p className="more-detail">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
