# Omith Hasan Portfolio

Modern responsive portfolio built with Next.js, TypeScript and CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Customize
- Edit content in `app/page.tsx`
- Edit styling in `app/globals.css`
- Update metadata in `app/layout.tsx`
- Replace the placeholder social links in the Contact section with real profiles.

## Photos

All profile photos live in `public/images/` and are served from `/images/...`:

| File | Used in | Notes |
| --- | --- | --- |
| `omith-hasan-avatar.jpg` | Navbar brand avatar | Square-ish crop, 756×944 |
| `omith-hasan.jpg` | Hero card (below the terminal bar) | Studio portrait, 1402×1122 |
| `omith-hasan-graduation.jpg` | Education section gallery | Graduation, 960×1280 |
| `omith-hasan-iubat.jpg` | Education section gallery | IUBAT campus, 868×1085 |
| `omith-hasan-graduation-cap.jpg` | Not used yet | Graduation with cap, 960×1280 |
| `omith-hasan-rooftop.jpg` | Not used yet | Rooftop shot, 737×1600 |

To swap a photo, drop a replacement in `public/images/` with the same filename (or
update the `src` in `app/page.tsx`). Images use `next/image`, so keep the
`width`/`height` props in sync with the real pixel size of the file.
