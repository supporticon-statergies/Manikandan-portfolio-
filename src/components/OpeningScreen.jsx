import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function OpeningScreen({ onEnter }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 40%, #f0f9ff 70%, #dcfce7 100%)',
      }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Decorative background circles */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, #4ade80, transparent)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"
        style={{ background: 'radial-gradient(circle, #38bdf8, transparent)' }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #4ade80, transparent)' }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Logo */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden"
            style={{ background: 'white', boxShadow: '0 25px 60px rgba(74, 222, 128, 0.25), 0 8px 24px rgba(56, 189, 248, 0.15)' }}
          >
            <img
              src="/logo.png"
              alt={`${siteConfig.company.name} logo`}
              className="w-full h-full object-contain p-3"
            />
          </div>

          <div className="text-center">
            <h1
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: 'linear-gradient(135deg, #16a34a, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {siteConfig.company.name}
            </h1>
            <p className="mt-2 text-sm sm:text-base font-medium" style={{ color: '#475569' }}>
              {siteConfig.company.tagline}
            </p>
          </div>
        </motion.div>

        {/* Divider line */}
        <motion.div
          className="w-16 h-px"
          style={{ background: 'linear-gradient(to right, #4ade80, #38bdf8)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />

        {/* Tagline */}
        <motion.p
          className="text-sm sm:text-base text-center max-w-sm"
          style={{ color: '#64748b', lineHeight: '1.7' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Company Profile — discover who we are and what we do
        </motion.p>

        {/* CTA Arrow */}
        <motion.button
          id="enter-site-btn"
          onClick={onEnter}
          className="mt-4 flex flex-col items-center gap-2 group cursor-pointer border-none bg-transparent"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          aria-label="Enter company profile"
        >
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#94a3b8' }}>
            Explore
          </span>
          <motion.div
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-2"
            style={{
              background: 'linear-gradient(135deg, #4ade80, #38bdf8)',
              borderColor: 'rgba(255,255,255,0.6)',
              boxShadow: '0 8px 32px rgba(74, 222, 128, 0.4)',
            }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.12, boxShadow: '0 12px 40px rgba(74, 222, 128, 0.55)' }}
            whileTap={{ scale: 0.94 }}
          >
            <ArrowDown className="w-6 h-6 text-white" strokeWidth={2.5} />
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
