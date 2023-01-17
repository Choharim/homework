import Post, { Category } from '@/domain/post/type'

export const fetchPosts = async (
  pageOffset: number,
  category: Category = 'all'
): Promise<Post[]> => {
  const res = await fetch(`/api/posts?page=${pageOffset}&category=${category}`)

  return await res.json()
}
