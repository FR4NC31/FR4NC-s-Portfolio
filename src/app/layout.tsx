import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from '@/app/components/footer'
import { Raleway, IBM_Plex_Mono } from "next/font/google";

// Fonts
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-raleway",
});

const ibmplex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ibmplex",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${ibmplex.variable} bg-[var(--base)] text-white`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
