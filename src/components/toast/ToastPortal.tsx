import { createPortal } from 'react-dom'

import { TOAST_PORTAL_ID } from 'pages/_document'

type Props = {
  children: React.ReactNode
}
const ToastPortal = ({ children }: Props) => {
  const parent =
    typeof window !== 'undefined' && document.getElementById(TOAST_PORTAL_ID)

  if (!parent) return <>{children}</>

  return createPortal(children, parent)
}

export default ToastPortal
