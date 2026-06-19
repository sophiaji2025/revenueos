import { motion } from 'framer-motion';
import { Users, Mail, Linkedin, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { CONTACTS_DATA } from '../../data/contacts';

const STAGE_COLORS: Record<string, string> = {
  'Meeting Booked': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  'Engaged': 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  'Replied': 'text-violet-400 bg-violet-500/10 border-violet-500/30',
  'Outreach Sent': 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
  'Prospecting': 'text-amber-400 bg-amber-500/10 border-amber-500/30',
};

function ScoreBar({ score }: { score: number }) {
  const color = score >= 90 ? 'from-emerald-500 to-teal-500'
    : score >= 75 ? 'from-cyan-500 to-blue-500'
    : 'from-violet-500 to-purple-500';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          className={cn('h-full rounded-full bg-gradient-to-r', color)}
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
      <span className="text-[11px] font-mono font-bold text-white/70 w-7 text-right">{score}</span>
    </div>
  );
}

export function ContactIntelligencePage() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.06] bg-white/[0.02] flex-shrink-0">
        <Users className="w-5 h-5 text-violet-400" />
        <div>
          <h1 className="text-sm font-bold text-white">Contact Intelligence</h1>
          <p className="text-[11px] text-white/40 font-mono">{CONTACTS_DATA.length} qualified contacts · VP Engineering</p>
        </div>
        <div className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20">
          <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-[11px] font-mono text-violet-400">Prospecting Agent Active</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 gap-3 max-w-4xl">
          {CONTACTS_DATA.map((contact, i) => {
            const stageClass = STAGE_COLORS[contact.stage] ?? 'text-white/50 bg-white/[0.04] border-white/[0.08]';
            return (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 hover:border-white/[0.15] hover:bg-white/[0.05] transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/30 to-purple-500/30 border border-white/[0.08] flex items-center justify-center text-xs font-bold text-white/80 flex-shrink-0">
                    {contact.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="text-sm font-bold text-white">{contact.name}</p>
                      <span className={cn('text-[10px] px-2 py-0.5 rounded-full border font-mono', stageClass)}>
                        {contact.stage}
                      </span>
                      <span className="text-[10px] text-white/30 font-mono ml-auto">{contact.lastActivity}</span>
                    </div>
                    <p className="text-[11px] text-white/50 mb-2">{contact.title} · {contact.company}</p>
                    <ScoreBar score={contact.score} />
                  </div>
                  <div className="flex items-center gap-1.5 ml-2">
                    <button className="w-7 h-7 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center transition-colors">
                      <Mail className="w-3.5 h-3.5 text-white/40" />
                    </button>
                    <button className="w-7 h-7 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center transition-colors">
                      <Linkedin className="w-3.5 h-3.5 text-white/40" />
                    </button>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3 pl-14">
                  {contact.insights.map((insight, ii) => (
                    <span key={ii} className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/50">
                      {insight}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
