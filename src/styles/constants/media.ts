import { DEVICE_BREAK_POINT } from '@/styles/constants/device'

const MEDIA = {
  mobile: `@media screen and (max-width: ${DEVICE_BREAK_POINT.tablet}px)`,
  tablet: `@media screen and (max-width: ${DEVICE_BREAK_POINT.pc}px)`,
} as const

export default MEDIA
