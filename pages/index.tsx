import Post from 'entity/post/type'
import { getAllPosts } from 'entity/post/util'
import { Layout, PostCard } from 'components'
import styled from 'styled-components'

const Home = ({ posts }: { posts: Pick<Post, 'slug' | 'data'>[] }) => {
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  padding: 24px;
`
