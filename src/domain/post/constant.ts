import { join } from 'path'
import { Category } from './type'

export const POST_DIRECTORY = 'posts'

export const MDX_EXTENSION = 'mdx'

export const POSTS_PATH = join(process.cwd(), POST_DIRECTORY)

export const CATEGORIES: Array<Category> = [
  'all',
  'javascript',
  'operating-system',
  'algorithms',
  'data-structure',
  'dev',
]
