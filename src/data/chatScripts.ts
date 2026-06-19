export const suggestedPrompts = [
  'Who are my hottest accounts this week?',
  'Draft a follow-up to Stripe',
  'Summarize pipeline risk',
  'Which deals need attention?',
  'Show me buying signals from last 7 days',
]

export const chatResponses: Record<string, string[]> = {
  'who are my hottest accounts this week?': [
    'Your hottest accounts this week are Stripe, Ramp, and Vercel. ',
    'Stripe has the strongest fit score and multiple active stakeholders in negotiation. ',
    'Ramp is responding quickly to outbound workflow messaging, while Vercel is late-stage with legal already in motion.',
  ],
  stripe: [
    'Here is a strong follow-up angle for Stripe: lead with forecast confidence and vendor consolidation. ',
    'Alyssa and Marcus are aligned on the value, while Emma needs a tighter ROI and governance story. ',
    'I would send a short executive summary plus a technical validation invite for Priya.',
  ],
  'pipeline risk': [
    'Primary pipeline risk sits in Datadog, Snowflake, and Ramp. ',
    'Datadog still questions overlap with existing tooling, Snowflake is single-threaded, and Ramp has a real finance objection. ',
    'Best mitigation: tighten the value narrative and widen the buying committee in the next 5 business days.',
  ],
  'which deals need attention?': [
    'Three deals need attention right now. ',
    'Ramp needs a finance-ready ROI story, Notion needs a RevOps sponsor, and Snowflake needs at least two more stakeholders before forecast confidence should increase. ',
    'Would you like a next-step brief for one of them?',
  ],
  'buying signals': [
    'In the last 7 days, the strongest buying signals came from Stripe, Vercel, and Ramp. ',
    'Stripe published executive commentary on forecast accuracy, Vercel raised capital for enterprise GTM, and Ramp is hiring heavily into sales systems and SDR management. ',
    'Those signals all map to urgency around workflow visibility and seller prioritization.',
  ],
  default: [
    'I analyzed the latest RevenueOS workspace signals and found a few themes. ',
    'High-fit accounts are responding best to messaging around pipeline visibility, signal orchestration, and seller focus. ',
    'If you want, I can turn this into a follow-up draft, a risk summary, or a ranked account list.',
  ],
}
