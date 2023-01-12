import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl"
      >
        Hello world!
      </motion.h1>
    </div>
  )
}
