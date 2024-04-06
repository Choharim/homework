import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import notionAPI from '@/adapter/notion'
import { NextPageWithLayout } from '@/shared/types/layout'

import CardListFrame from '@/feature/post/components/CardListFrame'
import PostCardLink from '@/feature/post/components/PostCardLink'
import postFeature from '@/feature/post'
import { css } from '@emotion/react'

import AppFeature from '@/feature/app'
import { PageSearchParams } from '@/feature/app/types/navigation'
import { PostCategory, PostFrontMatter } from '@/adapter/notion/type'
import CategoryFilter from '@/feature/post/components/CategoryFilter'
import usePagination from '@/components/pagination/usePagination'
import { MouseEvent } from 'react'
import CategoryChip from '@/feature/post/components/CategoryChip'

const Blog: NextPageWithLayout<PageProps> = ({ posts, categories }) => {
  const router = useRouter()
  const query = router.query as PageSearchParams['blog']

  const { Pagination, paginatedPosts } = usePagination({ posts })

  const onClickCategory =
    (category?: PostCategory) => (e: MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation()

      let blogSearchParams: PageSearchParams['blog'] = {}

      if (category && postFeature.getIsValidCategory(category)) {
        blogSearchParams = { category }
      }

      router.push(AppFeature.getUri({ name: 'blog' }, blogSearchParams))
    }
  return (
    <>
      <CategoryFilter>
        <CategoryFilter.Chip
          isSeleted={!query.category}
          onClick={onClickCategory()}
        >
          전체
        </CategoryFilter.Chip>
        {categories.map((category) => (
          <CategoryFilter.Chip
            key={category}
            category={category}
            isSeleted={query.category === category}
            onClick={onClickCategory(category)}
          />
        ))}
      </CategoryFilter>

      <CardListFrame
        css={css`
          margin-top: 40px;
        `}
      >
        {paginatedPosts.map((post) => {
          const { id, title, description, create_date, category, tag } = post

          return (
            <PostCardLink key={id} href={`${router.pathname}/${id}`}>
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

export default Blog

type PageProps = {
  posts: PostFrontMatter[]
  categories: PostCategory[]
}
export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const query = context.query as PageSearchParams['blog']
  const category = query.category

  let allPosts: PostFrontMatter[] = []

  if (category && postFeature.getIsValidCategory(category)) {
    allPosts = await notionAPI.getPostByCategory(category)
  } else {
    allPosts = await notionAPI.getPosts()
  }
  const publishedPosts = postFeature.getPublishedPosts(allPosts)
  const posts = postFeature.getPostsSortedByNewest(publishedPosts)

  const categories = await notionAPI.getCategories()

  return {
    props: {
      posts,
      categories,
    },
  }
}
