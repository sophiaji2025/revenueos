import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Clock, Users, Mail, Phone, Briefcase,
  Plus, ExternalLink, Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Contact } from '@/data/contacts';

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
  const idx = name.charCodeAt(0) % gradients.length;
  return gradients[idx];
}

const personaVariant: Record<string, 'brand' | 'emerald' | 'violet' | 'cyan' | 'amber'> = {
  'Technical Buyer': 'brand',
  'Economic Buyer': 'violet',
  'Business Buyer': 'cyan',
  'Champion': 'emerald',
  'End User / Influencer': 'amber',
};

interface ContactProfileHeaderProps {
  contact: Contact;
}

export function ContactProfileHeader({ contact }: ContactProfileHeaderProps) {
  const [ctaState, setCtaState] = useState<string | null>(null);

  const handleCta = (label: string) => {
    setCtaState(label);
    setTimeout(() => setCtaState(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="glass rounded-xl p-6"
    >
      <div className="flex flex-col sm:flex-row gap-5">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div
            className={cn(
              'w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold bg-gradient-to-br shadow-lg',
              getAvatarGradient(contact.name)
            )}
          >
            {getInitials(contact.name)}
          </div>
        </div>

        {/* Main info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-white">{contact.name}</h2>
              <p className="text-sm text-slate-300 mt-0.5">{contact.title}</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-xs text-slate-400">{contact.company}</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </div>
            </div>

            {/* CTA cluster */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant="brand"
                size="sm"
                onClick={() => handleCta('sequence')}
                className="gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                {ctaState === 'sequence' ? 'Added!' : 'Add to Sequence'}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCta('deal')}
                className="gap-1.5"
              >
                <Briefcase className="w-3.5 h-3.5" />
                {ctaState === 'deal' ? 'Opening…' : 'View in Deal Room'}
              </Button>
            </div>
          </div>

          {/* Chips row */}
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant={personaVariant[contact.persona] ?? 'default'}>
              <Sparkles className="w-2.5 h-2.5" />
              {contact.persona}
            </Badge>
            <Badge variant="outline">{contact.seniority}</Badge>
            <Badge variant="outline">{contact.department}</Badge>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
            <DetailItem icon={MapPin} label="Location" value={contact.location} />
            <DetailItem icon={Mail} label="Email" value={contact.email} />
            <DetailItem icon={Phone} label="Phone" value={contact.phone} />
            <DetailItem icon={Clock} label="Time in role" value={contact.timeInRole} />
            <DetailItem icon={Users} label="Mutual connections" value={String(contact.mutualConnections)} />
            <DetailItem icon={Clock} label="Best time to reach" value={contact.bestTimeToReach} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DetailItem({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2 min-w-0">
      <Icon className="w-3.5 h-3.5 text-slate-500 mt-0.5 flex-shrink-0" />
      <div className="min-w-0">
        <p className="text-[10px] text-slate-500 uppercase tracking-wide">{label}</p>
        <p className="text-xs text-slate-300 truncate">{value}</p>
      </div>
    </div>
  );
}
