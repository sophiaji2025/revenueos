import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Building2,
  Users,
  Send,
  Briefcase,
  Zap,
} from 'lucide-react';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Mission Control', exact: true },
  { to: '/companies', icon: Building2, label: 'Company Intelligence' },
  { to: '/contacts', icon: Users, label: 'Contact Intelligence' },
  { to: '/outreach', icon: Send, label: 'Outreach Studio' },
  { to: '/deals', icon: Briefcase, label: 'Deal Room' },
];

export function Sidebar() {
  return (
    <aside className="w-60 flex-shrink-0 flex flex-col h-full bg-slate-950/80 border-r border-white/[0.06]">
      {/* Logo */}
      <div className="h-14 flex items-center gap-2.5 px-5 border-b border-white/[0.06]">
        <div className="w-7 h-7 brand-gradient rounded-lg flex items-center justify-center shadow-lg shadow-brand-600/30">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <div>
          <span className="text-sm font-bold text-white tracking-tight">Revenue</span>
          <span className="text-sm font-bold gradient-text tracking-tight">OS</span>
        </div>
        <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded brand-gradient text-white font-semibold">AI</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-3 overflow-y-auto">
        <div className="px-3 space-y-0.5">
          {navItems.map(({ to, icon: Icon, label, exact }) => (
            <NavLink
              key={to}
              to={to}
              end={exact}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150',
                  isActive
                    ? 'bg-brand-600/20 text-brand-300 border border-brand-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={cn('w-4 h-4 flex-shrink-0', isActive ? 'text-brand-400' : '')} />
                  <span className="truncate">{label}</span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full brand-gradient flex items-center justify-center text-white text-xs font-bold">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-slate-200 truncate">Alex Rivera</p>
            <p className="text-[10px] text-slate-500 truncate">Sales Rep</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" title="Online" />
        </div>
      </div>
    </aside>
  );
}
