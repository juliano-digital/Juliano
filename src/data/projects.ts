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
    title: 'Plataforma de Delivery',
    description:
      'Arquitetura moderna de storefront com foco em conversão, performance e experiência de compra premium.',
    image: '/assets/images/projects/logopadaria.png',
    link: '/delivery',
    category: 'Delivery',
  },
  {
    id: 'project-2',
    title: 'Gestão Financeira',
    description:
      'Painel analítico para gestão de KPIs, indicadores em tempo real e automações de rotina empresarial.',
    image: '/assets/images/projects/logogestao.png',
    link: '/gestao',
    category: 'Financeiro',
  },
  {
    id: 'project-3',
    title: 'App de Agendamento',
    description:
      'Fluxo de agendamento para barbearia e profissionais, com reservas inteligentes e gestão de clientes.',
    image: '/assets/images/projects/logobarbershop.png',
    link: '/barbearia',
    category: 'Barbearia',
  },
]

