import type { NextApiRequest, NextApiResponse } from 'next'

import { POST_GROUP_COUNT } from '@/application/post/constant'
import { getPosts } from '@/domain/post'
import { BriefPost, Category } from '@/domain/post/type'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BriefPost[] | string>
) {
  const query = req.query
  const { page, category } = query

  if (typeof page !== 'number') {
    res.status(200).send(getPosts(category as Category))
  } else {
    res
      .status(200)
      .send(
        getPosts(category as Category).slice(
          0,
          (Number(page) || 0) * POST_GROUP_COUNT
        )
      )
  }
}
