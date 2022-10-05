import React from 'react'
import styled, { css } from 'styled-components'
import { useRouter } from 'next/router'

import { TAGS } from 'entity/post/constant'
import { Tag } from 'entity/post/type'
import { TAG_COLOR_BY_TYPE } from 'constants/post/tag'

import TagLink from './TagLink'

const TagFilter = () => {
  const { query } = useRouter()

  return (
    <TagButtonContainer>
      {TAGS.map((tag, i) => (
        <TagButton key={`${tag}_${i}`}>
          <CircleTagLink tag={tag} $active={query.tag?.includes(tag) || false}>
            {tag}
          </CircleTagLink>
        </TagButton>
      ))}
    </TagButtonContainer>
  )
}

export default TagFilter

const TagButtonContainer = styled.nav`
  display: flex;
  flex-direction: column;
`
const TagButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;

  height: 48px;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const CircleTagLink = styled(TagLink)<{ $active: boolean; tag?: Tag }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.font.subtitle_3}

  ${({ $active, tag }) =>
    $active &&
    css`
      color: ${({ theme }) => theme.color.black};
      background-color: ${TAG_COLOR_BY_TYPE[tag]?.active};
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    `}
`
