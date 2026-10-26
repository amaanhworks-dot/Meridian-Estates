import type { ReactNode } from 'react';
import { useScrollObserver } from '@/hooks/useScrollObserver';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export default function SectionReveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: SectionRevealProps) {
  const { ref, isVisible } = useScrollObserver<HTMLDivElement>();

  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      className={`reveal-transition ${isVisible ? 'reveal-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );
}
