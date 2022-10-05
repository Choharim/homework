import { Tag } from 'entity/post/type'
import { color } from 'styles/theme'

export const TAG_COLOR_BY_TYPE: {
  [key in Tag]: { [key in 'base' | 'active']: typeof color[keyof typeof color] }
} = {
  알고리즘: { base: color.pink, active: color.darkPink },
  자료구조: { base: color.yellow, active: color.darkYellow },
  FE: { base: color.blue, active: color.darkBlue },
}
