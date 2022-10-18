import React from 'react'
import styled, { css } from 'styled-components'

import { FrontMatter } from 'domain/post/type'
import { copyToClipboard } from 'application/utils/copy'
import {
  COPY_FAILURE,
  COPY_SUCCESS,
  deviceSize,
} from 'application/constants/common'
import { HighlightBlock } from '../mdx/style'

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
            <Title onClick={shareLink}>{title}</Title>

            {!!tag && (
              <TagLink tag={tag} type="hash">
                {tag}
              </TagLink>
            )}
          </TitleWrapper>
        </Wrapper>
        <CreatedTime dateTime={createDate}>{createDate}</CreatedTime>
        {thumbnail && (
          <Thumbnail
            src={thumbnail}
            layout="responsive"
            width={`${deviceSize.pc}px`}
            height="300px"
            objectFit="contain"
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

  color: ${({ theme }) => theme.color.lightBlack};
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
  gap: 20px;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: unset;
    grid-template-rows: auto auto;
  }
`

const Title = styled.h1`
  position: relative;

  ${({ theme }) => theme.font.header_1};
  color: ${({ theme }) => theme.color.black};

  ${({ theme }) => css`
    ${theme.media.tablet} {
      ${theme.font.header_2}
    }
  `}

  &::before {
    position: absolute;
    content: '🔗';
    left: -15px;
    top: -25px;

    font-size: 20px;
  }

  cursor: pointer;
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

const SummaryBox = styled.div`
  position: relative;

  padding: 24px;
  margin: 20px 0;
  border-radius: 2px;

  background-color: ${({ theme }) => theme.color.lightPink};

  &::before {
    position: absolute;
    top: -23px;
    left: -23px;
    content: '💡';
    font-size: 48px;
  }
`

const Summary = styled.p`
  ${({ theme }) => theme.font.body_1};

  ${({ theme }) => css`
    ${theme.media.tablet} {
      ${theme.font.body_2}
    }
  `}
`
const MDXWrapper = styled.div`
  aside {
    ${HighlightBlock}

    p:last-child {
      margin-bottom: 0;
    }
  }
`
