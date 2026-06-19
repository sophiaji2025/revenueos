import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { cn } from '../../lib/utils';

interface MissionHeaderProps {
  autonomousMode: boolean;
  onToggleAutonomous: () => void;
  agentsOnline: number;
  prospectsFound: number;
  emailsSent: number;
  meetingsBooked: number;
}

function AnimatedCount({ value }: { value: number }) {
  return (
    <motion.span
      key={value}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="font-mono font-bold text-white"
    >
      {value}
    </motion.span>
  );
}

export function MissionHeader({
  autonomousMode,
  onToggleAutonomous,
  agentsOnline,
  prospectsFound,
  emailsSent,
  meetingsBooked,
}: MissionHeaderProps) {
  return (
    <div className="flex items-center gap-4 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02] flex-shrink-0 flex-wrap">
      <div className="flex items-center gap-2">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </div>
        <span className="text-xs font-mono font-semibold text-emerald-400 tracking-widest">LIVE</span>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs text-white/50 font-mono truncate">
          <span className="text-white/70">MISSION:</span>{' '}
          Book 15 meetings with VP Engineering at Series B SaaS companies
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex flex-col items-center">
          <AnimatedCount value={agentsOnline} />
          <span className="text-[10px] text-white/40 font-mono">AGENTS</span>
        </div>
        <div className="w-px h-6 bg-white/10" />
        <div className="flex flex-col items-center">
          <AnimatedCount value={prospectsFound} />
          <span className="text-[10px] text-white/40 font-mono">PROSPECTS</span>
        </div>
        <div className="w-px h-6 bg-white/10" />
        <div className="flex flex-col items-center">
          <AnimatedCount value={emailsSent} />
          <span className="text-[10px] text-white/40 font-mono">SENT</span>
        </div>
        <div className="w-px h-6 bg-white/10" />
        <div className="flex flex-col items-center">
          <span className="font-mono font-bold text-emerald-400"><AnimatedCount value={meetingsBooked} /></span>
          <span className="text-[10px] text-white/40 font-mono">MEETINGS</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Zap className={cn('w-3.5 h-3.5', autonomousMode ? 'text-violet-400' : 'text-white/30')} />
        <span className="text-xs text-white/50 font-mono">AUTO</span>
        <button
          onClick={onToggleAutonomous}
          className={cn(
            'relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200',
            autonomousMode ? 'bg-violet-500' : 'bg-white/10'
          )}
          aria-label="Toggle Autonomous Mode"
        >
          <span className={cn(
            'pointer-events-none inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow-lg transition duration-200',
            autonomousMode ? 'translate-x-4' : 'translate-x-0'
          )} />
        </button>
      </div>
    </div>
  );
}
