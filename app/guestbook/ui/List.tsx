'use client'
import { motion } from 'framer-motion'
import { Post } from '@prisma/client'
import { format } from 'date-fns'
import { FC } from 'react'

interface ListProps {
  posts: Post[]
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const List: FC<ListProps> = ({ posts }) => {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-8"
    >
      {posts.map((post) => {
        return (
          <motion.li
            variants={item}
            key={post.id}
            className="flex flex-col space-y-1 mb-4"
          >
            <div className="w-full">
              <p className="text-emerald-500 mr-1 text-lg mb-1 block font-bold">
                {post.author}
              </p>
              <p>{post.message}</p>
              <time className="text-xs text-slate-300">
                {format(new Date(post.createdAt), 'd MMM yyyy')}
              </time>
            </div>
          </motion.li>
        )
      })}
    </motion.ul>
  )
}

export default List
