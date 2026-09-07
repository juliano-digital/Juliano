$content = @"
import type { CarouselItem, ContactInfo, Project } from '../types'

export const contactInfo: ContactInfo = {
  name: 'Juliano Araujo',
  phone: '(51) 99366-7248',
  email: 'julianoaraujo8749@gmail.com',
  location: 'Rio grande do sul, Brasil',
  github: 'https://github.com/lucasmendes',
  linkedin: 'https://linkedin.com/in/lucasmendes',
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Nova Plataforma de E-commerce',
    description:
      'Arquitetura moderna de storefront com foco em conversão, performance e experiência de compra premium.',
    image: '/assets/images/projects/ecommerce.svg',
    link: 'https://github.com/',
    category: 'E-commerce',
  },
  {
    id: 'project-2',
    title: 'Dashboard de Operações',
    description:
      'Painel analítico para gestão de KPIs, indicadores em tempo real e automações de rotina empresarial.',
    image: '/assets/images/projects/dashboard.svg',
    link: 'https://github.com/',
    category: 'SaaS',
  },
  {
    id: 'project-3',
    title: 'App de Agendamento',
    description:
      'Fluxo de agendamento para consultórios e profissionais, com reservas inteligentes e gestão de clientes.',
    image: '/assets/images/projects/booking.svg',
    link: 'https://github.com/',
    category: 'Productivity',
  },
]

export const carouselItems: CarouselItem[] = [
  {
    id: 'slide-1',
    title: 'Design estratégico',
    subtitle: 'Experiências digitais pensadas para gerar resultado.',
    image: '/assets/images/carousel/1.png',
    accent: '#7c3aed',
  },
  {
    id: 'slide-2',
    title: 'Desenvolvimento escalável',
    subtitle: 'Codebase performática, clara e pronta para crescimento.',
    image: '/assets/images/carousel/2.png',
    accent: '#0ea5e9',
  },
  {
    id: 'slide-3',
    title: 'UX com impacto',
    subtitle: 'Interfaces que unem estética, velocidade e conversão.',
    image: '/assets/images/carousel/3.png',
    accent: '#22c55e',
  },
  {
    id: 'slide-4',
    title: 'Nova ',
    subtitle: 'Imagem adicionada ao carrossel.',
    image: '/assets/images/carousel/4.png',
    
]
"@

Set-Content -Path "c:\Users\julia\Desktop\Projetos\meusite\src\data\projects.ts" -Value $content -Encoding UTF8