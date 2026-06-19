import { motion } from 'framer-motion';
import {
  TrendingUp, Users, DollarSign, Zap, Activity,
  Bot, ArrowUpRight, CheckCircle, Clock, Target
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const kpis = [
  { label: 'Pipeline Value', value: '$4.2M', change: '+18%', trend: 'up', icon: DollarSign, color: 'text-emerald-400' },
  { label: 'Active Sequences', value: '47', change: '+5', trend: 'up', icon: Zap, color: 'text-brand-400' },
  { label: 'Meetings Booked', value: '23', change: '+7', trend: 'up', icon: Target, color: 'text-violet-400' },
  { label: 'AI Agents Active', value: '8', change: 'Live', trend: 'neutral', icon: Bot, color: 'text-cyan-400' },
];

const agentActivity = [
  { id: 1, agent: 'Prospecting Agent', action: 'Added Sarah Chen (Vercel) to sequence "VP Eng — Platform"', time: '2m ago', status: 'completed' },
  { id: 2, agent: 'Research Agent', action: 'Updated company intelligence for Ramp — found 3 new buying signals', time: '5m ago', status: 'completed' },
  { id: 3, agent: 'Email Agent', action: 'Personalized 12 emails for Datadog contacts based on recent earnings call', time: '11m ago', status: 'completed' },
  { id: 4, agent: 'Scheduling Agent', action: 'Detected reply from Elena Vasquez — proposing meeting times', time: '18m ago', status: 'processing' },
  { id: 5, agent: 'Research Agent', action: 'Monitoring Linear for funding announcement signals', time: '24m ago', status: 'active' },
];

const statusColor: Record<string, string> = {
  completed: 'text-emerald-400',
  processing: 'text-amber-400',
  active: 'text-brand-400',
};

export function MissionControlPage() {
  return (
    <div className="p-5 space-y-5 overflow-y-auto">
      {/* KPI grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[11px] text-slate-500 uppercase tracking-wider">{kpi.label}</p>
                      <p className={`text-2xl font-bold mt-1 ${kpi.color}`}>{kpi.value}</p>
                    </div>
                    <div className={`w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center`}>
                      <Icon className={`w-4.5 h-4.5 ${kpi.color}`} />
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    {kpi.trend === 'up' && <ArrowUpRight className="w-3 h-3 text-emerald-400" />}
                    <span className="text-[10px] text-emerald-400">{kpi.change}</span>
                    <span className="text-[10px] text-slate-500 ml-1">vs. last week</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Agent activity */}
        <Card>
          <div className="p-5 border-b border-white/[0.06]">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">AI Agent Activity</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-400">Live</span>
              </div>
            </div>
          </div>
          <CardContent className="p-0">
            {agentActivity.map(item => (
              <div key={item.id} className="flex items-start gap-3 p-4 border-b border-white/[0.04] last:border-0">
                <div className="w-7 h-7 rounded-lg bg-brand-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5 text-brand-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-medium text-brand-300">{item.agent}</p>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{item.action}</p>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="text-[10px] text-slate-500">{item.time}</span>
                  <span className={`text-[9px] font-medium ${statusColor[item.status]}`}>{item.status}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick pipeline summary */}
        <Card>
          <div className="p-5 border-b border-white/[0.06]">
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Pipeline Overview</h3>
          </div>
          <CardContent className="p-5 space-y-4">
            {[
              { stage: 'Prospecting', count: 34, value: '$1.1M', pct: 70, color: 'from-slate-500 to-slate-400' },
              { stage: 'Engaged', count: 18, value: '$900K', pct: 55, color: 'from-brand-500 to-violet-500' },
              { stage: 'Demo Scheduled', count: 9, value: '$780K', pct: 42, color: 'from-cyan-500 to-brand-500' },
              { stage: 'Proposal', count: 5, value: '$880K', pct: 28, color: 'from-violet-500 to-pink-500' },
              { stage: 'Negotiation', count: 3, value: '$530K', pct: 18, color: 'from-emerald-500 to-cyan-500' },
            ].map(stage => (
              <div key={stage.stage}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300">{stage.stage}</span>
                  <div className="flex gap-3 text-slate-400">
                    <span>{stage.count} deals</span>
                    <span className="text-emerald-400">{stage.value}</span>
                  </div>
                </div>
                <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${stage.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${stage.pct}%` }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
