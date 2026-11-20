import { ArrowUpRight, Mail, Phone } from 'lucide-react'

import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { contact } from '@/lib/site-data'

const channels = [
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'Phone',
    value: contact.phone,
    href: `tel:${contact.phoneHref}`,
    icon: Phone,
    external: false,
  },
  {
    label: 'GitHub',
    value: contact.githubHandle,
    href: contact.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: contact.linkedinHandle,
    href: contact.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative scroll-mt-24 py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 mx-auto h-80 max-w-4xl rounded-full bg-brand-alt/12 blur-[130px]"
      />
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="glass overflow-hidden rounded-4xl p-8 sm:p-12">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something together."
            description="I am actively looking for Software Engineer internship opportunities. The fastest way to reach me is email — I usually reply within a day."
          />

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {channels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <li key={channel.label}>
                  <Reveal delay={index * 0.06} className="h-full">
                    <a
                      href={channel.href}
                      {...(channel.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="group flex h-full items-center gap-4 rounded-2xl border border-border/60 bg-foreground/5 p-5 transition-colors hover:border-brand/50 hover:bg-foreground/10 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-brand/20 to-brand-alt/20 ring-1 ring-inset ring-border/60">
                        <Icon className="size-4.5" aria-hidden="true" />
                      </span>
                      <span className="flex min-w-0 flex-col">
                        <span className="text-xs tracking-wide text-muted-foreground">
                          {channel.label}
                        </span>
                        <span className="truncate text-sm font-medium text-foreground">
                          {channel.value}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                        aria-hidden="true"
                      />
                    </a>
                  </Reveal>
                </li>
              )
            })}
          </ul>

          <Reveal delay={0.2}>
            <a
              href={`mailto:${contact.email}`}
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-linear-to-br from-brand to-brand-alt px-5 text-sm font-medium text-primary-foreground shadow-lg shadow-brand/25 transition-transform hover:-translate-y-0.5 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <Mail className="size-4" aria-hidden="true" />
              Send me an email
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
