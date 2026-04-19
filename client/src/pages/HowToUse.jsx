import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayStoreBadge } from '../components/Navbar.jsx';
import homeLight from '../assets/screens/home-light.jpeg';
import homeDark from '../assets/screens/home-dark.jpeg';
import aiLight from '../assets/screens/ai-light.jpeg';
import allServicesLight from '../assets/screens/all-services-light.jpeg';
import profileLight from '../assets/screens/profile-light.jpeg';
import loginScreen from '../assets/screens/login.jpeg';
import salesLight from '../assets/screens/sales-light.jpeg';
import kpiDark from '../assets/screens/kpi-dark.jpeg';
import './HowToUse.css';

const STEPS = [
  { title: 'Download from Play Store', desc: 'Search "Astric" on Google Play or tap the badge on this site. Free — no card needed.', screen: loginScreen },
  { title: 'Create your account', desc: 'Sign up in seconds. Your workspace is set up automatically on first login.', screen: loginScreen },
  { title: 'Explore the dashboard', desc: 'Your home screen shows priorities, metrics, and quick actions — all in one clear view.', screen: homeLight },
  { title: 'Set up your CRM', desc: 'Add your first lead or customer. Track status, history, and follow-ups from one screen.', screen: salesLight },
  { title: 'Try the AI assistant', desc: 'Tap the AI tab and ask anything — "Show my hottest leads" or "Summarize this week\'s cash flow."', screen: aiLight },
  { title: 'Browse all modules', desc: 'Hit "All Services" to explore invoicing, analytics, file storage, team, and collaboration tools.', screen: allServicesLight },
  { title: 'Customize your profile', desc: 'Set your business name, preferences, and notification settings in your profile.', screen: profileLight },
  { title: 'Track your KPIs', desc: 'Open the analytics module to see real-time performance, trends, and business health.', screen: kpiDark },
];

const TOKENS = [
  { badge: 'free', plan: 'Starter', label: 'Starter tokens', desc: 'AI usage is included in the free plan for core queries and summaries.' },
  { badge: 'pro', plan: 'Pro — ₹499/mo', label: 'Extended tokens', desc: 'More AI power for deeper queries, website generation, and richer insights.' },
  { badge: 'scale', plan: 'Scale — ₹999/mo', label: 'Highest limits', desc: 'Maximum AI capacity for teams with heavy daily usage and automation needs.' },
];

export default function HowToUse() {
  const [active, setActive] = useState(0);

  return (
    <div className="how-page">
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <div className="badge animate-fade-up"><span className="dot"/>How it works</div>
            <h1 className="animate-fade-up stagger-1">Up and running<br/><span className="blue-text">in minutes.</span></h1>
            <p className="page-hero-sub animate-fade-up stagger-2">
              Astric is designed to feel familiar from the first tap. Eight steps from install to fully operational business workspace.
            </p>
            <div style={{marginTop:'1.75rem'}} className="animate-fade-up stagger-3">
              <PlayStoreBadge />
            </div>
          </div>
          <div className="page-hero-side card-dark animate-fade-up stagger-2">
            <span className="side-label">Quick start</span>
            <h3>Install → Sign up → Start working.</h3>
            <p style={{marginTop:'.75rem'}}>The whole setup takes under 3 minutes. No complicated onboarding, no mandatory tutorials — just your workspace, ready to go.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--bg-alt)'}}>
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Step by step</p>
            <h2>Your first 8 steps<br/><span className="blue-text">with Astric.</span></h2>
            <div className="accent-line"/>
          </div>
          <div className="steps-layout">
            <div className="steps-list">
              {STEPS.map((step, i) => (
                <div key={i} className={`step-item${active === i ? ' active' : ''}`} onClick={() => setActive(i)}>
                  <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="step-body">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="steps-visual">
              <div className="step-screen">
                <img src={STEPS[active].screen} alt={STEPS[active].title}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section tokens-section">
        <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 20% 50%,rgba(26,108,255,.18),transparent 50%)',pointerEvents:'none'}}/>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div className="section-head reveal">
            <p className="section-label" style={{color:'var(--teal)'}}>AI tokens</p>
            <h2 style={{color:'white'}}>How AI usage<br/><span style={{color:'var(--gold)'}}>works.</span></h2>
            <div className="accent-line" style={{background:'linear-gradient(90deg,var(--gold),var(--gold-2))'}}/>
            <p style={{color:'rgba(230,242,255,.65)',marginTop:'1rem',maxWidth:'44ch'}}>
              Tokens power every AI interaction — queries, summaries, and website generation. Each plan includes a monthly allowance.
            </p>
          </div>
          <div className="tokens-grid">
            {TOKENS.map((t) => (
              <div key={t.plan} className="token-card">
                <span className={`token-badge ${t.badge}`}>{t.plan}</span>
                <h4>{t.label}</h4>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:'2.5rem',display:'flex',gap:'.85rem',flexWrap:'wrap'}}>
            <PlayStoreBadge />
            <Link to="/contact" className="btn btn-outline-inv">Ask about plans →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
