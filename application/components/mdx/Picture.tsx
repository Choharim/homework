import React from 'react'
import styled from 'styled-components'

import { deviceSize } from 'application/constants/common'

import Thumbnail, { ThumbnailProps } from '../Thumbnail'

type Props = Pick<ThumbnailProps, 'src' | 'alt' | 'height'>

const Picture = ({ src, alt, height }: Props) => {
  if (!src) return <></>

  return (
    <Wrapper>
      <Thumbnail
        src={require(`/public/thumbnail/${src}`)}
        layout="responsive"
        width={deviceSize.tablet}
        objectFit="contain"
        height={height ?? 220}
        alt={alt}
        placeholder="blur"
      />
    </Wrapper>
  )
}

export default Picture

const Wrapper = styled.div`
  margin: 10px 0;
`
