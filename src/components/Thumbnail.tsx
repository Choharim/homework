import { HTMLAttributes } from 'react'
import Image, { ImageProps } from 'next/image'
import styled, { css } from 'styled-components'

export interface ThumbnailProps
  extends Pick<
      ImageProps,
      'src' | 'width' | 'objectFit' | 'placeholder' | 'alt'
    >,
    Pick<HTMLAttributes<HTMLDivElement>, 'className'> {
  layout: 'fill' | 'responsive'
  height?: number
}

const Thumbnail = ({
  src,
  alt,
  layout,
  objectFit,
  width,
  height,
  placeholder,
  ...rest
}: ThumbnailProps) => {
  return (
    <Container layout={layout} width={width} height={height} {...rest}>
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
  Pick<ThumbnailProps, 'layout' | 'width' | 'height'>
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
  background-color: ${({ theme }) => theme.color.white};
`
