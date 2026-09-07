import { motion, AnimatePresence } from 'framer-motion'
import type { CarouselItem } from '../../types'
import { useCarousel } from './useCarousel'
import styles from './Carousel.module.css'

interface CarouselProps {
  items: CarouselItem[]
}

export function Carousel({ items }: CarouselProps) {
  const { currentIndex, next, prev, goTo, indicators, setIsHovered } = useCarousel({
    length: items.length,
    autoPlay: true,
    interval: 5000,
    pauseOnHover: true,
  })

  const activeItem = items[currentIndex]

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.visual}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            className={styles.slide}
            initial={{ opacity: 0, x: 50, scale: 0.98, filter: 'blur(8px)' }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -50, scale: 0.98, filter: 'blur(8px)' }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
          >
            <img src={activeItem.image} alt={activeItem.title} />
            {activeItem.accent && activeItem.accent !== 'none' && (
              <div
                className={styles.accent}
                style={{ background: `radial-gradient(circle, ${activeItem.accent} 0%, rgba(15,23,42,0) 65%)` }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.info}>
        <div className={styles.metaRow}>
          <span className={styles.kicker}>Trabalho em destaque</span>
          <div className={styles.dots}>
            {indicators.map((index) => (
              <button
                key={index}
                type="button"
                className={index === currentIndex ? styles.dotActive : styles.dot}
                aria-label={`Ir para slide ${index + 1}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </div>

        <div className={styles.textBlock}>
          <h3>{activeItem.title}</h3>
          <p>{activeItem.subtitle}</p>
        </div>

        <div className={styles.controls}>
          <button type="button" onClick={prev} aria-label="Slide anterior">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button type="button" onClick={next} aria-label="Próximo slide">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}