import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Plus, ChevronRight, Mail, Linkedin, Clock, Check } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SequenceStep {
  id: string;
  type: 'email' | 'linkedin' | 'wait';
  label: string;
  subject?: string;
  body?: string;
  days?: number;
  status: 'active' | 'pending' | 'done';
}

const SEQUENCE_STEPS: SequenceStep[] = [
  {
    id: 's1',
    type: 'email',
    label: 'Day 0 — Initial Outreach',
    subject: 'Quick question about {{company}} engineering team',
    body: "Hi {{first_name}},\n\nNoticed {{company}} just raised {{funding_round}} and is scaling the engineering team rapidly — congrats!\n\nWe help VP Engineering leaders at Series B+ SaaS companies hire senior engineers 3x faster using AI-powered sourcing.\n\nWould a 20-min call this week make sense?\n\nBest,\nAlex",
    status: 'done',
  },
  {
    id: 's2',
    type: 'wait',
    label: 'Wait 3 Days',
    days: 3,
    status: 'done',
  },
  {
    id: 's3',
    type: 'linkedin',
    label: 'Day 3 — LinkedIn Connection',
    body: "Hi {{first_name}}, saw your work scaling the eng team at {{company}} — impressive growth. Would love to connect.",
    status: 'active',
  },
  {
    id: 's4',
    type: 'wait',
    label: 'Wait 2 Days',
    days: 2,
    status: 'pending',
  },
  {
    id: 's5',
    type: 'email',
    label: 'Day 5 — Follow-Up',
    subject: 'Re: Engineering hiring @ {{company}}',
    body: "Hey {{first_name}},\n\nFollowing up on my last note. I know you're busy — just wanted to share a quick case study:\n\nWe helped the VP Eng at [Similar Company] fill 8 senior roles in 6 weeks (instead of their usual 4 months).\n\nHappy to share the playbook. Worth 15 mins?\n\nAlex",
    status: 'pending',
  },
  {
    id: 's6',
    type: 'wait',
    label: 'Wait 5 Days',
    days: 5,
    status: 'pending',
  },
  {
    id: 's7',
    type: 'email',
    label: 'Day 10 — Breakup Email',
    subject: 'Closing the loop — {{company}}',
    body: "Hi {{first_name}},\n\nI'll keep this short — I've reached out a couple of times and haven't heard back, so I'll assume the timing isn't right.\n\nIf engineering hiring becomes a priority in the next quarter, I'd love to reconnect.\n\nBest of luck with the {{company}} roadmap!\n\nAlex",
    status: 'pending',
  },
];

const STEP_ICONS = {
  email: Mail,
  linkedin: Linkedin,
  wait: Clock,
};

const STEP_COLORS = {
  email: 'from-indigo-500 to-violet-600',
  linkedin: 'from-blue-500 to-cyan-600',
  wait: 'from-white/10 to-white/10',
};

