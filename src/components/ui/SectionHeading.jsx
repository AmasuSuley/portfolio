import Reveal from '../motion/Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <Reveal className={`mb-12 md:mb-16 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-ink text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </Reveal>
  )
}
