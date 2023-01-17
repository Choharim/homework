import { InferGetStaticPropsType } from 'next'
import styled from 'styled-components'

import { CardListFrame } from '@/styles/mixin'
import { NextPageWithLayout } from './_app'
import { fetchPosts } from '@/services/api'

// import usePagination from '@/hooks/usePagination'
import PostCardLink from '@/components/post/PostCardLink'
import Layout from '@/components/layout/Layout'
import CategoryFilter from '@/components/post/CategoryFilter'

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ posts }) => {
  // TODO:
  // const { posts, targetRef } = usePagination({ category: 'all' })

  return (
    <>
      <CategoryFilter />
      <CardList>
        {posts?.map(({ data, slug }) => (
          <PostCardLink key={slug} data={data} slug={slug} />
        ))}
      </CardList>
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

const CardList = styled.div`
  ${CardListFrame};
`
