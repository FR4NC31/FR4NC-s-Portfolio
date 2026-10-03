export const profile = {
  name: "Francis Edgard Ibañez",
  title: "Full Stack & Mobile Developer",
  github: "https://github.com/FR4NC31",
  linkedin: "https://www.linkedin.com/in/francis-edgard-ibanez-84752b398/",
};

export interface Project {
  title: string;
  description: string;
  category: "Website" | "Mobile" | "Capstone";
  label: string;
  image?: string;
  imageAlt?: string;
  imageLayout?: "mobile-showcase" | "phone-mockup";
  status?: string;
  releaseNote?: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: "Vitaqera",
    label: "Nutrition & Food Tracking App",
    category: "Mobile",
    description: "A mobile nutrition and food-tracking application focused on simple meal logging, progress tracking, and an offline-first experience.",
    imageAlt: "Vitaqera nutrition and food tracking app logo",
    imageLayout: "phone-mockup",
    status: "In Development",
    releaseNote: "Stable Release Coming Soon",
    tags: ["React Native", "Expo", "TypeScript", "Hono", "PostgreSQL", "Neon", "SQLite", "Drizzle ORM"],
  },
  {
    title: "MLV St. — Appointment and Reservation System",
    label: "Capstone Project · Mobile Application",
    category: "Capstone",
    description: "A mobile appointment and reservation system developed as a capstone project for Molave Street Barbers, allowing customers to access services, manage accounts, and schedule appointments digitally.",
    image: "/projects/MLVSt/mlv-st-mobile-showcase.webp",
    imageAlt: "MLV St. mobile app preview showing the splash screen and customer login and sign-up entry points",
    imageLayout: "mobile-showcase",
    tags: ["React Native", "Expo", "Supabase", "OAuth 2.0"],
    link: "https://molavestreetbarbers.vercel.app/",
    linkLabel: "Visit our website",
  },
  {
    title: "PrimeArcDevs",
    label: "Frontend Web Application",
    category: "Website",
    description: "A responsive software development agency website built to present services, projects, and company information through a modern web interface.",
    image: "/projects/PrimeArcDevs/primearcdevs.jpg",
    imageAlt: "PrimeArcDevs development agency website preview",
    tags: ["React", "Vite", "Tailwind CSS"],
    link: "https://primearcdevs.vercel.app/",
    repo: "https://github.com/FR4NC31/PrimeArcDevs",
  },
  {
    title: "Beauty Company",
    label: "Freelance Project · Frontend Website",
    category: "Website",
    description: "My first freelance web project, built for a beauty-focused brand with an emphasis on responsive layout, visual presentation, and a clean user-facing experience.",
    image: "/projects/BeautyCompany/beauty.jpg",
    imageAlt: "Beauty Company website preview showing its brand and product presentation",
    tags: ["HTML5", "CSS3"],
    repo: "https://github.com/FR4NC31/beauty_company",
  },
];

export const skillGroups = [
  { title: "Frontend", skills: ["React", "TypeScript", "Vite", "Next.js"], context: "Responsive web interfaces and client applications." },
  { title: "Mobile", skills: ["React Native", "Expo"], context: "Mobile applications for iOS and Android." },
  { title: "Backend", skills: ["Node.js", "Express.js", "Hono", "Bun"], context: "Application logic, backend services, and APIs." },
  { title: "Databases & ORM", skills: ["PostgreSQL", "Neon", "MongoDB", "SQLite", "Drizzle ORM"], context: "Data models, queries, and local storage." },
  { title: "Auth & State/Data", skills: ["Clerk", "Zustand", "TanStack Query"], context: "Authentication, application state, and server data." },
  { title: "Testing", skills: ["Vitest", "Maestro"], context: "Unit tests and mobile end-to-end testing." },
  { title: "Developer Tools", skills: ["Git", "GitHub", "Bruno"], context: "Version control, collaboration, and API testing." },
];

export const additionalSkills = ["Firebase", "Supabase", "Tailwind CSS", "Jest", "Postman", "Netlify", "Render", "Figma"];

export const experience = {
  role: "Software Engineer Intern",
  company: "SOCIA I.T. Solutions",
  period: "Jan 2026 – Apr 2026",
  project: "Assigned to the Lootbx Project",
  responsibilities: [
    "Contributed to production-level mobile app features using React Native and Expo",
    "Translated Figma designs into responsive, reusable components",
    "Refactored code to improve performance, maintainability, and code quality",
    "Managed EAS Build workflows to support QA testing and development builds",
  ],
};
