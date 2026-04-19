import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Support.css';

const FAQS = {
  'Getting started': [
    { q: 'How do I download Astric?', a: 'Search for "Astric" on the Google Play Store, or use the download button on this site. It\'s available free on Android.' },
    { q: 'Is there a free plan?', a: 'Yes — the Starter plan is completely free with core modules including the AI assistant, lead pipeline, task management, and finance overview.' },
    { q: 'What Android version do I need?', a: 'Astric requires Android 8.0 (Oreo) or higher. It works best on Android 10 and above.' },
  ],
  'Features & modules': [
    { q: 'What does the AI assistant do?', a: 'The AI assistant is built into the workspace and can answer questions about your business data — leads, tasks, finances, and more — in natural language.' },
    { q: 'Can I generate invoices?', a: 'Yes. The Invoicing module lets you create, manage, and track professional invoices directly from the app, without needing any extra tools.' },
    { q: 'Is the CRM fully functional?', a: 'The CRM module includes lead tracking, customer history, follow-up management, and pipeline views — everything you need for a growing business.' },
  ],
  'Billing & plans': [
    { q: 'What\'s included in the Pro plan?', a: 'Pro (₹499/month) includes everything in Starter plus website generation, extra AI tokens, and priority support.' },
    { q: 'Can I cancel my subscription?', a: 'Yes, you can cancel anytime through your account settings. Your access continues until the end of the billing period.' },
    { q: 'How do I upgrade my plan?', a: 'Go to Billing in your profile settings, select your desired plan, and follow the payment steps. Upgrades take effect immediately.' },
  ],
  'Account & security': [
    { q: 'How is my data protected?', a: 'Astric uses encrypted storage, secure authentication, and follows privacy-first design principles. Your business data stays yours.' },
    { q: 'Can I use Astric on multiple devices?', a: 'Your account syncs across devices. Log in on any Android device and your workspace will be up to date.' },
    { q: 'How do I contact support?', a: 'Use the in-app help, or reach us at contact@astrictechnologies.com. We typically respond within 24 hours.' },
  ],
};

function FAQGroup({ title, items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="faq-group">
      <p className="faq-group-label">{title}</p>
      {items.map((item, i) => (
        <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
          <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
            {item.q}
            <svg className="faq-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
          </button>
          {open === i && <div className="faq-a">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}

export default function Support() {
  return (
    <div className="support-page">
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <div className="badge animate-fade-up"><span className="dot"/>Support</div>
            <h1 className="animate-fade-up stagger-1">Help &<br/><span className="blue-text">answers.</span></h1>
            <p className="page-hero-sub animate-fade-up stagger-2">
              Find answers to common questions, or reach out to the team directly. We're here to help.
            </p>
          </div>
          <div className="page-hero-side card-dark animate-fade-up stagger-2">
            <span className="side-label">Support</span>
            <h3>Fast answers for every question.</h3>
            <p style={{marginTop:'.75rem'}}>Browse the FAQ below, or contact us directly. Most questions answered under 24 hours.</p>
            <Link to="/contact" className="btn btn-outline-inv" style={{marginTop:'1.25rem', width:'fit-content'}}>Contact us →</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--bg-alt)'}}>
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">FAQ</p>
            <h2>Common questions,<br/><span className="blue-text">clear answers.</span></h2>
            <div className="accent-line"/>
          </div>
          <div className="faq-grid">
            {Object.entries(FAQS).map(([title, items]) => (
              <FAQGroup key={title} title={title} items={items}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
