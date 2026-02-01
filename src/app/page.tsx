"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import TextType from '@/app/components/animation/TextType'
import ShinyText from '@/app/components/animation/ShinyText'
import SkillCard from '@/app/components/SkillCard'
import ScrollReveal from '@/app/components/animation/ScrollReveal'
import DiscCarousel from '@/app/components/DiscCarousel'
import ContactSection from '@/app/components/ContactSection'
import Footer from '@/app/components/footer'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<"All" | "Website" | "Mobile">("All");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const projects = [
    {
      title: "PrimeArcDevs",
      description: "A premier software development agency dedicated to architecting high-performance digital bridges between innovative ideas and scalable, market-ready solutions.",
      category: "Website" as const,
      image: "/projects/PrimeArcDevs/primearcdevs.jpg",
      tags: ["React", "Vite", "Tailwind CSS"],
      link: "https://primearcdevs.vercel.app/",
      repo: "https://github.com/FR4NC31/PrimeArcDevs",
    },
    {
      title: "Beauty Company",
      description: "A visually stunning showcase for a premium beauty brand, focusing on elegant typography and a clean, luxury-inspired layout to highlight product excellence.",
      category: "Website" as const,
      image: "/projects/BeautyCompany/beauty.jpg",
      tags: ["HTML", "CSS"],
      link: "#",
      repo: "https://github.com/FR4NC31/beauty_company",
    },
    {
      title: "Project Three",
      description: "Description for your third amazing project goes here.",
      category: "Website" as const,
      image: "/placeholder.png",
      tags: ["Tech", "Stack"],
      link: "#",
      repo: "#",
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div>
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden bg-[var(--base)]"
      >
        {/* Abstract Background Grid */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        {/* Ambient Hero Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 relative z-10">

          {/* Hero Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 w-full lg:flex-1">
            <div className="space-y-4">
              <ScrollReveal delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Available for projects</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className='text-[var(--text)] text-sm sm:text-base'>Hello, I&#x275B;m</p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex justify-center lg:justify-start">
                  <TextType
                    text={["Francis Edgard O. Ibañez"]}
                    typingSpeed={100}
                    pauseDuration={1500}
                    showCursor={true}
                    loop={false}
                    className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-tight text-center lg:text-left'
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-col lg:flex-row items-center lg:items-baseline gap-1 lg:gap-2">
                  <h1 className='text-xl sm:text-2xl text-white'>Aspiring</h1>
                  <ShinyText
                    text={"Front-end Web and Mobile Developer"}
                    speed={3}
                    color="#4fa0de"
                    shineColor="#b1d7fb"
                    spread={130}
                    className='text-lg sm:text-xl md:text-2xl text-center lg:text-left'
                  />
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.4}>
              <p className="text-[var(--text)] text-center lg:text-left text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
                I&apos;m an aspiring Web and Mobile Front-End Developer with a strong passion for building responsive and user-friendly interfaces. I aim to apply my foundational knowledge to real-world projects while continuously improving my technical skills and growing in a professional development environment.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className='flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto mt-4'>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black rounded-2xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] duration-300"
                >
                  View Projects
                </button>
                <button className='w-full sm:w-auto px-8 py-4 bg-[#1a1c1e] text-white border border-white/10 rounded-2xl font-bold hover:bg-white/5 transition-all duration-300'>
                  Download CV
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Enhanced Profile Visual */}
          <ScrollReveal delay={0.3} direction="right">
            <div className="relative group">
              {/* Animated Rings around Profile */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity duration-700" />
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-400 to-purple-600 rounded-full opacity-20 group-hover:rotate-180 transition-transform duration-1000" />

              <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[480px] xl:h-[480px] rounded-full p-2 bg-[#1a1c1e] border border-white/5">
                <Image
                  src="/profile.jpg"
                  fill
                  className="rounded-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 p-2"
                  alt="Francis Edgard profile photo"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="skills" className="relative bg-[var(--base)] w-full min-h-screen py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-1/4 w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-24">
              <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Abilities</span>
              <h1 className="text-white text-5xl sm:text-6xl font-black mb-6">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Proficiency</span>
              </h1>
              <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                A collection of technologies I have mastered to build high-performance, responsive digital products.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-20">
            {/* Core Tech */}
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <h2 className="text-white text-xl font-bold whitespace-nowrap">Core Technologies</h2>
                <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard name="HTML" iconPath="/logos/html.png" color="#E34F26" category="Markup" index={0} />
                <SkillCard name="CSS" iconPath="/logos/CSS3.png" color="#1572B6" category="Styling" index={1} />
                <SkillCard name="JavaScript" iconPath="/logos/js.png" color="#F7DF1E" category="Language" index={2} />
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <h2 className="text-white text-xl font-bold whitespace-nowrap">Frameworks & Libraries</h2>
                <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard name="React JS/TS" iconPath="/logos/React.png" color="#61DAFB" category="Library" index={3} />
                <SkillCard name="Next.js" iconPath="/logos/nextjs.png" color="#ffffff" category="Framework" index={4} />
                <SkillCard name="React Native" iconPath="/logos/react_native.png" color="#61DAFB" category="Mobile" index={5} />
                <SkillCard name="Expo" iconPath="/logos/expo.png" color="#ffffff" category="Platform" index={6} />
                <SkillCard name="Tailwind CSS" iconPath="/logos/Tailwind CSS.png" color="#06B6D4" category="Styling" index={7} />
              </div>
            </div>

            {/* Tools & Workflow */}
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <h2 className="text-white text-xl font-bold whitespace-nowrap">Tools & Workflow</h2>
                <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard name="Git" iconPath="/logos/git.png" color="#F05032" category="Version Control" index={8} />
                <SkillCard name="Vite" iconPath="/logos/vite.png" color="#646CFF" category="Build Tool" index={9} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='projects' className='min-h-screen py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden bg-[var(--base)]'>
        {/* Subtle separator for projects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-white text-4xl sm:text-5xl font-bold mb-6">Featured Projects</h1>
              <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
                Explore a collection of my latest work, ranging from complex web platforms to intuitive mobile experiences.
              </p>

              <div className="flex items-center justify-center gap-2 sm:gap-4 p-1.5 bg-white/5 border border-white/10 rounded-xl w-fit mx-auto backdrop-blur-sm">
                {(["All", "Website", "Mobile"] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                      ? "bg-white text-black shadow-lg"
                      : "text-gray-400 hover:text-white"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* New 3D Disc Carousel */}
          <ScrollReveal delay={0.2}>
            <DiscCarousel projects={filteredProjects} />
          </ScrollReveal>

          <p className="text-center text-gray-500 text-sm mt-12 italic">
            Spin the disc to explore my projects
          </p>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}