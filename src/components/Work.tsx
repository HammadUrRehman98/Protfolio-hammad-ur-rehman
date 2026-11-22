import { featured } from '@/data/projects';
import { ProjectIndex } from './ProjectIndex';
import { Reveal } from './Reveal';

function Flagship() {
  return (
    <Reveal as="article" className="feature">
      <p className="feature-label">{featured.label}</p>
      <h4 className="feature-title">
        <a href={featured.href}>{featured.title}</a>
      </h4>

      <div className="feature-body">
        {featured.blocks.map((block) => (
          <p key={block.term}>
            <span className="runin">{block.term}</span>
            {block.detail}
          </p>
        ))}
      </div>

      <div className="feature-foot">
        <p className="credit">
          {featured.credit} · {featured.stack.join(', ')}
        </p>
        <a className="tlink" href={featured.href}>
          Read the case study
        </a>
      </div>
    </Reveal>
  );
}

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
            Production AI systems shipped to real users: legal AI and Document AI first, then
            healthcare, sports and commerce.
          </Reveal>
        </div>

        <ProjectIndex lead={<Flagship />} />
      </div>
    </section>
  );
}
