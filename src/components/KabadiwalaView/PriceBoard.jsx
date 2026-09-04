import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TrendingUp, TrendingDown, Minus, Volume2, Calendar, LineChart } from 'lucide-react';

export const PriceBoard = () => {
  const { priceBoard, MATERIALS, t, speakText, lang } = useApp();
  const [timeframe, setTimeframe] = useState('7d'); // 7d, 30d, 90d
  const [selectedMaterialId, setSelectedMaterialId] = useState('pcb');

  const handleListenAllPrices = () => {
    const speechLines = priceBoard.map((item) => {
      return `${item.materialName}: ${item.rateMin} to ${item.rateMax} rupees per ${item.unit}.`;
    }).join(' ');
    
    speakText(`Today's E-Waste Prices: ${speechLines}`);
  };

  const selectedItem = priceBoard.find((p) => p.materialId === selectedMaterialId) || priceBoard[0];
  const selectedMatObj = MATERIALS.find((m) => m.id === selectedMaterialId) || MATERIALS[0];

  return (
    <div style={{ marginTop: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>💰 {t('priceBoardTitle')}</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Updated daily from CPCB authorized recycler buying benchmarks across Maharashtra.
          </p>
        </div>

        <button className="btn-secondary" onClick={handleListenAllPrices}>
          <Volume2 size={18} style={{ color: 'var(--primary)' }} />
          <span>{t('listenRates')}</span>
        </button>
      </div>

      {/* Interactive Market Trend Visualizer Box */}
      <div className="glass-card" style={{ padding: 24, marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <LineChart size={22} color="var(--primary)" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>
              Live Market Rate Trend — {selectedMatObj.name}
            </h3>
          </div>

          <div style={{ display: 'flex', gap: 8, background: '#0b1220', padding: 4, borderRadius: 20, border: '1px solid var(--border-color)' }}>
            {['7d', '30d', '90d'].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                style={{
                  padding: '4px 12px',
                  borderRadius: 16,
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  background: timeframe === tf ? 'var(--primary)' : 'transparent',
                  color: timeframe === tf ? 'white' : 'var(--text-muted)'
                }}
              >
                {tf.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic SVG Trend Line Chart */}
        <div style={{ position: 'relative', width: '100%', height: 180, background: '#0b1220', borderRadius: 12, padding: 16, overflow: 'hidden', border: '1px solid var(--border-color)' }}>
          <svg width="100%" height="100%" viewBox="0 0 500 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d={
                timeframe === '7d'
                  ? "M0,90 Q75,70 150,85 T300,45 T450,30 L500,20 L500,120 L0,120 Z"
                  : timeframe === '30d'
                  ? "M0,100 Q100,50 200,80 T350,35 L500,15 L500,120 L0,120 Z"
                  : "M0,110 Q120,75 250,90 T400,25 L500,10 L500,120 L0,120 Z"
              }
              fill="url(#chartGrad)"
            />
            <path
              d={
                timeframe === '7d'
                  ? "M0,90 Q75,70 150,85 T300,45 T450,30 L500,20"
                  : timeframe === '30d'
                  ? "M0,100 Q100,50 200,80 T350,35 L500,15"
                  : "M0,110 Q120,75 250,90 T400,25 L500,10"
              }
              fill="none"
              stroke="#34d399"
              strokeWidth="3.5"
            />
            {/* Glowing Data Points */}
            <circle cx="150" cy={timeframe === '7d' ? 85 : 80} r="5" fill="#34d399" />
            <circle cx="300" cy={timeframe === '7d' ? 45 : 35} r="5" fill="#34d399" />
            <circle cx="500" cy={timeframe === '7d' ? 20 : 15} r="6" fill="#38bdf8" />
          </svg>

          <div style={{ position: 'absolute', bottom: 12, right: 20, fontSize: '1.4rem', fontWeight: 800, color: '#34d399' }}>
            Current Peak: ₹{selectedItem.rateMax} / {selectedItem.unit}
          </div>
        </div>
      </div>

      {/* Grid of Material Price Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 18 }}>
        {priceBoard.map((item) => {
          const matObj = MATERIALS.find((m) => m.id === item.materialId) || MATERIALS[0];
          const matName = lang === 'mr' ? matObj.nameMr : lang === 'hi' ? matObj.nameHi : item.materialName;
          const isSelected = selectedMaterialId === item.materialId;

          return (
            <div
              key={item.materialId}
              className={`glass-card ${isSelected ? 'pulse-highlight' : ''}`}
              style={{ padding: 22, position: 'relative', cursor: 'pointer', borderColor: isSelected ? 'var(--primary)' : undefined }}
              onClick={() => setSelectedMaterialId(item.materialId)}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ fontSize: '2.2rem' }}>{matObj.icon}</span>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{matName}</h3>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Per {item.unit}</span>
                  </div>
                </div>

                <div>
                  {item.trend === 'up' && (
                    <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 800, fontSize: '0.88rem' }}>
                      <TrendingUp size={16} /> {item.changePercent}
                    </span>
                  )}
                  {item.trend === 'down' && (
                    <span style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 800, fontSize: '0.88rem' }}>
                      <TrendingDown size={16} /> {item.changePercent}
                    </span>
                  )}
                  {item.trend === 'flat' && (
                    <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 700, fontSize: '0.88rem' }}>
                      <Minus size={16} /> {item.changePercent}
                    </span>
                  )}
                </div>
              </div>

              {/* Price Range Box */}
              <div
                style={{
                  background: '#0b1220',
                  padding: '14px 16px',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid var(--border-color)'
                }}
              >
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Fair Rate Range:</span>
                <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#34d399' }}>
                  ₹{item.rateMin} – ₹{item.rateMax} <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-muted)' }}>/ {item.unit}</span>
                </span>
              </div>

              {/* Audio speak single card */}
              <button
                className="audio-speak-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  speakText(`${matName}: ${item.rateMin} to ${item.rateMax} rupees per ${item.unit}`);
                }}
                title="Speak this price"
              >
                <Volume2 size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

