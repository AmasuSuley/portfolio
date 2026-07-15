import { motion, useReducedMotion } from 'framer-motion'
import { techMarquee } from '../../data/skills'

export default function TechMarquee() {
  const reduceMotion = useReducedMotion()
  const row = [...techMarquee, ...techMarquee]

  return (
    <div className="relative overflow-hidden border-y border-line bg-surface/50 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-bg to-transparent" />
      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
          animate={{ x: ['-10%', '120%'] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2 }}
        />
      )}
      <div className={`flex w-max gap-10 whitespace-nowrap ${reduceMotion ? '' : 'marquee-track'}`}>
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-muted/85"
          >
            <span className="mr-10 text-accent">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
