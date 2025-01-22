import {
  ComplexStyleRule,
  keyframes,
  style,
  styleVariants,
} from '@vanilla-extract/css'
import { ToastBoxStyle } from './ToastBox'
import COLOR from '@/styles/color'

export const TOAST_TOP_POSITION = 40

export const TOAST_TIMEOUT = 3000

const toastAnimation = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-100%)' }, // TOAST_TIMEOUT의 10% = 0.3초 동안 나옴
  '10%': { opacity: 1, transform: `translateY(${TOAST_TOP_POSITION}px)` },
  '90%': { opacity: 1, transform: `translateY(${TOAST_TOP_POSITION}px)` },
  '100%': { opacity: 0, transform: 'translateY(-100%)' }, // TOAST_TIMEOUT의 10% = 0.3초 동안 사라짐
})

export const wrapper = style({
  padding: '10px 12px',
  minWidth: 200,
  minHeight: 32,
  borderRadius: 4,
  pointerEvents: 'auto',

  animation: `${toastAnimation} ${TOAST_TIMEOUT}ms ease forwards`,
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
