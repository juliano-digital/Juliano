import type { ContactInfo, Project } from '../types'

export const contactInfo: ContactInfo = {
  name: 'Juliano Araujo',
  phone: '(51) 99366-7248',
  email: 'julianoaraujo8749@gmail.com',
  location: 'Rio grande do sul, Brasil',
  github: 'https://github.com/juliano-digital',
  linkedin: 'https://www.linkedin.com/in/juliano-araujo-957626235/',
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Plataformas de E-Commerces',
    description:
      'Soluções de e-commerce com lojas modernas, foco em conversão, performance e experiência de compra.',
    image: '/fotoprojetos/ecommerce.png',
    link: '/delivery',
    category: 'E-commerce',
  },
  {
    id: 'project-2',
    title: 'Controle Financeiro',
    description:
      'Encontre o aplicativo ideal para sua empresa. Ferramentas com indicadores em tempo real, dashboards e automações financeiras.',
    image: '/fotoprojetos/carteira.png',
    link: '/gestao',
    category: 'Financeiro',
  },
  {
    id: 'project-3',
    title: 'Sistemas para barbearias',
    description:
      'Fluxo de agendamento para barbearia e profissionais, com reservas inteligentes e gestão de clientes.',
    image: '/fotoprojetos/barbershop.png',
    link: '/barbearia',
    category: 'Barbearia',
  },
]

