import { profile } from "@/app/data/portfolio";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="site-footer section-shell">
      <div className="footer-brand"><a href="#home">FR4NC</a><p>{profile.title}</p></div>
      <SocialLinks />
      <p>© 2026 {profile.name}</p>
    </footer>
  );
}
