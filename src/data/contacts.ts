export type ContactSeniority = 'C-Suite' | 'VP' | 'Director' | 'Manager' | 'IC'
export type ContactPersona = 'Champion' | 'Decision Maker' | 'Influencer' | 'Blocker'
export type Influence = 'High' | 'Medium' | 'Low'
export type Relationship = 'Ally' | 'Neutral' | 'Risk'

export interface EngagementBreakdown {
  emailOpens: number
  replies: number
  siteVisits: number
  meetings: number
}

export interface SocialActivityItem {
  platform: string
  content: string
  date: string
  likes: number
  comments: number
  topic: string
}

export interface CareerHistoryItem {
  company: string
  title: string
  start: string
  end: string
  description: string
}

export interface AIInsights {
  talkingPoints: string[]
  priorities: string[]
  communicationStyle: string
  bestTimeToReach: string
  bestChannel: string
}

export interface StakeholderLink {
  contactId: string
  role: string
  influence: Influence
  relationship: Relationship
}

export interface Contact {
  id: string
  name: string
  title: string
  company: string
  location: string
  email: string
  phone: string
  seniority: ContactSeniority
  persona: ContactPersona
  engagementScore: number
  engagementBreakdown: EngagementBreakdown
  engagementTrend: number[]
  socialActivity: SocialActivityItem[]
  careerHistory: CareerHistoryItem[]
  aiInsights: AIInsights
  avatar: string
  color: string
  stakeholderMap: StakeholderLink[]
}

