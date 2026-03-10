export default function ForgeAudienceSection({ content }) {
  return (
    <section id="audience" className="audience-section layout-shell">
      <div className="eyebrow">{content.eyebrow}</div>
      <div className="audience-section__content">
        <div className="audience-section__main">
          <h2>{content.title}</h2>
          <p className="audience-section__lead">{content.body}</p>
          <ul className="audience-section__list">
            {content.primaryBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="audience-section__subgroup">
            <h3>{content.checklistTitle}</h3>
            <ul className="audience-section__list">
              {content.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="audience-section__aside">
          <h3>{content.asideTitle}</h3>
          <p>{content.asideBody}</p>
          <ul className="audience-section__list">
            {content.asideBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="audience-section__closing">{content.asideClosing}</p>
        </aside>
      </div>
    </section>
  );
}
