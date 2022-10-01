import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

type Props = {
  children: string
}
const CodeBlock = ({ children }: Props) => {
  return <SyntaxHighlighter language="javascript">{children}</SyntaxHighlighter>
}

export default CodeBlock
