import { ArrowUpRight } from 'lucide-react'

import { Avatar } from '../../components/ui/Avatar'
import { Badge } from '../../components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { contacts } from '../../data/contacts'
import { companies } from '../../data/companies'

const companyMap = new Map(companies.map((company) => [company.id, company]))

const prospects = contacts
  .map((contact) => {
    const company = companyMap.get(contact.company)
    return {
      id: contact.id,
      name: contact.name,
      title: contact.title,
      companyName: company?.name ?? contact.company,
      score: Math.round(contact.engagementScore * 0.45 + (company?.fitScore ?? 70) * 0.55),
      signal: company?.buyingSignals[0]?.type ?? 'Engagement spike',
      avatar: contact.avatar,
      color: contact.color,
    }
  })
  .sort((a, b) => b.score - a.score)
  .slice(0, 9)

export function ProspectFeed(): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Live Prospect Feed</CardTitle>
            <p className="mt-1 text-sm text-white/55">Top accounts ranked by fit, engagement, and fresh buying signals.</p>
          </div>
          <Badge variant="info">9 Active</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
          <table className="min-w-full divide-y divide-white/[0.08] text-left text-sm">
            <thead className="bg-white/[0.03] text-white/45">
              <tr>
                <th className="px-4 py-3 font-medium">Prospect</th>
                <th className="px-4 py-3 font-medium">Company</th>
                <th className="px-4 py-3 font-medium">Signal</th>
                <th className="px-4 py-3 font-medium">Fit score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08]">
              {prospects.map((prospect, index) => (
                <tr key={prospect.id} className={index === 0 ? 'bg-violet-500/[0.06]' : 'bg-transparent'}>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Avatar initials={prospect.avatar} gradient={prospect.color} size="sm" />
                      <div>
                        <div className="font-medium text-white">{prospect.name}</div>
                        <div className="text-xs text-white/45">{prospect.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-white/70">{prospect.companyName}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 text-white/70">
                      <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" />
                      {prospect.signal}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={prospect.score >= 90 ? 'success' : prospect.score >= 80 ? 'info' : 'warning'}>
                      {prospect.score}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
