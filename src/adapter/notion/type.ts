export type PostCategory = 'CS' | 'FE'
export type PostTag =
  | 'network'
  | 'data-structure'
  | 'algorithms'
  | 'operating-system'
  | 'typescript'
  | 'javascript'
  | 'theory'
  | 'problem-solving'
  | 'trouble-shooting'
  | 'thinking'

type CreateDate = `${number}-${number}-${number}`

export type Post = {
  id: string
  title: string
  description: string
  category: PostCategory
  tag: PostTag[]
  create_date: CreateDate
}
