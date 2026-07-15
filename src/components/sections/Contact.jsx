import { useState } from 'react'
import { site } from '../../data/site'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../motion/Reveal'
import MagneticButton from '../motion/MagneticButton'
import ContactChannels from '../ui/ContactChannels'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      if (!response.ok) throw new Error('Failed to send')
      setStatus('sent')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
      const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
        `Portfolio message from ${formData.name}`
      )}&body=${encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`)}`
      window.location.href = mailto
    }
  }

  const fieldClass =
    'w-full border-0 border-b border-line bg-transparent px-0 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent'

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Start a conversation"
          description={site.contactBlurb}
        />

        <Reveal className="mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Reach me instantly — {site.phone}
          </p>
          <ContactChannels />
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                  placeholder="Amasu Suley"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`${fieldClass} resize-none`}
                  placeholder="Hello, I would like to talk about..."
                />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-on-accent shadow-glow transition-colors hover:brightness-110 disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </MagneticButton>
                {status === 'sent' && (
                  <p className="text-sm text-accent">Message sent — I’ll reply soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-muted">Opening your email app as a fallback…</p>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="space-y-8 lg:col-span-5 lg:pl-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Email</p>
              <a href={`mailto:${site.email}`} className="mt-2 block text-lg text-ink hover:text-accent">
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Location</p>
              <p className="mt-2 text-lg text-ink">{site.location}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Phone</p>
              <a href={site.callUrl} className="mt-2 block text-lg text-ink hover:text-accent">
                {site.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Resume</p>
              <a
                href={site.resumeUrl}
                download
                className="mt-2 inline-flex text-lg text-ink underline-offset-4 hover:text-accent hover:underline"
              >
                Download CV (PDF)
              </a>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-4 py-2 text-sm text-ink hover:border-accent hover:text-accent"
              >
                GitHub
              </a>
              {site.socials.linkedin && (
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line px-4 py-2 text-sm text-ink hover:border-accent hover:text-accent"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
