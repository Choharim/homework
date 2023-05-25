import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  PreviewData,
} from 'next'
import React from 'react'
import { ParsedUrlQuery } from 'querystring'

import PostCardLink from '@/application/post/components/PostCardLink'
import CardListFrame from '@/application/post/components/CardListFrame'
import CategoryFilter from '@/application/post/components/CategoryFilter'
import usePagination from '@/components/pagination/usePagination'
import Pagination from '@/components/pagination/Pagination'
import CategoryChip from '@/application/post/components/CategoryChip'

import { getPosts } from '@/domain/post'
import { NextPageWithLayout } from '@/shared/types/layout'
import { Category } from '@/domain/post/type'
import { CATEGORIES } from '@/domain/post/constant'

const Posts: NextPageWithLayout<
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

export default Posts

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: CATEGORIES.map((category) => `/category/${category}`),
    fallback: false,
  }
}

export type Params = {
  slug: Category
}

export const getStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
  const { slug } = context.params as Params
  const posts = getPosts(slug)

  return {
    props: {
      posts,
      category: slug,
      title: slug,
    },
  }
}
