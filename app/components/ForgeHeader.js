import ForgeBrand from "./ForgeBrand";

export default function ForgeHeader({ navLinks }) {
  return (
    <header className="topbar">
      <div className="topbar__inner layout-shell">
        <a className="brand" href="#hero" aria-label="Forge">
          <ForgeBrand />
        </a>
        <nav className="topnav" aria-label="Primary">
          {navLinks.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#diagnostic" className="topnav-cta">
            Conocer Forge
          </a>
        </nav>
      </div>
    </header>
  );
}
