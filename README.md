# Sourav Shaw — Portfolio

A personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS. It highlights my background, skills, projects, certifications, education, and contact information.

## Getting started

### Requirements

- Node.js 20.9 or later
- pnpm

### Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Production build

```bash
pnpm build
pnpm start
```

## Deploy to Vercel

1. Import [this GitHub repository](https://github.com/0xSouravXBT/Sourav_portfolio) in Vercel.
2. Keep the detected Next.js framework settings and deploy. No environment variables are required.

Vercel will build and deploy future updates pushed to the connected branch.

## Project structure

- `app/` — Next.js App Router pages, layout, and global styles
- `components/` — Portfolio sections and reusable UI components
- `lib/site-data.ts` — Profile, contact, project, skills, and education content
- `public/` — Icons, project images, and resume
