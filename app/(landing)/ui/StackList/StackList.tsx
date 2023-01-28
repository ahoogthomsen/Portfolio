'use client'

import { Heading } from '@/components/Heading'
import { motion } from 'framer-motion'

import { techItems, unorderedListVariants } from './constants'
import StackCard from './StackCard'

const StackList = () => {
  return (
    <div className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Heading type="h2">The portfolio</Heading>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-xl text-zinc-400 max-w-2xl">
          This project utilizes various technologies, including next-auth, API
          routes, Vercel edge functions, tailwindcss, framer-motion and Nextjs
          13.
        </p>
      </motion.div>

      <motion.ul
        variants={unorderedListVariants}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 mt-8 gap-6 grid-col-1"
      >
        {techItems.map((resource) => (
          <StackCard resource={resource} key={resource.name} />
        ))}
      </motion.ul>
    </div>
  )
}

export default StackList
