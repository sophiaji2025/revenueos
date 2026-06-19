import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import type { ContactIntel } from '@/data/contactIntel';

const BAND_COLORS = {
  cold: { text: 'text-slate-400', ring: '#64748b', bg: 'from-slate-500 to-slate-600', label: 'Cold' },
  warm: { text: 'text-amber-400', ring: '#f59e0b', bg: 'from-amber-500 to-orange-500', label: 'Warm' },
  hot: { text: 'text-emerald-400', ring: '#10b981', bg: 'from-emerald-500 to-cyan-500', label: 'Hot 🔥' },
};

function useCountUp(target: number, duration = 1200, enabled = true) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) { setValue(target); return; }
    setValue(0);
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration, enabled]);

  return value;
}

interface EngagementScoreCardProps {
  intel: ContactIntel;
}

export function EngagementScoreCard({ intel }: EngagementScoreCardProps) {
  const prefersReduced = useReducedMotion();
  const score = useCountUp(intel.engagementScore, 1200, !prefersReduced);
  const bandColor = BAND_COLORS[intel.engagementBand];

  const breakdownItems = [
    { label: 'Email Opens', value: intel.engagementBreakdown.emailOpens, max: 10 },
    { label: 'Replies', value: intel.engagementBreakdown.replies, max: 5 },
    { label: 'Site Visits', value: intel.engagementBreakdown.siteVisits, max: 10 },
    { label: 'Downloads', value: intel.engagementBreakdown.contentDownloads, max: 5 },
    { label: 'Meetings', value: intel.engagementBreakdown.meetings, max: 3 },
  ];

  const trend = intel.engagementTrend;
  const trendDelta = trend[trend.length - 1] - trend[0];
  const TrendIcon = trendDelta > 5 ? TrendingUp : trendDelta < -5 ? TrendingDown : Minus;
  const trendColor = trendDelta > 5 ? 'text-emerald-400' : trendDelta < -5 ? 'text-red-400' : 'text-slate-400';

  // SVG sparkline
  const sparkW = 80, sparkH = 24;
  const minV = Math.min(...trend);
  const maxV = Math.max(...trend);
  const range = maxV - minV || 1;
  const points = trend.map((v, i) => {
    const x = (i / (trend.length - 1)) * sparkW;
    const y = sparkH - ((v - minV) / range) * sparkH;
    return `${x},${y}`;
  }).join(' ');

  // Radial gauge arc
  const radius = 44;
  const cx = 56, cy = 56;
  const circumference = 2 * Math.PI * radius;
  const startAngle = -225; // degrees
  const endAngle = 45;
  const totalDegrees = 270;
  const filled = (intel.engagementScore / 100) * totalDegrees;
  const dashArray = (filled / 360) * circumference;
  const rotation = startAngle;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Engagement Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-6 flex-wrap">
          {/* Gauge */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="relative">
              <svg width="112" height="112" className="overflow-visible">
                {/* Track */}
                <circle
                  cx={cx} cy={cy} r={radius}
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="8"
                  strokeDasharray={`${(270 / 360) * circumference} ${circumference}`}
                  strokeLinecap="round"
                  transform={`rotate(${rotation} ${cx} ${cy})`}
                />
                {/* Fill */}
                <motion.circle
                  cx={cx} cy={cy} r={radius}
                  fill="none"
                  stroke="url(#engGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${(prefersReduced ? filled / 360 : 0) * circumference} ${circumference}`}
                  transform={`rotate(${rotation} ${cx} ${cy})`}
                  animate={{ strokeDasharray: `${(filled / 360) * circumference} ${circumference}` }}
                  transition={{ duration: prefersReduced ? 0 : 1.2, ease: 'easeOut' }}
                />
                <defs>
                  <linearGradient id="engGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={
                      intel.engagementBand === 'hot' ? '#10b981' :
                      intel.engagementBand === 'warm' ? '#f59e0b' : '#64748b'
                    } />
                    <stop offset="100%" stopColor={
                      intel.engagementBand === 'hot' ? '#06b6d4' :
                      intel.engagementBand === 'warm' ? '#f97316' : '#94a3b8'
                    } />
                  </linearGradient>
                </defs>
              </svg>
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={cn('text-2xl font-bold', bandColor.text)}>{score}</span>
                <span className="text-[10px] text-slate-500">/ 100</span>
              </div>
            </div>
            <div className={cn('text-xs font-semibold mt-1', bandColor.text)}>
              {bandColor.label}
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 min-w-0 space-y-4">
            {/* AI explanation */}
            <p className="text-[11px] text-slate-400 leading-relaxed">{intel.engagementAI}</p>

            {/* Breakdown */}
            <div className="space-y-1.5">
              {breakdownItems.map(item => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-500 w-20 flex-shrink-0">{item.label}</span>
                  <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      className={cn('h-full rounded-full bg-gradient-to-r', bandColor.bg)}
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.value / item.max) * 100}%` }}
                      transition={{ duration: prefersReduced ? 0 : 0.8, delay: prefersReduced ? 0 : 0.2 }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 w-4 text-right">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Sparkline trend */}
            <div className="flex items-center gap-2">
              <TrendIcon className={cn('w-3.5 h-3.5', trendColor)} />
              <svg width={sparkW} height={sparkH} className="overflow-visible">
                <polyline
                  points={points}
                  fill="none"
                  stroke={trendDelta > 5 ? '#10b981' : trendDelta < -5 ? '#ef4444' : '#64748b'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={cn('text-[10px]', trendColor)}>
                {trendDelta > 0 ? '+' : ''}{trendDelta} pts (8w)
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
