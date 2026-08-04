import { projectGroups, projects } from '@/data/projects';

/**
 * The rest of the work, grouped into blocks instead of filtered.
 *
 * Two cards per row on desktop: the list reads across the full measure rather
 * than leaving the right half of the page empty, and the page stays short.
 */
export function ProjectIndex() {
  return (
    <div className="index">
      {projectGroups.map((group) => {
        const inGroup = projects.filter((project) => project.category === group.category);
        if (!inGroup.length) return null;

        return (
          <section className="group" key={group.category} aria-label={group.label}>
            <p className="group-head">
              <span className="group-name">{group.label}</span>
              <span className="group-note">{group.note}</span>
              <span className="group-count">{inGroup.length}</span>
            </p>

            <div className="cards">
              {inGroup.map((project) => (
                <article className="entry" key={project.slug}>
                  <p className="entry-tag">{project.kicker}</p>
                  <h3 className="entry-title">{project.title}</h3>
                  <p className="entry-desc">{project.description}</p>
                  <p className="entry-stack">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </p>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
