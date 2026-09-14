import type { Project } from '../../types'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isInternalLink = project.link.startsWith('/')

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <span className={styles.imagePlaceholder}>Imagem do projeto</span>
        )}
      </div>

      <div className={styles.body}>
        <span className={styles.category}>{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {project.link ? (
          <a
            href={project.link}
            {...(!isInternalLink && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
            className={styles.link}
          >
            Ver projeto
          </a>
        ) : (
          <span className={styles.pending}>Aguardando projeto</span>
        )}
      </div>
    </article>
  )
}
