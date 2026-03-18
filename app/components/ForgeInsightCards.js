import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeInsightCards({ eyebrow, title, intro, cards }) {
  return (
    <section className="forge-insight-cards layout-shell tw:pt-24">
      <ForgeEyebrow>{eyebrow}</ForgeEyebrow>
      <div className="forge-insight-cards__content tw:flex tw:flex-col tw:gap-8">
        <div className="forge-insight-cards__intro tw:max-w-[780px]">
          <ForgeRevealHeading text={title} />
          {intro ? <p className="tw:mt-5 tw:m-0 tw:text-[1.08rem] tw:leading-[1.45] tw:text-[var(--ink-soft)]">{intro}</p> : null}
        </div>
        <div className="forge-insight-cards__grid tw:grid tw:grid-cols-3 tw:gap-5 max-[980px]:tw:grid-cols-1">
          {cards.map((card) => (
            <article className={`forge-insight-card forge-insight-card--${card.tone || "light"} tw:rounded-[28px] tw:p-7 ${card.tone === "dark" ? "tw:bg-[#111111] tw:text-white" : "tw:bg-[rgba(17,17,17,0.03)]"}`} key={card.title}>
              {card.icon ? <img src={card.icon} alt="" aria-hidden="true" className="forge-insight-card__icon tw:mb-5 tw:h-12 tw:w-12 tw:object-contain" /> : null}
              <div className="forge-insight-card__eyebrow tw:mb-4 tw:font-[var(--family--2)] tw:text-[0.82rem] tw:uppercase tw:tracking-[0.04em] tw:text-[rgba(34,47,48,0.5)]">{card.eyebrow}</div>
              <h3 className="tw:m-0 tw:text-[1.6rem] tw:leading-[1.04] tw:tracking-[-0.04em]">{card.title}</h3>
              <p className="tw:mt-4 tw:m-0 tw:text-[1rem] tw:leading-[1.45]">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
