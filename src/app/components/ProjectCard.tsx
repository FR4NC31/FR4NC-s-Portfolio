import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import type { Project } from "@/app/data/portfolio";

export default function ProjectCard({ title, description, category, image, imageAlt, imageLayout, coverLabel, featured, comingSoon, tags, focus, link, repo, number = 1 }: Project & { number?: number }) {
  return (
    <article className={`project-card${featured ? " project-card-featured" : ""}${comingSoon ? " project-card-upcoming" : ""}${imageLayout === "mobile-showcase" ? " project-card-mobile-showcase" : ""}`}>
      <div className="project-image">
        {image ? (
          <Image src={image} alt={imageAlt ?? title} fill loading={featured ? "eager" : "lazy"} sizes={featured ? "(min-width: 1024px) calc(100vw - 21rem), 90vw" : "(min-width: 1280px) 40vw, (min-width: 768px) 44vw, 90vw"} className="object-contain" />
        ) : (
          <div className="project-cover" aria-hidden="true">
            <span className="eyebrow">{title}</span>
            <span className="project-cover-title">{coverLabel ?? title}</span>
            <span className="project-cover-caption">{category} project</span>
          </div>
        )}
        <span className="project-number" aria-hidden="true">0{number} / {category}</span>
      </div>
      <div className="project-content">
        <div className="project-title-row"><h3>{title}</h3><span className="project-type">{category}</span></div>
        {tags.length > 0 && <div className="project-meta"><span>{tags.join(" / ")}</span></div>}
        <p className="project-description">{description}</p>
        {focus && <p className="project-focus"><span>Focus</span>{focus}</p>}
        {(link || repo || (imageLayout === "mobile-showcase" && image)) && <div className="project-links">
          {imageLayout === "mobile-showcase" && image && <a href={image} target="_blank" rel="noopener noreferrer" className="text-link">View app preview <HiArrowUpRight aria-hidden="true" /><span className="sr-only"> — {title} (opens in a new tab)</span></a>}
          {link && <a href={link} target="_blank" rel="noopener noreferrer" className="text-link">Live website <HiArrowUpRight aria-hidden="true" /><span className="sr-only"> — {title} (opens in a new tab)</span></a>}
          {repo && <a href={repo} target="_blank" rel="noopener noreferrer" className="text-link">View code <HiArrowUpRight aria-hidden="true" /><span className="sr-only"> — {title} (opens in a new tab)</span></a>}
        </div>}
      </div>
    </article>
  );
}
