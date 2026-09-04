import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, MapPin, Truck, Phone, Star, Send, CheckCircle2, AlertTriangle } from 'lucide-react';

export const FindRecycler = () => {
  const { recyclers, lots, updateLotStatus, t, speakText } = useApp();
  const [selectedLot, setSelectedLot] = useState(lots[0] || null);
  const [requestedRecyclerId, setRequestedRecyclerId] = useState(null);

  const handleRequestHandover = (recycler) => {
    if (!selectedLot) {
      alert('Please create or select a scrap lot first!');
      return;
    }

    updateLotStatus(selectedLot.id, 'Requested', recycler.id, recycler.name);
    setRequestedRecyclerId(recycler.id);
    speakText(`Handover request sent to ${recycler.name} for Lot ${selectedLot.id}`);
  };

  return (
    <div style={{ marginTop: 24 }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>🏭 {t('findRecycler')}</h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Discovered authorized recyclers with verified CPCB licenses near your operating zone.
        </p>
      </div>

      {/* Lot Selector & Filter Bar */}
      <div className="glass-card" style={{ padding: 18, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        {lots.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Material Lot to Sell:</span>
            <select
              value={selectedLot?.id || ''}
              onChange={(e) => setSelectedLot(lots.find((l) => l.id === e.target.value))}
              style={{ padding: '9px 14px', borderRadius: 8, background: '#0b1220', border: '1px solid var(--border-color)', fontWeight: 600 }}
            >
              {lots.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.id} • {l.materialName} ({l.weight} {l.unit}) • {l.status}
                </option>
              ))}
            </select>
          </div>
        )}

        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{ fontSize: '0.8rem', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', padding: '4px 10px', borderRadius: 20, fontWeight: 700 }}>
            Showing {recyclers.length} Verified Facilities
          </span>
        </div>
      </div>

      {/* Recyclers Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
        {recyclers.map((rec) => {
          const isRequested = requestedRecyclerId === rec.id || (selectedLot && selectedLot.recyclerId === rec.id);

          return (
            <div key={rec.id} className="glass-card" style={{ padding: 22, display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
              <div>
                {/* Header Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 20,
                      background: rec.status === 'Verified' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                      color: rec.status === 'Verified' ? '#34d399' : '#fbbf24',
                      border: `1px solid ${rec.status === 'Verified' ? '#10b981' : '#f59e0b'}`
                    }}
                  >
                    {rec.statusLabel}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Star size={14} fill="#f59e0b" color="#f59e0b" /> {rec.rating}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 4 }}>{rec.name}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 12 }}>{rec.facilityType}</p>

                {/* Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.84rem', color: 'var(--text-main)', marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <ShieldCheck size={16} color="var(--primary)" />
                    <span>CPCB License: <code>{rec.cpcbLicense}</code></span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <MapPin size={16} color="var(--secondary)" />
                    <span>{rec.address} (<strong>{rec.distanceKm} km {t('distance')}</strong>)</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Truck size={16} color="var(--accent)" />
                    <span>{rec.pickupAvailable ? `Pickup Available (Min ${rec.minPickupWeightKg} kg)` : 'Self Drop-off Facility'}</span>
                  </div>
                </div>

                {/* Rate Card */}
                <div style={{ background: '#0f172a', padding: 12, borderRadius: 8, marginBottom: 16 }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>
                    {t('ratesOffered')}:
                  </span>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    {Object.entries(rec.rates).map(([matKey, rate]) => (
                      <span key={matKey} style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.06)', padding: '3px 8px', borderRadius: 4 }}>
                        <strong style={{ textTransform: 'uppercase' }}>{matKey}:</strong> ₹{rate}/kg
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                className={`btn-primary ${isRequested ? 'pulse-highlight' : ''}`}
                onClick={() => handleRequestHandover(rec)}
                disabled={isRequested}
                style={{
                  background: isRequested ? 'linear-gradient(135deg, #059669, #047857)' : undefined
                }}
              >
                {isRequested ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span>Handover Request Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>{t('requestHandover')}</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
