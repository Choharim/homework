import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { FrontMatter } from '@/domain/post/type'
import { HighlightBlock } from '../mdx/style'
import { DEVICE_SIZE } from '@/constants/common'

import TagLink from './TagLink'
import Thumbnail from '../Thumbnail'
import Frame from '../layout/Frame'
import TOC, { TOC_WIDTH_IN_PC } from './TOC'
import { NAVBAR_HEIGHT } from '../layout/Navbar'

type Props = {
  children: React.ReactNode
  data: FrontMatter
}

const PostTemplate = ({ data, children }: Props) => {
  const { title, createDate, tag, thumbnailSrc, description } = data
  const [error, setError] = useState(false)

  const handleSrcError = () => {
    try {
      return require(`/public/post/${thumbnailSrc}`)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <Article>
      <Header>
        <HeaderFrame>
          <Title>{title}</Title>
          <Summary>{description}</Summary>

          {!!tag && <TagLink tag={tag} />}
          <CreatedTime dateTime={createDate}>{createDate}</CreatedTime>
        </HeaderFrame>
      </Header>

      <ContentsWrapper>
        <Aside $direction="right">
          <TOC />
        </Aside>
        <Frame>
          <Aside $direction="top">
            <TOC />
          </Aside>
          {!error && (
            <Thumbnail
              src={handleSrcError()}
              layout="fill"
              height={330}
              objectFit="contain"
              placeholder="blur"
            />
          )}
          <MDXWrapper>{children}</MDXWrapper>
        </Frame>
      </ContentsWrapper>
    </Article>
  )
}

export default PostTemplate

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  color: ${({ theme }) => theme.color.primary1};
`

const Header = styled.div`
  padding: 90px 0 40px;
  margin-bottom: 20px;
`

const HeaderFrame = styled(Frame)`
  display: grid;
  gap: 10px;
`
const MEDIA_SCREEN_FOR_TOC = `@media screen and (max-width: ${
  DEVICE_SIZE.tablet + TOC_WIDTH_IN_PC * 2
}px)`

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-left: ${TOC_WIDTH_IN_PC}px;

  ${MEDIA_SCREEN_FOR_TOC} {
    flex-direction: column;
    margin-left: unset;
  }
`

const Aside = styled.aside<{ $direction: 'right' | 'top' }>`
  position: relative;

  &:empty {
    display: none;
  }

  ${({ $direction }) =>
    $direction === 'right'
      ? css`
          ${MEDIA_SCREEN_FOR_TOC} {
            display: none;
          }

          ${TOC.TOCBox} {
            position: sticky;
            right: 0;
            top: ${NAVBAR_HEIGHT + 5}px;
            width: ${TOC_WIDTH_IN_PC}px;
          }
        `
      : css`
          display: none;
          ${MEDIA_SCREEN_FOR_TOC} {
            display: flex;
          }

          ${TOC.TOCBox} {
            position: unset;
            width: 100%;
            margin-bottom: 20px;
          }
        `}

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

const Title = styled.h1`
  ${({ theme }) => theme.font.header_1};
  color: ${({ theme }) => theme.color.primary2};

  ${({ theme }) => css`
    ${theme.media.tablet} {
      ${theme.font.header_2}
    }
  `}
`

const CreatedTime = styled.time`
  ${({ theme }) => theme.font.body_2};
  color: ${({ theme }) => theme.color.primary3};

  ${({ theme }) => css`
    ${theme.media.tablet} {
      ${theme.font.body_3}
    }
  `}
`

const Summary = styled.p`
  ${({ theme }) => theme.font.subtitle_2};
  margin: 5px 0 15px;
`

const MDXWrapper = styled.div`
  aside {
    ${HighlightBlock}

    p:last-child {
      margin-bottom: 0;
    }
  }
`
