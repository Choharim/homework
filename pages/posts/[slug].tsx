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

import { NextPageWithLayout } from 'pages/_app'
import Post from 'entity/post/type'
import { getFileSlug, getPost, getPostsFilePaths } from 'entity/post/util'

import { Layout, PostTemplate } from 'components'
import h1 from 'components/mdx/h1'
import CodeBlock from 'components/mdx/CodeBlock'
import h2 from 'components/mdx/h2'
import li from 'components/mdx/li'
import p from 'components/mdx/p'
import ul from 'components/mdx/ul'
import blockquote from 'components/mdx/blockquote'
import ol from 'components/mdx/ol'

const components = {
  h1,
  h2,
  li,
  pre: CodeBlock,
  ul,
  ol,
  p,
  blockquote,
}

const Detail: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ data, mdxSource }) => {
  return (
    <PostTemplate data={data}>
      <MDXRemote {...mdxSource} components={components} />
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
