import type { ContactInfo } from '../../types'
import styles from './Footer.module.css'

interface FooterProps {
  contact: ContactInfo
}

export function Footer({ contact }: FooterProps) {
  const phoneDigits = contact.phone.replace(/\D/g, '')
  const whatsappPhone = phoneDigits.startsWith('55') ? phoneDigits : `55${phoneDigits}`

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.content}>
        <div>
          <p className={styles.label}>Contato</p>
          <h2>{contact.name}</h2>
        </div>

        <div className={styles.contactList}>
          <a href={`https://wa.me/${whatsappPhone}`} target="_blank" rel="noopener noreferrer">
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.location)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.location}
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}