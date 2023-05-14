import React, { ReactNode } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  children: ReactNode
  id: string
}
const Portal = ({ children, id }: Props) => {
  const parent = typeof window !== 'undefined' && document.getElementById(id)

  if (!parent) return <>{children}</>

  return <>{createPortal(children, parent)}</>
}

export default Portal
