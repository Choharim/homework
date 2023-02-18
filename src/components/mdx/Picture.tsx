import React, { useState } from 'react'
import styled from 'styled-components'

import Thumbnail, { ThumbnailProps } from '../Thumbnail'

type Props = Pick<ThumbnailProps, 'src' | 'alt' | 'height'>

const Picture = ({ src, alt, height }: Props) => {
  const [error, setError] = useState(false)

  const handleSrcError = () => {
    try {
      return require(`/public/post/${src}`)
    } catch (error) {
      setError(true)
    }
  }

  if (error) return <></>

  return (
    <Wrapper>
      <Thumbnail
        src={handleSrcError()}
        layout="fill"
        objectFit="contain"
        height={height ?? 300}
        alt={alt}
        placeholder="blur"
      />
    </Wrapper>
  )
}

export default Picture

const Wrapper = styled.div`
  margin: 20px 0;
`
