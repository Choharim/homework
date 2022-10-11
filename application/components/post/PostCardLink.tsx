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
    data: { tag, thumbnail, ...content },
    slug,
  } = props

  return (
    <Link
      href={`/${POST_DIRECTORY}/[slug]`}
      as={`/${POST_DIRECTORY}/${slug}`}
      passHref
    >
      <PostCardLink.Card thumbnail={thumbnail}>
        {!!tag && (
          <TagLink tag={tag} type="hash">
            {tag}
          </TagLink>
        )}
        <PostCardLink.Content {...content} />
      </PostCardLink.Card>
    </Link>
  )
}

export default PostCardLink

PostCardLink.Card = Card

PostCardLink.Content = function Component(
  content: Pick<Post['data'], 'title' | 'createDate' | 'description'>
) {
  const { title, createDate, description } = content

  return (
    <Content>
      <Header>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
      </Header>
      <CreateDate dateTime={createDate}>{createDate}</CreateDate>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const Header = styled.div`
  display: grid;
  gap: 4px;
  margin-top: 12px;
`

const Desc = styled.p`
  margin: 10px 0;
  ${limitTextLine(3)}
`

const CreateDate = styled.time`
  display: flex;
  justify-content: end;
  ${({ theme }) => theme.font.body_3};
  color: ${({ theme }) => theme.color.darkGray};
`

const Title = styled.h3`
  ${limitTextLine(1)}
`
