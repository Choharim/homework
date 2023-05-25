import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import CategoryChip from './CategoryChip'
import TOC, { TOC_WIDTH_IN_PC } from './TOC'
import Frame from '@/components/layout/Frame'
import Thumbnail from '@/components/Thumbnail'

import { HighlightBlock } from './mdx/style'
import { FrontMatter } from '@/domain/post/type'
import MEDIA from '@/styles/constants/media'
import FONT from '@/styles/constants/font'
import { NAVBAR_HEIGHT } from '@/components/layout/Navbar'

type Props = {
  children: React.ReactNode
  data: FrontMatter
}

const WIDTH = 644

const PostTemplate = ({ data, children }: Props) => {
  const { title, createDate, category, thumbnailSrc, description } = data
  const [showThumbnail, setShowThumbnail] = useState(!!thumbnailSrc)

  const handleSrcError = () => {
    try {
      return require(`/public/post/${thumbnailSrc}`)
    } catch (error) {
      setShowThumbnail(false)
      console.error(`/public/post/${thumbnailSrc} 이미지 로드에 실패했습니다.`)
    }
  }

  return (
    <Article>
      <HeaderFrame>
        <Title>{title}</Title>
        <SubInfo>
          {!!category && <CategoryChip category={category} />}
          <CreateDate dateTime={createDate}>{createDate}</CreateDate>
        </SubInfo>
        <Summary>{description}</Summary>

        {showThumbnail && (
          <CustomThumbnail
            src={handleSrcError()}
            layout="responsive"
            objectFit="contain"
            placeholder="blur"
            round
          />
        )}
      </HeaderFrame>

      <BodyFrame>
        {!showThumbnail && (
          <Aside $direction="top">
            <TOC />
          </Aside>
        )}
        <BodyWrapper>
          <MDXWrapper>{children}</MDXWrapper>
          <Aside $direction="right">
            <TOC />
          </Aside>
        </BodyWrapper>
      </BodyFrame>
    </Article>
  )
}

export default PostTemplate

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  color: ${({ theme }) => theme.color.grey800};
  word-break: keep-all;
`

const HeaderFrame = styled(Frame)`
  display: flex;
  flex-direction: column;
  max-width: ${WIDTH}px;
  margin-bottom: 40px;
  margin-top: ${NAVBAR_HEIGHT}px;

  ${MEDIA.mobile} {
    margin-bottom: 20px;
  }
`

const CustomThumbnail = styled(Thumbnail)`
  margin-top: 15px; ;
`

const Title = styled.h1`
  ${FONT.header_1};
  color: ${({ theme }) => theme.color.grey800};
  margin: 30px 0 20px;
`

const SubInfo = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 10px;
  width: fit-content;
`

const CreateDate = styled.time`
  ${FONT.title_4};
  color: ${({ theme }) => theme.color.grey600};
`

const Summary = styled.p`
  ${FONT.body_1};
  margin-top: 10px;
`

const MEDIA_SCREEN_FOR_TOC = `@media screen and (max-width: ${
  WIDTH + TOC_WIDTH_IN_PC * 2
}px)`

const BodyFrame = styled(Frame)`
  max-width: calc(${WIDTH}px + ${TOC_WIDTH_IN_PC * 2}px);

  ${MEDIA_SCREEN_FOR_TOC} {
    max-width: ${WIDTH}px;
  }
`

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
  margin-left: ${TOC_WIDTH_IN_PC}px;

  ${MEDIA_SCREEN_FOR_TOC} {
    margin-left: 0;
  }
`

const Aside = styled.aside<{ $direction: 'right' | 'top' }>`
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
            top: ${NAVBAR_HEIGHT}px;
            width: ${TOC_WIDTH_IN_PC}px;
            padding-left: 40px;
            margin-top: 40px;
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
          }
        `}

  ${MEDIA.mobile} {
    display: none;
  }
`

const MDXWrapper = styled.div`
  max-width: ${WIDTH}px;
  width: -webkit-fill-available;

  aside {
    ${HighlightBlock}

    p:last-child {
      margin-bottom: 0;
    }
  }
`
