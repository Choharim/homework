import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'

import Post from 'entity/post/type'
import { getFileSlug, getPost, getPostsFilePaths } from 'entity/post/util'

const PostDetail = ({ content }: Pick<Post, 'data' | 'content'>) => {
  return (
    <article>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  )
}

export default PostDetail

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

  return {
    props: {
      data,
      content,
    },
  }
}
