import {
  Code2,
  Cpu,
  Database,
  LayoutTemplate,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/lib/site-data'

const icons: Record<string, LucideIcon> = {
  code: Code2,
  layout: LayoutTemplate,
  database: Database,
  cpu: Cpu,
  wrench: Wrench,
  users: Users,
}

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative scroll-mt-24 py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-brand/10 blur-[120px]"
      />
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit I build with."
          description="A mix of languages, frameworks and fundamentals I use to take an idea from a rough sketch to something people can actually run."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon] ?? Code2
            return (
              <li key={group.title}>
                <Reveal delay={(index % 3) * 0.08} className="h-full">
                  <article className="glass group h-full rounded-3xl p-6 transition-colors hover:border-brand/40">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-brand/20 to-brand-alt/20 text-foreground ring-1 ring-inset ring-border/60">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <h3 className="text-base font-semibold tracking-tight">
                        {group.title}
                      </h3>
                    </div>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-border/60 bg-foreground/5 px-3 py-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
