import React from 'react'
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  PreviewData,
} from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ParsedUrlQuery } from 'querystring'
import * as mdx from '@mdx-js/react'

import Post from '@/domain/post/type'
import {
  getFileTitle,
  getPost,
  getFileTitleOfPosts,
  getCategoryOfFile,
} from '@/domain/post'
import { NextPageWithLayout } from 'pages/_app'

import MDX_STYLE from '@/components/mdx'
import Layout from '@/components/layout/Layout'
import PostTemplate from '@/components/post/PostTemplate'

const Detail: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ data, mdxSource }) => {
  return (
    <PostTemplate data={data}>
      <MDXRemote
        {...mdxSource}
        components={
          { ...MDX_STYLE } as React.ComponentProps<
            typeof mdx.MDXProvider
          >['components']
        }
      />
    </PostTemplate>
  )
}

export default Detail

Detail.getLayout = function getLayout(
  page: React.ReactElement<InferGetStaticPropsType<typeof getStaticProps>>
) {
  return (
    <Layout
      title={page.props.data.title}
      description={page.props.data.description}
      resetFrameStyle
    >
      {page}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = getFileTitleOfPosts()

  const paths = files.map((title) => {
    return {
      params: {
        slug: getFileTitle(title),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

type Params = Pick<Post, 'slug'>

export const getStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
  const { slug } = context.params as Params

  const { data, content } = getPost({
    category: getCategoryOfFile(slug),
    fileTitle: slug,
  }) as Post

  const mdxSource = await serialize(content)

  return {
    props: {
      data,
      mdxSource,
    },
  }
}
