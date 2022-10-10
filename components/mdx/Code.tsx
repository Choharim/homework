import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'
import styled, { css } from 'styled-components'
import rangeParser from 'parse-numeric-range'
import { useCallback } from 'react'

type Props = {
  children: string
  className: string
}

const Code = ({ className, children }: Props) => {
  const match = /language-(\w+)/.exec(className || '')

  /**
   * @description
   * ```jsx{1,2,3-5}
   * ```
   * 다음의 경우, 1,2,3,4,5 줄에서 true를 반환합니다.
   */
  const isHighlightLine = useCallback(
    (index: number) => {
      const RE = /{([\d,-]+)}/
      const strlineNumbers = RE.exec(className)?.[1]

      if (strlineNumbers) {
        const lineNumbers = rangeParser(strlineNumbers)

        return lineNumbers.includes(index + 1)
      }

      return false
    },
    [className]
  )

  return match ? (
    <HighlightWrapper>
      <Highlight
        {...defaultProps}
        language={match[1] as Language}
        code={children}
        theme={theme}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <Table>
            <TableBody>
              {tokens.map((line, i) => (
                <TableLine
                  key={`code-line_${i}`}
                  {...getLineProps({ line, key: i })}
                  isHighlight={isHighlightLine(i)}
                >
                  <Td>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </Td>
                </TableLine>
              ))}
            </TableBody>
          </Table>
        )}
      </Highlight>
    </HighlightWrapper>
  ) : (
    <code className={className} />
  )
}
export default Code

const HighlightWrapper = styled.pre`
  margin: 20px 0;
  padding: 1.5rem 0;
  border-radius: 3px;
  background-color: #212121;
  overflow-x: scroll;
`

const Table = styled.table`
  display: table;
  width: 100%;
`

const TableBody = styled.tbody`
  ${({ theme }) => theme.font.body_2};
  white-space: pre;
`

const TableLine = styled.tr<{ isHighlight: boolean }>`
  display: block;
  padding: 0 1.5rem;

  &:not(:last-child) {
    margin-bottom: 2px;
  }

  ${({ isHighlight }) =>
    isHighlight &&
    css`
      background-color: rgb(47, 53, 60);
    `}

  &:hover {
    background-color: rgb(53, 59, 69);
  }
`

// @todo important 제거하기
const Td = styled.td`
  .comment {
    color: #999 !important;
  }
  .imports.maybe-class-name {
    color: #f8f8f2 !important;
  }
  .keyword {
    color: #c490e5 !important;
  }
  .function {
    color: #81a9fd !important;
  }
  .parameter,
  .maybe-class-name {
    color: #ffcb6b !important;
  }
  .module {
    color: #88deff !important;
  }
  .string {
    color: #c0e58b !important;
  }

  .literal-property {
    color: #f8f8f2 !important;
  }
  .plain {
    color: #e8f8f9 !important;
  }
`
