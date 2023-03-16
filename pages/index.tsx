import { InferGetStaticPropsType } from 'next'

import { NextPageWithLayout } from './_app'
import { fetchPosts } from '@/services/api'
import usePagination from '@/hooks/usePagination'

import PostCardLink from '@/components/post/PostCardLink'
import Layout from '@/components/layout/Layout'
import CardListFrame from '@/components/post/CardListFrame'
import CategoryFilter from '@/components/post/CategoryFilter'
import Pagination from '@/components/Pagination'

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ posts }) => {
  const { paginatedPosts, totalPage, currentPage, pageQueryKey } =
    usePagination({ posts })

  return (
    <>
      <CardListFrame>
        <CategoryFilter />
        {paginatedPosts?.map(({ data, slug }) => (
          <PostCardLink key={slug} data={data} slug={slug} />
        ))}
      </CardListFrame>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        pageQueryKey={pageQueryKey}
      />
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
  return (
    <Layout title="홈" hasFooter={false}>
      {page}
    </Layout>
  )
}
