import * as React from 'react'

import { cn } from '../../lib/utils'

interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function Tooltip({ content, children, className }: TooltipProps): JSX.Element {
  return (
    <div className={cn('group relative inline-flex', className)}>
      {children}
      <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-max -translate-x-1/2 rounded-lg border border-white/[0.08] bg-[#11151d] px-2 py-1 text-xs text-white opacity-0 shadow-xl transition group-hover:opacity-100">
        {content}
      </div>
    </div>
  )
}
