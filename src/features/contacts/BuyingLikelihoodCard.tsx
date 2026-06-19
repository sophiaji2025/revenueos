import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  TrendingUp, Users, Mail, BarChart2, Mic, Download,
  AlertCircle, DollarSign, Star, Target, Clock, CheckCircle,
  MessageSquare, Award, Zap, Link
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { ContactIntel, BuyingSignal } from '@/data/contactIntel';

const ICON_MAP: Record<string, React.ElementType> = {
  TrendingUp, Users, Mail, BarChart2, Mic, Download,
  AlertCircle, DollarSign, Star, Target, Clock, CheckCircle,
  MessageSquare, Award, Zap, Link, Linkedin: Link,
  Tool: Zap,
};

function getWeightStyle(weight: BuyingSignal['weight']) {
  switch (weight) {
    case 'strong': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
    case 'medium': return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    case 'supporting': return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
  }
}

function useCountUp(target: number, duration = 1000, enabled = true) {
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
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => { if (frameRef.current !== null) cancelAnimationFrame(frameRef.current); };
  }, [target, duration, enabled]);

  return value;
}

interface BuyingLikelihoodCardProps {
  intel: ContactIntel;
}

export function BuyingLikelihoodCard({ intel }: BuyingLikelihoodCardProps) {
  const prefersReduced = useReducedMotion();
  const displayScore = useCountUp(intel.buyingLikelihood, 1000, !prefersReduced);

  const confidenceColor =
    intel.buyingConfidence === 'high' ? 'text-emerald-400' :
    intel.buyingConfidence === 'medium' ? 'text-amber-400' : 'text-slate-400';

  const barColor =
    intel.buyingLikelihood >= 80 ? 'from-emerald-500 to-cyan-400' :
    intel.buyingLikelihood >= 55 ? 'from-amber-500 to-orange-400' :
    'from-slate-500 to-slate-400';

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Buying Likelihood</CardTitle>
          <Badge
            variant={intel.buyingConfidence === 'high' ? 'emerald' : intel.buyingConfidence === 'medium' ? 'amber' : 'default'}
          >
            {intel.buyingConfidence.charAt(0).toUpperCase() + intel.buyingConfidence.slice(1)} confidence
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {/* Score display */}
        <div className="flex items-center gap-4 mb-5">
          <div className={cn('text-4xl font-black', intel.buyingLikelihood >= 80 ? 'text-emerald-400' : intel.buyingLikelihood >= 55 ? 'text-amber-400' : 'text-slate-400')}>
            {displayScore}%
          </div>
          <div className="flex-1">
            <p className="text-xs text-slate-400 mb-1.5">
              Likely to buy this quarter
            </p>
            <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
              <motion.div
                className={cn('h-full rounded-full bg-gradient-to-r', barColor)}
                initial={{ width: 0 }}
                animate={{ width: `${intel.buyingLikelihood}%` }}
                transition={{ duration: prefersReduced ? 0 : 1, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>

        {/* Evidence */}
        <div className="space-y-2">
          <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Supporting evidence</p>
          {intel.buyingSignals.map((signal, i) => {
            const Icon = ICON_MAP[signal.icon] ?? TrendingUp;
            return (
              <motion.div
                key={signal.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className={cn(
                  'flex items-start gap-2.5 p-2.5 rounded-lg border',
                  getWeightStyle(signal.weight)
                )}
              >
                <Icon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span className="text-xs leading-relaxed">{signal.text}</span>
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
