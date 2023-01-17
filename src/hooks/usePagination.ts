import { useEffect, useRef, useState } from 'react'

import Post, { Category } from '@/domain/post/type'
import { fetchPosts } from '@/services/api'

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: [0, 0.3, 1],
}

type Params = {
  category: Category
}
const usePagination = ({ category }: Params) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [pageOffset, setPageOffset] = useState(0)
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!targetRef.current) return

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setPageOffset((prev) => prev + 1)
    }, OBSERVER_OPTIONS)

    observer.observe(targetRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!pageOffset) return

    fetchPosts(pageOffset, category).then((res) => setPosts(res))
  }, [pageOffset, category])

  return { posts, targetRef }
}

export default usePagination
