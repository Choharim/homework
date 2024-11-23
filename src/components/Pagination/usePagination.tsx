import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { PostFrontMatter } from '@/entity/post/type'
import _Pagination from '.'

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

const getValidPage = (page?: number) => {
  if (!page || isNaN(page) || page < 1) return 1

  return page
}

type Params = {
  posts: PostFrontMatter[]
}
const usePagination = ({ posts }: Params) => {
  const searchParams = useSearchParams()
  const page = Number(searchParams.get(ROUTER_QUERY_KEY))

  const [currentPage, setCurrentPage] = useState(getValidPage(page))

  useEffect(() => {
    setCurrentPage(getValidPage(page))
  }, [page, searchParams])

  const paginatedPosts = getPaginatedPosts(posts, currentPage, PAGE_SIZE)
  const totalPage = Math.ceil(posts.length / PAGE_SIZE)

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
