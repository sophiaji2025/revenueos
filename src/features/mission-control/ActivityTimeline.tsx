import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, Calendar, Database, Linkedin, Mail, Phone, Sparkles } from 'lucide-react'

import { Badge } from '../../components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { ScrollArea } from '../../components/ui/ScrollArea'
import { activities, type ActivityItem } from '../../data/activities'
import { cn } from '../../lib/utils'

interface ActivityTimelineProps {
  autonomousMode: boolean
}

const iconMap = {
  activity: Activity,
  calendar: Calendar,
  database: Database,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  sparkles: Sparkles,
}

export function ActivityTimeline({ autonomousMode }: ActivityTimelineProps): JSX.Element {
  const [items, setItems] = useState<ActivityItem[]>(activities.slice(0, 10))
  const [cursor, setCursor] = useState(10)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setItems((current) => [activities[cursor % activities.length], ...current].slice(0, 22))
      setCursor((value) => value + 1)
    }, autonomousMode ? 3500 : 6500)

    return () => window.clearInterval(interval)
  }, [autonomousMode, cursor])

  const statusText = useMemo(
    () => (autonomousMode ? 'High-frequency autonomous updates are active.' : 'Agent feed updates at a slower review cadence.'),
    [autonomousMode],
  )

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <div>
            <CardTitle>Agent Activity Timeline</CardTitle>
            <p className="mt-1 text-sm text-white/55">{statusText}</p>
          </div>
          <Badge variant={autonomousMode ? 'success' : 'outline'}>{autonomousMode ? 'Live' : 'Review'}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[420px] pr-2">
          <div className="space-y-3">
            <AnimatePresence initial={false}>
              {items.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Sparkles
                return (
                  <motion.div
                    key={`${item.id}-${item.timestamp}-${item.contact}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={cn(
                      'flex gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3 transition-all',
                      autonomousMode && 'shadow-lg shadow-violet-900/10',
                    )}
                  >
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] text-violet-200">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm text-white">{item.description}</div>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-white/45">
                        <span>{item.company}</span>
                        <span>•</span>
                        <span>{item.contact}</span>
                        <span>•</span>
                        <span>{item.timestamp}</span>
                      </div>
                    </div>
                    <Badge variant="info" className="h-fit whitespace-nowrap">
                      {item.channel}
                    </Badge>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
