import notionAPI from '@/adapter/notion'
import { PostCategory } from '@/entity/post/type'

import CardListFrame from '@/feature/post/components/CardListFrame'
import CategoryFilter from '@/feature/post/components/CategoryFilter'

import postEntity from '@/entity/post'
import { AppPageProps } from '@/feature/application/types/navigation'
import * as style from 'src/feature/post/components/style/cardListFrame.css'
import { Suspense } from 'react'
import { Metadata } from 'next'
import postFeature from '@/feature/post'
import { toPascalCase } from '@/shared/utils/string'
import PostList from '../../_components/PostList'
import StructuredData from '@/feature/seo/components/StructuredData'
import { getCollectionPageContext } from '@/feature/seo/constants/jsonLd'
import AppFeature from '@/feature/application'
import { BLOG } from '@/feature/application/constants/owner'

async function CategoryPage({
  params: { category },
}: AppPageProps<'category'>) {
  const frontMatters = await getFrontMatters(category)
  const categoryList = await getCategoryList()

  return (
    <>
      <StructuredData
        data={getCollectionPageContext({
          category: category,
          frontMatters,
          url: `${BLOG.domain}${AppFeature.getAppURI({
            name: 'category',
            pathParams: { category: category },
          })}`,
        })}
      />

      <CategoryFilter>
        <CategoryFilter.Chip isSeleted={!category}>전체</CategoryFilter.Chip>
        {categoryList.map((c) => (
          <CategoryFilter.Chip
            key={c}
            category={c}
            isSeleted={category === c}
          />
        ))}
      </CategoryFilter>

      <CardListFrame className={style.topGap}>
        <Suspense>
          <PostList frontMatters={frontMatters} />
        </Suspense>
      </CardListFrame>
    </>
  )
}

export default CategoryPage

export async function generateStaticParams() {
  const categories = await notionAPI.getCategories()

  return categories.map((category) => ({
    params: { category },
  }))
}

async function getFrontMatters(category: PostCategory) {
  const all = await notionAPI.getPublishedPostFrontMatters()
  const categorized = postEntity.getPostFrontMattersByCategory({
    posts: all,
    category,
  })
  const frontMatters = postEntity.getPostFrontMattersSortedByNewest(categorized)

  return frontMatters
}

const getCategoryList = async () => {
  const categoryList = await notionAPI.getCategories()

  return categoryList
}

export async function generateMetadata({
  params,
}: AppPageProps<'category'>): Promise<Metadata> {
  const category = (await params).category

  return {
    title: `${postFeature.getCategoryName(category)}(${toPascalCase(
      category
    )}) 글 목록`,
    description: `${postFeature.getCategoryName(
      category
    )} 개발에 관한 인사이트를 제공해요.`,
  }
}
