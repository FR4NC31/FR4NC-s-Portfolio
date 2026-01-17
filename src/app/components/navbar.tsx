"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-1/2 -translate-x-1/2
        w-[calc(90vw-32px)] min-w-[320px] max-w-[1600px]
        bg-[var(--primary)]
        rounded-b-2xl
        shadow-md
        z-50
      "
    >
      <div className="h-20 px-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="text-white ml-2 title lg:ml-10 text-4xl font-bold">
          FR4NC
        </a>

        {/* Desktop Menu - Hidden below 1024px */}
        <ul className="hidden lg:flex gap-20 mr-20">
          <li><a href="#skills" className="text-[var(--text)] hover:text-white transition-colors">Skills</a></li>
          <li><a href="#projects" className="text-[var(--text)] hover:text-white transition-colors">Projects</a></li>
          <li><a href="#experiences" className="text-[var(--text)] hover:text-white transition-colors">Experiences</a></li>
          <li><a href="#contact" className="text-[var(--text)] hover:text-white transition-colors">Contact</a></li>
        </ul>

        {/* Mobile Button - Shows below 1024px */}
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

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="bg-[var(--primary)] flex flex-col items-center gap-4 py-4 rounded-b-2xl">
          <li className={`transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`} style={{transitionDelay: '50ms'}}>
            <a href="#skills" className="text-white hover:text-gray-200 transition-colors" onClick={() => setIsOpen(false)}>Skills</a>
          </li>
          <li className={`transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`} style={{transitionDelay: '100ms'}}>
            <a href="#projects" className="text-white hover:text-gray-200 transition-colors" onClick={() => setIsOpen(false)}>Projects</a>
          </li>
          <li className={`transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`} style={{transitionDelay: '150ms'}}>
            <a href="#experiences" className="text-white hover:text-gray-200 transition-colors" onClick={() => setIsOpen(false)}>Experiences</a>
          </li>
          <li className={`transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`} style={{transitionDelay: '200ms'}}>
            <a href="#contact" className="text-white hover:text-gray-200 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}