"use client";

import { useEffect, useRef, useState } from "react";
import { HiArrowUpRight, HiBars2, HiXMark } from "react-icons/hi2";
import { profile } from "@/app/data/portfolio";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Toolkit", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateSection = () => {
      const current = [...navItems].reverse().find(({ id }) => {
        const element = document.getElementById(id);
        return element && element.getBoundingClientRect().top <= window.innerHeight * 0.35;
      });
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      setActiveSection(atBottom ? "contact" : current?.id ?? "home");
    };
    window.addEventListener("scroll", updateSection, { passive: true });
    window.addEventListener("resize", updateSection);
    updateSection();
    return () => {
      window.removeEventListener("scroll", updateSection);
      window.removeEventListener("resize", updateSection);
    };
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="site-sidebar" onKeyDown={(event) => {
      if (event.key === "Escape" && isOpen) { setIsOpen(false); menuButton.current?.focus(); }
    }}>
      <div className="sidebar-brand">
        <a href="#home" aria-label="FR4NC — home" onClick={() => setIsOpen(false)}>FR4NC<span aria-hidden="true">.</span></a>
        <span className="sidebar-caption">Personal portfolio</span>
        <button ref={menuButton} type="button" className="menu-toggle" aria-expanded={isOpen} aria-controls="primary-navigation" aria-label={isOpen ? "Close navigation" : "Open navigation"} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiXMark aria-hidden="true" /> : <HiBars2 aria-hidden="true" />}
        </button>
      </div>
      <nav id="primary-navigation" aria-label="Main navigation" className={`sidebar-navigation ${isOpen ? "is-open" : ""}`}>
        <ol>{navItems.map((item, index) => (
          <li key={item.id}>
            <a href={`#${item.id}`} aria-current={activeSection === item.id ? "location" : undefined} onClick={() => {
              setIsOpen(false);
              document.getElementById(item.id)?.focus({ preventScroll: true });
            }}><span className="nav-number" aria-hidden="true">0{index}</span>{item.label}<span className="nav-dot" aria-hidden="true" /></a>
          </li>
        ))}</ol>
      </nav>
      <div className="sidebar-bottom"><span className="availability"><span aria-hidden="true" />Let’s connect</span><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <HiArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></div>
    </header>
  );
}
