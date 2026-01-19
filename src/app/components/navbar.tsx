"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className="
        fixed top-0 left-1/2 -translate-x-1/2
        w-[calc(90vw-32px)]
        min-w-[320px]
        max-w-[1600px]
        bg-[var(--primary)]
        rounded-b-2xl
        shadow-md
        z-50
      "
    >
      {/* NAV CONTENT */}
      <div className="h-20 px-4 flex items-center justify-between">
        
        {/* LOGO */}
        <button
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
          className="text-white ml-2 lg:ml-10 text-4xl font-bold cursor-pointer"
        >
          FR4NC
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-20 mr-20">
          <li>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-[var(--text)] navbtn cursor-pointer hover:text-white transition-colors"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-[var(--text)] cursor-pointer navbtn hover:text-white transition-colors"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("experiences")}
              className="text-[var(--text)] cursor-pointer navbtn hover:text-white transition-colors"
            >
              Experiences
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[var(--text)] cursor-pointer navbtn hover:text-white transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <HiX className="w-8 h-8 text-white" />
            ) : (
              <HiMenu className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-[var(--primary)] flex flex-col items-center gap-4 py-4 rounded-b-2xl">
          {[
            { label: "Skills", id: "skills", delay: "50ms" },
            { label: "Projects", id: "projects", delay: "100ms" },
            { label: "Experiences", id: "experiences", delay: "150ms" },
            { label: "Contact", id: "contact", delay: "200ms" },
          ].map((item) => (
            <li
              key={item.id}
              className={`transition-all duration-300 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: item.delay }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-white navbtn hover:text-gray-200 transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
