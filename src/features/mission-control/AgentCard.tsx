import { motion, AnimatePresence } from 'framer-motion';
import { Search, UserSearch, PenTool, Send, Database, CalendarCheck } from 'lucide-react';
import type { ComponentType } from 'react';
import { cn } from '../../lib/utils';
import type { AgentDef } from '../../data/agents';
import type { AgentState } from './useMissionSimulation';

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  Search,
  UserSearch,
  PenTool,
  Send,
  Database,
  CalendarCheck,
};

const STATUS_CONFIG: Record<AgentState['status'], { label: string; color: string; dot: string }> = {
  running: { label: 'Running', color: 'text-emerald-400', dot: 'bg-emerald-400' },
  thinking: { label: 'Thinking', color: 'text-violet-400', dot: 'bg-violet-400' },
  idle: { label: 'Idle', color: 'text-white/40', dot: 'bg-white/30' },
  syncing: { label: 'Syncing', color: 'text-cyan-400', dot: 'bg-cyan-400' },
};

interface AgentCardProps {
  agent: AgentDef;
  agentState: AgentState;
  autonomousMode: boolean;
}

export function AgentCard({ agent, agentState, autonomousMode }: AgentCardProps) {
  const Icon = ICONS[agent.icon] ?? Search;
  const status = STATUS_CONFIG[agentState.status];
  const currentTask = agent.tasks[agentState.currentTaskIndex];
  const isActive = agentState.status === 'running' || agentState.status === 'thinking';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'relative rounded-xl border p-3.5 flex flex-col gap-2.5 overflow-hidden transition-all duration-500',
        isActive && autonomousMode
          ? 'border-white/[0.12] bg-white/[0.04]'
          : 'border-white/[0.06] bg-white/[0.02]'
      )}
    >
      {isActive && autonomousMode && (
        <div className={cn(
          'absolute inset-0 rounded-xl opacity-20 pointer-events-none',
          `bg-gradient-to-br ${agent.accentColor}`
        )} />
      )}

      <div className="flex items-center gap-2.5 relative">
        <div className={cn(
          'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0',
          `bg-gradient-to-br ${agent.accentColor}`
        )}>
          <Icon className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-white truncate">{agent.name}</p>
          <p className="text-[10px] text-white/40 truncate">{agent.role}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
          <div className={cn('w-1.5 h-1.5 rounded-full', status.dot, isActive && 'animate-pulse')} />
          <span className={cn('text-[10px] font-mono', status.color)}>{status.label}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={agentState.currentTaskIndex}
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 4 }}
          className="text-[11px] text-white/60 leading-snug relative"
        >
          {currentTask?.task}
        </motion.p>
      </AnimatePresence>

      <div className="relative space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-white/40 font-mono">{currentTask?.progressLabel}</span>
          <span className="text-[10px] text-white/50 font-mono">{agentState.progress}%</span>
        </div>
        <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
          <motion.div
            className={cn('h-full rounded-full bg-gradient-to-r', agent.accentColor)}
            initial={false}
            animate={{ width: `${agentState.progress}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
      </div>

      {agentState.logs.length > 0 && (
        <div className="space-y-1 pt-1 border-t border-white/[0.05]">
          <AnimatePresence initial={false}>
            {agentState.logs.slice(0, 3).map((log, i) => (
              <motion.div
                key={`${log.time}-${i}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="flex gap-1.5"
              >
                <span className="text-[9px] font-mono text-white/25 flex-shrink-0 mt-0.5">{log.time}</span>
                <span className="text-[10px] font-mono text-white/40 leading-tight truncate">{log.text}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}
