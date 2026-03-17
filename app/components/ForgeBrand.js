export default function ForgeBrand({ label = "Forge" }) {
  return (
    <span className="brand-logo" aria-hidden="true">
      <img className="brand-logo__image" src="/media/forge-logo-figma.svg" alt="" />
      <span className="brand-logo__text sr-only">{label}</span>
    </span>
  );
}
