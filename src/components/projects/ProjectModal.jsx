import { useEffect, useId, useRef } from 'react'
import { motion } from 'framer-motion'
import YouTubeEmbed from '../ui/YouTubeEmbed'
import { extractYouTubeId } from '../../utils/youtube'

export default function ProjectModal({ project, onClose }) {
  const videoId = project.youtubeId || extractYouTubeId(project.youtubeUrl || '')
  const titleId = useId()
  const closeRef = useRef(null)
  const panelRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    previouslyFocused.current = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !panelRef.current) return
      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
      const list = Array.from(focusable)
      if (!list.length) return
      const first = list[0]
      const last = list[list.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', onKey)
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus()
      }
    }
  }, [onClose])

  const caseBlocks = [
    { label: 'Problem', body: project.problem },
    { label: 'Approach', body: project.approach },
    { label: 'Outcome', body: project.outcome },
  ].filter((b) => b.body)

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 my-8 w-full max-w-3xl overflow-hidden border border-line bg-bg shadow-2xl"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
          <h3 id={titleId} className="font-display text-2xl font-bold tracking-tight text-ink">
            {project.title}
          </h3>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-muted transition-colors hover:bg-surface hover:text-ink"
            aria-label="Close project details"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6">
          {videoId ? (
            <div className="mb-6 overflow-hidden border border-line">
              <YouTubeEmbed videoId={videoId} title={project.title} />
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="mb-6 aspect-video w-full object-cover"
            />
          )}

          {caseBlocks.length > 0 ? (
            <div className="space-y-6">
              {caseBlocks.map((block) => (
                <div key={block.label}>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {block.label}
                  </h4>
                  <p className="mt-2 text-muted leading-relaxed">{block.body}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="whitespace-pre-line text-muted leading-relaxed">{project.fullDescription}</p>
          )}

          {project.challenges?.length > 0 && (
            <div className="mt-8">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Challenges
              </h4>
              <ul className="mt-3 space-y-2 text-ink">
                {project.challenges.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Key features
            </h4>
            <ul className="mt-3 space-y-2 text-ink">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="border border-line px-3 py-1 text-sm text-muted">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                View code
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:brightness-110"
              >
                {project.demoLabel || 'Live demo'}
              </a>
            )}
            {videoId && project.liveDemo !== project.youtubeUrl && (
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Watch on YouTube
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
