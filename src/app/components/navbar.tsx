"use client";

import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { gsap } from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      // Check if at top of page
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar slide-down animation on page load
  useEffect(() => {
    if (navRef.current) {
      // Create a timeline for sequential animations
      const tl = gsap.timeline();

      // Step 1: Slide down as a square (faster)
      tl.fromTo(
        navRef.current,
        {
          y: -100,
          opacity: 0,
          width: '80px',
          height: '80px',
          overflow: 'hidden',
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3, // Faster slide down
          ease: "power3.out",
        }
      )
        // Step 2: Expand to full width and reset height
        .to(navRef.current, {
          width: 'calc(90vw - 32px)',
          height: '80px', // Set to fixed navbar height
          borderRadius: '0 0 16px 16px', // Back to rounded bottom
          overflow: 'visible',
          duration: 0.3,
          ease: "power2.inOut",
        });

      // Step 3: Animate logo and menu items sliding down
      if (logoRef.current) {
        tl.fromTo(
          logoRef.current,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
          "-=0.1" // Start slightly before width animation ends
        );
      }

      if (menuRef.current) {
        tl.fromTo(
          menuRef.current,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
          "-=0.25" // Overlap with logo animation
        );
      }
    }
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-1/2 -translate-x-1/2 w-[calc(90vw-32px)] min-w-[320px] max-w-[1600px] bg-[var(--base)]/80 backdrop-blur-xl border-b border-x border-white/5 rounded-b-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-50 pointer-events-auto"
    >
      {/* NAV CONTENT */}
      <div className="h-20 px-6 sm:px-10 flex items-center justify-between">

        {/* LOGO */}
        <button
          ref={logoRef}
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
          className="text-white text-3xl font-black tracking-tighter cursor-pointer hover:opacity-80 transition-all active:scale-95"
        >
          FR4NC
        </button>

        {/* DESKTOP MENU */}
        <ul ref={menuRef} className="hidden lg:flex items-center gap-12 xl:gap-16">
          {navItems.map((item) => (
            <li key={item.id} className="relative py-2">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-bold tracking-widest uppercase cursor-pointer transition-all duration-300 ${activeSection === item.id
                  ? "text-white"
                  : "text-white/40 hover:text-white/80"
                  }`}
              >
                {item.label}
              </button>
              {/* Active Dot/Indicator */}
              {activeSection === item.id && (
                <div
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"
                  style={{ boxShadow: '0 0 8px #4fa0de' }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all active:scale-90"
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 pb-8 pt-2">
          <ul className="bg-white/5 backdrop-blur-2xl border border-white/10 flex flex-col items-center gap-2 py-6 rounded-2xl">
            {navItems.map((item, index) => (
              <li
                key={item.id}
                className={`w-full px-8 transition-all duration-500 ${isOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
                  }`}
                style={{ transitionDelay: `${(index + 1) * 50}ms` }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full py-3 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all ${activeSection === item.id
                    ? "bg-white text-black"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}