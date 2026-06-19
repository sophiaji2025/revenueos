import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Users, DollarSign, Building2, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { companies } from '@/data/companies';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function getInitial(name: string) { return name[0].toUpperCase(); }
function getGradient(name: string) {
  const g = ['from-brand-500 to-violet-500','from-emerald-500 to-cyan-500','from-violet-500 to-pink-500','from-amber-500 to-orange-500'];
  return g[name.charCodeAt(0) % g.length];
}

export function CompanyIntelligencePage() {
  const [selected, setSelected] = useState(companies[0].id);
  const [search, setSearch] = useState('');

  const filtered = companies.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.industry.toLowerCase().includes(search.toLowerCase())
  );

  const company = companies.find(c => c.id === selected) ?? companies[0];

  return (
    <div className="flex h-full overflow-hidden">
      {/* Left rail */}
      <aside className="w-64 flex-shrink-0 flex flex-col border-r border-white/[0.06] bg-slate-950/40">
        <div className="p-3 border-b border-white/[0.06]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search companies..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white/[0.05] border border-white/[0.08] rounded-lg pl-8 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {filtered.map(c => (
            <button
              key={c.id}
              onClick={() => setSelected(c.id)}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-3 text-left transition-all border-b border-white/[0.04] border-l-2',
                selected === c.id
                  ? 'bg-brand-600/15 border-l-brand-500'
                  : 'hover:bg-white/[0.04] border-l-transparent'
              )}
            >
              <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0 bg-gradient-to-br', getGradient(c.name))}>
                {getInitial(c.name)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-200 truncate">{c.name}</p>
                <p className="text-[10px] text-slate-400 truncate">{c.industry}</p>
                <p className="text-[10px] text-slate-500 truncate">{c.stage}</p>
              </div>
              <span className={cn('text-[10px] font-bold px-1.5 py-0.5 rounded-full border flex-shrink-0',
                c.score >= 85 ? 'text-emerald-400 bg-emerald-500/15 border-emerald-500/25' :
                c.score >= 70 ? 'text-amber-400 bg-amber-500/15 border-amber-500/25' :
                'text-slate-400 bg-slate-500/15 border-slate-500/25'
              )}>{c.score}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Detail */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        <motion.div key={company.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          {/* Header */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-5 flex-wrap">
                <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 bg-gradient-to-br', getGradient(company.name))}>
                  {getInitial(company.name)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl font-bold text-white">{company.name}</h2>
                    <ExternalLink className="w-4 h-4 text-slate-500" />
                    <Badge variant="brand">{company.stage}</Badge>
                  </div>
                  <p className="text-sm text-slate-400 mt-0.5">{company.domain}</p>
                  <p className="text-xs text-slate-400 mt-2 max-w-lg">{company.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {company.tags.map(t => <Badge key={t} variant="outline">{t}</Badge>)}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className={cn('text-3xl font-black', company.score >= 85 ? 'text-emerald-400' : company.score >= 70 ? 'text-amber-400' : 'text-slate-400')}>
                    {company.score}
                  </div>
                  <p className="text-[10px] text-slate-500">Account Score</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5">
                {[
                  { label: 'Employees', value: company.employees.toLocaleString(), icon: Users },
                  { label: 'Revenue', value: company.revenue, icon: DollarSign },
                  { label: 'Total Raised', value: company.raised, icon: TrendingUp },
                  { label: 'Open Roles', value: String(company.hiringCount), icon: Building2 },
                ].map(item => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-2.5 p-3 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                      <Icon className="w-4 h-4 text-slate-500 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] text-slate-500">{item.label}</p>
                        <p className="text-sm font-semibold text-slate-200">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Funding + Hiring */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <div className="p-5 border-b border-white/[0.06]">
                <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Last Round</h3>
              </div>
              <CardContent className="p-5">
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <p className="text-xs font-medium text-emerald-400">{company.lastRaised}</p>
                </div>
                <p className="text-xs text-slate-500 mt-3">Total raised: <span className="text-slate-300">{company.raised}</span></p>
                <p className="text-xs text-slate-500">Founded: <span className="text-slate-300">{company.founded}</span></p>
                <p className="text-xs text-slate-500">HQ: <span className="text-slate-300">{company.hq}</span></p>
              </CardContent>
            </Card>

            <Card>
              <div className="p-5 border-b border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Open Roles</h3>
                  <Badge variant="amber">{company.hiringCount} total</Badge>
                </div>
              </div>
              <CardContent className="p-5">
                <div className="space-y-2">
                  {company.openRoles.map(role => (
                    <div key={role} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      <span className="text-xs text-slate-300">{role}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
