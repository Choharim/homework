import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { POST_DIRECTORY } from '@/domain/post/constant'
import Post from '@/domain/post/type'
import { limitTextLine } from '@/styles/mixin'

import CategoryChip from './CategoryChip'

const PostCardLink = (props: Pick<Post, 'data' | 'slug'>) => {
  const { data, slug } = props

  return (
    <Link
      href={`/${POST_DIRECTORY}/[slug]`}
      as={`/${POST_DIRECTORY}/${slug}`}
      passHref
    >
      <Wrapper>
        <PostCardLink.Content {...data} />
      </Wrapper>
    </Link>
  )
}

export default PostCardLink

PostCardLink.Content = function Component(content: Post['data']) {
  const { title, createDate, description, category } = content

  return (
    <Content>
      <Top>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
      </Top>
      <Bottom>
        <CategoryChip category={category} />
        <CreateDate dateTime={createDate}>{createDate}</CreateDate>
      </Bottom>
    </Content>
  )
}

const Title = styled.h3`
  ${({ theme }) => theme.font.header_2};
  color: ${({ theme }) => theme.color.grey800};

  ${limitTextLine(2)}

  transition: color 0.2s ease-in-out;
`

const Desc = styled.p`
  ${({ theme }) => theme.font.subtitle_3};
  color: ${({ theme }) => theme.color.grey700};

  ${limitTextLine(2)}

  transition: color 0.2s ease-in-out;
`

const Wrapper = styled.article`
  display: flex;
  width: 100%;
  cursor: pointer;

  :hover {
    ${Title} {
      color: ${({ theme }) => theme.color.primary300};
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Top = styled.div`
  display: grid;
  gap: 6px;
`

const Bottom = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 10px;
  width: fit-content;
  margin-top: 10px;
`

const CreateDate = styled.time`
  ${({ theme }) => theme.font.body_3};
  color: ${({ theme }) => theme.color.grey600};
`
