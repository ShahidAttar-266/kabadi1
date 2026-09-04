import React from 'react';
import { useApp } from '../../context/AppContext';
import { SAFETY_GUIDELINES } from '../../data/mockData';
import { Volume2, AlertTriangle, ShieldCheck, Flame, Zap } from 'lucide-react';

export const SafetyModule = () => {
  const { t, speakText, lang } = useApp();

  return (
    <div style={{ marginTop: 24 }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f87171' }}>
          🔊 {t('safetyGuide')} & Health Instructions
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Crucial safety guidelines for informal e-waste scrap handlers. Avoid illegal processing and protect your health.
        </p>
      </div>

      {/* Safety Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
        {SAFETY_GUIDELINES.map((item) => {
          const title = lang === 'mr' ? item.titleMr : lang === 'hi' ? item.titleHi : item.title;
          const desc = lang === 'mr' ? item.descriptionMr : lang === 'hi' ? item.descriptionHi : item.description;
          const audioText = lang === 'mr' ? item.audioTextMr : lang === 'hi' ? item.audioTextHi : item.description;

          return (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: 24,
                border: '2px solid rgba(239, 68, 68, 0.4)',
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(239, 68, 68, 0.08))',
                position: 'relative'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: 12 }}>{item.icon}</div>
              
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fca5a5', marginBottom: 8 }}>
                {title}
              </h3>
              
              <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.5, marginBottom: 16 }}>
                {desc}
              </p>

              <button
                className="btn-secondary"
                style={{
                  width: '100%',
                  background: 'rgba(239, 68, 68, 0.18)',
                  color: '#fca5a5',
                  border: '1px solid rgba(239, 68, 68, 0.4)'
                }}
                onClick={() => speakText(audioText)}
              >
                <Volume2 size={18} />
                <span>Play Safety Audio ({lang.toUpperCase()})</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
