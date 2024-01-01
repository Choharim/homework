import notionAPI from '@/adapter/notion'
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
  if (!frontMatter)
    return (
      <div>
        <h3>No data found.</h3>
      </div>
    )

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
  return (
    <Layout resetFrameStyle>
      <MetaHead
        title={page.props.frontMatter?.title}
        description={page.props.frontMatter?.description}
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
    revalidate: 60,
  }
}
