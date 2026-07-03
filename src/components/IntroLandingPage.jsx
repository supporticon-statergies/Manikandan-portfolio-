import { motion } from 'framer-motion';

// ── EnterButton ──────────────────────────────────────────────
function EnterButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      id="enter-site-btn"
      aria-label="Enter Manikandan's personal branding profile"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      style={{
        marginTop: '48px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: '14px 32px',
        background: 'transparent',
        border: '1.5px solid #2FA866',
        borderRadius: '100px',
        cursor: 'pointer',
        color: '#1e7b48',
        fontSize: '13px',
        fontWeight: '600',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        fontFamily: 'Inter, sans-serif',
        transition: 'background 0.22s ease, color 0.22s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#2FA866';
        e.currentTarget.style.color = '#FFFFFF';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = '#1e7b48';
      }}
    >
      Explore Profile
      <motion.svg
        width="16" height="16" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </motion.svg>
    </motion.button>
  );
}

// ── IntroLandingPage ─────────────────────────────────────────
export default function IntroLandingPage({ onEnter }) {
  return (
    <motion.div
      key="intro"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#F8FFFA',
      }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Radial green glow behind content */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '680px',
        height: '480px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(47, 168, 102, 0.10) 0%, rgba(47, 168, 102, 0.04) 45%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Top-left corner accent */}
      <motion.div
        className="intro-corner-tl"
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '260px', height: '260px',
          borderRight: '1px solid #D7F0DE',
          borderBottom: '1px solid #D7F0DE',
          borderBottomRightRadius: '260px',
          pointerEvents: 'none',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Bottom-right corner accent */}
      <motion.div
        className="intro-corner-br"
        style={{
          position: 'absolute',
          bottom: 0, right: 0,
          width: '200px', height: '200px',
          borderLeft: '1px solid #D7F0DE',
          borderTop: '1px solid #D7F0DE',
          borderTopLeftRadius: '200px',
          pointerEvents: 'none',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      />

      {/* Centered Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 24px',
        maxWidth: '560px',
        width: '100%',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.72, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '32px' }}
        >
          <img
            src={`${import.meta.env.BASE_URL}sir_profile.jpeg`}
            alt="Manikandan"
            className="intro-logo"
            style={{
              height: '140px',
              width: '140px',
              minWidth: '140px',
              minHeight: '140px',
              flexShrink: 0,
              aspectRatio: '1/1',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #2FA866',
              boxShadow: '0 8px 24px rgba(47, 168, 102, 0.25)',
            }}
          />
        </motion.div>

        {/* Thin accent line — green */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.55, delay: 0.65, ease: 'easeOut' }}
          style={{
            width: '40px',
            height: '2px',
            background: 'linear-gradient(to right, #2FA866, #34A853)',
            borderRadius: '2px',
            marginBottom: '28px',
            transformOrigin: 'left center',
          }}
        />

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(28px, 6vw, 38px)',
            fontWeight: '700',
            color: '#1F1F1F',
            lineHeight: '1.25',
            letterSpacing: '-0.025em',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '4px',
          }}
        >
          Manikandan
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: 'easeOut' }}
          style={{
            fontSize: 'clamp(16px, 4vw, 20px)',
            fontWeight: '600',
            color: '#2FA866',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '20px',
          }}
        >
          - The Support Expert
        </motion.p>

        {/* Sub-line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.92, ease: 'easeOut' }}
          style={{
            fontSize: '14.5px',
            color: '#5B5B5B',
            lineHeight: '1.7',
            maxWidth: '420px',
          }}
        >
          10+ years scaling global support operations for Fortune 100 brands, now designing infrastructure that makes SaaS customers stay.
        </motion.p>

        {/* Enter CTA */}
        <EnterButton onClick={onEnter} />

        {/* Bottom label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          style={{
            marginTop: '56px',
            fontSize: '11px',
            color: '#BABABA',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          look into
        </motion.p>
      </div>
    </motion.div>
  );
}
