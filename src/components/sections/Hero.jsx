import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { site } from '../../data/site'
import MagneticButton from '../motion/MagneticButton'
import AnimatedCounter from '../ui/AnimatedCounter'

function SplitName({ name, reduceMotion }) {
  const parts = useMemo(() => name.split(''), [name])

  if (reduceMotion) {
    return (
      <span className="bg-gradient-to-br from-white via-[#f4f1ea] to-[#d4a017] bg-clip-text text-transparent">
        {name}
      </span>
    )
  }

  return (
    <span className="inline-flex flex-wrap">
      {parts.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          className="inline-block bg-gradient-to-br from-white via-[#f4f1ea] to-[#d4a017] bg-clip-text text-transparent will-change-transform"
          initial={{ opacity: 0, y: 42, rotateX: 55, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.65,
            delay: 0.55 + i * 0.04,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformPerspective: 600 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const [roleIndex, setRoleIndex] = useState(0)
  const { scrollY } = useScroll()
  const scrollYOffset = useTransform(scrollY, [0, 500], [0, reduceMotion ? 0 : 140])
  const opacity = useTransform(scrollY, [0, 420], [1, reduceMotion ? 1 : 0.3])
  const contentY = useTransform(scrollY, [0, 420], [0, reduceMotion ? 0 : 40])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })
  const moveX = useTransform(springX, [-0.5, 0.5], reduceMotion ? [0, 0] : [-12, 12])
  const moveY = useTransform(springY, [-0.5, 0.5], reduceMotion ? [0, 0] : [-8, 8])

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % site.rotatingRoles.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (reduceMotion) return undefined

    const onMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY, reduceMotion])

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-[#0a0a0c]">
      <motion.div className="absolute inset-0" style={{ y: scrollYOffset }}>
        {/* Full uncropped photo — contain keeps the entire image visible */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={reduceMotion ? undefined : { x: moveX, y: moveY }}
        >
          <img
            src={site.profileImage}
            alt={site.name}
            decoding="async"
            fetchPriority="high"
            className="max-h-full max-w-full object-contain object-center"
          />
        </motion.div>

        {/* Soft cinematic overlays — keep face readable, no hard crop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c]/88 via-[#0a0a0c]/45 to-[#0a0a0c]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-[#0a0a0c]/40" />
        <div
          className={`absolute inset-0 gold-shimmer mix-blend-soft-light bg-[radial-gradient(circle_at_70%_36%,rgba(212,160,23,0.28),transparent_48%)] ${
            reduceMotion ? 'opacity-30' : 'hero-ambient'
          }`}
        />
        {!reduceMotion && (
          <motion.div
            className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
            animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], opacity: [0.25, 0.45, 0.3, 0.25] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
        {!reduceMotion && (
          <motion.div
            className="pointer-events-none absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-[#d4a017]/15 blur-3xl"
            animate={{ x: [0, -30, 15, 0], y: [0, 25, -15, 0], opacity: [0.2, 0.4, 0.25, 0.2] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </motion.div>

      <motion.div
        style={{ opacity, y: contentY }}
        className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-16 pt-32 md:justify-center md:pb-24 md:pt-28"
      >
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.08 }}
        >
          <motion.div
            variants={item}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur-md accent-glow-ring"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {site.availability}
          </motion.div>

          <motion.p
            variants={item}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent"
          >
            {site.role}
          </motion.p>

          <h1 className="font-display whitespace-nowrap text-3xl font-extrabold leading-none tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <SplitName name={site.name} reduceMotion={reduceMotion} />
          </h1>

          <motion.div
            variants={item}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 h-10 overflow-hidden md:h-12"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={site.rotatingRoles[roleIndex]}
                initial={{ y: 28, opacity: 0, filter: 'blur(6px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: -28, opacity: 0, filter: 'blur(6px)' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-2xl font-semibold text-white/90 md:text-3xl"
              >
                {site.rotatingRoles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={item}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/72 md:text-lg"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            variants={item}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton
              href="#projects"
              className="inline-flex items-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-on-accent shadow-glow accent-glow-ring transition-colors hover:brightness-110"
            >
              Explore projects
            </MagneticButton>
            <MagneticButton
              href={site.resumeUrl}
              download
              className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-accent/60 hover:text-accent"
            >
              Download CV
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-accent/60 hover:text-accent"
            >
              Let’s collaborate
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={item}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8"
          >
            {site.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-white md:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/55">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <span className="h-10 w-px overflow-hidden bg-white/20">
            <motion.span
              className="block h-full w-full bg-accent"
              animate={reduceMotion ? undefined : { y: ['-100%', '100%'] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
        </motion.a>
      </motion.div>
    </section>
  )
}
