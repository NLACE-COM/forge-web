import ForgeButton from "./ForgeButton";

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
      <div className="eyebrow">{eyebrow}</div>
      <div className="forge-media-split__content">
        <div className="forge-media-split__media">
          <img src={media.src} alt={media.alt} />
        </div>
        <div className="forge-media-split__copy">
          <h2>{title}</h2>
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
