import type { CarouselItem, ContactInfo, Project } from '../types'

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
    link: 'https://appmodelo.com',
    category: 'Delivery',
  },
  {
    id: 'project-2',
    title: 'Gestão Financeira',
    description:
      'Painel analítico para gestão de KPIs, indicadores em tempo real e automações de rotina empresarial.',
    image: '/assets/images/projects/logogestao.png',
    link: 'https://gestao.appmodelo.com',
    category: 'Financeiro',
  },
  {
    id: 'project-3',
    title: 'App de Agendamento',
    description:
      'Fluxo de agendamento para barbearia e profissionais, com reservas inteligentes e gestão de clientes.',
    image: '/assets/images/projects/logobarbershop.png',
    link: 'https://agendar.appmodelo.com/',
    category: 'Barbearia',
  },
]

export const carouselItems: CarouselItem[] = [
  {
    id: 'slide-1',
    title: 'Design estratégico',
    subtitle: 'experiências digitais pensadas para gerar resultado.',
    image: '/src/assets/img/1.png',
    accent: 'none',
  },
  {
    id: 'slide-2',
    title: 'Desenvolvimento escalável',
    subtitle: 'Projetos digitais feitos para atrair, envolver e gerar resultados.',
    image: '/src/assets/img/2.png',
    accent: 'none',
  },
  {
    id: 'slide-3',
    title: 'Design que encanta. Estratégia que converte.',
    subtitle: 'Interfaces inteligentes para marcas que querem crescer.',
    image: '/src/assets/img/3.png',
   accent: 'none',
  },
  {
    id: 'slide-4',
    title: 'Performance premium',
    subtitle: 'Sites e app ultra-rápidos e responsivos para seus clientes.',
    image: '/src/assets/img/4.png',
    accent: 'none',
  },
]