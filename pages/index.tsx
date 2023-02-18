import { InferGetStaticPropsType } from 'next'

import { NextPageWithLayout } from './_app'
import { fetchPosts } from '@/services/api'

// import usePagination from '@/hooks/usePagination'
import PostCardLink from '@/components/post/PostCardLink'
import Layout from '@/components/layout/Layout'
import CardListFrame from '@/components/post/CardListFrame'
import CategoryFilter from '@/components/post/CategoryFilter'

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ posts }) => {
  // TODO:
  // const { posts, targetRef } = usePagination({ category: 'all' })

  return (
    <>
      <CardListFrame>
        <CategoryFilter />
        {posts?.map(({ data, slug }) => (
          <PostCardLink key={slug} data={data} slug={slug} />
        ))}
      </CardListFrame>
      {/* <div ref={targetRef} /> */}
    </>
  )
}

export default Home

export async function getStaticProps() {
  const posts = await fetchPosts(process.env.BASE_URL || '', {
    category: 'all',
  })

  return {
    props: {
      posts,
    },
  }
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title="홈">{page}</Layout>
}
