import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
  PreviewData,
} from 'next'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import { ParsedUrlQuery } from 'querystring'

import { getAllPosts } from '@/domain/post'
import { POST_GROUP_COUNT } from '@/application/post/constant'
import { CardListFrame } from '@/styles/mixin'

import TagFilter from '@/components/post/TagFilter'
import PostCardLink from '@/components/post/PostCardLink'
import Pagination from '@/components/post/Pagination'

const PostsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ posts, total, currentPageNumber }) => {
  const totalPages = useMemo(() => {
    return Math.ceil((total || 0) / POST_GROUP_COUNT)
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
        (currentPageNumber - 1) * POST_GROUP_COUNT,
        currentPageNumber * POST_GROUP_COUNT
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
`
