"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import TextType from '@/app/components/animation/TextType'
import ShinyText from '@/app/components/animation/ShinyText'
import SkillCard from '@/app/components/SkillCard'
import ScrollReveal from '@/app/components/animation/ScrollReveal'
import DiscCarousel from '@/app/components/DiscCarousel'

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
      title: "Orion Analytics Dashboard",
      description: "A premium data visualization platform with real-time tracking, interactive charts, and sleek dark mode interface.",
      category: "Website" as const,
      image: "/website_project_mockup.png",
      tags: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
      link: "https://example.com",
      repo: "https://github.com",
    },
    {
      title: "Flex Fitness Tracker",
      description: "A comprehensive mobile health application focusing on biometric tracking, workout logging, and goal management.",
      category: "Mobile" as const,
      image: "/mobile_project_mockup.png",
      tags: ["React Native", "Expo", "TypeScript", "Redux"],
      link: "https://example.com",
      repo: "https://github.com",
    },
    {
      title: "Pulse Social Media",
      description: "Modern social platform featuring real-time messaging, content sharing, and personalized discovery feeds.",
      category: "Website" as const,
      image: "/website_project_mockup.png",
      tags: ["Next.js", "Firebase", "Framer Motion", "Tailwind"],
      link: "https://example.com",
      repo: "https://github.com",
    },
    {
      title: "Zen Meditation App",
      description: "Mobile application designed for mindfulness, featuring guided audio sessions and soothing atmospheric soundscapes.",
      category: "Mobile" as const,
      image: "/mobile_project_mockup.png",
      tags: ["React Native", "Expo", "GSAP", "Audio Engine"],
      link: "https://example.com",
      repo: "https://github.com",
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div>
      <section
        id="home"
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 xl:gap-20 pb-50 lg:pt-0 lg:pb-30 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto"
      >
        <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-5 lg:gap-6 w-full lg:flex-1">
          <ScrollReveal delay={0.1}>
            <p className='text-[var(--text)] text-sm sm:text-base'>Hello, I&#x275B;m</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <TextType
              text={["Francis Edgard O. Ibañez"]}
              typingSpeed={100}
              pauseDuration={1500}
              showCursor={true}
              className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-center lg:text-left'
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className='flex flex-col items-center lg:flex-row lg:items-baseline gap-1 lg:gap-2'>
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

          <ScrollReveal delay={0.4}>
            <p className="text-[var(--text)] text-center lg:text-left text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
              I&apos;m an aspiring Web and Mobile Front-End Developer with a strong passion for building responsive and user-friendly interfaces. I aim to apply my foundational knowledge to real-world projects while continuously improving my technical skills and growing in a professional development environment.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 w-full sm:w-auto mt-2'>
              <button
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-lg font-medium hover:opacity-90 transition text-sm sm:text-base"
              >
                <p className='font-bold'>View my projects</p>
              </button>
              <button className='w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition text-sm sm:text-base'>
                <p className='font-bold'>Download CV</p>
              </button>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3} direction="right">
          <Image
            src="/profile.jpg"
            width={450}
            height={450}
            className="rounded-full object-cover hidden lg:block lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px]"
            alt="Francis Edgard profile photo"
            priority
          />
        </ScrollReveal>
      </section>

      <section id="skills" className="bg-gradient-to-b from-white to-gray-50 w-full min-h-screen py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-black text-4xl sm:text-5xl font-bold mb-4">
                My Tech Stack
              </h1>
              <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
                These are the technologies and tools I use to bring ideas to life
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              <SkillCard
                name="HTML"
                iconPath="/logos/html.png"
                color="#E34F26"
                category="Markup"
              />
              <SkillCard
                name="CSS"
                iconPath="/logos/CSS3.png"
                color="#1572B6"
                category="Styling"
              />
              <SkillCard
                name="JavaScript"
                iconPath="/logos/js.png"
                color="#F7DF1E"
                category="Language"
              />
              <SkillCard
                name="Next.js"
                iconPath="/logos/nextjs.png"
                color="#000000"
                category="Framework"
              />
              <SkillCard
                name="Tailwind CSS"
                iconPath="/logos/Tailwind CSS.png"
                color="#06B6D4"
                category="CSS Framework"
              />
              <SkillCard
                name="React JS/TS"
                iconPath="/logos/React.png"
                color="#61DAFB"
                category="Library"
              />
              <SkillCard
                name="React Native"
                iconPath="/logos/react_native.png"
                color="#61DAFB"
                category="Mobile"
                hideNameText={true}
              />
              <SkillCard
                name="Expo"
                iconPath="/logos/expo.png"
                color="#000020"
                category="Platform"
              />
              <SkillCard
                name="Git"
                iconPath="/logos/git.png"
                color="#F05032"
                category="Version Control"
              />
              <SkillCard
                name="Vite"
                iconPath="/logos/vite.png"
                color="#646CFF"
                category="Build Tool"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id='projects' className='min-h-screen py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden bg-black/50'>
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

      <section id='contact' className='min-h-screen py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-white'>
        <ScrollReveal>
          <h1 className="text-black text-4xl sm:text-5xl font-bold text-center mb-8">Contact Me</h1>
          <p className="text-gray-600 text-lg sm:text-xl text-center max-w-2xl mx-auto">Let's work together on your next project</p>
        </ScrollReveal>
      </section>
    </div>
  );
}