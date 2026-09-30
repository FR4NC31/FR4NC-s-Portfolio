# FR4NC — Portfolio

Francis Edgard Ibañez’s portfolio, built with Next.js, TypeScript, and Tailwind CSS.
A dark-only layout inspired by [Showcasy Home V1](https://showcasy.webflow.io/home-pages/home-v1), with oversized typography, rounded project panels, a right sidebar on desktop, and a collapsible mobile menu.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Next.js generates `next-env.d.ts` and route types automatically.
If VS Code retains old `next/image` diagnostics, select **TypeScript: Select TypeScript Version → Use Workspace Version**, then **TypeScript: Restart TS Server**.
Next.js includes its own types; do not install `@types/next` or add an untyped module declaration.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

`typecheck` generates Next.js types before running TypeScript, including on a fresh checkout.
Fonts are loaded from `src/assets/fonts` and do not require Google Fonts at build time.
Inter Tight is distributed under the SIL Open Font License; its license is included beside the font file.

## Content

- `src/app/data/portfolio.ts`: contact information, projects, and skill groups.
- `src/app/page.tsx`: introduction, About section, and section order.
- `src/app/globals.css`: colors, typography, spacing, and responsive layout.
- `src/app/components/navbar.tsx`: right sidebar and mobile navigation.
- `src/app/layout.tsx`: search and social metadata.
- `src/app/opengraph-image.tsx`: generated social preview.

Only supplied or verified content is displayed. Add education, employment history,
project roles, challenges, and outcomes once the details are confirmed. Do not invent metrics.

The old inactive CV button is replaced by a contact link. To offer a résumé later,
add the real PDF to `public` and link to it with an accessible download link.
Add LinkedIn or other social links only when their real URLs are available.
Beauty Company has a source link only because its listed deployment returned 404.
The portrait is no longer rendered; the original asset remains available in `public`.

## Deployment

Set `SITE_URL` to the full public origin (for example, `https://your-domain.com`) for
absolute social image URLs. On Vercel, the production project URL is used automatically
when `SITE_URL` is unset. Local development falls back to http://localhost:3000.

```bash
npm run build
npm start
```

Before publishing, check the actual production metadata, project destinations, keyboard
navigation, and mobile menu. The layout respects the visitor’s reduced-motion setting.
