import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
  PreviewData,
} from 'next'
import React from 'react'
import styled from 'styled-components'

import { getAllPosts } from 'entity/post/util'

import { PostCardLink } from 'components'
import { ParsedUrlQuery } from 'querystring'
import TagFilter from 'components/TagFilter'

const PostsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ posts }) => {
  return (
    <Frame>
      <TagFilter />
      <CardList>
        {posts?.map(({ data, slug }) => (
          <PostCardLink key={slug} data={data} slug={slug} />
        ))}
      </CardList>
    </Frame>
  )
}

export default PostsPage

export async function getServerSideProps(
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  const { query } = context

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
    props: { posts },
  }
}

const Frame = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  gap: 30px;
  margin-top: 59px;
`

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`
