import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AddScrapModal } from './AddScrapModal';
import { PriceBoard } from './PriceBoard';
import { FindRecycler } from './FindRecycler';
import { EarningsLedger } from './EarningsLedger';
import { SafetyModule } from './SafetyModule';
import { Camera, DollarSign, Factory, Wallet, FileText, ShieldAlert, Home } from 'lucide-react';

export const KabadiwalaDashboard = () => {
  const { activeTab, setActiveTab, t, speakText } = useApp();
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div>
      {/* Navigation Tab Bar */}
      <div className="nav-tab-bar">
        <button
          className={`tab-btn ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <Home size={16} /> Home Dashboard
        </button>

        <button
          className={`tab-btn ${activeTab === 'prices' ? 'active' : ''}`}
          onClick={() => setActiveTab('prices')}
        >
          <DollarSign size={16} /> {t('checkPrice')}
        </button>

        <button
          className={`tab-btn ${activeTab === 'recyclers' ? 'active' : ''}`}
          onClick={() => setActiveTab('recyclers')}
        >
          <Factory size={16} /> {t('findRecycler')}
        </button>

        <button
          className={`tab-btn ${activeTab === 'earnings' ? 'active' : ''}`}
          onClick={() => setActiveTab('earnings')}
        >
          <Wallet size={16} /> {t('myEarnings')}
        </button>

        <button
          className={`tab-btn ${activeTab === 'safety' ? 'active' : ''}`}
          onClick={() => setActiveTab('safety')}
        >
          <ShieldAlert size={16} /> {t('safetyGuide')}
        </button>
      </div>

      {/* Main Action Grid (Home Tab) */}
      {activeTab === 'home' && (
        <div>
          <div style={{ textAlign: 'center', margin: '20px 0 32px 0' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '6px 16px', borderRadius: 30, fontSize: '0.82rem', fontWeight: 700, color: '#34d399', marginBottom: 12 }}>
              🌱 Eco Impact: 39 kg E-Waste Diverted to Formal Recyclers
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Welcome back, Ramesh Kabadiwala 👋</h2>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', maxWidth: 680, margin: '8px auto 0 auto' }}>
              Select an action below to categorize scrap with AI, check today's market rates, sell to authorized recyclers, and view your payout ledger.
            </p>
          </div>

          <div className="low-literacy-grid">
            {/* Add Scrap Card */}
            <div
              className="big-action-card add-scrap"
              onClick={() => {
                setShowAddModal(true);
                speakText(t('addScrap'));
              }}
            >
              <div className="big-card-icon icon-bg-emerald">📷</div>
              <div className="big-card-title">{t('addScrap')}</div>
              <div className="big-card-subtitle">{t('addScrapSub')}</div>
              <button
                className="audio-speak-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  speakText(t('addScrap'));
                }}
              >
                🔊
              </button>
            </div>

            {/* Check Price Card */}
            <div
              className="big-action-card check-price"
              onClick={() => {
                setActiveTab('prices');
                speakText(t('checkPrice'));
              }}
            >
              <div className="big-card-icon icon-bg-cyan">💰</div>
              <div className="big-card-title">{t('checkPrice')}</div>
              <div className="big-card-subtitle">{t('checkPriceSub')}</div>
              <button
                className="audio-speak-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  speakText(t('checkPrice'));
                }}
              >
                🔊
              </button>
            </div>

            {/* Find Recycler Card */}
            <div
              className="big-action-card find-recycler"
              onClick={() => {
                setActiveTab('recyclers');
                speakText(t('findRecycler'));
              }}
            >
              <div className="big-card-icon icon-bg-purple">🏭</div>
              <div className="big-card-title">{t('findRecycler')}</div>
              <div className="big-card-subtitle">{t('findRecyclerSub')}</div>
              <button
                className="audio-speak-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  speakText(t('findRecycler'));
                }}
              >
                🔊
              </button>
            </div>

            {/* My Earnings Card */}
            <div
              className="big-action-card my-earnings"
              onClick={() => {
                setActiveTab('earnings');
                speakText(t('myEarnings'));
              }}
            >
              <div className="big-card-icon icon-bg-amber">💵</div>
              <div className="big-card-title">{t('myEarnings')}</div>
              <div className="big-card-subtitle">{t('myEarningsSub')}</div>
              <button
                className="audio-speak-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  speakText(t('myEarnings'));
                }}
              >
                🔊
              </button>
            </div>

            {/* My Transactions Card */}
            <div
              className="big-action-card"
              onClick={() => {
                setActiveTab('earnings');
                speakText(t('myTransactions'));
              }}
            >
              <div className="big-card-icon icon-bg-blue">🧾</div>
              <div className="big-card-title">{t('myTransactions')}</div>
              <div className="big-card-subtitle">{t('myTransactionsSub')}</div>
              <button
                className="audio-speak-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  speakText(t('myTransactions'));
                }}
              >
                🔊
              </button>
            </div>

            {/* Safety Guide Card */}
            <div
              className="big-action-card safety"
              onClick={() => {
                setActiveTab('safety');
                speakText(t('safetyGuide'));
              }}
            >
              <div className="big-card-icon icon-bg-rose">🔊</div>
              <div className="big-card-title">{t('safetyGuide')}</div>
              <div className="big-card-subtitle">{t('safetyGuideSub')}</div>
              <button
                className="audio-speak-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  speakText(t('safetyGuide'));
                }}
              >
                🔊
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Sub-Views */}
      {activeTab === 'prices' && <PriceBoard />}
      {activeTab === 'recyclers' && <FindRecycler />}
      {activeTab === 'earnings' && <EarningsLedger />}
      {activeTab === 'safety' && <SafetyModule />}

      {/* Add Scrap Modal */}
      {showAddModal && <AddScrapModal onClose={() => setShowAddModal(false)} />}
    </div>
  );
};
