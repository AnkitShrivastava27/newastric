import logo from '../assets/astric-logo.png';

export default function BrandLogo({ className = '', showWordmark = true, imageClassName = '' }) {
  return (
    <span className={`brand-logo ${className}`.trim()}>
      <img src={logo} alt="Astric" className={`brand-logo-image ${imageClassName}`.trim()} />
      {showWordmark ? <span className="brand-logo-text">Astric</span> : null}
    </span>
  );
}
