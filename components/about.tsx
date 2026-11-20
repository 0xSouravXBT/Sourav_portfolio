import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { about } from '@/lib/site-data'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-24 py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="Engineer in the making, builder by habit."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.08}>
                <p className="text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <dl className="grid grid-cols-2 gap-3">
              {about.highlights.map((item) => (
                <div
                  key={item.label}
                  className="glass flex flex-col gap-1 rounded-2xl p-5"
                >
                  <dt className="order-2 text-xs tracking-wide text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="order-1 text-xl font-semibold tracking-tight text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
