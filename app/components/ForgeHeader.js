import Link from "next/link";
import ForgeBrand from "./ForgeBrand";

export default function ForgeHeader({
  navLinks,
  ctaHref = "/contacto",
  ctaLabel = "Explorar tu sistema"
}) {
  return (
    <header className="topbar">
      <div className="topbar__inner layout-shell">
        <Link className="brand" href="/" aria-label="Forge">
          <ForgeBrand />
        </Link>
        <nav className="topnav" aria-label="Primary">
          {navLinks.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href={ctaHref} className="topnav-cta">
            {ctaLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
