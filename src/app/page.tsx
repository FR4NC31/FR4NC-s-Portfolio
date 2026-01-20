"use client";

import Image from 'next/image'
import TextType from '@/app/components/animation/TextType'
import ShinyText from '@/app/components/animation/ShinyText'

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
        <p className='text-[var(--text)] text-sm sm:text-base'>Hello, I&#x275B;m</p>
        <TextType 
          text={["Francis Edgard O. Ibañez"]}
          typingSpeed={100}
          pauseDuration={1500}
          showCursor={true}
          className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-center lg:text-left'
        />
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

        <p className="text-[var(--text)] text-center lg:text-left text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
          I&apos;m an aspiring Web and Mobile Front-End Developer with a strong passion for building responsive and user-friendly interfaces. I aim to apply my foundational knowledge to real-world projects while continuously improving my technical skills and growing in a professional development environment.
        </p>

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
      </div>

      {/* Profile Image - Hidden on mobile (below 1024px), visible on lg+ */}
      <Image
        src="/profile.jpg"
        width={450}
        height={450}
        className="rounded-full object-cover hidden lg:block lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px]"
        alt="Francis Edgard profile photo"
        priority
      />
    </section>

    <section id="skills" className="bg-white w-full h-238">
      <h1 className="text-black pt-20 text-center text-3xl">My Skills</h1>
      <p className='text-black'>this are my skills and tools that i used it</p>
    </section>
    <section id='projects' className='h-238'>
      <h1 className="text-white pt-20 text-center text-3xl">My Projects</h1>
    </section>
    <section id='experiences' className='h-238 bg-white'>
      <h1 className="text-black pt-20 text-center text-3xl">My Experiences</h1>
    </section>
    <section id='contact' className='h-238'>
      <h1 className="text-white pt-20 text-center text-3xl">Contact Me</h1>
    </section>
   </div>
  );
}