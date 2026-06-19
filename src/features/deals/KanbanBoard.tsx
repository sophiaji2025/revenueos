import { motion } from 'framer-motion'

import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import { Progress } from '../../components/ui/Progress'
import type { Deal, DealStage } from '../../data/deals'
import { cn } from '../../lib/utils'

interface KanbanBoardProps {
  deals: Deal[]
  selectedDealId: string
  onSelectDeal: (dealId: string) => void
}

const stages: DealStage[] = ['Discovery', 'Demo', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost']

export function KanbanBoard({ deals, selectedDealId, onSelectDeal }: KanbanBoardProps): JSX.Element {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="grid min-w-[1080px] grid-cols-6 gap-4">
        {stages.map((stage) => {
          const stageDeals = deals.filter((deal) => deal.stage === stage)
          return (
            <div key={stage} className="space-y-3">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-white">{stage}</div>
                  <Badge variant="outline">{stageDeals.length}</Badge>
                </div>
              </div>
              <div className="space-y-3">
                {stageDeals.map((deal) => (
                  <motion.button
                    key={deal.id}
                    type="button"
                    whileHover={{ y: -2, scale: 1.01 }}
                    className="w-full text-left"
                    onClick={() => onSelectDeal(deal.id)}
                  >
                    <Card className={cn('p-4 transition-all', selectedDealId === deal.id && 'border-violet-400/30 bg-violet-500/[0.08]')}>
                      <div className="text-sm text-white/45">{deal.owner}</div>
                      <div className="mt-1 font-medium text-white">{deal.title}</div>
                      <div className="mt-2 text-sm text-white/55">Closes {deal.closeDate}</div>
                      <div className="mt-4 text-2xl font-semibold text-white">${deal.amount.toLocaleString()}</div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between text-xs text-white/45">
                          <span>Win probability</span>
                          <span>{deal.aiWinProbability}%</span>
                        </div>
                        <Progress value={deal.aiWinProbability} />
                      </div>
                    </Card>
                  </motion.button>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
