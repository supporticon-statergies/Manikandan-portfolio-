import { motion } from 'framer-motion';

export default function ServiceCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      style={{
        background: '#FFFFFF',
        border: '1px solid #D7F0DE',
        borderRadius: '14px',
        padding: '28px 24px',
        cursor: 'default',
        transition: 'box-shadow 0.22s ease, border-color 0.22s ease',
        boxShadow: '0 1px 4px rgba(50, 100, 70, 0.04)',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(47, 168, 102, 0.14), 0 2px 8px rgba(50,100,70,0.05)';
        e.currentTarget.style.borderColor = '#2FA866';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 4px rgba(50, 100, 70, 0.04)';
        e.currentTarget.style.borderColor = '#D7F0DE';
      }}
    >
      {/* Top-right corner accent — green */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '60px',
        height: '60px',
        borderLeft: '1px solid rgba(47, 168, 102, 0.14)',
        borderBottom: '1px solid rgba(47, 168, 102, 0.14)',
        borderBottomLeftRadius: '60px',
        pointerEvents: 'none',
      }} />

      {/* Number */}
      <p style={{
        fontSize: '11px',
        fontWeight: '700',
        letterSpacing: '0.1em',
        color: '#2FA866',
        marginBottom: '18px',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {String(index + 1).padStart(2, '0')}
      </p>

      {/* Title */}
      <h3 style={{
        fontSize: '15px',
        fontWeight: '600',
        color: '#1F1F1F',
        marginBottom: '10px',
        lineHeight: '1.4',
        letterSpacing: '-0.01em',
      }}>
        {item.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: '13px',
        color: '#5B5B5B',
        lineHeight: '1.7',
      }}>
        {item.description}
      </p>
    </motion.div>
  );
}
