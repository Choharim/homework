import notionAPI from '@/adapter/notion'
import PostEntity from '@/entity/post'
import CardListFrame from '@/feature/post/_components/CardListFrame'
import React, { Suspense } from 'react'
import * as style from '@/feature/post/_components/cardListFrame.css'
import PostList from './_components/PostList'
import { Metadata } from 'next'
import StructuredData from '@/feature/seo/_components/StructuredData'
import AppFeature from '@/feature/application'
import SEOFeature from '@/feature/seo'
import IntroCard from './_components/IntroCard'

async function Page() {
  const all = await notionAPI.getPublishedPostFrontMatters()
  const frontMatters = PostEntity.sortFrontMattersByNewest(all)

  return (
    <>
      <StructuredData
        data={SEOFeature.getCollectionPageContext({
          frontMatters,
          url: `${AppFeature.URL.domain}${AppFeature.getAppURI({
            name: 'main',
          })}`,
        })}
      />

      <CardListFrame className={style.topGap}>
        <IntroCard />

        <Suspense>
          <PostList frontMatters={frontMatters} />
        </Suspense>
      </CardListFrame>
    </>
  )
}

export default Page

export const metadata: Metadata = {
  title: '글 목록',
}
