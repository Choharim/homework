import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  PreviewData,
} from 'next'
import React from 'react'
import styled from 'styled-components'
import { ParsedUrlQuery } from 'querystring'

import { Category } from '@/domain/post/type'
import { CATEGORIES } from '@/domain/post/constant'
import { NextPageWithLayout } from 'pages/_app'
import { CardListFrame } from '@/styles/mixin'

import usePagination from '@/hooks/usePagination'
import CategoryFilter from '@/components/post/CategoryFilter'
import PostCardLink from '@/components/post/PostCardLink'

const PostsPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ category }) => {
  const { posts, targetRef } = usePagination({ category })

  return (
    <>
      <CategoryFilter />
      <CardList>
        {posts?.map(({ data, slug }) => {
          return <PostCardLink key={slug} data={data} slug={slug} />
        })}
      </CardList>
      <div ref={targetRef} />
    </>
  )
}

export default PostsPage

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

  return {
    props: {
      category: slug,
    },
  }
}

const CardList = styled.div`
  ${CardListFrame}
`
