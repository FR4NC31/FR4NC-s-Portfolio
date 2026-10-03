"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

// Adapted from React Bits SpotlightCard (DavidHDev/react-bits).
// Source and license are recorded in docs/react-bits.md.
export default function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card || !window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`);
  }

  return <div ref={cardRef} onMouseMove={handleMouseMove} className={`card-spotlight ${className}`}>{children}</div>;
}
