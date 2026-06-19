import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

import { contacts } from '../../data/contacts'
import { ContactDetail } from './ContactDetail'
import { ContactList } from './ContactList'

export function Contacts(): JSX.Element {
  const [selectedContactId, setSelectedContactId] = useState(contacts[0].id)

  const selectedContact = useMemo(
    () => contacts.find((contact) => contact.id === selectedContactId) ?? contacts[0],
    [selectedContactId],
  )

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-violet-300/70">Contact Intelligence</p>
        <h1 className="mt-2 text-3xl font-semibold">Stakeholder intelligence workspace</h1>
        <p className="mt-2 max-w-2xl text-sm text-white/55">
          Analyze contact engagement, communication style, social activity, and stakeholder dynamics across your target buying committees.
        </p>
      </div>
      <div className="grid gap-6 xl:grid-cols-[320px,1fr]">
        <ContactList contacts={contacts} selectedContactId={selectedContactId} onSelect={setSelectedContactId} />
        <ContactDetail contact={selectedContact} />
      </div>
    </motion.div>
  )
}
