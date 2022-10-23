import React, { DOMAttributes } from 'react'
import styled, { css } from 'styled-components'

import Thumbnail from './Thumbnail'

const THUMBNAIL_HEIGHT = 130

interface Props extends DOMAttributes<HTMLDivElement> {
  thumbnailSrc?: string
}

const Card = React.forwardRef<HTMLDivElement, Props>(
  ({ thumbnailSrc, children, ...rest }, ref) => {
    return (
      <Wrapper ref={ref} {...rest}>
        {thumbnailSrc && (
          <CustomThumbnail
            src={require(`/public/thumbnail/${thumbnailSrc}`)}
            layout="fill"
            objectFit="contain"
            height={`${THUMBNAIL_HEIGHT}px`}
            placeholder="blur"
          />
        )}
        <Body $hasThumbnail={!!thumbnailSrc}>{children}</Body>
      </Wrapper>
    )
  }
)

Card.displayName = 'Card'

export default Card

const BORDER_RADIUS = '10px'

const Wrapper = styled.article`
  width: 100%;
  height: 340px;
  border-radius: ${BORDER_RADIUS};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-8px);
  }
`

const CustomThumbnail = styled(Thumbnail)`
  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};
`

const Body = styled.div<{ $hasThumbnail: boolean }>`
  display: flex;
  flex-direction: column;

  ${({ $hasThumbnail }) =>
    $hasThumbnail
      ? css`
          padding: 5px 24px 24px;

          height: calc(100% - ${THUMBNAIL_HEIGHT}px);
        `
      : css`
          padding: 24px;

          height: calc(100%);
        `};
`
