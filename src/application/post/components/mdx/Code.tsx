import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'
import rangeParser from 'parse-numeric-range'
import { useCallback } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import Icon from '@/components/icon'
import ToastPortal from '@/components/toast/ToastPortal'

import useToast from '@/components/toast/useToast'
import FONT from '@/styles/constants/font'

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
      <ToastPortal toasts={toasts} />
      <CopyCodeButton onClick={copyCode} type="Copy" fill="grey600" />
      <Highlight
        {...defaultProps}
        theme={theme}
        language={match[1] as Language}
        code={children}
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
                isHighlight={isHighlightLine(i)}
              >
                {line.map((token, key) => (
                  <CodeToken key={key} {...getTokenProps({ token, key })} />
                ))}
              </Line>
            ))}
          </LineContainer>
        )}
      </Highlight>
    </Wrapper>
  ) : (
    <code>{children}</code>
  )
}
export default Code

const PADDING = '15px'

const CopyCodeButton = styled(Icon)`
  position: absolute;
  top: ${PADDING};
  right: ${PADDING};
`

const Wrapper = styled.div`
  position: relative;

  &:hover {
    ${CopyCodeButton} {
      fill: ${({ theme }) => theme.color.grey100};
    }
  }
`

const LineContainer = styled.ol`
  display: grid;
  padding: calc(${PADDING} * 2) ${PADDING};
  overflow-x: auto;
  border-radius: 10px;
  background-color: #212121;

  &::-webkit-scrollbar {
    height: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.primary50};
    background-clip: padding-box;
    border: 7px solid transparent;

    border-radius: 9999px;
  }

  &::-webkit-scrollbar-track {
    background-color: #212121;
  }
`

const CodeToken = styled.span`
  ${FONT.body_1};
`

const Line = styled.li<{ isHighlight: boolean }>`
  ${({ isHighlight }) =>
    isHighlight &&
    css`
      background-color: rgb(47, 53, 60);
    `}

  &:hover {
    background-color: rgb(47, 53, 60);
  }

  &:last-child {
    ${CodeToken} {
      display: none !important;
    }
  }
`
