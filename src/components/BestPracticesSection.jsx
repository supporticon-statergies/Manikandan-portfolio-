import { motion } from 'framer-motion';

const BEST_PRACTICES = [
  {
    id: 1,
    title: 'Support is your best product research lab',
    desc: "Every ticket is a data point. The founder who reads 10 tickets a week knows more about their product gaps than the one running quarterly surveys. Support is the closest you'll ever get to unfiltered customer truth.",
  },
  {
    id: 2,
    title: 'First response time is your brand promise',
    desc: 'Customers don\'t expect instant resolution. They expect to be acknowledged. A response within 1 hour — even just "we\'ve received your query and are on it" — reduces churn risk by over 30%. Silence is the real churn trigger.',
  },
  {
    id: 3,
    title: 'Never let support knowledge live only in one head',
    desc: 'If your best support person quits tomorrow, what breaks? Document every resolution, build a knowledge base from the first 50 tickets. Support that doesn\'t scale is not support — it\'s a time bomb.',
  },
  {
    id: 4,
    title: 'Separate L1, L2, and escalation from day one',
    desc: 'Even with 2 people in support, define what L1 handles (FAQs, how-to, billing) and what gets escalated. Structure prevents panic. Founders who build tiers at 20 customers never scramble at 200.',
  },
  {
    id: 5,
    title: 'CSAT is a lagging indicator — watch reopens',
    desc: 'A customer who contacts you 3 times for the same issue and gives you a 4/5 CSAT is not a happy customer — they\'re a churn risk. Track repeat contact rate. It\'s the most honest signal of unresolved product problems.',
  },
  {
    id: 6,
    title: 'Proactive support beats reactive support every time',
    desc: 'Don\'t wait for customers to report a bug — tell them before they notice. A proactive email during an outage ("We\'re aware and fixing it") converts frustrated customers into loyal ones. Reactive support is expensive. Proactive support is relationship capital.',
  },
  {
    id: 7,
    title: 'Build a self-service layer before you need it',
    desc: 'A knowledge base, FAQ page, and onboarding video built at 30 customers handles 40% of tickets at 300 customers automatically. Every hour invested in self-service returns 10x in deflected tickets. Most founders build this too late.',
  },
  {
    id: 8,
    title: 'Support tone is a retention lever',
    desc: 'Customers forgive bugs. They don\'t forgive being spoken to like a ticket number. In SaaS, where switching costs are low, how you make people feel during a bad moment determines whether they stay. Define your support voice. Train it. Measure it.',
  },
  {
    id: 9,
    title: 'Your support SLA is a sales asset',
    desc: 'Enterprise buyers evaluate your support SLA before they evaluate your pricing. A published SLA — even a simple one — signals maturity. "We respond within 4 hours on business days" closes deals that "we\'ll get back to you" loses.',
  },
  {
    id: 10,
    title: 'AI doesn\'t replace support — it multiplies it',
    desc: 'The question is not "should I use AI in support?" It\'s "which 70% of tickets am I wasting human time on?" AI handles the predictable. Humans handle the relationships. The founder who gets this right scales support without scaling headcount.',
  },
];

export default function BestPracticesSection({ onBack }) {
  return (
    <section id="best-practices" style={{ marginTop: onBack ? '0px' : '80px', marginBottom: '80px' }}>
      {onBack && (
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            background: 'none',
            border: 'none',
            color: '#2FA866',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
            padding: 0,
            fontFamily: 'inherit',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#1F1F1F'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#2FA866'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Profile
        </motion.button>
      )}

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
        Insights
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
          marginBottom: '14px',
          lineHeight: '1.2',
        }}
      >
        10 Customer Support Best Practices for SaaS Founders
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
        Each point is a standalone insight — sharp enough to stand on its own in a conversation, a post, or a scorecard.
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
          marginBottom: '40px',
          transformOrigin: 'left center',
        }}
      />

      {/* 2-column Grid (Row 1: 1,2 | Row 2: 3,4 | etc.) */}
      <div
        className="best-practices-grid"
        style={{ gap: '20px' }}
      >
        {BEST_PRACTICES.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: idx * 0.05, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            style={{
              background: '#FFFFFF',
              border: '1px solid #D7F0DE',
              borderRadius: '14px',
              padding: '28px 24px',
              transition: 'box-shadow 0.22s ease, border-color 0.22s ease',
              boxShadow: '0 1px 4px rgba(50, 100, 70, 0.04)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(47,168,102,0.14), 0 2px 8px rgba(50,100,70,0.05)';
              e.currentTarget.style.borderColor = '#2FA866';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 1px 4px rgba(50, 100, 70, 0.04)';
              e.currentTarget.style.borderColor = '#D7F0DE';
            }}
          >
            {/* Point ID tag */}
            <div
              style={{
                fontSize: '11px',
                fontWeight: '700',
                color: '#2FA866',
                marginBottom: '16px',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {String(item.id).padStart(2, '0')}
            </div>

            {/* Point Title */}
            <h3
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#1F1F1F',
                marginBottom: '10px',
                lineHeight: '1.4',
                letterSpacing: '-0.01em',
              }}
            >
              {item.title}
            </h3>

            {/* Point Description */}
            <p
              style={{
                fontSize: '13px',
                color: '#5B5B5B',
                lineHeight: '1.65',
              }}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
