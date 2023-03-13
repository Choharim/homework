import type { NextApiRequest, NextApiResponse } from 'next'

import { getPosts } from '@/domain/post'
import { BriefPost, Category } from '@/domain/post/type'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BriefPost[] | string>
) {
  const query = req.query
  const { category } = query

  res.status(200).send(getPosts(category as Category))
}
