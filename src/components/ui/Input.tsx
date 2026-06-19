import * as React from 'react'

import { cn } from '../../lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20',
        className,
      )}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export { Input }
