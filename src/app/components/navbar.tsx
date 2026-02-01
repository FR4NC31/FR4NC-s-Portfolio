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
    <nav ref={navRef} className="fixed top-0 left-1/2 -translate-x-1/2 w-[calc(90vw-32px)] min-w-[320px] max-w-[1600px] bg-[var(--primary)] rounded-b-2xl shadow-md z-50">
      {/* NAV CONTENT */}
      <div className="h-20 px-4 flex items-center justify-between">

        {/* LOGO */}
        <button
          ref={logoRef}
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
          className="text-white ml-2 lg:ml-10 text-4xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
        >
          FR4NC
        </button>

        {/* DESKTOP MENU */}
        <ul ref={menuRef} className="hidden lg:flex gap-10 xl:gap-20 mr-10 lg:mr-20">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`navbtn cursor-pointer transition-colors ${activeSection === item.id
                  ? "text-white font-semibold"
                  : "text-[var(--text)] hover:text-white"
                  }`}
              >
                {item.label}
              </button>
            </li>
          ))}
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
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="bg-[var(--primary)] flex flex-col items-center gap-4 py-4 rounded-b-2xl">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className={`transition-all duration-300 ${isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
                }`}
              style={{ transitionDelay: `${(index + 1) * 50}ms` }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={`navbtn transition-colors ${activeSection === item.id
                  ? "text-white font-semibold"
                  : "text-[var(--text)] hover:text-gray-200"
                  }`}
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