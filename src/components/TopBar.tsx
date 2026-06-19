import { Bell, Search } from 'lucide-react';

export function TopBar() {
  return (
    <header className="h-10 flex-shrink-0 flex items-center gap-3 px-4 border-b border-white/[0.06] bg-white/[0.01]">
      <div className="flex items-center gap-2 flex-1 max-w-xs">
        <Search className="w-3.5 h-3.5 text-white/20" />
        <input
          placeholder="Search..."
          className="flex-1 bg-transparent text-xs text-white/60 placeholder-white/20 outline-none"
        />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <button className="relative w-7 h-7 rounded-lg hover:bg-white/[0.06] flex items-center justify-center transition-colors">
          <Bell className="w-3.5 h-3.5 text-white/30" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-violet-500" />
        </button>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono text-emerald-400">6 agents online</span>
        </div>
      </div>
    </header>
  );
}
