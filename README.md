# FR4NC — Portfolio

Francis Edgard Ibañez’s portfolio, built with Next.js, TypeScript, and Tailwind CSS.
The existing dark theme, oversized typography, rounded project panels, right desktop
sidebar, and collapsible mobile navigation are retained.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Fonts are local and do not require a Google Fonts request.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

Next.js generates route types before TypeScript checks. If VS Code retains stale
diagnostics, select the workspace TypeScript version and restart its TypeScript server.

## Content

- `src/app/data/portfolio.ts`: developer identity, public social links, projects, skills, and experience.
- `src/app/page.tsx`: hero, About, projects, skills, experience, education, and contact.
- `src/app/components/ProjectCard.tsx`: existing project panels with labels and technology tags.
- `src/app/components/ContactSection.tsx`: labeled, responsive contact form.
- `src/app/globals.css`: original theme plus responsive styling for the new sections.
- `src/app/layout.tsx`: search and social metadata.

Vitaqera is explicitly in development. Its card does not link to a private repository
or show invented app screenshots. The other projects retain their supplied previews.

The contact form uses native required-field and email validation and posts its
name, email, subject, and message to the existing `/api/contact` route. It disables
the submit button while sending, clears the fields after a successful response,
and preserves the entered message when a request fails. Status messages are
announced to assistive technology. The route handles delivery through the existing
server-side Nodemailer configuration. GitHub and LinkedIn remain available for contact.

Delivery requires real values for `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`,
and `CONTACT_TO_EMAIL` in the existing local environment file. Empty values and
template placeholders are rejected before an SMTP connection is attempted. The
server logs only the affected variable names or SMTP error codes; the form shows
the route’s public error message and retains the message for a retry.

For Gmail, use the real sending Gmail address as `SMTP_USER`, a Google App Password
as `SMTP_PASS`, and the intended recipient as `CONTACT_TO_EMAIL`. App Passwords
require 2-Step Verification; see [Google’s setup instructions](https://support.google.com/accounts/answer/185833?hl=en).
Restart the development server after updating the environment file.
Port 465 uses implicit TLS, while port 587 uses STARTTLS as documented by
[Nodemailer](https://nodemailer.com/smtp).

## Supplied assets

`src/app/data/assets.ts` resolves existing public files at render/build time.
Missing files never produce fake download links or broken project images.

The supplied files are now connected:

- `src/assets/VQ_AppIcon.png` is the original Vitaqera logo; its optimized copy
  is served from `public/projects/Vitaqera/VQ_AppIcon.webp`. The card presents
  it in a black phone frame with a white screen, matching the supplied reference.
  The frame is CSS decoration around the supplied branding, not an app screenshot.
- `src/assets/Francis_Ibanez_Resume.pdf` is the original résumé; an identical
  public copy is served from `public/resume/Francis_Ibanez_Resume.pdf`.

When replacing either original, update its corresponding public copy as well.

- **Vitaqera:** place the supplied logo in `public/projects/Vitaqera/` as PNG,
  JPEG, WebP, or AVIF. Only the original logo should be used.
- **Résumé:** place the actual PDF in `public/resume/`. Its real filename is used
  by the hero download link with the HTML `download` attribute. If several PDFs
  are present, the alphabetically first is used. A résumé/CV PDF in `public/`
  is also supported. Until a PDF exists, the button says “Résumé coming soon”
  and is disabled.
- **Social preview:** add the final image as `public/og-image.png`. Open Graph
  and Twitter image metadata activate automatically when the file exists.
  No new preview image is generated. Twitter uses a text summary until then.

Rebuild after adding assets to a production deployment.

## Motion

GSAP handles the existing introduction, hero entrance, and section reveals.
The small React Bits SpotlightCard adaptation adds a subtle glow to project images
on devices with a mouse. It has no animation loop or React state updates on movement.
See [source attribution and license](docs/react-bits.md).

Reduced-motion visitors get immediate content, native instant anchor navigation,
and no decorative intro, hover glow, animated progress bar, or nonessential transitions.
Project images load lazily through Next.js Image.

## Deployment

The existing `SITE_URL` configuration supplies the production origin. On Vercel,
the existing production project URL is used automatically when it is unset.
Canonical metadata is emitted only when a production origin is configured;
local development does not advertise localhost as a canonical URL.

```bash
npm run build
npm start
```

No deployment is performed as part of a local content update.
