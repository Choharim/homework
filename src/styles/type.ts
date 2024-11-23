import COLOR from './color'
import { DEVICE_BREAK_POINT } from './device'
import FONT from './font'

export type Color = typeof COLOR
export type ColorKey = keyof Color

export type Font = typeof FONT
export type FontKey = keyof Font

export type Device = keyof typeof DEVICE_BREAK_POINT
