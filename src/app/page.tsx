import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";
import ProjectCard from "@/app/components/ProjectCard";
import ContactSection from "@/app/components/ContactSection";
import ScrollReveal from "@/app/components/animation/ScrollReveal";
import IntroAnimation from "@/app/components/animation/IntroAnimation";
import ScrollProgress from "@/app/components/animation/ScrollProgress";
import { profile, projects, skillGroups } from "@/app/data/portfolio";

export default function Home() {
  return (
    <IntroAnimation>
      <ScrollProgress />
      <section id="home" tabIndex={-1} aria-labelledby="home-heading" className="hero section-shell">
        <div className="hero-topline">
          <span className="eyebrow">Full Stack Developer</span>
          <span className="availability"><span aria-hidden="true" />Available for opportunities</span>
        </div>
        <ScrollReveal className="hero-content" trigger="load" selector=".hero-intro, .hero-line, .hero-footer" duration={0.75} stagger={0.1} distance={24}>
          <p className="hero-intro">Hello! I’m Francis.</p>
          <h1 id="home-heading" tabIndex={-1}><span className="hero-line">Building complete</span>{" "}<span className="hero-line">applications.</span>{" "}<span className="hero-line hero-line-muted">Across the stack.</span></h1>
          <div className="hero-footer">
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Let’s talk <HiArrowUpRight aria-hidden="true" /></a>
              <a className="text-link" href="#projects">Explore my projects <HiArrowDown aria-hidden="true" /></a>
            </div>
            <p className="hero-description">I’m Francis Edgard Ibañez, a full stack developer working across web and mobile apps, backend APIs, databases, and deployment.</p>
          </div>
        </ScrollReveal>
        <div className="hero-bottomline">
          <p>Junior roles · Internships · Freelance</p>
          <a href="#projects" className="scroll-link">Scroll to explore <HiArrowDown aria-hidden="true" /></a>
        </div>
      </section>
      <section id="projects" tabIndex={-1} aria-labelledby="projects-heading" className="section-shell section-space">
        <ScrollReveal selector=".section-heading > *" stagger={0.12}>
          <div className="section-heading">
            <div><p className="eyebrow">01 / The portfolio</p><h2 id="projects-heading" tabIndex={-1}>Selected projects<span className="heading-count">({String(projects.length).padStart(2, "0")})</span></h2></div>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="button button-outline">Explore GitHub <HiArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
        </ScrollReveal>
        <ScrollReveal className="project-grid" selector=".project-card" distance={36} duration={0.85} stagger={0.14}>
          {projects.map((project, index) => <ProjectCard key={project.title} {...project} number={index + 1} />)}
        </ScrollReveal>
      </section>
      <section id="about" tabIndex={-1} aria-labelledby="about-heading" className="section-shell section-space">
        <ScrollReveal selector=".about-heading, .about-copy > *" stagger={0.12}>
          <div className="about-grid">
            <div className="about-heading"><p className="eyebrow">02 / A little about me</p><h2 id="about-heading" tabIndex={-1}>From the screen<br />to the server.<br /><span>The whole picture.</span></h2></div>
            <div className="about-copy">
              <p>I’m Francis, a full stack developer. I enjoy connecting every part of an application: what users interact with, how the server handles requests, and how data is stored and retrieved.</p>
              <p className="muted">I work with Node.js, Express.js, Hono, and Bun for backend development, and NeonDB with Drizzle ORM for data. On the client side, I use React, Next.js, and Tailwind CSS for the web, plus React Native and Expo for mobile.</p>
              <p className="muted">My workflow includes testing and deployment alongside development. I’m open to junior full stack roles, internships, and freelance projects where I can contribute across the application and keep learning.</p>
              <dl className="about-facts">
                <div><dt>Focused on</dt><dd>Full stack web &amp; mobile applications</dd></div>
                <div><dt>Across the stack</dt><dd>Frontend · APIs · Databases · Deployment</dd></div>
              </dl>
            </div>
          </div>
        </ScrollReveal>
      </section>
      <section id="skills" tabIndex={-1} aria-labelledby="skills-heading" className="section-shell section-space">
        <ScrollReveal selector=".section-heading > *" stagger={0.12}>
          <div className="section-heading">
            <div><p className="eyebrow">03 / My toolkit</p><h2 id="skills-heading" tabIndex={-1}>A full stack toolkit.</h2></div>
            <p className="section-description">From client applications and backend APIs to databases, testing, and deployment.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal className="skills-grid" selector=".skill-group">
          {skillGroups.map((group, index) => (
            <div className="skill-group" key={group.title}>
              <span className="skill-number" aria-hidden="true">0{index + 1}</span>
              <h3>{group.title}</h3>
              <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              <p>{group.context}</p>
            </div>
          ))}
        </ScrollReveal>
      </section>
      <ContactSection />
    </IntroAnimation>
  );
}
