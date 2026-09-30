import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const interTight = localFont({ src: "../assets/fonts/InterTight-Variable.ttf", weight: "100 900", variable: "--font-inter-tight", display: "swap" });
const ibmplex = localFont({ src: "../assets/fonts/IBMPlexMono-Bold.ttf", weight: "700", variable: "--font-ibmplex", display: "swap" });

const siteUrl = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");
const title = "Francis Edgard Ibañez — Full Stack Developer | FR4NC";
const description = "Francis Edgard Ibañez is a full stack developer working across web and mobile applications, backend APIs, databases, testing, and deployment. Open to junior roles, internships, and freelance projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), title, description,
  authors: [{ name: "Francis Edgard O. Ibañez" }],
  openGraph: { title, description, type: "website", locale: "en_US", siteName: "FR4NC — Portfolio" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${ibmplex.variable}`}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <div className="site-content">
          <main id="main-content" tabIndex={-1}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
