import { Heading } from '@/components/Heading'
import { Post } from '@prisma/client'

import { db } from 'lib/db'
import Form from './ui/Form'
import List from './ui/List'

async function getPosts(): Promise<Post[]> {
  return await db.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}

const GuestBook = async ({}) => {
  const posts = await getPosts()

  if (!posts) {
    return 'noo :/' //TODO: Add error handler here
  }
  return (
    <div>
      <Heading type="h1">Guestbook</Heading>
      <p className="text-xl text-zinc-400 mt-10">
        Make your mark in my guestbook by sharing your thoughts with me. Whether
        it's a shoutout, a tidbit of information, a sage suggestion, or a
        chuckle-worthy joke, I'm eager to read what you have in store.
      </p>
      <Form />
      <List posts={posts} />
    </div>
  )
}

export default GuestBook
