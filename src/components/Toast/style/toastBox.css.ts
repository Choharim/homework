import {
  ComplexStyleRule,
  keyframes,
  style,
  styleVariants,
} from '@vanilla-extract/css'
import { ToastBoxStyle } from '../ToastBox'
import COLOR from '@/styles/color'
import { TOAST_TIMEOUT, TOAST_TOP_POSITION } from '../constant'

const ANIMATED_DURATION = 300

const fadeIn = keyframes({
  '0%': { opacity: 0 },
})

const fadeOut = keyframes({
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  '100%': { transform: `translateY(${TOAST_TOP_POSITION})` },
})

export const wrapper = style({
  padding: '10px 12px',
  minWidth: '200px',
  minHeight: '32px',
  borderRadius: '4px',

  animation: `${fadeIn} ${ANIMATED_DURATION}ms ease, ${slideIn} ${ANIMATED_DURATION}ms ease, ${fadeOut} ${ANIMATED_DURATION}ms ease, ${
    TOAST_TIMEOUT - ANIMATED_DURATION
  }ms`,
})

const VARIETY: Record<ToastBoxStyle['variety'], ComplexStyleRule> = {
  confirm: { backgroundColor: COLOR.primary200, color: COLOR.white },
  error: {
    backgroundColor: COLOR.warning,
    color: COLOR.white,
  },
  normal: {
    backgroundColor: COLOR.primary400,
    color: COLOR.white,
  },
}

export const variety = styleVariants(VARIETY)
