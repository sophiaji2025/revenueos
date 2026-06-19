export type StageStatus = 'done' | 'running' | 'queued';

export interface WorkflowStage {
  id: string;
  label: string;
  icon: string;
  status: StageStatus;
  agentId: string;
}

export const WORKFLOW_STAGES: WorkflowStage[] = [
  { id: 'discovery', label: 'Prospect Discovery', icon: 'Search', status: 'done', agentId: 'prospecting' },
  { id: 'enrichment', label: 'Contact Enrichment', icon: 'Sparkles', status: 'running', agentId: 'research' },
  { id: 'copy', label: 'Copy Generation', icon: 'PenTool', status: 'running', agentId: 'copywriting' },
  { id: 'outreach', label: 'Outreach', icon: 'Send', status: 'running', agentId: 'outreach' },
  { id: 'replies', label: 'Replies', icon: 'MessageSquare', status: 'running', agentId: 'crm' },
  { id: 'booking', label: 'Meeting Booking', icon: 'CalendarCheck', status: 'running', agentId: 'meeting' },
];
