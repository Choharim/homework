import { TAGS } from './constant'

type Post = {
  data: FrontMatter
  content: string
  slug: string
}

export default Post

export type FrontMatter = {
  title: Title
  description: Description
  createDate: DateString
  tag: Tag
  thumbnail?: string
}

export type Tag = typeof TAGS[number]
