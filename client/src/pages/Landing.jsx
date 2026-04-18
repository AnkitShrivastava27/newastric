import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DownloadButton } from '../components/Navbar.jsx';
import './Landing.css';

const HIGHLIGHTS = [
  { title: 'AI assistant that understands your business', desc: 'Ask in plain English and get answers from your own data, not generic boilerplate.' },
  { title: 'Built-in workflows', desc: 'Leads, tasks, finance, and content generation live in one streamlined app.' },
  { title: 'Premium, focused UX', desc: 'A sharp interface with clear hierarchy, strong contrast, and fast navigation.' },
  { title: 'Ready for scale', desc: 'Designed to grow from early access to a real product ecosystem without rework.' },
];
const CAPABILITIES = [
  { label: 'Assist', value: 'Natural-language AI for business questions', note: 'Summaries, insights, and action prompts' },
  { label: 'Automate', value: 'Task, lead, and follow-up workflow management', note: 'Keep the team moving without clutter' },
  { label: 'Publish', value: 'AI-generated landing pages and websites', note: 'Preview, copy, and iterate in-app' },
  { label: 'Track', value: 'Finance snapshots and live reporting', note: 'See cash flow and revenue at a glance' },
];
const PLANS = [
  { name: 'Starter', price: 'Free', desc: 'For individuals and small teams exploring the platform.', perks: ['Core AI assistant', 'Lead pipeline', 'Task management', 'Finance overview'], cta: 'Start free' },
  { name: 'Pro', price: '₹499', desc: 'The balanced plan for growing businesses.', perks: ['Everything in Starter', 'Website generation', 'Priority support', 'Extra tokens'], cta: 'Get Pro', featured: true },
  { name: 'Scale', price: '₹999', desc: 'For teams that want the full system and highest limits.', perks: ['Everything in Pro', 'Advanced AI usage', 'Higher token limits', 'Dedicated support'], cta: 'Get Scale' },
];

export default function Landing() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-bg"><div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" /><div className="hero-grid" /></div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="badge animate-fade-up"><span>✦</span> Frontier-grade business AI</div>
            <h1 className="animate-fade-up" style={{ animationDelay: '0.08s' }}>Operate with <span className="gold-text">clarity</span>,<br />move with speed.</h1>
            <p className="hero-sub animate-fade-up" style={{ animationDelay: '0.16s' }}>Astric brings AI chat, task flow, lead tracking, finance, and website generation into one calm, high-performance workspace.</p>
            <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.24s' }}><DownloadButton label="Download App" badge="Play Store" title="Download the app from Play Store" /><Link to="/features" className="btn btn-outline">Explore features</Link></div>
            <div className="hero-points animate-fade-up" style={{ animationDelay: '0.36s' }}><span>Android-first</span><span>Private by design</span><span>Built for business teams</span></div>
          </div>
          <div className="hero-panel animate-fade-up" style={{ animationDelay: '0.22s' }}>
            <div className="panel-shell animate-float">
              <div className="panel-top"><span className="panel-dot" /><span>Astric AI Console</span><span className="panel-chip">Live</span></div>
              <div className="panel-chat"><div className="chat-row ai">What should I focus on today?</div><div className="chat-row user">3 overdue tasks, 12 hot leads, and one low-cash-flow alert.</div><div className="chat-row ai">Build a landing page for my bakery.</div><div className="chat-row user success">Draft created. Open preview or copy the HTML.</div></div>
              <div className="panel-stats"><div><strong>48</strong><span>Leads</span></div><div><strong>19</strong><span>Tasks</span></div><div><strong>92%</strong><span>Win rate</span></div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="trust-strip"><div className="container trust-grid"><div><p className="trust-label">Designed like a modern AI platform</p><h3>Minimal interface. Strong structure. Clear outputs.</h3></div><p className="trust-copy">The layout borrows the same sense of focus seen in Mistral and xAI: bold hero messaging, compact supporting copy, and a product-first visual rhythm.</p></div></section>
      <section className="section"><div className="container"><div className="section-head center reveal"><p className="section-label">What it does</p><h2>Everything important, in one place.</h2><div className="gold-line" style={{ margin: '1rem auto 0' }} /></div><div className="highlights-grid">{HIGHLIGHTS.map((item, index) => <div key={index} className="card highlight-card reveal" style={{ transitionDelay: `${index * 0.08}s` }}><h4>{item.title}</h4><p>{item.desc}</p></div>)}</div></div></section>
      <section className="section panel-section"><div className="container capabilities-layout"><div className="capabilities-copy reveal"><p className="section-label">Core capabilities</p><h2>Built for teams that want fewer tools and better outcomes.</h2><div className="gold-line" /><p className="section-note">Astric keeps your daily work connected — from first lead to final report.</p></div><div className="capabilities-list">{CAPABILITIES.map((item, index) => <div key={index} className="capability card reveal" style={{ transitionDelay: `${index * 0.07}s` }}><span className="capability-label">{item.label}</span><h4>{item.value}</h4><p>{item.note}</p></div>)}</div></div></section>
      <section className="section pricing-section"><div className="container"><div className="section-head center reveal"><p className="section-label">Plans</p><h2>Simple pricing, built to scale.</h2><div className="gold-line" style={{ margin: '1rem auto 0' }} /></div><div className="pricing-grid">{PLANS.map((plan, index) => <div key={index} className={`pricing-card card reveal${plan.featured ? ' featured' : ''}`} style={{ transitionDelay: `${index * 0.08}s` }}>{plan.featured && <div className="featured-pill">Most popular</div>}<span className="pricing-name">{plan.name}</span><div className="pricing-price">{plan.price}<small>/mo</small></div><p className="pricing-desc">{plan.desc}</p><ul className="pricing-perks">{plan.perks.map((perk) => <li key={perk}><span>✓</span>{perk}</li>)}</ul><Link to="/contact" className={`btn ${plan.featured ? 'btn-gold' : 'btn-outline'} pricing-btn`}>{plan.cta}</Link></div>)}</div><p className="pricing-note">Early access is free to join. Paid plans can be refined later without changing the structure.</p></div></section>
      <section className="section final-cta"><div className="container"><div className="cta-card reveal"><p className="section-label">Ready when you are</p><h2>Join the waitlist and shape the next version of Astric.</h2><p>Be first in line for the Android release, feature updates, and launch announcements.</p><div className="cta-actions"><Link to="/contact" className="btn btn-gold">Get early access</Link><Link to="/support" className="btn btn-outline">Read support</Link></div></div></div></section>
    </div>
  );
}
