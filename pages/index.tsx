import styled from 'styled-components'

import { NextPageWithLayout } from './_app'
import Post from 'entity/post/type'
import { getAllPosts } from 'entity/post/util'

import { Layout, PostCard } from 'components'

const Home: NextPageWithLayout<{
  posts: Pick<Post, 'slug' | 'data'>[]
}> = ({ posts }) => {
  return (
    <CardList>
      {posts?.map(({ data, slug }) => (
        <PostCard key={slug} data={data} slug={slug} />
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
