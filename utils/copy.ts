const COPY_SUCCESS = '클립보드에 복사되었습니다.'
const COPY_FAILURE = '복사를 다시 시도해주세요.'
const NOT_SUPPORT_COPY = '복사하기가 지원되지 않는 브라우저입니다.'

export const copy = (target: string) => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(target)
      .then(() => {
        alert(COPY_SUCCESS)
      })
      .catch(() => {
        alert(COPY_FAILURE)
      })
  } else {
    if (!document.queryCommandSupported('copy')) {
      return alert(NOT_SUPPORT_COPY)
    }

    const textarea = document.createElement('textarea')
    textarea.value = target

    document.body.appendChild(textarea)
    document.execCommand('copy')
    document.body.removeChild(textarea)

    alert(COPY_SUCCESS)
  }
}
