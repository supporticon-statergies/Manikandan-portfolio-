import { motion } from 'framer-motion';
import { Globe, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

// SVG brand icons as components
function LinkedInIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YouTubeIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    IconComponent: LinkedInIcon,
    href: siteConfig.social.linkedin,
    color: '#0A66C2',
    bg: 'rgba(10,102,194,0.08)',
    border: 'rgba(10,102,194,0.2)',
    description: 'Connect professionally',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    IconComponent: InstagramIcon,
    href: siteConfig.social.instagram,
    color: '#E1306C',
    bg: 'rgba(225,48,108,0.08)',
    border: 'rgba(225,48,108,0.2)',
    description: 'Behind the scenes',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    IconComponent: YouTubeIcon,
    href: siteConfig.social.youtube,
    color: '#FF0000',
    bg: 'rgba(255,0,0,0.08)',
    border: 'rgba(255,0,0,0.2)',
    description: 'Watch our content',
  },
  {
    id: 'website',
    label: 'Website',
    IconComponent: ({ size, color }) => <Globe size={size} color={color} />,
    href: siteConfig.social.website,
    color: '#16a34a',
    bg: 'rgba(22,163,74,0.08)',
    border: 'rgba(22,163,74,0.2)',
    description: 'Explore our platform',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    IconComponent: ({ size, color }) => <MessageCircle size={size} color={color} />,
    href: siteConfig.social.whatsapp,
    color: '#25D366',
    bg: 'rgba(37,211,102,0.08)',
    border: 'rgba(37,211,102,0.2)',
    description: 'Chat with us directly',
  },
  {
    id: 'email',
    label: 'Email',
    IconComponent: ({ size, color }) => <Mail size={size} color={color} />,
    href: siteConfig.social.email,
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.08)',
    border: 'rgba(14,165,233,0.2)',
    description: 'Send us a message',
  },
];

export default function SocialLinksGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {socialLinks.map((link, i) => {
        const { IconComponent } = link;
        return (
          <motion.a
            key={link.id}
            id={`social-link-${link.id}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2.5 p-4 rounded-2xl transition-all duration-200 group"
            style={{
              background: '#FFFFFF',
              border: `1.5px solid #D7F0DE`,
              textDecoration: 'none',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
            whileHover={{ y: -4, boxShadow: `0 12px 32px ${link.bg}` }}
            whileTap={{ scale: 0.96 }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: link.bg, border: `1px solid ${link.border}` }}
            >
              <IconComponent size={20} color={link.color} />
            </div>
            <div className="text-center">
              <p className="text-xs font-bold" style={{ color: '#1F1F1F', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {link.label}
              </p>
              <p className="text-xs mt-0.5" style={{ color: '#7A7A7A' }}>
                {link.description}
              </p>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}
