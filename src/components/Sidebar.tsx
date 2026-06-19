import { NavLink } from 'react-router-dom';
import { Rocket, Building2, Users, Send, DollarSign, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const NAV_ITEMS = [
  { to: '/', label: 'Mission Control', icon: Rocket, exact: true },
  { to: '/companies', label: 'Company Intel', icon: Building2 },
  { to: '/contacts', label: 'Contact Intel', icon: Users },
  { to: '/outreach', label: 'Outreach Studio', icon: Send },
  { to: '/deals', label: 'Deal Room', icon: DollarSign },
];

export function Sidebar() {
  return (
    <aside className="w-56 flex-shrink-0 flex flex-col bg-[#08090b] border-r border-white/[0.06] h-full">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-5 border-b border-white/[0.06]">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center">
          <Zap className="w-3.5 h-3.5 text-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-white tracking-tight">RevenueOS</p>
          <p className="text-[9px] text-white/30 font-mono tracking-widest uppercase">Autonomous GTM</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-3 space-y-0.5 overflow-y-auto">
        {NAV_ITEMS.map(({ to, label, icon: Icon, exact }) => (
          <NavLink
            key={to}
            to={to}
            end={exact}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all group',
                isActive
                  ? 'bg-white/[0.08] text-white border border-white/[0.1]'
                  : 'text-white/50 hover:text-white/80 hover:bg-white/[0.04]'
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon className={cn(
                  'w-4 h-4 flex-shrink-0 transition-colors',
                  isActive ? 'text-violet-400' : 'text-white/30 group-hover:text-white/60'
                )} />
                <span className="font-medium text-[13px] truncate">{label}</span>
                {to === '/' && (
                  <div className="ml-auto flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-xs font-bold text-white">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-white/80 truncate">Alex Rivera</p>
            <p className="text-[9px] text-white/30 font-mono truncate">Sales Lead · Acme Corp</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
