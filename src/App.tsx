import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { MissionControlPage } from './features/mission-control/MissionControlPage';
import { CompanyIntelligencePage } from './features/company-intelligence/CompanyIntelligencePage';
import { ContactIntelligencePage } from './features/contact-intelligence/ContactIntelligencePage';
import { OutreachStudioPage } from './features/outreach-studio/OutreachStudioPage';
import { DealRoomPage } from './features/deal-room/DealRoomPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<MissionControlPage />} />
          <Route path="companies" element={<CompanyIntelligencePage />} />
          <Route path="contacts" element={<ContactIntelligencePage />} />
          <Route path="outreach" element={<OutreachStudioPage />} />
          <Route path="deals" element={<DealRoomPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
