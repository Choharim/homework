import notionAPI from '@/adapter/notion'
import postEntity from '@/entity/post'
import CardListFrame from '@/feature/post/components/CardListFrame'
import React, { Suspense } from 'react'
import * as style from 'src/feature/post/components/style/cardListFrame.css'
import PostList from './_components/PostList'
import { Metadata } from 'next'

async function Page() {
  const all = await notionAPI.getPublishedPostFrontMatters()
  const frontMatters = postEntity.getPostFrontMattersSortedByNewest(all)

  return (
    <CardListFrame className={style.topGap}>
      <Suspense>
        <PostList frontMatters={frontMatters} />
      </Suspense>
    </CardListFrame>
  )
}

export default Page

export const metadata: Metadata = {
  title: '글 목록',
}
