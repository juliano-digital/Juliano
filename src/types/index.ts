export interface ContactInfo {
  name: string
  phone: string
  email: string
  location: string
  github: string
  linkedin: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  link: string
  category: string
}

export interface CarouselItem {
  id: string
  title: string
  subtitle: string
  image: string
  accent: string
}
