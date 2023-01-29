import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from 'lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    await db.post.create({
      data: {
        message: req.body.message,
      },
    })

    return res.status(200).json({ error: null })
  }
}
