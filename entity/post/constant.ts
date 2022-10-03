import { join } from 'path'

export const POST_DIRECTORY = 'posts'

export const MDX_EXTENSION = 'mdx'

export const POSTS_PATH = join(process.cwd(), POST_DIRECTORY)

export const TAGS = ['알고리즘', '자료구조'] as const
