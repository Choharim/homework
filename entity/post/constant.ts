import { join } from 'path'
import { colors } from 'styles/theme'
import { Tag } from './type'

const DIRECTORY = 'posts'

export const MDX_EXTENSION = 'mdx'

export const POSTS_PATH = join(process.cwd(), DIRECTORY)

export const TAG_COLOR_BY_TYPE: {
  [key in Tag]: typeof colors[keyof typeof colors]
} = {
  알고리즘: colors.red,
  자료구조: colors.yellow,
}
