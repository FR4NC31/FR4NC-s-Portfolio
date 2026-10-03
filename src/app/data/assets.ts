import "server-only";
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

const publicDirectory = path.join(process.cwd(), "public");

function publicFile(relativePath: string) {
  return existsSync(path.join(publicDirectory, relativePath))
    ? `/${relativePath.split(path.sep).map(encodeURIComponent).join("/")}`
    : undefined;
}

// Only link to supplied files. Add the résumé PDF to public/resume.
export function getResumePath() {
  const resumeDirectory = path.join(publicDirectory, "resume");
  if (existsSync(resumeDirectory)) {
    const pdf = readdirSync(resumeDirectory, { withFileTypes: true })
      .filter((file) => file.isFile() && /\.pdf$/i.test(file.name))
      .sort((a, b) => a.name.localeCompare(b.name))[0];
    if (pdf) return publicFile(path.join("resume", pdf.name));
  }
  const rootPdf = readdirSync(publicDirectory, { withFileTypes: true })
    .find((file) => file.isFile() && /(?:resume|résumé|cv).*\.pdf$/i.test(file.name));
  return rootPdf ? publicFile(rootPdf.name) : undefined;
}

export function getVitaqeraImage() {
  const directory = path.join(publicDirectory, "projects", "Vitaqera");
  if (!existsSync(directory)) return undefined;
  const image = readdirSync(directory, { withFileTypes: true })
    .filter((file) => file.isFile() && /\.(?:webp|avif|png|jpe?g)$/i.test(file.name))
    .sort((a, b) => a.name.localeCompare(b.name))[0];
  return image ? publicFile(path.join("projects", "Vitaqera", image.name)) : undefined;
}

export function getSocialImage() {
  return publicFile("og-image.png");
}
