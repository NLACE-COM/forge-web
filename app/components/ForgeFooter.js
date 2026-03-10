import ForgeButton from "./ForgeButton";

export default function ForgeFooter({ content }) {
  return (
    <footer id="footer" className="site-footer">
      <div className="site-footer__bg" aria-hidden="true" />
      <div className="site-footer__overlay" aria-hidden="true" />
      <div className="site-footer__content layout-shell">
        <div className="site-footer__main">
          <div>
            <h2>{content.title}</h2>
            <ForgeButton href={content.cta.href} label={content.cta.label} />
          </div>
          <div className="site-footer__nav">
            <div>
              <div className="footer-label">Navigate</div>
              {content.navigate.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <div>
              <div className="footer-label">Connect</div>
              {content.connect.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <a href="#hero" className="footer-topbutton" aria-label="Back to top">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                <path fill="currentColor" d="M8.8 12.205V4.487l3.55 3.55.887-.87L8 2.929 2.763 8.167l.887.87 3.55-3.55v7.718h1.6Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="site-footer__brand">{content.brandLabel}</div>
        <div className="site-footer__meta">
          <span>{content.copyright}</span>
          <a href="#hero" className="footer-toplink">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
