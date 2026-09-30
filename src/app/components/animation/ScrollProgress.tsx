"use client";

import { useContext, useEffect, useRef } from "react";
import { IntroReadyContext } from "./IntroAnimation";

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);
  const introReady = useContext(IntroReadyContext);

  useEffect(() => {
    const progress = progressRef.current;
    if (!progress || !introReady) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let resizeObserver: ResizeObserver | undefined;

    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const fraction = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      progress.style.transform = `scaleX(${fraction})`;
    };
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const stop = () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      resizeObserver?.disconnect();
      cancelAnimationFrame(frame);
      frame = 0;
    };
    const configure = () => {
      stop();
      if (preference.matches) {
        progress.style.transform = "scaleX(0)";
        return;
      }
      window.addEventListener("scroll", scheduleUpdate, { passive: true });
      window.addEventListener("resize", scheduleUpdate);
      if ("ResizeObserver" in window) {
        resizeObserver = new ResizeObserver(scheduleUpdate);
        resizeObserver.observe(document.body);
      }
      scheduleUpdate();
    };

    configure();
    preference.addEventListener("change", configure);
    return () => {
      stop();
      preference.removeEventListener("change", configure);
    };
  }, [introReady]);

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}
