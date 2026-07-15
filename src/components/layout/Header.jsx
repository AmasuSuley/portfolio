import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '../../data/site'
import ViewerCount from '../ui/ViewerCount'

export default function Header({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = site.nav.map((item) => item.href.slice(1))
    const observers = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const onHero = !scrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        onHero
          ? 'border-b border-white/10 bg-[#0a0a0c]/70 backdrop-blur-xl'
          : 'border-b border-line bg-bg/90 backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className={`font-display text-xl font-bold tracking-tight transition-colors ${
            onHero ? 'text-white' : 'text-ink'
          }`}
        >
          {site.brand}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => {
            const id = item.href.slice(1)
            const isActive = active === id
            return (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-accent'
                    : onHero
                      ? 'text-white/85 hover:text-white'
                      : 'text-muted hover:text-ink'
                }`}
              >
                {item.name}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ViewerCount className="hidden lg:inline-flex" light={onHero} />
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden rounded-full px-3 py-1.5 text-xs font-semibold transition-colors sm:inline-flex ${
              onHero
                ? 'border border-white/25 text-white hover:border-accent hover:text-accent'
                : 'border border-line text-ink hover:border-accent hover:text-accent'
            }`}
          >
            WhatsApp
          </a>
          <a
            href={site.resumeUrl}
            download
            className={`hidden rounded-full px-3 py-1.5 text-xs font-semibold transition-colors md:inline-flex ${
              onHero
                ? 'border border-white/25 text-white hover:border-accent hover:text-accent'
                : 'border border-line text-ink hover:border-accent hover:text-accent'
            }`}
          >
            CV
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`rounded-full border p-2 transition-colors ${
              onHero
                ? 'border-white/25 bg-white/10 text-white hover:border-accent'
                : 'border-line bg-surface/60 text-ink hover:border-accent/40'
            }`}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <button
            className={`rounded-md p-2 md:hidden ${onHero ? 'text-white' : 'text-ink'}`}
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`overflow-hidden border-t backdrop-blur-xl md:hidden ${
              onHero ? 'border-white/10 bg-[#0a0a0c]/95' : 'border-line bg-bg/95'
            }`}
          >
            <div className="space-y-1 px-6 py-4">
              {site.nav.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block py-2 ${onHero ? 'text-white/85 hover:text-accent' : 'text-muted hover:text-accent'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
