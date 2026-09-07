import type { ContactInfo } from '../../types'
import logo from '../../assets/img/ico.jpeg'
import styles from './Header.module.css'

interface HeaderProps {
  contact: ContactInfo
}

export function Header({ contact }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brandWrap}>
          <img
            src={logo}
            alt="Logo LD"
            className={styles.brandBadge}
          />
          <div>
            <p className={styles.kicker}>Desenvolvedor Full Stack</p>
            <h1 className={styles.brandName}>{contact.name}</h1>
          </div>
        </div>

        <nav className={styles.nav} aria-label="Navegação principal">
          <a href="#projects">Projetos</a>
         <a href="#sobre">Sobre</a>
         <a href="#contact">Contato</a>
        </nav>

        <div className={styles.meta}>
          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </header>
  )
}