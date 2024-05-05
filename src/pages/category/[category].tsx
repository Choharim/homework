import notionAPI from '@/adapter/notion'
import { PostCategory, PostFrontMatter } from '@/entity/post/type'
import usePagination from '@/components/pagination/usePagination'
import AppFeature from '@/feature/app'
import { AppPageRouterQuery } from '@/feature/app/types/navigation'

import CardListFrame from '@/feature/post/components/CardListFrame'
import CategoryChip from '@/feature/post/components/CategoryChip'
import CategoryFilter from '@/feature/post/components/CategoryFilter'
import PostCard from '@/feature/post/components/PostCard'
import { NextPageWithLayout } from '@/shared/types/layout'
import { GetStaticProps } from 'next'
import postEntity from '@/entity/post'
import Link from 'next/link'
import * as style from 'src/feature/post/components/style/cardListFrame.css'

const CategoryPage: NextPageWithLayout<PageProps> = ({
  frontMatters,
  categories,
  category,
}) => {
  const { Pagination, paginatedPosts } = usePagination({ posts: frontMatters })

  return (
    <>
      <CategoryFilter>
        <CategoryFilter.Chip isSeleted={!category}>전체</CategoryFilter.Chip>
        {categories.map((c) => (
          <CategoryFilter.Chip
            key={c}
            category={c}
            isSeleted={category === c}
          />
        ))}
      </CategoryFilter>

      <CardListFrame style={{ marginTop: '40px' }}>
        {paginatedPosts.map((post) => {
          const { id, title, description, create_date, category, tag } = post

          return (
            <PostCard key={id}>
              <Link
                href={AppFeature.getAppURI({
                  name: 'blogDetails',
                  pathParams: { id },
                })}
                className={style.topLink}
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

export default CategoryPage

export const getStaticPaths = async () => {
  const categories = await notionAPI.getCategories()

  const paths = categories.map((category) => ({
    params: { category },
  }))

  return { paths, fallback: false }
}

type PageProps = {
  frontMatters: PostFrontMatter[]
  categories: PostCategory[]
  category: PostCategory
}
export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const query = context.params as AppPageRouterQuery<'category'>
  const category = query.category

  const all = await notionAPI.getPostFrontMatters()
  const categorized = postEntity.getPostFrontMattersByCategory({
    posts: all,
    category,
  })
  const published = postEntity.getPublishedPostFrontMatters(categorized)
  const frontMatters = postEntity.getPostFrontMattersSortedByNewest(published)

  const categories = await notionAPI.getCategories()

  return {
    props: {
      frontMatters,
      categories,
      category,
    },
  }
}
