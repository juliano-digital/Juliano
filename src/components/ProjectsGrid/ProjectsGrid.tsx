import { ProjectCard } from '../ProjectCard/ProjectCard'
import type { Project } from '../../types'
import styles from './ProjectsGrid.module.css'

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section className={styles.gridSection} id="projects">
      <div className={styles.heading}>
        <p className={styles.label}>Projetos</p>
        <h2>Trabalhos que combinam estratégia, produto e tecnologia.</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
