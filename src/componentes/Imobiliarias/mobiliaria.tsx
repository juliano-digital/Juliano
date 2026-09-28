import { CategoryProjectsPage } from '../CategoryProjectsPage/CategoryProjectsPage'
import { mobiliariasProjects } from './mobiliariasProjects'

export function Mobiliarias() {
  return (
    <CategoryProjectsPage
      title="Projetos de Gestão"
      description="Painéis, sistemas e experiências digitais para organizar operações e resultados."
      projects={mobiliariasProjects}
    />
  )
}
