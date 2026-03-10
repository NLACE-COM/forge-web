export default function ForgeCapabilitiesSection({ sectionRef, isVisible, cards }) {
  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className={`capability-grid ${isVisible ? "is-visible" : ""}`}
    >
      {cards.map((card) => (
        <article className={`capability-card capability-card--${card.tone}`} key={card.id}>
          <div className="capability-card__reveal" />
          <div className="capability-card__inner">
            <div className="capability-card__top">
              <span className="capability-card__id">{card.id}</span>
              <img src={card.icon} alt="" aria-hidden="true" className="capability-card__icon" />
            </div>
            <div className="capability-card__bottom">
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
