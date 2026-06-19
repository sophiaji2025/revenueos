import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { MissionControlPage } from './features/missions/MissionControlPage';
import { CompanyIntelligencePage } from './features/companies/CompanyIntelligencePage';
import { ContactsPage } from './features/contacts/ContactsPage';
import { OutreachStudioPage } from './features/outreach/OutreachStudioPage';
import { DealRoomPage } from './features/deals/DealRoomPage';

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#060d1f]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-hidden">
          <Routes>
            <Route path="/" element={<MissionControlPage />} />
            <Route path="/companies" element={<CompanyIntelligencePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/outreach" element={<OutreachStudioPage />} />
            <Route path="/deals" element={<DealRoomPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
