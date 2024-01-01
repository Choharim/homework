import { InferGetStaticPropsType } from 'next'

import { NextPageWithLayout } from '@/shared/types/layout'
import { BLOG } from '@/feature/app/constants/owner'

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return <h1>리뉴얼 중~~</h1>
}

export default Home

export async function getStaticProps() {
  return {
    props: {
      title: BLOG.fullName,
    },
  }
}
