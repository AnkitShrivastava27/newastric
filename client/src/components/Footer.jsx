import { Link } from 'react-router-dom';
import { DownloadButton } from './Navbar.jsx';
import './Footer.css';

const QUICK_LINKS = [
  { to: '/features', label: 'Features' },
  { to: '/how-to-use', label: 'How it works' },
  { to: '/support', label: 'Support' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="divider" />
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo"><span className="footer-logo-mark">✦</span><span>Astric</span></Link>
          <p>A focused AI business suite for teams that want faster decisions, cleaner workflows, and a premium product feel.</p>
          <div className="footer-badges"><span>Private by design</span><span>Built for Android</span><span>Early access</span></div>
        </div>
        <div className="footer-col"><h5>Explore</h5>{QUICK_LINKS.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div>
        <div className="footer-col"><h5>Company</h5><Link to="/about">About</Link><Link to="/contact">Contact</Link><a href="#top" onClick={(e) => e.preventDefault()}>Privacy</a></div>
        <div className="footer-newsletter"><h5>Download the app</h5><p>The Play Store link can be added later without changing the layout.</p><div className="sub-form"><DownloadButton className="sub-btn" label="Download App" badge="Play Store" title="Download the app from Play Store" /></div><p className="sub-note">Link placeholder is ready for your final URL.</p></div>
      </div>
      <div className="divider" />
      <div className="container footer-bottom"><p>© {new Date().getFullYear()} Astric Technologies. All rights reserved.</p><p>Made with ✦ in India</p></div>
    </footer>
  );
}
