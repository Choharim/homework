import { GetStaticProps } from 'next'

import { NextPageWithLayout } from '@/shared/types/layout'
import { BLOG } from '@/feature/app/constants/owner'
import { PostCategory, PostFrontMatter } from '@/adapter/notion/type'
import notionAPI from '@/adapter/notion'
import postFeature from '@/feature/post'
import CardListFrame from '@/feature/post/components/CardListFrame'
import PostCardLink from '@/feature/post/components/PostCardLink'
import CategoryChip from '@/feature/post/components/CategoryChip'
import usePagination from '@/components/pagination/usePagination'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'
import { css } from '@emotion/react'
import AppFeature from '@/feature/app'

const Home: NextPageWithLayout<PageProps> = ({ posts }) => {
  const router = useRouter()

  const { Pagination, paginatedPosts } = usePagination({ posts })

  const onClickCategory =
    (category: PostCategory) => (e: MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation()

      router.push(
        AppFeature.getAppURI({ name: 'category', pathParams: { category } })
      )
    }

  return (
    <>
      <CardListFrame
        css={css`
          margin-top: 40px;
        `}
      >
        {paginatedPosts.map((post) => {
          const { id, title, description, create_date, category, tag } = post

          return (
            <PostCardLink
              key={id}
              href={AppFeature.getAppURI({
                name: 'blogDetails',
                pathParams: { id },
              })}
            >
              <PostCardLink.Top>
                <PostCardLink.Title>{title}</PostCardLink.Title>
                <PostCardLink.Date dateTime={create_date} />
                <PostCardLink.Desc>{description}</PostCardLink.Desc>
              </PostCardLink.Top>
              <PostCardLink.Bottom>
                <CategoryChip
                  category={category}
                  onClick={onClickCategory(category)}
                />
                <PostCardLink.Tag tags={tag} />
              </PostCardLink.Bottom>
            </PostCardLink>
          )
        })}
      </CardListFrame>

      <Pagination />
    </>
  )
}

export default Home

type PageProps = {
  posts: PostFrontMatter[]
}
export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const allPosts = await notionAPI.getPosts()
  const publishedPosts = postFeature.getPublishedPosts(allPosts)
  const posts = postFeature.getPostsSortedByNewest(publishedPosts)

  return {
    props: {
      posts,
      title: BLOG.fullName,
    },
  }
}
