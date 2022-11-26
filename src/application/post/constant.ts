import { Tag } from '@/domain/post/type'
import { color } from '@/styles/theme'

export const TAG_COLOR_BY_TYPE: {
  [key in Tag]: {
    [key in 'base' | 'active' | 'hover']: typeof color[keyof typeof color]
  }
} = {
  알고리즘: {
    base: color.pink,
    hover: color.darkPink,
    active: color.moreDardPink,
  },
  자료구조: {
    base: color.green,
    hover: color.darkGreen,
    active: color.moreDardGreen,
  },
  FE: { base: color.blue, hover: color.darkBlue, active: color.moreDarkBlue },
}

export const POST_GROUP_COUNT = 6
