import styled from '@emotion/styled'
import { ComponentProps } from 'react'
import { NotionComponents } from 'react-notion-x'
import { Code as NotionCode } from 'react-notion-x/build/third-party/code'

type Props = ComponentProps<NotionComponents['Code']>

const Code = (props: Props) => {
  return <StyledCode {...props} />
}
export default Code

const StyledCode = styled(NotionCode)`
  position: relative;
  margin: 20px 0;
  padding: 24px 0;
  border-radius: 3px;
  background-color: #212121;
  overflow-x: auto;
  overflow-y: hidden;

  .comment {
    color: #999;
  }

  .keyword {
    color: #c490e5;
  }

  .function {
    color: #81a9fd;
  }

  .operator {
    color: #808080;
  }

  .string {
    color: #c0e58b;
  }

  .literal-property {
    color: #f8f8f2;
  }

  .imports.maybe-class-name {
    color: #f8f8f2;
  }

  .parameter,
  .maybe-class-name {
    color: #ffcb6b;
  }

  .module {
    color: #88deff;
  }

  .plain {
    color: #e8f8f9;
  }
`
