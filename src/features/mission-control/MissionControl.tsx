import { motion } from 'framer-motion'

import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import { Switch } from '../../components/ui/Switch'
import { kpis } from '../../data/kpis'
import { ActivityTimeline } from './ActivityTimeline'
import { AIChat } from './AIChat'
import { KPICard } from './KPICard'
import { PipelineOverview } from './PipelineOverview'
import { ProspectFeed } from './ProspectFeed'

interface MissionControlProps {
  autonomousMode: boolean
  setAutonomousMode: (value: boolean) => void
}

export function MissionControl({ autonomousMode, setAutonomousMode }: MissionControlProps): JSX.Element {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300/70">Mission Control</p>
          <h1 className="mt-2 text-3xl font-semibold">RevenueOS command center</h1>
          <p className="mt-2 max-w-2xl text-sm text-white/55">
            Monitor pipeline creation, agent activity, prospect heat, and deal risk from one high-signal operating surface.
          </p>
        </div>
        <Card className="flex items-center gap-4 px-5 py-4">
          <div>
            <div className="text-sm font-medium text-white">Autonomous Mode</div>
            <div className="text-xs text-white/45">Continuously triage signals and accelerate follow-up</div>
          </div>
          <Switch checked={autonomousMode} onCheckedChange={setAutonomousMode} />
        </Card>
      </div>

      {autonomousMode && (
        <div className="flex items-center justify-between rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100 shadow-lg shadow-emerald-900/10">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 pulse-glow" />
              Agents Running
            </span>
            <span className="text-emerald-100/70">Monitoring new signals, refreshing prospect rankings, and streaming activity updates.</span>
          </div>
          <Badge variant="success">Autonomous</Badge>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {kpis.map((kpi) => (
          <KPICard key={kpi.id} kpi={kpi} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
        <AIChat />
        <ActivityTimeline autonomousMode={autonomousMode} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
        <ProspectFeed />
        <PipelineOverview />
      </div>
    </motion.div>
  )
}
