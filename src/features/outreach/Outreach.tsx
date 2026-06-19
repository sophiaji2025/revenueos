import { useState } from 'react'
import { motion } from 'framer-motion'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs'
import { sequences } from '../../data/sequences'
import { CampaignAnalytics } from './CampaignAnalytics'
import { SequenceBuilder } from './SequenceBuilder'

export function Outreach(): JSX.Element {
  const [selectedTemplateId, setSelectedTemplateId] = useState(sequences[0].id)

  const selectedTemplate = sequences.find((template) => template.id === selectedTemplateId) ?? sequences[0]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-violet-300/70">Outreach Studio</p>
        <h1 className="mt-2 text-3xl font-semibold">Sequence design and campaign analytics</h1>
        <p className="mt-2 max-w-2xl text-sm text-white/55">
          Build signal-aware outreach, personalize every step, and inspect campaign performance with an AI-first workflow.
        </p>
      </div>

      <Tabs defaultValue="builder">
        <TabsList>
          <TabsTrigger value="builder">Sequence Builder</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="builder" className="mt-6">
          <SequenceBuilder templates={sequences} selectedTemplateId={selectedTemplateId} onSelectTemplate={setSelectedTemplateId} />
        </TabsContent>
        <TabsContent value="analytics" className="mt-6">
          <CampaignAnalytics template={selectedTemplate} />
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
