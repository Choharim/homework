import notionAPI from '@/adapter/notion'
import postEntity from '@/entity/post'
import CardListFrame from '@/feature/post/components/CardListFrame'
import React, { Suspense } from 'react'
import * as style from 'src/feature/post/components/style/cardListFrame.css'
import PostList from './_components/PostList'
import Typo from '@/components/Typo'

async function Page() {
  const all = await notionAPI.getPostFrontMatters()
  const published = postEntity.getPublishedPostFrontMatters(all)
  const frontMatters = postEntity.getPostFrontMattersSortedByNewest(published)

  return (
    <CardListFrame className={style.topGap}>
      <Suspense>
        <PostList frontMatters={frontMatters} />
      </Suspense>
    </CardListFrame>
  )

  return (
    <>
      <Typo variety="header_1">header_1안녕하세요 반갑습니다.</Typo>
      <Typo variety="header_2">header_2안녕하세요 반갑습니다.</Typo>
      <Typo variety="header_3">header_3안녕하세요 반갑습니다.</Typo>
      <Typo variety="title_1">title_1안녕하세요 반갑습니다.</Typo>
      <Typo variety="title_2">title_2안녕하세요 반갑습니다.</Typo>
      <Typo variety="title_3">title_3안녕하세요 반갑습니다.</Typo>
      <Typo variety="subtitle_1">subtitle_1안녕하세요 반갑습니다.</Typo>
      <Typo variety="subtitle_2">subtitle_2안녕하세요 반갑습니다.</Typo>
      <Typo variety="subtitle_3">subtitle_3안녕하세요 반갑습니다.</Typo>
      <Typo variety="caption_1">caption_1안녕하세요 반갑습니다.</Typo>
      <Typo variety="caption_2">caption_2안녕하세요 반갑습니다.</Typo>

      <Typo variety="body_1">body_1안녕하세요 반갑습니다.</Typo>
      <Typo variety="body_2">body_2안녕하세요 반갑습니다.</Typo>
      <Typo variety="detail_1">detail_1안녕하세요 반갑습니다.</Typo>
      <Typo variety="detail_2">detail_2안녕하세요 반갑습니다.</Typo>

      <Typo variety="header_1" responsive={false}>
        header_1안녕하세요 반갑습니다.
      </Typo>
      <Typo variety="header_2" responsive={false}>
        header_2안녕하세요 반갑습니다.
      </Typo>
      <Typo variety="header_3" responsive={false}>
        header_3안녕하세요 반갑습니다.
      </Typo>
      <Typo variety="title_1" responsive={false}>
        title_1안녕하세요 반갑습니다.
      </Typo>
      <Typo variety="title_2" responsive={false}>
        title_2안녕하세요 반갑습니다.
      </Typo>
      <Typo variety="title_3" responsive={false}>
        title_3안녕하세요 반갑습니다.
      </Typo>
      <Typo variety="subtitle_1" responsive={false}>
        subtitle_1안녕하세요 반갑습니다.
      </Typo>
      <Typo variety="subtitle_2" responsive={false}>
        subtitle_2안녕하세요 반갑습니다.
      </Typo>
      <Typo variety="subtitle_3" responsive={false}>
        subtitle_3안녕하세요 반갑습니다.
      </Typo>
      <Typo variety="caption_1" responsive={false}>
        caption_1안녕하세요 반갑습니다.
      </Typo>
      <Typo variety="caption_2" responsive={false}>
        caption_2안녕하세요 반갑습니다.
      </Typo>

      <Typo variety="body_1" responsive={false}>
        body_1안녕하세요 반갑습니다.
      </Typo>
      <Typo variety="body_2" responsive={false}>
        body_2안녕하세요 반갑습니다.
      </Typo>
      <Typo variety="detail_1" responsive={false}>
        detail_1안녕하세요 반갑습니다.
      </Typo>
      <Typo variety="detail_2" responsive={false}>
        detail_2안녕하세요 반갑습니다.
      </Typo>
    </>
  )
}

export default Page
