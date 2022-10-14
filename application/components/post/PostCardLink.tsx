import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { POST_DIRECTORY } from 'domain/post/constant'
import Post from 'domain/post/type'
import { limitTextLine } from 'application/styles/mixin'

import TagLink from './TagLink'
import Card from '../Card'

const PostCardLink = (props: Pick<Post, 'data' | 'slug'>) => {
  const {
    data: { thumbnail, ...content },
    slug,
  } = props

  return (
    <Link
      href={`/${POST_DIRECTORY}/[slug]`}
      as={`/${POST_DIRECTORY}/${slug}`}
      passHref
    >
      <PostCardLink.Card thumbnail={thumbnail}>
        <PostCardLink.Content {...content} />
      </PostCardLink.Card>
    </Link>
  )
}

export default PostCardLink

PostCardLink.Card = Card

PostCardLink.Content = function Component(
  content: Omit<Post['data'], 'thumbnail'>
) {
  const { title, createDate, description, tag } = content

  return (
    <Content>
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const Top = styled.div`
  display: grid;
  gap: 4px;
  margin-top: 4px;
`

const Title = styled.h3`
  ${({ theme }) => theme.font.subtitle_1};
  color: ${({ theme }) => theme.color.black};

  ${limitTextLine(1)}
`

const Desc = styled.p`
  ${({ theme }) => theme.font.body_2};
  color: ${({ theme }) => theme.color.lightBlack};

  ${limitTextLine(3)}
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
