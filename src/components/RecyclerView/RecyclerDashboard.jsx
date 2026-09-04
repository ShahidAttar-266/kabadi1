import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Factory, ShieldCheck, CheckCircle2, XCircle, DollarSign, Scale, Truck, AlertCircle, Edit, MapPin } from 'lucide-react';

export const RecyclerDashboard = () => {
  const { recyclers, lots, updateLotStatus, completeHandoverAndPay, t, speakText } = useApp();
  const currentRecycler = recyclers[0]; // EcoRecycle Solutions

  const [selectedLotForHandover, setSelectedLotForHandover] = useState(null);
  const [actualWeight, setActualWeight] = useState(10);
  const [agreedPricePerKg, setAgreedPricePerKg] = useState(420);
  const [paymentMethod, setPaymentMethod] = useState('Cash');

  const incomingLots = lots.filter(
    (l) => l.status === 'Requested' || l.status === 'Accepted' || l.status === 'Created'
  );

  const handleAcceptLot = (lot) => {
    updateLotStatus(lot.id, 'Accepted', currentRecycler.id, currentRecycler.name);
    speakText(`Accepted lot ${lot.id} for processing`);
  };

  const handleOpenHandoverModal = (lot) => {
    setSelectedLotForHandover(lot);
    setActualWeight(lot.weight);
    setAgreedPricePerKg(currentRecycler.rates[lot.materialId] || 420);
  };

  const handleConfirmHandoverAndPay = (e) => {
    e.preventDefault();
    if (!selectedLotForHandover) return;

    completeHandoverAndPay(
      selectedLotForHandover,
      parseFloat(actualWeight),
      parseFloat(agreedPricePerKg),
      paymentMethod
    );

    setSelectedLotForHandover(null);
  };

  return (
    <div style={{ marginTop: 20 }}>
      {/* Facility Header */}
      <div className="glass-card" style={{ padding: 24, marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
              <span style={{ fontSize: '1.8rem' }}>🏭</span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>{currentRecycler.name}</h2>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: 20,
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: '#34d399',
                  border: '1px solid #10b981'
                }}
              >
                {currentRecycler.statusLabel}
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              License: <code>{currentRecycler.cpcbLicense}</code> • {currentRecycler.address}
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Service Radius</span>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)' }}>
              {currentRecycler.serviceRadiusKm} km
            </div>
          </div>
        </div>
      </div>

      {/* KPIs Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 24 }}>
        <div className="glass-card" style={{ padding: 20 }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Incoming Scrap Leads</span>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--secondary)' }}>{incomingLots.length}</h3>
        </div>

        <div className="glass-card" style={{ padding: 20 }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Verified License Expiry</span>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#34d399' }}>Valid thru 2029</h3>
        </div>

        <div className="glass-card" style={{ padding: 20 }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Buying Benchmark Rate (PCB)</span>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#34d399' }}>₹{currentRecycler.rates.pcb}/kg</h3>
        </div>
      </div>

      {/* Incoming Lots Queue */}
      <div className="glass-card" style={{ padding: 24, marginBottom: 24 }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Truck size={20} color="var(--primary)" />
          <span>{t('incomingLots')}</span>
        </h3>

        {incomingLots.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No incoming scrap lots currently pending.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
            {incomingLots.map((lot) => (
              <div key={lot.id} style={{ background: '#0f172a', border: '1px solid var(--border-color)', borderRadius: 12, padding: 18 }}>
                <div style={{ display: 'flex', gap: 14, marginBottom: 12 }}>
                  <img
                    src={lot.photoUrl}
                    alt={lot.materialName}
                    style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8, border: '1px solid var(--border-color)' }}
                  />
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700 }}><code>{lot.id}</code></span>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{lot.materialName}</h4>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Weight: {lot.weight} {lot.unit}</span>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: 2 }}>
                      Est: ₹{lot.estimatedValuationMin?.toLocaleString()} – ₹{lot.estimatedValuationMax?.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 8 }}>
                  {lot.status === 'Requested' || lot.status === 'Created' ? (
                    <button className="btn-primary" style={{ flex: 1, padding: '8px 12px', fontSize: '0.82rem' }} onClick={() => handleAcceptLot(lot)}>
                      <CheckCircle2 size={16} /> {t('acceptLot')}
                    </button>
                  ) : (
                    <button
                      className="btn-primary pulse-highlight"
                      style={{ flex: 1, padding: '8px 12px', fontSize: '0.82rem', background: 'linear-gradient(135deg, #059669, #047857)' }}
                      onClick={() => handleOpenHandoverModal(lot)}
                    >
                      <DollarSign size={16} /> {t('confirmWeightPrice')}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Rate Management Panel */}
      <div className="glass-card" style={{ padding: 24 }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Edit size={20} color="var(--secondary)" />
          <span>{t('rateManagement')}</span>
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {Object.entries(currentRecycler.rates).map(([matKey, rate]) => (
            <div key={matKey} style={{ background: '#0f172a', padding: 14, borderRadius: 10, border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                {matKey} Buying Rate
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#34d399' }}>₹{rate}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>/ kg</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Handover & Payment Modal */}
      {selectedLotForHandover && (
        <div className="modal-overlay">
          <div className="modal-content glass-card" style={{ maxWidth: 500 }}>
            <div className="modal-header">
              <h3 className="modal-title">💰 Confirm Handover & Issue Payment</h3>
              <button className="btn-close-modal" onClick={() => setSelectedLotForHandover(null)}>×</button>
            </div>

            <form onSubmit={handleConfirmHandoverAndPay}>
              <div style={{ background: '#0f172a', padding: 14, borderRadius: 8, marginBottom: 16 }}>
                <strong>Lot Reference:</strong> <code>{selectedLotForHandover.id}</code> ({selectedLotForHandover.materialName})
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Scale size={16} style={{ display: 'inline', marginRight: 6 }} />
                  Actual Physical Weight (kg)
                </label>
                <input
                  type="number"
                  value={actualWeight}
                  onChange={(e) => setActualWeight(e.target.value)}
                  style={{ width: '100%', fontSize: '1.1rem', fontWeight: 700 }}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <DollarSign size={16} style={{ display: 'inline', marginRight: 6 }} />
                  Agreed Final Rate (₹ / kg)
                </label>
                <input
                  type="number"
                  value={agreedPricePerKg}
                  onChange={(e) => setAgreedPricePerKg(e.target.value)}
                  style={{ width: '100%', fontSize: '1.1rem', fontWeight: 700 }}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  style={{ width: '100%' }}
                >
                  <option value="Cash">Cash (Immediate Handover)</option>
                  <option value="UPI">UPI Direct Transfer</option>
                  <option value="Bank Transfer">NEFT / Bank Transfer</option>
                </select>
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: 16, borderRadius: 10, textAlign: 'center', marginBottom: 20 }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total Amount Payable</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#34d399' }}>
                  ₹{(actualWeight * agreedPricePerKg).toLocaleString()}
                </div>
              </div>

              <button type="submit" className="btn-primary">
                <CheckCircle2 size={18} />
                <span>Confirm Handover & Complete Payout</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
