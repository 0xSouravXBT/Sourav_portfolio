'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Download, Mail } from 'lucide-react'

import { contact, profile } from '@/lib/site-data'

const marquee = [
  'Python',
  'React.js',
  'Node.js',
  'MongoDB',
  'SQL',
  'Docker',
  'REST APIs',
  'Machine Learning',
]

export function Hero() {
  const reduceMotion = useReducedMotion()

  const rise = (delay: number) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[34rem] w-[64rem] -translate-x-1/2 rounded-full bg-brand/18 blur-[130px]" />
        <div className="absolute top-24 right-[-8rem] h-80 w-80 rounded-full bg-brand-alt/18 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--foreground)_5%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--foreground)_5%,transparent)_1px,transparent_1px)] bg-size-[64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div {...rise(0)}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 py-1.5 pr-4 pl-2 font-mono text-xs tracking-wide text-muted-foreground backdrop-blur-xl">
            <span className="relative flex size-4 items-center justify-center">
              <span className="absolute size-2 animate-ping rounded-full bg-brand/70" />
              <span className="size-2 rounded-full bg-brand" />
            </span>
            Open to Software Engineer internships
          </span>
        </motion.div>

        <motion.h1
          id="hero-title"
          {...rise(0.08)}
          className="mt-7 text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          <span className="text-gradient">{profile.name}</span>
        </motion.h1>

        <motion.p
          {...rise(0.16)}
          className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xl font-medium text-foreground/90 sm:text-2xl"
        >
          {profile.title}
          <span
            aria-hidden="true"
            className="hidden h-px w-12 bg-linear-to-r from-brand to-brand-alt sm:block"
          />
          <span className="font-mono text-sm text-muted-foreground sm:text-base">
            CSE &apos;27 · Narula Institute of Technology
          </span>
        </motion.p>

        <motion.p
          {...rise(0.24)}
          className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
        >
          {profile.subtitle}
        </motion.p>

        <motion.div {...rise(0.32)} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-linear-to-br from-brand to-brand-alt px-5 text-sm font-medium text-primary-foreground shadow-lg shadow-brand/25 transition-transform hover:-translate-y-0.5 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            View Projects
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href={profile.resumeHref}
            download="Sourav-Shaw-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <Download className="size-4" aria-hidden="true" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <Mail className="size-4" aria-hidden="true" />
            Contact Me
          </a>
        </motion.div>

        <motion.ul
          {...rise(0.4)}
          className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/60 pt-8 font-mono text-xs tracking-widest text-muted-foreground uppercase"
        >
          {marquee.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span aria-hidden="true" className="size-1 rounded-full bg-brand-alt" />
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.div
          {...rise(0.5)}
          className="mt-14 flex items-center justify-between gap-4 text-xs text-muted-foreground"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <ArrowDown className="size-3.5 animate-bounce" aria-hidden="true" />
            Scroll to explore
          </a>
          <span className="font-mono">{contact.location}</span>
        </motion.div>
      </div>
    </section>
  )
}
