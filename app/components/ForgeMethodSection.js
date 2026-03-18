import ForgeMarqueeSection from "./ForgeMarqueeSection";
import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeMethodSection({ id, content }) {
  return (
    <>
      <section id={id} className="forge-method-section tw:pt-24">
        <div className="layout-shell forge-method-section__header tw:grid tw:grid-cols-[220px_minmax(0,1fr)] tw:gap-8 max-[980px]:tw:grid-cols-1">
          <ForgeEyebrow>{content.eyebrow}</ForgeEyebrow>
          <div className="forge-method-section__intro tw:max-w-[780px]">
            <ForgeRevealHeading text={content.title} />
            {content.intro ? <p className="tw:mt-5 tw:m-0 tw:text-[1.08rem] tw:leading-[1.45] tw:text-[var(--ink-soft)]">{content.intro}</p> : null}
          </div>
        </div>

        <div className="layout-shell forge-method-gridShell tw:mt-8 tw:grid tw:grid-cols-[220px_minmax(0,1fr)] tw:gap-8 max-[980px]:tw:grid-cols-1">
          <div className="forge-method-gridOffset max-[980px]:tw:hidden" aria-hidden="true" />
          <div className="forge-method-grid tw:grid tw:grid-cols-2 tw:gap-5 max-[980px]:tw:grid-cols-1">
            {content.cards.map((card) => (
              <article className={`forge-method-card forge-method-card--${card.tone} reveal-item tw:relative tw:overflow-hidden tw:rounded-[28px] ${card.tone === "dark" ? "tw:bg-[#111111] tw:text-white" : "tw:bg-[rgba(17,17,17,0.03)]"}`} key={card.id}>
                <div className="forge-method-card__surface" />
                <div className="forge-method-card__inner tw:relative tw:z-[1] tw:p-7">
                  <div className="forge-method-card__top tw:flex tw:items-center tw:justify-between">
                    <span className="forge-method-card__id tw:font-[var(--family--2)] tw:text-[0.9rem] tw:uppercase tw:tracking-[0.04em]">{card.id}</span>
                    <span className="forge-method-card__dot tw:h-3 tw:w-3 tw:rounded-full tw:bg-[var(--lime)]" aria-hidden="true" />
                  </div>
                  <div className="forge-method-card__body tw:mt-10">
                    <h3 className="tw:m-0 tw:text-[clamp(1.7rem,3vw,2.5rem)] tw:leading-[0.98] tw:tracking-[-0.05em]">{card.title}</h3>
                    {card.summary ? <p className="forge-method-card__summary tw:mt-4 tw:m-0 tw:text-[1.02rem] tw:leading-[1.38]">{card.summary}</p> : null}
                    {card.copy ? <p className="tw:mt-4 tw:m-0 tw:text-[0.98rem] tw:leading-[1.45]">{card.copy}</p> : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ForgeMarqueeSection text={content.closing} className="forge-method-marquee" />
    </>
  );
}
