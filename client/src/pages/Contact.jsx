import { useState } from 'react';
import './Contact.css';

const CONTACT_API = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api/contact` : '/api/contact';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <div className="badge animate-fade-up"><span className="dot"/>Contact</div>
            <h1 className="animate-fade-up stagger-1">Let's talk<br/><span className="blue-text">business.</span></h1>
            <p className="page-hero-sub animate-fade-up stagger-2">
              Questions about Astric, pricing, or enterprise plans? Reach out — we respond fast.
            </p>
          </div>
          <div className="page-hero-side card-dark animate-fade-up stagger-2">
            <span className="side-label">Response time</span>
            <h3>We typically reply within 24 hours.</h3>
            <p style={{marginTop:'.75rem'}}>Serious about your business tools? So are we. Let's find the right fit together.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--bg-alt)'}}>
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <div className="contact-block">
                <div className="ci-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><rect x="4" y="6" width="16" height="12" rx="3"/><path d="M6 8l6 5 6-5"/></svg>
                </div>
                <div className="ci-text">
                  <strong>Email us</strong>
                  <span>contact@astrictechnologies.com</span>
                </div>
              </div>
              <div className="contact-block">
                <div className="ci-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="ci-text">
                  <strong>Based in India</strong>
                  <span>Building for the world</span>
                </div>
              </div>
              <div className="contact-block">
                <div className="ci-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                </div>
                <div className="ci-text">
                  <strong>Support</strong>
                  <span>Use the app's built-in help or email us</span>
                </div>
              </div>
              <div className="card card-dark" style={{padding:'1.75rem', marginTop:'.5rem'}}>
                <p className="section-label" style={{color:'var(--teal)'}}>Available now</p>
                <h3>Download Astric on Google Play</h3>
                <p style={{marginTop:'.65rem'}}>Free plan included. No credit card required to start.</p>
              </div>
            </div>

            <div className="contact-form-card">
              {status === 'success' ? (
                <div className="form-success">
                  <h3>Message sent ✓</h3>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{marginBottom:'1.5rem'}}>Send us a message</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input id="name" className="input" placeholder="Your name" value={form.name} onChange={set('name')} required/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" className="input" placeholder="you@company.com" value={form.email} onChange={set('email')} required/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" className="input" placeholder="What's this about?" value={form.subject} onChange={set('subject')} required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" className="input" placeholder="Tell us more…" value={form.message} onChange={set('message')} required/>
                  </div>
                  {status === 'error' && <p style={{color:'#ef4444',marginBottom:'.75rem',fontSize:'.85rem'}}>Something went wrong. Please try again.</p>}
                  <button type="submit" className="btn btn-primary submit-btn" disabled={status==='loading'}>
                    {status === 'loading' ? 'Sending…' : 'Send message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
