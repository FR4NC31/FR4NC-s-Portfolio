"use client";

import { useContext, useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IntroReadyContext } from "./IntroAnimation";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  selector?: string;
  trigger?: "scroll" | "load";
  stagger?: number;
}

export default function ScrollReveal({ children, className = "", delay = 0, duration = 0.75, direction = "up", distance = 28, selector, trigger = "scroll", stagger = 0.1 }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const introReady = useContext(IntroReadyContext);
  useLayoutEffect(() => {
    const element = elementRef.current;
    if (!element || !introReady) return;
    const targets = selector ? Array.from(element.querySelectorAll<HTMLElement>(selector)) : [element];
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const offsets = { up: { y: distance }, down: { y: -distance }, left: { x: distance }, right: { x: -distance } };
      if (trigger === "load") {
        // Do not replay the introduction when a restored page opens further down.
        const visible = targets.filter((target) => {
          const bounds = target.getBoundingClientRect();
          return bounds.bottom > 0 && bounds.top < window.innerHeight;
        });
        if (visible.length) {
          gsap.fromTo(visible, { opacity: 0.35, ...offsets[direction] }, {
            opacity: 1, x: 0, y: 0, duration, delay, stagger,
            ease: "power2.out", clearProps: "opacity,transform",
          });
        }
        return;
      }

      let previousTop = Number.NEGATIVE_INFINITY;
      let rowIndex = 0;
      const cleanups = targets.map((target) => {
        const top = target.getBoundingClientRect().top;
        rowIndex = Math.abs(top - previousTop) < 8 ? rowIndex + 1 : 0;
        previousTop = top;
        const tween = gsap.fromTo(target, { opacity: 0, ...offsets[direction] }, {
          opacity: 1, x: 0, y: 0, duration, delay: delay + rowIndex * stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: target,
            start: "clamp(top 92%)",
            end: "clamp(top 68%)",
            // Finish the fade even when scrolling pauses; replay after leaving above the entry point.
            toggleActions: "play none none reset",
            invalidateOnRefresh: true,
          },
        });
        // Keyboard navigation must never land on a faded control.
        const revealFocused = () => {
          tween.scrollTrigger?.disable(false);
          tween.progress(1);
        };
        target.addEventListener("focusin", revealFocused);
        if (target.contains(document.activeElement)) revealFocused();
        return () => target.removeEventListener("focusin", revealFocused);
      });
      return () => cleanups.forEach((cleanup) => cleanup());
    }, element);

    return () => media.revert();
  }, [delay, duration, direction, distance, selector, trigger, stagger, introReady]);
  // Server-rendered content stays visible when JavaScript or motion is unavailable.
  return <div ref={elementRef} className={className}>{children}</div>;
}
