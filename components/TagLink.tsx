import React, { DOMAttributes, useMemo } from 'react'
import Link from 'next/link'

import { Tag } from 'entity/post/type'
import { POST_DIRECTORY } from 'entity/post/constant'

import Chip from './Chip'
import styled from 'styled-components'
import { TAG_COLOR_BY_TYPE } from 'constants/post/tag'
import { useRouter } from 'next/router'

interface Props extends DOMAttributes<HTMLDivElement> {
  tag: Tag
  type?: 'hash' | 'none'
}

const TagLink = ({ tag, type = 'none', ...rest }: Props) => {
  const { query } = useRouter()

  const updatedQueryPath = useMemo(() => {
    const tags = (query.tag as string)?.split(',') || []

    if (tags.includes(tag)) {
      return tags.filter((tagInQuery) => tagInQuery !== tag).join(',')
    } else {
      return [...tags, tag].join(',')
    }
  }, [query.tag, tag])

  return (
    <Link
      href={{
        pathname: `/${POST_DIRECTORY}`,
        query: !!updatedQueryPath ? { tag: updatedQueryPath } : {},
      }}
      passHref
    >
      <A>
        <TagLink.Chip
          bgColor={TAG_COLOR_BY_TYPE[tag].base}
          hoverColor={TAG_COLOR_BY_TYPE[tag].active}
          {...rest}
        >
          {type === 'hash' && '# '}
          {tag}
        </TagLink.Chip>
      </A>
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

const A = styled.a`
  width: fit-content;
`
