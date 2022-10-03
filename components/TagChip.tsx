import React from 'react'
import styled from 'styled-components'
import { Tag } from 'entity/post/type'
import { TAG_COLOR_BY_TYPE } from 'entity/post/constant'

type TagChipProps = {
  children: React.ReactNode
  type: Tag
}
const TagChip = ({ children, type }: TagChipProps) => {
  return <Chip color={TAG_COLOR_BY_TYPE[type]}>{children}</Chip>
}

export default TagChip

const Chip = styled.div<{ color: string }>`
  width: fit-content;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.color.lightBlack};
  ${({ theme }) => theme.font.body_5};
  cursor: pointer;
`
