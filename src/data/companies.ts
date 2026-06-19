export interface Company {
  id: string;
  name: string;
  domain: string;
  logo: string;
  stage: string;
  raised: string;
  employees: string;
  industry: string;
  hq: string;
  description: string;
  icp_score: number;
  arr: string;
  growth: number;
  signals: string[];
}

export const COMPANIES_DATA: Company[] = [
  {
    id: 'ramp',
    name: 'Ramp',
    domain: 'ramp.com',
    logo: 'R',
    stage: 'Series D',
    raised: '$1.4B',
    employees: '800-1000',
    industry: 'Fintech / Spend Management',
    hq: 'New York, NY',
    description: 'Corporate card and spend management platform for fast-growing companies. Automating expense management and helping finance teams close books 8x faster.',
    icp_score: 9.4,
    arr: '$300M+',
    growth: 186,
    signals: ['Posted 8 VP Engineering roles', 'Raised $150M Series D extension', 'Engineering headcount +34% in 90 days'],
  },
  {
    id: 'vercel',
    name: 'Vercel',
    domain: 'vercel.com',
    logo: 'V',
    stage: 'Series E',
    raised: '$313M',
    employees: '400-600',
    industry: 'Developer Infrastructure',
    hq: 'San Francisco, CA',
    description: 'Frontend cloud platform enabling developers to build and deploy web applications globally. Powers 10% of the internet.',
    icp_score: 9.1,
    arr: '$100M+',
    growth: 124,
    signals: ['New VP Engineering role posted', '3 platform engineering reqs open', 'Framework OSS contributor growth +40%'],
  },
  {
    id: 'linear',
    name: 'Linear',
    domain: 'linear.app',
    logo: 'L',
    stage: 'Series B',
    raised: '$52M',
    employees: '80-120',
    industry: 'Productivity / Project Management',
    hq: 'San Francisco, CA',
    description: 'Modern issue tracking and project management tool built for high-velocity software teams. Known for speed and thoughtful design.',
    icp_score: 8.8,
    arr: '$35M+',
    growth: 210,
    signals: ['Headcount doubled in 12 months', 'CTO interview mentions scaling challenges', '2 VP Engineering interviews posted'],
  },
  {
    id: 'datadog',
    name: 'Datadog',
    domain: 'datadoghq.com',
    logo: 'D',
    stage: 'Public',
    raised: '$648M',
    employees: '4000+',
    industry: 'Observability / DevOps',
    hq: 'New York, NY',
    description: 'Cloud monitoring and analytics platform for developers and IT teams. Provides end-to-end visibility into infrastructure, applications, and logs.',
    icp_score: 8.5,
    arr: '$2B+',
    growth: 63,
    signals: ['Engineering headcount +23% in 90 days', 'VP Engineering role posted in London', 'New product line launch Q1'],
  },
  {
    id: 'notion',
    name: 'Notion',
    domain: 'notion.so',
    logo: 'N',
    stage: 'Series C',
    raised: '$343M',
    employees: '400-600',
    industry: 'Productivity / Collaboration',
    hq: 'San Francisco, CA',
    description: 'All-in-one workspace combining notes, docs, wikis, and project management. Used by 30M+ users worldwide.',
    icp_score: 8.2,
    arr: '$100M+',
    growth: 98,
    signals: ['Posted 4 VP Engineering roles', 'Expanding enterprise sales team', 'AI feature roadmap acceleration'],
  },
  {
    id: 'figma',
    name: 'Figma',
    domain: 'figma.com',
    logo: 'F',
    stage: 'Acquired',
    raised: '$333M',
    employees: '1000+',
    industry: 'Design / Collaboration',
    hq: 'San Francisco, CA',
    description: 'Collaborative design tool used by 4M+ designers. Enabling real-time design collaboration with powerful dev handoff.',
    icp_score: 7.9,
    arr: '$400M+',
    growth: 55,
    signals: ['VP Engineering hiring for DevX team', 'New developer tools division formed', 'Platform API expansion'],
  },
];
