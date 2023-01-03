import { InferGetStaticPropsType } from 'next'
import styled from 'styled-components'

import { getAllPosts } from '@/domain/post'
import { POST_GROUP_COUNT } from '@/application/post/constant'
import { NextPageWithLayout } from './_app'
import { CardListFrame } from '@/styles/mixin'

import PostCardLink from '@/components/post/PostCardLink'
import Layout from '@/components/layout/Layout'

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ posts }) => {
  return (
    <>
      <Title>최신 글</Title>
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
  ${({ theme }) => theme.font.header_4};
  color: ${({ theme }) => theme.color.primary1};
`

const CardList = styled.div`
  ${CardListFrame};
`
