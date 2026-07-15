import { site } from '../../data/site'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../motion/Reveal'

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title={site.about.title} />

        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative overflow-hidden">
              <img
                src={site.aboutImage}
                alt={site.name}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-line" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="font-display text-lg font-semibold text-white">{site.name}</p>
                <p className="text-sm text-white/70">{site.location}</p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <p className="mb-6 text-sm font-medium text-accent">{site.now}</p>
              <div className="space-y-5 text-lg leading-relaxed text-muted">
                {site.about.paragraphs.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal
              delay={0.16}
              className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2"
            >
              {site.about.focuses.map((item) => (
                <div key={item.label} className="group">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {item.label}
                  </p>
                  <p className="mt-2 text-ink transition-colors group-hover:text-accent">{item.value}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
