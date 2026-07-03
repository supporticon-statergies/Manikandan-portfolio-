import { motion } from 'framer-motion';
import introVideo from '../assets/1st.mp4';
import featuresVideo from '../assets/featuresmp4.mp4';
import onboardVideo from '../assets/Onboarding final.mp4';
import posterImg from '../assets/mani_sir.jpeg';

const videoDemos = [
  {
    id: 'intro',
    title: 'Introductory Overview',
    description: 'A brief introduction to how the support infrastructure works and empowers SaaS startups.',
    src: introVideo,
    poster: posterImg,
  },
  {
    id: 'features',
    title: 'Platform Features Overview',
    description: 'Deep dive into the L1 AI-powered support intelligence, Notifications system, and Ticketing dashboard.',
    src: featuresVideo,
    poster: posterImg,
  },
  {
    id: 'onboard',
    title: 'Founder Onboarding Walkthrough',
    description: 'Step-by-step walkthrough of setting up support workflows, syncing alerts, and customizing insights.',
    src: onboardVideo,
    poster: posterImg,
  },
];

export default function VideoSection() {
  return (
    <section id="video-demos" style={{ marginBottom: '64px' }}>
      {/* Section eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{
          fontSize: '11px',
          fontWeight: '600',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#2FA866',
          marginBottom: '14px',
        }}
      >
        Demos
      </motion.p>

      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.06 }}
        style={{
          fontSize: 'clamp(24px, 4vw, 32px)',
          fontWeight: '700',
          color: '#1F1F1F',
          letterSpacing: '-0.025em',
          marginBottom: '18px',
          lineHeight: '1.2',
        }}
      >
        Watch In Action
      </motion.h2>

      {/* Intro paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.12 }}
        className="section-intro-text"
        style={{
          fontSize: '15px',
          color: '#5B5B5B',
          lineHeight: '1.8',
          maxWidth: '82%',
          textAlign: 'justify',
          marginBottom: '36px',
        }}
      >
        See how our customer support systems and tools streamline L1 support, notify founders of critical concerns, and scale operations.
      </motion.p>

      {/* Video Grid */}
      <div
        className="video-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '56px',
        }}
      >
        {videoDemos.map((demo, index) => (
          <motion.div
            key={demo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            style={{
              background: '#FFFFFF',
              border: '1px solid #D7F0DE',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(47, 168, 102, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#2FA866';
              e.currentTarget.style.boxShadow = '0 12px 36px rgba(47, 168, 102, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#D7F0DE';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(47, 168, 102, 0.06)';
            }}
          >
            {/* HTML5 Video Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/9',
                background: '#000000',
              }}
            >
              <video
                src={demo.src}
                poster={demo.poster}
                controls
                playsInline
                preload="metadata"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Video Meta Info */}
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#1F1F1F',
                  marginBottom: '8px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {demo.title}
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  color: '#5B5B5B',
                  lineHeight: '1.6',
                  margin: 0,
                }}
              >
                {demo.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Warm divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          height: '1.5px',
          background: 'linear-gradient(to right, #2FA866 0%, rgba(47,168,102,0.2) 60%, transparent 100%)',
          borderRadius: '2px',
          transformOrigin: 'left center',
        }}
      />
    </section>
  );
}
