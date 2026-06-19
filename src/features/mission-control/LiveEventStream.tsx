import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pause, Play, Zap, Users, FileText, Send, MessageSquare, CalendarCheck, Database, Clock } from 'lucide-react';
import type { ComponentType } from 'react';
import { cn } from '../../lib/utils';
import type { StreamEvent, EventType } from '../../data/eventStream';

// Use Linkedin as a stand-in (it's available in lucide-react)
import { Linkedin } from 'lucide-react';

const EVENT_CONFIG: Record<EventType, { icon: ComponentType<{ className?: string }>; color: string; bg: string; dot: string }> = {
  signal: { icon: Zap, color: 'text-amber-400', bg: 'bg-amber-500/10', dot: 'bg-amber-400' },
  enriched: { icon: Users, color: 'text-cyan-400', bg: 'bg-cyan-500/10', dot: 'bg-cyan-400' },
  generated: { icon: FileText, color: 'text-indigo-400', bg: 'bg-indigo-500/10', dot: 'bg-indigo-400' },
  sent: { icon: Send, color: 'text-violet-400', bg: 'bg-violet-500/10', dot: 'bg-violet-400' },
  replied: { icon: MessageSquare, color: 'text-emerald-400', bg: 'bg-emerald-500/10', dot: 'bg-emerald-400' },
  booked: { icon: CalendarCheck, color: 'text-green-400', bg: 'bg-green-500/10', dot: 'bg-green-400' },
  crm: { icon: Database, color: 'text-teal-400', bg: 'bg-teal-500/10', dot: 'bg-teal-400' },
  linkedin: { icon: Linkedin, color: 'text-blue-400', bg: 'bg-blue-500/10', dot: 'bg-blue-400' },
  ooo: { icon: Clock, color: 'text-orange-400', bg: 'bg-orange-500/10', dot: 'bg-orange-400' },
};

interface LiveEventStreamProps {
  events: StreamEvent[];
}

export function LiveEventStream({ events }: LiveEventStreamProps) {
  const [paused, setPaused] = useState(false);
  const [filter, setFilter] = useState<EventType | 'all'>('all');

  const displayEvents = paused ? events : events;
  const filtered = displayEvents.filter(e => filter === 'all' || e.type === filter);

  return (
    <div className="flex flex-col border-t border-white/[0.06] bg-[#0a0b0d] flex-shrink-0" style={{ height: '160px' }}>
      <div className="flex items-center gap-3 px-4 py-2 border-b border-white/[0.06] flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono font-semibold text-white/60 tracking-wider">LIVE EVENT STREAM</span>
        </div>
        <div className="flex-1 flex gap-1.5 overflow-x-auto">
          {(['all', 'signal', 'enriched', 'generated', 'sent', 'replied', 'booked'] as const).map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={cn(
                'px-2 py-0.5 rounded text-[10px] font-mono transition-all flex-shrink-0',
                filter === type ? 'bg-white/10 text-white/80' : 'text-white/30 hover:text-white/60'
              )}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          onClick={() => setPaused(p => !p)}
          className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
          aria-label={paused ? 'Resume stream' : 'Pause stream'}
        >
          {paused ? <Play className="w-3 h-3 text-white/40" /> : <Pause className="w-3 h-3 text-white/40" />}
          <span className="text-[10px] font-mono text-white/30">{paused ? 'RESUME' : 'PAUSE'}</span>
        </button>
      </div>

      <div className="flex-1 overflow-x-auto overflow-y-hidden">
        <div className="flex gap-2 px-4 py-2 h-full items-center">
          <AnimatePresence initial={false} mode="popLayout">
            {filtered.slice(0, 15).map(event => {
              const config = EVENT_CONFIG[event.type] ?? EVENT_CONFIG.signal;
              const Icon = config.icon;
              return (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={cn(
                    'flex-shrink-0 flex items-start gap-2 px-3 py-2 rounded-lg border border-white/[0.06] max-w-[220px]',
                    config.bg
                  )}
                >
                  <Icon className={cn('w-3 h-3 mt-0.5 flex-shrink-0', config.color)} />
                  <div className="min-w-0">
                    <p className="text-[10px] text-white/70 leading-snug line-clamp-2">{event.message}</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className={cn('text-[9px] font-mono font-semibold', config.color)}>{event.agent}</span>
                      <span className="text-[9px] font-mono text-white/25">{event.timestamp}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
