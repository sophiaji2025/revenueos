export interface CareerEntry {
  company: string;
  companyId?: string;
  role: string;
  startDate: string;
  endDate: string | null;
  duration: string;
  promoted?: boolean;
  promotedFrom?: string;
  highlight?: string;
}

export interface LinkedInPost {
  id: string;
  content: string;
  topics: string[];
  date: string;
  likes: number;
  comments: number;
  type: 'post' | 'comment' | 'repost';
}

export interface PodcastAppearance {
  show: string;
  episode: string;
  date: string;
  url?: string;
}

export interface SpeakingEngagement {
  event: string;
  talk: string;
  date: string;
  location?: string;
}

export interface BuyingSignal {
  id: string;
  text: string;
  weight: 'strong' | 'medium' | 'supporting';
  icon: string;
}

export interface AIInsight {
  id: string;
  text: string;
  confidence: 'high' | 'medium' | 'low';
  icon: string;
}

export interface StakeholderNode {
  id: string;
  contactId?: string;
  name: string;
  title: string;
  role: 'champion' | 'economic_buyer' | 'influencer' | 'blocker' | 'decision_maker' | 'end_user';
  influenceLevel: number; // 0-100
  engagementStatus: 'engaged' | 'neutral' | 'cold' | 'unknown';
  parentId?: string;
  isCurrentContact?: boolean;
}

export interface EngagementBreakdown {
  emailOpens: number;
  replies: number;
  siteVisits: number;
  contentDownloads: number;
  meetings: number;
}

export interface ContactIntel {
  contactId: string;
  engagementScore: number;
  engagementBand: 'cold' | 'warm' | 'hot';
  engagementTrend: number[]; // sparkline values
  engagementAI: string;
  engagementBreakdown: EngagementBreakdown;
  career: CareerEntry[];
  linkedInPosts: LinkedInPost[];
  podcasts: PodcastAppearance[];
  talks: SpeakingEngagement[];
  interests: string[];
  buyingLikelihood: number;
  buyingConfidence: 'low' | 'medium' | 'high';
  buyingSignals: BuyingSignal[];
  aiNarrative: string;
  aiInsights: AIInsight[];
  aiTalkingPoints: string[];
  aiRecommendedOpener: string;
  stakeholders: StakeholderNode[];
}

