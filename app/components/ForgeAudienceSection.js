import ForgeRevealHeading from "./ForgeRevealHeading";
import ForgeEyebrow from "./ForgeEyebrow";

export default function ForgeAudienceSection({ content }) {
  return (
    <section id="audience" className="audience-section layout-shell">
      <ForgeEyebrow>{content.eyebrow}</ForgeEyebrow>
      <div className="audience-section__content">
        <div className="audience-section__main">
          <ForgeRevealHeading text={content.title} />
          <p className="audience-section__lead">{content.body}</p>

          <div className="audience-section__cards">
            {content.primaryBullets.map((item, index) => (
              <article className="audience-card" key={item}>
                <div className="audience-card__index">{String(index + 1).padStart(2, "0")}</div>
                <p>{item}</p>
              </article>
            ))}
          </div>

          <div className="audience-section__subgroup">
            <h3>{content.checklistTitle}</h3>
            <div className="audience-section__signals">
              {content.checklist.map((item) => (
                <div className="audience-signal" key={item}>
                  <span className="audience-signal__dot" aria-hidden="true" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="audience-section__aside">
          <div className="audience-section__asideIntro">
            <h3>{content.asideTitle}</h3>
            <p>{content.asideBody}</p>
          </div>

          <div className="audience-section__asideList">
            {content.asideBullets.map((item) => (
              <div className="audience-asideItem" key={item}>
                <span className="audience-asideItem__mark" aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <p className="audience-section__closing">{content.asideClosing}</p>
        </aside>
      </div>
    </section>
  );
}
