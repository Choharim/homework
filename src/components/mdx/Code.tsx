import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'
import styled, { css } from 'styled-components'
import rangeParser from 'parse-numeric-range'
import { useCallback } from 'react'
import Image from 'next/image'

import { copyToClipboard } from '@/utils/copy'
import { COPY_FAILURE, COPY_SUCCESS } from '@/constants/common'

type Props = {
  children: string
  className: string
}

const Code = ({ className, children }: Props) => {
  const match = /language-(\w+)/.exec(className || '')

  /**
   * @example
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

  const copyCode = () => {
    copyToClipboard({
      text: children,
      onSuccess: () => alert(COPY_SUCCESS),
      onFailure: () => alert(COPY_FAILURE),
    })
  }

  return match ? (
    <Wrapper>
      <CopyCodeButton onClick={copyCode}>
        <Image
          src="/copy.svg"
          alt="code-copy_icon"
          width="24px"
          height="24px"
        />
      </CopyCodeButton>
      <HighlightWrapper>
        <Highlight
          {...defaultProps}
          language={match[1] as Language}
          code={children}
          theme={theme}
        >
          {({ tokens, getLineProps, getTokenProps }) => (
            <LineContainer>
              {tokens.map((line, i) => (
                <Line
                  key={`code-line_${i}`}
                  {...getLineProps({
                    line,
                    key: i,
                  })}
                  $isHighlight={isHighlightLine(i)}
                >
                  {line.map((token, key) => (
                    <CodeText key={key} {...getTokenProps({ token, key })} />
                  ))}
                </Line>
              ))}
            </LineContainer>
          )}
        </Highlight>
      </HighlightWrapper>
    </Wrapper>
  ) : (
    <code>{children}</code>
  )
}
export default Code

const PADDING_X = {
  pc: '15px',
  tablet: '10px',
} as const

const Wrapper = styled.div`
  position: relative;
`

const HighlightWrapper = styled.pre`
  padding: ${PADDING_X.pc};
  border-radius: 10px;
  background-color: #212121;
  overflow-x: auto;

  ${({ theme }) => css`
    ${theme.media.tablet} {
      padding: ${PADDING_X.tablet};
    }
  `}
`

const CopyCodeButton = styled.button`
  position: absolute;
  top: ${PADDING_X.pc};
  right: ${PADDING_X.pc};
  width: 32px;
  height: 32px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.color.primary6};
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary7};
  }

  ${({ theme }) => css`
    ${theme.media.tablet} {
      top: ${PADDING_X.tablet};
      right: ${PADDING_X.tablet};
    }
  `}
`

const LineContainer = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 1.3rem;

  padding: 0;

  .comment {
    color: #ececec84 !important;
  }
  .function,
  .method {
    color: #7fa6f9 !important;
  }
  .imports.maybe-class-name {
    color: #f8f8f2 !important;
  }
  .maybe-class-name {
    color: #ffcb6b !important;
  }

  .keyword,
  .punctuation {
    color: #b283cf !important;
  }
  .module,
  .control-flow,
  .operator {
    color: #88deff !important;
  }

  .plain,
  .literal-property {
    color: #eeffff !important;
  }

  .string {
    color: #c0e58b !important;
  }
  .number {
    color: #f2896a !important;
  }
`

const CodeText = styled.span``

const Line = styled.div<{ $isHighlight: boolean }>`
  ${({ $isHighlight }) =>
    $isHighlight &&
    css`
      background-color: rgb(47, 53, 60);
    `}

  &:hover {
    background-color: rgb(53, 59, 69);
  }

  &:last-child {
    ${CodeText} {
      display: none !important;
    }
  }
`
