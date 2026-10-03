import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";
import ProjectCard from "@/app/components/ProjectCard";
import ContactSection from "@/app/components/ContactSection";
import SocialLinks from "@/app/components/SocialLinks";
import ScrollReveal from "@/app/components/animation/ScrollReveal";
import IntroAnimation from "@/app/components/animation/IntroAnimation";
import ScrollProgress from "@/app/components/animation/ScrollProgress";
import { profile, projects, skillGroups, additionalSkills, experience } from "@/app/data/portfolio";
import { getResumePath, getVitaqeraImage } from "@/app/data/assets";

export default function Home() {
  const resumePath = getResumePath();
  const vitaqeraImage = getVitaqeraImage();

  return (
    <IntroAnimation>
      <ScrollProgress />
      <section id="home" tabIndex={-1} aria-labelledby="home-heading" className="hero section-shell">
        <div className="hero-topline">
          <span className="eyebrow">{profile.title}</span>
          <span className="availability"><span aria-hidden="true" />Available for opportunities</span>
        </div>
        <ScrollReveal className="hero-content" trigger="load" selector=".hero-intro, .hero-line, .hero-footer" duration={0.75} stagger={0.1} distance={24}>
          <p className="hero-intro">{profile.name}</p>
          <h1 id="home-heading" tabIndex={-1}><span className="hero-line">Building complete</span>{" "}<span className="hero-line">applications.</span>{" "}<span className="hero-line hero-line-muted">Across the stack.</span></h1>
          <div className="hero-footer">
            <div className="hero-connections">
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">View Projects <HiArrowUpRight aria-hidden="true" /></a>
                {resumePath ? (
                  <a className="button button-outline" href={resumePath} download>Download Résumé <HiArrowDown aria-hidden="true" /></a>
                ) : (
                  <span className="resume-unavailable"><button type="button" className="button button-outline" disabled aria-describedby="resume-note">Download Résumé <HiArrowDown aria-hidden="true" /></button><span id="resume-note">Résumé coming soon</span></span>
                )}
              </div>
              <SocialLinks />
            </div>
            <p className="hero-description">I build web and mobile applications, backend APIs, databases, and authentication systems—with shared services connecting platforms when the project calls for it.</p>
          </div>
        </ScrollReveal>
        <div className="hero-bottomline">
          <p>Junior roles · Freelance · Collaboration</p>
          <a href="#projects" className="scroll-link">Scroll to explore <HiArrowDown aria-hidden="true" /></a>
        </div>
      </section>

      <section id="about" tabIndex={-1} aria-labelledby="about-heading" className="section-shell section-space">
        <ScrollReveal selector=".about-heading, .about-copy" stagger={0.12}>
          <div className="about-grid">
            <div className="about-heading"><p className="eyebrow">01 / A little about me</p><h2 id="about-heading" tabIndex={-1}>From the screen<br />to the server.<br /><span>The whole picture.</span></h2></div>
            <div className="about-copy">
              <p>I’m Francis, a Full Stack &amp; Mobile Developer focused on building practical web and mobile applications from interface to backend. I work across frontend development, mobile apps, APIs, databases, authentication, testing, and deployment.</p>
              <p className="muted">I’m especially interested in building connected systems where web and mobile applications share the same backend services, authentication, APIs, and database when the project requires it.</p>
              <p className="muted">I enjoy building complete applications with clean architecture, maintainable code, and reliable data flow across platforms.</p>
              <dl className="about-facts">
                <div><dt>Focused on</dt><dd>Full stack web &amp; mobile applications</dd></div>
                <div><dt>Across the stack</dt><dd>Interfaces · APIs · Auth · Data</dd></div>
              </dl>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section id="projects" tabIndex={-1} aria-labelledby="projects-heading" className="section-shell section-space">
        <ScrollReveal selector=".section-heading > *" stagger={0.12}>
          <div className="section-heading">
            <div><p className="eyebrow">02 / The portfolio</p><h2 id="projects-heading" tabIndex={-1}>Featured projects<span className="heading-count">({String(projects.length).padStart(2, "0")})</span></h2></div>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="button button-outline">Explore GitHub <HiArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
        </ScrollReveal>
        <ScrollReveal className="project-grid" selector=".project-card" distance={24} duration={0.75} stagger={0.12}>
          {projects.map((project, index) => <ProjectCard key={project.title} {...project} image={project.title === "Vitaqera" ? vitaqeraImage : project.image} number={index + 1} />)}
        </ScrollReveal>
      </section>

      <section id="skills" tabIndex={-1} aria-labelledby="skills-heading" className="section-shell section-space">
        <ScrollReveal selector=".section-heading > *" stagger={0.12}>
          <div className="section-heading">
            <div><p className="eyebrow">03 / My toolkit</p><h2 id="skills-heading" tabIndex={-1}>A full stack toolkit.</h2></div>
            <p className="section-description">The tools I use across interfaces, mobile apps, backend services, and application data.</p>
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
        <div className="additional-skills">
          <h3>Additional Experience</h3>
          <ul>{additionalSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
        </div>
      </section>

      <section id="experience" tabIndex={-1} aria-labelledby="experience-heading" className="section-shell section-space experience-section">
        <ScrollReveal selector=".section-heading, .experience-card" stagger={0.12}>
          <div className="section-heading"><div><p className="eyebrow">04 / Putting it into practice</p><h2 id="experience-heading" tabIndex={-1}>Experience.</h2></div></div>
          <article className="experience-card">
            <div className="experience-summary">
              <p className="experience-period">{experience.period}</p>
              <h3>{experience.role}</h3>
              <p className="experience-company">{experience.company}</p>
              <p className="experience-project">{experience.project}</p>
            </div>
            <ul className="experience-responsibilities">{experience.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </ScrollReveal>
      </section>

      <section id="education" tabIndex={-1} aria-labelledby="education-heading" className="section-shell section-space education-section">
        <ScrollReveal selector=".education-heading, .education-details" stagger={0.12}>
          <div className="education-grid">
            <div className="education-heading"><p className="eyebrow">05 / The foundation</p><h2 id="education-heading" tabIndex={-1}>Education.</h2></div>
            <div className="education-details"><h3>Bachelor of Science in Information Technology</h3><p>Colegio de Montalban</p><span>Graduated 2026</span></div>
          </div>
        </ScrollReveal>
      </section>

      <ContactSection />
    </IntroAnimation>
  );
}
