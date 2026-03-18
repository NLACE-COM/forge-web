import Link from "next/link";
import ForgeButton from "./ForgeButton";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeFooter({ content }) {
  return (
    <footer id="footer" className="site-footer tw:relative tw:overflow-hidden">
      <div className="site-footer__bg" aria-hidden="true" />
      <div className="site-footer__overlay" aria-hidden="true" />
      <div className="site-footer__content layout-shell tw:relative tw:z-[1]">
        <div className="site-footer__main tw:grid tw:grid-cols-[minmax(0,1fr)_auto] tw:gap-8 max-[980px]:tw:grid-cols-1">
          <div>
            <ForgeRevealHeading text={content.title} blockColor="rgba(0, 0, 0, 0.82)" />
            <div className="tw:mt-8">
              <ForgeButton href={content.cta.href} label={content.cta.label} variant="secondary" />
            </div>
          </div>
          <div className="site-footer__nav tw:grid tw:grid-cols-[1fr_1fr_auto] tw:gap-8 max-[1200px]:tw:grid-cols-1">
            <div>
              <div className="footer-label tw:mb-4 tw:font-[var(--family--2)] tw:text-[0.8rem] tw:uppercase tw:tracking-[0.04em]">Navigate</div>
              {content.navigate.map((item, index) => (
                <Link href={item.href} key={`${item.href}-${item.label}-${index}`} className="tw:block tw:py-1">
                  {item.label}
                </Link>
              ))}
            </div>
            <div>
              <div className="footer-label tw:mb-4 tw:font-[var(--family--2)] tw:text-[0.8rem] tw:uppercase tw:tracking-[0.04em]">Connect</div>
              {content.connect.map((item, index) => (
                <a href={item.href} key={`${item.href}-${item.label}-${index}`} className="tw:block tw:py-1">
                  {item.label}
                </a>
              ))}
            </div>
            <Link href="/" className="footer-topbutton" aria-label="Back to top">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                <path fill="currentColor" d="M8.8 12.205V4.487l3.55 3.55.887-.87L8 2.929 2.763 8.167l.887.87 3.55-3.55v7.718h1.6Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="site-footer__brand tw:mt-14">{content.brandLabel}</div>
        <div className="site-footer__meta tw:mt-8 tw:flex tw:items-center tw:justify-between tw:gap-4 max-[980px]:tw:flex-col max-[980px]:tw:items-start">
          <span>{content.copyright}</span>
          <Link href="/" className="footer-toplink">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
