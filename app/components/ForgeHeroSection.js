import ForgeButton from "./ForgeButton";

export default function ForgeHeroSection({ introStage, introVisible, content }) {
  return (
    <>
      <div className="hero-stage__media">
        <div className="hero-media">
          <img
            className={`hero-poster hero-poster--base ${introStage === "video" || introStage === "done" ? "is-hidden" : ""}`}
            src="/media/hero-footer-poster.webp"
            alt=""
            aria-hidden="true"
          />
          <video
            className={`hero-video ${introStage === "video" || introStage === "done" ? "is-visible" : ""}`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/media/hero-footer-poster.webp"
            aria-hidden="true"
          >
            <source src="/media/hero-loop.mp4" type="video/mp4" />
            <source src="/wp-content/uploads/2025/10/integrated-loop-optimized.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {introVisible ? (
        <div className={`intro-overlay intro-overlay--${introStage}`}>
          <div className="intro-frame">
            <img
              className={`intro-poster ${introStage === "video" || introStage === "done" ? "is-hidden" : ""}`}
              src="/media/hero-footer-poster.webp"
              alt=""
              aria-hidden="true"
            />
            <video
              className={`intro-video ${introStage === "video" || introStage === "done" ? "is-visible" : ""}`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/media/hero-footer-poster.webp"
              aria-hidden="true"
            >
              <source src="/media/hero-loop.mp4" type="video/mp4" />
              <source src="/wp-content/uploads/2025/10/integrated-loop-optimized.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      ) : null}

      <section id="hero" className="hero">
        <div className="hero-copy layout-shell">
          <div className="hero-main">
            <div className="hero-headline">
              <div className="hero-eyebrow">{content.eyebrow}</div>
              <h1>{content.title}</h1>
            </div>
            <div className="hero-bottom">
              <div className="hero-support">
                <p>{content.body}</p>
                <div className="hero-microcopy">{content.microcopy}</div>
                <div className="hero-trust">
                  <div className="hero-trust__label">{content.trustLabel}</div>
                  <div className="hero-trust__logos" aria-label={content.trustLabel}>
                    {content.trustItems.map((item, index) => (
                      <span className="hero-trust__logo" key={`${item}-${index}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hero-actions">
                <ForgeButton href={content.cta.href} label={content.cta.label} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
