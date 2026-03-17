import ForgeButton from "./ForgeButton";
import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeApproachSection({ content }) {
  return (
    <section id="approach" className="approach-section layout-shell">
      <ForgeEyebrow>{content.eyebrow}</ForgeEyebrow>
      <div className="approach-section__content">
        <div className="approach-section__intro">
          <ForgeRevealHeading text={content.title} />
          <p>{content.intro}</p>
          <p>{content.body}</p>
        </div>
        <div className="approach-section__grid">
          <div className="approach-panel reveal-item">
            <h3>{content.notTitle}</h3>
            <ul>
              {content.notItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="approach-panel reveal-item">
            <h3>{content.yesTitle}</h3>
            <ul>
              {content.yesItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="approach-section__footer reveal-item">
          <p>{content.closing}</p>
          <ForgeButton href={content.cta.href} label={content.cta.label} />
        </div>
      </div>
    </section>
  );
}
