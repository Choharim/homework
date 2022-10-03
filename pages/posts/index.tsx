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
import { Tag } from 'entity/post/type'

const PostsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ posts }) => {
  return (
    <CardList>
      {posts?.map(({ data, slug }) => (
        <PostCardLink key={slug} data={data} slug={slug} />
      ))}
    </CardList>
  )
}

export default PostsPage

export async function getServerSideProps(
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  const { query } = context

  let posts

  if (!!query.tag) {
    posts = getAllPosts().filter((post) =>
      post.data.tags.includes(query.tag as Tag)
    )
  } else {
    posts = getAllPosts()
  }

  return {
    props: { posts },
  }
}

const CardList = styled.div`
  margin-top: 59px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`
