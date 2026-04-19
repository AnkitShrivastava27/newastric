import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PlayStoreBadge } from '../components/Navbar.jsx';
import BrandLogo from '../components/BrandLogo.jsx';
import FeatureIcon from '../components/FeatureIcon.jsx';
import homeLight from '../assets/screens/home-light.jpeg';
import homeDark from '../assets/screens/home-dark.jpeg';
import allServicesLight from '../assets/screens/all-services-light.jpeg';
import allServicesDark from '../assets/screens/all-services-dark.jpeg';
import aiLight from '../assets/screens/ai-light.jpeg';
import aiDark from '../assets/screens/ai-dark.jpeg';
import profileLight from '../assets/screens/profile-light.jpeg';
import salesLight from '../assets/screens/sales-light.jpeg';
import kpiDark from '../assets/screens/kpi-dark.jpeg';
import './Landing.css';

const MODULES = [
  { icon: 'dashboard', title: 'Unified Dashboard', desc: 'All key metrics, tasks, and signals in one calm view.' },
  { icon: 'crm', title: 'CRM & Leads', desc: 'Track every lead, customer, and follow-up in one pipeline.' },
  { icon: 'email', title: 'Smart Email Hub', desc: 'Send and receive emails directly inside your workspace.' },
  { icon: 'ai', title: 'AI Assistant', desc: 'Ask in plain language. Get answers tied to your real data.' },
  { icon: 'billing', title: 'Billing & Plans', desc: 'Manage plans and usage without leaving the platform.' },
  { icon: 'finance', title: 'Finance', desc: 'Monitor cash flow, transactions, and financial health.' },
  { icon: 'invoice', title: 'Invoicing', desc: 'Create and track professional invoices without extra tools.' },
  { icon: 'analytics', title: 'Analytics', desc: 'Spot trends and patterns with clean, decision-ready charts.' },
  { icon: 'employees', title: 'Team Management', desc: 'Manage roles, profiles, and internal team structure.' },
  { icon: 'collaboration', title: 'Collaboration', desc: 'Coordinate in real time without switching apps.' },
  { icon: 'files', title: 'File Management', desc: 'Store and access documents in one secure workspace.' },
  { icon: 'integrations', title: 'Integrations', desc: 'Connect the tools you already use to extend workflows.' },
  { icon: 'projects', title: 'Projects & Tasks', desc: 'Assign ownership, track progress, move fast.' },
  { icon: 'secure', title: 'Secure Access', desc: 'Trust-first architecture with robust authentication.' },
  { icon: 'profile', title: 'Profile & Settings', desc: 'Personalize every corner of your workspace.' },
];

const SCREENSHOTS = [
  { src: homeLight, label: 'Dashboard' },
  { src: homeDark,  label: 'Dark Mode' },
  { src: aiLight,   label: 'AI Chat' },
  { src: aiDark,    label: 'AI Insights' },
  { src: salesLight,label: 'Sales View' },
  { src: kpiDark,   label: 'KPI Board' },
];

const PLANS = [
  { name: 'Starter', price: 'Free', desc: 'For individuals exploring the platform.', perks: ['Core AI assistant', 'Lead pipeline', 'Task management', 'Finance overview'], cta: 'Download Free' },
  { name: 'Pro', price: '₹499', desc: 'The balanced plan for growing businesses.', perks: ['Everything in Starter', 'Website generation', 'Priority support', 'Extra AI tokens'], cta: 'Choose Pro', featured: true },
  { name: 'Scale', price: '₹999', desc: 'Full system and highest limits for teams.', perks: ['Everything in Pro', 'Advanced AI usage', 'Higher token limits', 'Dedicated support'], cta: 'Choose Scale' },
];

