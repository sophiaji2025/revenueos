import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

import { deals } from '../../data/deals'
import { DealDetail } from './DealDetail'
import { KanbanBoard } from './KanbanBoard'

export function Deals(): JSX.Element {
  const [selectedDealId, setSelectedDealId] = useState(deals[0].id)

  const selectedDeal = useMemo(() => deals.find((deal) => deal.id === selectedDealId) ?? deals[0], [selectedDealId])

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-violet-300/70">Deal Room</p>
        <h1 className="mt-2 text-3xl font-semibold">Pipeline execution and risk management</h1>
        <p className="mt-2 max-w-2xl text-sm text-white/55">
          Inspect the full pipeline in a kanban workflow, then dive into AI win probability, risk factors, and the next best actions for every deal.
        </p>
      </div>

      <KanbanBoard deals={deals} selectedDealId={selectedDealId} onSelectDeal={setSelectedDealId} />
      <DealDetail deal={selectedDeal} />
    </motion.div>
  )
}
