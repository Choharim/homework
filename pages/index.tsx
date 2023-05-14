import { InferGetStaticPropsType } from 'next'

import PostCardLink from '@/components/post/PostCardLink'
import CardListFrame from '@/components/post/CardListFrame'
import CategoryFilter from '@/components/post/CategoryFilter'
import Pagination from '@/components/pagination/Pagination'

import usePagination from '@/components/pagination/usePagination'
import { getPosts } from '@/domain/post'
import { NextPageWithLayout } from '@/shared/types/layout'
import { BLOG_NAME } from '@/domain/owner/constant'

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ posts }) => {
  const { paginatedPosts, totalPage, currentPage, pageQueryKey } =
    usePagination({ posts })

  return (
    <>
      <CardListFrame>
        <CategoryFilter />
        {paginatedPosts?.map(({ data, slug }) => (
          <PostCardLink key={slug} data={data} slug={slug} />
        ))}
      </CardListFrame>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        pageQueryKey={pageQueryKey}
      />
    </>
  )
}

export default Home

export async function getStaticProps() {
  const posts = getPosts('all')

  return {
    props: {
      posts,
      title: BLOG_NAME.fullName,
    },
  }
}
