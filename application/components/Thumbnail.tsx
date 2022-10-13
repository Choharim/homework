import { HTMLAttributes } from 'react'
import Image, { ImageProps } from 'next/image'
import styled, { css } from 'styled-components'

interface ThumbnailProps
  extends Pick<ImageProps, 'src' | 'width' | 'height' | 'objectFit'>,
    HTMLAttributes<Pick<HTMLDivElement, 'className'>> {
  layout: 'fill' | 'responsive'
  bgColor?: 'black' | 'white'
}

const Thumbnail = ({
  src,
  layout,
  width,
  height,
  objectFit,
  bgColor = 'black',
  ...rest
}: ThumbnailProps) => {
  return (
    <Container
      layout={layout}
      width={width}
      height={height}
      bgColor={bgColor}
      {...rest}
    >
      <Image
        src={src}
        layout={layout}
        objectFit={objectFit}
        width={layout === 'responsive' ? width : undefined}
        height={layout === 'responsive' ? height : undefined}
        alt={`${src}_thumbnail`}
      />
    </Container>
  )
}

export default Thumbnail

const Container = styled.div<
  Pick<ThumbnailProps, 'layout' | 'width' | 'height' | 'bgColor'>
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

  background-color: ${({ theme, bgColor }) => {
    switch (bgColor) {
      case 'black':
        return theme.color.black
      case 'white':
        return theme.color.white

      default:
        return theme.color.black
    }
  }}
`
