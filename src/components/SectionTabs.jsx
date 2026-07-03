import { motion } from 'framer-motion';
import { Home, PlayCircle, Info } from 'lucide-react';

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'video', label: 'Video', icon: PlayCircle },
  { id: 'about', label: 'About', icon: Info },
];

export default function SectionTabs({ activeTab, onTabChange }) {
  return (
    <nav
      className="flex items-center gap-1 p-1 rounded-2xl"
      style={{
        background: 'rgba(255,255,255,0.95)',
        border: '1px solid #D7F0DE',
        boxShadow: '0 2px 12px rgba(50, 100, 70, 0.06)',
      }}
      aria-label="Main navigation"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <motion.button
            key={tab.id}
            id={`nav-tab-${tab.id}`}
            onClick={() => onTabChange(tab.id)}
            className="relative flex items-center gap-2 px-4 py-2.5 sm:px-5 rounded-xl text-sm font-semibold transition-colors duration-200 cursor-pointer border-none"
            style={{
              color: isActive ? '#ffffff' : '#5B5B5B',
              background: 'transparent',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
            whileTap={{ scale: 0.95 }}
            aria-current={isActive ? 'page' : undefined}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, #2FA866, #1e7b48)',
                  boxShadow: '0 4px 14px rgba(47, 168, 102, 0.4)',
                }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            <Icon className="w-4 h-4 relative z-10 flex-shrink-0" strokeWidth={isActive ? 2.5 : 2} />
            <span className="relative z-10 hidden sm:block">{tab.label}</span>
          </motion.button>
        );
      })}
    </nav>
  );
}
