import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const badgeVariants = cva('inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium', {
  variants: {
    variant: {
      default: 'border-violet-500/30 bg-violet-500/15 text-violet-100',
      success: 'border-emerald-500/30 bg-emerald-500/15 text-emerald-100',
      warning: 'border-amber-500/30 bg-amber-500/15 text-amber-100',
      danger: 'border-red-500/30 bg-red-500/15 text-red-100',
      info: 'border-cyan-500/30 bg-cyan-500/15 text-cyan-100',
      outline: 'border-white/[0.12] bg-transparent text-white/70',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps): JSX.Element {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}
