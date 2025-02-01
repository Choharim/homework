import notionAPI from '@/adapter/notion'
import PostEntity from '@/entity/post'
import AppFeature from '@/feature/application'
import CategoryFilter from '@/feature/post/_components/CategoryFilter'
import SEOFeature from '@/feature/seo'
import StructuredData from '@/feature/seo/_components/StructuredData'
import React, { Suspense } from 'react'
import CardListFrame from './[category]/_components/CardListFrame'
import PostList from './[category]/_components/PostList'

import * as style from './[category]/_components/cardListFrame.css'

async function CategoryPage() {
  const categoryList = await notionAPI.getCategories()
  const all = await notionAPI.getPublishedPostFrontMatters()
  const frontMatters = PostEntity.sortFrontMattersByNewest(all)

  return (
    <>
      <StructuredData
        data={SEOFeature.getCollectionPageContext({
          frontMatters,
          url: `${AppFeature.URL.domain}${AppFeature.getAppURI({
            name: 'categoryMain',
          })}`,
        })}
      />

      <CategoryFilter>
        {categoryList.map((c) => (
          <CategoryFilter.Chip key={c} category={c} isSeleted={false} />
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
