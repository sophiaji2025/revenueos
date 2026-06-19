import { useEffect, useMemo, useState } from 'react'
import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { Badge } from '../../components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { ScrollArea } from '../../components/ui/ScrollArea'
import type { Company } from '../../data/companies'

interface CompanyDetailProps {
  company: Company
}

function strengthVariant(strength: Company['buyingSignals'][number]['strength']): 'success' | 'warning' | 'outline' {
  if (strength === 'High') return 'success'
  if (strength === 'Medium') return 'warning'
  return 'outline'
}

export function CompanyDetail({ company }: CompanyDetailProps): JSX.Element {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    setRevealed(false)
    const timeout = window.setTimeout(() => setRevealed(true), 700)
    return () => window.clearTimeout(timeout)
  }, [company.id])

  const fundingData = useMemo(
    () => company.fundingHistory.map((round) => ({ label: round.round, amount: Math.round(round.amount / 1000000), date: round.date.slice(0, 7) })),
    [company.fundingHistory],
  )

  const trafficData = useMemo(
    () => company.webTrafficTrend.map((value, index) => ({ label: `W${index + 1}`, value })),
    [company.webTrafficTrend],
  )

  return (
    <ScrollArea className="h-[calc(100vh-140px)] pr-2">
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${company.color} text-lg font-semibold text-white`}>
                  {company.logo}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">{company.name}</h2>
                  <p className="text-sm text-white/55">{company.domain} • {company.industry}</p>
                </div>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65">{company.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-white/65">
              <div><span className="text-white/40">HQ</span><div className="mt-1 text-white">{company.hq}</div></div>
              <div><span className="text-white/40">Employees</span><div className="mt-1 text-white">{company.employees.toLocaleString()}</div></div>
              <div><span className="text-white/40">Founded</span><div className="mt-1 text-white">{company.founded}</div></div>
              <div><span className="text-white/40">Total raised</span><div className="mt-1 text-white">${(company.totalRaised / 1000000).toFixed(0)}M</div></div>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
          <Card>
            <CardHeader>
              <CardTitle>Funding history</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 lg:grid-cols-[0.95fr,1.05fr]">
              <div className="space-y-4">
                {company.fundingHistory.map((round, index) => (
                  <div key={`${round.round}-${round.date}`} className="relative pl-6">
                    {index !== company.fundingHistory.length - 1 && <div className="absolute left-[7px] top-6 h-full w-px bg-white/[0.08]" />}
                    <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-violet-400" />
                    <div className="font-medium text-white">{round.round}</div>
                    <div className="text-sm text-white/55">${(round.amount / 1000000).toFixed(0)}M • {round.date}</div>
                    <div className="mt-1 text-xs text-white/45">{round.investors.join(', ')}</div>
                  </div>
                ))}
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={fundingData}>
                    <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="label" stroke="rgba(255,255,255,0.45)" tickLine={false} axisLine={false} />
                    <YAxis stroke="rgba(255,255,255,0.45)" tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}M`} />
                    <Tooltip contentStyle={{ background: '#11151d', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16 }} formatter={(value: number) => [`$${value}M`, 'Round size']} />
                    <defs>
                      <linearGradient id="fundingGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.8} />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="amount" stroke="#8b5cf6" fill="url(#fundingGradient)" strokeWidth={2.5} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Growth indicators</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="text-sm text-white/45">Headcount growth</div>
                <div className="mt-2 text-3xl font-semibold text-emerald-300">+{company.headcountGrowth}%</div>
              </div>
              <div>
                <div className="text-sm text-white/45">Web traffic trend</div>
                <div className="mt-3 h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trafficData}>
                      <Line type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={2.5} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Tech stack</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {company.techStack.map((tool) => (
                <Badge key={tool} variant="outline">{tool}</Badge>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hiring signals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {company.hiringSignals.map((signal) => (
                <div key={`${signal.role}-${signal.department}`} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-medium text-white">{signal.role}</div>
                      <div className="text-sm text-white/45">{signal.department}</div>
                    </div>
                    <Badge variant="info">{signal.count} open</Badge>
                  </div>
                  <p className="mt-2 text-sm text-white/60">{signal.intent}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
          <Card className="relative overflow-hidden">
            {!revealed && <div className="absolute inset-0 shimmer" />}
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>AI Brief</CardTitle>
                <Badge variant="default">Generated by RevenueOS AI</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-white/70">{company.aiSummary}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Buying signals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {company.buyingSignals.map((signal) => (
                <div key={`${signal.type}-${signal.date}`} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-medium text-white">{signal.type}</div>
                    <Badge variant={strengthVariant(signal.strength)}>{signal.strength}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-white/60">{signal.description}</p>
                  <div className="mt-2 text-xs text-white/40">{signal.date}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  )
}
