export default function ForgeEyebrow({ children, className = "" }) {
  return (
    <div className={`eyebrow ${className}`.trim()}>
      <span className="eyebrow__dot" aria-hidden="true" />
      <span className="eyebrow__text">{children}</span>
    </div>
  );
}
