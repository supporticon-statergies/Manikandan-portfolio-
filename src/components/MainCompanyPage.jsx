import { useState } from 'react';
import { motion } from 'framer-motion';
import BrandSidebar from './BrandSidebar';
import AboutMeSection from './AboutMeSection';
import WhatWeDoSection from './WhatWeDoSection';
import SocialChannelsSection from './SocialChannelsSection';
import BestPracticesSection from './BestPracticesSection';
import VideoSection from './VideoSection';
import { siteConfig } from '../config/siteConfig';

export default function MainCompanyPage() {
  const [currentPage, setCurrentPage] = useState('profile');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <motion.div
      key="main"
      className="site-layout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {/* ── Sidebar panel ── */}
      <div className="sidebar-panel">
        <BrandSidebar />
      </div>

      {/* ── Right content ── */}
      <motion.main
        className="content-panel"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Subtle top-right background wash */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '320px',
          background: 'radial-gradient(ellipse at 80% 0%, rgba(47, 168, 102, 0.07) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {currentPage === 'profile' ? (
            <>
              <AboutMeSection />
              <WhatWeDoSection />
              <VideoSection />
              <SocialChannelsSection onNavigate={handleNavigate} />
            </>
          ) : (
            <BestPracticesSection onBack={() => handleNavigate('profile')} />
          )}
        </div>
      </motion.main>
    </motion.div>
  );
}
