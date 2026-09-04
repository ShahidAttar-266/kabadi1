import React, { createContext, useContext, useState } from 'react';
import { MATERIALS, INITIAL_RECYCLERS, INITIAL_PRICE_BOARD, INITIAL_LOTS, INITIAL_TRANSACTIONS, TRANSLATIONS } from '../data/mockData';
import confetti from 'canvas-confetti';

const AppContext = createContext();

export const DEMO_STEPS = [
  { step: 1, title: 'Kabadiwala Login', desc: 'Log in as Ramesh Kabadiwala (Informal E-Waste Collector).' },
  { step: 2, title: 'Click Add Scrap', desc: 'Open the Add Scrap modal from the main dashboard.' },
  { step: 3, title: 'Upload PCB Photo', desc: 'Upload or capture scrap photo. AI automatically classifies PCB Motherboard.' },
  { step: 4, title: 'Enter Weight', desc: 'Specify weight: 10 kg of high-grade Printed Circuit Boards.' },
  { step: 5, title: 'AI Classification', desc: 'AI confirms Printed Circuit Board (PCB) with 94% confidence.' },
  { step: 6, title: 'View Price Board', desc: 'Check price board: Current market rate ₹380–₹550 / kg.' },
  { step: 7, title: 'Find Verified Recycler', desc: 'System ranks nearby CPCB Authorized Recyclers by rate & distance.' },
  { step: 8, title: 'Select Recycler A', desc: 'Select EcoRecycle Solutions Pune (Verified CPCB Authorized).' },
  { step: 9, title: 'Recycler Receives Lot', desc: 'Switch to Recycler Mode. EcoRecycle sees new lot request KC-LOT-000124.' },
  { step: 10, title: 'Recycler Accepts Request', desc: 'Recycler accepts the collection lot request and arranges handover.' },
  { step: 11, title: 'Handover Completed', desc: 'Physical scrap material is handed over to recycler driver.' },
  { step: 12, title: 'Confirm Weight & Price', desc: 'Recycler verifies weight: 10 kg @ ₹420/kg = ₹4,200 total.' },
  { step: 13, title: 'Mark Payment Paid', desc: 'Recycler issues payment status: PAID - CASH.' },
  { step: 14, title: 'Traceable Receipt Generated', desc: 'Digital Handover Record KC-2026-09-000124 generated with QR Code.' },
  { step: 15, title: 'Earnings Ledger Updated', desc: 'Kabadiwala views My Earnings: ₹4,200 added to completed ledger!' }
];

export const AppProvider = ({ children }) => {
  const [role, setRole] = useState('kabadiwala'); // kabadiwala, recycler, admin
  const [lang, setLang] = useState('en'); // en, mr, hi
  const [isOnline, setIsOnline] = useState(true);
  const [activeTab, setActiveTab] = useState('home'); // home, addScrap, prices, recyclers, earnings, transactions, safety
  
  // Data States
  const [lots, setLots] = useState(INITIAL_LOTS);
  const [recyclers, setRecyclers] = useState(INITIAL_RECYCLERS);
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);
  const [priceBoard, setPriceBoard] = useState(INITIAL_PRICE_BOARD);
  
  // Guided Demo State
  const [demoActive, setDemoActive] = useState(false);
  const [demoStepIndex, setDemoStepIndex] = useState(0);

  // Audio Speech Simulation
  const speakText = (text) => {
    if (!('speechSynthesis' in window)) {
      alert(`🔊 [Voice Narration]: ${text}`);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (lang === 'mr') utterance.lang = 'mr-IN';
    else if (lang === 'hi') utterance.lang = 'hi-IN';
    else utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const t = (key) => {
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en']?.[key] || key;
  };

  // Actions
  const addLot = (newLot) => {
    setLots((prev) => [newLot, ...prev]);
  };

  const updateLotStatus = (lotId, status, recyclerId, recyclerName) => {
    setLots((prev) =>
      prev.map((lot) =>
        lot.id === lotId ? { ...lot, status, recyclerId, recyclerName } : lot
      )
    );
  };

  const completeHandoverAndPay = (lot, weightKg, pricePerKg, paymentMethod) => {
    const totalAmount = weightKg * pricePerKg;
    const txId = `KC-2026-09-${Math.floor(100000 + Math.random() * 900000)}`;
    
    const newTx = {
      id: txId,
      lotId: lot.id,
      materialName: lot.materialName,
      weightKg: weightKg,
      finalPricePerKg: pricePerKg,
      totalAmount: totalAmount,
      collectorName: 'Ramesh Kabadiwala',
      recyclerName: lot.recyclerName || 'EcoRecycle Solutions',
      paymentMethod: paymentMethod,
      paymentStatus: 'Paid',
      date: new Date().toISOString().split('T')[0],
      handoverRef: txId,
      location: 'Pune Facility Depot',
      gpsCoordinates: '18.6298° N, 73.7997° E'
    };

    setTransactions((prev) => [newTx, ...prev]);
    updateLotStatus(lot.id, 'Completed');
    
    // Trigger celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    speakText(`Payment of Rupees ${totalAmount} completed successfully via ${paymentMethod}!`);
    return newTx;
  };

  // Next Step in Guided Demo Walkthrough
  const advanceDemoStep = () => {
    const nextIdx = demoStepIndex + 1;
    if (nextIdx >= DEMO_STEPS.length) {
      setDemoActive(false);
      setDemoStepIndex(0);
      return;
    }
    
    setDemoStepIndex(nextIdx);
    const stepNum = DEMO_STEPS[nextIdx].step;

    // Perform state adjustments based on step
    if (stepNum === 1) {
      setRole('kabadiwala');
      setActiveTab('home');
    } else if (stepNum === 2) {
      setActiveTab('addScrap');
    } else if (stepNum === 6) {
      setActiveTab('prices');
    } else if (stepNum === 7) {
      setActiveTab('recyclers');
    } else if (stepNum === 9) {
      setRole('recycler');
    } else if (stepNum === 14) {
      setActiveTab('transactions');
      setRole('kabadiwala');
    } else if (stepNum === 15) {
      setActiveTab('earnings');
      setRole('kabadiwala');
    }
  };

  const startDemo = () => {
    setDemoActive(true);
    setDemoStepIndex(0);
    setRole('kabadiwala');
    setActiveTab('home');
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        lang,
        setLang,
        isOnline,
        setIsOnline,
        activeTab,
        setActiveTab,
        lots,
        addLot,
        updateLotStatus,
        recyclers,
        setRecyclers,
        transactions,
        completeHandoverAndPay,
        priceBoard,
        speakText,
        t,
        MATERIALS,
        demoActive,
        setDemoActive,
        demoStepIndex,
        advanceDemoStep,
        startDemo,
        currentDemoStep: DEMO_STEPS[demoStepIndex]
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
