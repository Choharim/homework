import { DEVICE_SIZE } from '@/constants/layout'

const MEDIA = {
  mobile: `@media screen and (max-width: ${DEVICE_SIZE.tablet}px)`,
  tablet: `@media screen and (max-width: ${DEVICE_SIZE.pc}px)`,
} as const

export default MEDIA
