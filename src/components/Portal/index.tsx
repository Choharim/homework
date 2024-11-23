import { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  id: string
}
const Portal = ({ children, id }: PropsWithChildren<Props>) => {
  const parent = typeof window !== 'undefined' && document.getElementById(id)

  if (!parent) return <>{children}</>

  return <>{createPortal(children, parent)}</>
}

export default Portal
