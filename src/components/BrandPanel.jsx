import { siteConfig } from '../config/siteConfig';

export default function BrandPanel() {
  return (
    <aside
      style={{
        background: '#FFFFFF',
        borderRight: '1px solid #D7F0DE',
        display: 'flex',
        flexDirection: 'column',
        padding: '48px 36px',
        minHeight: '100vh',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      {/* Logo */}
      <div
        style={{
          marginBottom: '40px',
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt={`${siteConfig.company.name} — ${siteConfig.company.tagline}`}
          style={{
            width: '100%',
            maxWidth: '220px',
            height: 'auto',
            display: 'block',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* Thin green divider */}
      <div
        style={{
          width: '32px',
          height: '2px',
          background: 'linear-gradient(to right, #2FA866, #34A853)',
          borderRadius: '2px',
          marginBottom: '32px',
        }}
      />

      {/* Company identity block */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#2FA866',
            marginBottom: '8px',
          }}
        >
          Company Profile
        </p>
        <p
          style={{
            fontSize: '13px',
            color: '#5B5B5B',
            lineHeight: '1.7',
            maxWidth: '220px',
          }}
        >
          A shareable introduction to who we are, what we do, and how to connect with us.
        </p>
      </div>

      {/* Bottom: year / tagline */}
      <div
        style={{
          marginTop: 'auto',
          paddingTop: '32px',
          borderTop: '1px solid #E8F5ED',
        }}
      >
        <p
          style={{
            fontSize: '11px',
            color: '#7A7A7A',
            letterSpacing: '0.05em',
          }}
        >
          © {new Date().getFullYear()} {siteConfig.company.name}
        </p>
        <p
          style={{
            fontSize: '11px',
            color: '#BABABA',
            marginTop: '2px',
          }}
        >
          {siteConfig.company.tagline}
        </p>
      </div>
    </aside>
  );
}
