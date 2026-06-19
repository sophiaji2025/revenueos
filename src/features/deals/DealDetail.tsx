import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'

import { Avatar } from '../../components/ui/Avatar'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { ScrollArea } from '../../components/ui/ScrollArea'
import type { Deal } from '../../data/deals'
import { contacts } from '../../data/contacts'
import { companies } from '../../data/companies'

interface DealDetailProps {
  deal: Deal
}

const companyMap = new Map(companies.map((company) => [company.id, company]))
const contactMap = new Map(contacts.map((contact) => [contact.id, contact]))

function variantForSeverity(value: 'High' | 'Medium' | 'Low'): 'danger' | 'warning' | 'outline' {
  if (value === 'High') return 'danger'
  if (value === 'Medium') return 'warning'
  return 'outline'
}

export function DealDetail({ deal }: DealDetailProps): JSX.Element {
  const company = companyMap.get(deal.company)
  const relatedContacts = deal.contacts.map((id) => contactMap.get(id)).filter(Boolean)

  return (
    <ScrollArea className="h-[calc(100vh-140px)] pr-2">
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${company?.color ?? 'from-indigo-500 to-fuchsia-500'} text-sm font-semibold text-white`}>
                  {company?.logo ?? 'DL'}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">{deal.title}</h2>
                  <p className="text-sm text-white/55">{company?.name} • Owner: {deal.owner}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="info">{deal.stage}</Badge>
                <Badge variant="outline">Close date {deal.closeDate}</Badge>
                <Badge variant="outline">Age {deal.age} days</Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-white/45">Deal amount</div>
              <div className="mt-2 text-4xl font-semibold text-white">${deal.amount.toLocaleString()}</div>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 xl:grid-cols-[0.85fr,1.15fr]">
          <Card>
            <CardHeader>
              <CardTitle>AI Win Probability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart innerRadius="72%" outerRadius="100%" data={[{ value: deal.aiWinProbability, fill: '#8b5cf6' }]} startAngle={90} endAngle={-270}>
                    <RadialBar dataKey="value" cornerRadius={18} />
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="white" className="fill-white text-3xl font-semibold">
                      {deal.aiWinProbability}%
                    </text>
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm leading-7 text-white/70">{deal.aiRationale}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Positive vs. negative factors</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="mb-3 text-sm font-medium text-emerald-300">Positive factors</div>
                <div className="space-y-3">
                  {deal.positiveFactors.map((factor) => (
                    <div key={factor.factor} className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-4">
                      <div className="font-medium text-white">{factor.factor}</div>
                      <div className="mt-2 text-xs text-emerald-200/70">Weight {factor.weight}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-3 text-sm font-medium text-red-300">Negative factors</div>
                <div className="space-y-3">
                  {deal.negativeFactors.map((factor) => (
                    <div key={factor.factor} className="rounded-2xl border border-red-500/20 bg-red-500/[0.06] p-4">
                      <div className="font-medium text-white">{factor.factor}</div>
                      <div className="mt-2 text-xs text-red-200/70">Weight {factor.weight}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Risk detection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {deal.riskFactors.map((risk) => (
                <div key={risk.description} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-medium text-white">{risk.description}</div>
                    <Badge variant={variantForSeverity(risk.severity)}>{risk.severity}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-white/60">Mitigation: {risk.mitigation}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Next best actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {deal.nextBestActions.map((action) => (
                <div key={action.action} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-medium text-white">{action.action}</div>
                    <Badge variant={action.expectedImpact === 'High' ? 'success' : action.expectedImpact === 'Medium' ? 'warning' : 'outline'}>
                      {action.expectedImpact} impact
                    </Badge>
                  </div>
                  <Button className="mt-4" size="sm">{action.cta}</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
          <Card>
            <CardHeader>
              <CardTitle>Recent activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {deal.recentActivity.map((activity, index) => (
                <div key={`${activity.description}-${activity.date}`} className="relative pl-6">
                  {index !== deal.recentActivity.length - 1 && <div className="absolute left-[7px] top-6 h-full w-px bg-white/[0.08]" />}
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-cyan-400" />
                  <div className="font-medium text-white">{activity.description}</div>
                  <div className="text-sm text-white/55">{activity.date} • {activity.type}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contacts involved</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {relatedContacts.map((contact) => (
                  <div key={contact?.id} className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3">
                    <Avatar initials={contact?.avatar ?? '??'} gradient={contact?.color} size="sm" />
                    <div>
                      <div className="font-medium text-white">{contact?.name}</div>
                      <div className="text-xs text-white/45">{contact?.title}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-sm text-white/65">{deal.notes}</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  )
}
