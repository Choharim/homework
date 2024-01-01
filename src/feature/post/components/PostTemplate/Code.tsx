import { ComponentProps, useEffect } from 'react'
import { NotionComponents } from 'react-notion-x'
import { Code as NotionCode } from 'react-notion-x/build/third-party/code'

import ToastPortal from '@/components/toast/ToastPortal'
import useToast from '@/components/toast/useToast'

const COPY_MESSAGE = '클립보드에 복사되었습니다.'

type Props = ComponentProps<NotionComponents['Code']>

const Code = (props: Props) => {
  const { toasts, addToast } = useToast()

  useEffect(() => {
    const copyButton = document.querySelector('.notion-code-copy-button')

    if (!copyButton) return

    const handleClickCopy = () => {
      addToast({ variety: 'normal', desc: COPY_MESSAGE })
    }

    copyButton.addEventListener('click', handleClickCopy)

    return () => {
      copyButton.removeEventListener('click', handleClickCopy)
    }
  }, [addToast])

  return (
    <>
      <ToastPortal toasts={toasts} />
      <NotionCode {...props} />
    </>
  )
}
export default Code
