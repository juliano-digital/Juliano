import { CategoryProjectsPage } from '../CategoryProjectsPage/CategoryProjectsPage'
import { deliveryProjects } from './deliveryProjects'

export function Delivery() {
  return (
    <CategoryProjectsPage
      title="Projetos de Delivery"
      description="Soluções digitais para restaurantes, lojas e serviços de entrega."
      projects={deliveryProjects}
    />
  )
}
