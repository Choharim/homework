import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'

import { POST_DIRECTORY } from 'domain/post/constant'
import Post from 'domain/post/type'
import { limitTextLine } from 'application/styles/mixin'

import TagLink from './TagLink'
import Card from '../Card'

const PostCardLink = (props: Pick<Post, 'data' | 'slug'>) => {
  const { data, slug } = props

  return (
    <Link
      href={`/${POST_DIRECTORY}/[slug]`}
      as={`/${POST_DIRECTORY}/${slug}`}
      passHref
    >
      <PostCardLink.Card thumbnailSrc={data.thumbnailSrc}>
        <PostCardLink.Content {...data} />
      </PostCardLink.Card>
    </Link>
  )
}

export default PostCardLink

PostCardLink.Card = Card

PostCardLink.Content = function Component(content: Post['data']) {
  const { title, createDate, description, tag, thumbnailSrc } = content

  return (
    <Content hasThumbnail={!!thumbnailSrc}>
      <Top>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
      </Top>
      <Bottom>
        <TagLink tag={tag} type="hash">
          {tag}
        </TagLink>
        <CreateDate dateTime={createDate}>{createDate}</CreateDate>
      </Bottom>
    </Content>
  )
}

const Desc = styled.p`
  ${({ theme }) => theme.font.body_1};
  color: ${({ theme }) => theme.color.lightBlack};
`

const Content = styled.div<{ hasThumbnail: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  ${({ hasThumbnail, theme }) =>
    hasThumbnail
      ? css`
          padding: 12px 24px 24px;

          ${theme.media.mobile} {
            padding: 24px 24px 24px 12px;
          }
        `
      : css`
          padding: 24px;
        `};

  ${Desc} {
    ${({ hasThumbnail, theme }) =>
      hasThumbnail
        ? css`
            ${limitTextLine(3)}
            ${theme.media.tablet} {
              ${limitTextLine(2)}
            }
            ${theme.media.mobile} {
              ${limitTextLine(4)}
            }
          `
        : css`
            ${limitTextLine(6)}
            ${theme.media.tablet} {
              ${limitTextLine(5)}
            }
            ${theme.media.mobile} {
              ${limitTextLine(4)}
            }
          `}
  }
`

const Top = styled.div`
  display: grid;
  gap: 4px;
`

const Title = styled.h3`
  ${({ theme }) => theme.font.subtitle_1};
  color: ${({ theme }) => theme.color.black};

  ${limitTextLine(1)}
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
`

const CreateDate = styled.time`
  ${({ theme }) => theme.font.body_3};
  color: ${({ theme }) => theme.color.darkGray};
`
