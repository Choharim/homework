import Post, { Category } from '@/domain/post/type'

type FetchPostsParams = {
  pageOffset?: number
  category: Category
}
export const fetchPosts = async (
  baseUrl: string,
  { pageOffset, category }: FetchPostsParams
): Promise<Post[]> => {
  let params = [`category=${category}`]

  if (typeof pageOffset === 'number') {
    params = [...params, `page=${pageOffset}`]
  }

  const res = await fetch(`${baseUrl}/api/posts?${params.join('&')}`)

  return await res.json()
}
