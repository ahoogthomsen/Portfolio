import { FC, useId } from 'react'

interface IProps {
  width: number
  height: number
  x?: number | string
  y?: number | string
  className?: string
}
const Gradient: FC<IProps> = ({
  width,
  height,
  x,
  y,
  className,
  ...props
}: {
  width: number
  height: number
  x?: number | string
  y?: number | string
  className?: string
}) => {
  let patternId = useId()

  return (
    <svg aria-hidden="true" className={className} {...props}>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
    </svg>
  )
}

export default Gradient
