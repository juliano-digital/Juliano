import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './PixelReveal.module.css'
import './pixel-reveal.css'

/* Elementos que aparecem "escritos" da esquerda para a direita */
const TEXT_SELECTOR = [
  '.hero-copy .eyebrow',
  '.hero-copy h1 .word',
  '.subtitle',
  '.skills-title',
  '.skills-description',
  '.about-compact .eyebrow',
  '.about-list li',
  '#projects p',
  '#projects h2',
].join(',')

/* Elementos que aparecem como bloco (desfoque + subida) */
const BLOCK_SELECTOR = [
  '.cta-row a',
  '.stats li',
  '.glyph-matrix-shell',
  '.about-visual',
  '#projects > div > *',
].join(',')

const PIXEL = 5            // tamanho do pixel
const GAP = 2              // espaco entre pixels (bem pequeno = parede compacta)
const INTRO_MS = 4200      // duracao da cascata automatica da 1a dobra
const FRONT_OFFSET = 0.86  // onde a frente fica em relacao a viewport no scroll

export function PixelReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    const canvas = canvasRef.current
    if (!canvas) return

    root.classList.add('px-ready')

    const mark = () => {
      document.querySelectorAll<HTMLElement>(TEXT_SELECTOR).forEach((el) => {
        if (!el.dataset.px) el.dataset.px = 'text'
      })
      document.querySelectorAll<HTMLElement>(BLOCK_SELECTOR).forEach((el) => {
        if (!el.dataset.px) el.dataset.px = 'block'
      })
    }

    mark()

    type Target = { el: HTMLElement; top: number }
    let targets: Target[] = []

    const measure = () => {
      mark()
      targets = []
      document.querySelectorAll<HTMLElement>('[data-px]').forEach((el) => {
        if (el.classList.contains('px-done') || el.classList.contains('px-written')) return
        const r = el.getBoundingClientRect()
        targets.push({ el, top: r.top + window.scrollY })
        const delay = Math.min(0.3, (r.left / window.innerWidth) * 0.24)
        el.style.setProperty('--px-delay', `${delay}s`)
      })
    }

    const onEnd = (event: AnimationEvent) => {
      const el = event.target as HTMLElement
      if (!el?.dataset?.px) return
      el.classList.remove('px-written')
      el.classList.add('px-done')
    }
    document.addEventListener('animationend', onEnd, true)

    /* ---------- canvas ---------- */
    const ctx = canvas.getContext('2d')!
    let width = 0
    let height = 0
    let cols = 0

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      cols = Math.ceil(width / (PIXEL + GAP)) + 1
      measure()
    }

    resize()
    window.addEventListener('resize', resize)

    /* ---------- loop ---------- */
    let front = 0
    let raf = 0
    const start = performance.now()
    let intro = true

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
    const step = PIXEL + GAP

    const draw = (now: number) => {
      const scrollY = window.scrollY
      const vh = window.innerHeight
      const footer = document.querySelector<HTMLElement>('footer')
      const footerRect = footer?.getBoundingClientRect()
      const footerTop = footerRect?.top ?? vh
      const drawHeight = Math.max(0, Math.min(height, footerTop))

      if (intro) {
        // fase 1: desce sozinho ate cobrir a primeira dobra
        const t = Math.min(1, (now - start) / INTRO_MS)
        front = easeOut(t) * vh * 0.95
        if (t >= 1) intro = false
      } else {
        // fase 2: a frente so avanca conforme o usuario rola a pagina
        const target = scrollY + vh * FRONT_OFFSET
        if (target > front) front += (target - front) * 0.16
      }

      // libera os elementos com efeito de escrita quando a frente os alcanca
      for (let i = targets.length - 1; i >= 0; i -= 1) {
        const item = targets[i]
        if (front >= item.top + 16) {
          item.el.classList.add('px-written')
          targets.splice(i, 1)
        }
      }

      ctx.clearRect(0, 0, width, height)

      const footerDocumentTop = footer ? footer.offsetTop : Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
      )
      const finished = front > footerDocumentTop - 20
      canvas.style.opacity = finished ? '0' : '1'

      if (!finished) {
        const frontY = front - scrollY

        // parede de pixels: preenche tudo abaixo da frente, dentro da viewport
        for (let c = 0; c < cols; c += 1) {
          const x = c * step
          const startY = Math.max(0, Math.floor(frontY / step) * step)

          for (let y = startY; y < drawHeight; y += step) {
            const n = Math.sin(x * 0.12 + y * 0.1 + now * 0.0015 + c * 0.7)
            const color =
              n > 0.25
                ? 'rgba(37, 99, 235, 0.95)'
                : n > -0.25
                  ? 'rgba(19, 50, 82, 0.95)'
                  : 'rgba(125, 211, 252, 0.9)'
            ctx.fillStyle = color
            ctx.fillRect(x, y, PIXEL, PIXEL)
          }

          // linha de frente um pouco mais clara, marcando a borda da cascata
          if (frontY > -10 && frontY < drawHeight + 10) {
            ctx.fillStyle = 'rgba(224, 242, 254, 0.95)'
            ctx.fillRect(x, frontY, PIXEL, PIXEL)
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    const ro = new ResizeObserver(() => measure())
    ro.observe(document.body)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('animationend', onEnd, true)
      ro.disconnect()
      root.classList.remove('px-ready')
    }
  }, [mounted])

  if (!mounted) return null

  return createPortal(
    <canvas ref={canvasRef} className={styles.pixelLayer} aria-hidden="true" />,
    document.body,
  )
}