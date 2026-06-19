export type SequenceStepType = 'email' | 'linkedin_connect' | 'linkedin_message' | 'call' | 'wait'

export interface SequenceStep {
  id: string
  type: SequenceStepType
  day: number
  subject?: string
  body?: string
  message?: string
  duration?: number
}

export interface SequenceStats {
  sent: number
  openRate: number
  replyRate: number
  meetingsBooked: number
  stepDropoff: number[]
}

export interface SequenceToneVariants {
  formal: string
  casual: string
}

export interface SequenceTemplate {
  id: string
  name: string
  description: string
  steps: SequenceStep[]
  stats: SequenceStats
  emailVariants: string[]
  toneVariants: SequenceToneVariants
}

export const sequences: SequenceTemplate[] = [
  {
    id: 'enterprise-revops-sprint',
    name: 'Enterprise RevOps Sprint',
    description: 'Multi-threaded outbound motion for RevOps and enterprise sales leaders at scaling SaaS companies.',
    steps: [
      {
        id: 'ers-1',
        type: 'email',
        day: 1,
        subject: 'Ideas for {{company}} pipeline inspection',
        body: 'Hi {{firstName}}, I noticed {{company}} is hiring into revenue systems while pushing harder into enterprise. RevenueOS helps RevOps teams turn buying signals, stakeholder maps, and rep workflows into one operating layer. Open to a quick exchange on how teams are improving pipeline inspection without adding more dashboards?',
      },
      { id: 'ers-2', type: 'linkedin_connect', day: 2, message: 'Hi {{firstName}} — I work with RevOps teams building cleaner account inspection workflows. Thought it would be useful to connect.' },
      { id: 'ers-3', type: 'wait', day: 4, duration: 2 },
      {
        id: 'ers-4',
        type: 'email',
        day: 6,
        subject: 'Quick follow-up on revenue workflow visibility',
        body: 'Following up in case improving seller focus, signal visibility, or forecast confidence is on your roadmap. Happy to share a few examples from teams balancing PLG and enterprise motions.',
      },
      { id: 'ers-5', type: 'call', day: 8, message: 'Reference recent hiring and ask about pipeline review friction.' },
    ],
    stats: { sent: 1840, openRate: 48.2, replyRate: 23.1, meetingsBooked: 32, stepDropoff: [100, 76, 58, 34, 19] },
    emailVariants: ['Executive benchmark intro', 'Hiring-signal angle', 'Forecast-risk angle'],
    toneVariants: {
      formal: 'Concise, benchmark-oriented, and executive ready.',
      casual: 'Warm, direct, and focused on practical workflow improvements.',
    },
  },
  {
    id: 'plg-expansion-loop',
    name: 'PLG Expansion Loop',
    description: 'Personalized sequence for product-led companies layering enterprise expansion onto strong usage signals.',
    steps: [
      {
        id: 'pel-1',
        type: 'email',
        day: 1,
        subject: '{{company}} usage signals → expansion plays',
        body: 'Hi {{firstName}}, teams balancing product-led adoption with enterprise expansion often struggle to operationalize their best account signals. RevenueOS helps go-to-market teams prioritize who is warming up, why, and what message should go out next.',
      },
      { id: 'pel-2', type: 'linkedin_message', day: 3, message: 'Curious how your team turns product usage changes into seller actions today.' },
      { id: 'pel-3', type: 'wait', day: 5, duration: 2 },
      {
        id: 'pel-4',
        type: 'email',
        day: 7,
        subject: 'Examples from product-led teams',
        body: 'Happy to share a couple of examples from product-led teams that improved expansion timing and rep focus without heavy process changes.',
      },
    ],
    stats: { sent: 1420, openRate: 52.4, replyRate: 26.7, meetingsBooked: 27, stepDropoff: [100, 81, 63, 38] },
    emailVariants: ['Usage-spike trigger', 'Expansion committee map', 'Field + lifecycle alignment'],
    toneVariants: {
      formal: 'Structured and insight-led, emphasizing usage-to-revenue translation.',
      casual: 'Light, conversational, and centered on practical examples.',
    },
  },
  {
    id: 'post-demo-nudge',
    name: 'Post-Demo Momentum Nudge',
    description: 'Short follow-up sequence designed to keep multi-stakeholder deals moving after a demo or discovery call.',
    steps: [
      {
        id: 'pdm-1',
        type: 'email',
        day: 1,
        subject: 'Recap + next best actions for {{company}}',
        body: 'Thanks again for the conversation. Based on what you shared, the fastest path to value looks like starting with account prioritization, signal capture, and one manager inspection workflow. I summarized it below for easy internal sharing.',
      },
      { id: 'pdm-2', type: 'wait', day: 3, duration: 2 },
      { id: 'pdm-3', type: 'linkedin_message', day: 5, message: 'Sharing a short follow-up here in case it helps socializing the project internally.' },
      { id: 'pdm-4', type: 'call', day: 7, message: 'Ask whether there are additional stakeholders or blockers we should address.' },
    ],
    stats: { sent: 860, openRate: 63.8, replyRate: 31.4, meetingsBooked: 18, stepDropoff: [100, 69, 42, 24] },
    emailVariants: ['Executive recap', 'Pilot scope recap', 'ROI recap'],
    toneVariants: {
      formal: 'Executive and recommendation-oriented.',
      casual: 'Helpful, action-driven, and easy to forward.',
    },
  },
]
