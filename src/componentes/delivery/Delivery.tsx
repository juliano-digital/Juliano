import { CategoryProjectsPage } from '../CategoryProjectsPage/CategoryProjectsPage'
import { deliveryProjects } from './deliveryProjects'

export function Delivery() {
  return (
    <CategoryProjectsPage
      title="Projetos de E-commerce"
      description="Soluções digitais para lojas virtuais, vendas online e experiências de compra."
      projects={deliveryProjects}
    />
  )
}
