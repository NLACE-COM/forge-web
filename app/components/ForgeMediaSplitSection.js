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
    <section className={`forge-media-split layout-shell ${reverse ? "is-reverse" : ""} tw:pt-24`.trim()}>
      <ForgeEyebrow>{eyebrow}</ForgeEyebrow>
      <div className={`forge-media-split__content tw:grid tw:grid-cols-2 tw:gap-8 max-[980px]:tw:grid-cols-1 ${reverse ? "lg:tw:[&>*:first-child]:tw:order-2 lg:tw:[&>*:last-child]:tw:order-1" : ""}`.trim()}>
        <div className="forge-media-split__media tw:overflow-hidden tw:rounded-[30px]">
          <img className="tw:block tw:h-full tw:w-full tw:object-cover" src={media.src} alt={media.alt} />
        </div>
        <div className="forge-media-split__copy tw:flex tw:flex-col tw:justify-center">
          <ForgeRevealHeading text={title} />
          <p className="tw:mt-5 tw:m-0 tw:max-w-[42ch] tw:text-[1.06rem] tw:leading-[1.5] tw:text-[var(--ink-soft)]">{body}</p>
          {cta ? (
            <div className="forge-media-split__actions tw:mt-8">
              <ForgeButton href={cta.href} label={cta.label} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
