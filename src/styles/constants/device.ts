import { StyleRule } from '@vanilla-extract/css'

export const DEVICE_BREAK_POINT = {
  mobile: 360,
  tablet: 768,
  pc: 1024,
} as const

type CSSProps = Omit<StyleRule, '@media' | '@supports'>

export const responsiveStyle = ({
  mobile,
  tablet,
  custom,
}: Partial<Record<'mobile' | 'tablet', CSSProps>> & {
  custom?: {
    value: number
    css: CSSProps
  }
}): StyleRule => ({
  '@media': {
    ...(custom?.value
      ? { [`screen and (max-width: ${custom.value}px)`]: custom.css }
      : {}),
    [`screen and (max-width: ${DEVICE_BREAK_POINT.tablet}px)`]: mobile ?? {},
    [`screen and (max-width: ${DEVICE_BREAK_POINT.pc}px)`]: tablet ?? {},
  },
})
