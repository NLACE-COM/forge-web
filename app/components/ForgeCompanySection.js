import ForgeButton from "./ForgeButton";
import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeCompanySection({ content }) {
  return (
    <section id="company" className="company-story layout-shell tw:pt-24">
      <ForgeEyebrow>{content.eyebrow}</ForgeEyebrow>
      <div className="company-story__content tw:grid tw:grid-cols-2 tw:gap-8 max-[980px]:tw:grid-cols-1">
        <div className="company-story__media tw:overflow-hidden tw:rounded-[30px]">
          <img className="tw:block tw:h-full tw:w-full tw:object-cover" src={content.image} alt={content.imageAlt} />
        </div>
        <div className="company-story__copy tw:flex tw:flex-col tw:gap-6">
          <ForgeRevealHeading text={content.title} />
          <div className="company-story__columns tw:grid tw:grid-cols-2 tw:gap-5 max-[980px]:tw:grid-cols-1">
            <p className="tw:m-0 tw:text-[1.02rem] tw:leading-[1.5] tw:text-[var(--ink-soft)]">{content.columns[0]}</p>
            <p className="tw:m-0 tw:text-[1.02rem] tw:leading-[1.5] tw:text-[var(--ink-soft)]">
              {content.columns[1].split("\n\n").map((paragraph, index) => (
                <span key={`${paragraph.slice(0, 16)}-${index}`}>
                  {index > 0 ? <><br /><br /></> : null}
                  {paragraph}
                </span>
              ))}
            </p>
          </div>
          <div className="company-story__actions tw:pt-2">
            <ForgeButton href={content.cta.href} label={content.cta.label} />
          </div>
        </div>
      </div>
    </section>
  );
}
