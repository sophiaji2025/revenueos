import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

import { companies } from '../../data/companies'
import { CompanyDetail } from './CompanyDetail'
import { CompanyList } from './CompanyList'

export function Companies(): JSX.Element {
  const [selectedCompanyId, setSelectedCompanyId] = useState(companies[0].id)

  const selectedCompany = useMemo(
    () => companies.find((company) => company.id === selectedCompanyId) ?? companies[0],
    [selectedCompanyId],
  )

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-violet-300/70">Company Intelligence</p>
        <h1 className="mt-2 text-3xl font-semibold">Account intelligence workspace</h1>
        <p className="mt-2 max-w-2xl text-sm text-white/55">
          Review funding history, hiring intent, buying signals, and AI-generated briefs across your highest-fit SaaS accounts.
        </p>
      </div>
      <div className="grid gap-6 xl:grid-cols-[320px,1fr]">
        <CompanyList companies={companies} selectedCompanyId={selectedCompanyId} onSelect={setSelectedCompanyId} />
        <CompanyDetail company={selectedCompany} />
      </div>
    </motion.div>
  )
}
