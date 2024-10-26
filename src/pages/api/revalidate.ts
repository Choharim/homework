import postEntity from '@/entity/post'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req

  if (query.secret !== process.env.NEXT_PUBLIC_REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    await res.revalidate('/')

    const category = req.query.category as string
    if (postEntity.isCategory(category)) {
      await res.revalidate(`/category/${category}`)
    }

    const blogId = req.query.id
    if (blogId) {
      await res.revalidate(`/blog/${blogId}`)
    }

    return res.json({ revalidated: true })
  } catch (err) {
    console.log(err)
    return res.status(500).send(`Error revalidating:${JSON.stringify(err)}`)
  }
}
