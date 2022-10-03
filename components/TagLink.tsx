import React, { DOMAttributes } from 'react'
import Link from 'next/link'

import { Tag } from 'entity/post/type'
import { POST_DIRECTORY, TAG_COLOR_BY_TYPE } from 'entity/post/constant'

import Chip from './Chip'

interface Props extends DOMAttributes<HTMLDivElement> {
  tag: Tag
}

const TagLink = ({ tag, ...rest }: Props) => {
  return (
    <Link href={`/${POST_DIRECTORY}?tag=${tag}`}>
      <a>
        <TagLink.Chip bgColor={TAG_COLOR_BY_TYPE[tag]} {...rest}>
          {tag}
        </TagLink.Chip>
      </a>
    </Link>
  )
}

export default TagLink

TagLink.Chip = Chip
