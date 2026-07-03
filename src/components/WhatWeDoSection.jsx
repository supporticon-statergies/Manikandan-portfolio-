import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';
import ServiceCard from './ServiceCard';

export default function WhatWeDoSection() {
  const { whatWeDo } = siteConfig;

  return (
    <section id="what-we-do" style={{ marginBottom: '64px' }}>
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
        Overview
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
        {whatWeDo.heading}
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
        {whatWeDo.intro}
      </motion.p>

      {/* Cards grid */}
      <div className="service-cards-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '16px',
        marginBottom: '56px',
      }}>
        {whatWeDo.items.map((item, index) => (
          <ServiceCard key={item.id} item={item} index={index} />
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
