import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import BrandLogo from './BrandLogo.jsx';
import './Navbar.css';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/how-to-use', label: 'How it works' },
  { to: '/support', label: 'Support' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const PLAY_STORE_URL = import.meta.env.VITE_PLAYSTORE_URL || '#';

function PlayStoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 3.5L13.5 12 3 20.5V3.5Z" fill="#4a8eff"/>
      <path d="M3 3.5L13.5 12 8 17.5 3 20.5V3.5Z" fill="#1a6cff"/>
      <path d="M13.5 12L21 8l-7.5 4Z" fill="#f0a840"/>
      <path d="M13.5 12L21 16l-7.5-4Z" fill="#ffc96b"/>
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="m8.5 10.5 3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5 18h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function DownloadButton({ className = '', href = PLAY_STORE_URL, label = 'Download Astric', badge = 'Android', title = 'Android app link' }) {
  const isPlaceholder = !href || href === '#';
  return (
    <a
      href={isPlaceholder ? undefined : href}
      className={`btn-download ${className}`}
      onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
      aria-disabled={isPlaceholder ? 'true' : undefined}
      title={title}
      target={isPlaceholder ? undefined : '_blank'}
      rel={isPlaceholder ? undefined : 'noopener noreferrer'}
    >
      <DownloadIcon />
      <span>{label}</span>
      {badge ? <span className="cs-pill">{badge}</span> : null}
    </a>
  );
}

export function PlayStoreBadge({ className = '' }) {
  const isPlaceholder = !PLAY_STORE_URL || PLAY_STORE_URL === '#';
  return (
    <a
      href={isPlaceholder ? undefined : PLAY_STORE_URL}
      className={`playstore-badge ${className}`}
      onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
      target={isPlaceholder ? undefined : '_blank'}
      rel={isPlaceholder ? undefined : 'noopener noreferrer'}
      title="Download on Google Play"
    >
      <PlayStoreIcon />
      <span className="badge-text">
        <span className="badge-small">Get it on</span>
        <span className="badge-main">Google Play</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="nav-logo" aria-label="Astric home">
          <BrandLogo />
        </Link>

        <nav className="nav-links">
          {NAV.map((item) => (
            <NavLink
              key={item.to} to={item.to} end={item.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <PlayStoreBadge />
          <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            <span/><span/><span/>
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV.map((item) => (
          <NavLink
            key={item.to} to={item.to} end={item.to === '/'}
            className={({ isActive }) => `mob-link${isActive ? ' active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
        <div className="mob-actions">
          <PlayStoreBadge />
        </div>
      </div>
    </header>
  );
}
