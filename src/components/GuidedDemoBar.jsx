import React from 'react';
import { useApp } from '../context/AppContext';
import { ChevronRight, XCircle, Sparkles } from 'lucide-react';

export const GuidedDemoBar = () => {
  const { demoActive, setDemoActive, currentDemoStep, advanceDemoStep, demoStepIndex } = useApp();

  if (!demoActive) return null;

  return (
    <div className="guided-demo-bar">
      <div className="guided-demo-content">
        <div className="guided-step-info">
          <span className="step-pill">
            <Sparkles size={12} style={{ display: 'inline', marginRight: 4 }} />
            PRD Step {currentDemoStep.step} / 15
          </span>
          <span className="guided-text">
            <strong>{currentDemoStep.title}:</strong> {currentDemoStep.desc}
          </span>
        </div>

        <div className="demo-controls">
          <button className="btn-demo-next" onClick={advanceDemoStep}>
            <span>{demoStepIndex === 14 ? 'Finish Walkthrough' : 'Next Step'}</span>
            <ChevronRight size={16} />
          </button>
          <button className="btn-demo-exit" onClick={() => setDemoActive(false)} title="Close Demo">
            <XCircle size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
