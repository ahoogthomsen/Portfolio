import { FC, ReactNode } from 'react'
import { cn } from 'utils/cn'

type Type = 'h1' | 'h2' | 'h3'

interface IProps {
  children: ReactNode
  className?: string
  type: Type
}

const TYPE_STYLE = {
  ['h1']: 'font-semibold text-6xl md:text-8xl',
  ['h2']: 'text-3xl md:text-5xl font-bold ',
  ['h3']: 'font-semibold leading-7 text-lg',
}

export const Heading: FC<IProps> = ({
  children,
  className = '',
  type: Type,
}: IProps) => {
  const style = TYPE_STYLE[Type]
  return <Type className={cn(style, className)}>{children}</Type>
}
