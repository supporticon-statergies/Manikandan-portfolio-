import BrandPanel from './BrandPanel';
import WhatWeDoSection from './WhatWeDoSection';
import SocialChannelsSection from './SocialChannelsSection';

export default function MainPage() {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: '#ffffff',
      }}
    >
      {/* ── Left: Brand Panel (desktop only sticky sidebar) ── */}
      <div
        className="brand-panel-wrapper"
        style={{
          width: '280px',
          flexShrink: 0,
        }}
      >
        <BrandPanel />
      </div>

      {/* ── Right: Main Content ── */}
      <main
        style={{
          flex: 1,
          minWidth: 0,
          padding: '64px 56px 80px',
          maxWidth: '820px',
          background: '#ffffff',
        }}
      >
        <WhatWeDoSection />
        <SocialChannelsSection />
      </main>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="display: flex; min-height: 100vh"] {
            flex-direction: column;
          }
          .brand-panel-wrapper {
            width: 100% !important;
          }
          .brand-panel-wrapper aside {
            min-height: auto !important;
            height: auto !important;
            position: static !important;
            padding: 32px 24px !important;
            border-right: none !important;
            border-bottom: 1px solid #e5e7eb !important;
            background: #fafafa !important;
          }
          main {
            padding: 40px 24px 64px !important;
          }
        }

        @media (max-width: 480px) {
          main {
            padding: 32px 20px 56px !important;
          }
        }
      `}</style>
    </div>
  );
}
