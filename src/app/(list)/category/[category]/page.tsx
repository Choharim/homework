import notionAPI from '@/adapter/notion'
import { PostCategory } from '@/entity/post/type'

import CardListFrame from '@/feature/post/_components/CardListFrame'
import CategoryFilter from '@/feature/post/_components/CategoryFilter'

import PostEntity from '@/entity/post'
import { AppPageProps } from '@/feature/application/_types/navigation'
import * as style from '@/feature/post/_components/cardListFrame.css'
import { Suspense } from 'react'
import { Metadata } from 'next'
import PostFeature from '@/feature/post'
import { toPascalCase } from '@/shared/_utils'
import PostList from '../../_components/PostList'
import StructuredData from '@/feature/seo/_components/StructuredData'
import AppFeature from '@/feature/application'
import SEOFeature from '@/feature/seo'

async function CategoryPage({
  params: { category },
}: AppPageProps<'category'>) {
  const frontMatters = await getFrontMatters(category)
  const categoryList = await getCategoryList()

  return (
    <>
      <StructuredData
        data={SEOFeature.getCollectionPageContext({
          category: category,
          frontMatters,
          url: `${AppFeature.URL.domain}${AppFeature.getAppURI({
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
  const categorized = PostEntity.findFrontMattersByCategory(all, category)
  const frontMatters = PostEntity.sortFrontMattersByNewest(categorized)

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
    title: `${PostFeature.getCategoryName(category)}(${toPascalCase(
      category
    )}) 글 목록`,
    description: `${PostFeature.getCategoryName(
      category
    )} 개발에 관한 인사이트를 제공해요.`,
  }
}
