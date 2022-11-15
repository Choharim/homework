import React from 'react'
import styled, { css } from 'styled-components'

import { FrontMatter } from 'domain/post/type'
import { HighlightBlock } from '../mdx/style'

import TagLink from './TagLink'
import Thumbnail from '../Thumbnail'

type Props = {
  children: React.ReactNode
  data: FrontMatter
}

const PostTemplate = ({ data, children }: Props) => {
  const { title, createDate, tag, thumbnailSrc, description } = data

  return (
    <Article>
      <Header>
        <Title>{title}</Title>
        {!!tag && (
          <TagLink tag={tag} type="hash">
            {tag}
          </TagLink>
        )}
        <CreatedTime dateTime={createDate}>{createDate}</CreatedTime>
        {!!thumbnailSrc && (
          <Thumbnail
            src={require(`/public/thumbnail/${thumbnailSrc}`)}
            layout="fill"
            height={330}
            objectFit="contain"
            placeholder="blur"
          />
        )}
      </Header>
      <SummaryBox>
        <Summary>{description}</Summary>
      </SummaryBox>
      <MDXWrapper>{children}</MDXWrapper>
    </Article>
  )
}

export default PostTemplate

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  color: ${({ theme }) => theme.color.lightBlack};
`

const Header = styled.div`
  display: grid;
  gap: 10px;
`

const Title = styled.h1`
  ${({ theme }) => theme.font.header_1};
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 15px;

  ${({ theme }) => css`
    ${theme.media.tablet} {
      ${theme.font.header_2}
      margin-bottom: 10px;
    }
  `}
`

const CreatedTime = styled.time`
  ${({ theme }) => theme.font.body_2};
  color: ${({ theme }) => theme.color.darkGray};

  ${({ theme }) => css`
    ${theme.media.tablet} {
      ${theme.font.body_3}
    }
  `}
`

const SummaryBox = styled.div`
  position: relative;

  padding: 20px;
  margin: 20px 0;
  border-radius: 2px;

  background-color: ${({ theme }) => theme.color.lightPink};

  &::before {
    position: absolute;
    top: -20px;
    left: -18px;
    content: '💡';
    font-size: 38px;
  }
`

const Summary = styled.p`
  ${({ theme }) => theme.font.subtitle_3};
`
const MDXWrapper = styled.div`
  aside {
    ${HighlightBlock}

    p:last-child {
      margin-bottom: 0;
    }
  }
`
