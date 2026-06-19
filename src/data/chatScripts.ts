export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-1',
    role: 'user',
    content: 'Book 15 meetings with VP Engineering leaders at Series B SaaS companies.',
    timestamp: '09:41:03',
  },
];

export const ASSISTANT_PLAN = `Understood. Launching autonomous mission: **"Book 15 VP Engineering meetings at Series B SaaS"**

I'm spinning up your agent team now:

→ **Research Agent** — Scanning funding databases, job boards, and LinkedIn for Series B SaaS companies with active engineering leadership hiring...

→ **Prospecting Agent** — Sourcing VP Engineering decision-makers at ICP-matched accounts (Ramp, Vercel, Linear, Figma, Datadog, Notion, Retool, Airtable + 40 more)...

→ **Copywriting Agent** — Generating hyper-personalized outreach using company-specific signals (recent funding, hiring spikes, tech stack, growth trajectory)...

→ **Outreach Agent** — Executing multi-channel sequences (email + LinkedIn) with intelligent follow-up logic and reply detection...

→ **CRM Agent** — Logging all activity, updating pipeline stages, and maintaining data hygiene in real time...

→ **Meeting Agent** — Handling scheduling negotiations, calendar invites, and booking confirmations autonomously...

**Mission is live.** All 6 agents are running in parallel. I'll surface key developments here as they happen. Target: 15 meetings booked within 72 hours.`;

export const FOLLOW_UP_CHIPS = [
  { id: 'fintech', label: 'Focus on fintech verticals', prompt: 'Focus on fintech verticals' },
  { id: 'warm', label: 'Prioritize warm accounts', prompt: 'Prioritize warm accounts' },
  { id: 'volume', label: 'Increase daily send volume', prompt: 'Increase daily send volume' },
  { id: 'meetings', label: "Show me today's booked meetings", prompt: "Show me today's booked meetings" },
];

export const CANNED_RESPONSES: Record<string, string> = {
  fintech: `Pivoting Research and Prospecting agents to **fintech verticals** 🎯

Filtering for: Ramp, Brex, Carta, Airbase, Parafin, Capchase, Mercury, and 15 similar Series B fintech companies.

**Prospecting Agent** is now prioritizing:
- VP Engineering contacts at fintech-regulated companies
- Targets with compliance engineering + platform teams

Updated ICP filter applied. Outreach Agent will use fintech-specific messaging variants.`,

  warm: `Switching to **warm account prioritization** mode.

**CRM Agent** is pulling engagement history — surfacing accounts that have:
- Opened previous emails (3 accounts)
- Visited pricing page (2 accounts)  
- Accepted LinkedIn connections (4 accounts)

**Outreach Agent** moving these 9 warm accounts to the top of the sequence queue. Personalization depth increased for warm contacts.`,

  volume: `Increasing daily send volume from **25 → 50 emails/day**.

**Outreach Agent** is adjusting send cadence:
- Step 1 sends: 50/day (was 25)
- LinkedIn: 20/day (was 10)
- Throttled across 6-hour windows to maintain deliverability

**Research Agent** sourcing 30 additional ICP-matched contacts to fill the expanded pipeline. Deliverability safeguards active.`,

  meetings: `Here are **today's booked meetings** (updated live):

📅 **Dev Patel** — VP Engineering @ Datadog — Thu 2:30pm (30 min)
📅 **Marcus Lee** — VP Engineering @ Figma — Fri 10:00am (30 min)
📅 **Priya Nair** — VP Engineering @ Ramp — Fri 3:00pm (30 min)
📅 **Soren Koch** — VP Engineering @ Vercel — Mon 11:00am (30 min)
📅 **Aiko Tanaka** — VP Engineering @ Linear — Mon 2:00pm (30 min)
📅 **Zara Ahmed** — VP Engineering @ Notion — Tue 9:30am (30 min)
📅 **Yuna Park** — VP Engineering @ Rippling — Tue 4:00pm (30 min)

**7 / 15 meetings booked** and climbing. Meeting Agent is actively negotiating with 4 additional prospects.`,
};
