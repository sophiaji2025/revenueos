import { useMemo } from 'react'
import { Line, LineChart, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'

import { Avatar } from '../../components/ui/Avatar'
import { Badge } from '../../components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { ScrollArea } from '../../components/ui/ScrollArea'
import type { Contact } from '../../data/contacts'
import { contacts } from '../../data/contacts'
import { companies } from '../../data/companies'

interface ContactDetailProps {
  contact: Contact
}

const companyMap = new Map(companies.map((company) => [company.id, company]))
const contactMap = new Map(contacts.map((entry) => [entry.id, entry]))

export function ContactDetail({ contact }: ContactDetailProps): JSX.Element {
  const company = companyMap.get(contact.company)
  const stakeholderNodes = useMemo(
    () => contact.stakeholderMap.map((link) => ({ ...link, contact: contactMap.get(link.contactId) })).filter((item) => item.contact),
    [contact.stakeholderMap],
  )

  return (
    <ScrollArea className="h-[calc(100vh-140px)] pr-2">
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <Avatar initials={contact.avatar} gradient={contact.color} size="lg" />
              <div>
                <h2 className="text-2xl font-semibold text-white">{contact.name}</h2>
                <p className="text-sm text-white/55">{contact.title} • {company?.name}</p>
                <p className="mt-2 text-sm text-white/45">{contact.location} • {contact.email} • {contact.phone}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{contact.seniority}</Badge>
              <Badge variant={contact.persona === 'Champion' ? 'success' : contact.persona === 'Decision Maker' ? 'info' : contact.persona === 'Influencer' ? 'warning' : 'danger'}>
                {contact.persona}
              </Badge>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 xl:grid-cols-[0.85fr,1.15fr]">
          <Card>
            <CardHeader>
              <CardTitle>Engagement score</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 lg:grid-cols-[220px,1fr]">
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart innerRadius="72%" outerRadius="100%" data={[{ name: 'score', value: contact.engagementScore, fill: '#8b5cf6' }]} startAngle={90} endAngle={-270}>
                    <RadialBar dataKey="value" cornerRadius={18} />
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="white" className="fill-white text-3xl font-semibold">
                      {contact.engagementScore}
                    </text>
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {Object.entries(contact.engagementBreakdown).map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                    <div className="text-xs uppercase tracking-wide text-white/40">{label.replace(/([A-Z])/g, ' $1')}</div>
                    <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Engagement trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={contact.engagementTrend.map((value, index) => ({ label: `W${index + 1}`, value }))}>
                    <Line type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={2.5} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
          <Card>
            <CardHeader>
              <CardTitle>Social activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {contact.socialActivity.map((activity) => (
                <div key={`${activity.platform}-${activity.date}-${activity.topic}`} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between text-xs text-white/45">
                    <span>{activity.platform}</span>
                    <span>{activity.date}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/70">{activity.content}</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-white/45">
                    <span>{activity.likes} likes</span>
                    <span>{activity.comments} comments</span>
                    <Badge variant="outline">{activity.topic}</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-white/70">
                <div>
                  <div className="mb-2 text-xs uppercase tracking-wide text-white/40">Talking points</div>
                  <div className="flex flex-wrap gap-2">
                    {contact.aiInsights.talkingPoints.map((point) => (
                      <Badge key={point} variant="outline">{point}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-xs uppercase tracking-wide text-white/40">Priorities</div>
                  <ul className="space-y-2">
                    {contact.aiInsights.priorities.map((priority) => (
                      <li key={priority}>• {priority}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <div className="text-xs uppercase tracking-wide text-white/40">Communication style</div>
                  <p className="mt-2">{contact.aiInsights.communicationStyle}</p>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <div className="text-white/40">Best time</div>
                      <div className="mt-1 text-white/75">{contact.aiInsights.bestTimeToReach}</div>
                    </div>
                    <div>
                      <div className="text-white/40">Best channel</div>
                      <div className="mt-1 text-white/75">{contact.aiInsights.bestChannel}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stakeholder map</CardTitle>
              </CardHeader>
              <CardContent>
                {stakeholderNodes.length > 0 ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {stakeholderNodes.map((node) => (
                      <div key={node.contactId} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                        <div className="flex items-center gap-3">
                          <Avatar initials={node.contact?.avatar ?? '??'} gradient={node.contact?.color} size="sm" />
                          <div>
                            <div className="font-medium text-white">{node.contact?.name}</div>
                            <div className="text-xs text-white/45">{node.role}</div>
                          </div>
                        </div>
                        <div className="mt-3 flex gap-2">
                          <Badge variant={node.relationship === 'Ally' ? 'success' : node.relationship === 'Neutral' ? 'outline' : 'danger'}>{node.relationship}</Badge>
                          <Badge variant={node.influence === 'High' ? 'info' : 'outline'}>{node.influence} influence</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-white/[0.12] p-6 text-sm text-white/45">No connected stakeholders mapped yet.</div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Career history</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {contact.careerHistory.map((item, index) => (
              <div key={`${item.company}-${item.start}`} className="relative pl-6">
                {index !== contact.careerHistory.length - 1 && <div className="absolute left-[7px] top-6 h-full w-px bg-white/[0.08]" />}
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-cyan-400" />
                <div className="font-medium text-white">{item.title}</div>
                <div className="text-sm text-white/55">{item.company} • {item.start} — {item.end}</div>
                <div className="mt-2 text-sm text-white/60">{item.description}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  )
}
