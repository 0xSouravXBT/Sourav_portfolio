import { Reveal } from '@/components/reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <Reveal
      className={
        align === 'center'
          ? 'mx-auto flex max-w-2xl flex-col items-center gap-4 text-center'
          : 'flex max-w-2xl flex-col gap-4'
      }
    >
      <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
        <span
          aria-hidden="true"
          className="h-1 w-1 rounded-full bg-brand shadow-[0_0_10px_2px_var(--brand)]"
        />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-pretty text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
