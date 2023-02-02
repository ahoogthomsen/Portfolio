import { Heading } from '@/components/Heading'
import { getServerSession } from 'next-auth/next'
import { Post } from '@prisma/client'

import { db } from 'lib/db'
import Form from './ui/Form'
import List from './ui/List'
import { authOptions } from 'lib/auth'

export const dynamic = 'force-dynamic'

async function getPosts(): Promise<Post[]> {
  return await db.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: 30,
  })
}

const GuestBook = async ({}) => {
  const [posts, session] = await Promise.all([
    getPosts(),
    getServerSession(authOptions),
  ])

  return (
    <div>
      <Heading type="h1">Guestbook</Heading>
      <p className="text-xl text-zinc-400 mt-10">
        Make your mark in my guestbook by sharing your thoughts with me. Whether
        it's a shoutout, a tidbit of information, a sage suggestion, or a
        chuckle-worthy joke, I'm eager to read what you have in store.
      </p>
      <Form isAuthenticated={!!session} />
      <List posts={posts} />
    </div>
  )
}

export default GuestBook
