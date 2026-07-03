import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, description, centered = false }) {
  return (
    <motion.div
      className={`mb-10 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && (
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
          style={{
            background: 'rgba(47, 168, 102, 0.12)',
            color: '#1e7b48',
            border: '1px solid rgba(47, 168, 102, 0.28)',
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="text-2xl sm:text-3xl font-bold leading-tight"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: '#1F1F1F',
        }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed max-w-2xl" style={{ color: '#5B5B5B' }}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
