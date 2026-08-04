import { featured } from '@/data/projects';
import { ProjectIndex } from './ProjectIndex';
import { Reveal } from './Reveal';

export function Work() {
  return (
    <section id="projects" className="showcase" aria-labelledby="work-heading">
      <div className="wrap">
        <p className="dept">
          <span className="dept-no">01</span>
          <span className="dept-name" id="work-heading">
            Selected projects
          </span>
        </p>

        <div className="sec-head">
          <Reveal as="h2" className="h2">
            Systems, <em>not demos</em>.
          </Reveal>
          <Reveal as="p" className="lede">
            Every project below runs against real data for real users, across legal, healthcare,
            sports and commerce.
          </Reveal>
        </div>

        <Reveal as="article" className="feature">
          <p className="feature-label">{featured.label}</p>
          <h3 className="feature-title">{featured.title}</h3>

          <div className="feature-body">
            {featured.blocks.map((block) => (
              <p key={block.term}>
                <span className="runin">{block.term}</span>
                {block.detail}
              </p>
            ))}
          </div>

          <p className="credit">
            {featured.credit} · {featured.stack.join(', ')}
          </p>
        </Reveal>

        <ProjectIndex />
      </div>
    </section>
  );
}
