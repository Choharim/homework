import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'

import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { PostFrontMatter } from '@/adapter/notion/type'

import Frame from '@/components/layout/Frame'
import Flex from '@/components/flex'
import MEDIA from '@/styles/constants/media'
import { NAVBAR_HEIGHT } from '@/components/layout/Navbar'

import TableOfContents, { TOC_WIDTH_IN_PC } from './TableOfContents'
import PostHeader from './PostHeader'

type Props = {
  children: React.ReactNode
  frontMatter: PostFrontMatter
}

const WIDTH = 644

const PostTemplate = ({ frontMatter, children }: Props) => {
  return (
    <Article as="article" direction="column">
      <HeaderFrame>
        <PostHeader frontMatter={frontMatter} />
      </HeaderFrame>

      <BodyFrame>
        <Aside direction="top">
          <TableOfContents />
        </Aside>

        <BodyWrapper>
          <ContentsFrame>{children}</ContentsFrame>

          <Aside direction="right">
            <TableOfContents />
          </Aside>
        </BodyWrapper>
      </BodyFrame>
    </Article>
  )
}

export default PostTemplate

const Article = styled(Flex)`
  margin-bottom: 100px;
  color: ${({ theme }) => theme.color.grey900};
  word-break: keep-all;
`

const HeaderFrame = styled(Frame)`
  max-width: ${WIDTH}px;
  margin-top: ${NAVBAR_HEIGHT}px;
  margin-bottom: 30px;

  ${MEDIA.mobile} {
    margin-bottom: 20px;
  }
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

const Aside = styled.aside<{ direction: 'right' | 'top' }>`
  &:empty {
    display: none;
  }

  ${({ direction }) =>
    direction === 'right'
      ? css`
          ${MEDIA_SCREEN_FOR_TOC} {
            display: none;
          }

          ${TableOfContents.TOCBox} {
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

          ${TableOfContents.TOCBox} {
            position: unset;
            width: 100%;
            margin-bottom: 20px;
          }
        `}

  ${MEDIA.mobile} {
    display: none;
  }
`

const ContentsFrame = styled.div`
  max-width: ${WIDTH}px;
  width: -webkit-fill-available;
`
