import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { contacts } from '@/data/contacts';
import { contactIntel } from '@/data/contactIntel';
import { ContactList } from './ContactList';
import { ContactProfileHeader } from './ContactProfileHeader';
import { EngagementScoreCard } from './EngagementScoreCard';
import { CareerHistoryTimeline } from './CareerHistoryTimeline';
import { SocialIntelligenceCard } from './SocialIntelligenceCard';
import { BuyingLikelihoodCard } from './BuyingLikelihoodCard';
import { AIInsightsCard } from './AIInsightsCard';
import { StakeholderMap } from './StakeholderMap';

const DEFAULT_CONTACT_ID = 'sarah-chen';

export function ContactsPage() {
  const [selectedId, setSelectedId] = useState(DEFAULT_CONTACT_ID);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const contact = contacts.find(c => c.id === selectedId);
  const intel = contactIntel[selectedId];

  const handleSelect = (id: string) => {
    if (id === selectedId) return;
    setSelectedId(id);
    setIsAnalyzing(true);
    const timer = setTimeout(() => setIsAnalyzing(false), 1800);
    return () => clearTimeout(timer);
  };

  // Trigger analyzing on first load
  useEffect(() => {
    setIsAnalyzing(true);
    const timer = setTimeout(() => setIsAnalyzing(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-full overflow-hidden">
      {/* Left contact rail */}
      <ContactList selectedId={selectedId} onSelect={handleSelect} />

      {/* Right detail panel */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          {!contact ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center h-full text-slate-500"
            >
              Select a contact to view intelligence
            </motion.div>
          ) : (
            <motion.div
              key={selectedId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="p-5 space-y-4"
            >
              {/* Analyzing banner */}
              <AnimatePresence>
                {isAnalyzing && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-brand-600/15 border border-brand-500/25"
                  >
                    <div className="flex gap-0.5">
                      {[0, 1, 2].map(i => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-brand-400"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-brand-300">
                      RevenueOS AI is analyzing {contact.name}…
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-brand-400 ml-auto" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Profile header — always shown */}
              <ContactProfileHeader contact={contact} />

              {/* Grid layout for detail cards */}
              {intel ? (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {/* Engagement Score */}
                  <EngagementScoreCard intel={intel} />

                  {/* Buying Likelihood */}
                  <BuyingLikelihoodCard intel={intel} />

                  {/* Career History — full width */}
                  <div className="xl:col-span-2">
                    <CareerHistoryTimeline career={intel.career} />
                  </div>

                  {/* Social Intelligence — full width */}
                  <div className="xl:col-span-2">
                    <SocialIntelligenceCard intel={intel} />
                  </div>

                  {/* AI Insights — full width */}
                  <div className="xl:col-span-2">
                    <AIInsightsCard intel={intel} isAnalyzing={isAnalyzing} />
                  </div>

                  {/* Stakeholder Map — full width */}
                  <div className="xl:col-span-2">
                    <StakeholderMap stakeholders={intel.stakeholders} />
                  </div>
                </div>
              ) : (
                <NoIntelPlaceholder name={contact.name} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function NoIntelPlaceholder({ name }: { name: string }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className={`glass rounded-xl p-5 ${i > 2 ? 'xl:col-span-2' : ''}`}>
          <div className="shimmer h-4 rounded mb-3 w-32" />
          <div className="space-y-2">
            <div className="shimmer h-3 rounded w-full" />
            <div className="shimmer h-3 rounded w-4/5" />
            <div className="shimmer h-3 rounded w-3/5" />
          </div>
          <p className="text-[10px] text-slate-600 mt-4 text-center">No detailed intelligence available for {name}</p>
        </div>
      ))}
    </div>
  );
}
