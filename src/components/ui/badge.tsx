import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'brand' | 'emerald' | 'violet' | 'cyan' | 'red' | 'amber' | 'outline';
}

const variantStyles: Record<string, string> = {
  default: 'bg-slate-700/60 text-slate-300 border-slate-600/40',
  brand: 'bg-brand-600/20 text-brand-300 border-brand-500/30',
  emerald: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  violet: 'bg-violet-500/15 text-violet-400 border-violet-500/25',
  cyan: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/25',
  red: 'bg-red-500/15 text-red-400 border-red-500/25',
  amber: 'bg-amber-500/15 text-amber-400 border-amber-500/25',
  outline: 'bg-transparent text-slate-400 border-slate-600/50',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium border',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
);
Badge.displayName = 'Badge';
