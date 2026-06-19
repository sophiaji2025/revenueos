import { motion } from 'framer-motion';
import { DollarSign, TrendingUp } from 'lucide-react';
import { cn } from '../../lib/utils';
import { DEALS_DATA, type Deal } from '../../data/deals';

const STAGES: { key: Deal['stage']; label: string; color: string }[] = [
  { key: 'prospecting', label: 'Prospecting', color: 'border-t-white/20' },
  { key: 'qualified', label: 'Qualified', color: 'border-t-cyan-500' },
  { key: 'proposal', label: 'Proposal', color: 'border-t-violet-500' },
  { key: 'negotiation', label: 'Negotiation', color: 'border-t-amber-500' },
  { key: 'closed', label: 'Closed Won', color: 'border-t-emerald-500' },
];

const PROB_COLOR: (p: number) => string = (p) =>
  p >= 80 ? 'text-emerald-400' : p >= 60 ? 'text-cyan-400' : p >= 40 ? 'text-amber-400' : 'text-white/40';

function DealCard({ deal, index }: { deal: Deal; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-3.5 hover:border-white/[0.15] hover:bg-white/[0.05] transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <p className="text-xs font-bold text-white">{deal.company}</p>
          <p className="text-[10px] text-white/40">{deal.contact}</p>
        </div>
        <span className="text-[11px] font-mono font-bold text-white/70">{deal.arr}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-white/30 font-mono">{deal.closeDate}</span>
        <span className={cn('text-[11px] font-mono font-semibold', PROB_COLOR(deal.probability))}>
          {deal.probability}%
        </span>
      </div>
      <div className="mt-2 h-1 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
          animate={{ width: `${deal.probability}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export function DealRoomPage() {
  const totalPipeline = DEALS_DATA.reduce((sum, d) => {
    const val = parseInt(d.value.replace(/[$,]/g, ''));
    return sum + val;
  }, 0);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.06] bg-white/[0.02] flex-shrink-0">
        <DollarSign className="w-5 h-5 text-emerald-400" />
        <div>
          <h1 className="text-sm font-bold text-white">Deal Room</h1>
          <p className="text-[11px] text-white/40 font-mono">{DEALS_DATA.length} active deals</p>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-bold font-mono text-white">
              ${(totalPipeline / 1000).toFixed(0)}K
            </span>
            <span className="text-[11px] text-white/40">total pipeline</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto overflow-y-hidden p-6">
        <div className="flex gap-4 h-full min-w-max">
          {STAGES.map(stage => {
            const stageDeals = DEALS_DATA.filter(d => d.stage === stage.key);
            const stageValue = stageDeals.reduce((sum, d) => {
              const val = parseInt(d.value.replace(/[$,]/g, ''));
              return sum + val;
            }, 0);
            return (
              <div key={stage.key} className="w-64 flex flex-col">
                <div className={cn('border-t-2 pt-3 mb-3', stage.color)}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-semibold text-white/70">{stage.label}</h3>
                    <span className="text-[10px] font-mono text-white/40">{stageDeals.length}</span>
                  </div>
                  <p className="text-[10px] font-mono text-white/30 mt-0.5">
                    {stageValue > 0 ? `$${(stageValue / 1000).toFixed(0)}K` : '—'}
                  </p>
                </div>
                <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                  {stageDeals.map((deal, i) => (
                    <DealCard key={deal.id} deal={deal} index={i} />
                  ))}
                  {stageDeals.length === 0 && (
                    <div className="flex items-center justify-center h-20 rounded-xl border border-dashed border-white/[0.06] text-[11px] text-white/20">
                      No deals
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
