import ForgeButton from "./ForgeButton";

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
        <div className="eyebrow">{content.eyebrow}</div>
        <div className="systems-grid-section__intro">
          {content.title ? <h2>{content.title}</h2> : null}
          {content.intro ? <p>{content.intro}</p> : null}
          {content.closing ? <p className="systems-grid-section__closing">{content.closing}</p> : null}
          {content.cta ? (
            <div className="systems-grid-section__actions">
              <ForgeButton href={content.cta.href} label={content.cta.label} />
            </div>
          ) : null}
        </div>
      </div>

      <div className={`capability-grid capability-grid--four ${isVisible ? "is-visible" : ""}`}>
        {content.cards.map((card) => (
          <article className={`capability-card capability-card--${card.tone}`} key={card.id}>
            <div className="capability-card__reveal" />
            <div className="capability-card__inner">
              <div className="capability-card__top capability-card__top--compact">
                <span className="capability-card__id">{card.id}</span>
              </div>
              <div className="capability-card__bottom capability-card__bottom--rich">
                <h3>{card.title ?? card.id}</h3>
                {card.summary ? <p className="capability-card__summary">{card.summary}</p> : null}
                {card.copy ? <p>{card.copy}</p> : null}
                {card.resolve ? (
                  <div className="capability-card__metaGroup">
                    <span>Resuelve</span>
                    <p>{card.resolve}</p>
                  </div>
                ) : null}
                {card.install ? (
                  <div className="capability-card__metaGroup">
                    <span>Instala</span>
                    <p>{card.install}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
