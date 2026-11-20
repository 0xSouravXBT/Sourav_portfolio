# Personal Portfolio Website

## Project Overview

This project is Sourav Shaw's personal portfolio website. It presents his background as a Computer Science undergraduate, technical skills, selected projects, education, training, and contact information in one place. The website is built with Next.js and is intended to help recruiters and collaborators learn about his work and reach out.

## Live Demo

[View the live portfolio](https://souravportfolio-delta.vercel.app/)

## Features

- Responsive portfolio with sections for Home, About, Skills, Projects, Certifications, Education, and Contact.
- Desktop and mobile navigation, including an active section indicator and mobile menu.
- Profile introduction with links to projects, contact information, and a downloadable resume.
- Skill groups and project cards with descriptions, technologies, images, and GitHub links.
- Education and training details.
- Email, phone, GitHub, and LinkedIn contact links.
- Animated content reveals with reduced-motion support.
- Page metadata, social sharing metadata, and site icons.
- Vercel Analytics in production.

## Technologies Used

- **Next.js** — App Router and application framework.
- **React** — UI components.
- **TypeScript** — application source and type checking.
- **Tailwind CSS** — styling.
- **Framer Motion** — animation and reveal effects.
- **Lucide React** — interface icons.
- **Vercel Analytics** — production analytics.
- **pnpm** — dependency management, indicated by `pnpm-lock.yaml`.

## Project Structure

```text
.
├── app/
│   ├── globals.css         # Global styles and Tailwind theme
│   ├── layout.tsx          # Root layout, metadata, icons, and analytics
│   └── page.tsx            # Portfolio page and section composition
├── components/
│   ├── ui/                 # Reusable UI components
│   └── *.tsx               # Portfolio sections and shared components
├── lib/
│   ├── site-data.ts        # Profile, skills, projects, and education content
│   └── utils.ts            # Shared utility functions
├── public/
│   ├── projects/           # Project preview images
│   └── resume.pdf          # Downloadable resume
├── components.json         # UI component tooling configuration
├── next.config.mjs         # Next.js configuration and response headers
├── package.json            # Dependencies and project scripts
├── pnpm-lock.yaml          # Locked dependency versions
├── postcss.config.mjs      # PostCSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Installation and Local Development

Install [Node.js](https://nodejs.org/) and pnpm, then run these commands from the project root:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create and run a production build locally:

```bash
pnpm build
pnpm start
```

## Deployment

The website is deployed on [Vercel](https://vercel.com/). To deploy your own copy, import the repository into Vercel and use the detected Next.js settings. No application environment variables are required for the current project.

## Author

**Sourav Shaw**

- [GitHub](https://github.com/0xSouravXBT)
- [LinkedIn](https://linkedin.com/in/sourav-shaw-107ba535b)
