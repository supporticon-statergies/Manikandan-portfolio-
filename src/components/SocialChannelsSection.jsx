import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

// ── Brand SVG icons ──────────────────────────────────────────
function LinkedInIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
}
function InstagramIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
}
function YouTubeIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
}
function GlobeIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>;
}
function WhatsAppIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
}
function BookOpenIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  );
}

const CHANNELS = [
  { key: 'linkedin',  label: 'LinkedIn',   Icon: LinkedInIcon },
  { key: 'instagram', label: 'Instagram',  Icon: InstagramIcon },
  { key: 'website',   label: 'Website',    Icon: GlobeIcon },
  { key: 'youtube',   label: 'YouTube',    Icon: YouTubeIcon },
  { key: 'insights',  label: 'Support Insights', Icon: BookOpenIcon, isPageLink: true, pageKey: 'best-practices', handle: '10 SaaS Best Practices' },
  { key: 'whatsapp',  label: 'WhatsApp',   Icon: WhatsAppIcon },
];

export default function SocialChannelsSection({ onNavigate }) {
  const { social } = siteConfig;
  return (
    <section id="social-channels" style={{ marginBottom: '64px' }}>

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
        Connect
      </motion.p>

      {/* Heading */}
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
          marginBottom: '14px',
          lineHeight: '1.2',
        }}
      >
        Social Channels
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.12 }}
        className="section-intro-text"
        style={{
          fontSize: '15px',
          color: '#5B5B5B',
          lineHeight: '1.75',
          maxWidth: '82%',
          marginBottom: '40px',
        }}
      >
        Find us on the platforms below — connect, follow our journey, or reach out directly.
      </motion.p>

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
          marginBottom: '36px',
          transformOrigin: 'left center',
        }}
      />

      {/* Grid of channels */}
      <div
        className="channels-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
        }}
      >
        {CHANNELS.map((item, i) => {
          const { key, label, Icon, isPageLink, pageKey } = item;
          
          let url = '';
          let handleText = '';
          
          if (isPageLink) {
            handleText = item.handle;
          } else {
            const ch = social[key];
            if (!ch) return null;
            url = ch.url;
            handleText = ch.handle;
          }

          const cardContent = (
            <>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: '#F2FBF4',
                border: '1px solid #CFEAD8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2FA866',
              }}>
                <Icon size={20} />
              </div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1F1F1F', lineHeight: '1.3' }}>
                  {label}
                </p>
                <p style={{ fontSize: '11px', color: '#7A7A7A', marginTop: '3px' }}>
                  {handleText}
                </p>
              </div>
            </>
          );

          const motionStyles = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            padding: '24px 16px',
            background: '#FFFFFF',
            border: '1px solid #D7F0DE',
            borderRadius: '14px',
            textDecoration: 'none',
            color: '#1F1F1F',
            cursor: 'pointer',
            transition: 'border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease',
            boxShadow: '0 1px 4px rgba(50, 100, 70, 0.04)',
            textAlign: 'center',
          };

          const handleMouseEnter = (e) => {
            e.currentTarget.style.borderColor = '#2FA866';
            e.currentTarget.style.background = '#F6FCF7';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(47, 168, 102, 0.14)';
          };

          const handleMouseLeave = (e) => {
            e.currentTarget.style.borderColor = '#D7F0DE';
            e.currentTarget.style.background = '#FFFFFF';
            e.currentTarget.style.boxShadow = '0 1px 4px rgba(50, 100, 70, 0.04)';
          };

          if (isPageLink) {
            return (
              <motion.button
                key={key}
                id={`social-channel-${key}`}
                onClick={() => onNavigate && onNavigate(pageKey)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: i * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                style={{
                  ...motionStyles,
                  borderStyle: 'dashed',
                  borderWidth: '1.5px',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {cardContent}
              </motion.button>
            );
          }

          return (
            <motion.a
              key={key}
              id={`social-channel-${key}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              style={motionStyles}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {cardContent}
            </motion.a>
          );
        })}
      </div>

    </section>
  );
}
