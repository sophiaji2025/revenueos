import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { contacts } from '@/data/contacts';
import { contactIntel } from '@/data/contactIntel';
import { Badge } from '@/components/ui/badge';
import type { Contact } from '@/data/contacts';

const seniorityFilters = ['All', 'C-Suite', 'VP / Executive', 'Director / Head of', 'Manager', 'Individual Contributor (Senior)'];

interface ContactListProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

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

function getEngagementColor(score: number) {
  if (score >= 80) return 'text-emerald-400 bg-emerald-500/15 border-emerald-500/25';
  if (score >= 55) return 'text-amber-400 bg-amber-500/15 border-amber-500/25';
  return 'text-slate-400 bg-slate-500/15 border-slate-500/25';
}

export function ContactList({ selectedId, onSelect }: ContactListProps) {
  const [search, setSearch] = useState('');
  const [seniority, setSeniority] = useState('All');

  const filtered = useMemo(() => {
    return contacts.filter(c => {
      const matchesSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.company.toLowerCase().includes(search.toLowerCase()) ||
        c.title.toLowerCase().includes(search.toLowerCase());
      const matchesSeniority = seniority === 'All' || c.seniority === seniority;
      return matchesSearch && matchesSeniority;
    });
  }, [search, seniority]);

  return (
    <aside className="w-72 flex-shrink-0 flex flex-col h-full border-r border-white/[0.06] bg-slate-950/40">
      {/* Search */}
      <div className="p-3 border-b border-white/[0.06]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
          <input
            type="text"
            placeholder="Search contacts..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-white/[0.05] border border-white/[0.08] rounded-lg pl-8 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50 focus:border-brand-500/40 transition-all"
          />
        </div>
      </div>

      {/* Seniority filter chips */}
      <div className="px-3 py-2 border-b border-white/[0.06] flex items-center gap-1.5 overflow-x-auto">
        <Filter className="w-3 h-3 text-slate-500 flex-shrink-0" />
        {seniorityFilters.slice(0, 4).map(s => (
          <button
            key={s}
            onClick={() => setSeniority(s)}
            className={cn(
              'flex-shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full border transition-all',
              seniority === s
                ? 'bg-brand-600/25 text-brand-300 border-brand-500/30'
                : 'bg-white/[0.04] text-slate-400 border-white/[0.08] hover:bg-white/[0.07]'
            )}
          >
            {s === 'Individual Contributor (Senior)' ? 'IC' : s}
          </button>
        ))}
      </div>

      {/* Contact count */}
      <div className="px-4 py-2">
        <span className="text-[10px] text-slate-500">{filtered.length} contacts</span>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {filtered.map(contact => {
          const intel = contactIntel[contact.id];
          const score = intel?.engagementScore ?? 0;
          const band = intel?.engagementBand ?? 'cold';
          const isSelected = selectedId === contact.id;

          return (
            <ContactListItem
              key={contact.id}
              contact={contact}
              score={score}
              band={band}
              isSelected={isSelected}
              onSelect={onSelect}
              getInitials={getInitials}
              getAvatarGradient={getAvatarGradient}
              getEngagementColor={getEngagementColor}
            />
          );
        })}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 text-slate-500">
            <Search className="w-6 h-6 mb-2 opacity-50" />
            <p className="text-xs">No contacts found</p>
          </div>
        )}
      </div>
    </aside>
  );
}

interface ContactListItemProps {
  contact: Contact;
  score: number;
  band: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
  getInitials: (name: string) => string;
  getAvatarGradient: (name: string) => string;
  getEngagementColor: (score: number) => string;
}

function ContactListItem({
  contact, score, band, isSelected, onSelect,
  getInitials, getAvatarGradient, getEngagementColor
}: ContactListItemProps) {
  return (
    <button
      onClick={() => onSelect(contact.id)}
      className={cn(
        'w-full flex items-center gap-3 px-3 py-3 text-left transition-all duration-150 border-b border-white/[0.04]',
        isSelected
          ? 'bg-brand-600/15 border-l-2 border-l-brand-500'
          : 'hover:bg-white/[0.04] border-l-2 border-l-transparent'
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          'w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 bg-gradient-to-br',
          getAvatarGradient(contact.name)
        )}
      >
        {getInitials(contact.name)}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1">
          <p className={cn('text-xs font-semibold truncate', isSelected ? 'text-white' : 'text-slate-200')}>
            {contact.name}
          </p>
          {score > 0 && (
            <span className={cn('flex-shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded-full border', getEngagementColor(score))}>
              {score}
            </span>
          )}
        </div>
        <p className="text-[11px] text-slate-400 truncate">{contact.title}</p>
        <p className="text-[10px] text-slate-500 truncate">{contact.company}</p>
      </div>
    </button>
  );
}
