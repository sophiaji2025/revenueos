import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { deals } from '../../data/deals'

const stageOrder = ['Discovery', 'Demo', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'] as const

const chartData = stageOrder.map((stage) => {
  const stageDeals = deals.filter((deal) => deal.stage === stage)
  return {
    stage,
    amount: Math.round(stageDeals.reduce((total, deal) => total + deal.amount, 0) / 1000),
    count: stageDeals.length,
  }
})

export function PipelineOverview(): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Pipeline Overview</CardTitle>
          <p className="mt-1 text-sm text-white/55">Stage-weighted view of active and historical pipeline volume.</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="stage" stroke="rgba(255,255,255,0.45)" tickLine={false} axisLine={false} />
              <YAxis stroke="rgba(255,255,255,0.45)" tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}k`} />
              <Tooltip
                cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                contentStyle={{ background: '#11151d', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16 }}
                formatter={(value: number, _name, item) => [`$${value.toLocaleString()}k`, `${item.payload.count} deals`]}
              />
              <Bar dataKey="amount" fill="url(#pipelineGradient)" radius={[12, 12, 0, 0]} />
              <defs>
                <linearGradient id="pipelineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#d946ef" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
