import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { CareerEntry } from '@/data/contactIntel';

interface CareerHistoryTimelineProps {
  career: CareerEntry[];
}

function getCompanyInitial(name: string) {
  return name[0].toUpperCase();
}

function getCompanyGradient(name: string) {
  const gradients = [
    'from-brand-500 to-violet-500',
    'from-emerald-500 to-cyan-500',
    'from-violet-500 to-pink-500',
    'from-amber-500 to-orange-500',
    'from-cyan-500 to-brand-500',
    'from-pink-500 to-rose-500',
  ];
  return gradients[name.charCodeAt(0) % gradients.length];
}

export function CareerHistoryTimeline({ career }: CareerHistoryTimelineProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Career History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-white/[0.06]" />

          <div className="space-y-0">
            {career.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="relative flex gap-4 pb-5 last:pb-0"
              >
                {/* Company avatar */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className={cn(
                      'w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold bg-gradient-to-br shadow',
                      getCompanyGradient(entry.company)
                    )}
                  >
                    {getCompanyInitial(entry.company)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pt-0.5">
                  {/* Promotion badge */}
                  {entry.promoted && (
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Badge variant="emerald" className="gap-1">
                        <Award className="w-2.5 h-2.5" />
                        Promoted from {entry.promotedFrom}
                      </Badge>
                    </div>
                  )}

                  <div className="flex flex-wrap items-start justify-between gap-1">
                    <div>
                      <p className={cn('text-sm font-semibold', entry.endDate === null ? 'text-white' : 'text-slate-200')}>
                        {entry.role}
                      </p>
                      <p className="text-xs text-slate-400">{entry.company}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-[11px] text-slate-400">
                        {entry.startDate} – {entry.endDate ?? 'Present'}
                      </p>
                      <p className="text-[10px] text-slate-500">{entry.duration}</p>
                    </div>
                  </div>

                  {entry.highlight && (
                    <p className="text-[11px] text-slate-500 mt-1 italic">"{entry.highlight}"</p>
                  )}

                  {entry.endDate === null && (
                    <span className="inline-flex items-center gap-1 mt-1.5 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Current
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
