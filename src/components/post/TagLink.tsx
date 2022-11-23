import React, { DOMAttributes, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { Tag } from '@/domain/post/type'
import { POST_DIRECTORY } from '@/domain/post/constant'
import { TAG_COLOR_BY_TYPE } from '@/application/post/constant'

import Chip from '../Chip'

interface Props extends DOMAttributes<HTMLDivElement> {
  tag: Tag
}

const TagLink = ({ tag, ...rest }: Props) => {
  const { query } = useRouter()

  const updatedQueryTag = useMemo(() => {
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
        query: !!updatedQueryTag ? { tag: updatedQueryTag } : {},
      }}
      passHref
    >
      <A>
        <TagLink.Chip
          $bgColor={TAG_COLOR_BY_TYPE[tag].base}
          $hoverColor={TAG_COLOR_BY_TYPE[tag].hover}
          {...rest}
        >
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
