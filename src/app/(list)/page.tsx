import notionAPI from '@/adapter/notion'
import postEntity from '@/entity/post'
import CardListFrame from '@/feature/post/components/CardListFrame'
import React, { Suspense } from 'react'
import * as style from 'src/feature/post/components/style/cardListFrame.css'
import PostList from './_components/PostList'
import { Metadata } from 'next'
import StructuredData from '@/feature/seo/components/StructuredData'
import { getCollectionPageContext } from '@/feature/seo/constants/jsonLd'
import AppFeature from '@/feature/application'

async function Page() {
  const all = await notionAPI.getPublishedPostFrontMatters()
  const frontMatters = postEntity.getPostFrontMattersSortedByNewest(all)

  return (
    <>
      <StructuredData
        data={getCollectionPageContext({
          frontMatters,
          url: AppFeature.getAppURI({
            name: 'main',
          }),
        })}
      />

      <CardListFrame className={style.topGap}>
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
