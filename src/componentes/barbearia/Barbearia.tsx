import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { BackButton } from '../BackButton/BackButton'
import { barbeariaProjects } from './barbeariaProjects'
import styles from './Barbearia.module.css'

export function Barbearia() {
  return (
    <main className={styles.page}>
      <BackButton />

      <header className={styles.header}>
        <p className={styles.label}>Portfólio especializado</p>
        <h1>Projetos de Barbearia</h1>
        <p className={styles.description}>
          Soluções digitais criadas para barbearias, profissionais e seus clientes.
        </p>
      </header>

      <section className={styles.grid} aria-label="Projetos de barbearia">
        {barbeariaProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  )
}
