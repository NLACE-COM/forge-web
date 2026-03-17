import ForgeButton from "./ForgeButton";

export default function ForgeHeroSection({ introStage, introVisible, content }) {
  const trustTrack = [...content.trustItems, ...content.trustItems];
  const posterHidden = introStage === "video" || introStage === "done";

  return (
    <>
      <div className="hero-stage__media">
        <div className="hero-media">
          <img
            className={`hero-poster hero-poster--base ${posterHidden ? "is-hidden" : ""}`}
            src="/media/hero-footer-poster.webp"
            alt=""
            aria-hidden="true"
          />
          <video
            className="hero-video is-visible"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/media/hero-footer-poster.webp"
            aria-hidden="true"
          >
            <source src="/media/hero-loop.mp4?v=2" type="video/mp4" />
          </video>
        </div>
      </div>

      {introVisible ? (
        <div className={`intro-overlay intro-overlay--${introStage}`}>
          <div className="intro-frame" aria-hidden="true" />
        </div>
      ) : null}

      <section id="hero" className="hero">
        <div className="hero-copy layout-shell">
          <div className="hero-main">
            <div className="hero-headline">
              <div className="hero-stagger" style={{ "--stagger-index": 0 }}>
                <div className="hero-eyebrow">{content.eyebrow}</div>
              </div>
              <h1 className="hero-stagger" style={{ "--stagger-index": 1 }}>
                {content.title.split(" ").map((word, i) => (
                  <span key={i} className="hero-word-wrapper">
                    <span className="hero-word" style={{ "--word-index": i }}>{word}</span>
                  </span>
                ))}
              </h1>
            </div>
            <div className="hero-bottom">
              <div className="hero-support hero-stagger" style={{ "--stagger-index": 2 }}>
                <p>{content.body}</p>
                <div className="hero-microcopy">{content.microcopy}</div>
                <div className="hero-trust">
                  <div className="hero-trust__viewport" aria-label={content.trustLabel}>
                    <div className="hero-trust__logos">
                      {trustTrack.map((item, index) => (
                        <span className="hero-trust__logo" key={`${item.src}-${index}`}>
                          <img src={item.src} alt={item.alt} />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-actions hero-stagger" style={{ "--stagger-index": 3 }}>
                <ForgeButton href={content.cta.href} label={content.cta.label} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
