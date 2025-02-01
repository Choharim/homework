import notionAPI from '@/adapter/notion'
import PostEntity from '@/entity/post'
import React, { Suspense } from 'react'
import { Metadata } from 'next'
import StructuredData from '@/feature/seo/_components/StructuredData'
import AppFeature from '@/feature/application'
import SEOFeature from '@/feature/seo'
import IntroCard from './_components/IntroCard'
import Section from './_components/Section'
import PostList from './_components/PostList'
import CardListFrame from './_components/CardListFrame'

async function Page() {
  const all = await notionAPI.getRecommandPostFrontMatters()
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

      <IntroCard />

      <Section
        title="추천 글 ✨"
        href={AppFeature.getAppURI({ name: 'categoryMain' })}
      >
        <CardListFrame>
          <Suspense>
            <PostList frontMatters={frontMatters} />
          </Suspense>
        </CardListFrame>
      </Section>
    </>
  )
}

export default Page

export const metadata: Metadata = {
  title: '글 목록',
}
