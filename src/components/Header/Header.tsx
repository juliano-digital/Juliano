import type { MouseEvent } from 'react'
import type { ContactInfo } from '../../types'
import logo from '../../assets/img/ico.jpeg'
import styles from './Header.module.css'

interface HeaderProps {
  contact: ContactInfo
}

export function Header({ contact }: HeaderProps) {
  const phoneDigits = contact.phone.replace(/\D/g, '')
  const whatsappPhone = phoneDigits.startsWith('55') ? phoneDigits : `55${phoneDigits}`

  const navigateToSection = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (window.location.pathname !== '/') return

    event.preventDefault()
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    window.history.pushState({}, '', `#${sectionId}`)
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brandWrap}>
          <a href="/" className={styles.brandLink} aria-label="Ir para a página inicial">
            <img
              src={logo}
              alt="Logo LD"
              className={styles.brandBadge}
            />
          </a>
          <div>
            <p className={styles.kicker}>Desenvolvedor de Sistemas Web e Aplicativos</p>
            <h1 className={styles.brandName}>{contact.name}</h1>
          </div>
        </div>

        <nav className={styles.nav} aria-label="Navegação principal">
          <a href="/#projects" onClick={(event) => navigateToSection(event, 'projects')}>Projetos</a>
          <a href="/#sobre" onClick={(event) => navigateToSection(event, 'sobre')}>Sobre</a>
          <a href="/#contact" onClick={(event) => navigateToSection(event, 'contact')}>Contato</a>
        </nav>

        <div className={styles.meta}>
          <a href={`https://wa.me/${whatsappPhone}`} target="_blank" rel="noopener noreferrer">
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </header>
  )
}