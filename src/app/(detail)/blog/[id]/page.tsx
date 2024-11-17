import notionAPI from '@/adapter/notion'
import NoResult from '@/components/StatusResult/NoResult'
import postEntity from '@/entity/post'
import { AppPageProps } from '@/feature/app/types/navigation'
import PostTemplate from '@/feature/post/components/PostTemplate'
import CustomStyleProvider from '@/feature/post/components/PostTemplate/CustomStyleProvider'

import { Metadata } from 'next'

import React from 'react'
import Renderer from './_components/Renderer'
import { headers } from 'next/headers'
import { BLOG } from '@/feature/app/constants/owner'
import { getURLRemovedQuery } from '@/shared/utils/url'

async function PostDetail({ params: { id } }: AppPageProps<'blogDetails'>) {
  const frontMatter = await getFrontMatters(id)

  if (!frontMatter) return <NoResult />

  const post = await getPost(id)

  return (
    <PostTemplate frontMatter={frontMatter}>
      <CustomStyleProvider>
        <Renderer post={post} />
      </CustomStyleProvider>
    </PostTemplate>
  )
}

export default PostDetail

export async function generateMetadata({
  params,
}: AppPageProps<'blogDetails'>): Promise<Metadata> {
  const headersList = headers()
  const pathname = headersList.get('x-pathname') ?? ''

  const id = (await params).id

  const frontMatter = await getFrontMatters(id)

  return {
    title: frontMatter?.title,
    description: frontMatter?.description,
    openGraph: {
      type: 'article',
      title: frontMatter?.title,
      description: frontMatter?.description,
      url: `${BLOG.domain}${getURLRemovedQuery(pathname) ?? ''}`,
    },
  }
}

export async function generateStaticParams() {
  const all = await notionAPI.getPostFrontMatters()
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
  const all = await notionAPI.getPostFrontMatters()
  const frontMatter = postEntity.getPostFrontMatter({ posts: all, id })

  return frontMatter
}

async function getPost(id: string) {
  const post = await notionAPI.getPost(id)

  return post
}
