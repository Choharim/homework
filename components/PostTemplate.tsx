import React from 'react'
import styled, { css } from 'styled-components'

import { copyToClipboard } from 'utils/copy'
import { COPY_FAILURE, COPY_SUCCESS, deviceSize } from 'constants/common'
import { FrontMatter } from 'entity/post/type'

import ShareLink from './ShareLink'
import TagLink from './TagLink'
import Thumbnail from './Thumbnail'

type Props = {
  children: React.ReactNode
  data: FrontMatter
}

const PostTemplate = ({ data, children }: Props) => {
  const { title, createDate, tag, thumbnail } = data

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
          <ShareLink onClick={shareLink} />
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

      {children}
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
