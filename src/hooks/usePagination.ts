import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Post from '@/domain/post/type'

const getPaginatedPosts = (
  posts: Array<Post>,
  pageNumber: number,
  pageSize: number
) => {
  const startIndex = (pageNumber - 1) * pageSize
  return posts.slice(startIndex, startIndex + pageSize)
}

const PAGE_QUERY_KEY = 'page'

type Params = {
  pageSize: number
  posts: Post[]
}
const usePagination = ({ posts, pageSize }: Params) => {
  const [currentPage, setCurrentPage] = useState(1)
  const paginatedPosts = getPaginatedPosts(posts, currentPage, pageSize)
  const totalPage = Math.ceil(posts.length / pageSize)

  const router = useRouter()

  useEffect(() => {
    const page = Number(router.query[PAGE_QUERY_KEY])

    if (!isNaN(page)) {
      setCurrentPage(page)
    } else {
      setCurrentPage(1)
    }
  }, [router.query])

  return {
    paginatedPosts,
    totalPage,
    currentPage,
    pageQueryKey: PAGE_QUERY_KEY,
  }
}

export default usePagination
