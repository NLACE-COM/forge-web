import ForgeButton from "./ForgeButton";
import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";
import ScrollReveal from "./ScrollReveal";

export default function ForgeSystemsGridSection({
  id,
  sectionRef,
  isVisible,
  content,
  className = ""
}) {
  return (
    <section
      ref={sectionRef}
      id={id}
      className={`systems-grid-section ${className}`.trim()}
    >
      <div className="layout-shell systems-grid-section__header">
        <ForgeEyebrow>{content.eyebrow}</ForgeEyebrow>
        <div className="systems-grid-section__intro">
          {content.title ? <ForgeRevealHeading text={content.title} /> : null}
          {content.intro ? <p>{content.intro}</p> : null}
          {content.closing ? <p className="systems-grid-section__closing">{content.closing}</p> : null}
          {content.cta ? (
            <div className="systems-grid-section__actions">
              <ForgeButton href={content.cta.href} label={content.cta.label} />
            </div>
          ) : null}
        </div>
      </div>

      <ScrollReveal stagger={0.15}>
        <div className={`capability-grid capability-grid--four ${isVisible ? "is-visible" : ""}`}>
          {content.cards.map((card) => (
            <article className={`capability-card capability-card--${card.tone} reveal-item`} key={card.id}>
              <div className="capability-card__reveal" />
              <div className="capability-card__inner">
                <div className="capability-card__top capability-card__top--compact" />
                <div className="capability-card__bottom capability-card__bottom--rich">
                  {card.logo ? (
                    <div className="capability-card__logoWrap">
                      <img className="capability-card__logo" src={card.logo} alt={card.logoAlt ?? card.id} />
                    </div>
                  ) : (
                    <h3>{card.title ?? card.id}</h3>
                  )}
                  {card.summary ? <p className="capability-card__summary">{card.summary}</p> : null}
                  {card.copy ? <p>{card.copy}</p> : null}
                  {card.resolve ? (
                    <div className="capability-card__metaGroup capability-card__metaGroup--resolve">
                      <span>Resuelve</span>
                      <p>{card.resolve}</p>
                    </div>
                  ) : null}
                  {card.install ? (
                    <div className="capability-card__metaGroup capability-card__metaGroup--install">
                      <span>Instala</span>
                      <p>{card.install}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
