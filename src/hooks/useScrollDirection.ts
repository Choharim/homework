import { useEffect, useState } from 'react'

type ScrollDirection = 'up' | 'down'

const useScrollDirection = (threshold: number) => {
  const [direction, setDirection] = useState<ScrollDirection>('up')

  useEffect(() => {
    let previousScrollY = window.scrollY

    const isOverThreshold = (currentScrollY: number) =>
      Math.abs(currentScrollY - previousScrollY) > threshold

    const checkDirection = () => {
      const currentScrollY = window.scrollY

      if (!isOverThreshold(currentScrollY)) return

      if (currentScrollY > previousScrollY) {
        setDirection('down')
      } else {
        setDirection('up')
      }

      previousScrollY = currentScrollY
    }

    const onScroll = () => window.requestAnimationFrame(checkDirection)

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return direction
}

export default useScrollDirection
