import { useMemo } from 'react'
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import type { SequenceTemplate } from '../../data/sequences'

interface CampaignAnalyticsProps {
  template: SequenceTemplate
}

export function CampaignAnalytics({ template }: CampaignAnalyticsProps): JSX.Element {
  const funnelData = useMemo(
    () => template.stats.stepDropoff.map((value, index) => ({ step: `Step ${index + 1}`, value })),
    [template.stats.stepDropoff],
  )

  const performanceData = useMemo(
    () =>
      [0, 1, 2, 3, 4, 5].map((index) => ({
        week: `W${index + 1}`,
        opens: Math.round(template.stats.openRate - 8 + index * 1.8),
        replies: Math.round(template.stats.replyRate - 5 + index * 1.2),
      })),
    [template.stats.openRate, template.stats.replyRate],
  )

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ['Sent', template.stats.sent.toLocaleString()],
          ['Open rate', `${template.stats.openRate}%`],
          ['Reply rate', `${template.stats.replyRate}%`],
          ['Meetings', template.stats.meetingsBooked.toString()],
        ].map(([label, value]) => (
          <Card key={label} className="p-5">
            <div className="text-sm text-white/45">{label}</div>
            <div className="mt-3 text-3xl font-semibold text-white">{value}</div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Step-by-step funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={funnelData}>
                  <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="step" stroke="rgba(255,255,255,0.45)" tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.45)" tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ background: '#11151d', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16 }} formatter={(value: number) => [`${value}%`, 'Remaining']} />
                  <Bar dataKey="value" fill="#8b5cf6" radius={[12, 12, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance over time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="week" stroke="rgba(255,255,255,0.45)" tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.45)" tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ background: '#11151d', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16 }} />
                  <Line type="monotone" dataKey="opens" stroke="#06b6d4" strokeWidth={2.5} dot={false} />
                  <Line type="monotone" dataKey="replies" stroke="#d946ef" strokeWidth={2.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
