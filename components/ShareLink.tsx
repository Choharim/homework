import React, { DOMAttributes } from 'react'
import styled from 'styled-components'

type Props = Pick<DOMAttributes<HTMLDivElement>, 'onClick'>

const ShareLink = (props: Props) => {
  return <LinkIcon {...props}>🔗</LinkIcon>
}

export default ShareLink

const LinkIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  font-size: 24px;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightGray};
  }
`
