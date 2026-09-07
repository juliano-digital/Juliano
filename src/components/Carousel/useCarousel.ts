import { useEffect, useMemo, useState } from 'react'

interface UseCarouselOptions {
  length: number
  autoPlay?: boolean
  interval?: number
  pauseOnHover?: boolean
}

export function useCarousel({
  length,
  autoPlay = true,
  interval = 5000,
  pauseOnHover = true,
}: UseCarouselOptions) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const next = () => setCurrentIndex((index) => (index + 1) % length)
  const prev = () => setCurrentIndex((index) => (index - 1 + length) % length)
  const goTo = (index: number) => setCurrentIndex((index + length) % length)

  useEffect(() => {
    if (!autoPlay || length <= 1 || (pauseOnHover && isHovered)) return

    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % length)
    }, interval)

    return () => window.clearInterval(timer)
  }, [autoPlay, interval, isHovered, length, pauseOnHover])

  const indicators = useMemo(
    () => Array.from({ length }, (_, index) => index),
    [length],
  )

  return {
    currentIndex,
    next,
    prev,
    goTo,
    indicators,
    isHovered,
    setIsHovered,
  }
}
