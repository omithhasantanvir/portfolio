# Omith Hasan — Portfolio

Portfolio of **Omith Hasan**, IT & Network Engineer — networking, cybersecurity, system
administration and broadcast IT.

Built with Next.js (App Router), TypeScript and hand-written CSS. No UI framework, no
animation library: the only client JavaScript is the header/nav, the scroll progress bar,
section reveals and the contact form.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

> If PowerShell refuses to run `npm` (`npm.ps1 cannot be loaded because running scripts is
> disabled`), either run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once, or use
> `npm.cmd run dev`.

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Structure

```
app/
  layout.tsx     fonts, metadata, Open Graph/Twitter, JSON-LD (Person + WebSite), header + footer
  page.tsx       composes the home page sections
  globals.css    the whole design system (tokens, sections, responsive, reduced motion, print)
  cv/page.tsx    print-friendly CV — "Print / Save as PDF"
  sitemap.ts     /sitemap.xml
  robots.ts      /robots.txt
components/      one component per section (only interactive ones are client components)
lib/
  site.ts        name, role, contact details, social links, navigation
  data/          expertise, experience, projects, education, focus areas, architecture layers
public/images/   profile photos
```

## Editing content

| What | File |
| --- | --- |
| Name, role, email, phone, location, social links, nav | `lib/site.ts` |
| Technical expertise groups | `lib/data/expertise.ts` |
| Professional experience | `lib/data/experience.ts` |
| Projects / case studies | `lib/data/projects.ts` |
| Education, certifications, focus areas, architecture layers | `lib/data/profile.ts` |

### Photos

| File | Used in |
| --- | --- |
| `omith-hasan-avatar.jpg` | Header brand mark (756×944) |
| `omith-hasan.jpg` | About section (1402×1122) |
| `omith-hasan-graduation.jpg` | Education gallery (960×1280) |
| `omith-hasan-iubat.jpg` | Education gallery (868×1085) |
| `omith-hasan-graduation-cap.jpg` | Not used yet (960×1280) |
| `omith-hasan-rooftop.jpg` | Not used yet (737×1600) |

Images use `next/image`. If you replace a file with different pixel dimensions, update the
`width`/`height` props where it is used.

### Publishing a project case study

In `lib/data/projects.ts`, fill in `problem`, `solution`, `role`, `architecture`, `outcome`,
add `links`, then set `status: 'documented'`. The card automatically switches from the
"case study in progress" placeholder to the full case-study layout. Only publish outcomes
that were actually measured.

## Still to fill in

- `lib/site.ts` → `socials.linkedin` — currently inferred from the GitHub handle, please confirm.
- Resume file: `public/cv/omith-hasan-resume.pdf` is the downloadable CV. Every
  "Download CV" button links to it via `site.cv` in `lib/site.ts`. Replace that PDF to
  update the resume everywhere; the `/cv` page links to the same file.

## Deployment

Push to GitHub and import the repository on Vercel. The canonical URL lives in
`lib/site.ts` (`site.url`) — update it if the domain changes; it feeds the metadata, sitemap
and structured data.

