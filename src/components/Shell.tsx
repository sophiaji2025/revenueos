import { type ReactNode } from 'react'

import { Sidebar } from './layout/Sidebar'
import { TopBar } from './layout/TopBar'

interface ShellProps {
  autonomousMode: boolean
  children: ReactNode
}

export function Shell({ autonomousMode, children }: ShellProps): JSX.Element {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Sidebar autonomousMode={autonomousMode} />
      <TopBar />
      <main className="pl-60 pt-[76px]">
        <div className="min-h-[calc(100vh-76px)] bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),_transparent_30%),radial-gradient(circle_at_right,_rgba(217,70,239,0.12),_transparent_25%)] p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
