import { InferGetStaticPropsType } from 'next'

import PostCardLink from '@/application/post/components/PostCardLink'
import CardListFrame from '@/application/post/components/CardListFrame'
import CategoryFilter from '@/application/post/components/CategoryFilter'
import Pagination from '@/components/pagination/Pagination'
import CategoryChip from '@/application/post/components/CategoryChip'

import usePagination from '@/components/pagination/usePagination'
import { getPosts } from '@/domain/post'
import { NextPageWithLayout } from '@/shared/types/layout'
import { BLOG } from '@/domain/owner/constant'

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ posts }) => {
  const { paginatedPosts, totalPage, currentPage, pageQueryKey } =
    usePagination({ posts })

  return (
    <>
      <CategoryFilter />
      <CardListFrame>
        {paginatedPosts?.map(({ data, slug }) => {
          const { title, description, createDate, category } = data
          return (
            <PostCardLink key={slug} slug={slug}>
              <PostCardLink.Top>
                <PostCardLink.Title>{title}</PostCardLink.Title>
                <PostCardLink.Desc>{description}</PostCardLink.Desc>
              </PostCardLink.Top>
              <PostCardLink.Bottom>
                <CategoryChip category={category} />
                <PostCardLink.Date dateTime={createDate} />
              </PostCardLink.Bottom>
            </PostCardLink>
          )
        })}
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
      title: BLOG.fullName,
    },
  }
}
