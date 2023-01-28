import { Heading } from '@/components/Heading'
import { useMotionValue, motion } from 'framer-motion'
import { useLayoutEffect, useRef } from 'react'
import { listItemVariants } from './constants'
import GradientFollower from './GradientFollower'

export enum GradientPositions {
  topRight = 'top-right',
  topLeft = 'top-left',
  bottomRight = 'bottom-right',
  bottomLeft = 'bottom-left',
}

export interface IResource {
  name: string
  icon: JSX.Element
  desc: string
  pattern: {
    y: number
  }
  position: GradientPositions
}

const { topRight, topLeft, bottomRight, bottomLeft } = GradientPositions

const StackCard = ({ resource }: { resource: IResource }) => {
  const listRef = useRef<HTMLLIElement | null>(null)
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  useLayoutEffect(() => {
    const setMouseXandY = (x: number, y: number) => {
      mouseX.set(x)
      mouseY.set(y)
    }

    if (listRef.current) {
      const {
        top,
        width,
        height,
        y: clientY,
      } = listRef.current.getBoundingClientRect()

      switch (resource.position) {
        case bottomRight:
          setTimeout(() => {
            setMouseXandY(width, height)
          }, 0)
          break
        case bottomLeft:
          setTimeout(() => {
            setMouseXandY(0, height)
          }, 0)
          break
        case topRight:
          setTimeout(() => {
            setMouseXandY(width, clientY - top)
          }, 0)
          break
        case topLeft:
          setTimeout(() => {
            setMouseXandY(0, 0)
          }, 0)
          break
        default:
          break
      }
    }
  }, [])

  function onMouseMove(event: React.MouseEvent<HTMLElement>) {
    const { currentTarget, clientX, clientY } = event
    if (currentTarget) {
      let { left, top } = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }
  }

  return (
    <motion.li
      ref={listRef}
      variants={listItemVariants}
      key={resource.name}
      onMouseMove={onMouseMove}
      className="pb-4 group relative flex rounded-2xl  transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <GradientFollower {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pt-16 pb-4">
        {resource.icon}
        <Heading type="h3" className="mt-6">
          {resource.name}
        </Heading>
        <p className="mt-1 text-white ">{resource.desc}</p>
      </div>
    </motion.li>
  )
}

export default StackCard
