import { style } from '@vanilla-extract/css'
import { TOAST_TOP_POSITION } from '../constant'
import Z_INDEX from '@/styles/constants/zIndex'

export const wrapper = style({
  position: 'fixed',
  top: TOAST_TOP_POSITION,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: Z_INDEX.toast,
})
