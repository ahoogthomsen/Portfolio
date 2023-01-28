'use client'
import { Heading } from '@/components/Heading'
import { motion } from 'framer-motion'
import { cn } from 'utils/cn'

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
  }),
}

const childVariant = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 10,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
}

const AnimatedText = ({
  text,
  className = '',
  tag,
}: {
  text: string[]
  className?: string
  tag?: string
}) => {
  return (
    <Heading type="h1">
      <motion.div
        className={cn('overflow-hidden flex flex-col', className)}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {text.map((t, index) => {
          return (
            <motion.div key={index}>
              {t.split('').map((word, index) => (
                <motion.span variants={childVariant} key={index}>
                  {word}
                </motion.span>
              ))}
            </motion.div>
          )
        })}
      </motion.div>
    </Heading>
  )
}

export default AnimatedText
