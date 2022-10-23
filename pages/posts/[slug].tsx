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

import { NextPageWithLayout } from 'pages/_app'
import Post from 'domain/post/type'
import { getFileSlug, getPost, getPostsFilePaths } from 'domain/post/util'

import MDX_STYLE from 'application/components/mdx'
import Layout from 'application/components/layout/Layout'
import PostTemplate from 'application/components/post/PostTemplate'

//@todo - https://nextjs.org/docs/advanced-features/using-mdx
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
  page: React.ReactElement<Pick<Post, 'data' | 'content'>>
) {
  return <Layout title={page.props.data.title}>{page}</Layout>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const filePaths = getPostsFilePaths()

  const paths = filePaths.map((filePath) => {
    return {
      params: {
        slug: getFileSlug(filePath),
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

  const { data, content } = getPost(slug)

  const mdxSource = await serialize(content, {
    scope: data,
  })

  return {
    props: {
      data,
      mdxSource,
    },
  }
}
