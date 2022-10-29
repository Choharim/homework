import React, { DOMAttributes } from 'react'
import styled, { css } from 'styled-components'

import Thumbnail from './Thumbnail'

interface Props extends DOMAttributes<HTMLDivElement> {
  src?: string
}

const Card = React.forwardRef<HTMLDivElement, Props>(
  ({ src, children, ...rest }, ref) => {
    return (
      <Wrapper ref={ref} {...rest}>
        {!!src && (
          <CustomThumbnail
            src={src}
            layout="fill"
            objectFit="contain"
            placeholder="blur"
          />
        )}
        <Body $hasThumbnail={!!src}>{children}</Body>
      </Wrapper>
    )
  }
)

Card.displayName = 'Card'

export default Card

const THUMBNAIL_HEIGHT = 130
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

  ${({ theme }) => theme.media.tablet} {
    height: 300px;
  }

  ${({ theme }) => theme.media.mobile} {
    height: 250px;
  }
`

const CustomThumbnail = styled(Thumbnail)`
  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};
  height: ${THUMBNAIL_HEIGHT}px;

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

const Body = styled.div<{ $hasThumbnail: boolean }>`
  height: 100%;
  width: 100%;

  ${({ $hasThumbnail, theme }) =>
    $hasThumbnail &&
    css`
      height: calc(100% - ${THUMBNAIL_HEIGHT}px);

      ${theme.media.mobile} {
        height: 100%;
      }
    `};
`
