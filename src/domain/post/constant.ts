import { join } from 'path'
import { Category } from './type'

export const POST_DIRECTORY = 'posts'

export const MDX_EXTENSION = 'mdx'

export const POSTS_PATH = join(process.cwd(), POST_DIRECTORY)

export const CATEGORIES: Readonly<Array<Category>> = [
  'all',
  'javascript',
  'typescript',
  'operating-system',
  'algorithms',
  'data-structure',
  'dev',
]
