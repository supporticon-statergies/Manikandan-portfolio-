import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ManagerProfileCard from './ManagerProfileCard';
import SectionTabs from './SectionTabs';
import HomeSection from './HomeSection';
import VideoSection from './VideoSection';
import AboutSection from './AboutSection';
import { siteConfig } from '../config/siteConfig';

const pageVariants = {
  enter: { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const sections = {
  home: HomeSection,
  video: VideoSection,
  about: AboutSection,
};

export default function MainLayout() {
  const [activeTab, setActiveTab] = useState('home');

  const ActiveSection = sections[activeTab];

  return (
    <motion.div
      className="min-h-screen"
      style={{ background: 'linear-gradient(160deg, #F8FFFA 0%, #F6FCF7 50%, #F8FFFA 100%)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* ── Top bar ── */}
      <header
        className="sticky top-0 z-40 px-4 py-3 sm:px-6"
        style={{
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(215, 240, 222, 0.8)',
          boxShadow: '0 1px 12px rgba(50, 100, 70, 0.05)',
        }}
      >
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
          {/* Logo + Company Name (left) */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div
              className="w-8 h-8 rounded-xl overflow-hidden flex-shrink-0"
              style={{ boxShadow: '0 2px 8px rgba(47, 168, 102, 0.3)' }}
            >
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt={siteConfig.company.name} className="w-full h-full object-contain bg-white p-0.5" />
            </div>
            <span
              className="text-sm font-bold hidden xs:block sm:block"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: '#1e7b48',
              }}
            >
              {siteConfig.company.name}
            </span>
          </div>

          {/* Tabs (center/right) */}
          <SectionTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </header>

      {/* ── Main content ── */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-5 sm:pt-6">
        {/* Manager Profile Card */}
        <div className="mb-6">
          <ManagerProfileCard />
        </div>

        {/* Section content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ActiveSection />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── Footer ── */}
      <footer
        className="mt-8 py-5 px-4 text-center"
        style={{ borderTop: '1px solid rgba(215, 240, 222, 0.8)' }}
      >
        <p className="text-xs" style={{ color: '#7A7A7A' }}>
          © {new Date().getFullYear()} {siteConfig.company.name} · {siteConfig.company.tagline}
        </p>
        <p className="text-xs mt-1" style={{ color: '#BABABA' }}>
          {siteConfig.social.website.replace('https://', '')}
        </p>
      </footer>
    </motion.div>
  );
}