export const contacts: Contact[] = [
  {
    id: 'contact-alyssa-shen',
    name: 'Alyssa Shen',
    title: 'VP of Revenue Operations',
    company: 'stripe',
    location: 'San Francisco, CA',
    email: 'a***@stripe.com',
    phone: '(415) ***-1184',
    seniority: 'VP',
    persona: 'Decision Maker',
    engagementScore: 92,
    engagementBreakdown: { emailOpens: 14, replies: 4, siteVisits: 11, meetings: 2 },
    engagementTrend: [52, 56, 59, 64, 71, 84, 92],
    socialActivity: [
      { platform: 'LinkedIn', content: 'Scaling global revenue systems requires a better operating rhythm between ops, sales, and data.', date: '2025-05-29', likes: 212, comments: 18, topic: 'Revenue Operations' },
      { platform: 'LinkedIn', content: 'Excited to see more AI copilots move from dashboards into workflows.', date: '2025-05-17', likes: 164, comments: 12, topic: 'AI in GTM' },
    ],
    careerHistory: [
      { company: 'Stripe', title: 'VP of Revenue Operations', start: '2022', end: 'Present', description: 'Owns revenue systems, forecasting processes, and GTM planning.' },
      { company: 'Asana', title: 'Senior Director, GTM Strategy', start: '2018', end: '2022', description: 'Built global planning and territory programs.' },
      { company: 'Google', title: 'Sales Strategy Lead', start: '2014', end: '2018', description: 'Led growth planning for cloud sales teams.' },
    ],
    aiInsights: {
      talkingPoints: ['Global pipeline hygiene', 'Reducing manual forecast prep', 'Cross-functional signal sharing'],
      priorities: ['Standardize account inspection', 'Improve seller productivity', 'Increase board confidence in forecast accuracy'],
      communicationStyle: 'Data-driven, concise, and responsive to operational benchmarks.',
      bestTimeToReach: 'Tuesday or Thursday mornings',
      bestChannel: 'Email followed by a short call recap',
    },
    avatar: 'AS',
    color: 'from-indigo-500 via-violet-500 to-fuchsia-500',
    stakeholderMap: [
      { contactId: 'contact-marcus-vale', role: 'Sales leader partner', influence: 'High', relationship: 'Ally' },
      { contactId: 'contact-priya-nandakumar', role: 'Systems architect', influence: 'Medium', relationship: 'Ally' },
      { contactId: 'contact-emma-brooks', role: 'Finance approver', influence: 'High', relationship: 'Neutral' },
    ],
  },
  {
    id: 'contact-marcus-vale',
    name: 'Marcus Vale',
    title: 'VP of Enterprise Sales',
    company: 'stripe',
    location: 'New York, NY',
    email: 'm***@stripe.com',
    phone: '(646) ***-7719',
    seniority: 'VP',
    persona: 'Champion',
    engagementScore: 86,
    engagementBreakdown: { emailOpens: 9, replies: 3, siteVisits: 8, meetings: 1 },
    engagementTrend: [44, 48, 55, 59, 64, 77, 86],
    socialActivity: [
      { platform: 'LinkedIn', content: 'Enterprise sellers win when they can react to buying signals in real time.', date: '2025-05-23', likes: 140, comments: 11, topic: 'Enterprise Sales' },
      { platform: 'LinkedIn', content: 'The best account plans feel alive, not static.', date: '2025-05-10', likes: 96, comments: 7, topic: 'Account Planning' },
    ],
    careerHistory: [
      { company: 'Stripe', title: 'VP of Enterprise Sales', start: '2023', end: 'Present', description: 'Leads strategic and enterprise field teams.' },
      { company: 'Datadog', title: 'Regional Vice President', start: '2019', end: '2023', description: 'Scaled enterprise territories across the East region.' },
      { company: 'New Relic', title: 'Area Sales Director', start: '2014', end: '2019', description: 'Managed named account and expansion programs.' },
    ],
    aiInsights: {
      talkingPoints: ['Faster multi-threading', 'Deal inspection cadence', 'Seller focus on warm accounts'],
      priorities: ['Increase strategic pipeline coverage', 'Improve executive follow-up quality', 'Reduce slippage late in quarter'],
      communicationStyle: 'Direct and outcome-oriented; likes specific examples from peer teams.',
      bestTimeToReach: 'Early afternoon',
      bestChannel: 'Short email with benchmark data',
    },
    avatar: 'MV',
    color: 'from-blue-500 via-indigo-500 to-violet-500',
    stakeholderMap: [
      { contactId: 'contact-alyssa-shen', role: 'Ops owner', influence: 'High', relationship: 'Ally' },
      { contactId: 'contact-emma-brooks', role: 'Budget stakeholder', influence: 'Medium', relationship: 'Neutral' },
    ],
  },
  {
    id: 'contact-priya-nandakumar',
    name: 'Priya Nandakumar',
    title: 'Director of Revenue Systems',
    company: 'stripe',
    location: 'Seattle, WA',
    email: 'p***@stripe.com',
    phone: '(206) ***-4408',
    seniority: 'Director',
    persona: 'Influencer',
    engagementScore: 79,
    engagementBreakdown: { emailOpens: 12, replies: 2, siteVisits: 9, meetings: 1 },
    engagementTrend: [38, 41, 46, 51, 58, 69, 79],
    socialActivity: [
      { platform: 'LinkedIn', content: 'RevOps architecture needs to support experimentation without sacrificing control.', date: '2025-05-26', likes: 87, comments: 6, topic: 'Revenue Systems' },
      { platform: 'LinkedIn', content: 'A strong GTM data model unlocks better coaching.', date: '2025-05-08', likes: 72, comments: 4, topic: 'Data Strategy' },
    ],
    careerHistory: [
      { company: 'Stripe', title: 'Director of Revenue Systems', start: '2021', end: 'Present', description: 'Owns architecture across CRM, enrichment, and reporting.' },
      { company: 'Twilio', title: 'Senior Manager, Sales Systems', start: '2017', end: '2021', description: 'Scaled automation for global field teams.' },
      { company: 'Oracle', title: 'CRM Program Manager', start: '2012', end: '2017', description: 'Delivered enterprise CRM transformation programs.' },
    ],
    aiInsights: {
      talkingPoints: ['Low-lift implementation', 'Workflow automation', 'Governance and auditability'],
      priorities: ['Reduce manual routing', 'Simplify enrichment tooling', 'Support account-level visibility'],
      communicationStyle: 'Thoughtful and technical; appreciates implementation detail.',
      bestTimeToReach: 'Wednesday mornings',
      bestChannel: 'Detailed email with architecture diagram',
    },
    avatar: 'PN',
    color: 'from-teal-500 via-cyan-500 to-sky-500',
    stakeholderMap: [
      { contactId: 'contact-alyssa-shen', role: 'Executive sponsor', influence: 'High', relationship: 'Ally' },
      { contactId: 'contact-emma-brooks', role: 'Security and finance review', influence: 'Medium', relationship: 'Neutral' },
    ],
  },
  {
    id: 'contact-emma-brooks',
    name: 'Emma Brooks',
    title: 'Senior Finance Manager, GTM',
    company: 'stripe',
    location: 'Chicago, IL',
    email: 'e***@stripe.com',
    phone: '(312) ***-9184',
    seniority: 'Manager',
    persona: 'Blocker',
    engagementScore: 58,
    engagementBreakdown: { emailOpens: 6, replies: 1, siteVisits: 4, meetings: 0 },
    engagementTrend: [31, 34, 39, 42, 45, 51, 58],
    socialActivity: [
      { platform: 'LinkedIn', content: 'Good planning tools shrink the gap between top-down goals and field execution.', date: '2025-05-14', likes: 43, comments: 2, topic: 'Finance Planning' },
    ],
    careerHistory: [
      { company: 'Stripe', title: 'Senior Finance Manager, GTM', start: '2022', end: 'Present', description: 'Reviews GTM investments and performance metrics.' },
      { company: 'Dropbox', title: 'Finance Manager', start: '2018', end: '2022', description: 'Led SaaS growth planning and forecasting.' },
      { company: 'PwC', title: 'Advisory Consultant', start: '2014', end: '2018', description: 'Focused on operational finance programs.' },
    ],
    aiInsights: {
      talkingPoints: ['Time-to-value', 'Vendor consolidation', 'Forecast confidence'],
      priorities: ['Protect budget efficiency', 'Limit implementation risk', 'Improve reporting accuracy'],
      communicationStyle: 'Analytical and skeptical; needs a strong business case.',
      bestTimeToReach: 'Monday mornings',
      bestChannel: 'Executive summary deck',
    },
    avatar: 'EB',
    color: 'from-amber-500 via-orange-500 to-red-500',
    stakeholderMap: [
      { contactId: 'contact-alyssa-shen', role: 'Business case owner', influence: 'High', relationship: 'Neutral' },
      { contactId: 'contact-marcus-vale', role: 'Field pressure', influence: 'Medium', relationship: 'Risk' },
    ],
  },
  {
    id: 'contact-jordan-kim',
    name: 'Jordan Kim',
    title: 'Head of Revenue Analytics',
    company: 'figma',
    location: 'San Francisco, CA',
    email: 'j***@figma.com',
    phone: '(415) ***-2203',
    seniority: 'Director',
    persona: 'Champion',
    engagementScore: 88,
    engagementBreakdown: { emailOpens: 11, replies: 4, siteVisits: 10, meetings: 1 },
    engagementTrend: [46, 49, 53, 61, 72, 81, 88],
    socialActivity: [
      { platform: 'LinkedIn', content: 'PLG data is only useful when reps can act on it inside their flow of work.', date: '2025-05-31', likes: 134, comments: 10, topic: 'Product-Led Growth' },
      { platform: 'LinkedIn', content: 'Loved the conversations at Config around GTM systems simplification.', date: '2025-05-18', likes: 98, comments: 5, topic: 'GTM Systems' },
    ],
    careerHistory: [
      { company: 'Figma', title: 'Head of Revenue Analytics', start: '2022', end: 'Present', description: 'Connects product usage insights to enterprise sales planning.' },
      { company: 'Dropbox', title: 'Director, Business Analytics', start: '2018', end: '2022', description: 'Owned strategic reporting for self-serve and sales motions.' },
      { company: 'LinkedIn', title: 'Analytics Manager', start: '2014', end: '2018', description: 'Supported go-to-market planning and experimentation.' },
    ],
    aiInsights: {
      talkingPoints: ['PLG + sales orchestration', 'Usage-triggered outreach', 'Pipeline inspection'],
      priorities: ['Increase precision on enterprise expansion', 'Reduce siloed dashboards', 'Operationalize product signals'],
      communicationStyle: 'Curious and collaborative; loves examples grounded in metrics.',
      bestTimeToReach: 'Friday mornings',
      bestChannel: 'Thoughtful email with screenshots',
    },
    avatar: 'JK',
    color: 'from-rose-500 via-pink-500 to-fuchsia-500',
    stakeholderMap: [
      { contactId: 'contact-lena-ortega', role: 'Revenue ops counterpart', influence: 'High', relationship: 'Ally' },
      { contactId: 'contact-owen-cho', role: 'Enterprise sales sponsor', influence: 'High', relationship: 'Ally' },
    ],
  },
  {
    id: 'contact-lena-ortega',
    name: 'Lena Ortega',
    title: 'Director of Revenue Operations',
    company: 'figma',
    location: 'Austin, TX',
    email: 'l***@figma.com',
    phone: '(512) ***-6641',
    seniority: 'Director',
    persona: 'Decision Maker',
    engagementScore: 84,
    engagementBreakdown: { emailOpens: 10, replies: 2, siteVisits: 7, meetings: 1 },
    engagementTrend: [40, 44, 47, 56, 63, 74, 84],
    socialActivity: [
      { platform: 'LinkedIn', content: 'The best ops teams give reps confidence, not more tabs.', date: '2025-05-20', likes: 119, comments: 9, topic: 'RevOps' },
    ],
    careerHistory: [
      { company: 'Figma', title: 'Director of Revenue Operations', start: '2021', end: 'Present', description: 'Leads forecasting, systems, and operating cadence.' },
      { company: 'Slack', title: 'Senior Manager, GTM Operations', start: '2017', end: '2021', description: 'Scaled revenue programs through hypergrowth.' },
      { company: 'Salesforce', title: 'Business Operations Lead', start: '2013', end: '2017', description: 'Focused on enterprise sales process design.' },
    ],
    aiInsights: {
      talkingPoints: ['Rep workflow design', 'Operational simplicity', 'Signal triage'],
      priorities: ['Shorten time from signal to action', 'Increase visibility for field managers', 'Reduce admin work'],
      communicationStyle: 'Pragmatic and detail-oriented.',
      bestTimeToReach: 'Midday Wednesday',
      bestChannel: 'Email with a 20-minute demo invite',
    },
    avatar: 'LO',
    color: 'from-violet-500 via-purple-500 to-indigo-500',
    stakeholderMap: [
      { contactId: 'contact-jordan-kim', role: 'Analytics partner', influence: 'Medium', relationship: 'Ally' },
      { contactId: 'contact-owen-cho', role: 'Budget partner', influence: 'High', relationship: 'Neutral' },
    ],
  },
  {
    id: 'contact-owen-cho',
    name: 'Owen Cho',
    title: 'VP of Enterprise Sales',
    company: 'figma',
    location: 'New York, NY',
    email: 'o***@figma.com',
    phone: '(917) ***-1046',
    seniority: 'VP',
    persona: 'Influencer',
    engagementScore: 76,
    engagementBreakdown: { emailOpens: 8, replies: 2, siteVisits: 6, meetings: 1 },
    engagementTrend: [35, 40, 44, 49, 57, 67, 76],
    socialActivity: [
      { platform: 'LinkedIn', content: 'Enterprise teams need better context before every customer interaction.', date: '2025-05-22', likes: 76, comments: 4, topic: 'Sales Productivity' },
    ],
    careerHistory: [
      { company: 'Figma', title: 'VP of Enterprise Sales', start: '2023', end: 'Present', description: 'Owns enterprise expansion and new logo strategy.' },
      { company: 'Box', title: 'RVP, East', start: '2018', end: '2023', description: 'Ran large-account sales and pipeline management.' },
      { company: 'Okta', title: 'Director of Sales', start: '2014', end: '2018', description: 'Built teams in strategic accounts.' },
    ],
    aiInsights: {
      talkingPoints: ['Account prioritization', 'Deal risk alerts', 'Better pre-meeting context'],
      priorities: ['Improve rep focus', 'Increase executive engagement quality', 'Protect large expansion deals'],
      communicationStyle: 'Fast-paced and interested in outcomes.',
      bestTimeToReach: 'Thursday afternoon',
      bestChannel: 'Short email and SMS follow-up',
    },
    avatar: 'OC',
    color: 'from-sky-500 via-blue-500 to-indigo-500',
    stakeholderMap: [
      { contactId: 'contact-lena-ortega', role: 'Ops guide', influence: 'High', relationship: 'Neutral' },
    ],
  },
  {
    id: 'contact-samir-patel',
    name: 'Samir Patel',
    title: 'VP of Sales Development',
    company: 'ramp',
    location: 'New York, NY',
    email: 's***@ramp.com',
    phone: '(212) ***-2088',
    seniority: 'VP',
    persona: 'Champion',
    engagementScore: 90,
    engagementBreakdown: { emailOpens: 16, replies: 5, siteVisits: 13, meetings: 2 },
    engagementTrend: [48, 52, 60, 68, 74, 86, 90],
    socialActivity: [
      { platform: 'LinkedIn', content: 'Outbound teams get better when intent data is actionable, not noisy.', date: '2025-05-30', likes: 211, comments: 19, topic: 'Outbound Strategy' },
      { platform: 'LinkedIn', content: 'Excited to keep building playbooks for our new regional teams.', date: '2025-05-12', likes: 132, comments: 8, topic: 'Team Building' },
    ],
    careerHistory: [
      { company: 'Ramp', title: 'VP of Sales Development', start: '2022', end: 'Present', description: 'Leads SDR, outbound strategy, and prospecting operations.' },
      { company: 'Gong', title: 'Senior Director, SDR', start: '2019', end: '2022', description: 'Scaled signal-based outbound programs.' },
      { company: 'Outreach', title: 'Director, SDR', start: '2015', end: '2019', description: 'Built regional sales development motions.' },
    ],
    aiInsights: {
      talkingPoints: ['Signal prioritization', 'Sequence personalization', 'Regional team ramp'],
      priorities: ['Increase reply rates', 'Improve rep capacity', 'Launch more precise outbound plays'],
      communicationStyle: 'Energetic and open to experimentation.',
      bestTimeToReach: 'Tuesday afternoon',
      bestChannel: 'Personalized email with examples',
    },
    avatar: 'SP',
    color: 'from-emerald-500 via-teal-500 to-cyan-500',
    stakeholderMap: [
      { contactId: 'contact-nora-ellis', role: 'RevOps owner', influence: 'High', relationship: 'Ally' },
      { contactId: 'contact-daniel-ross', role: 'Finance reviewer', influence: 'Medium', relationship: 'Neutral' },
    ],
  },
  {
    id: 'contact-nora-ellis',
    name: 'Nora Ellis',
    title: 'Director of Revenue Operations',
    company: 'ramp',
    location: 'Boston, MA',
    email: 'n***@ramp.com',
    phone: '(617) ***-5458',
    seniority: 'Director',
    persona: 'Decision Maker',
    engagementScore: 87,
    engagementBreakdown: { emailOpens: 13, replies: 3, siteVisits: 10, meetings: 1 },
    engagementTrend: [45, 47, 51, 58, 66, 79, 87],
    socialActivity: [
      { platform: 'LinkedIn', content: 'RevOps should help revenue teams move faster without losing control.', date: '2025-05-27', likes: 144, comments: 11, topic: 'Operational Design' },
      { platform: 'LinkedIn', content: 'We are hiring systems talent that can turn strategy into workflow.', date: '2025-05-13', likes: 101, comments: 6, topic: 'Hiring' },
    ],
    careerHistory: [
      { company: 'Ramp', title: 'Director of Revenue Operations', start: '2023', end: 'Present', description: 'Owns GTM systems, planning, and field process design.' },
      { company: 'HubSpot', title: 'Senior Manager, Revenue Operations', start: '2019', end: '2023', description: 'Led automation across marketing and sales.' },
      { company: 'Drift', title: 'Business Systems Manager', start: '2015', end: '2019', description: 'Managed CRM and outbound infrastructure.' },
    ],
    aiInsights: {
      talkingPoints: ['Workflow automation', 'Rep prioritization', 'Systems consolidation'],
      priorities: ['Reduce SDR admin work', 'Increase pipeline quality', 'Improve territory responsiveness'],
      communicationStyle: 'Analytical and operator-minded.',
      bestTimeToReach: 'Wednesday afternoon',
      bestChannel: 'Email followed by a calendar hold',
    },
    avatar: 'NE',
    color: 'from-cyan-500 via-sky-500 to-indigo-500',
    stakeholderMap: [
      { contactId: 'contact-samir-patel', role: 'Field sponsor', influence: 'High', relationship: 'Ally' },
      { contactId: 'contact-daniel-ross', role: 'Business case reviewer', influence: 'Medium', relationship: 'Neutral' },
    ],
  },
  {
    id: 'contact-daniel-ross',
    name: 'Daniel Ross',
    title: 'Senior Manager, FP&A',
    company: 'ramp',
    location: 'New York, NY',
    email: 'd***@ramp.com',
    phone: '(646) ***-7001',
    seniority: 'Manager',
    persona: 'Blocker',
    engagementScore: 54,
    engagementBreakdown: { emailOpens: 5, replies: 0, siteVisits: 4, meetings: 0 },
    engagementTrend: [30, 33, 36, 38, 41, 49, 54],
    socialActivity: [
      { platform: 'LinkedIn', content: 'Vendor sprawl is real. Better to simplify than stack another dashboard.', date: '2025-05-09', likes: 32, comments: 3, topic: 'Finance' },
    ],
    careerHistory: [
      { company: 'Ramp', title: 'Senior Manager, FP&A', start: '2021', end: 'Present', description: 'Evaluates investments across GTM and product.' },
      { company: 'Brex', title: 'Finance Manager', start: '2018', end: '2021', description: 'Built growth planning models.' },
      { company: 'EY', title: 'Consultant', start: '2014', end: '2018', description: 'Worked on operating model assessments.' },
    ],
    aiInsights: {
      talkingPoints: ['Consolidation', 'ROI timelines', 'Efficiency gains'],
      priorities: ['Control spend', 'Reduce implementation risk', 'Verify measurable outcomes'],
      communicationStyle: 'Careful and skeptical.',
      bestTimeToReach: 'Monday late afternoon',
      bestChannel: 'One-page ROI summary',
    },
    avatar: 'DR',
    color: 'from-orange-500 via-amber-500 to-yellow-500',
    stakeholderMap: [
      { contactId: 'contact-nora-ellis', role: 'Project owner', influence: 'High', relationship: 'Risk' },
      { contactId: 'contact-samir-patel', role: 'Business sponsor', influence: 'Medium', relationship: 'Neutral' },
    ],
  },
  {
    id: 'contact-mei-tan',
    name: 'Mei Tan',
    title: 'VP of Revenue',
    company: 'linear',
    location: 'Remote',
    email: 'm***@linear.app',
    phone: '(628) ***-1052',
    seniority: 'C-Suite',
    persona: 'Decision Maker',
    engagementScore: 83,
    engagementBreakdown: { emailOpens: 9, replies: 2, siteVisits: 7, meetings: 1 },
    engagementTrend: [37, 42, 48, 55, 62, 75, 83],
    socialActivity: [
      { platform: 'LinkedIn', content: 'Our next chapter is about making enterprise sales feel as elegant as the product.', date: '2025-05-28', likes: 188, comments: 14, topic: 'Enterprise Growth' },
    ],
    careerHistory: [
      { company: 'Linear', title: 'VP of Revenue', start: '2024', end: 'Present', description: 'Building the first formal enterprise GTM function.' },
      { company: 'Atlassian', title: 'Head of Strategic Accounts', start: '2020', end: '2024', description: 'Scaled complex product-led enterprise selling.' },
      { company: 'Slack', title: 'Enterprise Sales Director', start: '2015', end: '2020', description: 'Led named-account growth programs.' },
    ],
    aiInsights: {
      talkingPoints: ['First enterprise systems layer', 'Founder-led to repeatable motion', 'Executive visibility'],
      priorities: ['Build disciplined pipeline reviews', 'Support account planning', 'Move faster on strategic accounts'],
      communicationStyle: 'Visionary but practical.',
      bestTimeToReach: 'Thursday morning',
      bestChannel: 'Brief email and product-led demo',
    },
    avatar: 'MT',
    color: 'from-indigo-500 via-violet-500 to-purple-500',
    stakeholderMap: [
      { contactId: 'contact-adam-fischer', role: 'Ops implementer', influence: 'High', relationship: 'Ally' },
    ],
  },
  {
    id: 'contact-adam-fischer',
    name: 'Adam Fischer',
    title: 'RevOps Manager',
    company: 'linear',
    location: 'Remote',
    email: 'a***@linear.app',
    phone: '(415) ***-5570',
    seniority: 'Manager',
    persona: 'Champion',
    engagementScore: 81,
    engagementBreakdown: { emailOpens: 12, replies: 3, siteVisits: 8, meetings: 1 },
    engagementTrend: [39, 41, 44, 52, 60, 72, 81],
    socialActivity: [
      { platform: 'LinkedIn', content: 'Trying to stand up repeatable pipeline inspection without slowing reps down.', date: '2025-05-24', likes: 65, comments: 5, topic: 'RevOps' },
    ],
    careerHistory: [
      { company: 'Linear', title: 'RevOps Manager', start: '2024', end: 'Present', description: 'Sets up tooling and process for the growing GTM team.' },
      { company: 'Airtable', title: 'Revenue Systems Analyst', start: '2021', end: '2024', description: 'Built dashboards and automation.' },
      { company: 'Zendesk', title: 'Operations Analyst', start: '2017', end: '2021', description: 'Supported field planning and analytics.' },
    ],
    aiInsights: {
      talkingPoints: ['Fast implementation', 'Best-practice templates', 'Signal capture'],
      priorities: ['Create process quickly', 'Keep systems lightweight', 'Support first-line managers'],
      communicationStyle: 'Hands-on and implementation-focused.',
      bestTimeToReach: 'Monday midday',
      bestChannel: 'Working session',
    },
    avatar: 'AF',
    color: 'from-slate-400 via-indigo-500 to-violet-500',
    stakeholderMap: [
      { contactId: 'contact-mei-tan', role: 'Executive sponsor', influence: 'High', relationship: 'Ally' },
    ],
  },
  {
    id: 'contact-sofia-rivera',
    name: 'Sofia Rivera',
    title: 'VP of Strategic Sales',
    company: 'vercel',
    location: 'Miami, FL',
    email: 's***@vercel.com',
    phone: '(305) ***-6311',
    seniority: 'VP',
    persona: 'Champion',
    engagementScore: 85,
    engagementBreakdown: { emailOpens: 10, replies: 3, siteVisits: 9, meetings: 1 },
    engagementTrend: [42, 45, 50, 57, 65, 74, 85],
    socialActivity: [
      { platform: 'LinkedIn', content: 'Developer-led deals still need world-class account orchestration behind the scenes.', date: '2025-05-25', likes: 121, comments: 9, topic: 'Developer GTM' },
    ],
    careerHistory: [
      { company: 'Vercel', title: 'VP of Strategic Sales', start: '2023', end: 'Present', description: 'Runs strategic enterprise expansion globally.' },
      { company: 'Twilio', title: 'Global Enterprise Director', start: '2018', end: '2023', description: 'Managed high-growth cloud sales teams.' },
      { company: 'Adobe', title: 'Enterprise Sales Manager', start: '2013', end: '2018', description: 'Focused on digital experience selling.' },
    ],
    aiInsights: {
      talkingPoints: ['Developer signals', 'Strategic account plans', 'Executive relationship context'],
      priorities: ['Increase account coverage', 'Support faster expansion', 'Improve executive prep'],
      communicationStyle: 'High-energy and strategic.',
      bestTimeToReach: 'Wednesday morning',
      bestChannel: 'Targeted email with strategic examples',
    },
    avatar: 'SR',
    color: 'from-cyan-500 via-sky-500 to-indigo-500',
    stakeholderMap: [
      { contactId: 'contact-hugo-martin', role: 'Ops owner', influence: 'High', relationship: 'Ally' },
    ],
  },
  {
    id: 'contact-hugo-martin',
    name: 'Hugo Martin',
    title: 'Director of GTM Operations',
    company: 'vercel',
    location: 'Denver, CO',
    email: 'h***@vercel.com',
    phone: '(720) ***-5544',
    seniority: 'Director',
    persona: 'Decision Maker',
    engagementScore: 82,
    engagementBreakdown: { emailOpens: 11, replies: 2, siteVisits: 8, meetings: 1 },
    engagementTrend: [40, 44, 49, 54, 61, 72, 82],
    socialActivity: [
      { platform: 'LinkedIn', content: 'We care a lot about making the seller experience feel as fast as the product experience.', date: '2025-05-19', likes: 88, comments: 7, topic: 'Seller Experience' },
    ],
    careerHistory: [
      { company: 'Vercel', title: 'Director of GTM Operations', start: '2022', end: 'Present', description: 'Owns planning, systems, and analytics for the field org.' },
      { company: 'Mulesoft', title: 'Senior Manager, Revenue Operations', start: '2018', end: '2022', description: 'Ran enterprise process optimization.' },
      { company: 'Box', title: 'Business Analyst', start: '2014', end: '2018', description: 'Built inspection and pipeline reporting.' },
    ],
    aiInsights: {
      talkingPoints: ['Operational simplicity', 'Signal-to-action workflow', 'PLG + enterprise bridge'],
      priorities: ['Reduce context switching', 'Increase forecast trust', 'Scale best practices globally'],
      communicationStyle: 'Process-focused and thoughtful.',
      bestTimeToReach: 'Thursday late morning',
      bestChannel: 'Email with workflow demo clips',
    },
    avatar: 'HM',
    color: 'from-sky-400 via-cyan-500 to-blue-600',
    stakeholderMap: [
      { contactId: 'contact-sofia-rivera', role: 'Field sponsor', influence: 'High', relationship: 'Ally' },
    ],
  },
  {
    id: 'contact-olivia-dunn',
    name: 'Olivia Dunn',
    title: 'VP of Revenue Strategy',
    company: 'datadog',
    location: 'New York, NY',
    email: 'o***@datadoghq.com',
    phone: '(917) ***-8142',
    seniority: 'VP',
    persona: 'Influencer',
    engagementScore: 74,
    engagementBreakdown: { emailOpens: 8, replies: 1, siteVisits: 7, meetings: 1 },
    engagementTrend: [33, 39, 44, 49, 57, 68, 74],
    socialActivity: [
      { platform: 'LinkedIn', content: 'At scale, account inspection has to be consistent and repeatable.', date: '2025-05-21', likes: 69, comments: 5, topic: 'Forecasting' },
    ],
    careerHistory: [
      { company: 'Datadog', title: 'VP of Revenue Strategy', start: '2022', end: 'Present', description: 'Drives global planning and performance visibility.' },
      { company: 'Salesforce', title: 'Senior Director, Strategy', start: '2017', end: '2022', description: 'Led GTM planning for enterprise sales motions.' },
      { company: 'Bain', title: 'Manager', start: '2011', end: '2017', description: 'Advised SaaS companies on go-to-market growth.' },
    ],
    aiInsights: {
      talkingPoints: ['Global consistency', 'Risk inspection', 'Exec visibility'],
      priorities: ['Improve forecast signal quality', 'Equip managers with better context', 'Reduce slippage'],
      communicationStyle: 'Structured and benchmark oriented.',
      bestTimeToReach: 'Tuesday morning',
      bestChannel: 'Executive memo',
    },
    avatar: 'OD',
    color: 'from-indigo-500 via-purple-500 to-blue-500',
    stakeholderMap: [
      { contactId: 'contact-evan-morris', role: 'Systems lead', influence: 'Medium', relationship: 'Ally' },
    ],
  },
  {
    id: 'contact-evan-morris',
    name: 'Evan Morris',
    title: 'Director of Revenue Systems',
    company: 'datadog',
    location: 'Boston, MA',
    email: 'e***@datadoghq.com',
    phone: '(617) ***-1189',
    seniority: 'Director',
    persona: 'Decision Maker',
    engagementScore: 72,
    engagementBreakdown: { emailOpens: 7, replies: 1, siteVisits: 6, meetings: 1 },
    engagementTrend: [35, 38, 41, 48, 54, 63, 72],
    socialActivity: [
      { platform: 'LinkedIn', content: 'I am always interested in ways to reduce manual data stitching for sellers.', date: '2025-05-15', likes: 51, comments: 4, topic: 'Systems' },
    ],
    careerHistory: [
      { company: 'Datadog', title: 'Director of Revenue Systems', start: '2021', end: 'Present', description: 'Runs architecture across CRM and data tooling.' },
      { company: 'ServiceNow', title: 'Senior Manager, Sales Systems', start: '2016', end: '2021', description: 'Led enterprise sales transformation programs.' },
      { company: 'IBM', title: 'Program Manager', start: '2010', end: '2016', description: 'Implemented enterprise reporting systems.' },
    ],
    aiInsights: {
      talkingPoints: ['Architecture fit', 'Implementation path', 'Governance'],
      priorities: ['Reduce tooling overlap', 'Improve seller trust in data', 'Maintain control at scale'],
      communicationStyle: 'Detailed and technical.',
      bestTimeToReach: 'Thursday morning',
      bestChannel: 'Architecture review',
    },
    avatar: 'EM',
    color: 'from-cyan-500 via-blue-500 to-indigo-500',
    stakeholderMap: [
      { contactId: 'contact-olivia-dunn', role: 'Business sponsor', influence: 'High', relationship: 'Neutral' },
    ],
  },
  {
    id: 'contact-rachel-park',
    name: 'Rachel Park',
    title: 'Director of Strategic Programs',
    company: 'snowflake',
    location: 'San Mateo, CA',
    email: 'r***@snowflake.com',
    phone: '(650) ***-2904',
    seniority: 'Director',
    persona: 'Influencer',
    engagementScore: 71,
    engagementBreakdown: { emailOpens: 8, replies: 1, siteVisits: 5, meetings: 1 },
    engagementTrend: [30, 33, 38, 44, 51, 60, 71],
    socialActivity: [
      { platform: 'LinkedIn', content: 'Industry motions only work when account context is specific enough for every pod.', date: '2025-05-18', likes: 47, comments: 3, topic: 'Industry GTM' },
    ],
    careerHistory: [
      { company: 'Snowflake', title: 'Director of Strategic Programs', start: '2022', end: 'Present', description: 'Supports industry-focused account programs.' },
      { company: 'Oracle', title: 'Senior Director, GTM Programs', start: '2017', end: '2022', description: 'Ran strategic initiatives for enterprise field teams.' },
      { company: 'Accenture', title: 'Consultant', start: '2011', end: '2017', description: 'Worked on digital transformation programs.' },
    ],
    aiInsights: {
      talkingPoints: ['Vertical playbooks', 'Stakeholder coverage', 'Program coordination'],
      priorities: ['Support strategic pods', 'Improve field readiness', 'Reduce late-stage surprises'],
      communicationStyle: 'Organized and stakeholder aware.',
      bestTimeToReach: 'Wednesday early afternoon',
      bestChannel: 'Email plus team workshop invite',
    },
    avatar: 'RP',
    color: 'from-sky-500 via-cyan-500 to-blue-600',
    stakeholderMap: [],
  },
  {
    id: 'contact-diego-alvarez',
    name: 'Diego Alvarez',
    title: 'Head of ABM',
    company: 'confluent',
    location: 'Austin, TX',
    email: 'd***@confluent.io',
    phone: '(737) ***-6320',
    seniority: 'Director',
    persona: 'Champion',
    engagementScore: 78,
    engagementBreakdown: { emailOpens: 9, replies: 2, siteVisits: 7, meetings: 1 },
    engagementTrend: [34, 37, 42, 48, 56, 68, 78],
    socialActivity: [
      { platform: 'LinkedIn', content: 'The best ABM programs look alive because they respond to signals, not calendars.', date: '2025-05-22', likes: 63, comments: 5, topic: 'ABM' },
    ],
    careerHistory: [
      { company: 'Confluent', title: 'Head of ABM', start: '2023', end: 'Present', description: 'Runs strategic target account programming.' },
      { company: 'MongoDB', title: 'ABM Director', start: '2019', end: '2023', description: 'Built global named-account plays.' },
      { company: 'Demandbase', title: 'Program Manager', start: '2015', end: '2019', description: 'Designed account-based campaign strategies.' },
    ],
    aiInsights: {
      talkingPoints: ['Signal-aware campaigns', 'Account orchestration', 'Partner motion support'],
      priorities: ['Increase campaign precision', 'Coordinate with sales faster', 'Surface account changes sooner'],
      communicationStyle: 'Creative but metrics conscious.',
      bestTimeToReach: 'Tuesday midday',
      bestChannel: 'Email with campaign examples',
    },
    avatar: 'DA',
    color: 'from-orange-500 via-amber-500 to-yellow-400',
    stakeholderMap: [],
  },
  {
    id: 'contact-sasha-cole',
    name: 'Sasha Cole',
    title: 'VP of Customer Growth',
    company: 'pendo',
    location: 'Raleigh, NC',
    email: 's***@pendo.io',
    phone: '(919) ***-8754',
    seniority: 'VP',
    persona: 'Champion',
    engagementScore: 76,
    engagementBreakdown: { emailOpens: 8, replies: 2, siteVisits: 6, meetings: 1 },
    engagementTrend: [36, 39, 41, 47, 55, 66, 76],
    socialActivity: [
      { platform: 'LinkedIn', content: 'Expansion teams need more context than a health score.', date: '2025-05-16', likes: 59, comments: 4, topic: 'Customer Growth' },
    ],
    careerHistory: [
      { company: 'Pendo', title: 'VP of Customer Growth', start: '2022', end: 'Present', description: 'Leads expansion programs and growth strategy.' },
      { company: 'Gainsight', title: 'Senior Director, Customer Success', start: '2018', end: '2022', description: 'Owned growth and renewals strategy.' },
      { company: 'SAP', title: 'Enterprise Success Manager', start: '2012', end: '2018', description: 'Managed strategic customer relationships.' },
    ],
    aiInsights: {
      talkingPoints: ['Expansion signals', 'Multi-threaded account maps', 'Customer marketing alignment'],
      priorities: ['Protect renewals', 'Increase expansion quality', 'Equip CSMs with better context'],
      communicationStyle: 'Warm and customer-focused.',
      bestTimeToReach: 'Thursday afternoon',
      bestChannel: 'Email with customer story',
    },
    avatar: 'SC',
    color: 'from-lime-500 via-emerald-500 to-teal-500',
    stakeholderMap: [],
  },
  {
    id: 'contact-gabe-chen',
    name: 'Gabe Chen',
    title: 'Director of Demand Generation',
    company: 'mixpanel',
    location: 'San Francisco, CA',
    email: 'g***@mixpanel.com',
    phone: '(415) ***-2987',
    seniority: 'Director',
    persona: 'Influencer',
    engagementScore: 80,
    engagementBreakdown: { emailOpens: 10, replies: 2, siteVisits: 8, meetings: 1 },
    engagementTrend: [38, 40, 46, 51, 58, 71, 80],
    socialActivity: [
      { platform: 'LinkedIn', content: 'Outbound and demand gen both win when account signals become shared context.', date: '2025-05-24', likes: 74, comments: 6, topic: 'Demand Generation' },
    ],
    careerHistory: [
      { company: 'Mixpanel', title: 'Director of Demand Generation', start: '2023', end: 'Present', description: 'Owns enterprise campaign strategy and funnel performance.' },
      { company: 'Segment', title: 'Senior Marketing Manager', start: '2019', end: '2023', description: 'Led account-based campaign programs.' },
      { company: 'Amplitude', title: 'Growth Manager', start: '2015', end: '2019', description: 'Drove lifecycle and acquisition programs.' },
    ],
    aiInsights: {
      talkingPoints: ['Signal sharing', 'Account scoring', 'Campaign timing'],
      priorities: ['Improve campaign-to-sales handoff', 'Personalize more effectively', 'Increase conversion from high-fit accounts'],
      communicationStyle: 'Metrics-driven and approachable.',
      bestTimeToReach: 'Wednesday morning',
      bestChannel: 'Email with campaign performance examples',
    },
    avatar: 'GC',
    color: 'from-fuchsia-500 via-pink-500 to-rose-500',
    stakeholderMap: [],
  },
  {
    id: 'contact-isabella-ng',
    name: 'Isabella Ng',
    title: 'Senior Director, Field Marketing',
    company: 'amplitude',
    location: 'San Francisco, CA',
    email: 'i***@amplitude.com',
    phone: '(415) ***-4490',
    seniority: 'Director',
    persona: 'Champion',
    engagementScore: 69,
    engagementBreakdown: { emailOpens: 7, replies: 1, siteVisits: 5, meetings: 1 },
    engagementTrend: [28, 31, 37, 42, 50, 61, 69],
    socialActivity: [
      { platform: 'LinkedIn', content: 'Field marketing gets stronger when account context is fresh and shared.', date: '2025-05-20', likes: 42, comments: 3, topic: 'Field Marketing' },
    ],
    careerHistory: [
      { company: 'Amplitude', title: 'Senior Director, Field Marketing', start: '2022', end: 'Present', description: 'Leads regional programs aligned to enterprise sales.' },
      { company: 'Twilio', title: 'Field Marketing Director', start: '2018', end: '2022', description: 'Built regional demand programs.' },
      { company: 'Marketo', title: 'Marketing Manager', start: '2013', end: '2018', description: 'Focused on B2B event and campaign strategy.' },
    ],
    aiInsights: {
      talkingPoints: ['Account-specific event follow-up', 'Cross-functional alignment', 'Regional campaign timing'],
      priorities: ['Tighten sales-marketing coordination', 'Improve campaign relevance', 'Surface warm accounts faster'],
      communicationStyle: 'Collaborative and execution minded.',
      bestTimeToReach: 'Monday afternoon',
      bestChannel: 'Email and follow-up chat',
    },
    avatar: 'IN',
    color: 'from-violet-500 via-purple-500 to-indigo-500',
    stakeholderMap: [],
  },
  {
    id: 'contact-miles-hart',
    name: 'Miles Hart',
    title: 'Director of Lifecycle Marketing',
    company: 'notion',
    location: 'San Francisco, CA',
    email: 'm***@notion.so',
    phone: '(415) ***-8801',
    seniority: 'Director',
    persona: 'Champion',
    engagementScore: 77,
    engagementBreakdown: { emailOpens: 9, replies: 2, siteVisits: 8, meetings: 1 },
    engagementTrend: [34, 36, 43, 49, 56, 66, 77],
    socialActivity: [
      { platform: 'LinkedIn', content: 'Personalization matters most when it reflects real account context.', date: '2025-05-28', likes: 83, comments: 7, topic: 'Lifecycle Marketing' },
    ],
    careerHistory: [
      { company: 'Notion', title: 'Director of Lifecycle Marketing', start: '2023', end: 'Present', description: 'Owns nurture, expansion, and lifecycle orchestration.' },
      { company: 'Dropbox', title: 'Growth Marketing Lead', start: '2018', end: '2023', description: 'Built scaled engagement programs for business users.' },
      { company: 'Mailchimp', title: 'Senior Marketing Manager', start: '2014', end: '2018', description: 'Led content and lifecycle programs.' },
    ],
    aiInsights: {
      talkingPoints: ['Trigger-based campaigns', 'Personalization at scale', 'Cross-functional signal use'],
      priorities: ['Improve nurture relevance', 'Support expansion outreach', 'Make product signals actionable'],
      communicationStyle: 'Creative with a strong bias for data.',
      bestTimeToReach: 'Tuesday morning',
      bestChannel: 'Email with sample campaign output',
    },
    avatar: 'MH',
    color: 'from-stone-400 via-neutral-500 to-zinc-600',
    stakeholderMap: [],
  },
  {
    id: 'contact-hannah-bell',
    name: 'Hannah Bell',
    title: 'Director of Solutions Consulting',
    company: 'notion',
    location: 'Remote',
    email: 'h***@notion.so',
    phone: '(650) ***-5700',
    seniority: 'Director',
    persona: 'Influencer',
    engagementScore: 73,
    engagementBreakdown: { emailOpens: 8, replies: 1, siteVisits: 6, meetings: 1 },
    engagementTrend: [32, 36, 40, 45, 53, 63, 73],
    socialActivity: [
      { platform: 'LinkedIn', content: 'Every enterprise evaluation gets better when the buying committee context is visible to everyone.', date: '2025-05-21', likes: 61, comments: 6, topic: 'Pre-Sales' },
    ],
    careerHistory: [
      { company: 'Notion', title: 'Director of Solutions Consulting', start: '2022', end: 'Present', description: 'Leads technical pre-sales and evaluation process design.' },
      { company: 'Airtable', title: 'Solutions Consulting Manager', start: '2019', end: '2022', description: 'Supported strategic accounts and procurement cycles.' },
      { company: 'Google', title: 'Customer Engineer', start: '2014', end: '2019', description: 'Handled enterprise cloud evaluations.' },
    ],
    aiInsights: {
      talkingPoints: ['Buying committee mapping', 'Pre-meeting context', 'Evaluation orchestration'],
      priorities: ['Reduce evaluation friction', 'Improve demo relevance', 'Support technical champions'],
      communicationStyle: 'Structured and consultative.',
      bestTimeToReach: 'Thursday morning',
      bestChannel: 'Email followed by a tailored walkthrough',
    },
    avatar: 'HB',
    color: 'from-zinc-500 via-slate-500 to-stone-500',
    stakeholderMap: [],
  },
  {
    id: 'contact-noah-singh',
    name: 'Noah Singh',
    title: 'Revenue Systems Lead',
    company: 'greenhouse',
    location: 'New York, NY',
    email: 'n***@greenhouse.io',
    phone: '(646) ***-3321',
    seniority: 'Manager',
    persona: 'Decision Maker',
    engagementScore: 75,
    engagementBreakdown: { emailOpens: 9, replies: 2, siteVisits: 7, meetings: 1 },
    engagementTrend: [33, 35, 41, 47, 55, 65, 75],
    socialActivity: [
      { platform: 'LinkedIn', content: 'Smaller teams need tooling that feels opinionated and lightweight.', date: '2025-05-26', likes: 57, comments: 5, topic: 'Revenue Systems' },
    ],
    careerHistory: [
      { company: 'Greenhouse', title: 'Revenue Systems Lead', start: '2023', end: 'Present', description: 'Owns CRM operations and process design.' },
      { company: 'Lever', title: 'Business Systems Manager', start: '2019', end: '2023', description: 'Built sales automation and reporting flows.' },
      { company: 'Workday', title: 'Sales Operations Analyst', start: '2015', end: '2019', description: 'Supported field operations for enterprise sales.' },
    ],
    aiInsights: {
      talkingPoints: ['Lightweight deployment', 'Template-driven workflows', 'Efficiency gains'],
      priorities: ['Improve outbound consistency', 'Support enablement', 'Avoid vendor sprawl'],
      communicationStyle: 'Pragmatic and low-ego.',
      bestTimeToReach: 'Wednesday afternoon',
      bestChannel: 'Email with simple rollout plan',
    },
    avatar: 'NS',
    color: 'from-green-500 via-emerald-500 to-lime-500',
    stakeholderMap: [],
  },
]
