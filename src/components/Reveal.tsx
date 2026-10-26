import { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  delay?: number;
}

// Wrap content to fade and rise into view on scroll.
export function Reveal({
  children,
  className = "",
  as = "div",
  delay = 0,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as as "div";

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 320ms ease-out ${delay}ms, transform 320ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
