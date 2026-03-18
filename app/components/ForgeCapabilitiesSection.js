export default function ForgeCapabilitiesSection({ sectionRef, isVisible, cards }) {
  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className={`capability-grid tw:grid tw:grid-cols-3 tw:gap-5 max-[1200px]:tw:grid-cols-2 max-[980px]:tw:grid-cols-1 ${isVisible ? "is-visible" : ""}`}
    >
      {cards.map((card) => (
        <article className={`capability-card capability-card--${card.tone} tw:relative tw:min-h-[360px] tw:overflow-hidden tw:rounded-[28px]`} key={card.id}>
          <div className="capability-card__reveal" />
          <div className="capability-card__inner tw:relative tw:z-[1] tw:flex tw:h-full tw:flex-col tw:p-7">
            <div className="capability-card__top tw:flex tw:items-center tw:justify-between">
              <span className="capability-card__id tw:font-[var(--family--2)] tw:text-[0.84rem] tw:uppercase tw:tracking-[0.04em]">{card.id}</span>
              <img src={card.icon} alt="" aria-hidden="true" className="capability-card__icon tw:h-9 tw:w-9 tw:object-contain" />
            </div>
            <div className="capability-card__bottom tw:mt-auto">
              <h3 className="tw:m-0 tw:text-[1.55rem] tw:leading-[1.04] tw:tracking-[-0.04em]">{card.title}</h3>
              <p className="tw:mt-4 tw:m-0 tw:text-[0.98rem] tw:leading-[1.45]">{card.copy}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
