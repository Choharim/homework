import Post, { Category } from '@/domain/post/type'

type FetchPostsParams = {
  category: Category
}
export const fetchPosts = async ({
  category,
}: FetchPostsParams): Promise<Post[]> => {
  const params = [`category=${category}`]

  const res = await fetch(
    `${process.env.BASE_URL}/api/posts?${params.join('&')}`
  )

  return await res.json()
}