function HeroSVG() {
  return (
    <svg viewBox="0 0 520 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg" aria-hidden="true">
      {/* Glow blobs */}
      <ellipse cx="260" cy="230" rx="200" ry="160" fill="url(#blob1)" opacity=".18"/>
      <ellipse cx="380" cy="100" rx="100" ry="80" fill="url(#blob2)" opacity=".12"/>

      {/* Grid lines */}
      {[60,120,180,240,300,360,420,480].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="460" stroke="rgba(26,108,255,.06)" strokeWidth="1"/>
      ))}
      {[60,120,180,240,300,360,420].map(y => (
        <line key={y} x1="0" y1={y} x2="520" y2={y} stroke="rgba(26,108,255,.06)" strokeWidth="1"/>
      ))}

      {/* Main card */}
      <rect x="60" y="60" width="380" height="260" rx="24" fill="url(#card1)" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>

      {/* Top bar */}
      <rect x="60" y="60" width="380" height="48" rx="24" fill="rgba(255,255,255,.04)"/>
      <circle cx="90" cy="84" r="6" fill="#1a6cff"/>
      <rect x="105" y="79" width="80" height="10" rx="5" fill="rgba(255,255,255,.18)"/>
      <rect x="380" y="76" width="44" height="16" rx="8" fill="rgba(26,108,255,.3)"/>

      {/* Sidebar items */}
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <rect x="80" y={130 + i * 36} width="22" height="22" rx="7" fill={i === 0 ? "rgba(26,108,255,.4)" : "rgba(255,255,255,.06)"}/>
          <rect x="112" y={135 + i * 36} width={60 + Math.random() * 30 | 0} height="8" rx="4" fill={i === 0 ? "rgba(255,255,255,.3)" : "rgba(255,255,255,.12)"}/>
        </g>
      ))}

      {/* Main area */}
      <rect x="170" y="120" width="240" height="76" rx="14" fill="rgba(255,255,255,.05)" stroke="rgba(26,108,255,.15)" strokeWidth="1"/>
      <rect x="184" y="135" width="80" height="9" rx="4" fill="rgba(255,255,255,.22)"/>
      <rect x="184" y="153" width="140" height="7" rx="3.5" fill="rgba(255,255,255,.10)"/>
      <rect x="184" y="167" width="100" height="7" rx="3.5" fill="rgba(255,255,255,.07)"/>

      {/* Stats row */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={174 + i * 82} y="212" width="70" height="54" rx="12" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.07)" strokeWidth="1"/>
          <rect x={184 + i * 82} y="224" width="30" height="14" rx="5" fill={['rgba(26,108,255,.5)','rgba(240,168,64,.4)','rgba(0,196,184,.35)'][i]}/>
          <rect x={184 + i * 82} y="244" width="40" height="7" rx="3.5" fill="rgba(255,255,255,.12)"/>
          <rect x={184 + i * 82} y="256" width="28" height="5" rx="2.5" fill="rgba(255,255,255,.07)"/>
        </g>
      ))}

      {/* AI chat bubble */}
      <rect x="290" y="300" width="150" height="80" rx="16" fill="rgba(255,255,255,.06)" stroke="rgba(26,108,255,.2)" strokeWidth="1"/>
      <rect x="305" y="316" width="20" height="20" rx="10" fill="rgba(26,108,255,.5)"/>
      <rect x="332" y="320" width="80" height="7" rx="3.5" fill="rgba(255,255,255,.18)"/>
      <rect x="332" y="332" width="55" height="6" rx="3" fill="rgba(255,255,255,.09)"/>
      <rect x="305" y="350" width="120" height="6" rx="3" fill="rgba(255,255,255,.09)"/>
      <rect x="305" y="362" width="90" height="6" rx="3" fill="rgba(255,255,255,.06)"/>

      {/* Floating metric chips */}
      <rect x="20" y="180" width="80" height="44" rx="12" fill="white" opacity=".92"/>
      <rect x="32" y="192" width="18" height="18" rx="6" fill="rgba(26,108,255,.15)"/>
      <rect x="58" y="195" width="30" height="8" rx="4" fill="rgba(8,18,42,.2)"/>
      <rect x="58" y="207" width="22" height="6" rx="3" fill="rgba(8,18,42,.1)"/>

      <rect x="430" y="300" width="76" height="44" rx="12" fill="white" opacity=".88"/>
      <rect x="442" y="312" width="12" height="12" rx="6" fill="rgba(240,168,64,.6)"/>
      <rect x="460" y="314" width="34" height="8" rx="4" fill="rgba(8,18,42,.2)"/>
      <rect x="460" y="326" width="24" height="6" rx="3" fill="rgba(8,18,42,.1)"/>

      {/* Defs */}
      <defs>
        <radialGradient id="blob1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a6cff"/>
          <stop offset="100%" stopColor="#1a6cff" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="blob2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0a840"/>
          <stop offset="100%" stopColor="#f0a840" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="card1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d1527"/>
          <stop offset="100%" stopColor="#070e1c"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function StatsSVG() {
  return (
    <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="stats-chart-svg" aria-hidden="true">
      <path d="M20 110 L70 80 L120 95 L170 55 L220 70 L270 35 L320 50 L370 20" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 110 L70 80 L120 95 L170 55 L220 70 L270 35 L320 50 L370 20 L370 120 L20 120Z" fill="url(#areaGrad)" opacity=".25"/>
      {[{x:70,y:80},{x:170,y:55},{x:270,y:35},{x:370,y:20}].map((pt,i) => (
        <circle key={i} cx={pt.x} cy={pt.y} r="4" fill="white" stroke="#1a6cff" strokeWidth="2"/>
      ))}
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1a6cff"/>
          <stop offset="100%" stopColor="#00c4b8"/>
        </linearGradient>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a6cff"/>
          <stop offset="100%" stopColor="#1a6cff" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function OrbDecor() {
  return (
    <svg viewBox="0 0 600 600" className="orb-decor" aria-hidden="true">
      <circle cx="300" cy="300" r="250" stroke="rgba(26,108,255,.06)" strokeWidth="1" fill="none"/>
      <circle cx="300" cy="300" r="180" stroke="rgba(26,108,255,.08)" strokeWidth="1" fill="none"/>
      <circle cx="300" cy="300" r="110" stroke="rgba(26,108,255,.1)" strokeWidth="1" fill="none"/>
      <circle cx="300" cy="300" r="250" stroke="rgba(26,108,255,.05)" strokeWidth="60" fill="none"/>
    </svg>
  );
}

export default function Landing() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.08 },
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb-1"/>
          <div className="hero-orb-2"/>
          <div className="hero-orb-3"/>
          <OrbDecor />
        </div>

        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="badge animate-fade-up">
              <span className="dot"/>
              Now live on Google Play
            </div>

            <h1 className="animate-fade-up stagger-1">
              One app for<br/>
              <span className="blue-text">every business</span><br/>
              move.
            </h1>

            <p className="hero-sub animate-fade-up stagger-2">
              Astric brings CRM, AI assistant, invoicing, analytics, team management, and finance into a single fluid Android workspace — so you spend less time switching and more time growing.
            </p>

            <div className="hero-actions animate-fade-up stagger-3">
              <PlayStoreBadge />
              <Link to="/features" className="btn btn-outline">Explore features</Link>
            </div>

            <div className="hero-trust animate-fade-up stagger-4">
              <span className="trust-pill">✓ Free plan available</span>
              <span className="trust-pill">✓ 15 business modules</span>
              <span className="trust-pill">✓ AI built-in</span>
            </div>

            <div className="hero-stats animate-fade-up stagger-5">
              <div className="hstat">
                <strong>15</strong>
                <span>modules</span>
              </div>
              <div className="hstat-divider"/>
              <div className="hstat">
                <strong>3</strong>
                <span>pricing tiers</span>
              </div>
              <div className="hstat-divider"/>
              <div className="hstat">
                <strong>∞</strong>
                <span>scalable flow</span>
              </div>
            </div>
          </div>

          <div className="hero-visual animate-fade-up stagger-2">
            <div className="hero-frame-wrap animate-float">
              <HeroSVG />
              <div className="hero-frame-chip chip-top">
                <span className="chip-dot"/>
                <span>AI Assistant active</span>
              </div>
              <div className="hero-frame-chip chip-bottom">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 18h14M7 15l3-3 2 2 4-5" stroke="#1a6cff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>+42% leads this month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot scroll strip */}
        <div className="screenshot-marquee">
          <div className="marquee-track animate-marquee">
            {[...SCREENSHOTS, ...SCREENSHOTS].map((shot, i) => (
              <div key={i} className="marquee-shot">
                <img src={shot.src} alt={shot.label}/>
                <span>{shot.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY SECTION ───────────────────────────── */}
      <section className="section intro-band">
        <div className="container intro-inner reveal">
          <p className="section-label">Why Astric</p>
          <div className="intro-grid">
            <div className="intro-item">
              <div className="intro-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M12 4.5v3.2M12 16.3v3.2M4.5 12h3.2M16.3 12h3.2M6.6 6.6l2.3 2.3M15.1 15.1l2.3 2.3M17.4 6.6l-2.3 2.3M8.9 15.1l-2.3 2.3"/><circle cx="12" cy="12" r="2.2"/>
                </svg>
              </div>
              <h4>Business-first AI</h4>
              <p>The AI understands your workspace context, not just generic prompts.</p>
            </div>
            <div className="intro-item">
              <div className="intro-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M4.5 4.5h15a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z"/><path d="M8.5 19.5h7M12 15.5v4"/>
                </svg>
              </div>
              <h4>One clean interface</h4>
              <p>Dark and light modes that stay crisp, readable, and navigation-friendly.</p>
            </div>
            <div className="intro-item">
              <div className="intro-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M12 4.5 18 7v5c0 4-2.8 6.5-6 7.5-3.2-1-6-3.5-6-7.5V7l6-2.5Z"/>
                </svg>
              </div>
              <h4>Secure & trusted</h4>
              <p>Built-in auth, secure storage, and privacy-forward architecture by design.</p>
            </div>
            <div className="intro-item">
              <div className="intro-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M12 2L2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h4>Android-native</h4>
              <p>Crafted for Android, optimized for mobile-first business workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODULES GRID ─────────────────────────────────── */}
      <section className="section modules-section">
        <div className="container">
          <div className="section-head center reveal">
            <p className="section-label">Core modules</p>
            <h2>Everything a business needs,<br/><span className="blue-text">organized clearly.</span></h2>
            <div className="accent-line" style={{margin:'1.1rem auto 0'}}/>
            <p style={{marginTop:'1rem', maxWidth:'44ch', marginLeft:'auto', marginRight:'auto'}}>
              15 interconnected modules covering every part of running a modern business — all under one roof.
            </p>
          </div>

          <div className="modules-grid">
            {MODULES.map((item, i) => (
              <article
                key={item.title}
                className={`module-card card reveal ${i % 3 === 0 ? 'reveal-left' : i % 3 === 1 ? 'reveal-up' : 'reveal-right'}`}
                style={{transitionDelay:`${i * 0.04}s`}}
              >
                <div className="mc-icon-wrap">
                  <FeatureIcon name={item.icon}/>
                </div>
                <div className="mc-body">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                <div className="mc-number">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP STORY SECTION ────────────────────────────── */}
      <section className="section story-section">
        <div className="container story-layout">
          <div className="story-copy reveal reveal-left">
            <p className="section-label">App preview</p>
            <h2>See Astric in<br/><span className="gold-text">real use.</span></h2>
            <div className="accent-line"/>
            <p className="section-note">
              From a focused dashboard to AI-powered insights and deep KPI tracking — Astric shows you what matters, exactly when you need it.
            </p>

            <div className="story-facts">
              <div className="fact-row">
                <div className="fact-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" width="16" height="16">
                    <path d="M5 18h14M7 15l3-3 2 2 4-5M16 9h.01"/>
                  </svg>
                </div>
                <div>
                  <strong>Analytics & KPIs</strong>
                  <span>Track business metrics with clean, readable charts</span>
                </div>
              </div>
              <div className="fact-row">
                <div className="fact-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" width="16" height="16">
                    <path d="M12 4.5v3.2M12 16.3v3.2M4.5 12h3.2M16.3 12h3.2"/><circle cx="12" cy="12" r="2.2"/>
                  </svg>
                </div>
                <div>
                  <strong>AI Assistant</strong>
                  <span>Ask questions in natural language, get real answers</span>
                </div>
              </div>
              <div className="fact-row">
                <div className="fact-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" width="16" height="16">
                    <rect x="4.5" y="4.5" width="6" height="6" rx="1.8"/><rect x="13.5" y="4.5" width="6" height="6" rx="1.8"/>
                    <rect x="4.5" y="13.5" width="6" height="6" rx="1.8"/><rect x="13.5" y="13.5" width="6" height="6" rx="1.8"/>
                  </svg>
                </div>
                <div>
                  <strong>Unified dashboard</strong>
                  <span>One view for all your business activity and priorities</span>
                </div>
              </div>
            </div>

            <Link to="/features" className="btn btn-outline" style={{marginTop:'1.5rem'}}>
              Explore all features →
            </Link>
          </div>

          <div className="story-gallery reveal reveal-right">
            <div className="gallery-main">
              <img src={homeDark} alt="Astric dashboard dark mode"/>
              <div className="gallery-overlay-chip">
                <StatsSVG/>
                <span>Revenue trending up</span>
              </div>
            </div>
            <div className="gallery-row">
              <div className="gallery-mini">
                <img src={aiLight} alt="AI assistant"/>
                <span>AI Chat</span>
              </div>
              <div className="gallery-mini">
                <img src={kpiDark} alt="KPI view"/>
                <span>KPI Board</span>
              </div>
              <div className="gallery-mini">
                <img src={salesLight} alt="Sales view"/>
                <span>Sales</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DARK FEATURE BAND ────────────────────────────── */}
      <section className="section dark-band">
        <div className="dark-band-bg">
          <div className="db-orb-1"/>
          <div className="db-orb-2"/>
          <svg className="db-grid" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dbGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dbGrid)"/>
          </svg>
        </div>

        <div className="container dark-band-inner">
          <div className="dark-band-copy reveal">
            <p className="section-label" style={{color:'var(--teal)'}}>Platform intelligence</p>
            <h2 style={{color:'white'}}>AI that works<br/><span style={{color:'var(--gold)'}}>with your data.</span></h2>
            <div className="accent-line" style={{background:'linear-gradient(90deg,var(--gold),var(--gold-2))'}}/>
            <p style={{color:'rgba(230,242,255,.7)', marginTop:'1rem', maxWidth:'40ch'}}>
              The AI assistant is built into the workspace, not bolted on. Ask about your leads, finances, or tasks and get instant, contextual answers.
            </p>
            <div style={{marginTop:'1.75rem', display:'flex', gap:'.75rem', flexWrap:'wrap'}}>
              <PlayStoreBadge />
              <Link to="/how-to-use" className="btn btn-outline-inv">See how it works</Link>
            </div>
          </div>

          <div className="dark-band-demo reveal reveal-right">
            <div className="demo-card">
              <div className="demo-header">
                <span className="demo-dot active"/>
                <span className="demo-label">Astric AI</span>
                <span className="demo-status">● Online</span>
              </div>
              <div className="demo-chat">
                <div className="demo-msg user">Show me this week's top leads.</div>
                <div className="demo-msg ai">
                  <div className="ai-icon-sm"/>
                  <div>
                    You have <strong>7 hot leads</strong> this week. Top: Ravi Sharma (₹2.4L deal), Meena Corp (follow-up due today), and 2 new inbound contacts.
                    <div className="ai-tags">
                      <span>CRM</span><span>High value</span><span>Follow-up</span>
                    </div>
                  </div>
                </div>
                <div className="demo-msg user">Generate an invoice for Ravi Sharma.</div>
                <div className="demo-msg ai">
                  <div className="ai-icon-sm"/>
                  <div>
                    Invoice <strong>#INV-1047</strong> created for Ravi Sharma — ₹2,40,000. PDF ready. Want me to send it now?
                    <div className="ai-tags">
                      <span>Invoice</span><span>Ready to send</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="demo-input-row">
                <div className="demo-input-mock">Ask anything about your business…</div>
                <div className="demo-send">→</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────── */}
      <section className="section pricing-section">
        <div className="container">
          <div className="section-head center reveal">
            <p className="section-label">Pricing</p>
            <h2>Simple plans.<br/><span className="blue-text">Built to scale with you.</span></h2>
            <div className="accent-line" style={{margin:'1.1rem auto 0'}}/>
            <p style={{marginTop:'1rem', maxWidth:'38ch', marginLeft:'auto', marginRight:'auto'}}>
              Start free, grow into Pro, or unlock the full platform with Scale.
            </p>
          </div>

          <div className="pricing-grid">
            {PLANS.map((plan, i) => (
              <div
                key={plan.name}
                className={`pricing-card reveal ${plan.featured ? 'featured reveal-up' : i === 0 ? 'reveal-left' : 'reveal-right'}`}
                style={{transitionDelay:`${i * 0.1}s`}}
              >
                {plan.featured && (
                  <div className="pricing-popular">
                    <span>Most popular</span>
                  </div>
                )}
                <div className="pricing-head">
                  <h3>{plan.name}</h3>
                  <div className="pricing-price">
                    <strong>{plan.price}</strong>
                    {plan.price !== 'Free' && <span>/ month</span>}
                  </div>
                </div>
                <p className="pricing-desc">{plan.desc}</p>
                <ul className="pricing-perks">
                  {plan.perks.map((perk) => (
                    <li key={perk}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12l4 4 10-10" stroke={plan.featured ? 'var(--blue)' : 'var(--teal)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {perk}
                    </li>
                  ))}
                </ul>
                {plan.price === 'Free'
                  ? <PlayStoreBadge className="pricing-download-btn"/>
                  : <Link to="/contact" className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'} pricing-btn`}>{plan.cta}</Link>
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card reveal">
            <div className="cta-bg">
              <div className="cta-orb-1"/>
              <div className="cta-orb-2"/>
              <svg className="cta-grid" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="ctaGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ctaGrid)"/>
              </svg>
            </div>

            <div className="cta-inner">
              <BrandLogo />
              <h2 style={{color:'white', marginTop:'1.5rem'}}>
                Your business,<br/><span style={{color:'var(--gold)'}}>fully connected.</span>
              </h2>
              <p style={{color:'rgba(230,242,255,.7)', marginTop:'.85rem', maxWidth:'40ch', marginLeft:'auto', marginRight:'auto'}}>
                Download Astric on Android today. Free to start — no credit card needed.
              </p>
              <div className="cta-actions">
                <PlayStoreBadge />
                <Link to="/contact" className="btn btn-outline-inv">Talk to the team</Link>
              </div>
              <div className="cta-note">
                Available now on Google Play · Android 8.0+ · Free plan included
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
