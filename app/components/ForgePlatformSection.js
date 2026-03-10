import ForgeButton from "./ForgeButton";

export default function ForgePlatformSection({
  sectionRef,
  isVisible,
  eyebrow,
  headingWords,
  body,
  cta
}) {
  return (
    <section id="platform" ref={sectionRef} className="platform-summary layout-shell">
      <div className="eyebrow">{eyebrow}</div>
      <div className="platform-summary__content">
        <h2 className={isVisible ? "is-visible" : ""}>
          {headingWords.map((word, index) => {
            const muted = index >= 8;

            return (
              <span
                key={`${word}-${index}`}
                className={`platform-summary__word${muted ? " is-muted" : ""}`}
                style={{ transitionDelay: `${index * 55}ms` }}
              >
                <span className="platform-summary__wordMask" />
                <span className="platform-summary__wordText">{word}</span>
              </span>
            );
          })}
        </h2>
        <p>{body}</p>
        <div className="platform-summary__actions">
          <ForgeButton href={cta.href} label={cta.label} />
        </div>
      </div>
    </section>
  );
}
