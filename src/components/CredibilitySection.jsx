import { motion } from 'framer-motion';
import { Quote, ShieldCheck, Sparkles, Zap } from 'lucide-react';

const INSIGHTS = [
  {
    title: 'The L1/L2/L3 tier model',
    desc: 'The same tier model Fortune brands use to handle millions of tickets is the same structure Helpdude can implement for a 20-customer SaaS — just without the enterprise cost.',
    icon: ShieldCheck,
  },
  {
    title: 'The weekly insight digest',
    desc: 'The same visibility digest large support operations generate weekly for product teams is what founders need, and Helpdude can automate it for teams with zero visibility currently.',
    icon: Zap,
  },
  {
    title: 'The knowledge base architecture',
    desc: 'The same structure large brands use to reduce repeat contacts is behind Helpdude’s self-service thinking to save founders support hours.',
    icon: Sparkles,
  },
];

export default function CredibilitySection() {
  return (
    <section id="credibility" style={{ marginBottom: '64px' }}>
      {/* Eyebrow */}
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
        Credibility
      </motion.p>

      {/* Main Title */}
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
          marginBottom: '20px',
          lineHeight: '1.2',
        }}
      >
        Why founders should listen to Manikandan — and not anyone else
      </motion.h2>

      {/* Intro */}
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
          marginBottom: '32px',
        }}
      >
        This is the factual answer to the question every founder will silently ask before they take any advice: <strong>"Has this person actually done what they're telling me to do?"</strong>
      </motion.p>

      {/* Practitioner Gap */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{
            background: '#FFFFFF',
            border: '1px solid #D7F0DE',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: '0 4px 20px rgba(50, 100, 70, 0.04)',
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F1F1F', marginBottom: '14px' }}>
            The Practitioner Gap
          </h3>
          <p style={{ fontSize: '14.5px', color: '#5B5B5B', lineHeight: '1.7', marginBottom: '16px', textAlign: 'justify' }}>
            Most customer support advisors in the startup ecosystem have one of two profiles — consultants who studied it, or founders who survived it once. Manikandan is a third profile that is exceptionally rare in India:
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyleType: 'none', paddingLeft: 0 }}>
            {[
              '<strong>10+ years as a hands-on support operations professional</strong> — not a manager watching dashboards, but the person who designed the system that produced those dashboards.',
              '<strong>Part of the teams that built and scaled support operations</strong> for Fortune 100 companies that handle tens of millions of support interactions annually.',
              '<strong>Enterprise frameworks scaled down to founder context</strong> — the frameworks he recommends to a 20-customer SaaS founder are the same ones he helped implement for Fortune 100 global support operations, not invented from a textbook.'
            ].map((bullet, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#5B5B5B', lineHeight: '1.6' }}>
                <span style={{ color: '#2FA866', fontWeight: 'bold', marginTop: '2px' }}>✓</span>
                <span dangerouslySetInnerHTML={{ __html: bullet }} />
              </li>
            ))}
          </ul>
        </motion.div>

        {/* What this means */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F1F1F', marginBottom: '14px' }}>
            What this means for a SaaS founder
          </h3>
          <p style={{ fontSize: '14.5px', color: '#5B5B5B', lineHeight: '1.7', marginBottom: '24px', textAlign: 'justify' }}>
            When you take a support recommendation from Manikandan, you are borrowing infrastructure thinking from companies that have already solved your problem at 10,000x your scale. The gap between what Fortune brands built and what a 50-customer SaaS needs is not as wide as it looks — the principles are identical, only the tooling changes.
          </p>

          {/* Cards Grid */}
          <div className="best-practices-grid" style={{ display: 'grid', gap: '16px' }}>
            {INSIGHTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #D7F0DE',
                    borderRadius: '14px',
                    padding: '24px',
                    boxShadow: '0 4px 20px rgba(50, 100, 70, 0.05)',
                  }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(47, 168, 102, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2FA866',
                    marginBottom: '14px',
                  }}>
                    <Icon size={18} />
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#1F1F1F', marginBottom: '8px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: '#5B5B5B', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Storytelling Quote Block */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'linear-gradient(135deg, rgba(47, 168, 102, 0.08), rgba(246, 252, 247, 0.9))',
          borderLeft: '4px solid #2FA866',
          borderRadius: '0 16px 16px 0',
          padding: '28px',
          marginBottom: '40px',
          position: 'relative',
        }}
      >
        <Quote size={28} style={{ color: 'rgba(47, 168, 102, 0.25)', position: 'absolute', top: '16px', right: '20px' }} />
        <p style={{
          fontSize: '15px',
          fontWeight: '550',
          fontStyle: 'italic',
          color: '#1F1F1F',
          lineHeight: '1.8',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          marginBottom: '14px',
          position: 'relative',
          zIndex: 1,
        }}>
          “When I was setting up support operations for Microsoft’s global team, the first thing we built was a tier model — because volume without structure creates chaos. That’s exactly what happens to a SaaS founder at 100 customers if there’s no system in place. I’ve seen it at 10 million tickets a month and I’ve seen it at 50 tickets a week. The failure mode is identical.”
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '12px', height: '1px', background: '#2FA866' }} />
          <span style={{ fontSize: '12px', fontWeight: '600', color: '#5B5B5B' }}>Manikandan</span>
        </div>
      </motion.div>

      {/* Manifesto statement */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        style={{
          textAlign: 'center',
          padding: '36px 28px',
          background: '#FFFFFF',
          border: '1.5px solid #2FA866',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(47, 168, 102, 0.08)',
        }}
      >
        <span style={{ fontSize: '24px', display: 'inline-block', marginBottom: '12px' }}>🎯</span>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1E7B48', marginBottom: '12px', letterSpacing: '-0.01em' }}>
          Founder’s Unfair Advantage
        </h3>
        <p style={{
          fontSize: '16px',
          fontWeight: '500',
          color: '#1F1F1F',
          lineHeight: '1.75',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          maxWidth: '680px',
          margin: '0 auto',
        }}>
          “I didn’t build Helpdude to sell software. I built it because I spent 10 years building the support infrastructure that made Fortune 100 customers stay — and I got tired of watching SaaS founders lose customers to problems I already know how to solve.”
        </p>
      </motion.div>

      {/* Soft divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          height: '1.5px',
          background: 'linear-gradient(to right, #2FA866 0%, rgba(47,168,102,0.2) 60%, transparent 100%)',
          borderRadius: '2px',
          marginTop: '56px',
          transformOrigin: 'left center',
        }}
      />
    </section>
  );
}
