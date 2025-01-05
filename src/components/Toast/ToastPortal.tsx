import Portal from '../Portal'
import ToastBox from './ToastBox'
import Flex from '../Flex'

import { DESC, TOAST_PORTAL_ID } from './_constants'
import { Toast } from './_types'

import * as style from './tostPortal.css'

type Props = {
  toasts: Toast[]
}

const ToastPortal = ({ toasts }: Props) => {
  return (
    <Portal container={document.getElementById(TOAST_PORTAL_ID)}>
      <Flex direction="column-reverse" gap="10px" className={style.wrapper}>
        {toasts.map(({ id, variety, desc }) => (
          <ToastBox key={id} variety={variety}>
            {DESC[variety] || desc}
          </ToastBox>
        ))}
      </Flex>
    </Portal>
  )
}

export default ToastPortal
