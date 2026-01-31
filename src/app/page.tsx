"use client";

import Image from 'next/image'
import TextType from '@/app/components/animation/TextType'
import ShinyText from '@/app/components/animation/ShinyText'
import SkillCard from '@/app/components/SkillCard'
import ScrollReveal from '@/app/components/animation/ScrollReveal'
import ExperienceCard from '@/app/components/ExperienceCard'

export default function Home() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 80; // Height of your navbar
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div>
      <section
        id="home"
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 xl:gap-20 pb-50 lg:pt-0 lg:pb-30 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto"
      >

        {/* Text Content */}
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

        {/* Profile Image - Hidden on mobile (below 1024px), visible on lg+ */}
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
          {/* Section Header */}
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

          {/* Skills Grid */}
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
      <section id='projects' className='min-h-screen py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
        <ScrollReveal>
          <h1 className="text-white text-4xl sm:text-5xl font-bold text-center mb-8">My Projects</h1>
          <p className="text-gray-400 text-lg sm:text-xl text-center max-w-2xl mx-auto">Check out some of my recent work</p>
        </ScrollReveal>
      </section>
      <section id='experiences' className='min-h-screen py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <h1 className="text-black text-4xl sm:text-5xl font-bold text-center mb-8">My Experiences</h1>
            <p className="text-gray-600 text-lg sm:text-xl text-center max-w-2xl mx-auto mb-16">
              My professional journey and growth in the tech industry
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <ExperienceCard
              title="Full-Stack Developer Intern"
              company="TechInnovate Solutions"
              period="June 2025 - Present"
              description={[
                "Developing and maintaining modern web applications using Next.js and React.",
                "Collaborating with senior developers to implement responsive UI/UX designs.",
                "Optimizing application performance and ensuring cross-browser compatibility.",
                "Participating in code reviews and daily stand-up meetings."
              ]}
              skills={["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"]}
              delay={0.2}
            />

            <ExperienceCard
              title="Junior Front-End Developer"
              company="Creative Digital Agency"
              period="Jan 2024 - May 2025"
              description={[
                "Led the development of multiple client-facing portfolio websites.",
                "Specialized in creating pixel-perfect, interactive mobile-first interfaces.",
                "Integrated third-party APIs and services for enhanced functionality.",
                "Improved website SEO and loading speeds by over 40%."
              ]}
              skills={["React JS", "JavaScript", "GSAP", "Framer Motion", "Git"]}
              delay={0.4}
            />
          </div>
        </div>
      </section>
      <section id='contact' className='min-h-screen py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
        <ScrollReveal>
          <h1 className="text-white text-4xl sm:text-5xl font-bold text-center mb-8">Contact Me</h1>
          <p className="text-gray-400 text-lg sm:text-xl text-center max-w-2xl mx-auto">Let's work together on your next project</p>
        </ScrollReveal>
      </section>
    </div>
  );
}