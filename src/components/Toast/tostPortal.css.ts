import { style } from '@vanilla-extract/css'
import Z_INDEX from '@/styles/zIndex'
import { TOAST_TOP_POSITION } from './toastBox.css'

export const wrapper = style({
  position: 'fixed',
  top: TOAST_TOP_POSITION,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: Z_INDEX.toast,

  pointerEvents: 'none',
})
