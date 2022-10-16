import { InferGetStaticPropsType } from 'next'
import styled from 'styled-components'

import { NextPageWithLayout } from './_app'
import { getAllPosts } from 'domain/post/util'
import { CardListFrame } from 'application/styles/mixin'

import PostCardLink from 'application/components/post/PostCardLink'
import Layout from 'application/components/layout/Layout'

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ posts }) => {
  return (
    <CardList>
      {posts?.map(({ data, slug }) => (
        <PostCardLink key={slug} data={data} slug={slug} />
      ))}
    </CardList>
  )
}

export default Home

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title="홈">{page}</Layout>
}

export async function getStaticProps() {
  const posts = getAllPosts()

  return {
    props: { posts },
  }
}

const CardList = styled.div`
  ${CardListFrame}
`
