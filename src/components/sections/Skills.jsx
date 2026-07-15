import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { skills } from '../../data/skills'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../motion/Reveal'

export default function Skills() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(skills.map((s) => s.category)))],
    []
  )
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? skills : skills.filter((s) => s.category === active)

  const grouped = useMemo(() => {
    const map = {}
    filtered.forEach((skill) => {
      if (!map[skill.category]) map[skill.category] = []
      map[skill.category].push(skill)
    })
    return Object.entries(map)
  }, [filtered])

  return (
    <section id="skills" className="relative border-y border-line bg-surface/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A stack built for real products"
          description="Technologies I use in production — grouped by craft, not fake percentage bars."
        />

        <Reveal className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === category
                  ? 'bg-accent text-on-accent'
                  : 'border border-line text-muted hover:border-accent/40 hover:text-ink'
              }`}
            >
              {category}
            </button>
          ))}
        </Reveal>

        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {grouped.map(([category, items]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {items.map((skill, index) => (
                    <Reveal key={skill.name} delay={index * 0.03}>
                      <span className="inline-flex border border-line bg-bg/60 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent">
                        {skill.name}
                      </span>
                    </Reveal>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
