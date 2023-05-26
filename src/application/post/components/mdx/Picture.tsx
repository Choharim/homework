import React, { useState } from 'react'

import Thumbnail, { ThumbnailProps } from '@/components/Thumbnail'

type Props = Pick<ThumbnailProps, 'src' | 'alt' | 'height'>

const Picture = ({ src, alt, height }: Props) => {
  const [error, setError] = useState(false)

  const handleImageError = () => {
    try {
      return require(`/public/post/${src}`)
    } catch (error) {
      setError(true)
    }
  }

  if (error) return <></>

  return (
    <Thumbnail
      src={handleImageError()}
      layout="fill"
      objectFit="contain"
      height={height ?? 300}
      alt={alt}
      placeholder="blur"
    />
  )
}

export default Picture
