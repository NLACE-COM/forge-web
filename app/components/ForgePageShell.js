import ForgeFooter from "./ForgeFooter";
import ForgeHeader from "./ForgeHeader";
import { forgeFooterContent, forgeNavLinks } from "../forge-content";

export default function ForgePageShell({
  children,
  ctaHref = "/contacto",
  ctaLabel = "Explorar tu sistema"
}) {
  return (
    <main className="site-shell site-shell--inner tw:min-h-screen tw:bg-[var(--bg)]">
      <ForgeHeader navLinks={forgeNavLinks} ctaHref={ctaHref} ctaLabel={ctaLabel} />
      <div className="inner-page tw:pt-32 tw:pb-[120px] max-[980px]:tw:pt-28 max-[980px]:tw:pb-[88px]">{children}</div>
      <ForgeFooter content={forgeFooterContent} />
    </main>
  );
}
