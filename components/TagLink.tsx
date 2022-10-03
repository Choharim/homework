import React, { DOMAttributes } from 'react'
import Link from 'next/link'

import { Tag } from 'entity/post/type'
import { POST_DIRECTORY } from 'entity/post/constant'

import Chip from './Chip'
import styled from 'styled-components'
import { color } from 'styles/theme'

const TAG_COLOR_BY_TYPE: {
  [key in Tag]: { [key in 'bg' | 'hover']: typeof color[keyof typeof color] }
} = {
  알고리즘: { bg: color.red, hover: color.darkRed },
  자료구조: { bg: color.yellow, hover: color.darkYellow },
}

interface Props extends DOMAttributes<HTMLDivElement> {
  tag: Tag
}

const TagLink = ({ tag, ...rest }: Props) => {
  return (
    <Link href={`/${POST_DIRECTORY}?tag=${tag}`}>
      <a>
        <TagLink.Chip
          bgColor={TAG_COLOR_BY_TYPE[tag].bg}
          hoverColor={TAG_COLOR_BY_TYPE[tag].hover}
          {...rest}
        >
          {tag}
        </TagLink.Chip>
      </a>
    </Link>
  )
}

export default TagLink

TagLink.Chip = styled(Chip)<{ bgColor: string; hoverColor: string }>`
  background-color: ${({ bgColor }) => bgColor};

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
    color: ${({ theme }) => theme.color.black};
  }
`
