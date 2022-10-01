import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
}
const CodeSnippetHeader = ({ children }: Props) => {
  return <Test>{children}</Test>
}

export default CodeSnippetHeader

const Test = styled.div`
  background-color: red;
`
