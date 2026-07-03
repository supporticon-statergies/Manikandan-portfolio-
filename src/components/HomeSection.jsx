import { motion } from 'framer-motion';
import {
  Bot, Headphones, BarChart3, Zap, Shield, Puzzle,
  TrendingUp, Users, Clock, Star,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import SectionHeader from './SectionHeader';

const iconMap = { Bot, Headphones, BarChart3, Zap, Shield, Puzzle, TrendingUp, Users, Clock, Star };

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08 },
  }),
};

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(50, 100, 70, 0.12)' }}
      className="group p-5 rounded-2xl cursor-default transition-all duration-300"
      style={{
        background: '#FFFFFF',
        border: '1px solid #D7F0DE',
        boxShadow: '0 2px 12px rgba(50, 100, 70, 0.05)',
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: 'rgba(47, 168, 102, 0.1)',
          border: '1px solid rgba(47, 168, 102, 0.22)',
        }}
      >
        {Icon && <Icon className="w-5 h-5" style={{ color: '#1e7b48' }} />}
      </div>
      <h3 className="font-bold text-sm mb-1.5" style={{ color: '#1F1F1F', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {service.title}
      </h3>
      <p className="text-xs leading-relaxed" style={{ color: '#5B5B5B' }}>
        {service.description}
      </p>
    </motion.div>
  );
}

function TrustCard({ point, index }) {
  const Icon = iconMap[point.icon];
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex items-start gap-4 p-4 rounded-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(47, 168, 102, 0.05), rgba(246, 252, 247, 0.8))',
        border: '1px solid #D7F0DE',
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{
          background: 'linear-gradient(135deg, #2FA866, #1e7b48)',
          boxShadow: '0 4px 12px rgba(47, 168, 102, 0.35)',
        }}
      >
        {Icon && <Icon className="w-4.5 h-4.5 text-white" />}
      </div>
      <div>
        <h4 className="font-bold text-sm mb-1" style={{ color: '#1F1F1F', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {point.title}
        </h4>
        <p className="text-xs leading-relaxed" style={{ color: '#5B5B5B' }}>
          {point.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function HomeSection() {
  return (
    <div className="pb-8">
      {/* ── Hero ── */}
      <motion.section
        className="relative overflow-hidden rounded-3xl mb-8 p-6 sm:p-10"
        style={{
          background: 'linear-gradient(135deg, #F6FCF7 0%, #F2FBF4 60%, #F8FFFA 100%)',
          border: '1px solid #D7F0DE',
          boxShadow: '0 4px 24px rgba(50, 100, 70, 0.06)',
        }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Soft background blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-30 translate-x-1/3 -translate-y-1/3"
          style={{ background: 'radial-gradient(circle, rgba(47, 168, 102, 0.15), transparent)' }} />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-25 -translate-x-1/4 translate-y-1/4"
          style={{ background: 'radial-gradient(circle, rgba(47, 168, 102, 0.15), transparent)' }} />

        <div className="relative z-10 max-w-lg">
          <motion.span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{
              background: 'rgba(255,255,255,0.85)',
              color: '#1e7b48',
              border: '1px solid rgba(47, 168, 102, 0.35)',
            }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            ✦ {siteConfig.company.industry}
          </motion.span>

          <motion.h1
            className="text-2xl sm:text-4xl font-extrabold leading-tight mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1F1F1F' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Intelligent Support,{' '}
            <span style={{ color: '#1e7b48' }}>
              Delivered at Scale
            </span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base leading-relaxed mb-6"
            style={{ color: '#5B5B5B' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {siteConfig.company.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href={siteConfig.social.website}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-website"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #2FA866, #1e7b48)',
                boxShadow: '0 4px 16px rgba(47, 168, 102, 0.35)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 22px rgba(30, 123, 72, 0.45)';
                e.currentTarget.style.opacity = '0.93';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(47, 168, 102, 0.35)';
                e.currentTarget.style.opacity = '1';
              }}
            >
              Visit Website →
            </a>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-whatsapp"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.9)',
                color: '#1e7b48',
                border: '1.5px solid rgba(47, 168, 102, 0.45)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(47, 168, 102, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.9)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              💬 WhatsApp Us
            </a>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          className="hero-stats-strip relative z-10 grid grid-cols-3 gap-4 mt-8 pt-8"
          style={{ borderTop: '1px solid rgba(47, 168, 102, 0.25)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { value: '500+', label: 'Businesses Served' },
            { value: '95%', label: 'CSAT Score' },
            { value: '3×', label: 'Faster Resolution' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl sm:text-2xl font-extrabold" style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: '#1e7b48',
              }}>
                {stat.value}
              </p>
              <p className="text-xs mt-0.5" style={{ color: '#7A7A7A' }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── What We Do ── */}
      <section className="mb-10">
        <SectionHeader
          eyebrow="Our Services"
          title="What We Do"
          description="End-to-end AI support infrastructure for modern businesses."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {siteConfig.services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="mb-10">
        <SectionHeader
          eyebrow="Why Mani"
          title="Why Choose Us"
          description="Measurable outcomes, trusted by teams who demand more."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {siteConfig.trustPoints.map((point, i) => (
            <TrustCard key={point.title} point={point} index={i} />
          ))}
        </div>
      </section>

      {/* ── Mission / Vision ── */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Our Mission', text: siteConfig.company.mission, icon: '🎯' },
            { label: 'Our Vision', text: siteConfig.company.vision, icon: '🚀' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="p-5 sm:p-6 rounded-2xl"
              style={{
                background: i === 0
                  ? 'linear-gradient(135deg, rgba(47, 168, 102, 0.07), #FFFFFF)'
                  : 'linear-gradient(135deg, rgba(246, 252, 247, 0.8), #FFFFFF)',
                border: '1px solid #D7F0DE',
                boxShadow: '0 2px 12px rgba(50, 100, 70, 0.05)',
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-sm mb-2" style={{ color: '#1F1F1F', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {item.label}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: '#5B5B5B' }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
