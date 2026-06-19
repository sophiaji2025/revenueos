import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'

import { Shell } from './components/Shell'
import { Companies } from './features/companies/Companies'
import { Contacts } from './features/contacts/Contacts'
import { Deals } from './features/deals/Deals'
import { MissionControl } from './features/mission-control/MissionControl'
import { Outreach } from './features/outreach/Outreach'

export default function App(): JSX.Element {
  const [autonomousMode, setAutonomousMode] = useState(true)
  const location = useLocation()

  return (
    <Shell autonomousMode={autonomousMode}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MissionControl autonomousMode={autonomousMode} setAutonomousMode={setAutonomousMode} />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/deals" element={<Deals />} />
        </Routes>
      </AnimatePresence>
    </Shell>
  )
}
