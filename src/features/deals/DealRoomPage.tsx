import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, AlertTriangle, Zap, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const stages = [
  { id: 'prospect', name: 'Prospecting', color: 'from-slate-500 to-slate-400' },
  { id: 'engaged', name: 'Engaged', color: 'from-brand-500 to-brand-400' },
  { id: 'demo', name: 'Demo', color: 'from-cyan-500 to-brand-500' },
  { id: 'proposal', name: 'Proposal', color: 'from-violet-500 to-pink-500' },
  { id: 'negotiate', name: 'Negotiation', color: 'from-emerald-500 to-cyan-500' },
];

const deals = [
  { id: 1, company: 'Vercel', contact: 'Sarah Chen', value: '$180K', stage: 'proposal', probability: 72, risk: 'low', aiSignal: 'Champion engaged — schedule exec review', color: 'from-brand-500 to-violet-500' },
  { id: 2, company: 'Ramp', contact: 'Nina Patel', value: '$240K', stage: 'demo', probability: 85, risk: 'low', aiSignal: 'High engagement — move to proposal', color: 'from-emerald-500 to-cyan-500' },
  { id: 3, company: 'Datadog', contact: 'Elena Vasquez', value: '$320K', stage: 'negotiate', probability: 91, risk: 'low', aiSignal: 'Pricing page 4× visits — send proposal now', color: 'from-violet-500 to-pink-500' },
  { id: 4, company: 'Linear', contact: 'Alex Morgan', value: '$85K', stage: 'engaged', probability: 48, risk: 'medium', aiSignal: 'Slow engagement — add technical champion', color: 'from-amber-500 to-orange-500' },
  { id: 5, company: 'Figma', contact: 'Tom Harrison', value: '$110K', stage: 'prospect', probability: 35, risk: 'medium', aiSignal: 'No reply in 2 weeks — try LinkedIn', color: 'from-cyan-500 to-brand-500' },
  { id: 6, company: 'Notion', contact: 'Chloe Wu', value: '$65K', stage: 'engaged', probability: 52, risk: 'low', aiSignal: 'Mid-funnel stall — share social proof', color: 'from-pink-500 to-rose-500' },
];

function getInitial(name: string) { return name[0].toUpperCase(); }
function getGradient(name: string) {
  const g = ['from-brand-500 to-violet-500','from-emerald-500 to-cyan-500','from-violet-500 to-pink-500','from-amber-500 to-orange-500'];
  return g[name.charCodeAt(0) % g.length];
}

export function DealRoomPage() {
  return (
    <div className="p-5 overflow-y-auto space-y-5">
      {/* Pipeline summary */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {stages.map(stage => {
          const stageDeals = deals.filter(d => d.stage === stage.id);
          const total = stageDeals.reduce((sum, d) => sum + parseInt(d.value.replace(/[$K,]/g, '')) * 1000, 0);
          return (
            <div key={stage.id} className="glass rounded-xl p-3 text-center">
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">{stage.name}</p>
              <p className={`text-lg font-bold mt-1 bg-gradient-to-r ${stage.color} bg-clip-text text-transparent`}>{stageDeals.length}</p>
              <p className="text-[10px] text-slate-400">${(total / 1000).toFixed(0)}K</p>
            </div>
          );
        })}
      </div>

      {/* Deals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {deals.map((deal, i) => (
          <motion.div
            key={deal.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <Card className="glass-hover cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 bg-gradient-to-br', getGradient(deal.company))}>
                    {getInitial(deal.company)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div>
                        <p className="text-sm font-semibold text-white">{deal.company}</p>
                        <p className="text-[11px] text-slate-400">{deal.contact}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-emerald-400">{deal.value}</p>
                        <Badge variant={deal.stage === 'negotiate' ? 'emerald' : deal.stage === 'proposal' ? 'violet' : 'brand'}>
                          {stages.find(s => s.id === deal.stage)?.name}
                        </Badge>
                      </div>
                    </div>

                    {/* Probability */}
                    <div className="mt-3 space-y-1">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-slate-500">Win probability</span>
                        <span className={deal.probability >= 75 ? 'text-emerald-400' : deal.probability >= 50 ? 'text-amber-400' : 'text-slate-400'}>
                          {deal.probability}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                        <motion.div
                          className={cn('h-full rounded-full bg-gradient-to-r', deal.probability >= 75 ? 'from-emerald-500 to-cyan-400' : deal.probability >= 50 ? 'from-amber-500 to-orange-400' : 'from-slate-500 to-slate-400')}
                          initial={{ width: 0 }}
                          animate={{ width: `${deal.probability}%` }}
                          transition={{ duration: 0.8, delay: i * 0.06 + 0.3 }}
                        />
                      </div>
                    </div>

                    {/* AI signal */}
                    <div className="flex items-start gap-1.5 mt-2 p-2 rounded-lg bg-brand-600/10 border border-brand-500/20">
                      <Zap className="w-3 h-3 text-brand-400 flex-shrink-0 mt-0.5" />
                      <p className="text-[10px] text-brand-300">{deal.aiSignal}</p>
                      <ArrowRight className="w-3 h-3 text-brand-400 ml-auto flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
