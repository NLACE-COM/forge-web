import ForgeMarqueeSection from "./ForgeMarqueeSection";
import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeMethodSection({ id, content }) {
  return (
    <>
      <section id={id} className="forge-method-section">
        <div className="layout-shell forge-method-section__header">
          <ForgeEyebrow>{content.eyebrow}</ForgeEyebrow>
          <div className="forge-method-section__intro">
            <ForgeRevealHeading text={content.title} />
            {content.intro ? <p>{content.intro}</p> : null}
          </div>
        </div>

        <div className="layout-shell forge-method-gridShell">
          <div className="forge-method-gridOffset" aria-hidden="true" />
          <div className="forge-method-grid">
            {content.cards.map((card) => (
              <article className={`forge-method-card forge-method-card--${card.tone} reveal-item`} key={card.id}>
                <div className="forge-method-card__surface" />
                <div className="forge-method-card__inner">
                  <div className="forge-method-card__top">
                    <span className="forge-method-card__id">{card.id}</span>
                    <span className="forge-method-card__dot" aria-hidden="true" />
                  </div>
                  <div className="forge-method-card__body">
                    <h3>{card.title}</h3>
                    {card.summary ? <p className="forge-method-card__summary">{card.summary}</p> : null}
                    {card.copy ? <p>{card.copy}</p> : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ForgeMarqueeSection text={content.closing} className="forge-method-marquee" />
    </>
  );
}
