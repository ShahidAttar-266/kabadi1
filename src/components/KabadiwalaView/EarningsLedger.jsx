import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DollarSign, Clock, CheckCircle2, FileText, QrCode, Printer, Download, MapPin } from 'lucide-react';

export const EarningsLedger = () => {
  const { transactions, t, speakText } = useApp();
  const [selectedTx, setSelectedTx] = useState(null);

  const totalPaid = transactions
    .filter((t) => t.paymentStatus === 'Paid')
    .reduce((sum, t) => sum + t.totalAmount, 0);

  const totalPending = transactions
    .filter((t) => t.paymentStatus === 'Pending')
    .reduce((sum, t) => sum + t.totalAmount, 0);

  const completedCount = transactions.filter((t) => t.paymentStatus === 'Paid').length;

  return (
    <div style={{ marginTop: 24 }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>💵 {t('myEarnings')} & Digital Receipts</h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Transparent financial ledger tracking all scrap sales, payment receipts, and compliance handovers.
        </p>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 24 }}>
        <div className="glass-card" style={{ padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <div style={{ padding: 10, borderRadius: 12, background: 'rgba(16, 185, 129, 0.2)', color: '#34d399' }}>
              <DollarSign size={24} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t('totalEarnings')}</span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#34d399' }}>₹{totalPaid.toLocaleString()}</h3>
            </div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <div style={{ padding: 10, borderRadius: 12, background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24' }}>
              <Clock size={24} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t('pendingPayout')}</span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fbbf24' }}>₹{totalPending.toLocaleString()}</h3>
            </div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <div style={{ padding: 10, borderRadius: 12, background: 'rgba(6, 182, 212, 0.2)', color: '#38bdf8' }}>
              <CheckCircle2 size={24} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t('completedJobs')}</span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38bdf8' }}>{completedCount}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="glass-card" style={{ padding: 20 }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16 }}>{t('myTransactions')} Ledger</h3>

        <div className="custom-table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference ID</th>
                <th>Material</th>
                <th>Weight</th>
                <th>Recycler</th>
                <th>Amount</th>
                <th>Payment Mode</th>
                <th>Status</th>
                <th>Digital Receipt</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td>{tx.date}</td>
                  <td><code>{tx.handoverRef}</code></td>
                  <td><strong>{tx.materialName}</strong></td>
                  <td>{tx.weightKg} kg</td>
                  <td>{tx.recyclerName}</td>
                  <td><strong style={{ color: '#34d399' }}>₹{tx.totalAmount.toLocaleString()}</strong></td>
                  <td>{tx.paymentMethod}</td>
                  <td>
                    <span
                      style={{
                        padding: '3px 8px',
                        borderRadius: 12,
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        background: tx.paymentStatus === 'Paid' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                        color: tx.paymentStatus === 'Paid' ? '#34d399' : '#fbbf24'
                      }}
                    >
                      {tx.paymentStatus}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn-secondary"
                      style={{ padding: '4px 10px', fontSize: '0.78rem' }}
                      onClick={() => {
                        setSelectedTx(tx);
                        speakText(`Opened Digital Handover Receipt ${tx.handoverRef}`);
                      }}
                    >
                      <FileText size={14} /> View Certificate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Digital Receipt Modal */}
      {selectedTx && (
        <div className="modal-overlay">
          <div className="modal-content glass-card" style={{ maxWidth: 550 }}>
            <div className="modal-header">
              <h3 className="modal-title">🧾 Digital Handover Certificate</h3>
              <button className="btn-close-modal" onClick={() => setSelectedTx(null)}>×</button>
            </div>

            <div className="receipt-card">
              <div className="receipt-header">
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Ministry of Mines E-Waste Network
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>Kabadiwala Connect</h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-main)', marginTop: 2 }}>
                    Handover Ref: <code>{selectedTx.handoverRef}</code>
                  </div>
                </div>

                <div className="qr-code-placeholder">
                  {/* QR Code SVG Visual */}
                  <svg width="68" height="68" viewBox="0 0 100 100" fill="#0f172a">
                    <rect x="10" y="10" width="30" height="30" rx="4"/>
                    <rect x="60" y="10" width="30" height="30" rx="4"/>
                    <rect x="10" y="60" width="30" height="30" rx="4"/>
                    <rect x="20" y="20" width="10" height="10" fill="#fff"/>
                    <rect x="70" y="20" width="10" height="10" fill="#fff"/>
                    <rect x="20" y="70" width="10" height="10" fill="#fff"/>
                    <rect x="50" y="50" width="15" height="15"/>
                    <rect x="70" y="70" width="20" height="20"/>
                  </svg>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: '0.85rem', marginBottom: 16 }}>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Collector</span>
                  <strong>{selectedTx.collectorName}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Recycler Facility</span>
                  <strong>{selectedTx.recyclerName}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Material</span>
                  <strong>{selectedTx.materialName}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Verified Weight</span>
                  <strong>{selectedTx.weightKg} kg</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Rate Agreed</span>
                  <strong>₹{selectedTx.finalPricePerKg} / kg</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Payment Mode</span>
                  <strong>{selectedTx.paymentMethod} ({selectedTx.paymentStatus})</strong>
                </div>
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: 12, borderRadius: 8, textAlign: 'center', marginBottom: 16 }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total Amount Paid to Collector</span>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#34d399' }}>
                  ₹{selectedTx.totalAmount.toLocaleString()}
                </div>
              </div>

              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textAlign: 'center', marginBottom: 16 }}>
                <MapPin size={12} style={{ display: 'inline', marginRight: 4 }} />
                Location Verified: {selectedTx.location} ({selectedTx.gpsCoordinates})
              </div>

              <div style={{ display: 'flex', gap: 10 }}>
                <button className="btn-primary" style={{ flex: 1 }} onClick={() => window.print()}>
                  <Printer size={16} /> Print Official Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
