import styled from 'styled-components'

import { CardListFrame } from '@/styles/mixin'

import usePagination from '@/hooks/usePagination'
import PostCardLink from '@/components/post/PostCardLink'
import Layout from '@/components/layout/Layout'
import CategoryFilter from '@/components/post/CategoryFilter'

const Home = () => {
  const { posts, targetRef } = usePagination({ category: 'all' })

  return (
    <>
      <CategoryFilter />
      <CardList>
        {posts?.map(({ data, slug }) => (
          <PostCardLink key={slug} data={data} slug={slug} />
        ))}
      </CardList>
      <div ref={targetRef} />
    </>
  )
}

export default Home

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title="홈">{page}</Layout>
}

const CardList = styled.div`
  ${CardListFrame};
`
