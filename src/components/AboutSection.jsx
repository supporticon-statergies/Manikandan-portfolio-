import { motion } from 'framer-motion';
import { Quote, Building2, Briefcase } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import SectionHeader from './SectionHeader';
import SocialLinksGrid from './SocialLinksGrid';

export default function AboutSection() {
  const { manager, company } = siteConfig;

  return (
    <motion.div
      className="pb-8"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* ── Meet the Founder ── */}
      <section className="mb-10">
        <SectionHeader eyebrow="The Founder" title="Meet the Person Behind Supporticon" />

        <div className="flex flex-col sm:flex-row gap-6 items-start">
          {/* Photo card */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div
              className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden"
              style={{
                border: '3px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #2FA866, #34A853)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                boxShadow: '0 12px 36px rgba(47, 168, 102, 0.22)',
              }}
            >
              <img
                src={manager.photo}
                alt={manager.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Name + Role under photo */}
            <div className="mt-3 text-center">
              <p className="text-sm font-bold" style={{ color: '#1F1F1F', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {manager.name}
              </p>
              <p className="text-xs font-medium mt-0.5" style={{ color: '#1e7b48' }}>
                {manager.role}
              </p>
              <p className="text-xs mt-0.5" style={{ color: '#7A7A7A' }}>
                {company.name}
              </p>
            </div>
          </motion.div>

          {/* Bio */}
          <div className="flex-1 min-w-0">
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#5B5B5B' }}>
              {manager.bio}
            </p>

            {/* Quote */}
            <motion.div
              className="relative p-4 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(47, 168, 102, 0.07), rgba(246, 252, 247, 0.8))',
                border: '1px solid #D7F0DE',
              }}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Quote className="w-5 h-5 mb-2" style={{ color: '#2FA866' }} />
              <p
                className="text-sm font-medium italic leading-relaxed"
                style={{ color: '#1F1F1F', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {manager.quote}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div
                  className="w-6 h-px"
                  style={{ background: 'linear-gradient(to right, #2FA866, #34A853)' }}
                />
                <span className="text-xs font-semibold" style={{ color: '#7A7A7A' }}>
                  {manager.name}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── About the Company ── */}
      <section className="mb-10">
        <SectionHeader eyebrow="Our Company" title="About Supporticon" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Company card */}
          <motion.div
            className="p-5 rounded-2xl"
            style={{
              background: '#FFFFFF',
              border: '1px solid #D7F0DE',
              boxShadow: '0 2px 16px rgba(50, 100, 70, 0.05)',
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
              style={{
                background: 'rgba(47, 168, 102, 0.12)',
                border: '1px solid rgba(47, 168, 102, 0.25)',
              }}
            >
              <Building2 className="w-5 h-5" style={{ color: '#1e7b48' }} />
            </div>
            <h3 className="font-bold text-sm mb-2" style={{ color: '#1F1F1F', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Who We Are
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: '#5B5B5B' }}>
              {company.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[company.industry, `Est. ${company.founded}`].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: 'rgba(47, 168, 102, 0.1)',
                    color: '#1e7b48',
                    border: '1px solid rgba(47, 168, 102, 0.22)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* What we help clients achieve */}
          <motion.div
            className="p-5 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(47, 168, 102, 0.05), rgba(246, 252, 247, 0.8))',
              border: '1px solid #D7F0DE',
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
              style={{
                background: 'rgba(47, 168, 102, 0.15)',
                border: '1px solid rgba(47, 168, 102, 0.28)',
              }}
            >
              <Briefcase className="w-5 h-5" style={{ color: '#1e7b48' }} />
            </div>
            <h3 className="font-bold text-sm mb-2" style={{ color: '#1F1F1F', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              What We Help You Achieve
            </h3>
            <ul className="space-y-2">
              {[
                'Reduce support costs by up to 60%',
                'Resolve 80% of queries without human agents',
                'Deliver 24/7 support across every channel',
                'Scale from 100 to 100,000 customers seamlessly',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs" style={{ color: '#5B5B5B' }}>
                  <span className="mt-0.5 font-bold flex-shrink-0" style={{ color: '#2FA866' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── Connect with Us ── */}
      <section>
        <SectionHeader
          eyebrow="Get In Touch"
          title="Connect With Us"
          description="Reach us on the platform that works best for you. We're always happy to connect."
        />
        <SocialLinksGrid />
      </section>
    </motion.div>
  );
}
