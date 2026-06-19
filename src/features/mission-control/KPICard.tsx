import { useEffect, useState } from 'react'
import { Line, LineChart, ResponsiveContainer } from 'recharts'

import { Badge } from '../../components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import type { KPI } from '../../data/kpis'

interface KPICardProps {
  kpi: KPI
}

function formatValue(value: number, kpi: KPI): string {
  if (kpi.id === 'pipeline') {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`
    }
    return `$${Math.round(value).toLocaleString()}`
  }

  if (kpi.unit === '%') {
    return `${value.toFixed(1)}%`
  }

  return Math.round(value).toLocaleString()
}

export function KPICard({ kpi }: KPICardProps): JSX.Element {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let frame = 0
    const duration = 1500
    const start = performance.now()

    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1)
      setDisplayValue(kpi.value * progress)
      if (progress < 1) {
        frame = window.requestAnimationFrame(animate)
      }
    }

    frame = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(frame)
  }, [kpi.value])

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm text-white/55">{kpi.label}</div>
            <CardTitle className="mt-2 text-3xl">{formatValue(displayValue, kpi)}</CardTitle>
          </div>
          <Badge variant={kpi.delta >= 0 ? 'success' : 'danger'}>{kpi.delta >= 0 ? '+' : ''}{kpi.delta}%</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-16">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={kpi.sparkline.map((value, index) => ({ index, value }))}>
              <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
