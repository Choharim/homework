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
import H1 from 'components/mdx/H1'
import CodeBlock from 'components/mdx/CodeBlock'
import Block from 'components/mdx/Block'
import H2 from 'components/mdx/H2'
import Li from 'components/mdx/Li'

const components = {
  h1: H1,
  h2: H2,
  li: Li,
  pre: CodeBlock,
  Block,
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
