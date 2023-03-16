import Post, { Category } from '@/domain/post/type'

type FetchPostsParams = {
  category: Category
}
export const fetchPosts = async (
  baseUrl: string,
  { category }: FetchPostsParams
): Promise<Post[]> => {
  const params = [`category=${category}`]

  const res = await fetch(`${baseUrl}/api/posts?${params.join('&')}`)

  return await res.json()
}
