import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  PreviewData,
} from 'next'
import React from 'react'
import { ParsedUrlQuery } from 'querystring'

import { Category } from '@/domain/post/type'
import { CATEGORIES } from '@/domain/post/constant'
import { NextPageWithLayout } from 'pages/_app'
import { CATEGORY_TITLE } from '@/application/post/constant'
import { fetchPosts } from '@/services/api'

import PostCardLink from '@/components/post/PostCardLink'
import CardListFrame from '@/components/post/CardListFrame'
import CategoryFilter from '@/components/post/CategoryFilter'
import Layout from '@/components/layout/Layout'
import usePagination from '@/hooks/usePagination'
import Pagination from '@/components/Pagination'

const Posts: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ posts }) => {
  const { paginatedPosts, totalPage, currentPage, pageQueryKey } =
    usePagination({ posts })

  return (
    <>
      <CardListFrame>
        <CategoryFilter />
        {paginatedPosts?.map(({ data, slug }) => {
          return <PostCardLink key={slug} data={data} slug={slug} />
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

Posts.getLayout = function getLayout(
  page: React.ReactElement<InferGetStaticPropsType<typeof getStaticProps>>
) {
  return <Layout title={CATEGORY_TITLE[page.props.category]}>{page}</Layout>
}

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
  const posts = await fetchPosts({ category: slug })

  return {
    props: {
      posts,
      category: slug,
    },
  }
}
