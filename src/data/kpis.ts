export interface KPI {
  id: string
  label: string
  value: number
  formatted: string
  delta: number
  unit?: string
  sparkline: number[]
}

export const kpis: KPI[] = [
  { id: 'pipeline', label: 'Pipeline Generated', value: 2840000, formatted: '$2.84M', delta: 18.3, unit: '$', sparkline: [42, 45, 51, 58, 66, 78, 91, 104] },
  { id: 'meetings', label: 'Meetings Booked', value: 47, formatted: '47', delta: 12.5, sparkline: [19, 22, 24, 26, 31, 35, 41, 47] },
  { id: 'sequences', label: 'Active Sequences', value: 12, formatted: '12', delta: 3, sparkline: [4, 5, 6, 7, 8, 9, 10, 12] },
  { id: 'reply_rate', label: 'Reply Rate', value: 23.7, formatted: '23.7%', delta: 4.2, unit: '%', sparkline: [12.2, 14.4, 16.1, 17.9, 19.8, 21.4, 22.1, 23.7] },
  { id: 'win_rate', label: 'Win Rate', value: 31.2, formatted: '31.2%', delta: -2.1, unit: '%', sparkline: [36.4, 35.7, 34.1, 33.8, 32.6, 32.1, 31.7, 31.2] },
  { id: 'ai_actions', label: 'AI Actions Today', value: 284, formatted: '284', delta: 41, sparkline: [58, 74, 96, 124, 168, 202, 243, 284] },
]
