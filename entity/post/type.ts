type Post = {
  data: FrontMatter
  content: string
  slug: string
}

export default Post

export type FrontMatter = {
  title: Title
  description: Description
  createAt: DateString
  tags: Tag[]
  thumbnail?: string
}

export type Tag = '알고리즘' | '자료구조'
