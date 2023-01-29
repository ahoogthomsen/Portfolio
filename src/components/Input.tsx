import { forwardRef } from 'react'
import { cn } from 'utils/cn'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          'flex h-12 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-200 dark:focus:ring-offset-slate-900 dark:hover:ring-offset-slate-50  dark:hover:ring-offset-2 dark:hover:ring-2',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export default Input
