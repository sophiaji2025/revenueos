export interface Deal {
  id: string;
  contact: string;
  company: string;
  value: string;
  stage: 'prospecting' | 'qualified' | 'proposal' | 'negotiation' | 'closed';
  probability: number;
  closeDate: string;
  arr: string;
}

export const DEALS_DATA: Deal[] = [
  { id: 'd1', contact: 'Marcus Lee', company: 'Figma', value: '$45,000', stage: 'proposal', probability: 72, closeDate: 'Q1 2025', arr: '$45K' },
  { id: 'd2', contact: 'Priya Nair', company: 'Ramp', value: '$60,000', stage: 'negotiation', probability: 85, closeDate: 'Q1 2025', arr: '$60K' },
  { id: 'd3', contact: 'Soren Koch', company: 'Vercel', value: '$38,000', stage: 'qualified', probability: 54, closeDate: 'Q2 2025', arr: '$38K' },
  { id: 'd4', contact: 'Dev Patel', company: 'Datadog', value: '$75,000', stage: 'proposal', probability: 68, closeDate: 'Q1 2025', arr: '$75K' },
  { id: 'd5', contact: 'Aiko Tanaka', company: 'Linear', value: '$28,000', stage: 'qualified', probability: 45, closeDate: 'Q2 2025', arr: '$28K' },
  { id: 'd6', contact: 'Zara Ahmed', company: 'Notion', value: '$52,000', stage: 'negotiation', probability: 80, closeDate: 'Q1 2025', arr: '$52K' },
  { id: 'd7', contact: 'Leo Müller', company: 'Retool', value: '$41,000', stage: 'prospecting', probability: 28, closeDate: 'Q3 2025', arr: '$41K' },
  { id: 'd8', contact: 'Sofia Reyes', company: 'Airtable', value: '$35,000', stage: 'qualified', probability: 55, closeDate: 'Q2 2025', arr: '$35K' },
];
