import * as React from 'react'

import { cn } from '../../lib/utils'

interface TabsContextValue {
  value: string
  setValue: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

function useTabsContext(): TabsContextValue {
  const context = React.useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs components must be used within <Tabs>')
  }
  return context
}

interface TabsProps {
  defaultValue: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  children: React.ReactNode
}

export function Tabs({ defaultValue, value, onValueChange, className, children }: TabsProps): JSX.Element {
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const activeValue = value ?? internalValue

  const setValue = (nextValue: string) => {
    if (value === undefined) {
      setInternalValue(nextValue)
    }
    onValueChange?.(nextValue)
  }

  return (
    <TabsContext.Provider value={{ value: activeValue, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={cn('inline-flex rounded-2xl border border-white/[0.08] bg-white/[0.03] p-1', className)}
      {...props}
    />
  )
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

export function TabsTrigger({ className, value, children, ...props }: TabsTriggerProps): JSX.Element {
  const context = useTabsContext()
  const isActive = context.value === value

  return (
    <button
      type="button"
      className={cn(
        'rounded-xl px-4 py-2 text-sm font-medium transition-all',
        isActive ? 'bg-white/[0.08] text-white shadow-lg' : 'text-white/55 hover:text-white/85',
        className,
      )}
      onClick={() => context.setValue(value)}
      {...props}
    >
      {children}
    </button>
  )
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export function TabsContent({ className, value, children, ...props }: TabsContentProps): JSX.Element | null {
  const context = useTabsContext()

  if (context.value !== value) {
    return null
  }

  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}
