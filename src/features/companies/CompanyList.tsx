import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import { ScrollArea } from '../../components/ui/ScrollArea'
import type { Company } from '../../data/companies'
import { cn } from '../../lib/utils'

interface CompanyListProps {
  companies: Company[]
  selectedCompanyId: string
  onSelect: (companyId: string) => void
}

export function CompanyList({ companies, selectedCompanyId, onSelect }: CompanyListProps): JSX.Element {
  return (
    <ScrollArea className="h-[calc(100vh-140px)] pr-2">
      <div className="space-y-3">
        {companies.map((company) => {
          const signalCount = company.buyingSignals.length + company.hiringSignals.length
          return (
            <button key={company.id} type="button" className="w-full text-left" onClick={() => onSelect(company.id)}>
              <Card
                className={cn(
                  'p-4 transition-all hover:bg-white/[0.05]',
                  selectedCompanyId === company.id && 'border-violet-400/30 bg-violet-500/[0.08]',
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={cn('flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-semibold text-white shadow-lg', company.color)}>
                      {company.logo}
                    </div>
                    <div>
                      <div className="font-medium text-white">{company.name}</div>
                      <div className="text-sm text-white/45">{company.industry}</div>
                    </div>
                  </div>
                  <Badge variant={company.fitScore >= 90 ? 'success' : 'info'}>{company.fitScore}</Badge>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-white/45">
                  <span>{company.hq}</span>
                  <span>{signalCount} signals</span>
                </div>
              </Card>
            </button>
          )
        })}
      </div>
    </ScrollArea>
  )
}
