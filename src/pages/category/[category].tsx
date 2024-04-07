import notionAPI from '@/adapter/notion'
import { PostCategory, PostFrontMatter } from '@/adapter/notion/type'
import usePagination from '@/components/pagination/usePagination'
import AppFeature from '@/feature/app'
import { AppPageRouterQuery } from '@/feature/app/types/navigation'
import postFeature from '@/feature/post'
import CardListFrame from '@/feature/post/components/CardListFrame'
import CategoryChip from '@/feature/post/components/CategoryChip'
import CategoryFilter from '@/feature/post/components/CategoryFilter'
import PostCardLink from '@/feature/post/components/PostCardLink'
import { NextPageWithLayout } from '@/shared/types/layout'
import { css } from '@emotion/react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React, { MouseEvent } from 'react'

const CategoryPage: NextPageWithLayout<PageProps> = ({
  posts,
  categories,
  category,
}) => {
  const router = useRouter()

  const { Pagination, paginatedPosts } = usePagination({ posts })

  const handleClickAll = () => {
    router.push(AppFeature.getAppURI({ name: 'main' }))
  }

  const onClickCategory =
    (category: PostCategory) => (e: MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation()

      router.push(
        AppFeature.getAppURI({
          name: 'category',
          pathParams: { category },
        })
      )
    }

  return (
    <>
      <CategoryFilter>
        <CategoryFilter.Chip isSeleted={!category} onClick={handleClickAll}>
          전체
        </CategoryFilter.Chip>
        {categories.map((c) => (
          <CategoryFilter.Chip
            key={c}
            category={c}
            isSeleted={category === c}
            onClick={onClickCategory(c)}
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

export default CategoryPage

export const getStaticPaths = async () => {
  const categories = await notionAPI.getCategories()

  const paths = categories.map((category) => ({
    params: { category },
  }))

  return { paths, fallback: false }
}

type PageProps = {
  posts: PostFrontMatter[]
  categories: PostCategory[]
  category: PostCategory
}
export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const query = context.params as AppPageRouterQuery<'category'>
  const category = query.category

  const allPosts = await notionAPI.getPostByCategory(category)
  const publishedPosts = postFeature.getPublishedPosts(allPosts)
  const posts = postFeature.getPostsSortedByNewest(publishedPosts)

  const categories = await notionAPI.getCategories()

  return {
    props: {
      posts,
      categories,
      category,
    },
  }
}
