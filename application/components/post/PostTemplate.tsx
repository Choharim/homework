import React from 'react'
import styled, { css } from 'styled-components'

import { FrontMatter } from 'domain/post/type'
import { copyToClipboard } from 'application/utils/copy'
import {
  COPY_FAILURE,
  COPY_SUCCESS,
  deviceSize,
} from 'application/constants/common'
import { Block } from '../mdx/style'

import TagLink from './TagLink'
import Thumbnail from '../Thumbnail'

type Props = {
  children: React.ReactNode
  data: FrontMatter
}

const PostTemplate = ({ data, children }: Props) => {
  const { title, createDate, tag, thumbnail, description } = data

  const shareLink = () => {
    copyToClipboard({
      text: window.location.href,
      onSuccess: () => alert(COPY_SUCCESS),
      onFailure: () => alert(COPY_FAILURE),
    })
  }

  return (
    <Article>
      <Header>
        <Wrapper>
          <TitleWrapper>
            <Title>{title}</Title>
            {!!tag && (
              <TagLink tag={tag} type="hash">
                {tag}
              </TagLink>
            )}
          </TitleWrapper>
          <ShareLink onClick={shareLink}>🔗</ShareLink>
        </Wrapper>
        <CreatedTime dateTime={createDate}>{createDate}</CreatedTime>
        {thumbnail && (
          <Thumbnail
            src={thumbnail}
            layout="responsive"
            width={`${deviceSize.pc}px`}
            height="300px"
            objectFit="contain"
            bgColor="white"
          />
        )}
      </Header>
      <SummaryBox>
        <PinIcon>📌</PinIcon>
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

  color: ${({ theme }) => theme.color.black};
`

const Header = styled.div`
  display: grid;
  gap: 10px;
  margin: 20px 0 30px;
`

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 10px;
`

const Title = styled.h1`
  ${({ theme }) => theme.font.header_1};

  ${({ theme }) => css`
    ${theme.media.tablet} {
      ${theme.font.header_2}
    }
  `}
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const CreatedTime = styled.time`
  ${({ theme }) => theme.font.body_1};
  color: ${({ theme }) => theme.color.darkGray};

  ${({ theme }) => css`
    ${theme.media.tablet} {
      ${theme.font.body_2}
    }
  `}
`

const ShareLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  font-size: 24px;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightGray};
  }
`

const SummaryBox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  padding: 25px 20px;
  border-radius: 2px;
  margin-bottom: 20px;

  background-color: ${({ theme }) => theme.color.ivory};
`

const PinIcon = styled.span`
  ${({ theme }) => theme.font.subtitle_2};
`

const Summary = styled.p`
  ${({ theme }) => theme.font.subtitle_4};
`
const MDXWrapper = styled.div`
  aside {
    ${Block('yellow')}
  }
`
