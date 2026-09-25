import type { Project } from '../../types'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { BackButton } from '../BackButton/BackButton'
import styles from './CategoryProjectsPage.module.css'

interface CategoryProjectsPageProps {
  title: string
  description: string
  projects: Project[]
}

export function CategoryProjectsPage({ title, description, projects }: CategoryProjectsPageProps) {
  return (
    <main className={styles.page}>
      <div className={styles.pageContent}>
        <BackButton />

        <header className={styles.header}>
          <p className={styles.label}>Portfólio especializado</p>
          <h1>{title}</h1>
          <p className={styles.description}>{description}</p>
        </header>

        <section className={styles.grid} aria-label={title}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} variant="project-page" />
          ))}
        </section>
      </div>
    </main>
  )
}
