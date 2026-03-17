import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgePageIntro({ eyebrow, title, intro, body, align = "left" }) {
  return (
    <section className={`forge-page-intro layout-shell forge-page-intro--${align}`}>
      <ForgeEyebrow>{eyebrow}</ForgeEyebrow>
      <div className="forge-page-intro__content">
        <ForgeRevealHeading text={title} />
        {intro ? <p className="forge-page-intro__lead">{intro}</p> : null}
        {body ? <p className="forge-page-intro__body">{body}</p> : null}
      </div>
    </section>
  );
}
