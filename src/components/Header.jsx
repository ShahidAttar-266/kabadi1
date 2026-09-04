import React from 'react';
import { useApp } from '../context/AppContext';
import { Recycle, Volume2, Globe, Wifi, WifiOff, PlayCircle, ShieldCheck, UserCheck, Factory } from 'lucide-react';

export const Header = () => {
  const { role, setRole, lang, setLang, isOnline, setIsOnline, t, startDemo, speakText } = useApp();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
    const msg = newLang === 'mr' ? 'भाषा मराठी मध्ये बदलली' : newLang === 'hi' ? 'भाषा हिंदी में बदली' : 'Language set to English';
    speakText(msg);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Brand Logo */}
        <div className="logo-brand">
          <div className="logo-icon-bg">
            <Recycle size={26} />
          </div>
          <div className="logo-text">
            <h1>{t('appTitle')}</h1>
            <p>{t('tagline')}</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="header-actions">
          {/* Guided Demo Button */}
          <button className="btn-demo-next pulse-highlight" onClick={startDemo} title="Run PRD 15-step scenario demo">
            <PlayCircle size={18} />
            <span>{t('startDemo')}</span>
          </button>

          {/* Role Switcher */}
          <div className="role-selector">
            <button
              className={`role-btn ${role === 'kabadiwala' ? 'active' : ''}`}
              onClick={() => setRole('kabadiwala')}
            >
              <UserCheck size={14} />
              <span>{t('collectorView')}</span>
            </button>

            <button
              className={`role-btn ${role === 'recycler' ? 'active' : ''}`}
              onClick={() => setRole('recycler')}
            >
              <Factory size={14} />
              <span>{t('recyclerView')}</span>
            </button>

            <button
              className={`role-btn ${role === 'admin' ? 'active' : ''}`}
              onClick={() => setRole('admin')}
            >
              <ShieldCheck size={14} />
              <span>{t('adminView')}</span>
            </button>
          </div>

          {/* Online/Offline Toggle */}
          <button
            className={`status-badge ${isOnline ? 'status-online' : 'status-offline'}`}
            onClick={() => setIsOnline(!isOnline)}
            title="Click to toggle network connection state"
          >
            {isOnline ? <Wifi size={14} /> : <WifiOff size={14} />}
            <span className={`dot-indicator ${isOnline ? 'dot-online' : 'dot-offline'}`}></span>
            <span>{isOnline ? t('online') : t('offline')}</span>
          </button>

          {/* Language Selector */}
          <div className="icon-pill-btn">
            <Globe size={16} />
            <select
              value={lang}
              onChange={handleLanguageChange}
              style={{ background: 'transparent', border: 'none', color: 'inherit', fontWeight: 600, cursor: 'pointer' }}
            >
              <option value="en" style={{ background: '#1e293b' }}>English</option>
              <option value="mr" style={{ background: '#1e293b' }}>मराठी (Marathi)</option>
              <option value="hi" style={{ background: '#1e293b' }}>हिंदी (Hindi)</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};
