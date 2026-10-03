"use client";

import { createContext, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { gsap } from "gsap";

export const IntroReadyContext = createContext(true);

export default function IntroAnimation({ children }: { children: ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    const media = gsap.matchMedia();
    let completed = false;

    media.add({ animate: "(prefers-reduced-motion: no-preference)", reduce: "(prefers-reduced-motion: reduce)" }, (context) => {
      const timeline = gsap.timeline();
      const events = ["keydown", "pointerdown", "wheel", "touchstart"] as const;
      const finish = () => {
        completed = true;
        timeline.kill();
        events.forEach((event) => window.removeEventListener(event, finish));
        overlay.style.display = "none";
        setReady(true);
      };
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      // Keep deep links and restored browsing positions immediately accessible.
      if (completed || context.conditions?.reduce || window.location.hash || window.scrollY > 0 || navigation?.type === "back_forward") {
        completed = true;
        const frame = requestAnimationFrame(finish);
        return () => cancelAnimationFrame(frame);
      }

      gsap.set(overlay, { display: "grid" });
      timeline.eventCallback("onComplete", finish)
        .fromTo(".intro-letter", { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.55, stagger: 0.055, ease: "power3.out" })
        .fromTo(".intro-caption", { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }, 0.25)
        .fromTo(".intro-rule", { scaleX: 0 }, { scaleX: 1, duration: 0.65, ease: "power2.inOut" }, 0.15)
        .call(() => setReady(true), [], 0.95)
        .to(overlay, { opacity: 0, duration: 0.45, ease: "power2.inOut" }, 0.95);

      // Any intent to interact skips the decorative introduction.
      events.forEach((event) => window.addEventListener(event, finish, { passive: true, once: true }));
      return () => events.forEach((event) => window.removeEventListener(event, finish));
    }, overlay);

    return () => media.revert();
  }, []);

  return (
    <IntroReadyContext.Provider value={ready}>
      <div ref={overlayRef} className="intro-overlay" aria-hidden="true" inert>
        <div className="intro-brand">
          <div className="intro-wordmark">
            {Array.from("FR4NC.").map((letter, index) => <span className="intro-letter" key={index}>{letter}</span>)}
          </div>
          <p className="intro-caption">Full Stack &amp; Mobile Developer</p>
          <span className="intro-rule" />
        </div>
      </div>
      {children}
    </IntroReadyContext.Provider>
  );
}
