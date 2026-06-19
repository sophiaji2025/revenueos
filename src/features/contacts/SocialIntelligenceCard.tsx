import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Repeat2, Mic, Video, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { ContactIntel } from '@/data/contactIntel';

const TABS = ['LinkedIn', 'Podcasts', 'Talks', 'Interests'] as const;
type Tab = typeof TABS[number];

interface SocialIntelligenceCardProps {
  intel: ContactIntel;
}

export function SocialIntelligenceCard({ intel }: SocialIntelligenceCardProps) {
  const [tab, setTab] = useState<Tab>('LinkedIn');

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Social Intelligence</CardTitle>
          <span className="text-[10px] text-slate-500 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
            Public signals
          </span>
        </div>
        {/* Tabs */}
        <div className="flex gap-1 mt-3 -mb-1">
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                'px-3 py-1 text-xs font-medium rounded-md transition-all',
                tab === t
                  ? 'bg-brand-600/25 text-brand-300 border border-brand-500/25'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        {tab === 'LinkedIn' && <LinkedInFeed posts={intel.linkedInPosts} />}
        {tab === 'Podcasts' && <PodcastList podcasts={intel.podcasts} />}
        {tab === 'Talks' && <TalksList talks={intel.talks} />}
        {tab === 'Interests' && <InterestChips interests={intel.interests} />}
      </CardContent>
    </Card>
  );
}

function LinkedInFeed({ posts }: { posts: ContactIntel['linkedInPosts'] }) {
  return (
    <div className="space-y-3">
      {posts.map(post => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] space-y-2"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1">
              {post.topics.map(t => (
                <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-brand-600/15 text-brand-300 border border-brand-500/20">
                  {t}
                </span>
              ))}
            </div>
            <span className="text-[10px] text-slate-500 flex-shrink-0">{post.date}</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-3">{post.content}</p>
          <div className="flex items-center gap-3 pt-1">
            <span className="flex items-center gap-1 text-[10px] text-slate-500">
              <Heart className="w-3 h-3" /> {post.likes.toLocaleString()}
            </span>
            <span className="flex items-center gap-1 text-[10px] text-slate-500">
              <MessageCircle className="w-3 h-3" /> {post.comments}
            </span>
            {post.type === 'repost' && (
              <span className="flex items-center gap-1 text-[10px] text-slate-500">
                <Repeat2 className="w-3 h-3" /> Repost
              </span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function PodcastList({ podcasts }: { podcasts: ContactIntel['podcasts'] }) {
  return (
    <div className="space-y-2">
      {podcasts.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.06 }}
          className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-violet-500/20 flex-shrink-0">
            <Mic className="w-4 h-4 text-violet-400" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-200">{p.episode}</p>
            <p className="text-[11px] text-slate-400">{p.show}</p>
            <p className="text-[10px] text-slate-500 mt-0.5">{p.date}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function TalksList({ talks }: { talks: ContactIntel['talks'] }) {
  return (
    <div className="space-y-2">
      {talks.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.06 }}
          className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-cyan-500/20 flex-shrink-0">
            <Video className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-slate-200 truncate">{t.talk}</p>
            <p className="text-[11px] text-slate-400">{t.event}</p>
            <p className="text-[10px] text-slate-500 mt-0.5">{t.date}{t.location ? ` · ${t.location}` : ''}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function InterestChips({ interests }: { interests: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 pt-1">
      {interests.map(interest => (
        <span
          key={interest}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-xs text-slate-300 hover:bg-white/[0.08] transition-colors"
        >
          <Tag className="w-3 h-3 text-slate-500" />
          {interest}
        </span>
      ))}
    </div>
  );
}
