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
import styled from 'styled-components'

import Post from '@/domain/post/type'
import { getFileSlug, getPost, getPostsFilePaths } from '@/domain/post'
import { NextPageWithLayout } from 'pages/_app'

import MDX_STYLE from '@/components/mdx'
import Layout from '@/components/layout/Layout'
import PostTemplate from '@/components/post/PostTemplate'

//TODO: - https://nextjs.org/docs/advanced-features/using-mdx
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
  return (
    <CustomLayout title={page.props.data.title} resetFrameStyle>
      {page}
    </CustomLayout>
  )
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

  const mdxSource = await serialize(content)

  return {
    props: {
      data,
      mdxSource,
    },
  }
}

/**
 * @remarks
 * Layout을 확장한 StyledComponent에 추가한 스타일이 적용되기 위해
 * - Layout에 className Prop이 전달되어야 함.
 * - Footer에 스타일을 추가하기 위해서 Footer에도 className Prop이 전달되어야 함.
 */
const CustomLayout = styled(Layout)`
  ${Layout.Footer} {
    background-color: ${({ theme }) => theme.color.primary7};
  }
`
