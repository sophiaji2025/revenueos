export type EventType = 'signal' | 'enriched' | 'generated' | 'sent' | 'replied' | 'booked' | 'crm' | 'linkedin' | 'ooo';

export interface StreamEvent {
  id: string;
  type: EventType;
  agent: string;
  message: string;
  timestamp: string;
}

function ts(minAgo: number): string {
  const d = new Date(Date.now() - minAgo * 60000);
  return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
}

export const SEED_EVENTS: Omit<StreamEvent, 'id'>[] = [
  { type: 'booked', agent: 'Meeting', message: 'Booked 30-min with VP Engineering @ Vercel — Thu 2:30pm', timestamp: ts(0) },
  { type: 'replied', agent: 'Outreach', message: 'Reply received from Dev Patel @ Datadog — positive sentiment ✓', timestamp: ts(1) },
  { type: 'generated', agent: 'Copywriting', message: 'Generated personalized opener for Marcus Lee @ Figma', timestamp: ts(2) },
  { type: 'enriched', agent: 'Prospecting', message: 'Enriched Priya Nair — VP Engineering @ Ramp — verified email + mobile', timestamp: ts(2) },
  { type: 'sent', agent: 'Outreach', message: 'Sent sequence step 1 to Aiko Tanaka @ Linear', timestamp: ts(3) },
  { type: 'signal', agent: 'Research', message: 'Notion posted 4 new VP Engineering roles — buying signal detected', timestamp: ts(4) },
  { type: 'crm', agent: 'CRM', message: 'CRM stage updated: Soren Koch @ Vercel → Engaged', timestamp: ts(5) },
  { type: 'linkedin', agent: 'Outreach', message: 'LinkedIn connection accepted by Zara Ahmed @ Notion', timestamp: ts(6) },
  { type: 'enriched', agent: 'Prospecting', message: 'Enriched Leo Müller — VP Engineering @ Retool — verified email', timestamp: ts(7) },
  { type: 'generated', agent: 'Copywriting', message: 'Drafted LinkedIn DM for Raj Krishnan @ Loom referencing hiring spike', timestamp: ts(8) },
  { type: 'sent', agent: 'Outreach', message: 'Sent sequence step 2 to Dev Patel @ Datadog', timestamp: ts(9) },
  { type: 'booked', agent: 'Meeting', message: 'Booked 30-min discovery call with Yuna Park @ Rippling — Tue 4pm', timestamp: ts(10) },
  { type: 'ooo', agent: 'Outreach', message: "OOO detected for Finn O'Brien @ Brex — rescheduled to next week", timestamp: ts(12) },
  { type: 'signal', agent: 'Research', message: 'Ramp announced Series B extension — $150M raised', timestamp: ts(14) },
  { type: 'crm', agent: 'CRM', message: 'Deal created: Marcus Lee @ Figma — $45K ARR opportunity', timestamp: ts(15) },
  { type: 'replied', agent: 'Outreach', message: 'Reply received from Sofia Reyes @ Airtable — requesting demo', timestamp: ts(16) },
  { type: 'enriched', agent: 'Prospecting', message: 'Enriched Nadia Popescu — VP Engineering @ Carta — verified LinkedIn', timestamp: ts(18) },
  { type: 'generated', agent: 'Copywriting', message: 'A/B subject line variant: "How Linear ships 3x faster..."', timestamp: ts(20) },
  { type: 'sent', agent: 'Outreach', message: 'Sent sequence step 1 to Raj Krishnan @ Loom', timestamp: ts(22) },
  { type: 'signal', agent: 'Research', message: 'Datadog engineering headcount +23% in last 90 days', timestamp: ts(25) },
];

export const LIVE_EVENT_TEMPLATES: Omit<StreamEvent, 'id' | 'timestamp'>[] = [
  { type: 'signal', agent: 'Research', message: '{company} posted {n} new VP Engineering roles — buying signal' },
  { type: 'enriched', agent: 'Prospecting', message: 'Enriched {name} — {title} @ {company} — verified email + mobile' },
  { type: 'generated', agent: 'Copywriting', message: 'Generated personalized opener for {name} @ {company}' },
  { type: 'sent', agent: 'Outreach', message: 'Sent sequence step {step} to {name} @ {company}' },
  { type: 'replied', agent: 'Outreach', message: 'Reply received from {title} @ {company} — positive sentiment ✓' },
  { type: 'booked', agent: 'Meeting', message: 'Booked 30-min discovery call with {name} @ {company} — {time}' },
  { type: 'crm', agent: 'CRM', message: 'CRM stage updated: {name} @ {company} → Engaged' },
  { type: 'linkedin', agent: 'Outreach', message: 'LinkedIn connection accepted by {name} @ {company}' },
  { type: 'ooo', agent: 'Outreach', message: 'OOO detected for {title} @ {company} — rescheduled +7 days' },
  { type: 'crm', agent: 'CRM', message: 'Logged email activity for {name} @ {company} — 3 touchpoints' },
  { type: 'signal', agent: 'Research', message: '{company} engineering headcount +{n}% in last 90 days' },
  { type: 'generated', agent: 'Copywriting', message: 'Drafted LinkedIn DM for {name} referencing recent funding round' },
];
