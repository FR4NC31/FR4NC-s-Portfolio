"use client";

import { useState, type FormEvent } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import ScrollReveal from "./animation/ScrollReveal";
import SocialLinks from "./SocialLinks";

export default function ContactSection() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Your message hasn’t been sent. Message delivery is coming soon; please reach out on LinkedIn for now.");
  }

  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-heading" className="section-shell section-space contact-section">
      <ScrollReveal className="contact-panel" selector=".contact-copy, .contact-form" stagger={0.12}>
        <div className="contact-copy">
          <p className="eyebrow">06 / Let’s connect</p>
          <h2 id="contact-heading" tabIndex={-1}>Let’s build<br /><span className="muted">something together.</span></h2>
          <p className="contact-description">Have a project, opportunity, or collaboration in mind? Send me a message and I’ll get back to you.</p>
          <SocialLinks className="contact-details" />
        </div>
        <form className="contact-form" onSubmit={handleSubmit} aria-describedby="contact-note" onChange={() => { if (status) setStatus(""); }}>
          <div className="form-row">
            <div className="form-field"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required maxLength={120} /></div>
            <div className="form-field"><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></div>
          </div>
          <div className="form-field"><label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" type="text" placeholder="What’s on your mind?" required maxLength={200} /></div>
          <div className="form-field"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows={5} placeholder="Tell me a little about it…" required maxLength={5000} /></div>
          <p id="contact-note" className="form-note">Message delivery is coming soon. You can reach me on LinkedIn in the meantime.</p>
          <button type="submit" className="button button-primary">Send Message <HiArrowUpRight aria-hidden="true" /></button>
          <p role="status" aria-live="polite" className="form-status">{status}</p>
        </form>
      </ScrollReveal>
    </section>
  );
}
