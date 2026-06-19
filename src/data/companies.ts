export interface FundingRound {
  round: string
  amount: number
  date: string
  investors: string[]
}

export interface HiringSignal {
  role: string
  count: number
  department: string
  intent: string
}

export interface BuyingSignal {
  type: string
  description: string
  strength: 'High' | 'Medium' | 'Low'
  date: string
}

export interface Company {
  id: string
  name: string
  domain: string
  industry: string
  hq: string
  employees: number
  founded: number
  description: string
  techStack: string[]
  fundingHistory: FundingRound[]
  totalRaised: number
  headcountGrowth: number
  webTrafficTrend: number[]
  hiringSignals: HiringSignal[]
  buyingSignals: BuyingSignal[]
  aiSummary: string
  logo: string
  color: string
  fitScore: number
}

export const companies: Company[] = [
  {
    id: 'stripe',
    name: 'Stripe',
    domain: 'stripe.com',
    industry: 'Payments Infrastructure',
    hq: 'San Francisco, CA',
    employees: 8100,
    founded: 2010,
    description: 'Financial infrastructure platform powering online payments, billing, treasury, and fraud prevention for high-growth businesses.',
    techStack: ['React', 'TypeScript', 'Ruby', 'Kafka', 'Snowflake', 'Segment'],
    fundingHistory: [
      { round: 'Series G', amount: 600000000, date: '2023-03-15', investors: ['Andreessen Horowitz', 'Founders Fund'] },
      { round: 'Series H', amount: 694000000, date: '2024-11-20', investors: ['Sequoia', 'General Catalyst'] },
      { round: 'Employee Tender', amount: 1000000000, date: '2025-02-18', investors: ['Internal'] },
    ],
    totalRaised: 2294000000,
    headcountGrowth: 14,
    webTrafficTrend: [82, 86, 89, 91, 94, 97, 101],
    hiringSignals: [
      { role: 'RevOps Systems Lead', count: 3, department: 'Revenue Operations', intent: 'Expanding GTM automation coverage in enterprise.' },
      { role: 'Sales Enablement Manager', count: 2, department: 'Sales', intent: 'Scaling onboarding for a larger field team.' },
      { role: 'Data Engineer', count: 4, department: 'Data', intent: 'Investing in unified customer analytics.' },
    ],
    buyingSignals: [
      { type: 'Leadership Interview', description: 'CRO discussed doubling down on enterprise pipeline quality and forecast accuracy.', strength: 'High', date: '2025-05-30' },
      { type: 'Tech Stack Expansion', description: 'Opened new roles requiring CRM data orchestration experience.', strength: 'High', date: '2025-05-22' },
      { type: 'Website Content', description: 'New solutions page launched for global revenue teams.', strength: 'Medium', date: '2025-05-15' },
    ],
    aiSummary: 'Stripe shows a strong fit for RevenueOS because its revenue operations team is hiring for systems leadership while executive messaging centers on pipeline quality, enterprise segmentation, and forecasting discipline. Their fast growth, complex GTM motion, and investment in data infrastructure suggest a near-term appetite for workflow automation and buyer intelligence.',
    logo: 'ST',
    color: 'from-indigo-500 via-violet-500 to-fuchsia-500',
    fitScore: 97,
  },
  {
    id: 'figma',
    name: 'Figma',
    domain: 'figma.com',
    industry: 'Collaborative Design',
    hq: 'San Francisco, CA',
    employees: 2300,
    founded: 2012,
    description: 'Design and product collaboration platform used by product, engineering, and marketing teams to ship digital experiences together.',
    techStack: ['React', 'TypeScript', 'Go', 'GraphQL', 'Amplitude', 'Datadog'],
    fundingHistory: [
      { round: 'Series D', amount: 200000000, date: '2020-04-21', investors: ['Index Ventures', 'Sequoia'] },
      { round: 'Tender Offer', amount: 500000000, date: '2024-06-10', investors: ['Coatue', 'Altimeter'] },
    ],
    totalRaised: 700000000,
    headcountGrowth: 11,
    webTrafficTrend: [74, 77, 79, 80, 84, 88, 90],
    hiringSignals: [
      { role: 'Enterprise Account Executive', count: 6, department: 'Sales', intent: 'Pushing deeper into Fortune 100 expansion.' },
      { role: 'Revenue Analytics Manager', count: 1, department: 'Operations', intent: 'Needs more insight into product-led and sales-led funnels.' },
    ],
    buyingSignals: [
      { type: 'Community Event', description: 'Figma Config showcased new enterprise workflow products.', strength: 'Medium', date: '2025-05-28' },
      { type: 'Job Posting', description: 'Open role for sales operations with tooling optimization ownership.', strength: 'High', date: '2025-05-12' },
    ],
    aiSummary: 'Figma is entering another enterprise expansion cycle with meaningful hiring across field sales and analytics. RevenueOS can help by surfacing buying committee signals, coordinating follow-up at scale, and connecting product-led adoption data to revenue motions.',
    logo: 'FG',
    color: 'from-pink-500 via-rose-500 to-orange-400',
    fitScore: 92,
  },
  {
    id: 'notion',
    name: 'Notion',
    domain: 'notion.so',
    industry: 'Knowledge Management',
    hq: 'San Francisco, CA',
    employees: 1800,
    founded: 2013,
    description: 'Connected workspace for notes, wikis, projects, and AI knowledge workflows across modern teams.',
    techStack: ['React', 'TypeScript', 'Kotlin', 'Postgres', 'Segment', 'Looker'],
    fundingHistory: [
      { round: 'Series C', amount: 275000000, date: '2021-10-08', investors: ['Coatue', 'Sequoia'] },
      { round: 'Secondary', amount: 120000000, date: '2024-09-30', investors: ['Dragoneer'] },
    ],
    totalRaised: 395000000,
    headcountGrowth: 18,
    webTrafficTrend: [68, 69, 71, 76, 80, 82, 84],
    hiringSignals: [
      { role: 'Solutions Consultant', count: 4, department: 'Pre-Sales', intent: 'Preparing for more complex enterprise evaluations.' },
      { role: 'Lifecycle Marketing Manager', count: 2, department: 'Marketing', intent: 'Aligning nurture journeys with expansion plays.' },
    ],
    buyingSignals: [
      { type: 'Executive Post', description: 'Revenue leaders are talking publicly about expansion pipeline efficiency.', strength: 'High', date: '2025-05-27' },
      { type: 'New Product', description: 'Rolled out AI search workflows aimed at larger accounts.', strength: 'Medium', date: '2025-05-11' },
    ],
    aiSummary: 'Notion blends product-led growth with an increasingly sophisticated enterprise motion. The team is adding solutions and lifecycle talent, which usually signals demand for orchestration between signals, outreach, and account prioritization.',
    logo: 'NO',
    color: 'from-zinc-400 via-stone-400 to-neutral-500',
    fitScore: 90,
  },
  {
    id: 'ramp',
    name: 'Ramp',
    domain: 'ramp.com',
    industry: 'Spend Management',
    hq: 'New York, NY',
    employees: 1650,
    founded: 2019,
    description: 'Finance automation platform for spend management, procurement, travel, and savings intelligence.',
    techStack: ['Next.js', 'TypeScript', 'Python', 'Snowflake', 'HubSpot', 'Mixpanel'],
    fundingHistory: [
      { round: 'Series D', amount: 300000000, date: '2023-08-02', investors: ['Founders Fund', 'D1 Capital'] },
      { round: 'Series E', amount: 500000000, date: '2024-12-05', investors: ['Khosla Ventures', 'General Catalyst'] },
    ],
    totalRaised: 800000000,
    headcountGrowth: 24,
    webTrafficTrend: [59, 63, 68, 72, 77, 81, 86],
    hiringSignals: [
      { role: 'Mid-Market AE', count: 8, department: 'Sales', intent: 'Accelerating regional coverage and outbound capacity.' },
      { role: 'Sales Systems Analyst', count: 2, department: 'Operations', intent: 'Improving territory and attribution models.' },
      { role: 'Customer Marketing Lead', count: 1, department: 'Marketing', intent: 'Supporting land-and-expand programs.' },
    ],
    buyingSignals: [
      { type: 'Funding', description: 'Fresh capital earmarked for enterprise go-to-market expansion.', strength: 'High', date: '2025-05-21' },
      { type: 'Product Launch', description: 'Launched procurement workflow suite for larger buying teams.', strength: 'Medium', date: '2025-05-16' },
    ],
    aiSummary: 'Ramp is one of the clearest revenue-intelligence opportunities in the market right now. Rapid team growth, a maturing mid-market motion, and public emphasis on sales productivity all point to strong demand for a unified command center.',
    logo: 'RA',
    color: 'from-emerald-500 via-teal-500 to-cyan-500',
    fitScore: 96,
  },
  {
    id: 'linear',
    name: 'Linear',
    domain: 'linear.app',
    industry: 'Product Management',
    hq: 'Remote',
    employees: 420,
    founded: 2019,
    description: 'Issue tracking and product planning platform designed for fast-moving software teams.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Postgres', 'Vercel', 'Amplitude'],
    fundingHistory: [
      { round: 'Series B', amount: 35000000, date: '2023-05-09', investors: ['Accel', 'Sequoia'] },
      { round: 'Series C', amount: 74000000, date: '2025-01-12', investors: ['Iconiq', 'Accel'] },
    ],
    totalRaised: 109000000,
    headcountGrowth: 21,
    webTrafficTrend: [41, 43, 45, 48, 52, 56, 61],
    hiringSignals: [
      { role: 'Enterprise AE', count: 3, department: 'Sales', intent: 'Formalizing a previously founder-led enterprise motion.' },
      { role: 'RevOps Manager', count: 1, department: 'Operations', intent: 'Setting up repeatable forecasting and pipeline workflows.' },
    ],
    buyingSignals: [
      { type: 'Leadership Hire', description: 'Recently added a VP of Revenue.', strength: 'High', date: '2025-05-20' },
      { type: 'Pricing Page Update', description: 'Expanded enterprise plan positioning and security messaging.', strength: 'Medium', date: '2025-05-10' },
    ],
    aiSummary: 'Linear is transitioning from a product-first sales motion to a more structured enterprise engine. That usually creates immediate demand for account prioritization, executive engagement workflows, and signal-based outbound.',
    logo: 'LI',
    color: 'from-slate-400 via-indigo-500 to-violet-500',
    fitScore: 94,
  },
  {
    id: 'vercel',
    name: 'Vercel',
    domain: 'vercel.com',
    industry: 'Developer Platform',
    hq: 'San Francisco, CA',
    employees: 860,
    founded: 2015,
    description: 'Frontend cloud platform for building, shipping, and scaling web applications with edge performance.',
    techStack: ['Next.js', 'TypeScript', 'Rust', 'Edge Functions', 'Datadog', 'HubSpot'],
    fundingHistory: [
      { round: 'Series D', amount: 150000000, date: '2021-11-23', investors: ['Accel', 'CRV'] },
      { round: 'Series E', amount: 250000000, date: '2025-03-03', investors: ['Sequoia', 'Greenoaks'] },
    ],
    totalRaised: 400000000,
    headcountGrowth: 19,
    webTrafficTrend: [64, 66, 69, 74, 79, 83, 88],
    hiringSignals: [
      { role: 'Strategic Account Executive', count: 5, department: 'Sales', intent: 'Expanding global strategic account coverage.' },
      { role: 'Developer GTM Analyst', count: 2, department: 'Growth', intent: 'Linking self-serve product usage to enterprise plays.' },
    ],
    buyingSignals: [
      { type: 'Funding', description: 'New capital focused on enterprise and partner growth.', strength: 'High', date: '2025-05-29' },
      { type: 'Conference Talk', description: 'Referenced pipeline visibility as a key operational priority.', strength: 'Medium', date: '2025-05-18' },
    ],
    aiSummary: 'Vercel has both top-down enterprise deals and bottom-up developer adoption, making it a high-leverage fit. RevenueOS can connect usage, hiring, and engagement signals into strategic account plays for their expanding GTM team.',
    logo: 'VE',
    color: 'from-cyan-500 via-sky-500 to-indigo-500',
    fitScore: 95,
  },
  {
    id: 'datadog',
    name: 'Datadog',
    domain: 'datadoghq.com',
    industry: 'Observability',
    hq: 'New York, NY',
    employees: 6500,
    founded: 2010,
    description: 'Monitoring, security, and cloud operations platform for engineering and IT teams.',
    techStack: ['React', 'TypeScript', 'Go', 'Python', 'Snowflake', 'Salesforce'],
    fundingHistory: [
      { round: 'Series E', amount: 94000000, date: '2016-10-20', investors: ['Index Ventures', 'ICONIQ'] },
      { round: 'Post-IPO Secondary', amount: 400000000, date: '2024-08-14', investors: ['T. Rowe Price'] },
    ],
    totalRaised: 494000000,
    headcountGrowth: 9,
    webTrafficTrend: [88, 87, 89, 92, 94, 96, 99],
    hiringSignals: [
      { role: 'Regional Sales Director', count: 4, department: 'Sales', intent: 'Rebalancing territories across enterprise regions.' },
      { role: 'Revenue Strategy Lead', count: 1, department: 'Operations', intent: 'Optimizing multi-product pipeline planning.' },
    ],
    buyingSignals: [
      { type: 'Earnings Call', description: 'Leadership emphasized improving large-account conversion efficiency.', strength: 'High', date: '2025-05-25' },
      { type: 'Hiring', description: 'Added roles for sales planning and automation.', strength: 'High', date: '2025-05-13' },
    ],
    aiSummary: 'Datadog is already sophisticated, but its scale creates operational complexity. RevenueOS is a fit where account prioritization, multi-threading, and risk visibility need to stay consistent across a very large field organization.',
    logo: 'DD',
    color: 'from-purple-500 via-indigo-500 to-blue-500',
    fitScore: 89,
  },
  {
    id: 'snowflake',
    name: 'Snowflake',
    domain: 'snowflake.com',
    industry: 'Cloud Data Platform',
    hq: 'Bozeman, MT',
    employees: 7100,
    founded: 2012,
    description: 'AI data cloud platform for storing, governing, analyzing, and sharing enterprise data.',
    techStack: ['React', 'Java', 'Scala', 'Snowpark', 'Marketo', 'Tableau'],
    fundingHistory: [
      { round: 'Series G', amount: 479000000, date: '2018-10-11', investors: ['Sequoia', 'CapitalG'] },
      { round: 'Strategic Investment', amount: 250000000, date: '2025-02-07', investors: ['NVIDIA'] },
    ],
    totalRaised: 729000000,
    headcountGrowth: 8,
    webTrafficTrend: [91, 92, 93, 95, 96, 98, 101],
    hiringSignals: [
      { role: 'Industry Account Executive', count: 7, department: 'Sales', intent: 'Building verticalized enterprise pods.' },
      { role: 'ABM Program Manager', count: 2, department: 'Marketing', intent: 'Increasing precision on target account plays.' },
    ],
    buyingSignals: [
      { type: 'Partnership', description: 'Expanded AI ecosystem partnerships with joint selling motions.', strength: 'Medium', date: '2025-05-24' },
      { type: 'Job Posting', description: 'Open role for pipeline strategy and planning.', strength: 'Medium', date: '2025-05-17' },
    ],
    aiSummary: 'Snowflake runs a highly coordinated enterprise motion with industry specialization and ecosystem selling. RevenueOS can add value by reducing manual signal gathering and increasing visibility into multi-threaded deal risk.',
    logo: 'SF',
    color: 'from-sky-400 via-cyan-500 to-blue-600',
    fitScore: 87,
  },
  {
    id: 'confluent',
    name: 'Confluent',
    domain: 'confluent.io',
    industry: 'Data Streaming',
    hq: 'Mountain View, CA',
    employees: 3100,
    founded: 2014,
    description: 'Data streaming platform built around Apache Kafka for real-time applications and integrations.',
    techStack: ['React', 'Java', 'Kafka', 'Kubernetes', 'Salesforce', 'Pendo'],
    fundingHistory: [
      { round: 'Series E', amount: 250000000, date: '2019-04-17', investors: ['Sequoia', 'Benchmark'] },
      { round: 'Growth Financing', amount: 180000000, date: '2024-10-09', investors: ['Morgan Stanley'] },
    ],
    totalRaised: 430000000,
    headcountGrowth: 10,
    webTrafficTrend: [57, 59, 60, 63, 66, 69, 72],
    hiringSignals: [
      { role: 'Partner Sales Manager', count: 3, department: 'Partnerships', intent: 'Increasing co-sell motions with cloud providers.' },
      { role: 'Revenue Operations Analyst', count: 2, department: 'Operations', intent: 'Improving inspection of complex enterprise deals.' },
    ],
    buyingSignals: [
      { type: 'Product Launch', description: 'Introduced packaged solutions for regulated industries.', strength: 'Medium', date: '2025-05-14' },
      { type: 'Executive Webinar', description: 'Talked about pipeline conversion discipline.', strength: 'Low', date: '2025-05-07' },
    ],
    aiSummary: 'Confluent’s combination of partner-led growth and technical buying committees makes it a natural fit for stakeholder mapping, signal-based follow-up, and risk detection.',
    logo: 'CF',
    color: 'from-orange-500 via-amber-500 to-yellow-400',
    fitScore: 84,
  },
  {
    id: 'pendo',
    name: 'Pendo',
    domain: 'pendo.io',
    industry: 'Product Experience',
    hq: 'Raleigh, NC',
    employees: 1300,
    founded: 2013,
    description: 'Product analytics, in-app guidance, and customer feedback software for digital product teams.',
    techStack: ['React', 'TypeScript', 'Node.js', 'AWS', 'Salesforce', 'Zendesk'],
    fundingHistory: [
      { round: 'Series F', amount: 150000000, date: '2021-01-14', investors: ['Vista Equity Partners'] },
      { round: 'Credit Facility', amount: 50000000, date: '2024-07-22', investors: ['Silicon Valley Bank'] },
    ],
    totalRaised: 200000000,
    headcountGrowth: 6,
    webTrafficTrend: [48, 49, 51, 52, 55, 58, 60],
    hiringSignals: [
      { role: 'Customer Expansion Manager', count: 2, department: 'Success', intent: 'Driving greater net revenue retention.' },
      { role: 'Sales Operations Manager', count: 1, department: 'Operations', intent: 'Sharpening forecast hygiene and territory design.' },
    ],
    buyingSignals: [
      { type: 'Product Packaging', description: 'Refreshed enterprise pricing and usage bundles.', strength: 'Medium', date: '2025-05-19' },
      { type: 'Hiring', description: 'Openings for lifecycle and enablement roles.', strength: 'Low', date: '2025-05-08' },
    ],
    aiSummary: 'Pendo has a balanced mix of new business and expansion opportunity. RevenueOS can improve account orchestration for growth plays and help the team react faster to product engagement signals.',
    logo: 'PE',
    color: 'from-lime-500 via-emerald-500 to-teal-500',
    fitScore: 81,
  },
  {
    id: 'mixpanel',
    name: 'Mixpanel',
    domain: 'mixpanel.com',
    industry: 'Product Analytics',
    hq: 'San Francisco, CA',
    employees: 780,
    founded: 2009,
    description: 'Event analytics platform helping teams understand product usage, retention, and conversion.',
    techStack: ['React', 'TypeScript', 'Python', 'BigQuery', 'HubSpot', 'Looker'],
    fundingHistory: [
      { round: 'Series C', amount: 65000000, date: '2014-12-18', investors: ['Andreessen Horowitz'] },
      { round: 'Growth Equity', amount: 200000000, date: '2024-11-01', investors: ['Bain Capital Tech Opportunities'] },
    ],
    totalRaised: 265000000,
    headcountGrowth: 12,
    webTrafficTrend: [51, 52, 54, 56, 59, 63, 66],
    hiringSignals: [
      { role: 'Enterprise SDR Manager', count: 1, department: 'Sales Development', intent: 'Systematizing outbound into named accounts.' },
      { role: 'Revenue Marketing Analyst', count: 2, department: 'Marketing', intent: 'Improving signal capture across campaigns.' },
    ],
    buyingSignals: [
      { type: 'Funding', description: 'Growth round aimed at go-to-market acceleration.', strength: 'High', date: '2025-05-26' },
      { type: 'Case Study', description: 'Published more enterprise adoption stories.', strength: 'Medium', date: '2025-05-06' },
    ],
    aiSummary: 'Mixpanel’s data-savvy GTM team is likely to respond well to a signal-forward operating model. The company is investing in outbound discipline and campaign analytics, which aligns tightly with RevenueOS capabilities.',
    logo: 'MP',
    color: 'from-fuchsia-500 via-pink-500 to-rose-500',
    fitScore: 88,
  },
  {
    id: 'amplitude',
    name: 'Amplitude',
    domain: 'amplitude.com',
    industry: 'Digital Analytics',
    hq: 'San Francisco, CA',
    employees: 1600,
    founded: 2012,
    description: 'Digital analytics and experimentation suite for understanding customer behavior across products and channels.',
    techStack: ['React', 'TypeScript', 'Java', 'Snowflake', 'Salesforce', 'Marketo'],
    fundingHistory: [
      { round: 'Series F', amount: 150000000, date: '2020-05-05', investors: ['Sequoia', 'GIC'] },
      { round: 'Strategic Debt', amount: 80000000, date: '2024-09-12', investors: ['JP Morgan'] },
    ],
    totalRaised: 230000000,
    headcountGrowth: 5,
    webTrafficTrend: [61, 60, 62, 64, 67, 70, 73],
    hiringSignals: [
      { role: 'Field Marketing Director', count: 2, department: 'Marketing', intent: 'Tightening target account coordination in the field.' },
      { role: 'Forecasting Manager', count: 1, department: 'Finance', intent: 'Aligning pipeline assumptions with board planning.' },
    ],
    buyingSignals: [
      { type: 'Conference Session', description: 'Shared plans for more verticalized GTM motions.', strength: 'Medium', date: '2025-05-23' },
      { type: 'Role Expansion', description: 'Opened role for revenue systems governance.', strength: 'High', date: '2025-05-09' },
    ],
    aiSummary: 'Amplitude is optimizing for efficient growth, which usually elevates signal quality, buyer coverage, and risk visibility. RevenueOS can slot into that motion as a shared operating layer for GTM teams.',
    logo: 'AM',
    color: 'from-violet-500 via-purple-500 to-indigo-500',
    fitScore: 86,
  },
  {
    id: 'segment',
    name: 'Segment',
    domain: 'segment.com',
    industry: 'Customer Data Platform',
    hq: 'San Francisco, CA',
    employees: 1100,
    founded: 2011,
    description: 'Customer data infrastructure for collecting, routing, and activating data across applications and warehouses.',
    techStack: ['React', 'TypeScript', 'Go', 'Kafka', 'Twilio', 'Looker'],
    fundingHistory: [
      { round: 'Series D', amount: 175000000, date: '2019-07-24', investors: ['Accel', 'GV'] },
      { round: 'Internal Investment', amount: 90000000, date: '2024-08-20', investors: ['Twilio'] },
    ],
    totalRaised: 265000000,
    headcountGrowth: 4,
    webTrafficTrend: [55, 54, 54, 56, 57, 59, 61],
    hiringSignals: [
      { role: 'Strategic CSM', count: 2, department: 'Success', intent: 'Protecting expansion opportunities in large accounts.' },
      { role: 'Demand Gen Manager', count: 1, department: 'Marketing', intent: 'Improving account engagement orchestration.' },
    ],
    buyingSignals: [
      { type: 'Solution Launch', description: 'Positioned more cross-sell packaging for warehouse-native use cases.', strength: 'Medium', date: '2025-05-18' },
      { type: 'Team Interview', description: 'Ops leaders spoke about better handoff between growth and sales.', strength: 'Low', date: '2025-05-04' },
    ],
    aiSummary: 'Segment’s blended PLG and enterprise model benefits from strong coordination and account insight. RevenueOS can add leverage by making buying signals visible to marketing, success, and sales in one workspace.',
    logo: 'SE',
    color: 'from-cyan-400 via-blue-500 to-indigo-600',
    fitScore: 83,
  },
  {
    id: 'contentful',
    name: 'Contentful',
    domain: 'contentful.com',
    industry: 'Composable CMS',
    hq: 'Berlin, Germany',
    employees: 960,
    founded: 2013,
    description: 'Composable content platform helping digital teams manage structured content across channels and markets.',
    techStack: ['React', 'TypeScript', 'Node.js', 'AWS', 'Pendo', 'HubSpot'],
    fundingHistory: [
      { round: 'Series F', amount: 175000000, date: '2021-07-28', investors: ['Tiger Global', 'Base10'] },
      { round: 'Series G', amount: 100000000, date: '2024-10-16', investors: ['Sapphire Ventures'] },
    ],
    totalRaised: 275000000,
    headcountGrowth: 7,
    webTrafficTrend: [46, 47, 49, 50, 53, 56, 58],
    hiringSignals: [
      { role: 'Enterprise Sales Engineer', count: 3, department: 'Pre-Sales', intent: 'Supporting larger digital transformation deals.' },
      { role: 'Partner Marketing Manager', count: 1, department: 'Marketing', intent: 'Improving ecosystem sourced pipeline.' },
    ],
    buyingSignals: [
      { type: 'Regional Expansion', description: 'Opened new GTM hiring in North America and EMEA.', strength: 'Medium', date: '2025-05-12' },
      { type: 'Customer Story', description: 'Highlighted cross-brand orchestration outcomes.', strength: 'Low', date: '2025-05-02' },
    ],
    aiSummary: 'Contentful’s global, partner-heavy enterprise motion creates room for RevenueOS to improve cross-functional execution and signal sharing without adding operational overhead.',
    logo: 'CT',
    color: 'from-blue-500 via-sky-500 to-cyan-400',
    fitScore: 80,
  },
  {
    id: 'greenhouse',
    name: 'Greenhouse',
    domain: 'greenhouse.io',
    industry: 'Hiring Software',
    hq: 'New York, NY',
    employees: 900,
    founded: 2012,
    description: 'Hiring platform for structured recruiting, interviewing, and talent operations.',
    techStack: ['React', 'TypeScript', 'Ruby on Rails', 'Postgres', 'Marketo', 'Salesforce'],
    fundingHistory: [
      { round: 'Series D', amount: 50000000, date: '2018-07-16', investors: ['TCV'] },
      { round: 'Private Equity', amount: 100000000, date: '2024-12-12', investors: ['Vista Equity Partners'] },
    ],
    totalRaised: 150000000,
    headcountGrowth: 6,
    webTrafficTrend: [43, 44, 45, 47, 49, 51, 53],
    hiringSignals: [
      { role: 'Account Executive', count: 4, department: 'Sales', intent: 'Growing mid-market and enterprise outbound.' },
      { role: 'Sales Enablement Specialist', count: 2, department: 'Sales', intent: 'Improving rep ramp and message consistency.' },
    ],
    buyingSignals: [
      { type: 'Ownership Change', description: 'New private equity backing brings focus on efficient growth.', strength: 'High', date: '2025-05-28' },
      { type: 'Headcount Plan', description: 'Renewed hiring across GTM after a flat period.', strength: 'Medium', date: '2025-05-05' },
    ],
    aiSummary: 'Greenhouse is entering a renewed efficiency phase with fresh GTM hiring and increased pressure on outbound productivity. RevenueOS can help the team scale precision without expanding ops headcount.',
    logo: 'GH',
    color: 'from-emerald-500 via-green-500 to-lime-500',
    fitScore: 85,
  },
]
