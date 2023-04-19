import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'
import styled, { css } from 'styled-components'
import rangeParser from 'parse-numeric-range'
import { useCallback } from 'react'

import useToast from '@/hooks/useToast'
import ToastContainer from '../toast/ToastContainer'
import Icon from '../icon/Icon'

const COPY_SUCCESS = '클립보드에 복사되었습니다.'
const COPY_FAILURE = '복사를 다시 시도해주세요.'

type Props = {
  children: string
  className: string
}

const Code = ({ className, children }: Props) => {
  const match = /language-(\w+)/.exec(className || '')

  const { toasts, addToast } = useToast()

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

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(children)

      addToast({ variety: 'normal', desc: COPY_SUCCESS })
    } catch (error) {
      addToast({ variety: 'error', desc: COPY_FAILURE })
    }
  }

  return match ? (
    <Wrapper>
      <ToastContainer toasts={toasts} />
      <HighlightWrapper>
        <CopyCodeButton onClick={copyCode} type="Copy" />
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
  pc: '20px',
  tablet: '15px',
} as const

const CopyCodeButton = styled(Icon)`
  position: absolute;
  top: ${PADDING_X.pc};
  right: ${PADDING_X.pc};

  fill: ${({ theme }) => theme.color.grey400};

  ${({ theme }) => css`
    ${theme.media.tablet} {
      top: ${PADDING_X.tablet};
      right: ${PADDING_X.tablet};
    }
  `}
`

const Wrapper = styled.div`
  position: relative;
  &:hover {
    ${CopyCodeButton} {
      fill: ${({ theme }) => theme.color.white};
    }
  }
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

const LineContainer = styled.div`
  width: 100%;
  ${({ theme }) => theme.font.body_2};

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
