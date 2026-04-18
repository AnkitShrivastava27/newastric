import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
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

export function DownloadButton({ className = '', href = PLAY_STORE_URL, label = 'Download App', badge = 'Live', title = 'Android app Now Available' }) {
  const isPlaceholder = !href || href === '#';

  return (
    <a
      href={isPlaceholder ? undefined : href}
      className={`btn-download btn-gold ${className}`}
      onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
      aria-disabled={isPlaceholder ? 'true' : undefined}
      title={title}
      target={isPlaceholder ? undefined : '_blank'}
      rel={isPlaceholder ? undefined : 'noopener noreferrer'}
    >
      <AndroidIcon />
      <span>{label}</span>
      {badge ? <span className="cs-pill">{badge}</span> : null}
    </a>
  );
}

export function AndroidIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.523 15.341A5 5 0 0 0 19 12a5 5 0 0 0-1.477-3.341l1.393-1.394a.75.75 0 0 0-1.06-1.06l-1.394 1.393A5 5 0 0 0 13 6.082V4.75a.75.75 0 0 0-1.5 0v1.332A5 5 0 0 0 8.538 7.598L7.144 6.205a.75.75 0 1 0-1.06 1.06l1.393 1.394A5 5 0 0 0 6 12a5 5 0 0 0 1.477 3.341L6.083 16.74a.75.75 0 1 0 1.061 1.06l1.394-1.393A5 5 0 0 0 11.5 17.918V19.25a.75.75 0 0 0 1.5 0v-1.332a5 5 0 0 0 2.962-1.511l1.394 1.393a.75.75 0 1 0 1.06-1.06l-1.393-1.399zM12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/>
    </svg>
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
          <span className="logo-mark">✦</span>
          <span className="logo-text">Astric</span>
        </Link>

        <nav className="nav-links">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <DownloadButton />
         
        </div>
      </div>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `mob-link${isActive ? ' active' : ''}`}>
            {item.label}
          </NavLink>
        ))}
        
      </div>
    </header>
  );
}
