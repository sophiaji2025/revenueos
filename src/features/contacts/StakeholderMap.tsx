import { motion } from 'framer-motion';
import { Star, Shield, DollarSign, AlertTriangle, User, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import type { StakeholderNode } from '@/data/contactIntel';

const ROLE_CONFIG = {
  champion: {
    label: 'Champion',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/15',
    border: 'border-emerald-500/30',
    ring: 'ring-emerald-500/40',
    icon: Star,
    iconColor: 'text-emerald-400',
  },
  economic_buyer: {
    label: 'Economic Buyer',
    color: 'text-violet-400',
    bg: 'bg-violet-500/15',
    border: 'border-violet-500/30',
    ring: 'ring-violet-500/40',
    icon: DollarSign,
    iconColor: 'text-violet-400',
  },
  influencer: {
    label: 'Influencer',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/15',
    border: 'border-cyan-500/30',
    ring: 'ring-cyan-500/40',
    icon: Users,
    iconColor: 'text-cyan-400',
  },
  blocker: {
    label: 'Blocker',
    color: 'text-red-400',
    bg: 'bg-red-500/15',
    border: 'border-red-500/30',
    ring: 'ring-red-500/40',
    icon: AlertTriangle,
    iconColor: 'text-red-400',
  },
  decision_maker: {
    label: 'Decision Maker',
    color: 'text-brand-400',
    bg: 'bg-brand-500/15',
    border: 'border-brand-500/30',
    ring: 'ring-brand-500/40',
    icon: Shield,
    iconColor: 'text-brand-400',
  },
  end_user: {
    label: 'End User',
    color: 'text-slate-400',
    bg: 'bg-slate-500/15',
    border: 'border-slate-500/30',
    ring: 'ring-slate-500/40',
    icon: User,
    iconColor: 'text-slate-400',
  },
};

const ENGAGEMENT_COLOR = {
  engaged: 'bg-emerald-400',
  neutral: 'bg-amber-400',
  cold: 'bg-slate-400',
  unknown: 'bg-slate-600',
};

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

function getAvatarGradient(name: string) {
  const gradients = [
    'from-brand-500 to-violet-500',
    'from-emerald-500 to-cyan-500',
    'from-violet-500 to-pink-500',
    'from-cyan-500 to-brand-500',
    'from-amber-500 to-orange-500',
    'from-pink-500 to-rose-500',
  ];
  return gradients[name.charCodeAt(0) % gradients.length];
}

interface StakeholderNodeCardProps {
  node: StakeholderNode;
  index: number;
}

function StakeholderNodeCard({ node, index }: StakeholderNodeCardProps) {
  const cfg = ROLE_CONFIG[node.role];
  const Icon = cfg.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.07, type: 'spring', stiffness: 200, damping: 20 }}
      className={cn(
        'relative flex flex-col items-center gap-2 p-3 rounded-xl border transition-all',
        cfg.bg, cfg.border,
        node.isCurrentContact ? `ring-2 ${cfg.ring} shadow-lg` : ''
      )}
    >
      {/* Current contact star */}
      {node.isCurrentContact && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2">
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500 text-white font-bold whitespace-nowrap">
            ★ Your contact
          </span>
        </div>
      )}

      {/* Avatar */}
      <div className="relative">
        <div
          className={cn(
            'w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold bg-gradient-to-br',
            getAvatarGradient(node.name)
          )}
        >
          {getInitials(node.name)}
        </div>
        {/* Engagement dot */}
        <span
          className={cn(
            'absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-slate-900',
            ENGAGEMENT_COLOR[node.engagementStatus]
          )}
          title={node.engagementStatus}
        />
      </div>

      {/* Name + title */}
      <div className="text-center">
        <p className="text-[11px] font-semibold text-slate-200 leading-tight">{node.name}</p>
        <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{node.title}</p>
      </div>

      {/* Role badge */}
      <div className={cn('flex items-center gap-1 px-2 py-0.5 rounded-full border', cfg.bg, cfg.border)}>
        <Icon className={cn('w-2.5 h-2.5', cfg.iconColor)} />
        <span className={cn('text-[9px] font-medium', cfg.color)}>{cfg.label}</span>
      </div>

      {/* Influence bar */}
      <div className="w-full space-y-0.5">
        <div className="flex justify-between">
          <span className="text-[9px] text-slate-500">Influence</span>
          <span className="text-[9px] text-slate-400">{node.influenceLevel}%</span>
        </div>
        <div className="h-1 bg-white/[0.08] rounded-full overflow-hidden">
          <div
            className={cn('h-full rounded-full', cfg.bg.replace('bg-', 'bg-').replace('/15', '/60'))}
            style={{ width: `${node.influenceLevel}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

interface StakeholderMapProps {
  stakeholders: StakeholderNode[];
}

export function StakeholderMap({ stakeholders }: StakeholderMapProps) {
  // Group by role for layout
  const champion = stakeholders.find(s => s.role === 'champion');
  const decisionMakers = stakeholders.filter(s => s.role === 'decision_maker');
  const economicBuyers = stakeholders.filter(s => s.role === 'economic_buyer');
  const influencers = stakeholders.filter(s => s.role === 'influencer');
  const blockers = stakeholders.filter(s => s.role === 'blocker');
  const endUsers = stakeholders.filter(s => s.role === 'end_user');

  const rows = [
    { label: 'Decision Maker', nodes: decisionMakers },
    { label: 'Champion', nodes: champion ? [champion] : [] },
    { label: 'Economic Buyer', nodes: economicBuyers },
    { label: 'Influencers', nodes: influencers },
    { label: 'Blockers', nodes: blockers },
    { label: 'End Users', nodes: endUsers },
  ].filter(r => r.nodes.length > 0);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <CardTitle>Stakeholder Map</CardTitle>
          {/* Legend */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(ROLE_CONFIG).slice(0, 4).map(([key, cfg]) => {
              const Icon = cfg.icon;
              return (
                <div key={key} className="flex items-center gap-1">
                  <Icon className={cn('w-3 h-3', cfg.iconColor)} />
                  <span className="text-[10px] text-slate-500">{cfg.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        {/* Engagement legend */}
        <div className="flex items-center gap-3 mt-2">
          {Object.entries(ENGAGEMENT_COLOR).map(([status, color]) => (
            <div key={status} className="flex items-center gap-1">
              <span className={cn('w-2 h-2 rounded-full', color)} />
              <span className="text-[9px] text-slate-500 capitalize">{status}</span>
            </div>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        {/* Layout: vertical rows with connectors */}
        <div className="space-y-6">
          {rows.map((row, rowIdx) => (
            <div key={row.label} className="relative">
              {/* Row connector line to next row */}
              {rowIdx < rows.length - 1 && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full h-6 w-px bg-white/[0.1] z-10" />
              )}

              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2 text-center">{row.label}</p>
                <div className={cn(
                  'grid gap-3',
                  row.nodes.length === 1 ? 'grid-cols-1 max-w-[160px] mx-auto' :
                  row.nodes.length === 2 ? 'grid-cols-2 max-w-sm mx-auto' :
                  'grid-cols-2 sm:grid-cols-3'
                )}>
                  {row.nodes.map((node, i) => (
                    <StakeholderNodeCard key={node.id} node={node} index={rowIdx * 3 + i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All stakeholders flat view for large orgs */}
        {stakeholders.length > 4 && (
          <div className="mt-6 pt-4 border-t border-white/[0.06]">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-3">All Buying Committee Members</p>
            <div className="space-y-2">
              {stakeholders.map(node => {
                const cfg = ROLE_CONFIG[node.role];
                const Icon = cfg.icon;
                return (
                  <div
                    key={node.id}
                    className={cn(
                      'flex items-center gap-3 p-2 rounded-lg border',
                      node.isCurrentContact ? `${cfg.bg} ${cfg.border}` : 'bg-white/[0.02] border-white/[0.06]'
                    )}
                  >
                    <div className={cn('w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold bg-gradient-to-br flex-shrink-0', getAvatarGradient(node.name))}>
                      {getInitials(node.name)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-medium text-slate-200">{node.name}</span>
                        {node.isCurrentContact && <Star className="w-3 h-3 text-emerald-400" />}
                      </div>
                      <span className="text-[10px] text-slate-400">{node.title}</span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className={cn('w-2 h-2 rounded-full', ENGAGEMENT_COLOR[node.engagementStatus])} />
                      <div className={cn('flex items-center gap-1 px-2 py-0.5 rounded-full border', cfg.bg, cfg.border)}>
                        <Icon className={cn('w-2.5 h-2.5', cfg.iconColor)} />
                        <span className={cn('text-[9px] font-medium', cfg.color)}>{cfg.label}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
