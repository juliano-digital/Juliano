import { CategoryProjectsPage } from '../CategoryProjectsPage/CategoryProjectsPage'
import { gestaoProjects } from './gestaoProjects'

export function Gestao() {
  return (
    <CategoryProjectsPage
      title="Projetos de Gestão"
      description="Painéis, sistemas e experiências digitais para organizar operações e resultados."
      projects={gestaoProjects}
    />
  )
}
