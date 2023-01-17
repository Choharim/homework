import type { NextApiRequest, NextApiResponse } from 'next'

import { POST_GROUP_COUNT } from '@/application/post/constant'
import { getPosts } from '@/domain/post'
import Post, { Category } from '@/domain/post/type'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[] | string>
) {
  const query = req.query
  const { page, category } = query

  res
    .status(200)
    .send(
      getPosts(category as Category).slice(
        0,
        (Number(page as string) || 0) * POST_GROUP_COUNT
      )
    )
}
