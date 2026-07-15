import { experience } from '../../data/site'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../motion/Reveal'

export default function Experience() {
  return (
    <section id="experience" className="relative border-y border-line bg-surface/20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Impact over titles"
          description="Selected roles and product work — focused on shipping, not padding."
        />

        <div className="relative space-y-0">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-line md:left-[11px]" aria-hidden="true" />

          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06} className="relative grid gap-4 pb-12 pl-10 md:grid-cols-12 md:gap-8 md:pl-14">
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-bg md:h-6 md:w-6" />
              <div className="md:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{item.period}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink md:text-2xl">{item.role}</h3>
                <p className="mt-1 text-muted">
                  {item.org}
                  <span className="text-muted/60"> · {item.location}</span>
                </p>
              </div>
              <ul className="space-y-3 md:col-span-8">
                {item.highlights.map((point) => (
                  <li key={point} className="flex gap-3 text-muted leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
