import Reveal from '../motion/Reveal'

export default function ProjectCard({ project, onOpen, index = 0 }) {
  return (
    <Reveal delay={index * 0.06}>
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="group block w-full overflow-hidden text-left"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-surface">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
          <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            {project.category}
          </span>
        </div>
        <div className="pt-5">
          <h3 className="font-display text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-accent md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted md:text-base">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="border border-line px-2.5 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </button>
    </Reveal>
  )
}
