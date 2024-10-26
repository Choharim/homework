import notionAPI from '@/adapter/notion'
import NoResult from '@/components/StatusResult/NoResult'
import Layout from '@/components/layout/Layout'
import MetaHead from '@/components/seo/MetaHead'
import postEntity from '@/entity/post'
import PostTemplate from '@/feature/post/components/PostTemplate'
import CustomStyleProvider from '@/feature/post/components/PostTemplate/CustomStyleProvider'

import Outlink from '@/feature/post/components/PostTemplate/Outlink'
import { NextPageWithLayout } from '@/shared/types/layout'
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  PreviewData,
} from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import { NotionRenderer } from 'react-notion-x'

const Code = dynamic(
  () => import('@/feature/post/components/PostTemplate/Code'),
  { ssr: false }
)

const PostDetail: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ post, frontMatter }) => {
  if (!post || !frontMatter) return <NoResult />

  return (
    <PostTemplate frontMatter={frontMatter}>
      <CustomStyleProvider>
        <NotionRenderer
          recordMap={post}
          showTableOfContents={false}
          components={{
            Code: Code,
            nextImage: Image,
            Link: Outlink,
            nextLink: Link,
            Collection: () => <></>,
            Equation: () => <></>,
          }}
        />
      </CustomStyleProvider>
    </PostTemplate>
  )
}

export default PostDetail

PostDetail.getLayout = function getLayout(
  page: React.ReactElement<InferGetStaticPropsType<typeof getStaticProps>>
) {
  const frontMatter = page.props.frontMatter

  return (
    <Layout resetFrameStyle={!!page.props.post}>
      <MetaHead
        title={frontMatter?.title}
        description={frontMatter?.description}
        ogType="article"
      />
      {page}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const all = await notionAPI.getPostFrontMatters()
  const ids = postEntity.getPostIDs(all)

  const paths = ids.map((id) => {
    return {
      params: {
        id,
      },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) {
  const id = context.params?.id as string

  const all = await notionAPI.getPostFrontMatters()
  const frontMatter = postEntity.getPostFrontMatter({ posts: all, id })

  if (!frontMatter) {
    return {
      props: {},
    }
  }

  const post = await notionAPI.getPost(id)

  return {
    props: {
      frontMatter,
      post,
    },
  }
}
