import { HTMLAttributes } from 'react'
import Image, { ImageProps } from 'next/image'
import styled, { css } from 'styled-components'

export interface ThumbnailProps
  extends Pick<ImageProps, 'src' | 'width' | 'height' | 'objectFit' | 'alt'>,
    HTMLAttributes<Pick<HTMLDivElement, 'className'>> {
  layout: 'fill' | 'responsive'
}

const Thumbnail = ({
  src,
  layout,
  width,
  height,
  objectFit,
  alt,
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
        alt={alt || `${src}_thumbnail`}
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
            width: ${width};
          `};

          ${height &&
          css`
            height: ${height};
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
