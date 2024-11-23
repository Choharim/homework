import { StyleRule } from '@vanilla-extract/css'
import { Device } from './type'
import { CSSProperties } from 'react'

export const DEVICE_BREAK_POINT = {
  mobile: 360,
  tablet: 768,
  pc: 1024,
} as const

export const responsiveStyle = ({
  mobile,
  tablet,
  custom,
}: Partial<Record<Device, CSSProperties>> & {
  custom?: {
    value: number
    css: CSSProperties
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
