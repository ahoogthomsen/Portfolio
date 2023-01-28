import { MotionValue, useMotionTemplate, motion } from 'framer-motion'

const GradientFollower = ({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}) => {
  let maskImage = useMotionTemplate`radial-gradient(200px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage, opacity: 0.4 }

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r transition duration-300 group-hover:opacity-100 dark:from-[#3c5355] dark:to-[#3fcf8e]"
        style={style}
      />
    </div>
  )
}

export default GradientFollower
