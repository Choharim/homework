import { HTMLAttributes } from 'react'
import Image, { ImageProps } from 'next/image'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export interface ThumbnailProps
  extends Pick<ImageProps, 'width' | 'objectFit' | 'placeholder' | 'alt'>,
    Pick<HTMLAttributes<HTMLDivElement>, 'className'> {
  layout: 'fill' | 'responsive'
  height?: number
  variety?: 'round'
  src: string
}

const Thumbnail = ({
  src,
  alt,
  layout,
  objectFit,
  width,
  height,
  variety,
  placeholder,
  ...rest
}: ThumbnailProps) => {
  return (
    <Container
      layout={layout}
      width={width}
      height={height}
      variety={variety}
      {...rest}
    >
      <Image
        src={src}
        layout={layout}
        objectFit={objectFit}
        width={layout === 'responsive' ? width : undefined}
        height={layout === 'responsive' ? height : undefined}
        alt={alt || 'thumbnail'}
        placeholder={placeholder}
      />
    </Container>
  )
}

export default Thumbnail

const Container = styled.div<
  Pick<ThumbnailProps, 'layout' | 'width' | 'height' | 'variety'>
>`
  ${({ layout, width, height }) => {
    switch (layout) {
      case 'fill':
        return css`
          position: relative;

          ${width &&
          css`
            width: ${width}px;
          `};

          ${height &&
          css`
            height: ${height}px;
          `}
        `

      case 'responsive':
      default:
        return css`
          display: block;
        `
    }
  }}

  ${({ variety }) =>
    variety === 'round' &&
    css`
      img {
        border-radius: 25px;
      }
    `}
`
