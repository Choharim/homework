import { join } from 'path'
import { color } from 'styles/theme'
import { Tag } from './type'

export const POST_DIRECTORY = 'posts'

export const MDX_EXTENSION = 'mdx'

export const POSTS_PATH = join(process.cwd(), POST_DIRECTORY)

export const TAGS = ['알고리즘', '자료구조'] as const

export const TAG_COLOR_BY_TYPE: {
  [key in Tag]: typeof color[keyof typeof color]
} = {
  알고리즘: color.red,
  자료구조: color.yellow,
}
