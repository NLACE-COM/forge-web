import ForgeRevealHeading from "./ForgeRevealHeading";
import ForgeEyebrow from "./ForgeEyebrow";

export default function ForgeAudienceSection({ content }) {
  return (
    <section id="audience" className="audience-section layout-shell tw:pt-24">
      <ForgeEyebrow>{content.eyebrow}</ForgeEyebrow>
      <div className="audience-section__content tw:grid tw:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] tw:gap-10 max-[980px]:tw:grid-cols-1">
        <div className="audience-section__main tw:flex tw:flex-col tw:gap-8">
          <ForgeRevealHeading text={content.title} />
          <p className="audience-section__lead tw:m-0 tw:max-w-[42ch] tw:text-[1.22rem] tw:leading-[1.25] tw:tracking-[-0.03em] tw:text-[var(--ink-soft)]">{content.body}</p>

          <div className="audience-section__cards tw:grid tw:grid-cols-3 tw:gap-4 max-[980px]:tw:grid-cols-1">
            {content.primaryBullets.map((item, index) => (
              <article className="audience-card tw:rounded-[24px] tw:bg-[rgba(17,17,17,0.03)] tw:p-6" key={item}>
                <div className="audience-card__index tw:mb-4 tw:font-[var(--family--2)] tw:text-[0.84rem] tw:uppercase tw:tracking-[0.04em] tw:text-[rgba(34,47,48,0.54)]">{String(index + 1).padStart(2, "0")}</div>
                <p className="tw:m-0 tw:text-[1.02rem] tw:leading-[1.35] tw:tracking-[-0.02em]">{item}</p>
              </article>
            ))}
          </div>

          <div className="audience-section__subgroup tw:flex tw:flex-col tw:gap-5">
            <h3 className="tw:m-0 tw:text-[1.5rem] tw:tracking-[-0.04em]">{content.checklistTitle}</h3>
            <div className="audience-section__signals tw:grid tw:grid-cols-2 tw:gap-4 max-[980px]:tw:grid-cols-1">
              {content.checklist.map((item) => (
                <div className="audience-signal tw:flex tw:items-start tw:gap-3 tw:rounded-[18px] tw:bg-white tw:p-5 tw:shadow-[0_10px_40px_rgba(17,17,17,0.04)]" key={item}>
                  <span className="audience-signal__dot tw:mt-[0.35rem] tw:h-[10px] tw:w-[10px] tw:flex-none tw:rounded-full tw:bg-[var(--lime)]" aria-hidden="true" />
                  <p className="tw:m-0 tw:text-[0.98rem] tw:leading-[1.4]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="audience-section__aside tw:rounded-[28px] tw:bg-[#111111] tw:p-7 tw:text-white max-[640px]:tw:rounded-[18px]">
          <div className="audience-section__asideIntro tw:flex tw:flex-col tw:gap-4">
            <h3 className="tw:m-0 tw:text-[1.6rem] tw:tracking-[-0.04em]">{content.asideTitle}</h3>
            <p className="tw:m-0 tw:text-[1rem] tw:leading-[1.45] tw:text-[rgba(255,255,255,0.74)]">{content.asideBody}</p>
          </div>

          <div className="audience-section__asideList tw:mt-6 tw:flex tw:flex-col tw:gap-4">
            {content.asideBullets.map((item) => (
              <div className="audience-asideItem tw:flex tw:items-start tw:gap-3" key={item}>
                <span className="audience-asideItem__mark tw:mt-[0.45rem] tw:h-2.5 tw:w-2.5 tw:flex-none tw:rounded-full tw:bg-[rgba(255,255,255,0.82)]" aria-hidden="true" />
                <p className="tw:m-0 tw:text-[0.98rem] tw:leading-[1.4] tw:text-[rgba(255,255,255,0.82)]">{item}</p>
              </div>
            ))}
          </div>

          <p className="audience-section__closing tw:mt-6 tw:m-0 tw:font-[var(--family--2)] tw:text-[0.95rem] tw:uppercase tw:tracking-[0.03em] tw:text-[rgba(255,255,255,0.54)]">{content.asideClosing}</p>
        </aside>
      </div>
    </section>
  );
}
