import * as React from 'react'

import { cn } from '../../lib/utils'

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  maxHeight?: string
}

export function ScrollArea({ className, maxHeight, style, ...props }: ScrollAreaProps): JSX.Element {
  return (
    <div
      className={cn('overflow-auto', className)}
      style={{ ...style, maxHeight }}
      {...props}
    />
  )
}
