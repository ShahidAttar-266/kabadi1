import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { GuidedDemoBar } from './components/GuidedDemoBar';
import { KabadiwalaDashboard } from './components/KabadiwalaView/KabadiwalaDashboard';
import { RecyclerDashboard } from './components/RecyclerView/RecyclerDashboard';
import { AdminDashboard } from './components/AdminView/AdminDashboard';
import { ShieldCheck, Heart, Recycle } from 'lucide-react';

const MainContent = () => {
  const { role } = useApp();

  return (
    <main className="main-layout">
      {role === 'kabadiwala' && <KabadiwalaDashboard />}
      {role === 'recycler' && <RecyclerDashboard />}
      {role === 'admin' && <AdminDashboard />}
    </main>
  );
};

export function App() {
  return (
    <AppProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <GuidedDemoBar />
        <MainContent />

        {/* Footer */}
        <footer
          style={{
            marginTop: 'auto',
            background: 'rgba(15, 23, 42, 0.95)',
            borderTop: '1px solid var(--border-color)',
            padding: '24px 16px',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Recycle size={18} color="var(--primary)" />
              <span><strong>Kabadiwala Connect</strong> • Ministry of Mines (MoM) Challenge 2026</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span>Version 1.0 (MVP)</span>
              <span>•</span>
              <span>Low-Literacy Offline PWA</span>
              <span>•</span>
              <span style={{ color: '#34d399' }}>CPCB Compliance Ready</span>
            </div>
          </div>
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;
