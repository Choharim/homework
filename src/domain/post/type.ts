type Post = {
  data: FrontMatter
  content: string
  slug: string
}

export default Post

export type BriefPost = Pick<Post, 'data' | 'slug'>

export type FrontMatter = {
  title: string
  description: string
  createDate: string
  category: Category
  thumbnailSrc?: string
}

export type Category =
  | 'all'
  | 'javascript'
  | 'operating-system'
  | 'algorithms'
  | 'data-structure'
  | 'dev'
  | 'typescript'
