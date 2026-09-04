import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Camera, Sparkles, AlertCircle, CheckCircle, Scale, DollarSign } from 'lucide-react';

export const AddScrapModal = ({ onClose }) => {
  const { MATERIALS, addLot, t, speakText, lang } = useApp();
  
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIALS[0]);
  const [weight, setWeight] = useState(10);
  const [condition, setCondition] = useState('Intact Boards');
  const [photoUrl, setPhotoUrl] = useState('/assets/ewaste_pcb.jpg');
  const [aiDetected, setAiDetected] = useState({ name: 'Printed Circuit Board (PCB)', confidence: 94 });

  const handlePhotoUpload = (e) => {
    // Simulated photo upload with AI classification
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
    }
    // Simulate AI classification
    const randomMat = MATERIALS[Math.floor(Math.random() * MATERIALS.length)];
    setSelectedMaterial(randomMat);
    setAiDetected({
      name: randomMat.name,
      confidence: Math.floor(88 + Math.random() * 10)
    });
    speakText(`AI identified material as ${randomMat.name}`);
  };

  const handleCreateLot = (e) => {
    e.preventDefault();
    const lotId = `KC-LOT-${Math.floor(100000 + Math.random() * 900000)}`;
    const estMin = Math.round(weight * selectedMaterial.basePriceMin);
    const estMax = Math.round(weight * selectedMaterial.basePriceMax);

    const newLot = {
      id: lotId,
      materialId: selectedMaterial.id,
      materialName: selectedMaterial.name,
      weight: parseFloat(weight),
      unit: selectedMaterial.unit,
      condition: condition,
      photoUrl: photoUrl,
      estimatedValuationMin: estMin,
      estimatedValuationMax: estMax,
      status: 'Created',
      createdAt: new Date().toLocaleString()
    };

    addLot(newLot);
    speakText(`Scrap Lot ${lotId} created successfully. Estimated value ${estMin} to ${estMax} rupees.`);
    onClose();
  };

  const estimatedMin = Math.round(weight * selectedMaterial.basePriceMin);
  const estimatedMax = Math.round(weight * selectedMaterial.basePriceMax);

  return (
    <div className="modal-overlay">
      <div className="modal-content glass-card">
        <div className="modal-header">
          <h3 className="modal-title">
            <span style={{ fontSize: '1.6rem' }}>📷</span>
            <span>{t('addScrapTitle')}</span>
          </h3>
          <button className="btn-close-modal" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleCreateLot}>
          {/* Photo Upload & AI Box */}
          <div className="form-group" style={{ marginBottom: 24 }}>
            <label className="form-label">{t('uploadPhoto')}</label>
            <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
              <div className="camera-scanner-container" style={{ width: 120, height: 120 }}>
                <img
                  src={photoUrl}
                  alt="Scrap Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="scanner-laser-beam"></div>
              </div>

              <div style={{ flex: 1 }}>
                <label
                  className="btn-secondary"
                  style={{ cursor: 'pointer', display: 'inline-flex', marginBottom: 8, background: 'rgba(16, 185, 129, 0.15)', borderColor: 'var(--primary)' }}
                >
                  <Camera size={18} color="var(--primary)" />
                  <span>Choose Photo / Take Shot</span>
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: 'none' }} />
                </label>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Upload scrap photograph to trigger real-time AI material classification model.
                </p>
              </div>
            </div>
          </div>

          {/* AI Banner */}
          {aiDetected && (
            <div className="ai-detection-box">
              <Sparkles className="ai-icon-sparkle" />
              <div className="ai-info">
                <h4>{t('aiClassified')}: {aiDetected.name}</h4>
                <p>{t('confidence')}: <strong>{aiDetected.confidence}%</strong> (You can manual adjust below)</p>
              </div>
            </div>
          )}

          {/* Category Selection Grid */}
          <div className="form-group">
            <label className="form-label">{t('selectCategory')}</label>
            <div className="category-grid">
              {MATERIALS.map((mat) => {
                const displayName = lang === 'mr' ? mat.nameMr : lang === 'hi' ? mat.nameHi : mat.name;
                return (
                  <div
                    key={mat.id}
                    className={`category-select-card ${selectedMaterial.id === mat.id ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedMaterial(mat);
                      setAiDetected({ name: mat.name, confidence: 96 });
                    }}
                  >
                    <span className="category-icon-emoji">{mat.icon}</span>
                    <span className="category-name">{displayName}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Weight & Condition */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div className="form-group">
              <label className="form-label">
                <Scale size={16} style={{ display: 'inline', marginRight: 6 }} />
                {t('approxWeight')} ({selectedMaterial.unit})
              </label>
              <input
                type="number"
                min="1"
                max="500"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                style={{ width: '100%', fontSize: '1.1rem', fontWeight: 700 }}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">{t('condition')}</label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                style={{ width: '100%' }}
              >
                <option value="Intact Boards">Intact Boards / Assemblies</option>
                <option value="Dismantled Scrap">Dismantled / Separated</option>
                <option value="Mixed Scrap">Mixed Scrap Lot</option>
              </select>
            </div>
          </div>

          {/* Valuation Range Box */}
          <div
            style={{
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: 12,
              padding: '16px',
              margin: '16px 0',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 4 }}>
              {t('estimatedRange')}
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#34d399' }}>
              ₹{estimatedMin.toLocaleString()} – ₹{estimatedMax.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: 4 }}>
              * Estimated value. Actual payment confirmed after physical inspection.
            </div>
          </div>

          {/* Create Button */}
          <button type="submit" className="btn-primary">
            <CheckCircle size={18} />
            <span>{t('createLotBtn')}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
