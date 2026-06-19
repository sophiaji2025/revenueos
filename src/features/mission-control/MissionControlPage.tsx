import { useState } from 'react';
import { MissionHeader } from './MissionHeader';
import { MissionChatPanel } from './MissionChatPanel';
import { ExecutionWorkflowPanel } from './ExecutionWorkflowPanel';
import { AgentSwarmPanel } from './AgentSwarmPanel';
import { LiveEventStream } from './LiveEventStream';
import { useMissionSimulation } from './useMissionSimulation';

export function MissionControlPage() {
  const [autonomousMode, setAutonomousMode] = useState(true);
  const missionState = useMissionSimulation(autonomousMode);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <MissionHeader
        autonomousMode={autonomousMode}
        onToggleAutonomous={() => setAutonomousMode(m => !m)}
        agentsOnline={missionState.agentsOnline}
        prospectsFound={missionState.prospectsFound}
        emailsSent={missionState.emailsSent}
        meetingsBooked={missionState.meetingsBooked}
      />

      <div className="flex-1 grid grid-cols-[minmax(280px,1fr)_minmax(320px,1.2fr)_minmax(280px,1fr)] overflow-hidden min-h-0">
        <MissionChatPanel autonomousMode={autonomousMode} />
        <ExecutionWorkflowPanel missionState={missionState} />
        <AgentSwarmPanel missionState={missionState} autonomousMode={autonomousMode} />
      </div>

      <LiveEventStream events={missionState.events} />
    </div>
  );
}
