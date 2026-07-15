import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, projectFilters } from '../../data/projects'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../projects/ProjectCard'
import ProjectShowcase from '../projects/ProjectShowcase'
import ProjectModal from '../projects/ProjectModal'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  const openProject = (project) => setSelectedProject(project)
  const closeProject = () => setSelectedProject(null)

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="lg:hidden">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="Filter by type, then open a project for demos and details."
          />
        </div>

        <div className="mb-10 flex flex-wrap gap-2 lg:justify-end">
          {projectFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-accent text-on-accent'
                  : 'border border-line text-muted hover:border-accent/40 hover:text-ink'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <ProjectShowcase projects={filteredProjects} onOpen={openProject} />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:hidden">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard project={project} onOpen={openProject} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeProject} />
        )}
      </AnimatePresence>
    </section>
  )
}