export const contactIntel: Record<string, ContactIntel> = {
  'sarah-chen': {
    contactId: 'sarah-chen',
    engagementScore: 87,
    engagementBand: 'hot',
    engagementTrend: [42, 55, 48, 61, 70, 74, 83, 87],
    engagementAI: 'Sarah has shown strong and accelerating engagement over the past 3 weeks. She opened 4 of 5 outbound emails, replied twice, visited the pricing page twice and the docs/integrations page once, and attended a product demo on June 3rd. Recency is excellent — last touchpoint was 2 days ago.',
    engagementBreakdown: { emailOpens: 4, replies: 2, siteVisits: 5, contentDownloads: 2, meetings: 1 },
    career: [
      { company: 'Vercel', companyId: 'vercel', role: 'VP Engineering', startDate: 'Jan 2023', endDate: null, duration: '1 yr 5 mo', promoted: true, promotedFrom: 'Director of Engineering', highlight: 'Led platform re-architecture serving 1M+ deploys/day' },
      { company: 'Vercel', companyId: 'vercel', role: 'Director of Engineering', startDate: 'Mar 2021', endDate: 'Jan 2023', duration: '1 yr 10 mo', highlight: 'Built and scaled infrastructure team from 8 to 24 engineers' },
      { company: 'Stripe', role: 'Senior Software Engineer', startDate: 'Jun 2018', endDate: 'Mar 2021', duration: '2 yr 9 mo', highlight: 'Core contributor to Stripe Connect platform' },
      { company: 'Airbnb', role: 'Software Engineer II', startDate: 'Aug 2016', endDate: 'Jun 2018', duration: '1 yr 10 mo', highlight: 'Infrastructure team, internal developer tooling' },
      { company: 'Google', role: 'Software Engineer', startDate: 'Jul 2014', endDate: 'Aug 2016', duration: '2 yr 1 mo', highlight: 'Site Reliability Engineering, Google Cloud' },
    ],
    linkedInPosts: [
      { id: 'lp1', content: "We just crossed 1M deploys per day on Vercel's Edge Network. Three years ago this felt impossible. What made it work: obsessing over DX at every layer, investing in internal platforms before you think you need to, and hiring people who care about both speed and reliability. Proud of the team 🚀", topics: ['Platform Engineering', 'Developer Experience', 'Scale'], date: 'Jun 12, 2025', likes: 2341, comments: 187, type: 'post' },
      { id: 'lp2', content: "Hot take: your internal developer platform is a product. Treat it like one. That means a PM, a roadmap, user research, and a real SLA. Every company building at scale eventually learns this — better to learn it early.", topics: ['Internal Developer Platform', 'Developer Productivity', 'Platform Engineering'], date: 'Jun 4, 2025', likes: 1872, comments: 143, type: 'post' },
      { id: 'lp3', content: "Fascinating thread on DORA metrics. We've been using deployment frequency and change failure rate as our north star for 2 years. The correlation with team happiness is real. If your deploy frequency is low, fix the fear, not just the tooling.", topics: ['DORA Metrics', 'Engineering Culture', 'DevOps'], date: 'May 28, 2025', likes: 934, comments: 76, type: 'repost' },
      { id: 'lp4', content: "We're piloting AI-assisted code review at Vercel. Early signal: 34% reduction in review cycle time, better catch rate on security issues. The key is treating the AI as a junior reviewer who needs guardrails, not an oracle. Curious what others are seeing.", topics: ['AI Tooling', 'Developer Productivity', 'Code Review'], date: 'May 19, 2025', likes: 3102, comments: 265, type: 'post' },
      { id: 'lp5', content: "Hiring a Staff Platform Engineer to lead our Internal Developer Platform initiative. This is one of the most impactful roles at Vercel right now — you'd own the golden path for 400+ engineers. DM me if interested.", topics: ['Hiring', 'Platform Engineering', 'Internal Developer Platform'], date: 'May 10, 2025', likes: 412, comments: 89, type: 'post' },
    ],
    podcasts: [
      { show: 'Software Engineering Daily', episode: 'Building Developer Platforms at Scale', date: 'Apr 2025' },
      { show: 'Changelog: Ship It!', episode: 'Internal Platforms Done Right', date: 'Feb 2025' },
      { show: 'The InfoQ Podcast', episode: 'Scaling Engineering Organizations', date: 'Nov 2024' },
    ],
    talks: [
      { event: 'KubeCon NA 2024', talk: 'From Zero to 1M Deploys: Lessons in Edge Infrastructure', date: 'Nov 2024', location: 'Chicago, IL' },
      { event: 'PlatformCon 2025', talk: 'The IDP as a Product: Why Your Platform Needs a PM', date: 'Jun 2025', location: 'Remote' },
      { event: 'QCon San Francisco 2024', talk: 'DX at Scale: Developer Experience Metrics That Matter', date: 'Oct 2024', location: 'San Francisco, CA' },
    ],
    interests: ['Developer Productivity', 'Platform Engineering', 'AI Tooling', 'DORA Metrics', 'Internal Developer Platforms', 'Edge Computing', 'Site Reliability', 'Engineering Culture'],
    buyingLikelihood: 82,
    buyingConfidence: 'high',
    buyingSignals: [
      { id: 'bs1', text: 'Vercel raised $150M Series E 6 weeks ago — active investment in infrastructure', weight: 'strong', icon: 'TrendingUp' },
      { id: 'bs2', text: 'Posted 4 platform/infra engineer roles in the past month (Staff Platform Engineer, SRE, DevOps Lead)', weight: 'strong', icon: 'Users' },
      { id: 'bs3', text: 'Engaged with 4 emails + visited pricing page 2x + attended demo', weight: 'strong', icon: 'Mail' },
      { id: 'bs4', text: 'Publicly discussing AI-assisted developer tooling and internal platforms on LinkedIn', weight: 'medium', icon: 'Linkedin' },
      { id: 'bs5', text: 'Spoke at PlatformCon 2025 about treating IDPs as products — signals active initiative', weight: 'medium', icon: 'Mic' },
      { id: 'bs6', text: 'Company headcount grew 35% YoY — scaling pains likely', weight: 'supporting', icon: 'BarChart2' },
    ],
    aiNarrative: "Sarah Chen is a high-conviction target in this quarter. She's a technically credible VP Engineering at Vercel who is actively investing in developer productivity infrastructure and internal tooling — precisely the pain points RevenueOS addresses. Her recent public signals (LinkedIn posts about IDPs, AI-assisted code review, DORA metrics) align directly with our product narrative. The combination of fresh Series E capital, aggressive hiring, and personal engagement make this a strong pipeline opportunity.",
    aiInsights: [
      { id: 'ai1', text: 'Actively building an Internal Developer Platform (IDP) — mentioned as a Q2 initiative in PlatformCon talk', confidence: 'high', icon: 'Layers' },
      { id: 'ai2', text: 'Publicly exploring AI-assisted tooling; piloting AI code review across engineering org', confidence: 'high', icon: 'Cpu' },
      { id: 'ai3', text: 'Team scaling rapidly — headcount doubled in 18 months, actively hiring platform engineers', confidence: 'high', icon: 'Users' },
      { id: 'ai4', text: 'Potential budget authority for developer tooling spend based on VP title and IDP ownership', confidence: 'medium', icon: 'DollarSign' },
      { id: 'ai5', text: 'Likely to be influenced by peer recommendations — active in PlatformCon and KubeCon networks', confidence: 'medium', icon: 'Network' },
    ],
    aiTalkingPoints: [
      "Reference her PlatformCon talk on IDPs as a product — position RevenueOS as a parallel: the sales team deserves the same DX investment as engineering",
      "Lead with DORA-style metrics for sales: pipeline velocity, sequence efficacy, reply rate trends",
      "Mention the AI-assisted tooling angle — RevenueOS AI is to sales reps what Copilot is to engineers",
      "Acknowledge the hiring spike — frame as exactly the moment to standardize prospecting workflows",
    ],
    aiRecommendedOpener: "Hi Sarah — saw your PlatformCon talk on treating IDPs as a product. We're building the equivalent for sales teams: an AI operating system that gives reps the same leverage your platform team gives engineers. Given Vercel's growth trajectory, curious if you'd find it interesting.",
    stakeholders: [
      { id: 'sk1', contactId: 'sarah-chen', name: 'Sarah Chen', title: 'VP Engineering', role: 'champion', influenceLevel: 92, engagementStatus: 'engaged', isCurrentContact: true },
      { id: 'sk2', contactId: 'marcus-reed', name: 'Marcus Reed', title: 'CFO', role: 'economic_buyer', influenceLevel: 88, engagementStatus: 'cold', parentId: 'sk1' },
      { id: 'sk3', contactId: 'priya-kapoor', name: 'Priya Kapoor', title: 'CTO', role: 'decision_maker', influenceLevel: 95, engagementStatus: 'neutral', parentId: 'sk2' },
      { id: 'sk4', contactId: 'james-okafor', name: 'James Okafor', title: 'Staff Platform Engineer', role: 'influencer', influenceLevel: 71, engagementStatus: 'engaged', parentId: 'sk1' },
      { id: 'sk5', name: 'Dana Whitfield', title: 'Head of Procurement', role: 'blocker', influenceLevel: 65, engagementStatus: 'unknown', parentId: 'sk2' },
      { id: 'sk6', name: 'Alex Rivera', title: 'Director of Security', role: 'influencer', influenceLevel: 60, engagementStatus: 'neutral', parentId: 'sk3' },
    ],
  },

  'marcus-reed': {
    contactId: 'marcus-reed',
    engagementScore: 34,
    engagementBand: 'cold',
    engagementTrend: [55, 48, 40, 38, 35, 34, 30, 34],
    engagementAI: 'Marcus opened 1 email 3 weeks ago but has since gone quiet. No site visits or content downloads on record. Engagement is trending downward — he may need a different channel or a warm intro from Sarah Chen.',
    engagementBreakdown: { emailOpens: 1, replies: 0, siteVisits: 0, contentDownloads: 0, meetings: 0 },
    career: [
      { company: 'Vercel', companyId: 'vercel', role: 'CFO', startDate: 'Sep 2022', endDate: null, duration: '2 yr 9 mo', highlight: 'Led Series E fundraise of $150M' },
      { company: 'Stripe', role: 'VP Finance', startDate: 'Jan 2019', endDate: 'Sep 2022', duration: '3 yr 8 mo', promoted: true, promotedFrom: 'Director of Finance', highlight: 'Scaled finance org through IPO readiness process' },
      { company: 'Goldman Sachs', role: 'Vice President, Technology Investment Banking', startDate: 'Jul 2014', endDate: 'Jan 2019', duration: '4 yr 6 mo', highlight: 'Led coverage of developer tools and cloud infrastructure' },
    ],
    linkedInPosts: [
      { id: 'lp-mr1', content: "Proud to announce Vercel's $150M Series E. This capital lets us double down on our edge infrastructure and continue building the best platform for frontend developers worldwide.", topics: ['Fundraising', 'Venture Capital', 'Vercel'], date: 'May 2025', likes: 1203, comments: 94, type: 'post' },
      { id: 'lp-mr2', content: "CFOs who dismiss developer productivity tools as 'cost centers' are missing the ROI story. Faster deployment cycles = faster revenue cycles. The metrics are there if you look.", topics: ['Finance', 'Developer Productivity', 'ROI'], date: 'Apr 2025', likes: 678, comments: 55, type: 'post' },
    ],
    podcasts: [
      { show: 'The Twenty Minute VC', episode: 'Building for Developers: The Financial Perspective', date: 'Mar 2025' },
    ],
    talks: [
      { event: 'SaaStr Annual 2025', talk: 'Unit Economics in Developer-Led Growth', date: 'Feb 2025', location: 'San Francisco, CA' },
    ],
    interests: ['Developer-Led Growth', 'SaaS Metrics', 'B2B Finance', 'FinTech'],
    buyingLikelihood: 45,
    buyingConfidence: 'medium',
    buyingSignals: [
      { id: 'bs1', text: 'Controls budget for infrastructure and tooling at Vercel post-Series E', weight: 'strong', icon: 'DollarSign' },
      { id: 'bs2', text: 'Publicly commented that developer productivity tools have measurable ROI', weight: 'medium', icon: 'BarChart2' },
      { id: 'bs3', text: 'Low engagement — needs warm intro or financial ROI framing', weight: 'supporting', icon: 'AlertCircle' },
    ],
    aiNarrative: "Marcus Reed is the economic buyer at Vercel — he controls the purse strings for platform and tooling investments. His cold engagement suggests he hasn't been directly engaged with the RevenueOS value prop yet. The best path is a warm referral from Sarah Chen paired with a tight ROI story.",
    aiInsights: [
      { id: 'ai1', text: 'Economic buyer — has final budget authority for tooling/infrastructure spend', confidence: 'high', icon: 'DollarSign' },
      { id: 'ai2', text: 'Led $150M Series E; company has active investment mandate through 2026', confidence: 'high', icon: 'TrendingUp' },
      { id: 'ai3', text: 'Responds to ROI-focused messaging — financial framing recommended', confidence: 'medium', icon: 'BarChart2' },
    ],
    aiTalkingPoints: ['Lead with total cost of pipeline waste', 'ROI calculator showing time-to-close reduction', 'Reference Sarah Chen as internal champion'],
    aiRecommendedOpener: "Marcus — Sarah Chen mentioned you're thinking about ROI frameworks for developer tooling investments. I'd love to share how teams like Ramp quantify pipeline velocity gains from RevenueOS.",
    stakeholders: [
      { id: 'sk1', contactId: 'sarah-chen', name: 'Sarah Chen', title: 'VP Engineering', role: 'champion', influenceLevel: 92, engagementStatus: 'engaged', isCurrentContact: false },
      { id: 'sk2', contactId: 'marcus-reed', name: 'Marcus Reed', title: 'CFO', role: 'economic_buyer', influenceLevel: 88, engagementStatus: 'cold', parentId: 'sk1', isCurrentContact: true },
      { id: 'sk3', contactId: 'priya-kapoor', name: 'Priya Kapoor', title: 'CTO', role: 'decision_maker', influenceLevel: 95, engagementStatus: 'neutral', parentId: 'sk2' },
      { id: 'sk4', contactId: 'james-okafor', name: 'James Okafor', title: 'Staff Platform Engineer', role: 'influencer', influenceLevel: 71, engagementStatus: 'engaged', parentId: 'sk1' },
      { id: 'sk5', name: 'Dana Whitfield', title: 'Head of Procurement', role: 'blocker', influenceLevel: 65, engagementStatus: 'unknown', parentId: 'sk2' },
    ],
  },

  'priya-kapoor': {
    contactId: 'priya-kapoor',
    engagementScore: 61,
    engagementBand: 'warm',
    engagementTrend: [30, 35, 42, 50, 55, 58, 60, 61],
    engagementAI: "Priya has steadily warmed over 4 weeks. She opened 3 emails, downloaded our 'Engineering Velocity' whitepaper, and visited the product page twice. She hasn't replied yet but activity suggests she's in research mode.",
    engagementBreakdown: { emailOpens: 3, replies: 0, siteVisits: 3, contentDownloads: 2, meetings: 0 },
    career: [
      { company: 'Vercel', companyId: 'vercel', role: 'CTO', startDate: 'Jun 2020', endDate: null, duration: '5 yr', highlight: 'Architect of Vercel\'s edge runtime and global network' },
      { company: 'Facebook (Meta)', role: 'Engineering Manager, Infrastructure', startDate: 'Jan 2017', endDate: 'Jun 2020', duration: '3 yr 5 mo', promoted: true, promotedFrom: 'Senior Software Engineer', highlight: 'Built CDN caching layer serving 2B+ users' },
      { company: 'Twitter', role: 'Senior Software Engineer', startDate: 'Apr 2014', endDate: 'Jan 2017', duration: '2 yr 9 mo', highlight: 'Real-time data pipeline engineering' },
      { company: 'Amazon', role: 'Software Development Engineer', startDate: 'Aug 2011', endDate: 'Apr 2014', duration: '2 yr 8 mo', highlight: 'AWS CloudFront team' },
    ],
    linkedInPosts: [
      { id: 'lp-pk1', content: "The future of frontend infrastructure is at the edge. We're shipping features to Vercel's edge runtime that would have required a full backend rewrite 3 years ago. The DX implications are profound.", topics: ['Edge Computing', 'Infrastructure', 'DX'], date: 'Jun 2025', likes: 1567, comments: 122, type: 'post' },
      { id: 'lp-pk2', content: "CTOs: your AI strategy and your developer platform strategy are the same strategy. Teams that invest in one will naturally invest in the other. Don't treat them as separate budget lines.", topics: ['AI Strategy', 'Developer Platform', 'CTO'], date: 'May 2025', likes: 2890, comments: 201, type: 'post' },
    ],
    podcasts: [
      { show: 'Syntax.fm', episode: 'Edge-First Architecture with Vercel\'s CTO', date: 'May 2025' },
      { show: 'CoRecursive', episode: 'Building the Infrastructure of the Modern Web', date: 'Jan 2025' },
    ],
    talks: [
      { event: 'Next.js Conf 2024', talk: 'Edge-First: The Next Decade of Web Infrastructure', date: 'Oct 2024', location: 'San Francisco, CA' },
    ],
    interests: ['Edge Computing', 'AI Strategy', 'Developer Platforms', 'Infrastructure', 'WebAssembly'],
    buyingLikelihood: 67,
    buyingConfidence: 'medium',
    buyingSignals: [
      { id: 'bs1', text: 'CTO with stated AI strategy + developer platform ownership', weight: 'strong', icon: 'Cpu' },
      { id: 'bs2', text: 'Downloaded Engineering Velocity whitepaper — actively researching', weight: 'medium', icon: 'Download' },
      { id: 'bs3', text: 'No reply yet — recommend nurture sequence focused on technical depth', weight: 'supporting', icon: 'Clock' },
    ],
    aiNarrative: "Priya is a highly technical CTO who thinks at the intersection of infrastructure and AI strategy. She's in research mode — building her conviction before making decisions. Deep technical content and peer references from companies at similar scale are most likely to accelerate her.",
    aiInsights: [
      { id: 'ai1', text: 'Technical decision maker — values depth, benchmarks, and architecture discussions', confidence: 'high', icon: 'Cpu' },
      { id: 'ai2', text: 'AI + developer platform intersection is her stated focus — aligns with RevenueOS AI angle', confidence: 'high', icon: 'Layers' },
      { id: 'ai3', text: 'In research/evaluation mode based on content download pattern', confidence: 'medium', icon: 'Search' },
    ],
    aiTalkingPoints: ['Lead with technical architecture', 'Share engineering team case studies', 'Reference AI-assisted pipeline insights'],
    aiRecommendedOpener: "Priya — your point about AI and developer platform strategy being the same thing resonated. We're building RevenueOS on the same principle for sales teams. Would love to share what we're seeing at similar-stage companies.",
    stakeholders: [
      { id: 'sk1', contactId: 'sarah-chen', name: 'Sarah Chen', title: 'VP Engineering', role: 'champion', influenceLevel: 92, engagementStatus: 'engaged' },
      { id: 'sk2', contactId: 'marcus-reed', name: 'Marcus Reed', title: 'CFO', role: 'economic_buyer', influenceLevel: 88, engagementStatus: 'cold' },
      { id: 'sk3', contactId: 'priya-kapoor', name: 'Priya Kapoor', title: 'CTO', role: 'decision_maker', influenceLevel: 95, engagementStatus: 'neutral', isCurrentContact: true },
      { id: 'sk4', name: 'James Okafor', title: 'Staff Platform Engineer', role: 'influencer', influenceLevel: 71, engagementStatus: 'engaged' },
      { id: 'sk5', name: 'Dana Whitfield', title: 'Head of Procurement', role: 'blocker', influenceLevel: 65, engagementStatus: 'unknown' },
    ],
  },

  'james-okafor': {
    contactId: 'james-okafor',
    engagementScore: 73,
    engagementBand: 'warm',
    engagementTrend: [50, 58, 62, 65, 68, 70, 71, 73],
    engagementAI: "James is a consistent engager — opens most emails, visited the integrations and docs page 4 times, and replied once asking about Slack integration. He's a likely internal advocate if converted.",
    engagementBreakdown: { emailOpens: 4, replies: 1, siteVisits: 5, contentDownloads: 3, meetings: 0 },
    career: [
      { company: 'Vercel', companyId: 'vercel', role: 'Staff Platform Engineer', startDate: 'Apr 2022', endDate: null, duration: '3 yr 2 mo', highlight: 'Owns internal developer platform and golden path tooling' },
      { company: 'Shopify', role: 'Senior Software Engineer, Platform', startDate: 'Feb 2019', endDate: 'Apr 2022', duration: '3 yr 2 mo', promoted: true, promotedFrom: 'Software Engineer', highlight: 'Led migration to modular monolith architecture' },
      { company: 'HubSpot', role: 'Software Engineer', startDate: 'Jun 2017', endDate: 'Feb 2019', duration: '1 yr 8 mo', highlight: 'Platform and integrations team' },
    ],
    linkedInPosts: [
      { id: 'lp-jo1', content: "Just finished writing our internal IDP onboarding guide. The goal: a new engineer should be able to deploy their first service in under 20 minutes. We're at 23 minutes right now. Getting closer 🎯", topics: ['Internal Developer Platform', 'Onboarding', 'DX'], date: 'Jun 2025', likes: 445, comments: 38, type: 'post' },
      { id: 'lp-jo2', content: "Unpopular opinion: Backstage is not the right answer for most companies under 500 engineers. The maintenance overhead is brutal unless you have a dedicated platform team. We spent 6 months learning this the hard way.", topics: ['Developer Tooling', 'Platform Engineering', 'Backstage'], date: 'May 2025', likes: 1203, comments: 142, type: 'post' },
    ],
    podcasts: [
      { show: 'Platform Engineering Podcast', episode: 'IDPs at Mid-Scale: Real Talk', date: 'Apr 2025' },
    ],
    talks: [
      { event: 'PlatformCon 2025', talk: 'Golden Paths That Actually Work: Lessons from Vercel', date: 'Jun 2025', location: 'Remote' },
    ],
    interests: ['Internal Developer Platforms', 'Developer Experience', 'Platform Engineering', 'Kubernetes', 'Backstage'],
    buyingLikelihood: 71,
    buyingConfidence: 'medium',
    buyingSignals: [
      { id: 'bs1', text: 'Directly owns the tooling that RevenueOS would integrate with', weight: 'strong', icon: 'Tool' },
      { id: 'bs2', text: 'Asked about Slack integration — evaluating feasibility as internal champion', weight: 'strong', icon: 'MessageSquare' },
      { id: 'bs3', text: 'Active in platform engineering community — peer influence vector', weight: 'medium', icon: 'Users' },
    ],
    aiNarrative: "James is a technical influencer who would own the day-to-day implementation. His question about Slack integration signals he's mentally trialing the product. Converting him as an internal champion alongside Sarah Chen would significantly de-risk the deal.",
    aiInsights: [
      { id: 'ai1', text: 'Day-to-day implementer — his endorsement can unblock Sarah Chen\'s decision', confidence: 'high', icon: 'User' },
      { id: 'ai2', text: 'Actively frustrated with Backstage overhead — opening for an alternative approach', confidence: 'high', icon: 'AlertCircle' },
      { id: 'ai3', text: 'Already evaluating integrations — send technical docs and Slack integration details', confidence: 'high', icon: 'Link' },
    ],
    aiTalkingPoints: ['Lead with Slack + GitHub integration story', 'Share IDP integration docs', 'Offer a technical sandbox environment'],
    aiRecommendedOpener: "James — your post about Backstage maintenance overhead was spot on. We built RevenueOS's integration layer specifically to avoid that trap. Happy to show you how our Slack connector works.",
    stakeholders: [
      { id: 'sk1', contactId: 'sarah-chen', name: 'Sarah Chen', title: 'VP Engineering', role: 'champion', influenceLevel: 92, engagementStatus: 'engaged' },
      { id: 'sk2', contactId: 'marcus-reed', name: 'Marcus Reed', title: 'CFO', role: 'economic_buyer', influenceLevel: 88, engagementStatus: 'cold' },
      { id: 'sk3', contactId: 'priya-kapoor', name: 'Priya Kapoor', title: 'CTO', role: 'decision_maker', influenceLevel: 95, engagementStatus: 'neutral' },
      { id: 'sk4', contactId: 'james-okafor', name: 'James Okafor', title: 'Staff Platform Engineer', role: 'influencer', influenceLevel: 71, engagementStatus: 'engaged', isCurrentContact: true },
      { id: 'sk5', name: 'Dana Whitfield', title: 'Head of Procurement', role: 'blocker', influenceLevel: 65, engagementStatus: 'unknown' },
    ],
  },

  'nina-patel': {
    contactId: 'nina-patel',
    engagementScore: 79,
    engagementBand: 'hot',
    engagementTrend: [40, 48, 55, 62, 68, 73, 76, 79],
    engagementAI: "Nina has engaged steadily across all channels. She opened 5 of 6 emails, attended a webinar, and downloaded two case studies. She replied to a personalized cold email referencing her talk at SaaStr — strong signal she appreciates research-backed outreach.",
    engagementBreakdown: { emailOpens: 5, replies: 1, siteVisits: 4, contentDownloads: 3, meetings: 1 },
    career: [
      { company: 'Ramp', companyId: 'ramp', role: 'VP of Revenue Operations', startDate: 'Mar 2022', endDate: null, duration: '3 yr 3 mo', highlight: 'Built RevOps function from 0 to 3 as Ramp scaled ARR 10x', promoted: true, promotedFrom: 'Director of Sales Operations' },
      { company: 'Ramp', companyId: 'ramp', role: 'Director of Sales Operations', startDate: 'Sep 2021', endDate: 'Mar 2022', duration: '6 mo', highlight: 'Stood up CRM infrastructure and outbound motion' },
      { company: 'Brex', role: 'Senior Manager, Revenue Operations', startDate: 'Jan 2019', endDate: 'Sep 2021', duration: '2 yr 8 mo', highlight: 'Designed outbound sequencing and territory models' },
      { company: 'Salesforce', role: 'Sales Operations Analyst', startDate: 'Jun 2016', endDate: 'Jan 2019', duration: '2 yr 7 mo', highlight: 'AMER territory planning and forecasting' },
    ],
    linkedInPosts: [
      { id: 'lp-np1', content: "RevOps truth: the #1 reason pipeline slips is not the AE — it's lack of multi-threading. If you're single-threaded into 1 champion you don't have a deal, you have a relationship. Build the committee or lose the deal.", topics: ['RevOps', 'Multi-threading', 'Pipeline'], date: 'Jun 2025', likes: 1892, comments: 156, type: 'post' },
      { id: 'lp-np2', content: "AI in sales is getting real. We ran a test: AI-personalized sequences vs. templated sequences. AI sequences had 2.4x reply rate and 1.8x meeting booked rate. The delta will only grow.", topics: ['AI Sales', 'Personalization', 'RevOps'], date: 'May 2025', likes: 2341, comments: 198, type: 'post' },
    ],
    podcasts: [
      { show: 'RevOps FM', episode: 'Scaling RevOps at a Hypergrowth FinTech', date: 'May 2025' },
      { show: 'The Predictable Revenue Podcast', episode: 'Modern Outbound in 2025', date: 'Mar 2025' },
    ],
    talks: [
      { event: 'SaaStr Annual 2025', talk: 'RevOps at Ramp: Building the Revenue Engine for 10x Growth', date: 'Feb 2025', location: 'San Francisco, CA' },
      { event: 'Pavilion Summit 2024', talk: 'AI-Powered RevOps: What\'s Working Right Now', date: 'Sep 2024', location: 'New York, NY' },
    ],
    interests: ['Revenue Operations', 'AI Sales', 'Pipeline Management', 'Sales Velocity', 'Multi-threading', 'GTM Strategy'],
    buyingLikelihood: 88,
    buyingConfidence: 'high',
    buyingSignals: [
      { id: 'bs1', text: 'Ramp raised $300M Series D 3 months ago — active scaling of GTM infrastructure', weight: 'strong', icon: 'TrendingUp' },
      { id: 'bs2', text: 'Publicly advocates for AI-assisted sales — built-in alignment with RevenueOS value prop', weight: 'strong', icon: 'Cpu' },
      { id: 'bs3', text: 'Replied to email + attended webinar — high intent signal', weight: 'strong', icon: 'Mail' },
      { id: 'bs4', text: 'Owns RevOps function end-to-end — decision maker and champion simultaneously', weight: 'strong', icon: 'Target' },
      { id: 'bs5', text: 'Company headcount growing 50%+ YoY — RevOps tooling investment expected', weight: 'medium', icon: 'Users' },
    ],
    aiNarrative: "Nina is a dream target — she's the VP of RevOps at Ramp who publicly believes in AI-powered sales and is actively scaling a modern outbound motion. She's both the champion and likely economic buyer for a tool like RevenueOS. Fresh Series D capital and aggressive growth make this a high-urgency opportunity.",
    aiInsights: [
      { id: 'ai1', text: 'Champion and economic buyer simultaneously — short decision path', confidence: 'high', icon: 'Star' },
      { id: 'ai2', text: 'Publicly validated AI-assisted outreach value — no education needed', confidence: 'high', icon: 'CheckCircle' },
      { id: 'ai3', text: 'Scaling GTM from 0→1 — high appetite for modern tooling', confidence: 'high', icon: 'Zap' },
      { id: 'ai4', text: 'Spoke at SaaStr and Pavilion — peer-influenced buyer, community references matter', confidence: 'medium', icon: 'Users' },
    ],
    aiTalkingPoints: ['Lead with AI personalization results data', 'Multi-threading ROI story', 'Reference SaaStr talk insights'],
    aiRecommendedOpener: "Nina — your point about multi-threading at SaaStr was spot on. RevenueOS actually maps the buying committee automatically and surfaces engagement signals for every stakeholder. Would love to show you the stakeholder intelligence feature.",
    stakeholders: [
      { id: 'sk1', contactId: 'nina-patel', name: 'Nina Patel', title: 'VP Revenue Operations', role: 'champion', influenceLevel: 90, engagementStatus: 'engaged', isCurrentContact: true },
      { id: 'sk2', name: 'Derek Song', title: 'CFO', role: 'economic_buyer', influenceLevel: 82, engagementStatus: 'cold', parentId: 'sk1' },
      { id: 'sk3', name: 'Kayla Torres', title: 'VP Sales', role: 'influencer', influenceLevel: 78, engagementStatus: 'neutral', parentId: 'sk1' },
      { id: 'sk4', name: 'Brian Walsh', title: 'Head of IT Security', role: 'blocker', influenceLevel: 60, engagementStatus: 'unknown', parentId: 'sk2' },
      { id: 'sk5', name: 'Mia Chang', title: 'Sales Operations Manager', role: 'end_user', influenceLevel: 45, engagementStatus: 'engaged', parentId: 'sk1' },
    ],
  },

  'alex-morgan': {
    contactId: 'alex-morgan',
    engagementScore: 52,
    engagementBand: 'warm',
    engagementTrend: [30, 35, 40, 45, 48, 50, 51, 52],
    engagementAI: 'Alex opened 2 emails and visited the homepage. Steady but slow engagement — not yet at a tipping point. Likely evaluating multiple vendors. More personalized follow-up around Linear\'s product-led growth motion could accelerate.',
    engagementBreakdown: { emailOpens: 2, replies: 0, siteVisits: 2, contentDownloads: 1, meetings: 0 },
    career: [
      { company: 'Linear', companyId: 'linear', role: 'Head of Engineering', startDate: 'Aug 2022', endDate: null, duration: '2 yr 10 mo', highlight: 'Scaled engineering from 15 to 45 engineers across 3 time zones' },
      { company: 'Figma', companyId: 'figma', role: 'Senior Engineering Manager', startDate: 'May 2020', endDate: 'Aug 2022', duration: '2 yr 3 mo', promoted: true, promotedFrom: 'Engineering Manager', highlight: 'Led real-time collaboration infrastructure team' },
      { company: 'Notion', companyId: 'notion', role: 'Engineering Manager', startDate: 'Feb 2018', endDate: 'May 2020', duration: '2 yr 3 mo', highlight: 'Core product team, first 10 engineers' },
      { company: 'Dropbox', role: 'Senior Software Engineer', startDate: 'Jul 2015', endDate: 'Feb 2018', duration: '2 yr 7 mo', highlight: 'Sync infrastructure' },
    ],
    linkedInPosts: [
      { id: 'lp-am1', content: "Linear's approach to software development is opinionated for a reason. Constraints breed speed. If your team is moving slowly, the answer is rarely more process — it's usually less.", topics: ['Engineering Culture', 'Developer Productivity', 'Linear'], date: 'Jun 2025', likes: 1123, comments: 87, type: 'post' },
    ],
    podcasts: [
      { show: 'Lenny\'s Podcast', episode: 'How Linear Thinks About Product and Engineering', date: 'Apr 2025' },
    ],
    talks: [
      { event: 'LeadDev London 2025', talk: 'Engineering at Linear: Fast by Design', date: 'May 2025', location: 'London, UK' },
    ],
    interests: ['Engineering Culture', 'Product Engineering', 'Developer Productivity', 'Remote-First Teams'],
    buyingLikelihood: 58,
    buyingConfidence: 'medium',
    buyingSignals: [
      { id: 'bs1', text: 'Linear raised Series B 4 months ago — growth investment cycle', weight: 'strong', icon: 'TrendingUp' },
      { id: 'bs2', text: 'Scaling engineering team rapidly — infra and tooling investment likely', weight: 'medium', icon: 'Users' },
      { id: 'bs3', text: 'Slow email engagement — needs more personalized outreach', weight: 'supporting', icon: 'Clock' },
    ],
    aiNarrative: "Alex is a mid-funnel prospect with modest engagement. The company growth story is solid but engagement needs acceleration. A highly personalized sequence referencing Linear's own product philosophy could resonate well.",
    aiInsights: [
      { id: 'ai1', text: 'Values opinionated tooling and speed — aligns with RevenueOS AI-first approach', confidence: 'medium', icon: 'Zap' },
      { id: 'ai2', text: 'Engineering-first buyer — technical validation required before business case', confidence: 'medium', icon: 'Code' },
    ],
    aiTalkingPoints: ['Lead with speed and reduced cognitive overhead', 'Opinionated AI workflows story', 'Reference Linear-like UX philosophy'],
    aiRecommendedOpener: "Alex — Linear's philosophy of constraints-drive-speed resonates with how we built RevenueOS. We made deliberate choices about what the AI decides vs. what reps control. Would love to show you the workflow.",
    stakeholders: [
      { id: 'sk1', contactId: 'alex-morgan', name: 'Alex Morgan', title: 'Head of Engineering', role: 'champion', influenceLevel: 80, engagementStatus: 'neutral', isCurrentContact: true },
      { id: 'sk2', name: 'Jordan Park', title: 'Co-founder & CEO', role: 'economic_buyer', influenceLevel: 95, engagementStatus: 'unknown', parentId: 'sk1' },
      { id: 'sk3', name: 'Sam Eriksson', title: 'Head of Product', role: 'influencer', influenceLevel: 75, engagementStatus: 'neutral', parentId: 'sk2' },
      { id: 'sk4', name: 'Casey Liu', title: 'Head of Finance', role: 'blocker', influenceLevel: 55, engagementStatus: 'unknown', parentId: 'sk2' },
    ],
  },

  'elena-vasquez': {
    contactId: 'elena-vasquez',
    engagementScore: 91,
    engagementBand: 'hot',
    engagementTrend: [60, 68, 73, 78, 82, 86, 89, 91],
    engagementAI: "Elena is the highest-engagement contact in the pipeline. She opened every email, replied 3 times, booked a demo, attended the demo, and has been back to the pricing page 4 times since. She is in active evaluation mode.",
    engagementBreakdown: { emailOpens: 6, replies: 3, siteVisits: 8, contentDownloads: 4, meetings: 2 },
    career: [
      { company: 'Datadog', companyId: 'datadog', role: 'Director of Platform Engineering', startDate: 'Nov 2021', endDate: null, duration: '3 yr 7 mo', highlight: 'Leads Datadog\'s internal developer platform serving 2,500 engineers', promoted: true, promotedFrom: 'Senior Engineering Manager' },
      { company: 'Datadog', companyId: 'datadog', role: 'Senior Engineering Manager', startDate: 'Jan 2020', endDate: 'Nov 2021', duration: '1 yr 10 mo', highlight: 'Infrastructure tooling and CI/CD pipelines' },
      { company: 'Palantir', role: 'Software Engineer, Infrastructure', startDate: 'Jul 2016', endDate: 'Jan 2020', duration: '3 yr 6 mo', highlight: 'Enterprise deployment and infrastructure automation' },
      { company: 'Stanford University', role: 'Research Engineer', startDate: 'Sep 2014', endDate: 'Jun 2016', duration: '1 yr 9 mo', highlight: 'Distributed systems research lab' },
    ],
    linkedInPosts: [
      { id: 'lp-ev1', content: "We just finished onboarding our 2,500th internal Datadog user to our new developer portal. 18 months of work. The biggest lesson: documentation is the product. If your engineers can't self-serve, your platform is a help desk.", topics: ['Developer Portal', 'Documentation', 'Platform Engineering'], date: 'Jun 2025', likes: 2103, comments: 177, type: 'post' },
      { id: 'lp-ev2', content: "AI-generated runbooks are here and they're actually good. We're seeing 40% reduction in P1 escalations when engineers have AI-assisted runbooks at incident time. The ROI on this was obvious within 2 weeks.", topics: ['AI Tooling', 'Observability', 'SRE'], date: 'May 2025', likes: 3421, comments: 298, type: 'post' },
      { id: 'lp-ev3', content: "Controversial take: DORA metrics are a starting point, not a destination. We use 12 custom metrics internally and find they tell a richer story. But if you have nothing, start with DORA.", topics: ['DORA Metrics', 'Engineering Metrics', 'Platform Engineering'], date: 'May 2025', likes: 1567, comments: 134, type: 'post' },
    ],
    podcasts: [
      { show: 'Platform Engineering Podcast', episode: 'Developer Portals at Scale: Datadog\'s Journey', date: 'Jun 2025' },
      { show: 'DevOps Paradox', episode: 'AI in the SRE Workflow', date: 'Mar 2025' },
    ],
    talks: [
      { event: 'PlatformCon 2025', talk: 'Developer Portals That Actually Get Used', date: 'Jun 2025', location: 'Remote' },
      { event: 'SREcon Americas 2025', talk: 'AI-Assisted Incident Response: Six Months In', date: 'Mar 2025', location: 'San Francisco, CA' },
      { event: 'KubeCon EU 2025', talk: 'Platform Engineering at Datadog Scale', date: 'Apr 2025', location: 'London, UK' },
    ],
    interests: ['Developer Portals', 'AI Tooling', 'DORA Metrics', 'SRE', 'Observability', 'Platform Engineering', 'Incident Management'],
    buyingLikelihood: 93,
    buyingConfidence: 'high',
    buyingSignals: [
      { id: 'bs1', text: 'Visited pricing page 4 times in 2 weeks — strong purchase intent signal', weight: 'strong', icon: 'DollarSign' },
      { id: 'bs2', text: 'Attended demo + 3 email replies — highest engagement in the pipeline', weight: 'strong', icon: 'Star' },
      { id: 'bs3', text: 'Publicly proven ROI mindset — shared AI runbook ROI story publicly', weight: 'strong', icon: 'TrendingUp' },
      { id: 'bs4', text: 'Manages 2,500+ engineers — budget authority for tooling at scale', weight: 'strong', icon: 'Users' },
      { id: 'bs5', text: 'Active at PlatformCon, SREcon, KubeCon — deeply embedded in community', weight: 'medium', icon: 'Award' },
    ],
    aiNarrative: "Elena Vasquez is the highest-probability close in the current pipeline. She is in active evaluation, has decision-making authority, and has publicly validated AI tooling ROI. The next step should be a proposal and commercial conversation.",
    aiInsights: [
      { id: 'ai1', text: 'In active evaluation — pricing page visits signal commercial readiness', confidence: 'high', icon: 'Target' },
      { id: 'ai2', text: 'Proven ROI communicator — will champion internally with business case framing', confidence: 'high', icon: 'BarChart2' },
      { id: 'ai3', text: 'Manages large engineering org with clear tooling budget', confidence: 'high', icon: 'DollarSign' },
      { id: 'ai4', text: 'Community leader — a win here drives referrals in the platform engineering network', confidence: 'medium', icon: 'Share2' },
    ],
    aiTalkingPoints: ['Move to proposal stage immediately', 'ROI calculator with 2,500-engineer org assumptions', 'Reference AI runbook ROI as parallel to RevenueOS AI ROI'],
    aiRecommendedOpener: "Elena — given you've been back to the pricing page a few times, it feels like the right time to put together something more concrete. Want to do a quick 20-minute commercial call this week?",
    stakeholders: [
      { id: 'sk1', contactId: 'elena-vasquez', name: 'Elena Vasquez', title: 'Director of Platform Engineering', role: 'champion', influenceLevel: 88, engagementStatus: 'engaged', isCurrentContact: true },
      { id: 'sk2', name: 'Ray Kim', title: 'VP Engineering', role: 'decision_maker', influenceLevel: 91, engagementStatus: 'neutral', parentId: 'sk1' },
      { id: 'sk3', name: 'Sophie Tan', title: 'CFO', role: 'economic_buyer', influenceLevel: 85, engagementStatus: 'cold', parentId: 'sk2' },
      { id: 'sk4', name: 'Tom Nguyen', title: 'Staff SRE', role: 'influencer', influenceLevel: 68, engagementStatus: 'engaged', parentId: 'sk1' },
      { id: 'sk5', name: 'Rachel Kim', title: 'Head of IT Security', role: 'blocker', influenceLevel: 70, engagementStatus: 'unknown', parentId: 'sk3' },
    ],
  },
};
