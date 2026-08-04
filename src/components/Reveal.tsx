'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

let revealIndex = 0;

type Props = {
  children: ReactNode;
  /** Rendered element. Defaults to a div; pass 'p', 'h2', … to keep semantics. */
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Fades content in on first scroll into view, then unobserves.
 *
 * Renders the visible state on the server so the content is in the static HTML
 * for crawlers and for anyone with JS disabled; the hidden start state is only
 * applied once the observer is actually attached.
 */
export function Reveal({ children, as: Tag = 'div', className = '', style }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);
  const delay = useRef(`${Math.min(revealIndex++, 4) * 60}ms`);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }

    setArmed(true);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = [armed ? 'reveal' : '', armed && shown ? 'in' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      ref={ref}
      className={classes || undefined}
      style={armed ? { transitionDelay: delay.current, ...style } : style}
    >
      {children}
    </Tag>
  );
}