export function OutreachStudioPage() {
  const [selectedStep, setSelectedStep] = useState<string>('s1');
  const selectedStepData = SEQUENCE_STEPS.find(s => s.id === selectedStep);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.06] bg-white/[0.02] flex-shrink-0">
        <Send className="w-5 h-5 text-indigo-400" />
        <div>
          <h1 className="text-sm font-bold text-white">Outreach Studio</h1>
          <p className="text-[11px] text-white/40 font-mono">VP Engineering · Series B SaaS — 7-step sequence</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
            <span className="text-[11px] font-mono text-white/50">73 contacts</span>
            <span className="text-white/20">·</span>
            <span className="text-[11px] font-mono text-emerald-400">39 active</span>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 transition-colors">
            <Plus className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-[11px] font-mono text-indigo-400">Add Step</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex min-h-0">
        {/* Sequence steps */}
        <div className="w-72 flex-shrink-0 border-r border-white/[0.06] overflow-y-auto p-4 space-y-2">
          {SEQUENCE_STEPS.map((step, i) => {
            const Icon = STEP_ICONS[step.type];
            const isSelected = selectedStep === step.id;
            const isWait = step.type === 'wait';
            return (
              <div key={step.id} className="relative">
                {i < SEQUENCE_STEPS.length - 1 && !isWait && (
                  <div className="absolute left-5 top-full w-px h-2 bg-white/10" />
                )}
                <motion.button
                  onClick={() => !isWait && setSelectedStep(step.id)}
                  className={cn(
                    'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border text-left transition-all',
                    isWait && 'opacity-60 cursor-default',
                    isSelected && !isWait
                      ? 'bg-indigo-500/10 border-indigo-500/30'
                      : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]',
                  )}
                >
                  <div className={cn(
                    'w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0',
                    isWait ? 'bg-white/[0.04]' : `bg-gradient-to-br ${STEP_COLORS[step.type]}`
                  )}>
                    {step.status === 'done' && !isWait
                      ? <Check className="w-3.5 h-3.5 text-white" />
                      : <Icon className={cn('w-3.5 h-3.5', isWait ? 'text-white/30' : 'text-white')} />
                    }
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={cn('text-[11px] font-medium truncate', isWait ? 'text-white/30' : 'text-white/80')}>
                      {step.label}
                    </p>
                    {step.status !== 'pending' && !isWait && (
                      <p className={cn('text-[10px] font-mono',
                        step.status === 'done' ? 'text-emerald-400' : 'text-violet-400'
                      )}>
                        {step.status === 'done' ? 'Completed' : 'Running'}
                      </p>
                    )}
                  </div>
                  {!isWait && <ChevronRight className="w-3 h-3 text-white/20 flex-shrink-0" />}
                </motion.button>
              </div>
            );
          })}
        </div>

        {/* Step editor */}
        <div className="flex-1 overflow-y-auto p-6 min-h-0">
          {selectedStepData && selectedStepData.type !== 'wait' && (
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br', STEP_COLORS[selectedStepData.type])}>
                  {selectedStepData.type === 'email'
                    ? <Mail className="w-5 h-5 text-white" />
                    : <Linkedin className="w-5 h-5 text-white" />
                  }
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">{selectedStepData.label}</h2>
                  <p className="text-[11px] text-white/40 font-mono capitalize">{selectedStepData.type} step</p>
                </div>
                <div className="ml-auto">
                  <span className={cn(
                    'text-[10px] font-mono px-2 py-1 rounded-full border',
                    selectedStepData.status === 'done' ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
                      : selectedStepData.status === 'active' ? 'text-violet-400 bg-violet-500/10 border-violet-500/30'
                      : 'text-white/40 bg-white/[0.04] border-white/[0.08]'
                  )}>
                    {selectedStepData.status.toUpperCase()}
                  </span>
                </div>
              </div>

              {selectedStepData.subject && (
                <div>
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-wider block mb-2">Subject Line</label>
                  <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3">
                    <p className="text-sm text-white/80">{selectedStepData.subject}</p>
                  </div>
                </div>
              )}

              <div>
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-wider block mb-2">
                  {selectedStepData.type === 'linkedin' ? 'Message' : 'Email Body'}
                </label>
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3">
                  <pre className="text-sm text-white/70 whitespace-pre-wrap font-sans leading-relaxed">
                    {selectedStepData.body}
                  </pre>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                <p className="text-[10px] font-mono text-white/40 mb-3 uppercase tracking-wider">Performance</p>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: 'Sent', value: selectedStepData.status === 'done' ? '39' : '—', color: 'text-white/60' },
                    { label: 'Opened', value: selectedStepData.status === 'done' ? '24' : '—', color: 'text-cyan-400' },
                    { label: 'Clicked', value: selectedStepData.status === 'done' ? '8' : '—', color: 'text-violet-400' },
                    { label: 'Replied', value: selectedStepData.status === 'done' ? '5' : '—', color: 'text-emerald-400' },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="text-center">
                      <p className={cn('text-xl font-bold font-mono', color)}>{value}</p>
                      <p className="text-[10px] text-white/40 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
