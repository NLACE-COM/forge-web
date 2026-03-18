import ForgeButton from "./ForgeButton";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeFilterSection({ content }) {
  return (
    <section className="filter-section layout-shell tw:pt-[108px] tw:pb-[54px]">
      <div className="filter-section__inner tw:rounded-[34px] tw:bg-[#e9e8e5] tw:px-14 tw:py-[52px] max-[980px]:tw:px-6 max-[980px]:tw:py-8">
        <ForgeRevealHeading text={content.title} />
        <p className="tw:mt-6 tw:max-w-[760px] tw:text-[clamp(1.08rem,1.12vw,1.2rem)] tw:leading-[1.18] tw:tracking-[-0.03em] tw:text-[var(--ink-soft)]">{content.body}</p>
        <div className="filter-section__actions tw:mt-9 tw:flex tw:flex-wrap tw:gap-3">
          <ForgeButton
            href={content.primaryCta.href}
            label={content.primaryCta.label}
            variant="primary"
          />
          <ForgeButton
            href={content.secondaryCta.href}
            label={content.secondaryCta.label}
            variant="outlinePrimary"
          />
        </div>
      </div>
    </section>
  );
}
