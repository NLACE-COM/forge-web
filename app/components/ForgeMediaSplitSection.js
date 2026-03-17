import ForgeButton from "./ForgeButton";
import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeMediaSplitSection({
  eyebrow,
  title,
  body,
  media,
  cta,
  reverse = false
}) {
  return (
    <section className={`forge-media-split layout-shell ${reverse ? "is-reverse" : ""}`}>
      <ForgeEyebrow>{eyebrow}</ForgeEyebrow>
      <div className="forge-media-split__content">
        <div className="forge-media-split__media">
          <img src={media.src} alt={media.alt} />
        </div>
        <div className="forge-media-split__copy">
          <ForgeRevealHeading text={title} />
          <p>{body}</p>
          {cta ? (
            <div className="forge-media-split__actions">
              <ForgeButton href={cta.href} label={cta.label} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
