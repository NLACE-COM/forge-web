export default function ForgeInsightCards({ eyebrow, title, intro, cards }) {
  return (
    <section className="forge-insight-cards layout-shell">
      <div className="eyebrow">{eyebrow}</div>
      <div className="forge-insight-cards__content">
        <div className="forge-insight-cards__intro">
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
        <div className="forge-insight-cards__grid">
          {cards.map((card) => (
            <article className={`forge-insight-card forge-insight-card--${card.tone || "light"}`} key={card.title}>
              {card.icon ? <img src={card.icon} alt="" aria-hidden="true" className="forge-insight-card__icon" /> : null}
              <div className="forge-insight-card__eyebrow">{card.eyebrow}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
