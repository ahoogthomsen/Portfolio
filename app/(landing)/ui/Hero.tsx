'use client'

import AnimatedText from './AnimatedText'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <AnimatedText
        tag="h1"
        text={[`Hi there,`, `I'm Alexander`]}
        className="font-semibold text-6xl md:text-8xl"
      />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, type: 'spring' }}
        className="mt-10 text-xl text-zinc-400 flex items-center"
      >
        <p>
          I'm a{' '}
          <span className="text-emerald-600 font-semibold">
            frontend developer
          </span>{' '}
          who loves creating visually appealing digital experiences. Coding and
          a warm cup of coffee are my perfect companions. Take a look at my
          portfolio and let's make something great together!
        </p>
        <Image
          alt="Avatar"
          width={150}
          height={150}
          src="/avatar.png"
          className="rounded-full"
        />
      </motion.div>
    </>
  )
}

export default Hero
