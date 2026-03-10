export default function ForgeBrand({ label = "Forge" }) {
  return (
    <span className="brand-logo" aria-hidden="true">
      <span className="brand-logo__mark" />
      <span className="brand-logo__text">{label}</span>
    </span>
  );
}
