import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import type { Project } from "@/app/data/portfolio";
import SpotlightCard from "./reactbits/SpotlightCard";
import PhoneMockup from "./PhoneMockup";

export default function ProjectCard({ title, description, category, label, image, imageAlt, imageLayout, status, releaseNote, tags, link, linkLabel, repo, number = 1 }: Project & { number?: number }) {
  return (
    <article className={`project-card${imageLayout ? ` project-card-${imageLayout}` : ""}`}>
      <SpotlightCard className="project-image">
        {image && imageLayout === "phone-mockup" ? (
          <PhoneMockup image={image} imageAlt={imageAlt ?? title} />
        ) : image ? (
          <Image src={image} alt={imageAlt ?? title} fill loading="lazy" sizes="(min-width: 1600px) 640px, (min-width: 1024px) calc((100vw - 11rem - 10vw - 1.75rem) / 2), (min-width: 768px) 44vw, 90vw" className="object-contain" />
        ) : (
          <div className="project-placeholder"><span>{title}</span></div>
        )}
        <span className="project-number" aria-hidden="true">0{number} / {category}</span>
      </SpotlightCard>
      <div className="project-content">
        <p className="project-label">{label}</p>
        <div className="project-title-row"><h3>{title}</h3></div>
        {status && <div className="project-status"><span className="status-badge">{status}</span><span>{releaseNote}</span></div>}
        <p className="project-description">{description}</p>
        <ul className="project-tags" aria-label={`${title} technologies`}>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        {(link || repo || (imageLayout === "mobile-showcase" && image)) && <div className="project-links">
          {!link && imageLayout === "mobile-showcase" && image && <a href={image} target="_blank" rel="noopener noreferrer" className="text-link">View app preview <HiArrowUpRight aria-hidden="true" /><span className="sr-only"> — {title} (opens in a new tab)</span></a>}
          {link && <a href={link} target="_blank" rel="noopener noreferrer" className="text-link">{linkLabel ?? "Live website"} <HiArrowUpRight aria-hidden="true" /><span className="sr-only"> — {title} (opens in a new tab)</span></a>}
          {repo && <a href={repo} target="_blank" rel="noopener noreferrer" className="text-link">View code <HiArrowUpRight aria-hidden="true" /><span className="sr-only"> — {title} (opens in a new tab)</span></a>}
        </div>}
      </div>
    </article>
  );
}
