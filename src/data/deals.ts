export type DealStage = 'Discovery' | 'Demo' | 'Proposal' | 'Negotiation' | 'Closed Won' | 'Closed Lost'
export type Severity = 'High' | 'Medium' | 'Low'
export type Impact = 'High' | 'Medium' | 'Low'

export interface RiskFactor {
  description: string
  severity: Severity
  mitigation: string
}

export interface NextBestAction {
  action: string
  expectedImpact: Impact
  cta: string
}

export interface DealActivity {
  description: string
  date: string
  type: string
}

export interface WeightedFactor {
  factor: string
  weight: number
}

export interface Deal {
  id: string
  title: string
  company: string
  contacts: string[]
  amount: number
  stage: DealStage
  owner: string
  closeDate: string
  age: number
  probability: number
  aiWinProbability: number
  aiRationale: string
  riskFactors: RiskFactor[]
  nextBestActions: NextBestAction[]
  recentActivity: DealActivity[]
  notes: string
  positiveFactors: WeightedFactor[]
  negativeFactors: WeightedFactor[]
}

export const deals: Deal[] = [
  {
    id: 'deal-stripe-expansion',
    title: 'Stripe Global RevOps Expansion',
    company: 'stripe',
    contacts: ['contact-alyssa-shen', 'contact-marcus-vale', 'contact-priya-nandakumar'],
    amount: 420000,
    stage: 'Negotiation',
    owner: 'Maya Chen',
    closeDate: '2025-06-28',
    age: 74,
    probability: 82,
    aiWinProbability: 86,
    aiRationale: 'Executive alignment is strong, product fit is clear, and recent meetings expanded the project from a pilot into a global rollout discussion. The remaining risk is budget timing with finance.',
    riskFactors: [
      { description: 'Finance wants a vendor consolidation narrative before approval.', severity: 'Medium', mitigation: 'Lead with ROI and consolidation benefits in final business case.' },
      { description: 'Security review still needs architecture validation.', severity: 'Low', mitigation: 'Share implementation diagram and data retention details.' },
    ],
    nextBestActions: [
      { action: 'Send executive summary tailored to finance and ops.', expectedImpact: 'High', cta: 'Draft summary' },
      { action: 'Book a technical validation call with systems team.', expectedImpact: 'Medium', cta: 'Schedule review' },
    ],
    recentActivity: [
      { description: 'Alyssa requested revised ROI model with global rollout assumptions.', date: '2025-05-31', type: 'meeting' },
      { description: 'Marcus forwarded internal note about late-stage forecast slippage.', date: '2025-05-28', type: 'email' },
      { description: 'Priya viewed architecture docs twice this week.', date: '2025-05-26', type: 'signal' },
    ],
    notes: 'Strong internal championing from RevOps and enterprise sales. Ensure finance concerns are addressed with quantified time savings and forecast confidence metrics.',
    positiveFactors: [
      { factor: 'Multiple active champions', weight: 32 },
      { factor: 'High urgency around forecast quality', weight: 24 },
      { factor: 'Recent executive engagement', weight: 18 },
    ],
    negativeFactors: [
      { factor: 'Procurement scrutiny on tool overlap', weight: 14 },
      { factor: 'Security review not completed', weight: 10 },
    ],
  },
  {
    id: 'deal-figma-analytics',
    title: 'Figma Enterprise Signal Layer',
    company: 'figma',
    contacts: ['contact-jordan-kim', 'contact-lena-ortega', 'contact-owen-cho'],
    amount: 285000,
    stage: 'Proposal',
    owner: 'Ethan Cole',
    closeDate: '2025-07-12',
    age: 46,
    probability: 64,
    aiWinProbability: 68,
    aiRationale: 'The analytics and RevOps leaders are engaged and see the need, but enterprise sales wants clearer rollout sequencing and measurable impact before advancing to legal.',
    riskFactors: [
      { description: 'Proposal needs stronger PLG-to-enterprise use cases.', severity: 'Medium', mitigation: 'Show examples connecting usage spikes to account plays.' },
      { description: 'Budget owner is supportive but not yet vocal.', severity: 'Medium', mitigation: 'Arm Jordan with a business case summary.' },
    ],
    nextBestActions: [
      { action: 'Customize proposal with enterprise expansion workflow examples.', expectedImpact: 'High', cta: 'Refresh proposal' },
      { action: 'Share a short benchmark deck for reply rate lift.', expectedImpact: 'Medium', cta: 'Send benchmark' },
    ],
    recentActivity: [
      { description: 'Jordan asked for more examples of product-signal-driven plays.', date: '2025-05-30', type: 'email' },
      { description: 'Owen attended demo and asked about rep workflow adoption.', date: '2025-05-24', type: 'meeting' },
    ],
    notes: 'Momentum is good, but the deal needs a crisp narrative about how RevenueOS improves enterprise rep focus without creating more process.',
    positiveFactors: [
      { factor: 'Clear analytics pain point', weight: 27 },
      { factor: 'Cross-functional interest', weight: 19 },
    ],
    negativeFactors: [
      { factor: 'Value story needs refinement', weight: 18 },
      { factor: 'No legal review started yet', weight: 9 },
    ],
  },
  {
    id: 'deal-ramp-outbound',
    title: 'Ramp Outbound Command Center',
    company: 'ramp',
    contacts: ['contact-samir-patel', 'contact-nora-ellis', 'contact-daniel-ross'],
    amount: 350000,
    stage: 'Demo',
    owner: 'Olivia Hart',
    closeDate: '2025-07-25',
    age: 29,
    probability: 58,
    aiWinProbability: 63,
    aiRationale: 'Ramp has urgency around outbound precision and sequence performance. The project is compelling for SDR leadership, but finance has already signaled resistance to point solutions.',
    riskFactors: [
      { description: 'Finance is worried about adding another GTM tool.', severity: 'High', mitigation: 'Position as a consolidation layer that replaces manual workflows.' },
      { description: 'Need evidence that SDR managers will adopt it weekly.', severity: 'Medium', mitigation: 'Show manager dashboard and coaching cadence workflows.' },
    ],
    nextBestActions: [
      { action: 'Run tailored demo for SDR managers with live sequence use cases.', expectedImpact: 'High', cta: 'Prepare demo' },
      { action: 'Build ROI worksheet around rep capacity and reply lift.', expectedImpact: 'High', cta: 'Build ROI model' },
    ],
    recentActivity: [
      { description: 'Samir replied with a list of top outbound pain points.', date: '2025-05-31', type: 'email' },
      { description: 'Nora shared current SDR workflow screenshots.', date: '2025-05-29', type: 'signal' },
    ],
    notes: 'Get finance involved early with a strong before/after story. SDR leadership is highly engaged and can help drive urgency.',
    positiveFactors: [
      { factor: 'High outbound urgency', weight: 25 },
      { factor: 'Strong SDR champion', weight: 22 },
      { factor: 'Hiring surge in RevOps', weight: 16 },
    ],
    negativeFactors: [
      { factor: 'Finance skepticism', weight: 21 },
      { factor: 'Pilot scope still undefined', weight: 12 },
    ],
  },
  {
    id: 'deal-linear-foundation',
    title: 'Linear Enterprise GTM Foundation',
    company: 'linear',
    contacts: ['contact-mei-tan', 'contact-adam-fischer'],
    amount: 165000,
    stage: 'Discovery',
    owner: 'Maya Chen',
    closeDate: '2025-08-09',
    age: 16,
    probability: 44,
    aiWinProbability: 51,
    aiRationale: 'The strategic fit is excellent, but the deal is early and the team is still defining what their first formal revenue operating system should include.',
    riskFactors: [
      { description: 'Requirements are still evolving with a new revenue leader.', severity: 'Medium', mitigation: 'Lead with phased rollout options instead of full-scope pricing.' },
      { description: 'Smaller team needs lightweight implementation proof.', severity: 'Low', mitigation: 'Emphasize fast deployment and opinionated templates.' },
    ],
    nextBestActions: [
      { action: 'Frame a 30-day rollout plan for first use cases.', expectedImpact: 'High', cta: 'Create rollout plan' },
      { action: 'Send account inspection template for Mei to react to.', expectedImpact: 'Medium', cta: 'Share template' },
    ],
    recentActivity: [
      { description: 'Mei requested examples from teams formalizing enterprise motions.', date: '2025-05-30', type: 'email' },
      { description: 'Adam reviewed onboarding and workflow docs.', date: '2025-05-27', type: 'signal' },
    ],
    notes: 'Keep the motion consultative. Their team wants a practical operating system, not a large systems project.',
    positiveFactors: [
      { factor: 'New revenue leadership', weight: 23 },
      { factor: 'Clear process gap', weight: 20 },
    ],
    negativeFactors: [
      { factor: 'Early-stage scope definition', weight: 18 },
      { factor: 'Smaller budget range', weight: 10 },
    ],
  },
  {
    id: 'deal-vercel-strategic',
    title: 'Vercel Strategic Account Orchestration',
    company: 'vercel',
    contacts: ['contact-sofia-rivera', 'contact-hugo-martin'],
    amount: 310000,
    stage: 'Negotiation',
    owner: 'Ethan Cole',
    closeDate: '2025-06-24',
    age: 63,
    probability: 78,
    aiWinProbability: 81,
    aiRationale: 'The strategic sales and GTM ops teams have aligned on a concrete rollout plan. Remaining work is around legal language and one final stakeholder review.',
    riskFactors: [
      { description: 'Legal redlines on data retention still open.', severity: 'Medium', mitigation: 'Provide updated security appendix and retention controls.' },
      { description: 'Need one more exec sign-off from COO office.', severity: 'Low', mitigation: 'Package concise executive summary for final approver.' },
    ],
    nextBestActions: [
      { action: 'Respond to legal questionnaire within 24 hours.', expectedImpact: 'High', cta: 'Complete redlines' },
      { action: 'Draft COO-ready summary with rollout milestones.', expectedImpact: 'Medium', cta: 'Draft summary' },
    ],
    recentActivity: [
      { description: 'Hugo requested contract language for data residency.', date: '2025-05-31', type: 'email' },
      { description: 'Sofia confirmed strategic sellers will join pilot cohort.', date: '2025-05-29', type: 'call' },
    ],
    notes: 'Deal is late-stage and healthy. Execution quality over the next week matters more than new discovery.',
    positiveFactors: [
      { factor: 'Defined rollout plan', weight: 29 },
      { factor: 'Strong strategic sponsor', weight: 22 },
    ],
    negativeFactors: [
      { factor: 'Legal review pending', weight: 13 },
      { factor: 'Final executive sign-off', weight: 8 },
    ],
  },
  {
    id: 'deal-datadog-scale',
    title: 'Datadog Global Deal Inspection',
    company: 'datadog',
    contacts: ['contact-olivia-dunn', 'contact-evan-morris'],
    amount: 510000,
    stage: 'Proposal',
    owner: 'Jules Bennett',
    closeDate: '2025-07-31',
    age: 52,
    probability: 61,
    aiWinProbability: 59,
    aiRationale: 'The problem is real, but a large existing systems footprint means every new platform faces scrutiny. Success depends on showing how RevenueOS complements rather than duplicates current tools.',
    riskFactors: [
      { description: 'Large incumbent tooling stack makes overlap concerns likely.', severity: 'High', mitigation: 'Map RevenueOS to workflow gaps rather than dashboard overlap.' },
      { description: 'Global rollout may require phased procurement.', severity: 'Medium', mitigation: 'Offer a regional pilot as first milestone.' },
    ],
    nextBestActions: [
      { action: 'Create architecture gap analysis against current stack.', expectedImpact: 'High', cta: 'Build comparison' },
      { action: 'Package a regional pilot proposal for one theater.', expectedImpact: 'Medium', cta: 'Scope pilot' },
    ],
    recentActivity: [
      { description: 'Olivia asked how RevenueOS differs from current BI tooling.', date: '2025-05-28', type: 'meeting' },
      { description: 'Evan requested architecture details for data residency.', date: '2025-05-22', type: 'email' },
    ],
    notes: 'This is a value-clarity deal. Position around rep workflow, account context, and inspection routines, not more analytics dashboards.',
    positiveFactors: [
      { factor: 'Clear need at scale', weight: 24 },
      { factor: 'Executive strategy stakeholder engaged', weight: 17 },
    ],
    negativeFactors: [
      { factor: 'Tool overlap concern', weight: 24 },
      { factor: 'Complex procurement path', weight: 12 },
    ],
  },
  {
    id: 'deal-notion-lifecycle',
    title: 'Notion Lifecycle Signal Studio',
    company: 'notion',
    contacts: ['contact-miles-hart', 'contact-hannah-bell'],
    amount: 195000,
    stage: 'Demo',
    owner: 'Olivia Hart',
    closeDate: '2025-07-18',
    age: 24,
    probability: 55,
    aiWinProbability: 57,
    aiRationale: 'Marketing and solutions leaders see a strong fit for signal-based personalization, but the internal owner needs a clearer expansion use case to pull in RevOps and budget.',
    riskFactors: [
      { description: 'No formal RevOps sponsor yet.', severity: 'High', mitigation: 'Use demo to create urgency for a cross-functional working session.' },
      { description: 'Business case is still campaign-centric instead of revenue-centric.', severity: 'Medium', mitigation: 'Tie outcomes to expansion and pre-sales efficiency.' },
    ],
    nextBestActions: [
      { action: 'Tailor demo to expansion and buying committee context.', expectedImpact: 'High', cta: 'Refocus demo' },
      { action: 'Suggest a cross-functional workshop with marketing + pre-sales.', expectedImpact: 'Medium', cta: 'Invite team' },
    ],
    recentActivity: [
      { description: 'Miles clicked outreach personalization examples twice.', date: '2025-05-31', type: 'signal' },
      { description: 'Hannah asked for stakeholder mapping examples.', date: '2025-05-25', type: 'email' },
    ],
    notes: 'Opportunity could expand if we help them connect lifecycle personalization to enterprise evaluation coordination.',
    positiveFactors: [
      { factor: 'Curious marketing champion', weight: 19 },
      { factor: 'Clear personalization use case', weight: 18 },
    ],
    negativeFactors: [
      { factor: 'Missing ops sponsor', weight: 20 },
      { factor: 'Budget owner not identified', weight: 11 },
    ],
  },
  {
    id: 'deal-snowflake-pods',
    title: 'Snowflake Industry Pod Intelligence',
    company: 'snowflake',
    contacts: ['contact-rachel-park'],
    amount: 460000,
    stage: 'Discovery',
    owner: 'Jules Bennett',
    closeDate: '2025-08-20',
    age: 18,
    probability: 37,
    aiWinProbability: 41,
    aiRationale: 'Snowflake fits well on paper, but there is only one active stakeholder and no operational owner yet. The deal needs broader alignment before it can advance.',
    riskFactors: [
      { description: 'Single-threaded engagement.', severity: 'High', mitigation: 'Use Rachel to map pod leaders and ops partners.' },
      { description: 'Unclear procurement path for strategic programs.', severity: 'Medium', mitigation: 'Clarify which team owns the budget and rollout.' },
    ],
    nextBestActions: [
      { action: 'Ask for introductions to revenue ops and field enablement.', expectedImpact: 'High', cta: 'Request introductions' },
      { action: 'Share industry-pod playbook concept memo.', expectedImpact: 'Medium', cta: 'Send memo' },
    ],
    recentActivity: [
      { description: 'Rachel requested examples of vertical-specific account planning.', date: '2025-05-27', type: 'email' },
    ],
    notes: 'The idea resonates but the motion is still single-threaded. Avoid overcommitting forecast here.',
    positiveFactors: [
      { factor: 'Strong strategic fit', weight: 18 },
      { factor: 'Industry pod motion emerging', weight: 13 },
    ],
    negativeFactors: [
      { factor: 'Only one stakeholder engaged', weight: 22 },
      { factor: 'Budget owner unknown', weight: 15 },
    ],
  },
  {
    id: 'deal-confluent-abm',
    title: 'Confluent Signal-Driven ABM',
    company: 'confluent',
    contacts: ['contact-diego-alvarez'],
    amount: 175000,
    stage: 'Demo',
    owner: 'Maya Chen',
    closeDate: '2025-07-22',
    age: 20,
    probability: 49,
    aiWinProbability: 53,
    aiRationale: 'ABM leadership is engaged and the product story is strong, but sales ownership is still loose. The deal can progress if marketing pulls in partner or sales leadership soon.',
    riskFactors: [
      { description: 'Marketing-led opportunity without sales sponsor.', severity: 'High', mitigation: 'Ask Diego to include partner sales or regional field leader in next call.' },
      { description: 'Use case may feel tactical instead of strategic.', severity: 'Medium', mitigation: 'Show how signal orchestration supports larger enterprise plays.' },
    ],
    nextBestActions: [
      { action: 'Tailor demo to named-account coordination with partner sales.', expectedImpact: 'High', cta: 'Customize demo' },
      { action: 'Draft one-pager for sales leadership on account signal value.', expectedImpact: 'Medium', cta: 'Draft one-pager' },
    ],
    recentActivity: [
      { description: 'Diego asked for examples of coordinated sales + ABM plays.', date: '2025-05-29', type: 'email' },
    ],
    notes: 'Marketing is leaning in. We need to turn curiosity into a wider buying committee.',
    positiveFactors: [
      { factor: 'Strong ABM relevance', weight: 17 },
    ],
    negativeFactors: [
      { factor: 'Missing sales sponsor', weight: 21 },
      { factor: 'Early business case', weight: 12 },
    ],
  },
  {
    id: 'deal-pendo-expansion',
    title: 'Pendo Customer Growth Intelligence',
    company: 'pendo',
    contacts: ['contact-sasha-cole'],
    amount: 145000,
    stage: 'Closed Won',
    owner: 'Ethan Cole',
    closeDate: '2025-05-14',
    age: 58,
    probability: 100,
    aiWinProbability: 100,
    aiRationale: 'Deal closed after the customer growth team aligned around expansion signal visibility and customer marketing coordination.',
    riskFactors: [
      { description: 'Onboarding workload during Q3.', severity: 'Low', mitigation: 'Stagger use case activation over first 45 days.' },
    ],
    nextBestActions: [
      { action: 'Kick off onboarding and success plan.', expectedImpact: 'High', cta: 'Start onboarding' },
    ],
    recentActivity: [
      { description: 'Master services agreement signed.', date: '2025-05-14', type: 'email' },
      { description: 'Expansion pilot use cases finalized.', date: '2025-05-12', type: 'meeting' },
    ],
    notes: 'Great customer for a land-and-expand success story.',
    positiveFactors: [
      { factor: 'Clear champion', weight: 25 },
      { factor: 'Fast pilot alignment', weight: 21 },
    ],
    negativeFactors: [
      { factor: 'Limited onboarding bandwidth', weight: 6 },
    ],
  },
  {
    id: 'deal-mixpanel-campaigns',
    title: 'Mixpanel Outbound Personalization',
    company: 'mixpanel',
    contacts: ['contact-gabe-chen'],
    amount: 185000,
    stage: 'Closed Lost',
    owner: 'Olivia Hart',
    closeDate: '2025-05-07',
    age: 41,
    probability: 0,
    aiWinProbability: 12,
    aiRationale: 'The team liked the concept, but the opportunity remained marketing-only and ultimately lost budget priority to a broader campaign platform investment.',
    riskFactors: [
      { description: 'Sales never joined the buying process.', severity: 'High', mitigation: 'Future re-engagement should start with demand gen and sales together.' },
    ],
    nextBestActions: [
      { action: 'Set reminder to re-engage after new fiscal planning cycle.', expectedImpact: 'Low', cta: 'Schedule re-open' },
    ],
    recentActivity: [
      { description: 'Gabe shared that budget moved to a larger campaign platform project.', date: '2025-05-07', type: 'call' },
    ],
    notes: 'Loss reason highlights the need for broader stakeholder mapping early in the cycle.',
    positiveFactors: [
      { factor: 'Strong marketing interest', weight: 12 },
    ],
    negativeFactors: [
      { factor: 'No sales sponsor', weight: 24 },
      { factor: 'Budget redirected', weight: 18 },
    ],
  },
  {
    id: 'deal-greenhouse-efficiency',
    title: 'Greenhouse Revenue Workflow Upgrade',
    company: 'greenhouse',
    contacts: ['contact-noah-singh'],
    amount: 128000,
    stage: 'Proposal',
    owner: 'Jules Bennett',
    closeDate: '2025-07-05',
    age: 33,
    probability: 57,
    aiWinProbability: 62,
    aiRationale: 'The revenue systems lead is engaged and the lightweight implementation story resonates. The main question is whether Greenhouse sees enough urgency to prioritize this quarter.',
    riskFactors: [
      { description: 'Team is budget conscious and PE-backed.', severity: 'Medium', mitigation: 'Emphasize efficiency, fast time-to-value, and low services burden.' },
      { description: 'Use cases may feel incremental without field leader backing.', severity: 'Medium', mitigation: 'Add enablement outcomes and seller productivity metrics to proposal.' },
    ],
    nextBestActions: [
      { action: 'Send lean rollout plan with milestone-based pricing narrative.', expectedImpact: 'High', cta: 'Send rollout' },
      { action: 'Offer a manager-focused walkthrough for sales enablement.', expectedImpact: 'Medium', cta: 'Invite enablement' },
    ],
    recentActivity: [
      { description: 'Noah reviewed proposal twice and forwarded it internally.', date: '2025-05-30', type: 'signal' },
    ],
    notes: 'A clean, efficient story wins here. Keep scope tight and implementation simple.',
    positiveFactors: [
      { factor: 'Implementation fit', weight: 20 },
      { factor: 'Engaged systems owner', weight: 18 },
    ],
    negativeFactors: [
      { factor: 'Quarter prioritization unclear', weight: 17 },
      { factor: 'Budget sensitivity', weight: 14 },
    ],
  },
]
