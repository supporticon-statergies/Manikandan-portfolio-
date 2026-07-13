import { useState } from 'react';
import { motion } from 'framer-motion';
import AboutMeSection from './AboutMeSection';
import WhatWeDoSection from './WhatWeDoSection';
import CredibilitySection from './CredibilitySection';
import SocialChannelsSection from './SocialChannelsSection';
import BestPracticesSection from './BestPracticesSection';
import VideoSection from './VideoSection';

export default function MainCompanyPage() {
  const [currentPage, setCurrentPage] = useState('profile');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <motion.div
      key="main"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FFFA' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {/* ── TOP HEADER ── */}
      <header style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #D7F0DE',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 12px rgba(47, 168, 102, 0.05)',
      }}>
        <div className="header-container">
          {/* Identity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => handleNavigate('profile')}>
            <img
              src={`${import.meta.env.BASE_URL}ceo.png`}
              alt="Mani"
              style={{
                height: '36px',
                width: '36px',
                minWidth: '36px',
                minHeight: '36px',
                flexShrink: 0,
                aspectRatio: '1/1',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1.5px solid #2FA866',
              }}
            />
            <div>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#1F1F1F', lineHeight: 1.1 }}>
                Manikandan
              </p>
              <p style={{ fontSize: '12px', color: '#2FA866', fontWeight: '600', letterSpacing: '0.04em' }}>
                The Support Expert
              </p>
            </div>
          </div>

          {/* Action Link (WhatsApp Connect) */}
          <a
            href="https://wa.me/918667347679"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: '600',
              color: '#FFFFFF',
              background: '#2FA866',
              padding: '8px 16px',
              borderRadius: '20px',
              transition: 'background 0.18s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#1e7b48'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#2FA866'}
          >
            Connect
          </a>
        </div>
      </header>

      {/* ── Main content area (Centered Column) ── */}
      <motion.main
        className="main-content-container"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Subtle background glow */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: '10%',
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(47, 168, 102, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {currentPage === 'profile' ? (
            <>
              <AboutMeSection />
              <WhatWeDoSection />
              <CredibilitySection />
              <VideoSection />
              <SocialChannelsSection onNavigate={handleNavigate} />
            </>
          ) : (
            <BestPracticesSection onBack={() => handleNavigate('profile')} />
          )}
        </div>
      </motion.main>

      {/* ── Footer ── */}
      <footer className="footer-container">
        <div style={{ margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#5B5B5B' }}>
            © {new Date().getFullYear()} Manikandan · Mani The Support Expert
          </p>
          <p style={{ fontSize: '11px', color: '#7A7A7A', marginTop: '4px' }}>
            Infrastructure thinking scaled down to founder context.
          </p>
        </div>
      </footer>
    </motion.div>
  );
}
