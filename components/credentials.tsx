import { Award, GraduationCap } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { certifications, education } from '@/lib/site-data'

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-title"
      className="scroll-mt-24 py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Training and credentials."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {certifications.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 0.08} className="h-full">
                <article className="glass flex h-full flex-col gap-4 rounded-3xl p-6 sm:p-8">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-linear-to-br from-brand/20 to-brand-alt/20 ring-1 ring-inset ring-border/60">
                    <Award className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold tracking-tight text-balance">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs tracking-wide text-brand">
                      {item.issuer}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="scroll-mt-24 py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Education" title="Where I am studying." />

        <ol className="mt-12 flex flex-col gap-4">
          {education.map((item, index) => (
            <li key={item.school}>
              <Reveal delay={index * 0.08}>
                <article className="glass flex flex-col gap-6 rounded-3xl p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
                  <div className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-brand/20 to-brand-alt/20 ring-1 ring-inset ring-border/60">
                      <GraduationCap className="size-5" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-semibold tracking-tight">
                        {item.degree}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.field}</p>
                      <p className="mt-2 text-sm text-foreground/90">{item.school}</p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {item.period}
                      </p>
                    </div>
                  </div>

                  <dl className="flex flex-wrap gap-3">
                    {item.details.map((detail) => (
                      <div
                        key={detail.label}
                        className="flex min-w-32 flex-col gap-1 rounded-2xl border border-border/60 bg-foreground/5 px-4 py-3"
                      >
                        <dt className="order-2 text-xs text-muted-foreground">
                          {detail.label}
                        </dt>
                        <dd className="order-1 text-lg font-semibold tracking-tight">
                          {detail.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
