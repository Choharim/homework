import Portal from '../Portal'
import ToastBox from './ToastBox'
import Flex from '../Flex'

import { DESC, TOAST_PORTAL_ID } from './_constants'
import { Toast } from './_types'

import * as style from './tostPortal.css'
import { getElementById } from '@/shared/_utils'

type Props = {
  toasts: Toast[]
}

const ToastPortal = ({ toasts }: Props) => {
  return (
    <Portal container={getElementById(TOAST_PORTAL_ID)}>
      {toasts.length > 0 && (
        <Flex direction="column-reverse" gap="10px" className={style.wrapper}>
          {toasts.map(({ id, variety, desc }) => (
            <ToastBox key={id} variety={variety}>
              {DESC[variety] || desc}
            </ToastBox>
          ))}
        </Flex>
      )}
    </Portal>
  )
}

export default ToastPortal
