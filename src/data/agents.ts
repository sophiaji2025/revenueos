export type AgentStatus = 'running' | 'thinking' | 'idle' | 'syncing' | 'done';

export interface AgentTask {
  task: string;
  progress: number;
  progressLabel: string;
}

export interface AgentDef {
  id: string;
  name: string;
  role: string;
  icon: string;
  accentColor: string;
  accentGlow: string;
  tasks: AgentTask[];
  logTemplates: string[];
}

export const AGENT_DEFINITIONS: AgentDef[] = [
  {
    id: 'research',
    name: 'Research Agent',
    role: 'Market Intelligence',
    icon: 'Search',
    accentColor: 'from-cyan-500 to-blue-600',
    accentGlow: 'shadow-cyan-500/20',
    tasks: [
      { task: 'Analyzing funding signals for Series B SaaS...', progress: 72, progressLabel: 'Companies analyzed 144/200' },
      { task: 'Scanning LinkedIn for VP Engineering hiring posts...', progress: 58, progressLabel: 'Posts scanned 87/150' },
      { task: 'Correlating headcount growth signals at target accounts...', progress: 85, progressLabel: 'Accounts profiled 51/60' },
      { task: 'Identifying buying intent from job postings...', progress: 45, progressLabel: 'Signals found 23/50' },
    ],
    logTemplates: [
      'Detected Series B funding signal at {company}',
      'Found VP Engineering hire signal at {company}',
      'Scraped 12 new job postings from {company}',
      'Headcount growth +{n}% at {company} in last 90 days',
      'Identified ICP match: {company} — Series B, 80-200 employees',
    ],
  },
  {
    id: 'prospecting',
    name: 'Prospecting Agent',
    role: 'Contact Discovery',
    icon: 'UserSearch',
    accentColor: 'from-violet-500 to-purple-600',
    accentGlow: 'shadow-violet-500/20',
    tasks: [
      { task: 'Sourcing VP Engineering at Ramp, Vercel, Linear...', progress: 61, progressLabel: 'Contacts found 73/120' },
      { task: 'Cross-referencing LinkedIn + Apollo for verified emails...', progress: 78, progressLabel: 'Verified emails 57/73' },
      { task: 'Building stakeholder map for Notion engineering org...', progress: 40, progressLabel: 'Stakeholders mapped 4/10' },
      { task: 'Filtering for direct VP Engineering decision-makers...', progress: 90, progressLabel: 'Qualified leads 66/73' },
    ],
    logTemplates: [
      'Found contact: {name} — VP Engineering @ {company}',
      'Verified email for {name} @ {company}',
      'Cross-matched LinkedIn profile: {name}',
      'Added {name} to prospect list (ICP score: {score}/10)',
      'Filtered out {n} non-VP-Engineering contacts',
    ],
  },
  {
    id: 'copywriting',
    name: 'Copywriting Agent',
    role: 'Personalized Messaging',
    icon: 'PenTool',
    accentColor: 'from-fuchsia-500 to-pink-600',
    accentGlow: 'shadow-fuchsia-500/20',
    tasks: [
      { task: 'Drafting personalized opener for @Figma VP Eng...', progress: 55, progressLabel: 'Drafts generated 41/73' },
      { task: 'Generating LinkedIn DM sequence for 12 prospects...', progress: 67, progressLabel: 'LinkedIn msgs 18/73' },
      { task: 'A/B testing subject lines for Series B SaaS batch...', progress: 80, progressLabel: 'Variants tested 8/10' },
      { task: 'Personalizing with company growth + hiring context...', progress: 35, progressLabel: 'Enriched drafts 26/73' },
    ],
    logTemplates: [
      'Generated personalized opener for {name} @ {company}',
      'Drafted LinkedIn DM for {name} referencing {signal}',
      'A/B variant created: subject "{subject}"',
      'Personalization score: {score}/10 for {name}',
      'Pulled hiring context for {company} into email body',
    ],
  },
  {
    id: 'outreach',
    name: 'Outreach Agent',
    role: 'Multi-Channel Execution',
    icon: 'Send',
    accentColor: 'from-indigo-500 to-violet-600',
    accentGlow: 'shadow-indigo-500/20',
    tasks: [
      { task: 'Sending sequence step 1 to 12 prospects...', progress: 53, progressLabel: 'Emails sent 39/73' },
      { task: 'Scheduling follow-up sequences for non-openers...', progress: 70, progressLabel: 'Sequences active 28/39' },
      { task: 'Triggering LinkedIn connection requests...', progress: 42, progressLabel: 'Connections sent 18/43' },
      { task: 'Processing OOO replies and rescheduling...', progress: 88, progressLabel: 'Rescheduled 3/3' },
    ],
    logTemplates: [
      'Sent email step 1 to {name} @ {company}',
      'LinkedIn connection request sent to {name}',
      'OOO detected for {name} — rescheduled to {date}',
      'Sequence step 2 queued for {name} (in 3 days)',
      'Open rate: {n}% — above benchmark for this batch',
    ],
  },
  {
    id: 'crm',
    name: 'CRM Agent',
    role: 'Data Sync & Pipeline',
    icon: 'Database',
    accentColor: 'from-emerald-500 to-teal-600',
    accentGlow: 'shadow-emerald-500/20',
    tasks: [
      { task: 'Logging activity + updating stage for 8 contacts...', progress: 75, progressLabel: 'Records updated 31/39' },
      { task: 'Syncing email thread to Salesforce activity log...', progress: 60, progressLabel: 'Threads synced 23/39' },
      { task: 'Updating deal stages for replied prospects...', progress: 85, progressLabel: 'Stages updated 7/8' },
      { task: 'Enriching CRM records with LinkedIn + funding data...', progress: 45, progressLabel: 'Enriched 42/60' },
    ],
    logTemplates: [
      'Updated CRM stage: {name} → Engaged',
      'Logged email activity for {name} @ {company}',
      'Synced LinkedIn reply from {name} to CRM',
      'Deal created: {name} @ {company} — $45K ARR',
      'Enriched {n} records with firmographic data',
    ],
  },
  {
    id: 'meeting',
    name: 'Meeting Agent',
    role: 'Calendar & Booking',
    icon: 'CalendarCheck',
    accentColor: 'from-amber-500 to-orange-600',
    accentGlow: 'shadow-amber-500/20',
    tasks: [
      { task: 'Negotiating times → booked 30-min with VP Eng @ Datadog', progress: 47, progressLabel: 'Meetings booked 7/15' },
      { task: 'Sending calendar invites for confirmed meetings...', progress: 70, progressLabel: 'Invites sent 5/7' },
      { task: 'Following up on tentative replies for scheduling...', progress: 55, progressLabel: 'Pending 4 replies' },
      { task: 'Processing meeting confirmations + sending prep docs...', progress: 80, progressLabel: 'Confirmed 6/7' },
    ],
    logTemplates: [
      'Booked 30-min discovery call with {name} @ {company}',
      'Calendar invite sent to {name} for {date}',
      'Meeting confirmed: {name} @ {company} — {date}',
      'Sent pre-meeting brief to {name}',
      'Rescheduled: {name} moved to {date}',
    ],
  },
];
