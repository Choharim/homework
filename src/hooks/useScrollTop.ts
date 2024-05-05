import { NAVBAR_HEIGHT } from '@/components/layout/style/navbar.css'
import { useEffect, useState } from 'react'

const useScrollTop = () => {
  const [isTop, setIsTop] = useState<boolean>(false)

  useEffect(() => {
    const checkScrollPos = () => {
      setIsTop(window.scrollY < NAVBAR_HEIGHT)
    }

    addEventListener('scroll', checkScrollPos)

    return () => removeEventListener('scroll', checkScrollPos)
  }, [])

  return isTop
}

export default useScrollTop
