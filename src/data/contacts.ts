export interface Contact {
  id: string;
  name: string;
  title: string;
  company: string;
  email: string;
  linkedin: string;
  avatar: string;
  score: number;
  stage: string;
  lastActivity: string;
  insights: string[];
}

export const CONTACTS_DATA: Contact[] = [
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    title: 'VP Engineering',
    company: 'Ramp',
    email: 'priya.nair@ramp.com',
    linkedin: 'linkedin.com/in/priyanair',
    avatar: 'PN',
    score: 94,
    stage: 'Engaged',
    lastActivity: '2h ago',
    insights: ['Opened 3/3 emails', 'Visited pricing page 2x', 'Previously at Stripe'],
  },
  {
    id: 'marcus-lee',
    name: 'Marcus Lee',
    title: 'VP Engineering',
    company: 'Figma',
    email: 'marcus.lee@figma.com',
    linkedin: 'linkedin.com/in/marcuslee',
    avatar: 'ML',
    score: 88,
    stage: 'Meeting Booked',
    lastActivity: '1h ago',
    insights: ['Replied to cold email', 'Demo requested', 'Budget confirmed Q1'],
  },
  {
    id: 'soren-koch',
    name: 'Soren Koch',
    title: 'VP Engineering',
    company: 'Vercel',
    email: 'soren.koch@vercel.com',
    linkedin: 'linkedin.com/in/sorenkoch',
    avatar: 'SK',
    score: 82,
    stage: 'Replied',
    lastActivity: '30m ago',
    insights: ['LinkedIn connection accepted', 'Positive reply sentiment', 'Team of 45 engineers'],
  },
  {
    id: 'aiko-tanaka',
    name: 'Aiko Tanaka',
    title: 'VP Engineering',
    company: 'Linear',
    email: 'aiko.tanaka@linear.app',
    linkedin: 'linkedin.com/in/aikotanaka',
    avatar: 'AT',
    score: 76,
    stage: 'Outreach Sent',
    lastActivity: '45m ago',
    insights: ['Opened email once', 'Active on LinkedIn', 'Posted about hiring challenges'],
  },
  {
    id: 'dev-patel',
    name: 'Dev Patel',
    title: 'VP Engineering',
    company: 'Datadog',
    email: 'dev.patel@datadoghq.com',
    linkedin: 'linkedin.com/in/devpatel',
    avatar: 'DP',
    score: 91,
    stage: 'Meeting Booked',
    lastActivity: '20m ago',
    insights: ['Replied with interest', 'Meeting booked Thu 2:30pm', 'References competitor pain points'],
  },
  {
    id: 'zara-ahmed',
    name: 'Zara Ahmed',
    title: 'VP Engineering',
    company: 'Notion',
    email: 'zara.ahmed@notion.so',
    linkedin: 'linkedin.com/in/zaraahmed',
    avatar: 'ZA',
    score: 85,
    stage: 'Meeting Booked',
    lastActivity: '3h ago',
    insights: ['LinkedIn connection accepted', 'Opened 2/2 emails', 'Mentioned scaling pains in reply'],
  },
  {
    id: 'leo-muller',
    name: 'Leo Müller',
    title: 'VP Engineering',
    company: 'Retool',
    email: 'leo.muller@retool.com',
    linkedin: 'linkedin.com/in/leomuller',
    avatar: 'LM',
    score: 68,
    stage: 'Prospecting',
    lastActivity: '1d ago',
    insights: ['Email verified', 'Not yet contacted', 'Strong ICP fit based on company signals'],
  },
  {
    id: 'sofia-reyes',
    name: 'Sofia Reyes',
    title: 'VP Engineering',
    company: 'Airtable',
    email: 'sofia.reyes@airtable.com',
    linkedin: 'linkedin.com/in/sofiareyes',
    avatar: 'SR',
    score: 79,
    stage: 'Replied',
    lastActivity: '5h ago',
    insights: ['Requested demo', 'Replied within 2 hours', 'Managing team of 30+'],
  },
];
