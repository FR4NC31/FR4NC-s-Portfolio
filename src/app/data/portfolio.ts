export const profile = {
  name: "Francis Edgard O. Ibañez",
  email: "francisedgard16@gmail.com",
  phone: "+63 992 978 4038",
  phoneHref: "tel:+639929784038",
  github: "https://github.com/FR4NC31",
};

export interface Project {
  title: string;
  description: string;
  category: "Website" | "Mobile" | "Capstone";
  image?: string;
  imageAlt?: string;
  imageLayout?: "mobile-showcase";
  coverLabel?: string;
  featured?: boolean;
  comingSoon?: boolean;
  tags: string[];
  focus?: string;
  link?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: "Molave Street Barbers",
    description: "MLV St. is my mobile app capstone for Molave Street Barbers, introducing the barbershop through a branded welcome experience.",
    category: "Capstone",
    image: "/projects/MLVSt/mlv-st-mobile-showcase.png",
    imageAlt: "MLV St. mobile app mockup showing its white splash screen and barbershop welcome screen with Log in and Sign Up buttons",
    imageLayout: "mobile-showcase",
    featured: true,
    tags: [],
    focus: "Splash screen and onboarding, with login and sign-up entry points.",
  },
  {
    title: "PrimeArcDevs",
    description: "A website presenting a software development agency and its services. Built with React, Vite, and Tailwind CSS.",
    category: "Website",
    image: "/projects/PrimeArcDevs/primearcdevs.jpg",
    imageAlt: "PrimeArcDevs development agency website preview",
    tags: ["React", "Vite", "Tailwind CSS"],
    focus: "Agency presentation and frontend interface development.",
    link: "https://primearcdevs.vercel.app/",
    repo: "https://github.com/FR4NC31/PrimeArcDevs",
  },
  {
    title: "Beauty Company",
    description: "A beauty brand showcase built with HTML and CSS, with a focus on product imagery, typography, and page layout.",
    category: "Website",
    image: "/projects/BeautyCompany/beauty.jpg",
    imageAlt: "Beauty Company website preview showing its brand and product presentation",
    tags: ["HTML", "CSS"],
    focus: "Visual hierarchy and styling with core web technologies.",
    repo: "https://github.com/FR4NC31/beauty_company",
  },
  {
    title: "Coming Soon",
    description: "A new mobile app. More details coming soon.",
    category: "Mobile",
    coverLabel: "Coming soon.",
    comingSoon: true,
    tags: [],
  },
];

export const skillGroups = [
  { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS"], context: "Client applications and responsive web interfaces." },
  { title: "Backend & APIs", skills: ["Node.js", "Express.js", "Hono", "Bun"], context: "Server-side application logic and API development." },
  { title: "Database & ORM", skills: ["NeonDB", "Firebase", "Supabase", "MongoDB", "Drizzle ORM"], context: "Database schemas, queries, and application data access." },
  { title: "Deployment", skills: ["Render", "Railway", "Vercel", "Cloudflare", "Netlify"], context: "Taking applications from local development to hosted environments." },
  { title: "Mobile development", skills: ["React Native", "Expo"], context: "Mobile applications as part of my full stack toolkit." },
  { title: "Foundations", skills: ["HTML", "CSS", "JavaScript", "TypeScript"], context: "Core web technologies and languages used across my stack." },
  { title: "Development & testing", skills: ["Git", "GitHub", "Vitest", "Jest", "Maestro", "Bruno", "Bun", "Vite"], context: "Version control, development tooling, and testing across the application." },
  { title: "AI tools", skills: ["ChatGPT", "Claude", "OpenCode"], context: "AI tools in my development workflow." },
];
