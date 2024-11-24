import notionAPI from '@/adapter/notion'
import NoResult from '@/components/StatusResult/NoResult'
import postEntity from '@/entity/post'
import { AppPageProps } from '@/feature/application/types/navigation'
import PostTemplate from '@/feature/post/components/PostTemplate'
import CustomStyleProvider from '@/feature/post/components/PostTemplate/CustomStyleProvider'

import React from 'react'
import Renderer from './_components/Renderer'
import { Metadata } from 'next'
import StructuredData from '@/feature/seo/components/StructuredData'
import { getBlogPostingContext } from '@/feature/seo/constants/jsonLd'

async function PostDetail({ params: { id } }: AppPageProps<'blogDetails'>) {
  const frontMatter = await getFrontMatters(id)

  if (!frontMatter) return <NoResult />

  const post = await getPost(id)

  return (
    <>
      <StructuredData
        data={getBlogPostingContext({
          title: frontMatter.title,
          desc: frontMatter.description,
          category: frontMatter.category,
          datePublished: frontMatter.create_date,
          id,
        })}
      />
      <PostTemplate frontMatter={frontMatter}>
        <CustomStyleProvider>
          <Renderer post={post} />
        </CustomStyleProvider>
      </PostTemplate>
    </>
  )
}

export default PostDetail

export async function generateStaticParams() {
  const all = await notionAPI.getPublishedPostFrontMatters()
  const ids = postEntity.getPostIDs(all)

  const paths = ids.map((id) => {
    return {
      params: {
        id,
      },
    }
  })

  return paths
}

async function getFrontMatters(id: string) {
  const all = await notionAPI.getPublishedPostFrontMatters()
  const frontMatter = postEntity.getPostFrontMatter({ posts: all, id })

  return frontMatter
}

async function getPost(id: string) {
  const post = await notionAPI.getPost(id)

  return post
}

export async function generateMetadata({
  params,
}: AppPageProps<'blogDetails'>): Promise<Metadata> {
  const id = (await params).id
  const frontMatter = await getFrontMatters(id)

  if (!frontMatter) return {}

  return {
    title: frontMatter.title,
    description: frontMatter.description || '',
  }
}
