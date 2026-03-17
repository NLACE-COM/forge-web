import ForgeButton from "./ForgeButton";
import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeNarrativeSection({ id, content, className = "" }) {
  return (
    <section id={id} className={`narrative-section layout-shell ${className}`.trim()}>
      <ForgeEyebrow>{content.eyebrow}</ForgeEyebrow>
      <div className="narrative-section__content">
        {content.title ? <ForgeRevealHeading text={content.title} /> : null}
        {content.body ? <p className="narrative-section__lead">{content.body}</p> : null}
        {content.intro ? <p className="narrative-section__lead">{content.intro}</p> : null}
        {content.description ? <p className="narrative-section__lead">{content.description}</p> : null}

        {content.primaryBullets ? (
          <ul className="narrative-section__list">
            {content.primaryBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}

        {content.checklistTitle ? (
          <div className="narrative-section__subgroup">
            <h3>{content.checklistTitle}</h3>
            <ul className="narrative-section__list">
              {content.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {content.coversTitle ? (
          <div className="narrative-section__grid">
            <div>
              <h3>{content.coversTitle}</h3>
              <ul className="narrative-section__list">
                {content.covers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{content.notTitle}</h3>
              <ul className="narrative-section__list">
                {content.notItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="narrative-section__subgroup">
                <h3>{content.takeawayTitle}</h3>
                <p>{content.takeaway}</p>
              </div>
            </div>
          </div>
        ) : null}

        {content.items ? (
          <ul className="narrative-section__list narrative-section__list--large">
            {content.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}

        {content.closing ? <p className="narrative-section__closing">{content.closing}</p> : null}

        {content.cta ? (
          <div className="narrative-section__actions">
            <ForgeButton href={content.cta.href} label={content.cta.label} />
          </div>
        ) : null}

        {content.microcopy ? <div className="section-microcopy">{content.microcopy}</div> : null}
      </div>
    </section>
  );
}
