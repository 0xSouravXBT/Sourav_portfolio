import { Mail } from 'lucide-react'

import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { contact, profile } from '@/lib/site-data'

const socials = [
  { label: 'GitHub', href: contact.github, icon: GithubIcon, external: true },
  {
    label: 'LinkedIn',
    href: contact.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  { label: 'Email', href: `mailto:${contact.email}`, icon: Mail, external: false },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <ul className="flex items-center gap-2">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  {...(social.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="flex size-10 items-center justify-center rounded-full border border-border/60 bg-foreground/5 text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  <Icon className="size-4.5" aria-hidden="true" />
                  <span className="sr-only">{social.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
