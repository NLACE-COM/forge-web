import ForgeFooter from "./ForgeFooter";
import ForgeHeader from "./ForgeHeader";
import { forgeFooterContent, forgeNavLinks } from "../forge-content";

export default function ForgePageShell({
  children,
  ctaHref = "/contacto",
  ctaLabel = "Explorar tu sistema"
}) {
  return (
    <main className="site-shell site-shell--inner">
      <ForgeHeader navLinks={forgeNavLinks} ctaHref={ctaHref} ctaLabel={ctaLabel} />
      <div className="inner-page">{children}</div>
      <ForgeFooter content={forgeFooterContent} />
    </main>
  );
}
