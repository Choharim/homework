import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
  PreviewData,
} from 'next'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import { ParsedUrlQuery } from 'querystring'

import { getAllPosts } from 'domain/post/util'
import { CardListFrame } from 'application/styles/mixin'

import TagFilter from 'application/components/post/TagFilter'
import PostCardLink from 'application/components/post/PostCardLink'
import Pagination from 'application/components/post/Pagnation'

const MAX_CARD_COUNT_PER_PAGE = 6

const PostsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ posts, total, currentPageNumber }) => {
  const totalPages = useMemo(() => {
    return Math.ceil((total || 0) / MAX_CARD_COUNT_PER_PAGE)
  }, [total])

  return (
    <Frame>
      <TagFilter />
      <CardList>
        {posts?.map(({ data, slug }) => {
          return <PostCardLink key={slug} data={data} slug={slug} />
        })}
      </CardList>
      <Pagination
        totalPages={totalPages}
        currentPageNumber={currentPageNumber}
      />
    </Frame>
  )
}

export default PostsPage

export async function getServerSideProps(
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  const { query } = context
  const currentPageNumber = Number(query.page || 1)

  let posts

  if (!!query.tag) {
    posts = getAllPosts().filter((post) => {
      const tags = (query.tag as string)?.split(',') || []

      return tags.includes(post.data.tag)
    })
  } else {
    posts = getAllPosts()
  }

  return {
    props: {
      posts: posts.slice(
        (currentPageNumber - 1) * MAX_CARD_COUNT_PER_PAGE,
        currentPageNumber * MAX_CARD_COUNT_PER_PAGE
      ),
      total: posts.length,
      currentPageNumber,
    },
  }
}

const Frame = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-rows: max-content;
  height: 100%;
`

const CardList = styled.div`
  ${CardListFrame}
  margin-top: 24px;
`
