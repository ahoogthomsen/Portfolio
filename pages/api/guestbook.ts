import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { db } from 'lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const session = await getSession({ req })

    if (!session) {
      return res.status(403).send('Unauthorized')
    }

    await db.post.create({
      data: {
        message: req.body.message,
        author: session?.user?.name ?? '',
      },
    })

    return res.status(200).json({ error: null })
  }
}
