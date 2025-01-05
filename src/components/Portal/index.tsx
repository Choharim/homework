import React from 'react'
import ReactDOM from 'react-dom'

interface PortalProps {
  container?: HTMLElement | null
}
function Portal({
  children,
  container: _container,
}: React.PropsWithChildren<PortalProps>) {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const container = _container || (isMounted ? document?.body : null)

  if (!container) return <></>

  return ReactDOM.createPortal(children, container)
}

export default Portal
