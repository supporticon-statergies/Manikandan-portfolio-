import { motion } from 'framer-motion';

export default function AboutMeSection() {
  return (
    <section id="about-me" style={{ marginBottom: '64px' }}>
      {/* Top Header Flex Container (Responsive) */}
      <div
        className="about-me-flex about-me-header"
        style={{ display: 'flex' }}
      >
        {/* Left: Heading and Content */}
        <div className="about-me-text" style={{ flex: 1, minWidth: 0 }}>
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
            About Me
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
              marginBottom: '20px',
              lineHeight: '1.2',
            }}
          >
            Manikandan
          </motion.h2>

          {/* About text */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            style={{
              fontSize: '15px',
              color: '#5B5B5B',
              lineHeight: '1.8',
              maxWidth: '82%',
              textAlign: 'justify',
            }}
            className="section-intro-text"
          >
            I am Manikandan, the proud Support Professional and Founder of Supporticon Strategies Pvt Ltd. We help SaaS Founders not to fail during their scaling stage due to lack of Customer Support system in place to handle the customers spike from 10 to 100 and more.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            style={{
              fontSize: '15px',
              color: '#7A7A7A',
              lineHeight: '1.8',
              maxWidth: '82%',
              marginTop: '12px',
              textAlign: 'justify',
            }}
            className="section-intro-text"
          >
            When they have 10 customers, Founder will directly handle their customer queries by call or WhatsApp. If that 10 becomes 100, they can't handle the same way they did. The result: more than 50% of customers leave in a month since they feel ignored.
          </motion.p>
        </div>

        {/* Right: Circular Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          style={{ flexShrink: 0 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}sir_profile.jpeg`}
            alt="Manikandan — Founder of Supporticon"
            className="profile-img"
            style={{
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #2FA866',
              boxShadow: '0 8px 28px rgba(47, 168, 102, 0.25)',
            }}
          />
        </motion.div>
      </div>

      {/* Soft green divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          height: '1.5px',
          background: 'linear-gradient(to right, #2FA866 0%, rgba(47,168,102,0.2) 60%, transparent 100%)',
          marginTop: '56px',
          borderRadius: '2px',
          transformOrigin: 'left center',
        }}
      />


    </section>
  );
}
