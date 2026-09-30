import { HiArrowUpRight } from "react-icons/hi2";
import { profile } from "@/app/data/portfolio";
import ScrollReveal from "./animation/ScrollReveal";

export default function ContactSection() {
  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-heading" className="section-shell section-space contact-section">
      <ScrollReveal selector=":scope > *" stagger={0.12}>
        <div className="contact-topline"><p className="eyebrow">04 / Let’s connect</p><span className="availability"><span aria-hidden="true" />Open to opportunities</span></div>
        <h2 id="contact-heading" tabIndex={-1}>Good things start<br /><span className="muted">with a hello.</span></h2>
        <p className="contact-description">A full stack role, an internship, or an application to build.<br />Let’s connect the pieces and bring it to life.</p>
        <a href={`mailto:${profile.email}`} className="contact-email">{profile.email}<HiArrowUpRight aria-hidden="true" /></a>
        <div className="contact-details">
          <a href={profile.phoneHref} className="text-link">{profile.phone}</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-link">GitHub <HiArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </ScrollReveal>
    </section>
  );
}
