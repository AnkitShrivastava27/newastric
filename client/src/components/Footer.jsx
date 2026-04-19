import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo.jsx';
import { PlayStoreBadge } from './Navbar.jsx';
import './Footer.css';

const EXPLORE = [
  { to: '/features', label: 'Features' },
  { to: '/how-to-use', label: 'How it works' },
  { to: '/support', label: 'Support' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const SOCIALS = [
  { label: 'Twitter / X', href: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: 'LinkedIn', href: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
  { label: 'Instagram', href: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="divider"/>
      <div className="footer-top container">

        <div className="footer-brand">
          <Link to="/" aria-label="Astric home">
            <BrandLogo />
          </Link>
          <p>A focused AI business suite — CRM, finance, analytics, and AI in one clean Android workspace.</p>
          <div className="footer-tags">
            <span>Android-first</span>
            <span>Business AI</span>
            <span>Made in India 🇮🇳</span>
          </div>
          <div className="footer-socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="social-btn">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h5>Explore</h5>
          {EXPLORE.map((item) => (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ))}
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a>
        </div>

        <div className="footer-download">
          <h5>Download Astric</h5>
          <p>Available now on Google Play. Free plan included.</p>
          <PlayStoreBadge />
          <div className="store-badge-row">
            <div className="store-info">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              <span>Android 8.0+ supported</span>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"/>
      <div className="footer-bottom container">
        <p>© {year} Astric Technologies. All rights reserved.</p>
        <p>Crafted with care in India ✦</p>
      </div>
    </footer>
  );
}
