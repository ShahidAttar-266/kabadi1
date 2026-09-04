import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Download, AlertTriangle, Database, Activity, FileSpreadsheet } from 'lucide-react';

export const AdminDashboard = () => {
  const { recyclers, transactions, lots, priceBoard, MATERIALS } = useApp();
  const [exportedDataset, setExportedDataset] = useState(null);

  const totalDivertedKg = transactions.reduce((sum, t) => sum + t.weightKg, 0);
  const totalPayout = transactions.reduce((sum, t) => sum + t.totalAmount, 0);
  const verifiedRecyclersCount = recyclers.filter((r) => r.status === 'Verified').length;

  const downloadDatasetJSON = (name, data) => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${name}_dataset.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div style={{ marginTop: 20 }}>
      {/* Admin Header */}
      <div className="glass-card" style={{ padding: 24, marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <ShieldCheck size={28} color="var(--primary)" />
          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Ministry Compliance & Dataset Portal</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Administrative surveillance, dataset extraction (PRD Section 21), and compliance audit trails.
            </p>
          </div>
        </div>
      </div>

      {/* Audit KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 24 }}>
        <div className="glass-card" style={{ padding: 20 }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total E-Waste Diverted</div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#34d399' }}>{totalDivertedKg} kg</h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>100% formal recycling channels</span>
        </div>

        <div className="glass-card" style={{ padding: 20 }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Verified Recycler Rate</div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--secondary)' }}>
            {Math.round((verifiedRecyclersCount / recyclers.length) * 100)}%
          </h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{verifiedRecyclersCount} CPCB Verified</span>
        </div>

        <div className="glass-card" style={{ padding: 20 }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Direct Collector Payouts</div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fbbf24' }}>₹{totalPayout.toLocaleString()}</h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Traceable transaction ledger</span>
        </div>
      </div>

      {/* Dataset Downloader Section (PRD Section 21) */}
      <div className="glass-card" style={{ padding: 24, marginBottom: 24 }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Database size={20} color="var(--primary)" />
          <span>Structured Datasets Export (PRD Section 21)</span>
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
          <button className="btn-secondary" onClick={() => downloadDatasetJSON('material', MATERIALS)}>
            <FileSpreadsheet size={16} /> Material Dataset
          </button>

          <button className="btn-secondary" onClick={() => downloadDatasetJSON('price', priceBoard)}>
            <FileSpreadsheet size={16} /> Price Dataset
          </button>

          <button className="btn-secondary" onClick={() => downloadDatasetJSON('recycler', recyclers)}>
            <FileSpreadsheet size={16} /> Recycler Dataset
          </button>

          <button className="btn-secondary" onClick={() => downloadDatasetJSON('transaction', transactions)}>
            <FileSpreadsheet size={16} /> Transaction Dataset
          </button>

          <button className="btn-secondary" onClick={() => downloadDatasetJSON('traceability', lots)}>
            <FileSpreadsheet size={16} /> Traceability Dataset
          </button>
        </div>
      </div>

      {/* Abnormal Transaction Detector (PRD Section 20) */}
      <div className="glass-card" style={{ padding: 24 }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <AlertTriangle size={20} color="#f59e0b" />
          <span>Abnormal Transaction Detection Log (AI Monitoring)</span>
        </h3>

        <div className="custom-table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Material</th>
                <th>Agreed Rate</th>
                <th>Benchmark Rate</th>
                <th>Variance Flag</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => {
                const isVariance = tx.finalPricePerKg > 600 || tx.finalPricePerKg < 100;
                return (
                  <tr key={tx.id}>
                    <td><code>{tx.id}</code></td>
                    <td>{tx.materialName}</td>
                    <td>₹{tx.finalPricePerKg}/kg</td>
                    <td>₹420/kg</td>
                    <td>
                      {isVariance ? (
                        <span style={{ color: '#f59e0b', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                          <AlertTriangle size={14} /> High Variance Warning
                        </span>
                      ) : (
                        <span style={{ color: '#34d399', fontWeight: 600 }}>Normal Range</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
