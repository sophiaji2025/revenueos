import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-900/30 hover:from-indigo-500 hover:via-violet-500 hover:to-fuchsia-500',
        secondary: 'bg-white/[0.05] text-white hover:bg-white/[0.08] border border-white/[0.08]',
        ghost: 'text-white/70 hover:bg-white/[0.05] hover:text-white',
        outline: 'border border-white/[0.12] bg-transparent text-white hover:bg-white/[0.05]',
        destructive: 'bg-red-500/90 text-white hover:bg-red-400',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-5 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
