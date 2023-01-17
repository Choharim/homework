import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { POST_DIRECTORY } from '@/domain/post/constant'
import Post from '@/domain/post/type'
import { limitTextLine } from '@/styles/mixin'

import TagLink from './TagLink'
import Thumbnail from '../Thumbnail'

const SIZE = 160

const PostCardLink = (props: Pick<Post, 'data' | 'slug'>) => {
  const { data, slug } = props
  const [error, setError] = useState(false)
  //TODO: custom hook 생성
  const handleSrcError = () => {
    try {
      return require(`/public/post/${data.thumbnailSrc}`)
    } catch (error) {
      setError(true)
    }
  }
  return (
    <Link
      href={`/${POST_DIRECTORY}/[slug]`}
      as={`/${POST_DIRECTORY}/${slug}`}
      passHref
    >
      <Wrapper>
        {!error && (
          <ThumbnailWrapper>
            <Thumbnail
              src={handleSrcError()}
              layout="fill"
              height={SIZE}
              objectFit="cover"
              placeholder="blur"
            />
          </ThumbnailWrapper>
        )}
        <PostCardLink.Content {...data} />
      </Wrapper>
    </Link>
  )
}

export default PostCardLink

PostCardLink.Content = function Component(content: Post['data']) {
  const { title, createDate, description, tag } = content

  return (
    <Content>
      <Top>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
      </Top>
      <Bottom>
        <TagLink tag={tag} />
        <CreateDate dateTime={createDate}>{createDate}</CreateDate>
      </Bottom>
    </Content>
  )
}

const Title = styled.h3`
  ${({ theme }) => theme.font.header_3};
  color: ${({ theme }) => theme.color.primary2};

  ${limitTextLine(2)}

  transition: color 0.2s ease-in-out;
`

const Desc = styled.p`
  ${({ theme }) => theme.font.subtitle_3};
  color: ${({ theme }) => theme.color.primary1};

  ${limitTextLine(2)}

  transition: color 0.2s ease-in-out;
`

const Wrapper = styled.article`
  display: flex;
  width: 100%;
  height: ${SIZE}px;
  cursor: pointer;

  :hover {
    ${Title} {
      color: ${({ theme }) => theme.color.primary4};
    }

    ${Desc} {
      color: ${({ theme }) => theme.color.primary3};
    }
  }
`

const ThumbnailWrapper = styled.div`
  overflow: hidden;
  border-radius: 10px;
  height: ${SIZE}px;
  min-width: ${SIZE}px;
  background-color: transparent;
  margin-right: 24px;

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`

const Top = styled.div`
  display: grid;
  gap: 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
`

const CreateDate = styled.time`
  ${({ theme }) => theme.font.body_3};
  color: ${({ theme }) => theme.color.primary3};
`
