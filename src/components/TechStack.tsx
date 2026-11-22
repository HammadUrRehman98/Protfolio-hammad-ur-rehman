import { skillGroups } from '@/data/content';
import { Reveal } from './Reveal';

/*
 * TODO: add once real project exists — LangChain, LangGraph, LlamaIndex, CrewAI,
 * MCP (Model Context Protocol), Kubernetes, LLM evaluation/observability
 * platforms, fine-tuning. Only list a tool here after it ships in a project.
 */

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
            The stack behind every production AI system above, from LLM agents and RAG to Docker and the cloud. Chosen for what ships and stays running.
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
