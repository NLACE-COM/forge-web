import ForgeButton from "./ForgeButton";
import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeCompanySection({ content }) {
  return (
    <section id="company" className="company-story layout-shell">
      <ForgeEyebrow>{content.eyebrow}</ForgeEyebrow>
      <div className="company-story__content">
        <div className="company-story__media">
          <img src={content.image} alt={content.imageAlt} />
        </div>
        <div className="company-story__copy">
          <ForgeRevealHeading text={content.title} />
          <div className="company-story__columns">
            <p>{content.columns[0]}</p>
            <p>
              {content.columns[1].split("\n\n").map((paragraph, index) => (
                <span key={`${paragraph.slice(0, 16)}-${index}`}>
                  {index > 0 ? <><br /><br /></> : null}
                  {paragraph}
                </span>
              ))}
            </p>
          </div>
          <div className="company-story__actions">
            <ForgeButton href={content.cta.href} label={content.cta.label} />
          </div>
        </div>
      </div>
    </section>
  );
}
