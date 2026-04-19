import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FeatureIcon from '../components/FeatureIcon.jsx';
import BrandLogo from '../components/BrandLogo.jsx';
import { PlayStoreBadge } from '../components/Navbar.jsx';
import './Product.css';

const MODULES = [
  { icon: 'dashboard', tag: 'Dashboard', title: 'Unified Dashboard', desc: 'Get a complete overview of your business from one central workspace.', points: ['One glance for daily priorities', 'Key metrics grouped clearly', 'Built for fast decision-making'] },
  { icon: 'crm', tag: 'CRM', title: 'CRM Management', desc: 'Organize customers, track leads, and turn opportunities into loyal clients.', points: ['Track every lead stage', 'Store customer history', 'Manage follow-ups with clarity'] },
  { icon: 'email', tag: 'Email', title: 'Smart Email Hub', desc: 'Send, receive, and manage emails directly inside your workspace.', points: ['Connected to customer context', 'Inbox flows with your workflow', 'Keep communication in one place'] },
  { icon: 'ai', tag: 'AI', title: 'AI Assistant', desc: 'Use built-in AI to get instant insights and smarter actions.', points: ['Ask business questions naturally', 'Generate summaries quickly', 'Automate thinking, not effort'] },
  { icon: 'billing', tag: 'Billing', title: 'Billing & Subscriptions', desc: 'Manage plans, usage, and scaling with a flexible billing system.', points: ['Simple plan control', 'Usage-aware growth', 'Easy subscription management'] },
  { icon: 'finance', tag: 'Finance', title: 'Finance Management', desc: 'Monitor transactions, track cash flow, and keep finances under control.', points: ['Income and expense visibility', 'Cash flow awareness', 'Health signals at a glance'] },
  { icon: 'invoice', tag: 'Invoice', title: 'Invoicing System', desc: 'Create, manage, and track invoices without extra tools.', points: ['Professional billing output', 'Track invoice status', 'Reduce manual admin work'] },
  { icon: 'analytics', tag: 'Analytics', title: 'Analytics & Insights', desc: 'Visualize performance and uncover trends that drive action.', points: ['Useful charts and summaries', 'Spot patterns quickly', 'Turn data into decisions'] },
  { icon: 'employees', tag: 'Team', title: 'Employee Management', desc: 'Manage your team profiles, roles, and internal organization.', points: ['Keep staff records clear', 'Structure team ownership', 'Support smoother operations'] },
  { icon: 'collaboration', tag: 'Collab', title: 'Team Collaboration', desc: 'Communicate with your team in real time without leaving the platform.', points: ['Fewer tool switches', 'Real-time coordination', 'Work stays aligned'] },
  { icon: 'files', tag: 'Files', title: 'File Management', desc: 'Store and manage documents in one secure workspace.', points: ['Central file access', 'Less hunting for assets', 'Simple document flow'] },
  { icon: 'integrations', tag: 'Integrations', title: 'Integrations', desc: 'Connect the tools you already use and extend the workflow.', points: ['Connect external services', 'Expand platform capability', 'Fit into your stack'] },
  { icon: 'projects', tag: 'Projects', title: 'Projects & Tasks', desc: 'Organize projects, assign tasks, and track progress efficiently.', points: ['Clear ownership', 'Progress tracking', 'From planning to execution'] },
  { icon: 'secure', tag: 'Security', title: 'Secure Access & Auth', desc: 'Built for trust with robust authentication and secure access controls.', points: ['Protect user access', 'Safer account handling', 'Trust-first architecture'] },
  { icon: 'profile', tag: 'Profile', title: 'Profile & Settings', desc: 'Personalize the workspace and tailor it to each user.', points: ['Custom preferences', 'Personal account control', 'Settings that feel easy'] },
];

