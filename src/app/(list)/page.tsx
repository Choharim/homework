import notionAPI from '@/adapter/notion'
import postEntity from '@/entity/post'
import CardListFrame from '@/feature/post/components/CardListFrame'
import React from 'react'
import * as style from 'src/feature/post/components/style/cardListFrame.css'
import PostList from './_components/PostList'

async function Page() {
  const all = await notionAPI.getPostFrontMatters()
  const published = postEntity.getPublishedPostFrontMatters(all)
  const frontMatters = postEntity.getPostFrontMattersSortedByNewest(published)

  return (
    <>
      <CardListFrame className={style.topGap}>
        <PostList frontMatters={frontMatters} />
      </CardListFrame>
    </>
  )
}

export default Page
