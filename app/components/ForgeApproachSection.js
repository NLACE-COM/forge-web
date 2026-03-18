import ForgeButton from "./ForgeButton";
import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeApproachSection({ content }) {
  return (
    <section id="approach" className="approach-section layout-shell tw:pt-24">
      <ForgeEyebrow>{content.eyebrow}</ForgeEyebrow>
      <div className="approach-section__content tw:flex tw:flex-col tw:gap-8">
        <div className="approach-section__intro tw:max-w-[820px]">
          <ForgeRevealHeading text={content.title} />
          <p className="tw:mt-5 tw:m-0 tw:text-[1.18rem] tw:leading-[1.24] tw:tracking-[-0.03em] tw:text-[var(--ink-soft)]">{content.intro}</p>
          <p className="tw:mt-4 tw:m-0 tw:text-[1rem] tw:leading-[1.5] tw:text-[rgba(34,47,48,0.76)]">{content.body}</p>
        </div>
        <div className="approach-section__grid tw:grid tw:grid-cols-2 tw:gap-5 max-[980px]:tw:grid-cols-1">
          <div className="approach-panel reveal-item tw:rounded-[28px] tw:bg-[rgba(17,17,17,0.03)] tw:p-7">
            <h3 className="tw:m-0 tw:text-[1.5rem] tw:tracking-[-0.04em]">{content.notTitle}</h3>
            <ul className="tw:mt-5 tw:grid tw:gap-3 tw:pl-5">
              {content.notItems.map((item) => (
                <li key={item} className="tw:text-[1rem] tw:leading-[1.4]">{item}</li>
              ))}
            </ul>
          </div>
          <div className="approach-panel reveal-item tw:rounded-[28px] tw:bg-[#111111] tw:p-7 tw:text-white">
            <h3 className="tw:m-0 tw:text-[1.5rem] tw:tracking-[-0.04em]">{content.yesTitle}</h3>
            <ul className="tw:mt-5 tw:grid tw:gap-3 tw:pl-5">
              {content.yesItems.map((item) => (
                <li key={item} className="tw:text-[1rem] tw:leading-[1.4] tw:text-[rgba(255,255,255,0.86)]">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="approach-section__footer reveal-item tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-4">
          <p className="tw:m-0 tw:max-w-[44ch] tw:text-[1.04rem] tw:leading-[1.4] tw:text-[var(--ink-soft)]">{content.closing}</p>
          <ForgeButton href={content.cta.href} label={content.cta.label} />
        </div>
      </div>
    </section>
  );
}
