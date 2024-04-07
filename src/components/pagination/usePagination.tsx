import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { PostFrontMatter } from '@/entity/post/type'
import _Pagination from './Pagination'

const getPaginatedPosts = (
  posts: PostFrontMatter[],
  pageNumber: number,
  pageSize: number
) => {
  const startIndex = (pageNumber - 1) * pageSize
  return posts.slice(startIndex, startIndex + pageSize)
}

const PAGE_QUERY_KEY = 'page'
const PAGINATION_PAGE_SIZE = 10

type Params = {
  posts: PostFrontMatter[]
}
const usePagination = ({ posts }: Params) => {
  const [currentPage, setCurrentPage] = useState(1)
  const paginatedPosts = getPaginatedPosts(
    posts,
    currentPage,
    PAGINATION_PAGE_SIZE
  )
  const totalPage = Math.ceil(posts.length / PAGINATION_PAGE_SIZE)

  const router = useRouter()

  useEffect(() => {
    const page = Number(router.query[PAGE_QUERY_KEY])

    if (!isNaN(page)) {
      setCurrentPage(page)
    } else {
      setCurrentPage(1)
    }
  }, [router.query])

  const Pagination = useCallback(() => {
    return (
      <_Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        pageQueryKey={PAGE_QUERY_KEY}
      />
    )
  }, [currentPage, totalPage])

  return { Pagination, paginatedPosts }
}

export default usePagination
