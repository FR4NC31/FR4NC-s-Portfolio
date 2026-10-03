import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { profile } from "@/app/data/portfolio";
import { getSocialImage } from "@/app/data/assets";

const interTight = localFont({ src: "../assets/fonts/InterTight-Variable.ttf", weight: "100 900", variable: "--font-inter-tight", display: "swap" });
const ibmplex = localFont({ src: "../assets/fonts/IBMPlexMono-Bold.ttf", weight: "700", variable: "--font-ibmplex", display: "swap" });

const productionUrl = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);
const title = `${profile.name} — ${profile.title} | FR4NC`;
const description = "Francis Edgard Ibañez is a Full Stack & Mobile Developer building web applications, React Native apps, backend APIs, databases, and connected cross-platform systems.";
// Add the final image to public/og-image.png; no generated or missing image is advertised.
const socialImage = getSocialImage();
const images = socialImage ? [{ url: socialImage, alt: title }] : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl || "http://localhost:3000"),
  title,
  description,
  authors: [{ name: profile.name }],
  ...(productionUrl ? { alternates: { canonical: "/" } } : {}),
  openGraph: { title, description, type: "website", locale: "en_US", siteName: "FR4NC — Portfolio", ...(productionUrl ? { url: "/" } : {}), images },
  twitter: { card: socialImage ? "summary_large_image" : "summary", title, description, images },
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
