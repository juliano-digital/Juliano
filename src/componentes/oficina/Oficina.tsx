import { CategoryProjectsPage } from '../CategoryProjectsPage/CategoryProjectsPage'
import { oficinaProjects } from './oficinaProjects'

export function Oficina() {
  return (
    <CategoryProjectsPage
      title="Projetos de Oficina"
      description="Soluções digitais para oficinas, serviços automotivos e manutenção."
      projects={oficinaProjects}
    />
  )
}
