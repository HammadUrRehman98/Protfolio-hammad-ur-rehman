import { skillGroups } from '@/data/content';
import { Reveal } from './Reveal';

export function TechStack() {
  return (
    <section id="expertise" aria-labelledby="stack-heading">
      <div className="wrap">
        <p className="dept">
          <span className="dept-no">02</span>
          <span className="dept-name" id="stack-heading">
            Expertise
          </span>
          <span className="dept-note">Daily drivers</span>
        </p>

        <div className="sec-head">
          <Reveal as="h2" className="h2">
            What I <em>reach for</em>.
          </Reveal>
          <Reveal as="p" className="lede">
            Chosen for what ships and stays running, not for what&rsquo;s new this month.
          </Reveal>
        </div>

        <Reveal as="dl" className="toolkit">
          {skillGroups.map((group) => (
            <div className="toolkit-row" key={group.title}>
              <dt>{group.title}</dt>
              <dd>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
