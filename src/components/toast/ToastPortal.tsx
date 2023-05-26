import styled from '@emotion/styled'

import Portal from '../portal'
import ToastBox from './ToastBox'
import Flex from '../flex'

import { DESC, TOAST_PORTAL_ID, TOAST_TOP_POSITION } from './constant'
import { Toast } from './type'
import Z_INDEX from '@/styles/constants/zIndex'

type Props = {
  toasts: Toast[]
}

const ToastPortal = ({ toasts }: Props) => {
  return (
    <Portal id={TOAST_PORTAL_ID}>
      <ToastContainer direction="column-reverse" gap="10px">
        {toasts.map(({ id, variety, desc }) => (
          <ToastBox key={id} variety={variety}>
            {DESC[variety] || desc}
          </ToastBox>
        ))}
      </ToastContainer>
    </Portal>
  )
}

export default ToastPortal

const ToastContainer = styled(Flex)`
  position: fixed;
  top: ${TOAST_TOP_POSITION}px;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${Z_INDEX.toast};
`
