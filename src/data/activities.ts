export type ActivityType = 'email' | 'linkedin' | 'enrich' | 'signal' | 'meeting' | 'call'

export interface ActivityItem {
  id: string
  type: ActivityType
  description: string
  company: string
  contact: string
  timestamp: string
  channel: string
  icon: string
}

export const activities: ActivityItem[] = [
  { id: 'activity-1', type: 'signal', description: 'Detected fresh RevOps hiring spike in Stripe enterprise ops.', company: 'Stripe', contact: 'Alyssa Shen', timestamp: '2 min ago', channel: 'Hiring Signal', icon: 'sparkles' },
  { id: 'activity-2', type: 'email', description: 'Sent personalized follow-up with ROI summary to Figma proposal thread.', company: 'Figma', contact: 'Lena Ortega', timestamp: '5 min ago', channel: 'Email', icon: 'mail' },
  { id: 'activity-3', type: 'meeting', description: 'Scheduled demo debrief with Ramp SDR leadership team.', company: 'Ramp', contact: 'Samir Patel', timestamp: '8 min ago', channel: 'Calendar', icon: 'calendar' },
  { id: 'activity-4', type: 'linkedin', description: 'Captured new LinkedIn post about enterprise pipeline visibility.', company: 'Linear', contact: 'Mei Tan', timestamp: '12 min ago', channel: 'LinkedIn', icon: 'linkedin' },
  { id: 'activity-5', type: 'call', description: 'Logged call outcome: legal review moving forward at Vercel.', company: 'Vercel', contact: 'Hugo Martin', timestamp: '15 min ago', channel: 'Call', icon: 'phone' },
  { id: 'activity-6', type: 'enrich', description: 'Enriched Datadog account with new revenue systems org chart.', company: 'Datadog', contact: 'Evan Morris', timestamp: '19 min ago', channel: 'Enrichment', icon: 'database' },
  { id: 'activity-7', type: 'signal', description: 'Buying signal triggered from Notion lifecycle personalization page views.', company: 'Notion', contact: 'Miles Hart', timestamp: '25 min ago', channel: 'Web Signal', icon: 'activity' },
  { id: 'activity-8', type: 'email', description: 'Opened executive summary for Stripe global rollout three times.', company: 'Stripe', contact: 'Emma Brooks', timestamp: '31 min ago', channel: 'Email', icon: 'mail' },
  { id: 'activity-9', type: 'meeting', description: 'AI generated pre-call brief for Greenhouse proposal review.', company: 'Greenhouse', contact: 'Noah Singh', timestamp: '38 min ago', channel: 'AI Brief', icon: 'sparkles' },
  { id: 'activity-10', type: 'linkedin', description: 'Flagged new post from Diego about signal-driven ABM orchestration.', company: 'Confluent', contact: 'Diego Alvarez', timestamp: '44 min ago', channel: 'LinkedIn', icon: 'linkedin' },
  { id: 'activity-11', type: 'signal', description: 'Identified field marketing expansion signal from Amplitude regional hiring.', company: 'Amplitude', contact: 'Isabella Ng', timestamp: '51 min ago', channel: 'Hiring Signal', icon: 'sparkles' },
  { id: 'activity-12', type: 'call', description: 'Call note captured: Pendo customer growth team approved onboarding plan.', company: 'Pendo', contact: 'Sasha Cole', timestamp: '58 min ago', channel: 'Call', icon: 'phone' },
  { id: 'activity-13', type: 'email', description: 'Drafted benchmark-driven note for Snowflake industry pod strategy.', company: 'Snowflake', contact: 'Rachel Park', timestamp: '1 hr ago', channel: 'Email', icon: 'mail' },
  { id: 'activity-14', type: 'enrich', description: 'Updated Figma stakeholder map with enterprise sales and analytics links.', company: 'Figma', contact: 'Jordan Kim', timestamp: '1 hr ago', channel: 'Enrichment', icon: 'database' },
  { id: 'activity-15', type: 'signal', description: 'Surfaced fresh finance skepticism language in Ramp public interview.', company: 'Ramp', contact: 'Daniel Ross', timestamp: '1 hr ago', channel: 'Intent', icon: 'activity' },
  { id: 'activity-16', type: 'meeting', description: 'Generated post-demo recap with next steps for Vercel strategic team.', company: 'Vercel', contact: 'Sofia Rivera', timestamp: '1 hr ago', channel: 'Meeting Recap', icon: 'calendar' },
  { id: 'activity-17', type: 'linkedin', description: 'Captured ops architecture commentary from Stripe systems leader.', company: 'Stripe', contact: 'Priya Nandakumar', timestamp: '2 hr ago', channel: 'LinkedIn', icon: 'linkedin' },
  { id: 'activity-18', type: 'call', description: 'Call connected: Greenhouse confirmed low-services rollout preference.', company: 'Greenhouse', contact: 'Noah Singh', timestamp: '2 hr ago', channel: 'Call', icon: 'phone' },
  { id: 'activity-19', type: 'email', description: 'Sequence variant regenerated for Notion expansion play.', company: 'Notion', contact: 'Hannah Bell', timestamp: '2 hr ago', channel: 'AI Email', icon: 'mail' },
  { id: 'activity-20', type: 'signal', description: 'Detected buyer engagement spike across Ramp proposal assets.', company: 'Ramp', contact: 'Nora Ellis', timestamp: '2 hr ago', channel: 'Asset Signal', icon: 'activity' },
  { id: 'activity-21', type: 'meeting', description: 'Prepared manager coaching agenda for Datadog inspection pilot.', company: 'Datadog', contact: 'Olivia Dunn', timestamp: '3 hr ago', channel: 'AI Brief', icon: 'calendar' },
  { id: 'activity-22', type: 'linkedin', description: 'New post from Mixpanel demand gen lead flagged for re-engagement timing.', company: 'Mixpanel', contact: 'Gabe Chen', timestamp: '3 hr ago', channel: 'LinkedIn', icon: 'linkedin' },
  { id: 'activity-23', type: 'enrich', description: 'Expanded Vercel account with strategic pod and legal reviewer details.', company: 'Vercel', contact: 'Hugo Martin', timestamp: '3 hr ago', channel: 'Enrichment', icon: 'database' },
  { id: 'activity-24', type: 'email', description: 'Sent concise rollout memo to Linear with 30-day activation plan.', company: 'Linear', contact: 'Adam Fischer', timestamp: '4 hr ago', channel: 'Email', icon: 'mail' },
  { id: 'activity-25', type: 'signal', description: 'Detected funding-reference trigger for Contentful enterprise launch messaging.', company: 'Contentful', contact: '—', timestamp: '4 hr ago', channel: 'Funding Signal', icon: 'sparkles' },
  { id: 'activity-26', type: 'call', description: 'Logged closed-won handoff steps for Pendo onboarding.', company: 'Pendo', contact: 'Sasha Cole', timestamp: '5 hr ago', channel: 'Call', icon: 'phone' },
  { id: 'activity-27', type: 'meeting', description: 'Created follow-up task list from Stripe executive alignment meeting.', company: 'Stripe', contact: 'Marcus Vale', timestamp: '5 hr ago', channel: 'Meeting Recap', icon: 'calendar' },
]
