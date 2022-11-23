const NOT_SUPPORT_COPY = '복사하기가 지원되지 않는 브라우저입니다.'

export const copyToClipboard = ({
  text,
  onSuccess,
  onFailure,
}: {
  text: string
  onSuccess?: () => void
  onFailure?: (e: Error) => void
}) => {
  return new Promise(() => {
    if (navigator?.clipboard) {
      const cb = navigator.clipboard

      cb.writeText(text).then(onSuccess).catch(onFailure)
    } else {
      try {
        if (!document.queryCommandSupported('copy')) {
          return alert(NOT_SUPPORT_COPY)
        }

        const body = document.querySelector('body')

        const textarea = document.createElement('textarea')
        body?.appendChild(textarea)

        textarea.value = text
        textarea.select()
        document.execCommand('copy')

        body?.removeChild(textarea)

        onSuccess?.()
      } catch (e) {
        onFailure?.(e as Error)
      }
    }
  })
}
