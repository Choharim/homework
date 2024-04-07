export type PostCategory =
  | 'network'
  | 'data-structure'
  | 'algorithms'
  | 'operating-system'
  | 'typescript'
  | 'javascript'
  | 'webview'
  | 'frontend'

export type PostTag =
  | 'theory'
  | 'problem-solving'
  | 'trouble-shooting'
  | 'thinking'

type CreateDate = `${number}-${number}-${number}`

export type PostFrontMatter = {
  id: string
  title: string
  description: string
  category: PostCategory
  tag: PostTag[]
  create_date: CreateDate
  published: boolean
}
