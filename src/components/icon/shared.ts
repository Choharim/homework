import ArrowRight from 'public/icons/arrow-right.svg'
import DoubleArrowRight from 'public/icons/double-arrow-right.svg'
import FillTriangleExclamationMark from 'public/icons/fill-triangle-exclamation-mark.svg'

export const ICON_COMPONENT = {
  ArrowRight,
  DoubleArrowRight,
  FillTriangleExclamationMark,
} as const

export type IconType = keyof typeof ICON_COMPONENT
