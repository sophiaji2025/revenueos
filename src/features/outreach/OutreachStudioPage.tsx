import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, BarChart2, Zap, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const sequences = [
  { id: 1, name: 'VP Eng — Platform Tools', contacts: 24, status: 'active', replies: 7, meetings: 3, steps: 6, color: 'from-brand-500 to-violet-500' },
  { id: 2, name: 'Head of RevOps — AI Sales', contacts: 18, status: 'active', replies: 9, meetings: 4, steps: 5, color: 'from-emerald-500 to-cyan-500' },
  { id: 3, name: 'CTO — Developer Productivity', contacts: 11, status: 'draft', replies: 0, meetings: 0, steps: 7, color: 'from-violet-500 to-pink-500' },
  { id: 4, name: 'CFO — ROI Framing', contacts: 8, status: 'paused', replies: 2, meetings: 1, steps: 4, color: 'from-amber-500 to-orange-500' },
];

const stepTypes = [
  { type: 'Email', icon: Mail, color: 'text-brand-400 bg-brand-600/20' },
  { type: 'LinkedIn', icon: Linkedin, color: 'text-cyan-400 bg-cyan-600/20' },
  { type: 'Email', icon: Mail, color: 'text-brand-400 bg-brand-600/20' },
  { type: 'AI Personalize', icon: Zap, color: 'text-violet-400 bg-violet-600/20' },
  { type: 'Email', icon: Mail, color: 'text-brand-400 bg-brand-600/20' },
  { type: 'LinkedIn', icon: Linkedin, color: 'text-cyan-400 bg-cyan-600/20' },
];

export function OutreachStudioPage() {
  return (
    <div className="p-5 space-y-5 overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Sequence list */}
        <div className="lg:col-span-1 space-y-3">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Sequences</h3>
          {sequences.map((seq, i) => (
            <motion.div
              key={seq.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <Card className="glass-hover cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-br ${seq.color}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-200 truncate">{seq.name}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{seq.contacts} contacts · {seq.steps} steps</p>
                    </div>
                    <Badge variant={seq.status === 'active' ? 'emerald' : seq.status === 'draft' ? 'outline' : 'amber'}>
                      {seq.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="text-center p-1.5 rounded bg-white/[0.03] border border-white/[0.05]">
                      <p className="text-sm font-bold text-brand-400">{seq.replies}</p>
                      <p className="text-[9px] text-slate-500">Replies</p>
                    </div>
                    <div className="text-center p-1.5 rounded bg-white/[0.03] border border-white/[0.05]">
                      <p className="text-sm font-bold text-emerald-400">{seq.meetings}</p>
                      <p className="text-[9px] text-slate-500">Meetings</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Sequence builder */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <div className="p-5 border-b border-white/[0.06]">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-200">VP Eng — Platform Tools</h3>
                <Button variant="brand" size="sm">
                  <Play className="w-3.5 h-3.5" /> Launch
                </Button>
              </div>
            </div>
            <CardContent className="p-5">
              <div className="space-y-3">
                {stepTypes.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                    >
                      <span className="w-5 h-5 rounded-full bg-white/[0.08] text-slate-400 text-[10px] font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${step.color}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-slate-200">{step.type}</p>
                        {i === 0 && <p className="text-[10px] text-slate-500">Initial outreach — AI personalized</p>}
                        {i === 1 && <p className="text-[10px] text-slate-500">LinkedIn connect + message (Day 3)</p>}
                        {i === 2 && <p className="text-[10px] text-slate-500">Follow-up with case study (Day 7)</p>}
                        {i === 3 && <p className="text-[10px] text-slate-500 flex items-center gap-1"><Zap className="w-3 h-3 text-violet-400" /> AI generates custom insight (Day 10)</p>}
                        {i === 4 && <p className="text-[10px] text-slate-500">Breakup email — last touch (Day 14)</p>}
                        {i === 5 && <p className="text-[10px] text-slate-500">LinkedIn engagement comment (Day 17)</p>}
                      </div>
                      {i === 0 && <Badge variant="emerald">AI-enhanced</Badge>}
                      {i === 3 && <Badge variant="violet">AI step</Badge>}
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Analytics */}
          <Card>
            <div className="p-5 border-b border-white/[0.06]">
              <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2"><BarChart2 className="w-4 h-4 text-brand-400" /> Sequence Analytics</h3>
            </div>
            <CardContent className="p-5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Open Rate', value: '68%', delta: '+12%', color: 'text-brand-400' },
                  { label: 'Reply Rate', value: '29%', delta: '+8%', color: 'text-emerald-400' },
                  { label: 'Meeting Rate', value: '13%', delta: '+5%', color: 'text-violet-400' },
                  { label: 'AI vs Manual', value: '2.4×', delta: 'reply lift', color: 'text-cyan-400' },
                ].map(m => (
                  <div key={m.label} className="text-center p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <p className={`text-xl font-bold ${m.color}`}>{m.value}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{m.label}</p>
                    <p className="text-[9px] text-emerald-400 mt-0.5">{m.delta}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
