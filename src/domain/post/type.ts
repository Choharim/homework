import { CATEGORIES } from './constant'

type Post = {
  data: FrontMatter
  content: string
  slug: string
}

export default Post

export type BriefPost = Pick<Post, 'data' | 'slug'>

export type FrontMatter = {
  title: Title
  description: Description
  createDate: DateString
  category: Category
  thumbnailSrc?: string
}

export type Category = typeof CATEGORIES[number]
