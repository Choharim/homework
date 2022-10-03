import { InferGetStaticPropsType, NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

import { getAllPosts } from 'entity/post/util'

import { PostCardLink } from 'components'

const PostsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <CardList>
      {posts?.map(({ data, slug }) => (
        <PostCardLink key={slug} data={data} slug={slug} />
      ))}
    </CardList>
  )
}

export default PostsPage

export async function getStaticProps() {
  const posts = getAllPosts()

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
