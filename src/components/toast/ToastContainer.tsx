import styled from 'styled-components'

import { DESC, TOAST_TOP_POSITION } from './constant'
import { Toast } from './type'

import ToastBox from './ToastBox'
import ToastPortal from './ToastPortal'

type Props = {
  toasts: Toast[]
}

const ToastContainer = ({ toasts }: Props) => {
  return (
    <ToastPortal>
      <Container>
        {toasts.map(({ id, variety, desc }) => (
          <ToastBox key={id} variety={variety}>
            {DESC[variety] || desc}
          </ToastBox>
        ))}
      </Container>
    </ToastPortal>
  )
}

export default ToastContainer

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;

  position: fixed;
  top: ${TOAST_TOP_POSITION}px;
  left: 50%;
  transform: translateX(-50%);
`
