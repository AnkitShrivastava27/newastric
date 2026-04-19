import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlayStoreBadge } from '../components/Navbar.jsx';
import './About.css';

const VALUES = [
  { icon: '⚡', title: 'Speed matters', desc: 'Direct, responsive, without unnecessary steps or friction.' },
  { icon: '🔒', title: 'Privacy first', desc: 'Transparent, controlled, ownership at every layer.' },
  { icon: '🧠', title: 'AI with context', desc: 'Answers that reflect your actual business data — not generic responses.' },
  { icon: '✨', title: 'Polished by default', desc: 'A refined layout that gives every interaction a premium feel.' },
];

const TIMELINE = [
  { year: '2025', event: 'Astric begins', detail: 'A compact business suite concept designed for mobile-first Indian entrepreneurs.' },
  { year: '2025', event: 'AI integration', detail: 'Built-in AI assistant, lead tracking, and workspace generation combined.' },
  { year: '2026', event: 'Live on Play Store', detail: 'Astric launches publicly on Google Play. Free plan available. Growing fast.' },
];

const TEAM = [
  { initial: 'F', name: '[Founder Name]', role: 'Founder & CEO', bio: 'Vision, product direction, and the drive to build something genuinely useful for business teams.' },
  { initial: 'C', name: '[Co-Founder Name]', role: 'Co-Founder & CTO', bio: 'Engineering, architecture, and making sure the product actually works beautifully.' },
  { initial: 'T', name: '[Team Member]', role: 'Product & Design', bio: 'User experience, interface polish, and every detail that makes the product feel right.' },
];

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 },
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <div className="badge animate-fade-up"><span className="dot"/>&nbsp;About Astric</div>
            <h1 className="animate-fade-up stagger-1">
              Built for people who<br/>
              <span className="blue-text">move quickly.</span>
            </h1>
            <p className="page-hero-sub animate-fade-up stagger-2">
              Astric is a focused AI business suite shaped to feel modern, compact, and easy to trust — for solo operators and growing teams alike.
            </p>
          </div>
          <div className="page-hero-side card-dark animate-fade-up stagger-2">
            <span className="side-label">Direction</span>
            <h3>One workspace. Fewer distractions. Stronger output.</h3>
            <p style={{marginTop:'.75rem'}}>The goal is to feel like a premium AI platform without losing the simplicity needed for daily work. That means cleaner navigation, faster answers, and a calmer interface.</p>
            <div style={{marginTop:'1.25rem'}}>
              <PlayStoreBadge />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--bg-soft)'}}>
        <div className="container mission-grid">
          <div className="card mission-card reveal">
            <p className="section-label">Mission</p>
            <h2>Make AI genuinely<br/><span className="blue-text">useful for business.</span></h2>
            <div className="accent-line"/>
            <p style={{marginTop:'1rem'}}>We are building a product that feels crisp enough for modern AI users and practical enough for real business operations — from first lead to final invoice.</p>
            <p style={{marginTop:'.75rem'}}>Fewer screens, clearer language, and a stronger sense of control from the first tap.</p>
          </div>
          <div className="card card-dark mission-quote reveal reveal-right">
            <p className="quote-mark">"</p>
            <p>Astric should feel like a sharp AI workspace, not another cluttered dashboard.</p>
            <span>— Product direction</span>
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--bg-alt)'}}>
        <div className="container">
          <div className="section-head center reveal">
            <p className="section-label">Core values</p>
            <h2>What we build around.</h2>
            <div className="accent-line" style={{margin:'1.1rem auto 0'}}/>
          </div>
          <div className="values-grid" style={{marginTop:'2.5rem'}}>
            {VALUES.map((v, i) => (
              <article key={i} className="card value-card reveal" style={{transitionDelay:`${i*0.08}s`}}>
                <span className="value-icon">{v.icon}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--bg-soft)'}}>
        <div className="container timeline-shell">
          <div className="section-head reveal">
            <p className="section-label">Journey</p>
            <h2>Where Astric has been,<br/><span className="gold-text">where it's going.</span></h2>
            <div className="accent-line"/>
          </div>
          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <div key={i} className="tl-item reveal" style={{transitionDelay:`${i*0.1}s`}}>
                <div className="tl-dot">{item.year}</div>
                <div className="tl-body">
                  <strong>{item.event}</strong>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--bg-alt)'}}>
        <div className="container">
          <div className="section-head center reveal">
            <p className="section-label">Team</p>
            <h2>The people behind it.</h2>
            <div className="accent-line" style={{margin:'1.1rem auto 0'}}/>
          </div>
          <div className="team-grid" style={{marginTop:'2.5rem'}}>
            {TEAM.map((member, i) => (
              <article key={i} className="card team-card reveal" style={{transitionDelay:`${i*0.1}s`}}>
                <div className="team-avatar">{member.initial}</div>
                <h4>{member.name}</h4>
                <span className="team-role">{member.role}</span>
                <p>{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--dark-1)', position:'relative', overflow:'clip'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 30% 50%,rgba(26,108,255,.18),transparent 55%)',pointerEvents:'none'}}/>
        <div className="container" style={{position:'relative',zIndex:1,textAlign:'center'}}>
          <div className="reveal">
            <p className="section-label" style={{color:'var(--teal)'}}>Join us</p>
            <h2 style={{color:'white'}}>Download Astric<br/><span style={{color:'var(--gold)'}}>today — it's free.</span></h2>
            <p style={{color:'rgba(230,242,255,.65)',marginTop:'1rem',maxWidth:'38ch',marginLeft:'auto',marginRight:'auto'}}>
              Start with the free plan. No credit card. Real AI, real business tools, in your pocket.
            </p>
            <div style={{display:'flex',gap:'.85rem',justifyContent:'center',flexWrap:'wrap',marginTop:'2rem'}}>
              <PlayStoreBadge />
              <Link to="/contact" className="btn btn-outline-inv">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
