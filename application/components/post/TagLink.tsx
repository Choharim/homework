import React, { DOMAttributes, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { Tag } from 'domain/post/type'
import { POST_DIRECTORY } from 'domain/post/constant'
import { TAG_COLOR_BY_TYPE } from 'application/constants/post/tag'

import Chip from '../Chip'

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
          $bgColor={TAG_COLOR_BY_TYPE[tag].base}
          $hoverColor={TAG_COLOR_BY_TYPE[tag].hover}
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

TagLink.Chip = styled(Chip)<{ $bgColor: string; $hoverColor: string }>`
  background-color: ${({ $bgColor }) => $bgColor};

  &:hover {
    background-color: ${({ $hoverColor }) => $hoverColor};
    color: ${({ theme }) => theme.color.black};
  }
`

const A = styled.a`
  width: fit-content;
`