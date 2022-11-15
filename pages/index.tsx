import { InferGetStaticPropsType } from 'next'
import styled, { css } from 'styled-components'

import { NextPageWithLayout } from './_app'
import { getAllPosts } from 'domain/post/util'
import { CardListFrame } from 'styles/mixin'

import PostCardLink from 'components/post/PostCardLink'
import Layout from 'components/layout/Layout'
import { POST_GROUP_COUNT } from 'application/constants/post/count'

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ posts }) => {
  return (
    <>
      <Title>🔥 최신 글</Title>
      <CardList>
        {posts?.map(({ data, slug }) => (
          <PostCardLink key={slug} data={data} slug={slug} />
        ))}
      </CardList>
    </>
  )
}

export default Home

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title="홈">{page}</Layout>
}

export async function getStaticProps() {
  const posts = getAllPosts().slice(0, POST_GROUP_COUNT)

  return {
    props: { posts },
  }
}

const Title = styled.h1`
  ${({ theme }) => theme.font.header_2}
  margin-bottom: 30px;

  ${({ theme }) => css`
    ${theme.media.tablet} {
      ${theme.font.header_3}
      margin-bottom: 25px;
    }
  `}
`
const CardList = styled.div`
  ${CardListFrame}
`
