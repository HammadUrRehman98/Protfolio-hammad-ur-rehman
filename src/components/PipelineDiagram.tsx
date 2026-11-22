import { caseStudy } from '@/data/projects';

const BOX_W = 340;
const BOX_H = 54;
const GAP = 26;
const X = 10;

/**
 * Architecture of the court-document pipeline as an inline SVG: no library,
 * no request, and it inherits the page palette through CSS classes.
 *
 * Exposed to assistive tech as one image with a title and a short description;
 * the ordered list beside it on the page carries the full detail as text.
 */
export function PipelineDiagram() {
  const steps = caseStudy.architecture;
  const height = steps.length * BOX_H + (steps.length - 1) * GAP + 20;
  const desc = `Flow diagram: ${steps.map((s) => s.step).join(', then ')}.`;

  return (
    <figure className="diagram">
      <svg
        viewBox={`0 0 ${BOX_W + 2 * X} ${height}`}
        role="img"
        aria-labelledby="pd-title pd-desc"
        className="diagram-svg"
      >
        <title id="pd-title">Court-document pipeline architecture</title>
        <desc id="pd-desc">{desc}</desc>
        <defs>
          <marker
            id="pd-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M0 0 L9 5 L0 10" className="dg-arrowhead" />
          </marker>
        </defs>
        {steps.map((s, i) => {
          const y = 10 + i * (BOX_H + GAP);
          const human = 'human' in s && s.human;
          return (
            <g key={s.step}>
              <rect
                x={X}
                y={y}
                width={BOX_W}
                height={BOX_H}
                rx="2"
                className={human ? 'dg-box dg-human' : 'dg-box'}
              />
              <text x={X + 16} y={y + 22} className="dg-step">
                <tspan className="dg-no">{String(i + 1).padStart(2, '0')}</tspan> {s.step}
                {human ? <tspan className="dg-tag"> · human review</tspan> : null}
              </text>
              <text x={X + 16} y={y + 41} className="dg-detail">
                {s.detail}
              </text>
              {i < steps.length - 1 && (
                <line
                  x1={X + BOX_W / 2}
                  y1={y + BOX_H}
                  x2={X + BOX_W / 2}
                  y2={y + BOX_H + GAP - 3}
                  className="dg-line"
                  markerEnd="url(#pd-arrow)"
                />
              )}
            </g>
          );
        })}
      </svg>
      <figcaption>
        From raw court PDFs to final volumes. The highlighted step is where a person reviews and
        corrects the output.
      </figcaption>
    </figure>
  );
}
