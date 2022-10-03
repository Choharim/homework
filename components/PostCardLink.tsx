import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { POST_DIRECTORY } from 'entity/post/constant'
import Post from 'entity/post/type'
import { limitTextLine } from 'styles/mixin'

import TagLink from './TagLink'
import Card from './Card'

const PostCardLink = (props: Pick<Post, 'data' | 'slug'>) => {
  const {
    data: { tags, thumbnail, ...content },
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

        {!!tags?.length && (
          <TagContainer>
            {tags.map((tag, i) => (
              <TagLink key={`${tag}_${i}`} tag={tag}>
                # {tag}
              </TagLink>
            ))}
          </TagContainer>
        )}
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
        <CreateDate dateTime={createDate}>{createDate}</CreateDate>
        <Title>{title}</Title>
      </Header>
      <Desc>{description}</Desc>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Header = styled.div`
  display: grid;
  gap: 4px;
`

const Desc = styled.p`
  margin: 10px 0;
  ${limitTextLine(3)}
`

const CreateDate = styled.time`
  ${({ theme }) => theme.font.body_3};
  color: ${({ theme }) => theme.color.gray};
`

const Title = styled.h3`
  ${limitTextLine(1)}
`
const TagContainer = styled.div`
  display: flex;
  align-self: flex-end;
`
