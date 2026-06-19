import { motion } from 'framer-motion';
import { Building2, TrendingUp, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';
import { COMPANIES_DATA } from '../../data/companies';

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 9 ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
    : score >= 8 ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30'
    : 'text-amber-400 bg-amber-500/10 border-amber-500/30';
  return (
    <span className={cn('text-xs font-mono font-bold px-2 py-0.5 rounded-full border', color)}>
      {score.toFixed(1)}
    </span>
  );
}

export function CompanyIntelligencePage() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.06] bg-white/[0.02] flex-shrink-0">
        <Building2 className="w-5 h-5 text-cyan-400" />
        <div>
          <h1 className="text-sm font-bold text-white">Company Intelligence</h1>
          <p className="text-[11px] text-white/40 font-mono">{COMPANIES_DATA.length} ICP-matched accounts</p>
        </div>
        <div className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono text-emerald-400">Research Agent Active</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 gap-4 max-w-4xl">
          {COMPANIES_DATA.map((company, i) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 hover:border-white/[0.15] hover:bg-white/[0.05] transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-white/[0.08] flex items-center justify-center text-lg font-bold text-white/70 flex-shrink-0">
                  {company.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-sm font-bold text-white">{company.name}</h2>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono">{company.stage}</span>
                    <div className="ml-auto flex items-center gap-1.5">
                      <span className="text-[10px] text-white/40 font-mono">ICP</span>
                      <ScoreBadge score={company.icp_score} />
                    </div>
                  </div>
                  <p className="text-[11px] text-white/50 mb-3 line-clamp-2">{company.description}</p>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-white/50">
                      <TrendingUp className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-mono font-semibold">+{company.growth}%</span>
                      <span>growth</span>
                    </div>
                    <div className="text-[11px] text-white/40 font-mono">{company.raised} raised</div>
                    <div className="text-[11px] text-white/40 font-mono">{company.employees} employees</div>
                    <div className="text-[11px] text-white/40">{company.hq}</div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {company.signals.map((signal, si) => (
                      <div key={si} className="flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20">
                        <Zap className="w-2.5 h-2.5 text-amber-400" />
                        <span className="text-[10px] text-amber-300/80">{signal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
