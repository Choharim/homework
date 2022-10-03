import Image, { ImageProps } from 'next/image'
import styled, { css } from 'styled-components'

interface ThumbnailProps
  extends Pick<ImageProps, 'src' | 'width' | 'height' | 'objectFit'> {
  layout: 'fill' | 'responsive'
}

const Thumbnail = ({
  src,
  layout,
  width,
  height,
  objectFit,
}: ThumbnailProps) => {
  return (
    <Container layout={layout} width={width} height={height}>
      <Image
        src={src}
        alt={`${src}_thumbnail`}
        layout={layout}
        objectFit={objectFit}
        width={width}
        height={height}
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

  background-color: ${({ theme }) => theme.color.black};
`
