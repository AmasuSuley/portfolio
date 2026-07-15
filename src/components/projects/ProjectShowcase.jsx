import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import Reveal from '../motion/Reveal'

function TiltRow({ project, index, onOpen }) {
  const reduceMotion = useReducedMotion()
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 180, damping: 18 })
  const springY = useSpring(rotateY, { stiffness: 180, damping: 18 })

  const onMove = (e) => {
    if (reduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rotateY.set(px * 8)
    rotateX.set(-py * 6)
  }

  const onLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <Reveal delay={index * 0.04}>
      <motion.button
        type="button"
        onClick={() => onOpen(project)}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformPerspective: 900,
        }}
        whileHover={reduceMotion ? undefined : { scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="group grid w-full grid-cols-12 items-stretch gap-6 overflow-hidden text-left"
      >
        <div className="col-span-5 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
        </div>
        <div className="col-span-7 flex flex-col justify-center border-t border-line py-4 transition-colors group-hover:border-accent/50">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            0{index + 1} — {project.category}
          </span>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-accent xl:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 text-muted">{project.description}</p>
          <span className="mt-5 inline-flex items-center text-sm font-semibold text-accent">
            View project
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </motion.button>
    </Reveal>
  )
}

export default function ProjectShowcase({ projects, onOpen }) {
  return (
    <div className="relative hidden lg:block">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-4">
          <div className="sticky top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Selected work</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink xl:text-5xl">
              Projects that ship
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              From AI-assisted mobile apps to Spring-ready web platforms — open any case for demos,
              stack, and code.
            </p>
          </div>
        </div>

        <div className="col-span-8 space-y-8">
          {projects.map((project, index) => (
            <TiltRow key={project.id} project={project} index={index} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </div>
  )
}
