import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import Post from 'entity/post/type'
import { getFileSlug, getPost, getPostsFilePaths } from 'entity/post/util'
import { NextPageWithLayout } from 'pages/_app'
import { Layout, Thumbnail } from 'components'
import CodeSnippetHeader from 'components/CodeSnippetHeader'
import CodeBlock from 'components/CodeBlock'

interface Props extends Pick<Post, 'data'> {
  source: MDXRemoteSerializeResult
}

const PostDetail: NextPageWithLayout<Props> = ({ data, source }) => {
  return (
    <article>
      {data.thumbnail && <Thumbnail src={data.thumbnail} />}
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <MDXRemote
        {...source}
        components={{
          CodeBlock,
          CodeSnippetHeader,
        }}
      />
    </article>
  )
}

export default PostDetail

PostDetail.getLayout = function getLayout(
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

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params

  const { data, content } = getPost(slug)

  const mdxSource = await serialize(content, {
    scope: data,
  })

  return {
    props: {
      data,
      source: mdxSource,
    },
  }
}