const HIGHLIGHTS = [
  { icon: 'dashboard', title: 'Command-first layout', text: 'Focus on the signals that matter, without digging through menus.' },
  { icon: 'ai', title: 'AI that stays contextual', text: 'Ask inside the flow and get answers connected to your work.' },
  { icon: 'analytics', title: 'Readable by design', text: 'Dark and light surfaces stay high contrast and easy to scan.' },
];

const PLAN_FEATURES = [
  ['Feature', 'Starter', 'Pro', 'Scale'],
  ['Core assistant', '✓', '✓', '✓'],
  ['Lead tracking', '✓', '✓', '✓'],
  ['Task management', '✓', '✓', '✓'],
  ['Finance overview', '✓', '✓', '✓'],
  ['Website generation', '—', '✓', '✓'],
  ['Extra AI usage', '—', 'Optional', 'Higher limits'],
  ['Priority support', '—', '✓', '✓'],
];

export default function Product() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.12 },
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="product-page">
      <section className="page-hero page-hero-product">
        <div className="container page-hero-grid">
          <div>
            <div className="badge animate-fade-up"><span className="dot"/>Features</div>
            <h1 className="animate-fade-up" style={{ animationDelay: '0.08s' }}>
              One product.
              <br />
              <span className="gold-text">Many business modules.</span>
            </h1>
            <p className="page-hero-sub animate-fade-up" style={{ animationDelay: '0.16s' }}>
              Astric combines business AI, CRM, finance, billing, analytics, and team workflows in one connected platform.
            </p>
            <div className="hero-mini-row animate-fade-up stagger-3">
              <span>Clean hierarchy</span>
              <span>Premium motion</span>
              <span>Readable surfaces</span>
            </div>
            <div style={{marginTop:'1.5rem'}} className="animate-fade-up stagger-4">
              <PlayStoreBadge />
            </div>
          </div>
          <div className="page-hero-side card-dark animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="page-hero-side-logo"><BrandLogo showWordmark={false} /></div>
            <span className="side-label">System view</span>
            <h3>Built like one unified workspace.</h3>
            <p>Every module uses the same visual language, so the product feels consistent from the first screen to the deepest workflow.</p>
            <div className="side-metrics">
              <div>
                <strong>15</strong>
                <span>modules</span>
              </div>
              <div>
                <strong>3</strong>
                <span>tiers</span>
              </div>
              <div>
                <strong>1</strong>
                <span>experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section highlight-band">
        <div className="container highlight-grid">
          {HIGHLIGHTS.map((item, index) => (
            <article key={item.title} className={`card highlight-card reveal ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`} style={{ transitionDelay: `${index * 0.08}s` }}>
              <span className="highlight-icon"><FeatureIcon name={item.icon} /></span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container module-grid">
          {MODULES.map((item, index) => (
            <article key={item.title} className={`card module-card reveal ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`} style={{ transitionDelay: `${index * 0.05}s` }}>
              <div className="module-topline">
                <span className="module-tag">{item.tag}</span>
                <span className="module-index">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <span className="module-icon-wrap" aria-hidden="true"><FeatureIcon name={item.icon} /></span>
              <div className="module-watermark" aria-hidden="true">
                <BrandLogo showWordmark={false} className="module-watermark-logo" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}><span>•</span>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section compare-section" id="pricing">
        <div className="container">
          <div className="section-head center reveal">
            <p className="section-label">Plan comparison</p>
            <h2>Choose the level that fits your pace.</h2>
            <div className="gold-line" style={{ margin: '1rem auto 0' }} />
          </div>
          <div className="table-wrap reveal">
            <table className="compare-table">
              <thead>
                <tr>
                  {PLAN_FEATURES[0].map((head) => <th key={head}>{head}</th>)}
                </tr>
              </thead>
              <tbody>
                {PLAN_FEATURES.slice(1).map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td className="highlight-col">{row[2]}</td>
                    <td>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="compare-cta reveal">
            <Link to="/contact" className="btn btn-gold">Contact the team</Link>
            <Link to="/support" className="btn btn-outline">View support</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
