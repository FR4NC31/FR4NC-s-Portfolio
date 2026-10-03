import { HiArrowUpRight } from "react-icons/hi2";
import { profile } from "@/app/data/portfolio";

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`social-links ${className}`}>
      {[
        { label: "GitHub", href: profile.github },
        { label: "LinkedIn", href: profile.linkedin },
      ].map(({ label, href }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-link">
          {label} <HiArrowUpRight aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ))}
    </div>
  );
}
