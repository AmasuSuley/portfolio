import { testimonials } from '../../data/site'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../motion/Reveal'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Social proof"
          title="What the work unlocks"
          description="Feedback themes from demos, pilots, and stakeholder reviews."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <figure className="flex h-full flex-col border-t border-accent/40 pt-6">
                <blockquote className="flex-1 text-base leading-relaxed text-muted md:text-lg">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold text-ink">{item.author}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
