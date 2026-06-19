import { Building2, DollarSign, Mail, Sparkles, Users, Zap } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { Avatar } from '../ui/Avatar'
import { Badge } from '../ui/Badge'
import { cn } from '../../lib/utils'

interface SidebarProps {
  autonomousMode: boolean
}

const navItems = [
  { to: '/', label: 'Mission Control', icon: Zap },
  { to: '/companies', label: 'Companies', icon: Building2 },
  { to: '/contacts', label: 'Contacts', icon: Users },
  { to: '/outreach', label: 'Outreach', icon: Mail },
  { to: '/deals', label: 'Deals', icon: DollarSign },
]

export function Sidebar({ autonomousMode }: SidebarProps): JSX.Element {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex w-60 flex-col border-r border-white/[0.08] bg-[#0b0f16]/95 px-4 py-5 backdrop-blur-xl">
      <div className="flex items-center gap-3 px-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-violet-900/40">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div>
          <div className="text-lg font-semibold text-white">RevenueOS</div>
          <div className="text-xs text-white/45">AI Sales Operating System</div>
        </div>
      </div>

      <nav className="mt-8 flex flex-1 flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-all',
                  isActive
                    ? 'bg-white/[0.08] text-white shadow-lg shadow-black/15'
                    : 'text-white/55 hover:bg-white/[0.04] hover:text-white/85',
                )
              }
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          )
        })}

        <div className="mt-auto rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-white">Autonomous Mode</div>
              <div className="text-xs text-white/45">AI agents coordinating live plays</div>
            </div>
            <Badge variant={autonomousMode ? 'success' : 'outline'}>{autonomousMode ? 'ON' : 'OFF'}</Badge>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-white/55">
            <span className={cn('h-2 w-2 rounded-full', autonomousMode ? 'bg-emerald-400 pulse-glow' : 'bg-white/25')} />
            {autonomousMode ? 'Agents actively executing' : 'Autonomous assist paused'}
          </div>
        </div>
      </nav>

      <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3">
        <Avatar initials="MC" gradient="from-indigo-500 via-violet-500 to-fuchsia-500" />
        <div>
          <div className="text-sm font-medium text-white">Maya Chen</div>
          <div className="text-xs text-white/45">Revenue Director</div>
        </div>
      </div>
    </aside>
  )
}
