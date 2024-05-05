import { GetStaticProps } from 'next'

import { NextPageWithLayout } from '@/shared/types/layout'
import { BLOG } from '@/feature/app/constants/owner'
import { PostFrontMatter } from '@/entity/post/type'
import notionAPI from '@/adapter/notion'

import CardListFrame from '@/feature/post/components/CardListFrame'
import PostCard from '@/feature/post/components/PostCard'
import CategoryChip from '@/feature/post/components/CategoryChip'
import usePagination from '@/components/pagination/usePagination'
import AppFeature from '@/feature/app'
import postEntity from '@/entity/post'
import Link from 'next/link'
import * as style from 'src/feature/post/components/style/cardListFrame.css'

const Home: NextPageWithLayout<PageProps> = ({ frontMatters }) => {
  const { Pagination, paginatedPosts } = usePagination({
    posts: frontMatters,
  })

  return (
    <>
      <CardListFrame className={style.topGap}>
        {paginatedPosts.map((post) => {
          const { id, title, description, create_date, category, tag } = post

          return (
            <PostCard key={id}>
              <Link
                className={style.topLink}
                href={AppFeature.getAppURI({
                  name: 'blogDetails',
                  pathParams: { id },
                })}
              >
                <PostCard.Top>
                  <PostCard.Title>{title}</PostCard.Title>
                  <PostCard.Date dateTime={create_date} />
                  <PostCard.Desc>{description}</PostCard.Desc>
                </PostCard.Top>
              </Link>
              <PostCard.Bottom>
                <CategoryChip>{category}</CategoryChip>
                <PostCard.Tag tags={tag} />
              </PostCard.Bottom>
            </PostCard>
          )
        })}
      </CardListFrame>

      <Pagination />
    </>
  )
}

export default Home

type PageProps = {
  frontMatters: PostFrontMatter[]
}
export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const all = await notionAPI.getPostFrontMatters()
  const published = postEntity.getPublishedPostFrontMatters(all)
  const frontMatters = postEntity.getPostFrontMattersSortedByNewest(published)

  return {
    props: {
      frontMatters,
      title: BLOG.fullName,
    },
  }
}
