import { motion } from 'framer-motion';
import { Check, Search, PenTool, Send, MessageSquare, CalendarCheck, ChevronRight } from 'lucide-react';
import type { ComponentType } from 'react';
import { cn } from '../../lib/utils';
import { WORKFLOW_STAGES } from '../../data/missionWorkflow';
import type { MissionState } from './useMissionSimulation';
import { BOOKED_MEETINGS } from '../../data/agentSwarm';

// Sparkles not available in lucide-react 0.358, use a star/star variant
import { Sparkles } from 'lucide-react';

const STAGE_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  Search,
  Sparkles,
  PenTool,
  Send,
  MessageSquare,
  CalendarCheck,
};

interface ExecutionWorkflowPanelProps {
  missionState: MissionState;
}

function RadialProgress({ value, max, label }: { value: number; max: number; label: string }) {
  const pct = value / max;
  const r = 36;
  const circ = 2 * Math.PI * r;
  const dash = circ * pct;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 88 88">
          <circle cx="44" cy="44" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
          <motion.circle
            cx="44" cy="44" r={r} fill="none"
            stroke="url(#meetingGrad)" strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${circ}`}
            initial={{ strokeDashoffset: circ }}
            animate={{ strokeDashoffset: circ - dash }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id="meetingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            key={value}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-2xl font-bold font-mono text-emerald-400"
          >
            {value}
          </motion.span>
          <span className="text-[10px] text-white/40 font-mono">/ {max}</span>
        </div>
      </div>
      <p className="text-[11px] text-white/60 text-center">{label}</p>
    </div>
  );
}

export function ExecutionWorkflowPanel({ missionState }: ExecutionWorkflowPanelProps) {
  const bookedCount = missionState.meetingsBooked;

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] flex-shrink-0">
        <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
        <p className="text-xs font-semibold text-white/90">Execution Pipeline</p>
        <span className="ml-auto text-[10px] font-mono text-white/40">VP ENG MISSION</span>
      </div>

      <div className="flex-1 p-4 space-y-5">
        <div>
          <p className="text-[10px] font-mono text-white/40 mb-3 uppercase tracking-wider">Pipeline Stages</p>
          <div className="flex items-center gap-1.5 flex-wrap">
            {WORKFLOW_STAGES.map((stage, i) => {
              const Icon = STAGE_ICONS[stage.icon] ?? Search;
              const isDone = stage.status === 'done';
              const isRunning = stage.status === 'running';
              return (
                <div key={stage.id} className="flex items-center gap-1.5">
                  <div className={cn(
                    'flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[11px] font-mono transition-all',
                    isDone && 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
                    isRunning && 'bg-violet-500/10 border-violet-500/40 text-violet-300 shadow-sm shadow-violet-500/20',
                    stage.status === 'queued' && 'bg-white/[0.03] border-white/[0.06] text-white/30',
                  )}>
                    {isDone ? (
                      <Check className="w-3 h-3" />
                    ) : (
                      <Icon className={cn('w-3 h-3', isRunning && 'animate-pulse')} />
                    )}
                    {stage.label}
                  </div>
                  {i < WORKFLOW_STAGES.length - 1 && (
                    <ChevronRight className="w-3 h-3 text-white/20 flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
          <p className="text-[10px] font-mono text-white/40 mb-4 uppercase tracking-wider">Mission Target</p>
          <div className="flex items-center gap-6 justify-center">
            <RadialProgress value={bookedCount} max={15} label="Meetings Booked" />
            <div className="space-y-2.5 flex-1">
              {[
                { label: 'Companies Scanned', value: missionState.companiesScanned, max: 1284, color: 'from-cyan-500 to-blue-600' },
                { label: 'ICP-Matched (Series B)', value: missionState.icpMatched, max: 73, color: 'from-violet-500 to-purple-600' },
                { label: 'Contacts Found', value: missionState.contactsFound, max: 73, color: 'from-fuchsia-500 to-pink-600' },
                { label: 'Emails Sent', value: missionState.emailsSent, max: 73, color: 'from-indigo-500 to-violet-600' },
              ].map(({ label, value, max, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-[10px] font-mono mb-1">
                    <span className="text-white/50">{label}</span>
                    <span className="text-white/70">{value.toLocaleString()} / {max.toLocaleString()}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      className={cn('h-full rounded-full bg-gradient-to-r', color)}
                      animate={{ width: `${Math.min(100, (value / max) * 100)}%` }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
          <p className="text-[10px] font-mono text-white/40 mb-3 uppercase tracking-wider">Outreach Generation</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Emails Generated', value: missionState.emailsGenerated, total: 73, color: 'text-indigo-400' },
              { label: 'LinkedIn DMs', value: missionState.linkedinGenerated, total: 73, color: 'text-violet-400' },
              { label: 'Emails Sent', value: missionState.emailsSent, total: 73, color: 'text-emerald-400' },
            ].map(({ label, value, total, color }) => (
              <div key={label} className="text-center">
                <motion.p
                  key={value}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={cn('text-xl font-bold font-mono', color)}
                >
                  {value}
                </motion.p>
                <p className="text-[9px] text-white/30 font-mono">/ {total}</p>
                <p className="text-[10px] text-white/50 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Booked Meetings</p>
            <span className="text-[10px] font-mono text-emerald-400">{bookedCount} / 15</span>
          </div>
          <div className="space-y-2">
            {BOOKED_MEETINGS.slice(0, bookedCount).map((m, i) => (
              <motion.div
                key={m.contact}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2.5 py-1.5 border-b border-white/[0.04] last:border-0"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
                  {m.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-white/80 truncate">{m.contact}</p>
                  <p className="text-[10px] text-white/40 truncate">{m.title} · {m.company}</p>
                </div>
                <span className="text-[10px] font-mono text-white/40 flex-shrink-0">{m.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
