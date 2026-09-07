import type { ContactInfo } from '../../types'
import styles from './Footer.module.css'

interface FooterProps {
  contact: ContactInfo
}

export function Footer({ contact }: FooterProps) {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.content}>
        <div>
          <p className={styles.label}>Contato</p>
          <h2>{contact.name}</h2>
        </div>

        <div className={styles.contactList}>
          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.location}</span>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}