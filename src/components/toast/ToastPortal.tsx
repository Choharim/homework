import Portal from '../portal'
import ToastBox from './ToastBox'
import Flex from '../flex'

import { DESC, TOAST_PORTAL_ID } from './constant'
import { Toast } from './type'

import * as style from './style/tostPortal.css'

type Props = {
  toasts: Toast[]
}

const ToastPortal = ({ toasts }: Props) => {
  return (
    <Portal id={TOAST_PORTAL_ID}>
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
