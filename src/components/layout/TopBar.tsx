import { Bell, Search, Sparkles } from 'lucide-react'

import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export function TopBar(): JSX.Element {
  return (
    <header className="fixed left-60 right-0 top-0 z-20 border-b border-white/[0.08] bg-[#0a0d14]/80 px-6 py-4 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div className="relative max-w-xl flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
          <Input className="pl-10 pr-20" placeholder="Search accounts, contacts, or plays" />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-1 text-[10px] uppercase tracking-wide text-white/45">
            ⌘K
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/70 transition hover:bg-white/[0.06] hover:text-white"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-fuchsia-500" />
          </button>
          <Button>
            <Sparkles className="h-4 w-4" />
            Ask AI
          </Button>
        </div>
      </div>
    </header>
  )
}
