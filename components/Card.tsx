import React, { DOMAttributes } from 'react'
import styled, { css } from 'styled-components'

import Thumbnail from './Thumbnail'

const THUMBNAIL_HEIGHT = 160

interface Props extends DOMAttributes<HTMLDivElement> {
  thumbnail?: string
}

const Card = React.forwardRef<HTMLDivElement, Props>(
  ({ thumbnail, children, ...rest }, ref) => {
    return (
      <Wrapper ref={ref} {...rest}>
        {thumbnail && (
          <CustomThumbnail
            src={thumbnail}
            layout="fill"
            objectFit="contain"
            height={`${THUMBNAIL_HEIGHT}px`}
            width="300px"
          />
        )}
        <Body hasThumbnail={!!thumbnail}>{children}</Body>
      </Wrapper>
    )
  }
)

export default Card

Card.displayName = 'Card'

const BORDER_RADIUS = '10px'

const Wrapper = styled.article`
  width: 300px;
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

const Body = styled.div<{ hasThumbnail: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 12px 18px;

  ${({ hasThumbnail }) =>
    hasThumbnail
      ? css`
          height: calc(100% - ${THUMBNAIL_HEIGHT}px);
        `
      : css`
          height: calc(100%);
        `};
`
