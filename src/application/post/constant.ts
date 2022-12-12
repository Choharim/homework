import { Tag } from '@/domain/post/type'
import { color } from '@/styles/theme'

export const TAG_COLOR_BY_TYPE: {
  [key in Tag]: {
    [key in 'base' | 'active' | 'hover']: typeof color[keyof typeof color]
  }
} = {
  알고리즘: {
    base: color.pink4,
    hover: color.pink3,
    active: color.pink2,
  },
  자료구조: {
    base: color.green3,
    hover: color.green2,
    active: color.green1,
  },
  운영체제: {
    base: color.purple3,
    hover: color.purple2,
    active: color.purple1,
  },
  FE: { base: color.blue3, hover: color.blue2, active: color.blue1 },
}

export const POST_GROUP_COUNT = 6
