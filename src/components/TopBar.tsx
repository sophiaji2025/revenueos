import { useLocation } from 'react-router-dom';
import { Bell, Search } from 'lucide-react';

const routeTitles: Record<string, { title: string; subtitle: string }> = {
  '/': { title: 'Mission Control', subtitle: 'AI Agent Dashboard' },
  '/companies': { title: 'Company Intelligence', subtitle: 'AI-powered account insights' },
  '/contacts': { title: 'Contact Intelligence', subtitle: 'Superhuman prospect profiles' },
  '/outreach': { title: 'Outreach Studio', subtitle: 'Intelligent sequence builder' },
  '/deals': { title: 'Deal Room', subtitle: 'Pipeline and opportunity intelligence' },
};

export function TopBar() {
  const { pathname } = useLocation();
  const info = routeTitles[pathname] ?? { title: 'RevenueOS', subtitle: '' };

  return (
    <header className="h-14 flex-shrink-0 flex items-center justify-between px-6 border-b border-white/[0.06] bg-slate-950/60 backdrop-blur-sm">
      <div>
        <h1 className="text-sm font-semibold text-slate-100">{info.title}</h1>
        <p className="text-[11px] text-slate-500">{info.subtitle}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors"
          aria-label="Search"
        >
          <Search className="w-4 h-4" />
        </button>
        <button
          className="relative w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-brand-400" />
        </button>
        <div className="w-7 h-7 rounded-full brand-gradient flex items-center justify-center text-white text-xs font-bold ml-1">
          A
        </div>
      </div>
    </header>
  );
}
