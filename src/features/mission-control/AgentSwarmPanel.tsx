import { cn } from '../../lib/utils';
import { AGENT_DEFINITIONS } from '../../data/agents';
import { AgentCard } from './AgentCard';
import type { MissionState } from './useMissionSimulation';

interface AgentSwarmPanelProps {
  missionState: MissionState;
  autonomousMode: boolean;
}

export function AgentSwarmPanel({ missionState, autonomousMode }: AgentSwarmPanelProps) {
  return (
    <div className={cn('flex flex-col h-full bg-white/[0.01] border-l border-white/[0.06]')}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] flex-shrink-0">
        <div>
          <p className="text-xs font-semibold text-white/90">Agent Swarm</p>
          <p className="text-[10px] text-white/40 font-mono">6 agents · all online</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono text-emerald-400">PARALLEL</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-2 min-h-0">
        {AGENT_DEFINITIONS.map(agent => (
          <AgentCard
            key={agent.id}
            agent={agent}
            agentState={missionState.agentStates[agent.id]}
            autonomousMode={autonomousMode}
          />
        ))}
      </div>
    </div>
  );
}
