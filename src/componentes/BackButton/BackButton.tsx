import styles from './BackButton.module.css'

export function BackButton() {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back()
      return
    }

    window.location.assign('/')
  }

  return (
    <button type="button" className={styles.button} onClick={handleBack}>
      <span aria-hidden="true">←</span>
      Voltar
    </button>
  )
}
