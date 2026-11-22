import { site } from '@/config/site';
import { caseStudy, featured, moreClientWork, projects } from '@/data/projects';
import { faq } from '@/data/faq';
import { certifications, skillGroups, timeline } from '@/data/content';

// Required by `output: 'export'`: the body is baked at build time into
// out/llms.txt rather than being served per request.
export const dynamic = 'force-static';

/**
 * /llms.txt — the emerging convention for handing a language model a clean,
 * pre-chunked version of a site instead of making it parse the rendered page.
 *
 * It is generated from the same modules that render the HTML, so it cannot
 * drift out of sync: change a project or an answer and this file follows on the
 * next build. The format is plain markdown by design — no nav, no styling, no
 * duplicated boilerplate, just the facts in the order a model would want them.
 */
function body(): string {
  const skills = skillGroups.map((g) => `- **${g.title}:** ${g.items.join(', ')}`).join('\n');

  const live = projects
    .filter((p) => p.url)
    .map((p) => `- [${p.title}](${p.url}): ${p.description}`)
    .join('\n');

  const other = projects
    .filter((p) => !p.url)
    .map((p) => `- **${p.title}:** ${p.description}`)
    .join('\n');

  const client = moreClientWork
    .map((p) => `- **${p.title}:** ${p.problem} ${p.built} (${p.stack.join(', ')})`)
    .join('\n');

  const history = timeline
    .map((t) => `- **${t.date}, ${t.title}${t.org ? `, ${t.org}` : ''}.** ${t.detail}`)
    .join('\n');

  const certs = certifications.map((c) => `- ${c.name} (${c.when})`).join('\n');

  const questions = faq.map((item) => `### ${item.q}\n\n${item.a}`).join('\n\n');

  return `# ${site.name}

> ${site.entitySentence}

${site.description}

## Facts

- **Name:** ${site.name}
- **Title:** ${site.headline}
- **Location:** ${site.location.city}, ${site.location.region}, ${site.location.country}
- **Employer:** ${site.employer.name} (${site.employer.url})
- **Education:** ${site.education.degree}, ${site.education.school}, ${site.education.years}
- **Recognition:** ${site.award}
- **Website:** ${site.url}
- **Email:** ${site.email}
- **LinkedIn:** ${site.linkedin}
- **GitHub:** ${site.github}
- **Résumé (PDF):** ${site.url}${site.resume}
- **Available for:** ${site.availability} Open to remote roles worldwide.

## Skills

${skills}

## Flagship case study: ${caseStudy.shortTitle}

${caseStudy.problem}

${caseStudy.outcome} Full write-up: ${site.url}${featured.href}

## Live projects

${live}

## More client work

${client}

## Other projects

${other}

## Background

${history}

## Certifications

${certs}

## Frequently asked questions

Also published at ${site.url}/faq/

${questions}

---

Source: ${site.url}, canonical and authoritative. This file is generated at
build time from the same data as the website; where the two differ, the website
is current. Content may be quoted with attribution to ${site.name}.
`;
}

export function GET() {
  return new Response(body(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  });
}
