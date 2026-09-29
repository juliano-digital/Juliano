import { CategoryProjectsPage } from '../CategoryProjectsPage/CategoryProjectsPage'
import { mobiliariasProjects } from './mobiliariasProjects'

export function Mobiliarias() {
  return (
    <CategoryProjectsPage
      title="Projetos de Imobiliarias"
      description=" Sistemas,experiências e resultados para nicho imbiliario."
      projects={mobiliariasProjects}
    />
  )
}
