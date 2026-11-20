import Image from 'next/image'

import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { projects } from '@/lib/site-data'

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-24 py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I have designed, built and broken."
          description="Each project started as a problem I wanted to understand properly — the code is open, so feel free to look under the hood."
        />

        <div className="mt-12 flex flex-col gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <article className="glass group grid overflow-hidden rounded-3xl transition-colors hover:border-brand/40 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
                <div className="relative aspect-16/9 overflow-hidden border-b border-border/60 lg:aspect-auto lg:min-h-64 lg:border-r lg:border-b-0">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    priority={index === 0}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-tr from-background/70 via-transparent to-transparent"
                  />
                </div>

                <div className="flex flex-col gap-5 p-6 sm:p-8">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-xs tracking-[0.18em] text-brand uppercase">
                      {project.kicker}
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight text-balance sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-pretty text-muted-foreground sm:text-base">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border/60 bg-foreground/5 px-3 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center gap-2 rounded-full border border-border/70 bg-foreground/5 px-4 text-sm font-medium text-foreground transition-colors hover:border-brand/50 hover:bg-foreground/10 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                    >
                      <GithubIcon className="size-4" />
                      View on GitHub
                      <span className="sr-only">{`: ${project.title}`}</span>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
