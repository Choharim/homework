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

const ROUTER_QUERY_KEY = 'page'
const PAGE_SIZE = 10

type Params = {
  posts: PostFrontMatter[]
}
const usePagination = ({ posts }: Params) => {
  const [currentPage, setCurrentPage] = useState(1)
  const paginatedPosts = getPaginatedPosts(posts, currentPage, PAGE_SIZE)
  const totalPage = Math.ceil(posts.length / PAGE_SIZE)

  const router = useRouter()

  useEffect(() => {
    const page = Number(router.query[ROUTER_QUERY_KEY])

    if (!isNaN(page)) {
      setCurrentPage(page)
    } else {
      setCurrentPage(1)
    }
  }, [router.query])

  const Pagination = useCallback(() => {
    return (
      <_Pagination
        total={totalPage}
        activePage={currentPage}
        routerQueryKey={ROUTER_QUERY_KEY}
      />
    )
  }, [currentPage, totalPage])

  return { Pagination, paginatedPosts }
}

export default usePagination
