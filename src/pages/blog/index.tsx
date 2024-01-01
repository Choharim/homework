import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

import notionAPI from '@/adapter/notion'
import { NextPageWithLayout } from '@/shared/types/layout'

import CardListFrame from '@/feature/post/components/CardListFrame'
import PostCardLink from '@/feature/post/components/PostCardLink'
import CategoryChip from '@/feature/post/components/CategoryChip'
import postFeature from '@/feature/post'
import { css } from '@emotion/react'
import Pagination from '@/components/pagination/Pagination'
import usePagination from '@/components/pagination/usePagination'

const Blog: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ posts }) => {
  const router = useRouter()
  const { paginatedPosts, totalPage, currentPage, pageQueryKey } =
    usePagination({ posts })

  return (
    <>
      <CardListFrame
        css={css`
          margin-top: 40px;
        `}
      >
        {paginatedPosts?.map((post) => {
          const { id, title, description, create_date, category } = post
          return (
            <PostCardLink key={id} href={`${router.pathname}/${id}`}>
              <PostCardLink.Top>
                <PostCardLink.Title>{title}</PostCardLink.Title>
                <PostCardLink.Desc>{description}</PostCardLink.Desc>
              </PostCardLink.Top>
              <PostCardLink.Bottom>
                <CategoryChip category={category} />
                <PostCardLink.Date dateTime={create_date} />
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

export default Blog

export async function getStaticProps() {
  const allPosts = await notionAPI.getPosts()
  const publishedPosts = postFeature.getPublishedPosts(allPosts)
  const posts = postFeature.getPostsSortedByNewest(publishedPosts)

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}
