import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

export default function ManagerProfileCard() {
  return (
    <motion.div
      className="flex items-center gap-3 p-3 rounded-2xl"
      style={{
        background: '#FFFFFF',
        backdropFilter: 'blur(12px)',
        border: '1px solid #D7F0DE',
        boxShadow: '0 4px 20px rgba(50, 100, 70, 0.07)',
      }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Photo */}
      <div
        className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden"
        style={{
          border: '2px solid transparent',
          backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #2FA866, #34A853)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
      >
        <img
          src={siteConfig.manager.photo}
          alt={siteConfig.manager.name}
          className="w-full h-full object-cover"
        />
        {/* Online indicator */}
        <span
          className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white"
          style={{ background: '#2FA866' }}
        />
      </div>

      {/* Info */}
      <div className="min-w-0">
        <p
          className="text-sm font-bold truncate leading-tight"
          style={{ color: '#1F1F1F', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {siteConfig.manager.name}
        </p>
        <p className="text-xs font-medium truncate mt-0.5" style={{ color: '#1e7b48' }}>
          {siteConfig.manager.role}
        </p>
        <p className="text-xs truncate" style={{ color: '#7A7A7A' }}>
          {siteConfig.company.name}
        </p>
      </div>
    </motion.div>
  );
}
