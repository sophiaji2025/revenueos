import * as React from 'react'

import { cn } from '../../lib/utils'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  initials: string
  gradient?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses: Record<NonNullable<AvatarProps['size']>, string> = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-16 w-16 text-lg',
}

export function Avatar({ initials, gradient = 'from-indigo-500 via-violet-500 to-fuchsia-500', size = 'md', className, ...props }: AvatarProps): JSX.Element {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-2xl bg-gradient-to-br font-semibold text-white shadow-lg shadow-black/25',
        gradient,
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {initials}
    </div>
  )
}
