import React from 'react'
import styled, { css } from 'styled-components'
import { useRouter } from 'next/router'

import { TAGS } from 'domain/post/constant'
import { Tag } from 'domain/post/type'
import { TAG_COLOR_BY_TYPE } from 'application/constants/post/tag'

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
  align-items: center;
  flex-wrap: wrap;
  margin: -4px;
`
const TagButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 4px;
`

const CircleTagLink = styled(TagLink)<{ $active: boolean; tag?: Tag }>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.font.body_1}
  padding: 8px 24px;
  border-radius: 40px;
  white-space: nowrap;

  ${({ $active, tag }) =>
    $active &&
    css`
      color: ${({ theme }) => theme.color.black};
      background-color: ${TAG_COLOR_BY_TYPE[tag]?.hover};
      border: 1px solid ${TAG_COLOR_BY_TYPE[tag]?.active};
    `};

  ${({ theme }) => css`
    ${theme.media.tablet} {
      padding: 6px 20px;
      ${theme.font.body_2}
    }
  `}
`
