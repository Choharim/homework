import notionAPI from '@/adapter/notion'
import NoResult from '@/components/StatusResult/NoResult'
import Layout from '@/components/layout/Layout'
import MetaHead from '@/components/seo/MetaHead'
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
import Image from 'next/image'
import Link from 'next/link'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import { NotionRenderer } from 'react-notion-x'

import { Code } from 'react-notion-x/build/third-party/code'

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
  const ids = await notionAPI.getPostIDs()

  const paths = ids.map((id) => {
    return {
      params: {
        id,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) {
  const id = context.params?.id as string
  const frontMatter = await notionAPI.getPostFrontMatter(id)
  const post = await notionAPI.getPost(id)

  return {
    props: {
      frontMatter,
      post,
    },
    revalidate: 10,
  }
}
